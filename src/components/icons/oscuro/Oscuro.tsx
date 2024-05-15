import React from "react";
import EmojiObjects from "@mui/icons-material/EmojiObjectsRounded";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import styles from "../Icons.module.css"

const Oscuro = () => {
  return (
    <ListItem key={"Oscuro"} disablePadding className={styles.listItem}>
      <ListItemButton sx={{padding: 0}}>
        <ListItemIcon>
          <EmojiObjects className={styles.icon}/>
        </ListItemIcon>
        <ListItemText primary={"Oscuro"} className={styles.listItemText}/>
      </ListItemButton>
    </ListItem>
  );
};

export default Oscuro;