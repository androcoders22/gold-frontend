import { Add, Remove, DeleteOutline } from "@mui/icons-material";
import {
  Grid,
  Typography,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Paper,
  IconButton,
  Divider,
  Stack,
  Avatar,
} from "@mui/material";
import { useTranslation } from "react-i18next";

// Mock data for cart items - replace with actual data source
const cartItems = [
  {
    id: 1,
    name: "Lorem ipsum dolor sit amet",
    color: "Black",
    size: "M",
    price: 89.99,
    quantity: 1,
    image: "https://via.placeholder.com/100x100.png?text=Chair", // Placeholder image
  },
  {
    id: 2,
    name: "Consectetur adipiscing elit",
    color: "White",
    size: "L",
    price: 64.99,
    originalPrice: 79.99,
    quantity: 2,
    image: "https://via.placeholder.com/100x100.png?text=Jacket", // Placeholder image
  },
  {
    id: 3,
    name: "Sed do eiusmod tempor",
    color: "Blue",
    size: "S",
    price: 49.99,
    quantity: 1,
    image: "https://via.placeholder.com/100x100.png?text=Polo", // Placeholder image
  },
];

const subtotal = cartItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);
const shippingCost = 4.99; // Default shipping
const tax = 27.0;
const discount = 0.0;
const total = subtotal + shippingCost + tax - discount;

