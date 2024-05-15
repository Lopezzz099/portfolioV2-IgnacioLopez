import React from "react";
import EmojiObjects from "@mui/icons-material/EmojiObjectsRounded";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import styles from "./Claro.module.css";

const Claro = () => {
  return (
    <ListItem key={"Claro"} disablePadding className={styles.listItem}>
      <ListItemButton sx={{padding: 0}}>
        <ListItemIcon>
          <EmojiObjects className={styles.icon}/>
        </ListItemIcon>
        <ListItemText primary={"Claro"} className={styles.listItemText}/>
      </ListItemButton>
    </ListItem>
  );
};

export default Claro;