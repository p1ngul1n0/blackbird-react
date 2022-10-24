import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Card from "./Card";
import styles from "./Results.module.css";
import MetadataModal from "./MetadataModal";
import Filter from "./Filter";

function Results() {
  const { state } = useLocation();
  const { data, username } = state;
  const [filteredResults, setFilteredResults] = React.useState(null);
  const [error, setError] = React.useState();
  const [MetadataModalIsVisible, setMetadataModalVisible] =
    React.useState(false);
  const [selectedData, setSelectedData] = React.useState();

  return (
    <div className={styles.results}>
      <Header />
      <Filter
        data={data}
        setFilteredResults={setFilteredResults}
        setError={setError}
      />
      {MetadataModalIsVisible && selectedData && (
        <MetadataModal
          setMetadataModalVisible={setMetadataModalVisible}
          username={username}
          selectedData={selectedData}
        />
      )}

      <div className={styles.divisor}></div>
      {filteredResults && (
        <div className={styles.cardContainer}>
          {filteredResults &&
            filteredResults.sites.map((data) => (
              <Card
                key={data.id}
                content={data}
                setMetadataModalVisible={setMetadataModalVisible}
                setSelectedData={setSelectedData}
              />
            ))}
        </div>
      )}
      {error != null && <div className={styles.error}>{error}</div>}
    </div>
  );
}

export default Results;
