import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  navBar: {
    width: "70%",
    margin: "0 auto",
    marginBottom: "30px",
    "& a.active": {
      background: "#282A3A",
      color: "white",
    },
  },
  nav: {
    marginRight: "10px",
    textDecoration: "none",
    color: "black",
    background: "#BAD1C2",
  },
});

export default useStyle;
