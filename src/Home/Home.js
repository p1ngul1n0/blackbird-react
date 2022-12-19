import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import BLogo from "../assets/blackbird-logo.png";
import PLogo from "../assets/pingu_logo.png";
import CLogo from "../assets/logo_chl.jpg";

function Home() {
  const mock = {
    "number-sites": 574,
  };
  const navigate = useNavigate();
  const [username, setUsername] = React.useState();

  function handleSubmit() {
    if (username) {
      navigate("/loading", {
        state: { username: username, numberSites: mock["number-sites"] },
      });
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <img src={BLogo} alt="Blackbird Logo" width="40%" />
        <h1>BLACKBIRD</h1>
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? handleSubmit() : null)}
            placeholder="Type a username"
          />
          <button
            disabled={username ? false : true}
            style={{ pointerEvents: username ? "auto" : "none" }}
            onClick={handleSubmit}
          >
            {">"}
          </button>
        </div>
        <div className={styles.footer}>
          <div className={styles.borderRight}>
            <a href="https://p1ngul1n0.com/">
              <img src={PLogo} alt="P1ngul1n0 Logo" width="25%" />
            </a>
          </div>
          <div>
            <a href="https://site.cyberhunteracademy.com/">
              <img src={CLogo} alt="P1ngul1n0 Logo" width="30%" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
