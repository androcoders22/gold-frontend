import { Box, Grid, Paper, Typography } from "@mui/material";
import { goldData } from "../../data/goldData";
import GoldPriceHighChart from "./gold-price-chart";
import { useTranslation } from "react-i18next";
import MyBox from "../MyBox";

const GoldAndSilverBox = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
      <Paper
        elevation={0}
        sx={{
          flex: 6,
          background: "background.paper",
          border: "1px solid #FFD700",
          borderRadius: 2,
          p: 2,
          color: "#FFD700",
          minHeight: 140,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" sx={{ mb: 1, color: "#FFD700" }}>
          {t("Price per ounce")}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "#FFD700",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1,
            }}
          >
            <span role="img" aria-label="gold" style={{ fontSize: 20 }}>
              🪙
            </span>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ color: "#fff" }}>
              {t("GOLD")}
            </Typography>
            <Typography variant="caption" sx={{ color: "#B0B0B0" }}>
              {t("CFDS ON GOLD (US$ / OZ)")}
            </Typography>
          </Box>
        </Box>
        <Typography variant="h5" sx={{ color: "#FF5A5A", fontWeight: "bold" }}>
          3,299.930
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: "#1ecb98", fontWeight: 500 }}
        >
          +0.29% (9.66)
        </Typography>
      </Paper>
      <Paper
        elevation={0}
        sx={{
          flex: 4, // 40%
          background: "background.paper",
          border: "1px solid #FFD700",
          borderRadius: 2,
          p: 2,
          color: "#FFD700",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          // justifyContent: "center",
        }}
      >
        <Typography variant="h6" sx={{ color: "#FFD700", mb: 1 }}>
          {t("Silver Kilo")}
        </Typography>
        <Typography variant="h5" sx={{ color: "#fff", fontWeight: "bold" }}>
          365.054 KD
        </Typography>
        <Box sx={{ color: "#FF5A5A", fontWeight: "bold", fontSize: 24, mt: 1 }}>
          ▼
        </Box>
      </Paper>
    </Box>
  );
};

const GoldPricesTable = () => {
  const { t } = useTranslation();
  const last = goldData.last_tow[0];
  const prices = [
    { label: "24K", value: last["24k"], color: "#ffe066" },
    { label: "22K", value: last["22k"], color: "#ffd700" },
    { label: "21K", value: last["21k"], color: "#ffb700" },
    { label: "18K", value: last["18k"], color: "#ff8c00" },
  ];
  return (
    <Box sx={{ mt: 2, mb: 3 }}>
      <Typography variant="h6" sx={{ color: "#FFD700", mb: 1 }}>
        {t("Gold Prices")}
      </Typography>
      {prices.map((p) => (
        <Box
          key={p.label}
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 1,
            borderBottom: "1px solid #222", // changed from #223346
            pb: 0.5,
          }}
        >
          <Box
            sx={{
              minWidth: 48,
              background: p.color,
              color: "#000",
              fontWeight: 700,
              borderRadius: 1,
              px: 1.5,
              py: 0.5,
              mr: 2,
              textAlign: "center",
            }}
          >
            {p.label}
          </Box>
          <Box sx={{ flexGrow: 1, borderBottom: "1px solid #222" }} />
          <Typography
            variant="subtitle1"
            sx={{ color: "#B0B0B0", fontWeight: 700, ml: 2 }}
          >
            {p.value.toFixed(3)} KD
          </Typography>
          <Box sx={{ ml: 1, color: "#FF5A5A", fontWeight: "bold" }}>▼</Box>
        </Box>
      ))}
    </Box>
  );
};

function GraphSection() {
  return (
    <MyBox sx={{ mt: 3, pt: 5, flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6, lg: 5 }}>
          <GoldAndSilverBox />
          <GoldPricesTable />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 7 }}>
          <GoldPriceHighChart />
        </Grid>
      </Grid>
    </MyBox>
  );
}

export default GraphSection;
