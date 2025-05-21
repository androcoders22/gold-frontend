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

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        // elevation={0}
        sx={{ px: 8 }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left side - Burger menu */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" color="primary">
              Fine Gold Jewellery
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
            <Button variant="outlined" size="small" color="primary">
              العربية
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Drawer for burger menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {["Home", "Products", "About", "Contact"].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
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
