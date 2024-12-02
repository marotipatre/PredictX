"use client";
import { useChain } from "@/context/ChainContext";
import React, { useEffect } from "react";
import Dropdown from "../Resusables/Dropdown";
const ChainDropdown = () => {
  const { setChainDetail, chainDetail } = useChain();
  const chains = [
    {
      name: "Citrea Testnet",
      url: "https://testnet.bitfinity.network/",
      id: "5115",
    },
    {
      name: "Rootstock Testnet",
      url: "https://testnet.bitfinity.network/",
      id: "31",
    },
  ];

  const savedChainId = localStorage.getItem("selectedChainId");
  useEffect(() => {
    if (savedChainId) {
      const savedChain = chains.find(
        (chain) => chain.id === savedChainId
      );
      if (savedChain) {
        setChainDetail(savedChain);
      }
    }
  }, [savedChainId,setChainDetail]);

  const handleSelectChain = (chain : any) => {
    localStorage.setItem("selectedChainId", chain.id);
  };

  return (
    <Dropdown
      items={chains}
      label="Supported Chains"
      onSelect={handleSelectChain}
      selectedItem={chainDetail}
    />
  );
};

export default ChainDropdown;
