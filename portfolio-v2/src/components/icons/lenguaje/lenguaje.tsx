import React from "react";
import LanguageIcon from "@mui/icons-material/LanguageRounded";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import styles from "./lenguaje.module.css";

const Lenguaje = ({onClick, option}: IconProps) => {
  return (
    <ListItem key={"Lenguaje"} disablePadding className={styles.listItem} onClick={onClick}>
      <ListItemButton sx={{padding: 0}}>
        <ListItemIcon>
          <LanguageIcon className={styles.icon}/>
        </ListItemIcon>
        {option ? <ListItemText primary={"Cambiar a Español"} className={styles.listItemText} /> : <ListItemText primary={"Change to English"} className={styles.listItemText} />}
      </ListItemButton>
    </ListItem>
  );
};

export default Lenguaje;
