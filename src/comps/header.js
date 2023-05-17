import Email from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import Send from "@mui/icons-material/Send";
import { ThemeProvider, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import * as React from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const pages = [
  ["Experience", "#experience"],
  ["Projects", "#projects"],
];
const contactMenu = [
  [<LinkedIn />, "https://www.linkedin.com/in/AmrThabit"],
  [<GitHub />, "https://github.com/amrthabit"],
  [<Email />, "mailto:amrthabi7@gmail.com"],
  [<Instagram />, "https://www.instagram.com/thbbit/"],
];

export default function MuiHeader({ atTop, ...props }) {
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const size = (width) => {
    if (width < 600) {
      return "sm";
    } else if (width < 900) {
      return "md";
    } else if (width < 1200) {
      return "lg";
    } else {
      return "xl";
    }
  };

  const [displaySize, setDisplaySize] = React.useState(size(window.innerWidth));

  const handleResize = () => {
    setDisplaySize(size(window.innerWidth));
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div
      className="header"
      style={{
        background: theme.palette.background.default,
        height: displaySize === "sm" ? 40 : 60,
        width: "100%",
        borderBottom: `1px solid ${theme.palette.divider}`,
        top: atTop ? -61 : 0,
        position: "fixed",
        zIndex: 100,
      }}
    >
      <div id="header-flex-div">
        <div
          id="header-left"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: displaySize === "sm" ? 10 : 20,
          }}
        >
          {["md", "sm"].includes(displaySize) && (
            <div id="10">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{
                  color: theme.palette.text.primary,
                  marginLeft: -1,
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
                disableScrollLock={true}
              >
                {pages.map(([page, href]) => (
                  <MenuItem
                    key={page}
                    onClick={(e) => {
                      handleCloseNavMenu();
                      setTimeout(() => {
                        e.preventDefault();
                        let element = document.getElementById(
                          href.substring(1)
                        );
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }, 10);
                    }}
                  >
                    <Typography
                      textAlign="center"
                      sx={{ color: theme.palette.text.primary }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          )}
          <div
            id="12"
            style={{
              fontSize: 20,
              margin: "auto",
              marginRight: 10,
              whiteSpace: "nowrap",
              color: theme.palette.text.primary,
            }}
          >
            <Link
              href="#home"
              variant="text"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              sx={{
                color: theme.palette.text.primary,
                fontFamily: "inherit",
                textDecoration: "none",
                marginLeft: 1,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Amr Thabit
            </Link>
          </div>
          {["xl", "lg"].includes(displaySize) &&
            pages.map(([page, href]) => (
              <div key={page} style={{ margin: "auto" }}>
                <Button
                  key={page}
                  href={href}
                  onClick={(e) => {
                    handleCloseNavMenu();
                    let element = document.getElementById(href.substring(1));
                    e.preventDefault();
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  sx={{
                    color: theme.palette.text.primary,
                    fontFamily: "inherit",
                    "&:hover": {
                      background: theme.palette.background.hover,
                      textDecoration: "underline",
                    },
                  }}
                >
                  {page}
                </Button>
              </div>
            ))}
        </div>
        <div
          id="header-right"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: displaySize === "sm" ? 10 : 20,
          }}
        >
          {["xl", "lg", "md"].includes(displaySize) &&
            contactMenu.map(([icon, href]) => (
              <div key={href} style={{ margin: "auto", tranition: "inherit" }}>
                <IconButton
                  href={href}
                  // target="_blank"
                  key={icon.toString()}
                  onClick={(e) => {
                    handleCloseUserMenu();
                    if (href.startsWith("#")) {
                      e.preventDefault();
                      let element = document.getElementById(href.substring(1));
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  sx={{
                    color: theme.palette.text.primary,
                    width: 40,
                    "&:hover": {
                      background: theme.palette.background.hover,
                    },
                  }}
                >
                  {icon}
                </IconButton>
              </div>
            ))}
          {["sm"].includes(displaySize) && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar-send"
                aria-haspopup="true"
                onClick={handleOpenUserMenu}
                sx={{
                  color: theme.palette.text.primary,
                }}
              >
                <Send />
              </IconButton>
              <Menu
                id="menu-appbar-send"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
                disableScrollLock={true}
              >
                {contactMenu.map(([icon, href]) => (
                  <IconButton
                    key={href}
                    href={href.startsWith("#") ? "" : href}
                    onClick={(e) => {
                      handleCloseUserMenu();
                      if (href.startsWith("#")) {
                        setTimeout(() => {
                          e.preventDefault();
                          let element = document.getElementById(
                            href.substring(1)
                          );
                          element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }, 10);
                      }
                    }}
                    sx={{
                      color: theme.palette.text.primary,
                      width: 40,
                      scale: 0.8,
                    }}
                  >
                    {icon}
                  </IconButton>
                ))}
              </Menu>
            </div>
          )}
          <div>
            <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
              <MaterialUISwitch
                checked={!props.isLight}
                onChange={props.switchTheme}
                name="checkedB"
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
