import { ethers } from "hardhat";

async function createPool() {
  const PredictX_CONTRACT_NAME = "BuzziFi";
  const timeInSeoconds=(_mins:number)=>{
    return _mins*60;
  }
  const PredictXAddress = "0x06d7841983A17bB370c5CDE5f67B1C6C1e8f77Ed";
  const sender = new ethers.Wallet(
    process.env.DEPLOYER_ACCOUNT_PRIV_KEY as any,
    ethers.provider
  );

  console.log("Deployer address:", sender.address);
  console.log("Creating pool...");
  const myPredictXContract = await ethers.getContractAt(
    PredictX_CONTRACT_NAME,
    PredictXAddress,
    sender
  );
  const tx = await myPredictXContract.createPool("Akshay Kumar","Akshay Kumar",timeInSeoconds(10));
  await tx.wait();
  console.log("Pool Created Successfully:", tx.hash);
}

async function main() {
  await createPool();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
