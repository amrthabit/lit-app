import { useTheme } from "@mui/material";

export default function Projects() {
  const theme = useTheme();

  return (
    <div id="projects" className="projects">
      <h1>Projects</h1>
      <h2>Forum</h2>
      <p>
        <a href="https://forum.amrthabit.com">forum.amrthabit.com</a> is a forum
        for people to discuss topics of interest. It is a full stack web
        application built with React.js, Node.js, Express.js, PostgreSQL, and
        hosted locally using Nginx.
      </p>

      <h2>Landing Page</h2>
      <p>
        <a href="https://amrthabit.com">amrthabit.com</a> is a landing page for
        my personal brand. It is a static, one-page web application built with
        React.js, Firebase Hosting, and Firebase Functions.
      </p>
    </div>
  );
}
