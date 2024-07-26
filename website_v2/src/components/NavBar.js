import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../constants";

export default function NavBar(props) {
  const [selectedTab, setSelectedTab] = useState("home");
  const [navbarColor, setNavbarColor] = useState("transparent");
  const theme = props.theme;
  const colors = COLORS.navbar;
  const isFullWidth = !props.isMobile;

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const elementBelowNavbar = document.getElementById(
        "element-below-navbar"
      );

      if (navbar && elementBelowNavbar) {
        const { backgroundColor } = getComputedStyle(elementBelowNavbar);
        setNavbarColor(backgroundColor);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getFontColor = (tab) => {
    if (selectedTab === tab) {
      return theme === "light"
        ? colors.lightSelectedFont
        : colors.darkSelectedFont;
    } else {
      return theme === "light" ? colors.lightFont : colors.darkFont;
    }
  };

  if (isFullWidth) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          right: 0,
          marginRight: "40px",
        }}
      >
        <Box sx={{ paddingX: 2 }}>
          <Link
            style={{
              fontFamily: "Roboto",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "2px",
              textDecoration: "none",
              color: getFontColor("home"),
            }}
            to="#home"
            onClick={() => {
              setSelectedTab("home");
            }}
          >
            HOME
          </Link>
        </Box>
        <Box sx={{ paddingX: 2 }}>
          <Link
            style={{
              fontFamily: "Roboto",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "2px",
              textDecoration: "none",
              color:
                selectedTab === "accomplishments"
                  ? theme === "light"
                    ? colors.lightSelectedFont
                    : colors.darkSelectedFont
                  : theme === "light"
                  ? colors.lightFont
                  : colors.darkFont,
            }}
            to="/"
            onClick={() => {
              setSelectedTab("accomplishments");
            }}
          >
            ACCOMPLISMENTS
          </Link>
        </Box>
        <Box sx={{ paddingX: 2 }}>
          <Link
            style={{
              fontFamily: "Roboto",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "2px",
              textDecoration: "none",
              color:
                selectedTab === "hobbies"
                  ? theme === "light"
                    ? colors.lightSelectedFont
                    : colors.darkSelectedFont
                  : theme === "light"
                  ? colors.lightFont
                  : colors.darkFont,
            }}
            to="/"
            onClick={() => {
              setSelectedTab("hobbies");
            }}
          >
            HOBBIES
          </Link>
        </Box>
      </Box>
    );
  } else {
    return (
      <>
        <Box sx={{ paddingX: 2 }}>
          <Link
            style={{
              fontFamily: "Roboto",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "2px",
              textDecoration: "none",
              color:
                selectedTab === "home"
                  ? theme === "light"
                    ? colors.lightSelectedFont
                    : colors.lightSelectedFont
                  : theme === "light"
                  ? COLORS.home.lightFont
                  : COLORS.home.darkBg,
            }}
            to="#home"
            onClick={() => {
              setSelectedTab("home");
            }}
          >
            HOME
          </Link>
        </Box>
        <Box sx={{ paddingX: 2 }}>
          <Link
            style={{
              fontFamily: "Roboto",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "2px",
              textDecoration: "none",
              color:
                selectedTab === "accomplishments"
                  ? theme === "light"
                    ? colors.lightSelectedFont
                    : colors.lightSelectedFont
                  : theme === "light"
                  ? COLORS.home.lightFont
                  : COLORS.home.darkBg,
            }}
            to="/"
            onClick={() => {
              setSelectedTab("accomplishments");
            }}
          >
            ACCOMPLISMENTS
          </Link>
        </Box>
        <Box sx={{ paddingX: 2 }}>
          <Link
            style={{
              fontFamily: "Roboto",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "2px",
              textDecoration: "none",
              color:
                selectedTab === "hobbies"
                  ? theme === "light"
                    ? colors.lightSelectedFont
                    : colors.lightSelectedFont
                  : theme === "light"
                  ? COLORS.home.lightFont
                  : COLORS.home.darkBg,
            }}
            to="/"
            onClick={() => {
              setSelectedTab("hobbies");
            }}
          >
            HOBBIES
          </Link>
        </Box>
      </>
    );
  }
}
