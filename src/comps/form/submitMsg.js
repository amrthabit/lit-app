import emailjs from '@emailjs/browser';

export default function submitMsg(name, email, message) {
  // import api key from env
  const userID = process.env.REACT_APP_EMAILJS_KEY;
  // submit email to emailjs server and return error if any
  return emailjs.send(userID, "template_9bppt0d", {
    from_name: name,
    message: `Email: ${email ? email : "[No email recieved]"}\r\nMessage:\r\n${message}`
  }, "wIvN4cpEVyZQl1Lz6").then((response) => {
    // alert("submittion succeeded");
    return false;
  }, (err) => {
    console.log(err);
    return true;
  });
};