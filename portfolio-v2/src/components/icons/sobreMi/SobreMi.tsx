import React from "react";
import PortraitIcon from "@mui/icons-material/PortraitRounded";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import styles from "./SobreMi.module.css";

const SobreMi = ({onClick}: IconProps) => {
  return (
    <ListItem key={"Sobre mi"} disablePadding className={styles.listItem} onClick={onClick}>
      <ListItemButton sx={{padding: 0}}>
        <ListItemIcon>
          <PortraitIcon className={styles.icon}/>
        </ListItemIcon>
        <ListItemText primary={"Sobre mi"} className={styles.listItemText}/>
      </ListItemButton>
    </ListItem>
  );
};

export default SobreMi;
