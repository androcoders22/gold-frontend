import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Breadcrumbs,
  Link,
  IconButton,
} from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ProductCard from "../components/home/Products/product-card";
import { shopProducts } from "../data/shopProducts";
import { useTranslation } from "react-i18next";

const ShopPage: React.FC = () => {
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState({
    category: "SWISS GOLD BAR",
    weight: "",
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  // Filter products based on current filters
  const filteredProducts = shopProducts.filter((product) => {
    let matchesCategory = true;
    let matchesWeight = true;

    if (filters.category) {
      matchesCategory = product.category === filters.category;
    }

    if (filters.weight) {
      // Basic weight filtering, can be made more sophisticated
      const [min, max] = filters.weight.split("-").map(Number);
      const productWeight = parseFloat(product.weight); // Assuming weight is like "1 Gram"
      if (max) {
        matchesWeight = productWeight >= min && productWeight <= max;
      } else {
        matchesWeight = productWeight >= min;
      }
    }
    return matchesCategory && matchesWeight;
  });

  return (
    <Container
      maxWidth="xl"
      sx={{ py: 4, backgroundColor: "background.default", color: "white" }}
    >
      {/* Breadcrumbs */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3, color: "lightgray" }}>
        <Link underline="hover" color="inherit" href="/">
          {t("Home")}
        </Link>
        <Link underline="hover" color="inherit" href="/categories">
          {t("Categories")}
        </Link>
        <Typography color="white">{t("Swiss Gold Bar")}</Typography>
      </Breadcrumbs>

      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "white", textAlign: "center", mb: 4 }}
      >
        {t("Swiss Gold Bar")}
      </Typography>

      <Grid container spacing={4}>
        {/* Sidebar for Filters */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Box
            sx={{
              p: 2,
              backgroundColor: "background.default",
              borderRadius: 1,
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
              {t("Categories")}
            </Typography>
            {/* Replace with dynamic categories if needed */}
            <FormControl component="fieldset" sx={{ mb: 3 }}>
              <RadioGroup
                aria-label="category"
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
              >
                <FormControlLabel
                  value="SWISS GOLD BAR"
                  control={
                    <Radio
                      sx={{
                        color: "#FFD500",
                        "&.Mui-checked": { color: "#FFD500" },
                      }}
                    />
                  }
                  label={t("Swiss Gold Bar")}
                  sx={{ color: "lightgray" }}
                />
                <FormControlLabel
                  value="UAE GOLD BAR"
                  control={
                    <Radio
                      sx={{
                        color: "#FFD500",
                        "&.Mui-checked": { color: "#FFD500" },
                      }}
                    />
                  }
                  label={t("Uae Gold Bar")}
                  sx={{ color: "lightgray" }}
                />
                <FormControlLabel
                  value="LERAH COINS"
                  control={
                    <Radio
                      sx={{
                        color: "#FFD500",
                        "&.Mui-checked": { color: "#FFD500" },
                      }}
                    />
                  }
                  label={t("Lerah Coins")}
                  sx={{ color: "lightgray" }}
                />
                <FormControlLabel
                  value="SILVER BAR"
                  control={
                    <Radio
                      sx={{
                        color: "#FFD500",
                        "&.Mui-checked": { color: "#FFD500" },
                      }}
                    />
                  }
                  label={t("Silver Bar")}
                  sx={{ color: "lightgray" }}
                />
              </RadioGroup>
            </FormControl>

            <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
              {t("Weight by gram")}
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="weight"
                name="weight"
                value={filters.weight}
                onChange={handleFilterChange}
              >
                <FormControlLabel
                  value="10-50"
                  control={
                    <Radio
                      sx={{
                        color: "#FFD500",
                        "&.Mui-checked": { color: "#FFD500" },
                      }}
                    />
                  }
                  label="10 - 50"
                  sx={{ color: "lightgray" }}
                />
                <FormControlLabel
                  value="50-100"
                  control={
                    <Radio
                      sx={{
                        color: "#FFD500",
                        "&.Mui-checked": { color: "#FFD500" },
                      }}
                    />
                  }
                  label="50 - 100"
                  sx={{ color: "lightgray" }}
                />
                <FormControlLabel
                  value="100-200"
                  control={
                    <Radio
                      sx={{
                        color: "#FFD500",
                        "&.Mui-checked": { color: "#FFD500" },
                      }}
                    />
                  }
                  label="100 - 200"
                  sx={{ color: "lightgray" }}
                />
                <FormControlLabel
                  value="200-10000" // Assuming this means 200+
                  control={
                    <Radio
                      sx={{
                        color: "#FFD500",
                        "&.Mui-checked": { color: "#FFD500" },
                      }}
                    />
                  }
                  label="200 - 10000"
                  sx={{ color: "lightgray" }}
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>

        {/* Product Listing */}
        <Grid size={{ xs: 12, md: 9 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mb: 2,
            }}
          >
            <IconButton
              onClick={() => setViewMode("grid")}
              color={viewMode === "grid" ? "primary" : "default"}
            >
              <ViewModuleIcon />
            </IconButton>
            <IconButton
              onClick={() => setViewMode("list")}
              color={viewMode === "list" ? "primary" : "default"}
              sx={{ display: "none" /* Hiding less common views for now */ }}
            >
              <ViewQuiltIcon />
            </IconButton>
            <IconButton
              onClick={() => setViewMode("list")}
              color={viewMode === "list" ? "primary" : "default"}
            >
              <ViewListIcon />
            </IconButton>
          </Box>

          <Grid container spacing={3}>
            {filteredProducts.map((product) => (
              <Grid
                key={product.id}
                size={{
                  xs: 12,
                  sm: viewMode === "grid" ? 6 : 12,
                  md: viewMode === "grid" ? 4 : 12,
                }}
              >
                <ProductCard product={product as any} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShopPage;
