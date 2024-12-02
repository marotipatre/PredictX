// components/ConnectButton2.tsx
"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useChain } from "../../context/ChainContext";
import Button from "../Resusables/Button";

export const ConnectButton2 = () => {
  const { chainDetail } = useChain();
  console.log({ chainDetail });

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        const handleConnectClick = async () => {
          try {
            openConnectModal();
          } catch (error) {
            return null;
          }
        };

        // Added check if chainDetail is null/undefined and provide loading state
        if (!chainDetail) {
          return (
            <div className="flex flex-row items-center gap-2">
              <Button containerClassName="flex items-center">Loading...</Button>
            </div>
          );
        }

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    onClick={handleConnectClick}
                    containerClassName="flex items-center justify-center w-full"
                    icon="/images/Wallet.svg"
                  >
                    Connect
                  </Button>
                );
              }
              // Check if the connected chain is different from the selected chain
              if (!chain.id) {
                return (
                  <Button
                    onClick={openChainModal}
                    containerClassName="flex flex-row items-center gap-2 w-full"
                  >
                    Switch network
                  </Button>
                );
              }
              return (
                <Button
                  onClick={openAccountModal}
                  containerClassName="flex flex-row items-center justify-center w-full"
                  icon="/images/Wallet.svg"
                >
                  {account.displayName}
                </Button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
