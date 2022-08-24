import { Box } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../constants";
export default function NavBar(props) {
  const [selectedTab, setSelectedTab] = useState("home");
  const theme = props.theme;
  const colors = COLORS.navbar;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        // justifyContent: "space-between",
      }}
    >
      <Box sx={{ paddingX: 2 }}>
        <Link
          style={{
            textDecoration: "none",
            color:
              selectedTab === "home"
                ? theme === "light"
                  ? colors.lightSelectedFont
                  : colors.darkSelectedFont
                : theme === "light"
                ? colors.lightFont
                : colors.darkFont,
          }}
          to="/"
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
            textDecoration: "none",
            color:
              selectedTab === "portfolio"
                ? theme === "light"
                  ? colors.lightSelectedFont
                  : colors.darkSelectedFont
                : theme === "light"
                ? colors.lightFont
                : colors.darkFont,
          }}
          to="/"
          onClick={() => {
            setSelectedTab("portfolio");
          }}
        >
          PORTFOLIO
        </Link>
      </Box>
      <Box sx={{ paddingX: 2 }}>
        <Link
          style={{
            textDecoration: "none",
            color:
              selectedTab === "contact"
                ? theme === "light"
                  ? colors.lightSelectedFont
                  : colors.darkSelectedFont
                : theme === "light"
                ? colors.lightFont
                : colors.darkFont,
          }}
          to="/"
          onClick={() => {
            setSelectedTab("contact");
          }}
        >
          CONTACT
        </Link>
      </Box>
      <Box sx={{ paddingX: 2 }}>
        <Link
          style={{
            textDecoration: "none",
            color:
              selectedTab === "skills"
                ? theme === "light"
                  ? colors.lightSelectedFont
                  : colors.darkSelectedFont
                : theme === "light"
                ? colors.lightFont
                : colors.darkFont,
          }}
          to="/"
          onClick={() => {
            setSelectedTab("skills");
          }}
        >
          SKILLS
        </Link>
      </Box>
    </Box>
  );
}
