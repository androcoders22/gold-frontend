import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Grid, Paper } from "@mui/material";
import ProductCard from "./product-card";
import { products } from "../../../data/goldData";

const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("swiss");

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  // Filter products by category
  const filteredProducts = products.filter(
    (product) => product.category === activeTab
  );

  return (
    <Paper
      elevation={0}
      sx={{
        px: 14,
        py: 4,
        backgroundColor: "transparent",
        borderRadius: 0,
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",

          mb: 4,
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          TabIndicatorProps={{
            style: {
              backgroundColor: "#FFD700",
            },
          }}
          sx={{
            "& .MuiTab-root": {
              color: "primary.light",
              fontWeight: 500,
              fontSize: "0.9rem",
              textTransform: "none",
              letterSpacing: "0.05rem",
              "&.Mui-selected": {
                color: "#FFD700",
              },
            },
          }}
        >
          <Tab value="swiss" label="Swiss Gold Bar" />
          <Tab value="uae" label="UAE Gold Bar" />
          <Tab value="lebah" label="Lebah Coins" />
          <Tab value="silver" label="Silver Bar" />
        </Tabs>
      </Box>

      <Grid container spacing={3}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))
        ) : (
          <Grid size={{ xs: 12 }}>
            <Typography variant="h6" textAlign="center" color="text.secondary">
              No products available in this category.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};

export default ProductTabs;
