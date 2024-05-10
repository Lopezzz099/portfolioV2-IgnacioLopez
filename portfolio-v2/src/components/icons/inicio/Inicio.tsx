import React from "react";
import HomeIcon from "@mui/icons-material/HomeRounded";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import styles from "./Inicio.module.css";

const Inicio = ({onClick}: IconProps) => {
  return (
    <ListItem key={"Inicio"} disablePadding className={styles.listItem} onClick={onClick}>
      <ListItemButton sx={{padding: 0}}>
        <ListItemIcon>
          <HomeIcon className={styles.icon}/>
        </ListItemIcon>
        <ListItemText primary={"Inicio"} className={styles.listItemText}/>
      </ListItemButton>
    </ListItem>
  );
};

export default Inicio;
