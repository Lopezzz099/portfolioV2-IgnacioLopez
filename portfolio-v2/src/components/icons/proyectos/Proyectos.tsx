import React from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutlineRounded";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import styles from "../Icons.module.css"

const Proyectos = ({onClick}: IconProps) => {
  return (
    <ListItem key={"Proyectos"} disablePadding className={styles.listItem} onClick={onClick}>
      <ListItemButton sx={{padding: 0}}>
        <ListItemIcon>
          <WorkOutlineIcon className={styles.icon}/>
        </ListItemIcon>
        <ListItemText primary={"Proyectos"} className={styles.listItemText}/>
      </ListItemButton>
    </ListItem>
  );
};

export default Proyectos;