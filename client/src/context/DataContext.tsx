import React, { useState, useEffect, ReactNode } from "react";
import { useAccount } from "wagmi";
import { useEthersSigner } from "@/utils/signer";
import { ethers, BigNumber, Contract } from "ethers";
import toast from "react-hot-toast";
import {
  tokenAbi,
  mainContractABI,
  oracleAbi,
  oracleAddress,
  Addresses
} from "@/constant/index";

// Context types
interface DataContextProps {
  tokenBalance: BigNumber | undefined;
  getContractInstance: (
    contractAddress: string,
    contractAbi: any
  ) => Promise<Contract | undefined>;
  getTokenBalance: () => Promise<BigNumber | undefined>;
  createPool: () => Promise<void>;
  placeBet: (
    poolId: number,
    amount: BigNumber,
    targetScore: number
  ) => Promise<void>;
  claimBet: (poolId: number) => Promise<void>;
  getPoolsDetails: (poolId: number) => Promise<any>;
  totalPools: {} | undefined;
  userBetsData: [] | undefined;
  loading: boolean;
  setResultScore: (poolId: number, score: number) => Promise<void>;
}

interface DataContextProviderProps {
  children: ReactNode;
}

// Context initialization
const DataContext = React.createContext<DataContextProps | undefined>(
  undefined
);

