import React from "react";
import { Document, Font } from "@react-pdf/renderer";
import Cover from "./Cover";
import Results from "./Results";

function ReportPDF({ foundSites, searchParams }) {
  var date = new Date(searchParams["date"]);
  var dateLong =
    date.toLocaleString("en-US", { month: "long" }) +
    " " +
    date.getDate() +
    ", " +
    date.getFullYear();

  Font.registerEmojiSource({
    format: "png",
    url: "https://twemoji.maxcdn.com/2/72x72/",
  });

  return (
    <Document>
      <Cover dateLong={dateLong} searchParams={searchParams} />
      <Results
        dateLong={dateLong}
        foundSites={foundSites}
        searchParams={searchParams}
      />
    </Document>
  );
}

export default ReportPDF;
