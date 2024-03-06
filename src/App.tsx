import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useStore } from "@/store";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import { Title, Cards, Export, Filter, Navbar, WebSearch } from "@/components";

function App() {
  const { data, loading } = useStore();
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden pb-1 pt-16  dark:bg-primary-foreground">
          <div className="flex h-full">
            <div className="flex-1">
              <div className="h-full flex-1 flex-col space-y-6 p-8 px-8 md:flex md:px-28">
                <div className="flex flex-col items-start justify-between space-y-2 md:flex-row md:items-center">
                  <Title />
                  {data && (
                    <div className="flex items-center space-x-3">
                      <Filter disabled={loading} />
                      <WebSearch userName={data["search-params"].username} />
                      <Export disabled={loading} />
                    </div>
                  )}
                </div>
                <Separator className="bg-primary opacity-10" />
                {loading ? (
                  <div className="flex h-[400px] items-center justify-center">
                    <Loader2
                      className="h-14 w-14 animate-spin"
                      size={100}
                      strokeWidth={1}
                    />
                  </div>
                ) : (
                  data && <Cards sites={data.sites} />
                )}
              </div>
            </div>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
