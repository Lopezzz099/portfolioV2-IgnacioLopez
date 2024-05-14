import React from "react";
import PortraitIcon from "@mui/icons-material/PortraitRounded";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styles from "./SobreMi.module.css";

const SobreMi = ({ onClick }: IconProps) => {
  return (
    <ListItem
      key={"Sobre mi"}
      disablePadding
      className={styles.listItem}
      onClick={onClick}
    >
      <ListItemButton
        sx={{ padding: 0 }}
        onClick={() => {
          const section = document.getElementById("SobreMi");
          if (section) {
            const offset = section.offsetTop - 180;
            window.scrollTo({ top: offset, behavior: "smooth" });
          }
        }}
      >
        <ListItemIcon>
          <PortraitIcon className={styles.icon} />
        </ListItemIcon>
        <ListItemText primary={"Sobre mi"} className={styles.listItemText} />
      </ListItemButton>
    </ListItem>
  );
};

export default SobreMi;
