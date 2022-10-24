import React from "react";
import styles from "./MetadataModal.module.css";
import Placeholder from "../assets/placeholder.png";
import Pin from "../assets/pin.svg";

function MetadataModal({ setMetadataModalVisible, username, selectedData }) {
  let content = selectedData;
  const searchRegExp = /\s/g;
  let lowerAppName = content["app"].toLowerCase();
  let appName = lowerAppName.replace(searchRegExp, "-");

  let picture = content["metadata"].find(
    (element) => element["type"] === "image"
  );
  let location = content["metadata"].find(
    (element) => element["type"] === "location"
  );

  function closeModal() {
    setMetadataModalVisible(false);
  }
  return (
    <>
      <div id="myModal" className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.companyInfo}>
            <img
              src={`https://simpleicons.org/icons/${appName}.svg`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/commons/1/1d/No_image.svg";
              }}
              alt={`${appName} Logo`}
              width="8%"
            />
            <h2>{content["app"]}</h2>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
          </div>
          <div className={styles.details}>
            <div className={styles.leftPanel}>
              <img
                className={styles.profilePicture}
                width="200px"
                src={picture ? picture["value"] : Placeholder}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = Placeholder;
                }}
                alt="User profile"
              />
              {location && (
                <div className={styles.location}>
                  <img src={Pin} alt={`Pin`} width="10%" />
                  <p>{location["value"]}</p>
                </div>
              )}
            </div>
            <div className={styles.rightPanel}>
              <h1>@{username}</h1>
              <a
                href={content["url"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content["url"]}
              </a>
              <div className={styles.tableWrapper}>
                <h3>METADATA</h3>
                <div className={styles.divisor}></div>
                <table>
                  <tbody>
                    <tr>
                      {content["metadata"]
                        .filter((d) => d["type"] === "generic-data")
                        .map((d) => (
                          <td>
                            <p className={styles.boldText}>{d["key"]}</p>
                            <p>{d["value"]}</p>
                          </td>
                        ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MetadataModal;
