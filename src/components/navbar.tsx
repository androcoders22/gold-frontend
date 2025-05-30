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
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Person as PersonIcon,
  ShoppingCart as CartIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom"; // Added import
import { useAuth } from "../context/auth-context";

// Add global type for handleLogout
declare global {
  interface Window {
    handleLogout?: () => void;
  }
}

interface NavbarProps {
  rtl: boolean;
  onToggleDirection: () => void;
}

function Navbar({ rtl, onToggleDirection }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false); // Dropdown state
  const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(
    null,
  );
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
    console.log("Language changed to:", i18n.language);
  };

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  const { logout, isAuthenticated } = useAuth();

  // Accept logout function from window for now (will be set in App)
  const handleLogout = () => {
    logout();
    handleUserMenuClose();
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        sx={{ px: 8, borderBottom: "1px solid #FFD500", top: 0, zIndex: 1200 }}
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
              sx={{ m: 2, height: 50 }}
            />
          </Box>{" "}
          {/* Right side - Icons and language button */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton color="primary">
              <SearchIcon />
            </IconButton>
            <IconButton color="primary" onClick={handleUserMenuOpen}>
              <PersonIcon />
            </IconButton>
            <Menu
              anchorEl={userMenuAnchor}
              open={Boolean(userMenuAnchor)}
              onClose={handleUserMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {isAuthenticated ? (
                <MenuItem onClick={handleLogout}>{t("Logout")}</MenuItem>
              ) : (
                [
                  <MenuItem
                    key="login"
                    onClick={() => {
                      handleUserMenuClose();
                      navigate("/login");
                    }}
                  >
                    {t("Login")}
                  </MenuItem>,
                  <MenuItem
                    key="register"
                    onClick={() => {
                      handleUserMenuClose();
                      navigate("/register");
                    }}
                  >
                    {t("Register")}
                  </MenuItem>,
                ]
              )}
            </Menu>
            <IconButton
              color="primary"
              onClick={() => {
                if (isAuthenticated) {
                  navigate("/cart");
                } else {
                  navigate("/login");
                }
              }}
            >
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
              width: 300,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            },
          },
        }}
        anchor={rtl ? "right" : "left"}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            width: 300,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: 3,
            }}
          >
            <img
              src="https://www.finegoldkwt.com/FineLogoNew.png"
              alt="Logo"
              style={{ height: 80 }}
            />
          </Box>
          {/* Menu Items */}
          <List sx={{ flexGrow: 1 }}>
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/">
                <ListItemText primary={t("Home")} />
              </ListItemButton>
            </ListItem>
            {/* Shop (expandable) */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => setShopOpen((prev) => !prev)}>
                <ListItemText
                  primary={<span style={{ color: "#fff" }}>{t("Shop")}</span>}
                />
                <span
                  style={{ color: "#e2a23b", fontWeight: "bold", fontSize: 18 }}
                >
                  {shopOpen ? "-" : "+"}
                </span>
              </ListItemButton>
            </ListItem>
            {shopOpen && (
              <Box sx={{ pl: 4 }}>
                <Link to="/shop" style={{ textDecoration: "none" }}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText
                        primary={
                          <span style={{ color: "#FFD500" }}>
                            {t("Swiss Gold Bar")}
                          </span>
                        }
                      />
                    </ListItemButton>
                  </ListItem>{" "}
                </Link>{" "}
                <Link to="/shop" style={{ textDecoration: "none" }}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText
                        primary={
                          <span style={{ color: "#FFD500" }}>
                            {t("Uae Gold Bar")}
                          </span>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>{" "}
                <Link to="/shop" style={{ textDecoration: "none" }}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText
                        primary={
                          <span style={{ color: "#FFD500" }}>
                            {t("Lerah Coins")}
                          </span>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>{" "}
                <Link to="/shop" style={{ textDecoration: "none" }}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText
                        primary={
                          <span style={{ color: "#FFD500" }}>
                            {t("Silver Bar")}
                          </span>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              </Box>
            )}
            {/* My-Account (expandable) */}
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/my-account">
                <ListItemText primary={t("My-Account")} />
              </ListItemButton>
            </ListItem>
            {/* Price Calculator - Direct Link */}
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/calculator">
                <ListItemText primary={t("Price Calculator")} />
              </ListItemButton>
            </ListItem>
            {/* Faq */}
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/faq">
                <ListItemText primary={t("Faq")} />
              </ListItemButton>
            </ListItem>
            {/* About Us */}
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/about-us">
                <ListItemText primary={t("About Us")} />
              </ListItemButton>
            </ListItem>
            {/* Contact Us */}
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/contact-us">
                <ListItemText primary={t("Contact Us")} />
              </ListItemButton>
            </ListItem>
          </List>
          {/* Social Icons and Copyright */}
          <Box sx={{ px: 2, pb: 2, pt: 1 }}>
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 1 }}
            >
              <a href="#" style={{ color: "#FFD500" }}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" style={{ color: "#FFD500" }}>
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" style={{ color: "#FFD500" }}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" style={{ color: "#FFD500" }}>
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" style={{ color: "#FFD500" }}>
                <i className="fab fa-instagram"></i>
              </a>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "#FFD500", textAlign: "center", fontSize: 13 }}
            >
              {t("Copyright")}
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
