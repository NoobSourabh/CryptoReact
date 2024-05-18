import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <h1>hi</h1>
      </Drawer>
    </div>
  );
}
