import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  // nav: {
  //   "& a": {
  //     textAlign: "right",
  //     background: "red",
  //   },
  // },
  container: {
    "& navLink": {
      "& a": {
        background: "red",
      },
    },
    width: "70%",
    margin: "0 auto",
    "& table": {
      "& tbody": {
        background: "#BAD1C2",
        "& tr": {
          "& td": {
            color: "black",
            textAlign: "center",
            fontSize: "16px",
            "& a": {
              color: "black",
              textDecoration: "none",
            },
          },
        },
      },
      "& thead": {
        height: "5px",
        "& tr": {
          "& th": {
            textAlign: "center",
            color: "white",
            background: "#282A3A",
            fontSize: "1em",
            fontWeight: "700",
          },
        },
      },
    },
  },
});

export default useStyle;
