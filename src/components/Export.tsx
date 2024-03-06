import React, { useState } from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useStore } from "@/store";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ReportPDF from "@/components/pdf/ReportPDF";
import { Label } from "@/components/ui/label";

interface Props {
  disabled: boolean;
}

function Export({ disabled = false }: Props) {
  const { data } = useStore();
  const [filename, setFilename] = useState(data?.["search-params"].username ?? "");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" disabled={disabled}>
          <Download className="h-4 w-4" />
          <span className="ml-2">Export</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Export results</DialogTitle>
        </DialogHeader>
        <div>
          <Label htmlFor="filename">Choose file name</Label>
          <Input
            id="filename"
            type="text"
            placeholder="Type file name"
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
            className="focus-visible:ring-transparent"
          />
        </div>
        <DialogFooter>
          {data && (
            <Button variant="outline" disabled={!filename}>
              <PDFDownloadLink
                document={
                  <ReportPDF
                    sites={data.sites}
                    searchParams={data?.["search-params"]}
                  />
                }
                fileName={filename + ".pdf"}
              >
                {() => <span>Export as pdf</span>}
              </PDFDownloadLink>
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export { Export };
