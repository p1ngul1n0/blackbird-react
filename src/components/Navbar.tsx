import React from "react";
import { Github } from "lucide-react";
import { ThemeSwithcer } from "@/components/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import { Search } from "./Search";

function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0 z-20 w-screen bg-white dark:bg-card">
      <nav className="flex h-16 items-center justify-between border px-8 md:px-28">
        <div className="flex items-center gap-4">
          <div className="hidden text-2xl md:block">BLACKBIRD</div>
          <Search />
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwithcer />
          <a
            href="https://github.com/p1ngul1n0/blackbird"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-md border"
            >
              <Github className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </nav>
    </div>
  );
}

export { Navbar };
