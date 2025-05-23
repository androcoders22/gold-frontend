import React from "react";
import { Container, Typography, Box, Paper, Grid, Avatar } from "@mui/material";
import { useTranslation } from "react-i18next";
import BusinessIcon from "@mui/icons-material/Business";
import GroupIcon from "@mui/icons-material/Group";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

const AboutUsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{ backgroundColor: "background.paper", py: 5, color: "text.primary" }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "primary.main",
            mb: 4,
          }}
        >
          {t("about_us.title")}
        </Typography>

        <Paper
          elevation={3}
          sx={{
            p: 4,
            backgroundColor: "background.default",
            borderRadius: 2,
            mb: 4,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: "medium", color: "primary.main" }}
          >
            {t("about_us.mission_title")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("about_us.mission_text")}
          </Typography>
        </Paper>

        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                backgroundColor: "background.default",
                borderRadius: 2,
                height: "100%",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
                  <BusinessIcon />
                </Avatar>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: "medium" }}
                >
                  {t("about_us.who_we_are_title")}
                </Typography>
              </Box>
              <Typography variant="body1">
                {t("about_us.who_we_are_text")}
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                backgroundColor: "background.default",
                borderRadius: 2,
                height: "100%",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
                  <EmojiObjectsIcon />
                </Avatar>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: "medium" }}
                >
                  {t("about_us.our_values_title")}
                </Typography>
              </Box>
              <Typography variant="body1">
                {t("about_us.our_values_text")}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "medium",
            color: "primary.main",
            mt: 10,
            mb: 3,
          }}
        >
          {t("about_us.team_title")}
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            {
              name: t("about_us.team_member1_name"),
              role: t("about_us.team_member1_role"),
            },
            {
              name: t("about_us.team_member2_name"),
              role: t("about_us.team_member2_role"),
            },
            {
              name: t("about_us.team_member3_name"),
              role: t("about_us.team_member3_role"),
            },
          ].map((member, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: "center",
                  backgroundColor: "background.default",
                  borderRadius: 2,
                }}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    margin: "0 auto 16px",
                    bgcolor: "primary.light",
                  }}
                >
                  <GroupIcon sx={{ fontSize: 40 }} />
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
