import React from "react";
import HomeIcon from "@mui/icons-material/HomeRounded";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styles from "../Icons.module.css"
import { useTranslations } from "next-intl";

const Inicio = ({ onClick }: IconProps) => {
  const t = useTranslations("nav");
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
            const offset = section.offsetTop - 250;
            window.scrollTo({ top: offset, behavior: "smooth" });
          }
        }}
      >
        <ListItemIcon>
          <HomeIcon className={styles.icon} />
        </ListItemIcon>
        <ListItemText primary={t("home")} className={styles.listItemText} />
      </ListItemButton>
    </ListItem>
  );
};

export default Inicio;
