import { Box, Typography, Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import MyBox from "../../MyBox";

function PromoSection() {
  const { t } = useTranslation();
  return (
    <MyBox
      sx={{
        position: "relative",
        overflow: "hidden",
        py: 5,
      }}
    >
      {/* Local Background Video */}
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
          component="video"
          src="/hero-video.webm"
          autoPlay
          muted
          loop
          playsInline
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "120vw",
            height: "120vh",
            minWidth: "100%",
            minHeight: "100%",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
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
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: {
            xs: "center",
            sm: "left",
          },
        }}
      >
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
        <Stack
          spacing={3}
          sx={{
            alignItems: {
              xs: "center",
              sm: "flex-start",
            },
          }}
        >
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
            sx={{
              maxWidth: 180,
              fontWeight: "bold",
            }}
          >
            {t("SHOP NOW")}
          </Button>
        </Stack>
      </Box>
    </MyBox>
  );
}

export default PromoSection;
