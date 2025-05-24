import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Button,
  Grid,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

const OrderHistory: React.FC = () => {
  const orders = [
    {
      id: 1,
      date: "2025-05-20",
      total: "$120.00",
      image: "https://placehold.co/50x50",
    },
    {
      id: 2,
      date: "2025-05-15",
      total: "$80.00",
      image: "https://placehold.co/50x50",
    },
    {
      id: 3,
      date: "2025-05-10",
      total: "$50.00",
      image: "https://placehold.co/50x50",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Necklace",
      price: "$99",
      image: "https://placehold.co/100x100",
    },
    {
      id: 2,
      name: "Earrings",
      price: "$79",
      image: "https://placehold.co/100x100",
    },
    {
      id: 3,
      name: "Handbag",
      price: "$149",
      image: "https://placehold.co/100x100",
    },
  ];

  const handleReorder = (orderId: number) => {
    console.log(`Reordering order #${orderId}`);
    alert(`Order #${orderId} has been reordered.`);
  };

  const handleAddToCart = (productId: number) => {
    console.log(`Adding product #${productId} to cart.`);
    alert(`Product #${productId} has been added to your cart.`);
  };

  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, md: 5 }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#fff" }}
        >
          Your Orders
        </Typography>
        <List>
          {orders.map((order) => (
            <ListItem
              key={order.id}
              divider
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#292929",
                borderRadius: 2,
                marginBottom: 2,
                padding: 2,
              }}
            >
              <Avatar
                src={order.image}
                sx={{ marginRight: 2, width: 50, height: 50 }}
              />
              <ListItemText
                primary={`Order #${order.id}`}
                secondary={`Date: ${order.date} | Total: ${order.total}`}
                primaryTypographyProps={{
                  style: { color: "#fff", fontWeight: "bold" },
                }}
                secondaryTypographyProps={{ style: { color: "#aaa" } }}
              />
              <IconButton size="small" onClick={() => handleReorder(order.id)}>
                <ChangeCircleIcon
                  sx={{ color: "primary.main", fontSize: 40 }}
                />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Grid>

      <Grid size={{ xs: 12, md: 7 }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#fff" }}
        >
          Featured Products
        </Typography>
        <Grid container spacing={2}>
          {featuredProducts.map((product) => (
            <Grid size={{ xs: 12, sm: 6 }} key={product.id}>
              <Card
                sx={{
                  color: "#fff",
                  borderRadius: 2,
                }}
              >
                <CardMedia
                  component="img"
                  height="100"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                  >
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#aaa" }}>
                    {product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => handleAddToCart(product.id)}
                    sx={{ textTransform: "none" }}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OrderHistory;
