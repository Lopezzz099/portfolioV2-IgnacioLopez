"use client";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./DrawerSection.module.css";

import React from "react";
import { IconButton } from "@mui/material";
import Inicio from "@/components/icons/inicio/Inicio";
import SobreMi from "@/components/icons/sobreMi/SobreMi";
import Habilidades from "@/components/icons/habilidades/Habilidades";
import Proyectos from "@/components/icons/proyectos/Proyectos";
import Contactame from "@/components/icons/contactame/Contactame";
import Oscuro from "@/components/icons/oscuro/Oscuro";
import Claro from "@/components/icons/claro/Claro";

const navItems = [
  "Inicio",
  "Sobre mi",
  "Habilidades",
  "Proyectos",
  "Contactame",
];

const DrawerSection = () => {
  const [open, setOpen] = React.useState(false);
  const [theme, setTheme] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  console.log(open)

  const toggleTheme = () => () => {
    setTheme(!theme);
  };

  const DrawerList = (
    <Box
      sx={{ width: 280 }}
      role="presentation"
      className={styles.boxDrawer}
    >
      <Box className={styles.boxDrawerMenu}>
        <p>Menu</p>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List className={styles.list}>
        <Inicio onClick={toggleDrawer(false)}/>
        <SobreMi onClick={toggleDrawer(false)}/>
        <Habilidades onClick={toggleDrawer(false)}/>
        <Proyectos onClick={toggleDrawer(false)}/>
        <Contactame onClick={toggleDrawer(false)}/>
      </List>
      <Divider />
      <List>
        <button onClick={toggleTheme()}>
          {theme ? <Oscuro /> : <Claro />}
        </button>
      </List>
    </Box>
  );
  return (
    <div>
      <React.Fragment>
        <button onClick={toggleDrawer(true)}>
          <MenuIcon style={{ height: "40px", width: "30px" }} />
        </button>
        <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
          {DrawerList}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default DrawerSection;