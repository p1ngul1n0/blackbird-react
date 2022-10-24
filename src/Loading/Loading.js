import React from "react";
import Header from "../Header/Header";
import { basePath } from "../Config/api";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Loading.module.css";
import { ReactComponent as Ellipse } from "../assets/ellipse.svg";

function Loading() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { username, numberSites } = state;

  React.useEffect(() => {
    let response = fetch(basePath + "search/username", {
      method: "POST",
      body: JSON.stringify({ username: username }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) =>
        navigate("/results", {
          state: { data: json, username: username },
        })
      );
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.center}>
          <div className={styles.loading}>
            <Ellipse className={styles.ellipse} fill="#0b0b0b" />
            <Ellipse className={styles.ellipse} fill="#0b0b0b" />
            <Ellipse className={styles.ellipse} fill="#0b0b0b" />
          </div>
          <h1>
            Searching {numberSites} sites for '
            {<span style={{ color: "#CE0000" }}>{username}</span>}
            '...
          </h1>
        </div>
      </div>
    </>
  );
}

export default Loading;
