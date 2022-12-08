import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  navBar: {
    width: "70%",
    marginLeft: "10px",
    marginBottom: "5px",
    "& a.active": {
      background: "#282A3A",
      color: "white",
    },
  },
  nav: {
    // marginRight: "10px",
    textDecoration: "none",
    color: "black",
    background: "#BAD1C2",
    paddingRight: "10px",
    paddingLeft: "10px",
  },
});

export default useStyle;
