import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  container: {
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
            padding: "7px",
            "& a": {
              // color: "black",
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
            padding: "7px",
          },
        },
      },
    },
  },
});

export default useStyle;
