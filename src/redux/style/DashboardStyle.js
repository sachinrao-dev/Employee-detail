import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  tableContainer: {
    "& div": {
      "& table": {
        "& tbody": {
          background: "#BAD1C2",
          "& td": {
            textAlign: "center",
            "& a": {
              textDecoration: "none",
              cursor: "pointer",
            },
          },
        },
        "& thead": {
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
