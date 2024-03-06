import { useStore } from "@/store";
import React from "react";
import { useSearchParams } from "react-router-dom";

function Title() {
  const { loading, data } = useStore();
  const [searchParams] = useSearchParams();
  return (
    <div>
      <h2 className="text-xl font-bold tracking-tight">
        {loading ? (
          "Please wait it may take a some time"
        ) : data ? (
          <span>
            Looked up{" "}
            <span className="text-muted-foreground">
              &apos;{data && data["search-params"]["username"]}
              &apos;{" "}
            </span>
            in {data && data["search-params"]["sites-number"]} websites
          </span>
        ) : (
          "Look up user on over 500 websites"
        )}
      </h2>
      <div className="text-sm text-muted-foreground">
        {loading
          ? `searching '${searchParams.get("name")}'....`
          : !data
            ? "Please enter a username above to search for."
            : `completed in ${data["search-params"]["execution-time"]} seconds`}
      </div>
    </div>
  );
}

export { Title };
