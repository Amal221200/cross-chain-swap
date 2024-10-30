import "@rainbow-me/rainbowkit/styles.css";
import { AppProvider } from "@/components/providers/app-provider";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ChainCard } from "@/components/chain-card";
import { PingButton } from "./components/ping-button";

function App() {
  
  return (
    <AppProvider>
      <main className="h-screen w-full flex items-center justify-center antialiased bg-background">
        <div className="container flex flex-col w-full items-center gap-8">
          <div className="gap-2 flex flex-col items-center">
            <div className="flex justify-center items-center gap-2">
              <div className="text-4xl tracking-tight font-bold">
                CrossChain Swap
              </div>
            </div>
            <p className="text-muted-foreground">
              Swap tokens between multiple chains
            </p>
          </div>
          <ConnectButton
            chainStatus={"full"}
            showBalance={false}
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "full",
            }}

          />
          <div className="flex gap-8 items-center">
            <ChainCard mode="from" />
            <PingButton />
            <ChainCard mode="to" />
          </div>
        </div>
      </main>
    </AppProvider>
  );
}

export default App;
