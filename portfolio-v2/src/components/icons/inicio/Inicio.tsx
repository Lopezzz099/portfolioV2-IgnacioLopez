import React from "react";
import HomeIcon from "@mui/icons-material/HomeRounded";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styles from "./Inicio.module.css";

const Inicio = ({ onClick }: IconProps) => {
  return (
    <ListItem
      key={"Inicio"}
      disablePadding
      className={styles.listItem}
      onClick={onClick}
    >
      <ListItemButton
        sx={{ padding: 0 }}
        onClick={() => {
          const section = document.getElementById("Inicio");
          if (section) {
            const offset = section.offsetTop - 180;
            window.scrollTo({ top: offset, behavior: "smooth" });
          }
        }}
      >
        <ListItemIcon>
          <HomeIcon className={styles.icon} />
        </ListItemIcon>
        <ListItemText primary={"Inicio"} className={styles.listItemText} />
      </ListItemButton>
    </ListItem>
  );
};

export default Inicio;