const DataContextProvider: React.FC<DataContextProviderProps> = ({
  children,
}) => {
  const [tokenBalance, setTokenBalance] = useState<BigNumber | undefined>();
  const { address, chain } = useAccount();
  const [totalPools, setTotalPools] = useState<{}>({});
  const [userBetsData,setUserBetsData] = useState(null);
  const [activeChain, setActiveChainId] = useState<number | undefined>(
    chain?.id
  );
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setActiveChainId(chain?.id);
  }, [chain?.id]);

  const signer = useEthersSigner({ chainId: activeChain });

  const getContractInstance = async (
    contractAddress: string,
    contractAbi: any
  ): Promise<Contract | undefined> => {
    try {
      const contractInstance = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer
      );
      return contractInstance;
    } catch (error) {
      console.log("Error in deploying contract");
      return undefined;
    }
  };

  const getTokenBalance = async () => {
    try {
      console.log("Getting token balance",Addresses[activeChain]?.tokenAddress);
      const tokenContract = await getContractInstance(Addresses[activeChain]?.tokenAddress, tokenAbi);
      if (tokenContract) {
        console.log("Token contract", tokenContract);
        let balance = await tokenContract.balanceOf(address);
        balance = +balance.div(BigNumber.from(10).pow(18)).toString();
        setTokenBalance(balance);
        console.log("Token balance", balance);
        return balance;
      }
    } catch (error) {
      console.log("Error in getting token balance");
      return BigNumber.from(0);
    }
  };


  const createPool = async () => {
    console.log("Creating pool");
    let name ="Donald Trumph";
    let desc = "Donald Trumph is the 45th president of the United States";
    let id = toast.loading("Creating pool...");
    try {
      const mainContract = await getContractInstance(
        Addresses[activeChain]?.mainContractAddress,
        mainContractABI
      );
      if (mainContract) {
        const tx = await mainContract.createPool(name,desc);
        await tx.wait();
        await getPoolsDetails();
        toast.success("Pool created successfully",{id});
      }

      return;
    } catch (error) {
      console.log("Error in creating pool");
      toast.error("Error in creating pool",{id});
      return;
    }
  };

  const placeBet = async (
    poolId: number,
    amount: BigNumber,
    predictScore: number
  ) => {
    let id = await toast.loading("Placing bet...");
    try {
      const mainContract = await getContractInstance(
        Addresses[activeChain]?.mainContractAddress,
        mainContractABI
      );
      amount = ethers.utils.parseEther(amount.toString());
      const tokenContract = await getContractInstance(Addresses[activeChain]?.tokenAddress, tokenAbi);
      console.log("tokenContract", tokenContract);
      if (tokenContract) {
        const allowance = await tokenContract.allowance(
          address,
          Addresses[activeChain]?.mainContractAddress
        );
        if (allowance.lt(amount)) {
          const tx = await tokenContract.approve(Addresses[activeChain]?.mainContractAddress, amount);
          await tx.wait();
        }
      }

      if (mainContract) {
        const tx = await mainContract.placeBet(amount, predictScore, poolId);
        await tx.wait();

        await getPoolsDetails();
      }

      toast.success("Bet placed successfully", {
        id,
      });
      return;
    } catch (error) {
      toast.error("Error in placing bet", { id });
      return;
    }
  };

  const claimBet = async (poolId: number) => {
    console.log("Claiming bet",poolId);
    let id = await toast.loading("Claiming bet...");
    try {
      console.log("Claiming bet",Addresses[activeChain]?.mainContractAddress);
      const mainContract = await getContractInstance(
        Addresses[activeChain]?.mainContractAddress,
        mainContractABI
      );
      console.log("mainContract", mainContract);
      if (mainContract) {
        const tx = await mainContract.claimBet(poolId);
        await tx.wait();
        await getPoolsDetails();
        toast.success("Bet claimed successfully", { id });
      }
      return;
    } catch (error) {
      toast.error("Error in claiming bet", { id });
      return;
    }
  };

  const setResultScore = async (poolId: number, finalScore: number) => {
    let id = await toast.loading("Setting result...");
    try {
      const mainContract = await getContractInstance(
        Addresses[activeChain]?.mainContractAddress,
        mainContractABI
      );

      if (mainContract) {
        const tx = await mainContract.setResult(poolId, finalScore);
        await tx.wait();
        toast.success("Result set successfully",{id});
        await getPoolsDetails();
      }
      return;
    } catch (error) {
      console.log("Error in setting result");
      toast.error("Error in setting result",
      {id});
      return;
    }
  };

  const getOracleData =async ()=>{
    try {
      let oracleContract = await getContractInstance(oracleAddress,oracleAbi);
      console.log("oracleContract",oracleContract);
      console.log(signer);
      if(oracleContract){
        let data = await oracleContract.read(2);
        console.log("Oracle data",data);
        return data
      }
    } catch (error) {
      console.log("Error in getting oracle data",error);
    }
  }


  const getPoolsDetails = async () => {
    let poolDetails = {
      pool_data: {
        pools: [] as any,
      } as any,
    };
    setLoading(true);
    try {
      const mainContract = await getContractInstance(
        Addresses[activeChain]?.mainContractAddress,
        mainContractABI
      );
      console.log("mainContract", mainContract);
      let maxPoolId = await mainContract?.getPoolId();
      console.log("maxPoolId", maxPoolId);  
      let userBets=[] as any;
      if (mainContract) {
        for (let i = 0; i < maxPoolId; i++) {
          const pool = await mainContract.pools(i);
          let poolObj = {
            poolId: i,
            total_amount: +pool.total_amount
              .div(BigNumber.from(10).pow(18))
              .toString(),
            total_bets: +pool.total_bets.toString(),
            finalScore: +pool.finalScore.toString(),
            startTime: +pool.startTime.toString(),
            endTime: +pool.endTime.toString(),
            poolEnded: pool.poolEnded,
          };
          poolDetails.pool_data.pools.push(poolObj);
          let bets = await mainContract.getBets(i);
          console.log("bets", bets);
          let poolBets = [];
          for (let y = 0; y < bets.length; y++) {
            let betObj = {
              poolId: i,
              user: bets[y].user,
              amount: +bets[y].amount
                .div(BigNumber.from(10).pow(18))
                .toString(),
              targetScore: +bets[y].targetScore.toString(),
              claimedAmount: +bets[y].claimedAmount.toString(),
              claimed: bets[y].claimed,
              status:pool.poolEnded,
            };
            if (bets[y].user == address) {
              userBets.push(betObj);
            }
            poolBets.push(betObj);
          }
          await setUserBetsData(userBets);
          poolDetails.pool_data.pools[i].bets = poolBets;
        }
        console.log("poolDetails", poolDetails);
        setTotalPools(poolDetails?.pool_data?.pools);
        setLoading(false);
        return poolDetails;
      }
    } catch (error) {
      console.log(error, "Error in getting pool detail");
      setLoading(false);
      return poolDetails;
    }
  };
  useEffect(() => {
    if (!signer) return;
    getTokenBalance();
    getPoolsDetails();
    getOracleData();
  }, [signer]);

  return (
    <DataContext.Provider
      value={{
        tokenBalance,
        getContractInstance,
        getTokenBalance,
        createPool,
        placeBet,
        claimBet,
        getPoolsDetails,
        totalPools,
        userBetsData,
        loading,
        setResultScore
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = React.useContext(DataContext);
  if (context === undefined) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return context;
};

export default DataContextProvider;
