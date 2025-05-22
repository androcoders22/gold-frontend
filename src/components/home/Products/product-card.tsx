import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  IconButton,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import type { ProductData } from "../../../data/goldData";
import { useTranslation } from "react-i18next";

interface ProductCardProps {
  product: ProductData;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.paper", // use theme background.paper
        border: "1px solid #222", // changed from #223346 to a more neutral dark border
        position: "relative",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 20px rgba(0, 0, 0, 0.3)",
          borderColor: "#FFD700",
        },
      }}
    >
      {product.isNew && (
        <Chip
          label="NEW"
          size="small"
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            bgcolor: "#FFD700",
            color: "#000",
            fontWeight: "bold",
            zIndex: 1,
          }}
        />
      )}

      <Box sx={{ p: 2, position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
          sx={{
            borderRadius: 1,
            objectFit: "cover",
            backgroundColor: "background.paper",
          }}
        />
      </Box>

      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {product.weight}
        </Typography>

        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "medium",
            mb: 1,
            flexGrow: 1,
          }}
        >
          {product.name}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#FFD700",
              fontWeight: "bold",
              mt: "auto",
            }}
          >
            {product.price}
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton size="small" color="primary">
              <ShoppingCartIcon />
            </IconButton>
            <Button variant="outlined" size="medium" color="primary">
              {t("Buy Now")}
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
