import useTheme from "@mui/material/styles/useTheme";

export default function Footer() {
  const theme = useTheme();

  return (
    <div id="footer" className="footer">
      © 2023 Amr Thabit • <a href="https://github.com/AmrThabit">GitHub</a>
    </div>
  );
}
