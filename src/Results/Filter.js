import React from "react";
import ExportModal from "../Report/ExportModal";
import { cloudDomain } from "../Config/api";
import styles from "./Filter.module.css";

function Filter({ data, setFilteredResults, setError }) {
  const [searchParam, setSearchParam] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("FOUND");
  const [ExportModalIsVisible, setExportModalVisible] = React.useState(false);

  const foundSites = data["sites"].filter((obj) => obj.status === "FOUND");

  React.useEffect(() => {
    setFilteredResults(null);
    let results = data.sites.filter((result) =>
      result.app.toLowerCase().includes(searchParam.toLowerCase())
    );

    if (results.length > 0) {
      let searchResults = {
        sites: results,
      };
      setFilteredResults(searchResults);
    } else if (searchParam === "") {
      setFilteredResults(data);
    } else if (results.length === 0 && searchParam) {
      setError(
        <p>
          No results were found for "<span>{searchParam}</span>"
        </p>
      );
    }
  }, [searchParam]);

  React.useEffect(() => {
    setFilteredResults(null);
    let results = data.sites.filter((result) => result.status === statusFilter);

    if (results.length > 0) {
      let searchResults = {
        sites: results,
      };
      setFilteredResults(searchResults);
    } else if (searchParam === "") {
      setFilteredResults(data);
    } else if (results.length === 0 && searchParam) {
      setError(
        <p>
          No results were found for "<span>{statusFilter}</span>" status
        </p>
      );
    }
  }, [statusFilter]);

  function handleClick() {
    setSearchParam("");
    setStatusFilter("");
    setError();
  }

  return (
    <div className={styles.filter}>
      <div>
        <h1>
          Search for '{data["search-params"]["username"]}' in{" "}
          {data["search-params"]["sites-number"]} sites completed in{" "}
          {data["search-params"]["execution-time"]} seconds
        </h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {window.location.hostname == cloudDomain ? (
            <div></div>
          ) : (
            <p>
              Results saved to '
              {<span>{data["search-params"]["username"]}.json</span>}'
            </p>
          )}

          <button
            className={styles.buttonExport}
            onClick={() => setExportModalVisible(true)}
          >
            EXPORT AS ...
          </button>
          {ExportModalIsVisible && (
            <ExportModal
              foundSites={foundSites}
              setExportModalVisible={setExportModalVisible}
              data={data}
            />
          )}
        </div>

        <div>
          <label>Filter:</label>
          <input
            placeholder="Type a keyword"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
          />
          <button
            className={styles.buttonFilter}
            style={{
              backgroundColor: "#169723",
            }}
            onClick={(e) => setStatusFilter(e.target.innerText)}
          >
            FOUND
          </button>
          <button
            className={styles.buttonFilter}
            style={{
              backgroundColor: "#979797",
            }}
            onClick={(e) => setStatusFilter(e.target.innerText)}
          >
            NOT FOUND
          </button>
          <button
            className={styles.buttonFilter}
            style={{
              backgroundColor: "#9E1221",
            }}
            onClick={(e) => setStatusFilter(e.target.innerText)}
          >
            ERROR
          </button>
          <button
            className={styles.buttonFilter}
            style={{
              backgroundColor: "#D9D9D9",
            }}
            onClick={handleClick}
          >
            ALL
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
