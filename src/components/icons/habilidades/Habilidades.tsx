import React from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunchRounded";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styles from "../Icons.module.css";
import { useTranslations } from "next-intl";

const Habilidades = ({ onClick }: IconProps) => {
  const t = useTranslations("nav");
  return (
    <ListItem
      key={"Habilidades"}
      disablePadding
      className={styles.listItem}
      onClick={onClick}
    >
      <ListItemButton
        sx={{ padding: 0 }}
        onClick={() => {
          const section = document.getElementById("Habilidades");
          if (section) {
            const offset = section.offsetTop - 180;
            window.scrollTo({ top: offset, behavior: "smooth" });
          }
        }}
      >
        <ListItemIcon>
          <RocketLaunchIcon className={styles.icon} />
        </ListItemIcon>
        <ListItemText primary={t("skills")} className={styles.listItemText} />
      </ListItemButton>
    </ListItem>
  );
};

export default Habilidades;
