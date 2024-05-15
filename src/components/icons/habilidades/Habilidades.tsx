import React from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunchRounded";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styles from "../Icons.module.css";

const Habilidades = ({ onClick }: IconProps) => {
  return (
    <ListItem
      key={"Habilidades"}
      disablePadding
      className={styles.listItem}
      onClick={onClick}
    >
      <ListItemButton
        sx={{ padding: 0 }}
        onClick={() => {
          const section = document.getElementById("Habilidades");
          if (section) {
            const offset = section.offsetTop - 180;
            window.scrollTo({ top: offset, behavior: "smooth" });
          }
        }}
      >
        <ListItemIcon>
          <RocketLaunchIcon className={styles.icon} />
        </ListItemIcon>
        <ListItemText primary={"Habilidades"} className={styles.listItemText} />
      </ListItemButton>
    </ListItem>
  );
};

export default Habilidades;
