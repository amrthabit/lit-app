import { Collapse } from "@mui/material";
import { LoadingButton as MuiButton } from "@mui/lab";
import { TransitionGroup } from "react-transition-group";

export default function Button(props) {
  return (
    <MuiButton
      variant="contained"
      sx={{ mt: 1, mb: 2 }}
      style={{
        width: "calc(100% - 30px)",
        marginLeft: 15,
        marginTop: 15,
        transition: "all 0.1s ease-in-out",
      }}
      disabled={props.buttonStatus !== "enabled"}
      color={props.color}
      onClick={props.onClick}
      loading={props.buttonStatus === "sending"}
      loadingPosition="end"
      endIcon={<></>}
    >
      <TransitionGroup className="flex" style={{ fontSize: 18, margin: -3, transition: "inherit" }}>
        <Collapse component="span" orientation="horizontal">
          SEND
        </Collapse>
        {props.buttonStatus === "sending" && (
          <Collapse component="span" orientation="horizontal">
            ING...
          </Collapse>
        )}
        {/* TODO: fix this vvv */}
        {props.lastSend === "warning" && (
          <Collapse component="span" orientation="horizontal">
            &nbsp;Anyway
          </Collapse>
        )}
      </TransitionGroup>
    </MuiButton>
  );
}
