import { Box, Typography, Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
function PromoSection() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        py: 5,
        px: 15,
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
