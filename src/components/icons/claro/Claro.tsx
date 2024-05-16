import React from "react";
import EmojiObjects from "@mui/icons-material/EmojiObjectsRounded";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import styles from "./Claro.module.css";
import { useTranslations } from "next-intl";

const Claro = () => {
  const t = useTranslations("nav");
  return (
    <ListItem key={"Claro"} disablePadding className={styles.listItem}>
      <ListItemButton sx={{padding: 0}}>
        <ListItemIcon>
          <EmojiObjects className={styles.icon}/>
        </ListItemIcon>
        <ListItemText primary={t("lightTheme")} className={styles.listItemText}/>
      </ListItemButton>
    </ListItem>
  );
};

export default Claro;