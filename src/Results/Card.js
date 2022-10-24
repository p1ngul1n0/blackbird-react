import React from "react";
import styles from "./Card.module.css";
import Link from "../assets/link.svg";
import View from "../assets/view.svg";

function Card({ content, setMetadataModalVisible, setSelectedData }) {
  const searchRegExp = /\s/g;
  let lowerAppName = content["app"].toLowerCase();
  let appName = lowerAppName.replace(searchRegExp, "-");

  function openModal() {
    setMetadataModalVisible(true);
    setSelectedData(content);
  }

  return (
    <div className={` ${styles.card} ${styles.animateLeft}`}>
      <div className={styles.status}>
        <p>
          {content["status"] === "ERROR"
            ? content["error-message"]
            : content["response-status"]}
        </p>
      </div>

      <div className={styles.companyInfo}>
        <img
          src={`https://simpleicons.org/icons/${appName}.svg`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "https://upload.wikimedia.org/wikipedia/commons/1/1d/No_image.svg";
          }}
          alt={`${appName} Logo`}
          width="20%"
        />
        <p>{content["app"]}</p>
        <span style={{ color: "#999999" }}>#{content["id"]}</span>
      </div>

      <div className={styles.divisor}></div>

      <div className={styles.optionsContainer}>
        <a href={content["url"]} target="_blank" rel="noopener noreferrer">
          <img src={Link} width="30px" alt={content["url"]} />
        </a>
        {content["metadata"] && content["metadata"].length > 0 && (
          <button onClick={openModal}>
            <img src={View} width="40px" alt="View details" />
          </button>
        )}
      </div>

      <div
        className={` ${styles.result} ${
          content["status"] === "FOUND" ? styles.found : styles.notFound
        } ${content["status"] === "ERROR" ? styles.error : ""} `}
      >
        <p>{content["status"]}</p>
      </div>
    </div>
  );
}

export default Card;
