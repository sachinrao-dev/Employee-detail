import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  allUserList: {
    width: "100%",
  },
  tableContainer: {
    "& div": {
      "& table": {
        "& thead": {
          textAlign: "right",
          color: "red",
          border: "1px solid",
          borderRadius: "5px",
          fontSize: "30px",
          "& tr": {
            "& th": {
              textAlign: "right",
              border: "1px solid",
              fontSize: "20px",
              fontVariant: "bold",
              height: "20px",
              // color: "#d5ebe8",
              background: "#d5ebe8",
            },
          },
        },
      },
    },

  },
  allUser: {
    textAlign: "left",
  },
});

export default useStyle;
