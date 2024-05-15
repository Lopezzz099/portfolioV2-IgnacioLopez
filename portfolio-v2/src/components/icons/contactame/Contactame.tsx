import React from "react";
import ForwardToInbox from "@mui/icons-material/ForwardToInboxRounded";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import styles from "../Icons.module.css"

const Contactame = ({onClick}: IconProps) => {
  return (
    <ListItem key={"Contactame"} disablePadding className={styles.listItem} onClick={onClick}>
      <ListItemButton sx={{padding: 0}}>
        <ListItemIcon>
          <ForwardToInbox className={styles.icon}/>
        </ListItemIcon>
        <ListItemText primary={"Contactame"} className={styles.listItemText}/>
      </ListItemButton>
    </ListItem>
  );
};

export default Contactame;