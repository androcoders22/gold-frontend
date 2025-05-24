import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

// Import new icons for the drawer
import DashboardCustomizeOutlined from "@mui/icons-material/DashboardCustomizeOutlined";
import DiamondOutlined from "@mui/icons-material/DiamondOutlined";
import ReceiptLongOutlined from "@mui/icons-material/ReceiptLongOutlined";
import PeopleAltOutlined from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";

const drawerWidth = 240;

// const pages = ["Products", "Pricing", "Blog"]; // Removed, navigation will be in drawer
const settings = ["Profile", "Account", "Logout"]; // "Dashboard" removed as we are in it

// Define drawer items
const drawerItems = [
  {
    text: "Overview",
    icon: <DashboardCustomizeOutlined />,
    path: "#",
  },
  { text: "Products", icon: <DiamondOutlined />, path: "#" },
  { text: "Orders", icon: <ReceiptLongOutlined />, path: "#" },
  {
    text: "Customers",
    icon: <PeopleAltOutlined />,
    path: "#",
  },
  { text: "Settings", icon: <SettingsOutlined />, path: "#" },
];

function Dashboard() {
  //   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
  //     null
  //   );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [openDrawer, setOpenDrawer] = React.useState(true); // Drawer is open by default on desktop
  const theme = useTheme(); // Initialize theme

  //   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //     setAnchorElNav(event.currentTarget);
  //   };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  //   const handleCloseNavMenu = () => {
  //     setAnchorElNav(null);
  //   };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: theme.palette.background.paper, // Apply theme color
          color: theme.palette.text.primary, // Apply theme text color
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }} // Only show on small screens
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component={RouterLink} // Make title a link to dashboard home
              to="/dashboard"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: theme.palette.primary.main, // Use theme primary color
                textDecoration: "none",
              }}
            >
              FineGold Admin
            </Typography>
            <Typography
              variant="h5"
              noWrap
              component={RouterLink}
              to="/dashboard"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" }, // Show on small screens when title is hidden
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: theme.palette.primary.main, // Use theme primary color
                textDecoration: "none",
              }}
            >
              FG ADMIN {/* Shortened for mobile */}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />{" "}
            {/* Spacer to push user menu to the right */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Admin User" src="/static/images/avatar/2.jpg" />{" "}
                  {/* Consider a default admin avatar or initials */}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar-user"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                PaperProps={{
                  sx: {
                    backgroundColor: theme.palette.background.paper, // Theme for menu
                    color: theme.palette.text.primary,
                  },
                }}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={handleCloseUserMenu}
                    sx={{
                      "&:hover": {
                        backgroundColor: theme.palette.action.hover,
                      },
                    }}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        variant="permanent" // Consider "temporary" for small screens if openDrawer state is managed by MenuIcon
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: theme.palette.background.paper, // Theme for drawer
            color: theme.palette.text.secondary,
          },
        }}
        open={openDrawer} // This makes it permanently open on desktop
      >
        <Toolbar /> {/* Necessary to offset content below AppBar */}
        <Box sx={{ overflow: "auto" }}>
          <List>
            {drawerItems.map((item, _) => (
              <ListItem
                key={item.text}
                disablePadding
                component={RouterLink}
                to={item.path}
                sx={{
                  color: theme.palette.text.secondary,
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <ListItemButton>
                  <ListItemIcon
                    sx={{ color: theme.palette.primary.main, minWidth: "40px" }}
                  >
                    {" "}
                    {/* Theme for icons */}
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: theme.palette.background.default, // Theme for main content area
          color: theme.palette.text.primary,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Toolbar /> {/* This is to offset the content below the AppBar */}
        <Typography
          variant="h2"
          component="div"
          color="primary"
          sx={{ color: theme.palette.primary.main }}
        >
          Dashboard Coming Soon
        </Typography>
      </Box>
    </Box>
  );
}

export default Dashboard;
