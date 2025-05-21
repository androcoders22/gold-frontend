import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Person as PersonIcon,
  ShoppingCart as CartIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  rtl: boolean;
  onToggleDirection: () => void;
}

function Navbar({ rtl, onToggleDirection }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
    console.log("Language changed to:", i18n.language);
  };

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        // elevation={0}
        sx={{ px: 8, borderBottom: "1px solid #FFD500" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left side - Burger menu */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              sx={{ fontWeight: "semibold", fontSize: "2rem" }}
              color="primary"
            >
              {t("title")}
            </Typography>
          </Box>
          {/* Middle - Website name and logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              component="img"
              src="https://www.finegoldkwt.com/FineLogoNew.png"
              alt="Logo"
              sx={{ m: 2, height: 70 }}
            />
          </Box>{" "}
          {/* Right side - Icons and language button */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton color="primary">
              <SearchIcon />
            </IconButton>
            <IconButton color="primary">
              <PersonIcon />
            </IconButton>
            <IconButton color="primary">
              <CartIcon />
            </IconButton>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                const newLang = i18n.language === "en" ? "ar" : "en";
                i18n.changeLanguage(newLang).then(() => {
                  console.log("Language changed to:", i18n.language);
                  onToggleDirection();
                });
              }}
            >
              {t("languageToggle")}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Drawer for burger menu */}
      <Drawer
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "black",
              color: "#FFD500",
              width: 250,
            },
          },
        }}
        anchor={rtl ? "right" : "left"}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {["welcome", "products", "about", "contact"].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={t(text)} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
