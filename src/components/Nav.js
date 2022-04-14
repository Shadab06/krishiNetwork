import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Nav = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const handleAuth = () => {
    if (!user) {
      history.push("/register");
    } else {
      history.push("/register");
      localStorage.removeItem("profile");
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Krishi Network
          </Typography>
          <Button
            color="inherit"
            onClick={handleAuth}
            style={{ textTransform: "capitalize" }}
          >
            {!user ? "Login/Register" : "Logout"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
