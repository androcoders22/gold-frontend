import {
  Box,
  Typography,
  Grid,
  Link,
  Stack,
  IconButton,
  Divider,
  Paper,
  Avatar,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const customProducts = [
  {
    image: "https://placehold.co/60x60/gold/black?text=Coin",
    name: "36 GM MUKAMMAS",
    weight: "36 Gram",
    rating: 5,
  },
  {
    image: "https://placehold.co/60x60/orange/black?text=Bar",
    name: "2.5 GM VALCAMBI SWISS GOLD BAR",
    weight: "2.5 Gram",
    rating: 5,
  },
];

function Footer() {
  return (
    <Paper
      sx={{
        backgroundColor: "background.paper",
        mt: 8,
        pt: 6,
        pb: 2,
        px: { xs: 2, md: 8 },
        borderRadius: 0,
        boxShadow: "none",
      }}
      component="footer"
    >
      <Box sx={{ maxWidth: 1400, mx: "auto" }}>
        {/* Top icons row */}
        <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
          {[
            {
              icon: <LocalShippingIcon fontSize="large" />,
              title: "Secure Shipping",
              subtitle: "Secure Shipping Ways",
            },
            {
              icon: <CheckCircleIcon fontSize="large" />,
              title: "Best Service",
              subtitle: "Best Service Ever",
            },
            {
              icon: <LoyaltyIcon fontSize="large" />,
              title: "Member Discount",
              subtitle: "Big Discounts",
            },
            {
              icon: <SupportAgentIcon fontSize="large" />,
              title: "Online Support",
              subtitle: "Support online 24 hours a day",
            },
          ].map((item, i) => (
            <Grid size={{ xs: 6, md: 3 }} key={i} textAlign="center">
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  border: "2px solid #FFD700",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 1,
                  color: "#FFD700",
                }}
              >
                {item.icon}
              </Box>
              <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: 16 }}>
                {item.title}
              </Typography>
              <Typography sx={{ color: "#B0B0B0", fontSize: 14 }}>
                {item.subtitle}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ borderColor: "#222", mb: 4 }} />
        {/* Main footer content */}
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar
                  src="https://placehold.co/60x60/FFD700/000?text=Logo"
                  sx={{ width: 60, height: 60, bgcolor: "#FFD700" }}
                />
                <Typography
                  variant="h6"
                  sx={{ color: "#FFD700", fontWeight: 700 }}
                >
                  Fine Gold Jewelry & Precious Metal Co.
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "#B0B0B0", fontSize: 15 }}>
                  Address: 123 Gold Avenue
                  <br />
                  Luxury District
                  <br />
                  Suite 100, Building A
                </Typography>
                <Typography sx={{ color: "#B0B0B0", fontSize: 15, mt: 1 }}>
                  Phone: (123) 456-7890
                  <br />
                  Fax: (123) 456-7891
                  <br />
                  Mobile: (123) 456-7892
                  <br />
                  Email: contact@finegold.example.com
                </Typography>
              </Box>
              <Box>
                <IconButton color="primary" size="small">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="primary" size="small">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="primary" size="small">
                  <YouTubeIcon />
                </IconButton>
                <IconButton color="primary" size="small">
                  <InstagramIcon />
                </IconButton>
                <IconButton color="primary" size="small">
                  <GoogleIcon />
                </IconButton>
              </Box>
            </Stack>
          </Grid>
          {/* Information & Extras */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              variant="h6"
              sx={{ color: "#fff", mb: 1, fontWeight: 600 }}
            >
              Information
            </Typography>
            <Stack spacing={0.5}>
              {[
                "About Us",
                "Delivery Information",
                "Privacy Policy",
                "Terms & Conditions",
                "Gift Certificates",
                "Contact Us",
                "Prices Screen",
              ].map((text) => (
                <Link
                  key={text}
                  href="#"
                  underline="hover"
                  sx={{ color: "#B0B0B0", fontSize: 15 }}
                >
                  {text}
                </Link>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              variant="h6"
              sx={{ color: "#fff", mb: 1, fontWeight: 600 }}
            >
              Extras
            </Typography>
            <Stack spacing={0.5}>
              {["Specials", "My Account"].map((text) => (
                <Link
                  key={text}
                  href="#"
                  underline="hover"
                  sx={{ color: "#B0B0B0", fontSize: 15 }}
                >
                  {text}
                </Link>
              ))}
            </Stack>
          </Grid>
          {/* Custom Products */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              sx={{ color: "#fff", mb: 1, fontWeight: 600 }}
            >
              Custom Products
            </Typography>
            <Stack spacing={2}>
              {customProducts.map((prod, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    borderBottom:
                      i === customProducts.length - 1
                        ? "none"
                        : "1px solid #222",
                    pb: 1,
                  }}
                >
                  <Avatar
                    src={prod.image}
                    variant="rounded"
                    sx={{ width: 56, height: 56, mr: 1 }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      {[...Array(prod.rating)].map((_, idx) => (
                        <Box key={idx} sx={{ color: "#FFD700", fontSize: 18 }}>
                          ★
                        </Box>
                      ))}
                    </Box>
                    <Typography
                      sx={{ color: "#fff", fontWeight: 600, fontSize: 15 }}
                    >
                      {prod.name}
                    </Typography>
                    <Typography sx={{ color: "#FFD700", fontSize: 14 }}>
                      {prod.weight}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: "#222", my: 4 }} />
        {/* Bottom navigation */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
            mb: 2,
          }}
        >
          {[
            "Home",
            "Shop",
            "Privacy Policy",
            "Terms Of Use",
            "Sitemap",
            "Support",
            "Contacts",
            "Prices Screen",
          ].map((text) => (
            <Link
              key={text}
              href="#"
              underline="hover"
              sx={{ color: "#B0B0B0", fontSize: 15 }}
            >
              {text}
            </Link>
          ))}
        </Box>
        <Typography
          sx={{ color: "#B0B0B0", textAlign: "center", fontSize: 14 }}
        >
          © Copyright {new Date().getFullYear()}. All Rights Reserved. Powered
          by{" "}
          <Box component="span" sx={{ color: "#FFD700", fontWeight: 500 }}>
            ANDROCODERS
          </Box>
        </Typography>
      </Box>
    </Paper>
  );
}

export default Footer;
