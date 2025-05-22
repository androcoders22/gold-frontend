import { Box, Typography, Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

function PromoSection() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: 5,
        px: 15,
      }}
    >
      {/* YouTube Background Video */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <Box
          component="iframe"
          src="https://www.youtube.com/embed/bEbgBCUvEkE?autoplay=1&mute=1&controls=0&loop=1&playlist=bEbgBCUvEkE&modestbranding=1&showinfo=0&rel=0"
          title="YouTube video background"
          allow="autoplay; encrypted-media"
          allowFullScreen
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "120vw",
            height: "120vh",
            minWidth: "100%",
            minHeight: "100%",
            transform: "translate(-50%, -50%)",
            border: 0,
            pointerEvents: "none",
          }}
        />
        {/* Overlay for better readability */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            zIndex: 1,
          }}
        />
      </Box>
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#FFD700",
            fontWeight: 500,
            mb: 1,
            textTransform: "uppercase",
          }}
        >
          {t("Exclusive Offer")}
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
          {t("FINE GOLD")}
        </Typography>
        <Typography variant="body1" sx={{ color: "#B0B0B0", mb: 4 }}>
          {t("BEST GOLD WITH FINE GOLD")}
        </Typography>
        <Stack spacing={3}>
          <Typography
            variant="h3"
            sx={{ color: "#FFD700", fontWeight: "bold" }}
          >
            {t("10 Gram")}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ maxWidth: 180, fontWeight: "bold" }}
          >
            {t("SHOP NOW")}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default PromoSection;
