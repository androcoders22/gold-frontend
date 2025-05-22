import { Box, Typography, Button, Stack } from "@mui/material";

function PromoSection() {
  return (
    <Box
      sx={{
        py: 5,
        px: 15,
        backgroundColor: "background.default", // use theme background
      }}
    >
      <Box>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#FFD700",
            fontWeight: 500,
            mb: 1,
            textTransform: "uppercase",
          }}
        >
          Exclusive Offer
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            mb: 2,
            textTransform: "uppercase",
          }}
        >
          FINE GOLD
        </Typography>
        <Typography variant="body1" sx={{ color: "#B0B0B0", mb: 4 }}>
          BEST GOLD WITH FINE GOLD
        </Typography>
        <Stack spacing={3}>
          <Typography
            variant="h3"
            sx={{ color: "#FFD700", fontWeight: "bold" }}
          >
            10 Gram
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ maxWidth: 180, fontWeight: "bold" }}
          >
            SHOP NOW
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default PromoSection;
