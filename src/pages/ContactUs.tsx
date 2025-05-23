import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactUsPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert(t("contact_us.form.submit_success"));
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Box
      sx={{ backgroundColor: "background.paper", py: 5, color: "text.primary" }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "primary.main",
            mb: 4,
          }}
        >
          {t("contact_us.title")}
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0, borderRadius: "8px" }}
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=40.7128,-74.006&zoom=11`}
              allowFullScreen
            ></iframe>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                backgroundColor: "background.default",
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                sx={{ fontWeight: "medium", color: "primary.main", mb: 2 }}
              >
                {t("contact_us.form.title")}
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label={t("contact_us.form.name_label")}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  required
                  variant="outlined"
                  size="small"
                />
                <TextField
                  fullWidth
                  label={t("contact_us.form.email_label")}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                  variant="outlined"
                  size="small"
                />
                <TextField
                  fullWidth
                  label={t("contact_us.form.subject_label")}
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  margin="normal"
                  required
                  variant="outlined"
                  size="small"
                />
                <TextField
                  fullWidth
                  label={t("contact_us.form.message_label")}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  required
                  multiline
                  rows={3}
                  variant="outlined"
                  size="small"
                />
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="medium"
                  sx={{ mt: 2, fontWeight: "bold" }}
                >
                  {t("contact_us.form.submit_button")}
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>

        <Box
          sx={{
            width: "100%",
            mt: 4,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          {" "}
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              p: 3,
              backgroundColor: "background.default",
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontWeight: "medium", color: "primary.main" }}
            >
              {t("contact_us.info.title")}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnIcon color="primary" sx={{ mr: 2, fontSize: 40 }} />
              <Typography variant="body1">
                {t("contact_us.info.address_line1")}
                <br />
                {t("contact_us.info.address_line2")}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PhoneIcon color="primary" sx={{ mr: 2, fontSize: 40 }} />
              <Typography variant="body1">
                {t("contact_us.info.phone")}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EmailIcon color="primary" sx={{ mr: 2, fontSize: 40 }} />
              <Typography variant="body1">
                {t("contact_us.info.email")}
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUsPage;
