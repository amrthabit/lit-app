import { useTheme } from "@mui/material";

export default function Skills() {
  const theme = useTheme();

  return (
    <div id="skills" className="skills">
      <div
        style={{
          display: "grid",
          gridTemplateAreas: `
        "skills . ."
        "frontend backend databases"
        `,
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ gridArea: "skills" }}>Skills</h1>

        <div style={{ gridArea: "frontend" }}>
          <h2 style={{ marginBottom: 0 }}>Front End</h2>
          <p style={{ margin: 0 }}>React.js</p>
          <p style={{ margin: 0 }}>Vue.js</p>
          <p style={{ margin: 0 }}>Next.js</p>
          <p style={{ margin: 0 }}>MUI</p>
        </div>

        <div style={{ gridArea: "backend" }}>
          <h2 style={{ marginBottom: 0 }}>Back End</h2>
          <p style={{ margin: 0 }}>Node.js</p>
          <p style={{ margin: 0 }}>JavaScript</p>
          <p style={{ margin: 0 }}>TypeScript</p>
          <p style={{ margin: 0 }}>GraphQL</p>
          <p style={{ margin: 0 }}>Mikro-Orm</p>
        </div>

        <div style={{ gridArea: "databases" }}>
          <h2 style={{ marginBottom: 0 }}>Databases</h2>
          <p style={{ margin: 0 }}>MySQL</p>
          <p style={{ margin: 0 }}>PostgreSQL</p>
          <p style={{ margin: 0 }}>MongoDB</p>
          <p style={{ margin: 0 }}>Firebase</p>
          <p style={{ margin: 0 }}>Redis</p>
        </div>
      </div>
    </div>
  );
}