function Cart() {
  const { t } = useTranslation();
  return (
    <Box sx={{ px: 10, py: 5, mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Left Side: Product List */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Paper elevation={0} sx={{ p: 2, borderRadius: "16px" }}>
            <Grid
              container
              spacing={2}
              sx={{ mb: 2, color: "text.secondary", pl: 2, pr: 2 }}
            >
              <Grid size={{ xs: 5, sm: 6 }}>
                <Typography variant="subtitle2" fontWeight="bold">
                  {t("PRODUCT")}
                </Typography>
              </Grid>
              <Grid size={{ xs: 2, sm: 2 }} sx={{ textAlign: "center" }}>
                <Typography variant="subtitle2" fontWeight="bold">
                  {t("PRICE")}
                </Typography>
              </Grid>
              <Grid size={{ xs: 3, sm: 2 }} sx={{ textAlign: "center" }}>
                <Typography variant="subtitle2" fontWeight="bold">
                  {t("QUANTITY")}
                </Typography>
              </Grid>
              <Grid size={{ xs: 2, sm: 2 }} sx={{ textAlign: "right" }}>
                <Typography variant="subtitle2" fontWeight="bold">
                  {t("Total")}
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ mb: 2 }} />

            {cartItems.map((item) => (
              <Box key={item.id} sx={{ mb: 2 }}>
                <Grid container spacing={1} alignItems="center">
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        src={item.image}
                        alt={item.name}
                        variant="rounded"
                        sx={{ width: 80, height: 80, borderRadius: "8px" }}
                      />
                      <Box>
                        <Typography variant="subtitle1" fontWeight="medium">
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {t("Color")}: {item.color} &nbsp; {t("Size")}:{" "}
                          {item.size}
                        </Typography>
                        <Button
                          startIcon={<DeleteOutline />}
                          size="small"
                          sx={{
                            textTransform: "none",
                            color: "text.secondary",
                            p: 0,
                            "&:hover": { backgroundColor: "transparent" },
                          }}
                        >
                          {t("Remove")}
                        </Button>
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid size={{ xs: 4, sm: 2 }} sx={{ textAlign: "center" }}>
                    <Typography variant="body1" fontWeight="medium">
                      ${item.price.toFixed(2)}
                    </Typography>
                    {item.originalPrice && (
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ textDecoration: "line-through" }}
                      >
                        ${item.originalPrice.toFixed(2)}
                      </Typography>
                    )}
                  </Grid>
                  <Grid size={{ xs: 4, sm: 2 }}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                      spacing={0.5}
                      sx={{
                        border: "1px solid #e0e0e0",
                        borderRadius: "20px",
                        p: "2px 4px",
                        width: "fit-content",
                        margin: "auto",
                      }}
                    >
                      <IconButton size="small" disabled={item.quantity <= 1}>
                        <Remove fontSize="small" />
                      </IconButton>
                      <Typography variant="body1" sx={{ pl: 1, pr: 1 }}>
                        {item.quantity}
                      </Typography>
                      <IconButton size="small">
                        <Add fontSize="small" />
                      </IconButton>
                    </Stack>
                  </Grid>
                  <Grid size={{ xs: 4, sm: 2 }} sx={{ textAlign: "right" }}>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="primary"
                    >
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ mt: 2 }} />
              </Box>
            ))}

            <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label={t("Coupon code")}
                  variant="outlined"
                  size="small"
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "20px" } }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent={{ xs: "flex-start", sm: "flex-end" }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "20px",
                      textTransform: "none",
                      boxShadow: "none",
                    }}
                  >
                    {t("Apply")}
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ borderRadius: "20px", textTransform: "none" }}
                  >
                    {t("Update")}
                  </Button>
                  <Button
                    variant="text"
                    color="error"
                    sx={{
                      borderRadius: "20px",
                      textTransform: "none",
                      "&:hover": { backgroundColor: "rgba(211, 47, 47, 0.04)" },
                    }}
                  >
                    {t("Clear")}
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Right Side: Order Summary */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            elevation={0}
            sx={{ p: 3, borderRadius: "16px", border: "1px solid #e0e0e0" }}
          >
            <Typography variant="h6" gutterBottom fontWeight="bold">
              {t("Order Summary")}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Stack spacing={1.5}>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body1" color="text.secondary">
                  {t("Subtotal")}
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  ${subtotal.toFixed(2)}
                </Typography>
              </Stack>
              <Box>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  {t("Shipping")}
                </Typography>
                <RadioGroup defaultValue="standard" name="shipping-options">
                  <FormControlLabel
                    value="standard"
                    control={<Radio size="small" />}
                    label={`${t("Standard Delivery")} - $${shippingCost.toFixed(
                      2
                    )}`}
                    sx={{
                      "& .MuiFormControlLabel-label": { fontSize: "0.875rem" },
                    }}
                  />
                  <FormControlLabel
                    value="express"
                    control={<Radio size="small" />}
                    label={`${t("Express Delivery")} - $12.99`}
                    sx={{
                      "& .MuiFormControlLabel-label": { fontSize: "0.875rem" },
                    }}
                  />
                  <FormControlLabel
                    value="free"
                    control={<Radio size="small" />}
                    label={t("Free Shipping (Orders over $300)")}
                    sx={{
                      "& .MuiFormControlLabel-label": { fontSize: "0.875rem" },
                    }}
                  />
                </RadioGroup>
              </Box>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body1" color="text.secondary">
                  {t("Tax")}
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  ${tax.toFixed(2)}
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body1" color="text.secondary">
                  {t("Discount")}
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight="medium"
                  sx={{ color: "green" }}
                >
                  -${discount.toFixed(2)}
                </Typography>
              </Stack>
              <Divider sx={{ mt: 1, mb: 1 }} />
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="h6" fontWeight="bold">
                  {t("Total")}
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  ${total.toFixed(2)}
                </Typography>
              </Stack>
            </Stack>
            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 3,
                mb: 1,
                borderRadius: "20px",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              {t("Proceed to Checkout")} &rarr;
            </Button>
            <Button
              fullWidth
              variant="text"
              sx={{ textTransform: "none", color: "text.secondary" }}
            >
              &larr; {t("Continue Shopping")}
            </Button>
            <Box sx={{ mt: 3, textAlign: "center" }}>
              <Typography variant="caption" color="text.secondary">
                {t("We Accept")}
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                sx={{ mt: 1 }}
              >
                {/* Placeholder for payment icons */}
                <Box component="span" sx={{ fontSize: 24 }}>
                  💳
                </Box>
                <Box component="span" sx={{ fontSize: 24 }}>
                  🅿️
                </Box>
                <Box component="span" sx={{ fontSize: 24 }}>
                  📄
                </Box>
                <Box component="span" sx={{ fontSize: 24 }}>
                  🍎
                </Box>
                <Box component="span" sx={{ fontSize: 24 }}>
                  🇬
                </Box>
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Cart;
