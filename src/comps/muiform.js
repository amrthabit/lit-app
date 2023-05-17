// make material ui form
import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { Collapse } from "@mui/material";
import { ThemeProvider } from "@mui/material";

import { useState, useEffect } from "react";
import Button from "./form/button";
import Alert from "./form/alert";
import submitEmail from "./form/submitMsg";
import { useTheme } from "@mui/material";

import "./muiform.css";
import "typeface-roboto";

// returns form values and setters
// takes error validation test
function useForm(test) {
  const [text, set] = React.useState("");
  const [error, setError] = React.useState(false);
  // use argument instead of text for instant update
  const validate = (value = text) => {
    const res = test(value);
    setError(res);
    return res;
  };
  return {
    text,
    set,
    setError,
    error,
    validate,
  };
}

export default function MuiForm() {
  const theme = useTheme();

  const [buttonStatus, setButtonStatus] = useState("enabled");
  const [buttonColor, setButtonColor] = useState("primary");

  const [alertStatus, setAlertStatus] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  const [lastSend, setLastSend] = useState(null);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCounter(counter + 1);
    }, 50);
    if (counter > 10) {
      clearTimeout(timeout);
    }
  }, [counter]);

  // initiate all form values inside object form
  const form = {
    name: useForm((value) => value.length < 2),
    email: useForm((value) => !/^.+@.+\..+$/i.test(value)),
    message: useForm((value) => value.length < 10 || value.length > 100),
    set: (e) => {
      form[e.target.name].set(e.target.value);
      // don't create errors while typing only remove them
      if (e.type === "blur" || form[e.target.name].error === true) {
        form[e.target.name].validate(e.target.value);
      }
      setLastSend(null);
      setAlertStatus(false);
      setButtonColor("primary");
    },
    reset: () => {
      form.name.set("");
      form.email.set("");
      form.email.setError(false);
      form.message.set("");
    },
    validate: () => {
      return [
        form.name.validate(),
        form.email.validate(),
        form.message.validate(),
      ];
    },
  };

  const submitForm = async () => {
    setButtonStatus("sending");
    setLastSend(null);
    setAlertStatus(false);

    const error = await submitEmail(
      form.name.text,
      form.email.text,
      form.message.text
    );

    if (error) {
      setLastSend("error");
      setButtonColor("error");
      setTimeout(() => {
        setAlertMsg("Failed. Please try again later.");
        setAlertStatus("error");
      }, 200);
    } else {
      setTimeout(() => {
        setLastSend(null);
        form.reset();
        setButtonColor("success");
        setAlertStatus("success");
        setAlertMsg("Message sent!");
      }, 200);
    }
    // 200 ms for resubmission
    setTimeout(() => {
      setButtonStatus("enabled");
    }, 200);
  };

  const handleSend = () => {
    setButtonStatus("disabled");

    const [nameErr, emailErr, messageErr] = form.validate();

    // required fields check
    if (nameErr || messageErr) {
      setLastSend(null);
      setButtonColor("error");

      if (alertStatus !== "warning" && alertStatus !== false) {
        setAlertStatus(false);
        setTimeout(() => {
          setAlertStatus("warning");
        }, 200);
      } else {
        setAlertStatus("warning");
      }
      setAlertMsg("Please fill out all required fields");
      setTimeout(() => {
        setButtonColor("primary");
        setTimeout(() => {
          setButtonColor("error");
          setTimeout(() => {
            setButtonColor("primary");
          }, 100);
        }, 150);
      }, 150);

      setButtonStatus("enabled");
      return;
    }

    // confirm sending without email
    if (lastSend === "warning") {
      submitForm();
      return;
    }

    // send again after failed submission
    if (lastSend === "error") {
      submitForm();
      return;
    }

    // everything good except email
    if (emailErr) {
      setLastSend("warning");
      if (alertStatus !== "warning") {
        setAlertStatus(false);
        setTimeout(() => {
          setAlertStatus("warning");
        }, 200);
      } else {
        setAlertStatus("warning");
      }
      setButtonColor("warning");
      setAlertMsg("Enter your email to be contacted");
      setTimeout(() => {
        setButtonStatus("enabled");
      }, 400);
    } else {
      submitForm();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="form">
        <h1 style={{ textAlign: "center", marginBottom: 10 }}>Contact</h1>
        <Box style={{ width: "67%", minWidth: 340, margin: "auto" }}>
          <TransitionGroup>
            <Collapse style={{ position: "relative", zIndex: 1 }}>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                style={{
                  paddingTop: 8,
                  background: theme.palette.background.paper,
                  borderRadius: 15,
                  // border: `1px solid ${theme.palette.divider}`,
                  boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
                }}
              >
                <TransitionGroup>
                  {counter > 1 && (
                    <Collapse>
                      <TextField
                        name="name"
                        id="standard-basic"
                        label="Name"
                        margin="dense"
                        size="small"
                        value={form.name.text}
                        required
                        disabled={buttonStatus === "sending"}
                        error={form.name.error}
                        onChange={form.set}
                        onBlur={form.set}
                        onFocus={form.set}
                        style={{
                          width: "calc(100% - 30px)",
                          marginLeft: 15,
                          marginBottom: 0,
                        }}
                        inputProps={{ maxLength: 40 }}
                      />
                    </Collapse>
                  )}
                  {form.name.error && (
                    <Collapse className="error-message">
                      {"Enter your name"}
                    </Collapse>
                  )}
                  {counter > 2 && (
                    <Collapse>
                      <TextField
                        name="email"
                        id="standard-basic"
                        label="Email"
                        margin="dense"
                        size="small"
                        disabled={buttonStatus === "sending"}
                        value={form.email.text}
                        onChange={form.set}
                        error={form.email.error}
                        onBlur={form.set}
                        onFocus={form.set}
                        style={{
                          width: "calc(100% - 30px)",
                          marginLeft: 15,
                          marginTop: 15,
                          marginBottom: 0,
                        }}
                        inputProps={{ maxLength: 100 }}
                      />
                    </Collapse>
                  )}
                  {form.email.error && (
                    <Collapse className="error-message">Invalid email</Collapse>
                  )}
                  {counter > 3 && (
                    <Collapse>
                      <TextField
                        name="message"
                        id="standard-basic"
                        label="Message"
                        margin="dense"
                        size="small"
                        multiline
                        required
                        disabled={buttonStatus === "sending"}
                        value={form.message.text}
                        error={form.message.error}
                        rows={3}
                        onChange={form.set}
                        onBlur={form.set}
                        onFocus={form.set}
                        style={{
                          width: "calc(100% - 30px)",
                          marginLeft: 15,
                          marginTop: 15,
                          marginBottom: 0,
                        }}
                      />
                    </Collapse>
                  )}
                  {form.message.error && (
                    <Collapse className="error-message">
                      {form.message.text.length < 10
                        ? `${10 - form.message.text.length} more to go...`
                        : `${form.message.text.length - 100} over limit`}
                    </Collapse>
                  )}
                  {counter > 4 && (
                    <Collapse>
                      <Button
                        color={buttonColor}
                        alert={alertStatus}
                        buttonStatus={buttonStatus}
                        alertMsg={alertMsg}
                        onClick={handleSend}
                        lastSend={lastSend}
                      />
                    </Collapse>
                  )}
                </TransitionGroup>
              </Box>
            </Collapse>
            {alertStatus && (
              <Collapse
                style={{ position: "relative", zIndex: 0, width: "100%" }}
              >
                <Alert severity={alertStatus} message={alertMsg} />
              </Collapse>
            )}
          </TransitionGroup>
        </Box>
      </div>
    </ThemeProvider>
  );
}
