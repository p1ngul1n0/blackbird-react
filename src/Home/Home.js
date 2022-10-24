import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import BLogo from "../assets/blackbird-logo.png";

function Home() {
  const mock = {
    "number-sites": 152,
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
        <img src={BLogo} alt="Blackbird logo" width="40%" />
        <h1>BLACKBIRD</h1>
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? handleSubmit() : null)}
            placeholder="Type a username"
          />
          <button disabled={username ? false : true} onClick={handleSubmit}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
