import React from "react";
import { Input } from "./ui/input";
import { useStore } from "@/store";

interface Props {
  disabled: boolean;
}

function Filter({ disabled = false }: Props) {
  const { setFilter, filter } = useStore();

  return (
    <div>
      <Input
        disabled={disabled}
        value={filter}
        placeholder="filter by website name"
        className="focus-visible:ring-transparent"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}

export { Filter };
