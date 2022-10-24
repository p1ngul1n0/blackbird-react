import React from "react";
import styles from "./ExportModal.module.css";
import Spinner from "../Helpers/Spinner";
import ReportPDF from "./ReportPDF";
import { PDFDownloadLink } from "@react-pdf/renderer";

function ExportModal({ setExportModalVisible, data, foundSites }) {
  const [fileType, setfileType] = React.useState("");
  const [fileName, setFilename] = React.useState(
    data["search-params"]["username"]
  );
  function closeModal() {
    setExportModalVisible(false);
  }
  return (
    <>
      <div id="myModal" className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={closeModal}>
            &times;
          </span>
          <h2>Export results</h2>
          <div>
            <div style={{ display: "flex", width: "fit-content" }}>
              <p className={styles.boldText}>Filename:</p>
              <input
                style={{ margin: "auto", width: "fit-content" }}
                type="text"
                onChange={(e) => setFilename(e.target.value)}
                value={fileName}
              ></input>
              <p className={styles.boldText}>.pdf</p>
            </div>
            <div style={{ display: "flex", width: "fit-content" }}>
              <p className={styles.boldText}>Type:</p>
              <select
                style={{ margin: "auto" }}
                value={fileType}
                onChange={(e) => setfileType(e.target.value)}
              >
                <option value="">Select a option</option>
                <option value="PDF">PDF</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              {fileName && fileType && (
                <PDFDownloadLink
                  document={
                    <ReportPDF
                      foundSites={foundSites}
                      searchParams={data["search-params"]}
                    />
                  }
                  fileName={fileName + ".pdf"}
                >
                  {({ blob, url, loading, error }) =>
                    loading ? (
                      <button className={styles.buttonExport}>
                        <Spinner />
                      </button>
                    ) : (
                      <button className={styles.buttonExport}>DOWNLOAD</button>
                    )
                  }
                </PDFDownloadLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExportModal;
