import { Site } from "@/types/general";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useStore } from "@/store";

interface Props {
  sites: Site[];
}

function Cards({ sites }: Props) {
  const { filter } = useStore();
  return (
    <div className="grid grid-cols-1 gap-8 pt-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5">
      {sites
        .filter((el) => el.app.toLowerCase().includes(filter.toLowerCase()))
        .map((site) => {
          return (
            <a href={site.url} target="_blank" rel="noreferrer" key={site.id}>
              <Card className={cn("hover:cursor-pointer hover:bg-accent")}>
                <CardContent className="flex items-center gap-3 pt-4">
                  <Avatar className="h-7 w-7">
                    <AvatarImage
                      src={`https://simpleicons.org/icons/${site.app.toLowerCase().replace(/\s/g, "-")}.svg`}
                      alt={site.app}
                      className="dark:bg-primary"
                    />
                    <AvatarFallback>n/a</AvatarFallback>
                  </Avatar>
                  <div className="text-sm">{site.app}</div>
                  <p className="ml-auto text-sm text-muted-foreground">#{site.id}</p>
                </CardContent>
              </Card>
            </a>
          );
        })}
    </div>
  );
}

export { Cards };
