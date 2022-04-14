import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const fetchData = () => {
    history.push("/fetch_normal")
  };
  const fetchUserData = () => {
    history.push("/fetch_with_auth")
  };
  return (
    <>
      <Button
        color="inherit"
        onClick={fetchData}
        style={{
          textTransform: "capitalize",
          marginTop: "100px",
          marginRight: "100px",
        }}
      >
        Fetch Public Data
      </Button>
      <Button
        color="inherit"
        onClick={fetchUserData}
        style={{
          textTransform: "capitalize",
          marginTop: "100px",
        }}
      >
        Fetch Private Data
      </Button>
    </>
  );
};

export default Home;
