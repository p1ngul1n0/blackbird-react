import React from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface Props {
  userName: string;
}

function WebSearch({ userName }: Props) {
  return (
    <Button
      variant="outline"
      onClick={() => window.open(`https://www.google.com/search?q=${userName}`)}
    >
      <Globe className="h-4 w-4" />
    </Button>
  );
}

export { WebSearch };
