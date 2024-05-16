import React from "react";
import ForwardToInbox from "@mui/icons-material/ForwardToInboxRounded";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styles from "../Icons.module.css";
import { useTranslations } from "next-intl";

const Contactame = ({ onClick }: IconProps) => {
  const t = useTranslations("nav");
  return (
    <ListItem
      key={"Contactame"}
      disablePadding
      className={styles.listItem}
      onClick={onClick}
    >
      <ListItemButton
        sx={{ padding: 0 }}
        onClick={() => {
          const section = document.getElementById("Contactame");
          if (section) {
            const offset = section.offsetTop - 180;
            window.scrollTo({ top: offset, behavior: "smooth" });
          }
        }}
      >
        <ListItemIcon>
          <ForwardToInbox className={styles.icon} />
        </ListItemIcon>
        <ListItemText primary={t("contact")} className={styles.listItemText} />
      </ListItemButton>
    </ListItem>
  );
};

export default Contactame;
