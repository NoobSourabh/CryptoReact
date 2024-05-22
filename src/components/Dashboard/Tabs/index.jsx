import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import "./styles.css";
import {
  fontFamily,
  fontSize,
  fontWeight,
  textTransform,
  width,
} from "@mui/system";
export default function TabsComponent() {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  const style = {
    color: "var(--white)",
    fontSize: "1.2rem",
    fontWeight: 600,
    textTransform: "capitalize",
    width: "50vw",
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>
        <TabPanel value="grid">
        <div>Mapping for grids</div>
        </TabPanel>
        <TabPanel value="list">
        <div>Mapping for lists</div>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
