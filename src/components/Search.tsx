import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Loader2, Search as SearchIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { getResult } from "@/lib/api";
import { useStore } from "@/store";
import { Status } from "@/types/general";

function Search() {
  const { setData, setLoading, setError, loading } = useStore();
  const [searchParams, setSearchParams] = useSearchParams();

  async function hanldeSearch() {
    setLoading(true);
    try {
      const userName = searchParams.get("name");
      if (userName) {
        const data = await getResult(userName);
        const filtered = data.sites.filter((el) => el.status === Status.FOUND);
        setData({ "search-params": data["search-params"], sites: filtered });
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (searchParams.get("name")) {
      hanldeSearch();
    }
  }, []);

  return (
    <div className="flex items-center gap-2 md:w-96">
      <Input
        type="text"
        placeholder="Type username to search"
        className="w-36 bg-accent outline-none transition-all duration-300 focus:outline-none focus-visible:ring-transparent md:w-64 md:focus:w-[90%]"
        value={searchParams.get("name") ?? ""}
        onChange={(e) => {
          const { value } = e.target;
          if (value) {
            setSearchParams({ name: value });
          } else {
            setSearchParams({});
          }
        }}
        disabled={loading}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            hanldeSearch();
          }
        }}
      />
      <Button
        className="rounded-md border"
        variant="ghost"
        size="icon"
        onClick={hanldeSearch}
        disabled={loading || !searchParams.get("name")}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" size={100} strokeWidth={1} />
        ) : (
          <SearchIcon className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}

export { Search };
