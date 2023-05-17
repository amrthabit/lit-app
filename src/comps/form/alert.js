import { Alert as MuiAlert, AlertTitle } from "@mui/material";

export default function Alert(props) {
  return (
    <MuiAlert
      style={{
        width: "calc(100% - 70px)",
        margin: "auto",
        marginTop: -10,
        paddingTop: 10,
        height: 30,
      }}
      severity={props.severity}
    >
      <AlertTitle style={{ whiteSpace: "nowrap" }}>{props.message}</AlertTitle>
    </MuiAlert>
  );
}
