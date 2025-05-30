// filepath: c:\Users\Admin\Desktop\fine-gold\src\pages\MyAccount.tsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  Button,
  TextField,
  Stack,
  Grid,
  Divider,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/auth-context";
import OrderHistory from "../components/my-account/order-history";

const MyAccountPage: React.FC = () => {
  const { t } = useTranslation();
  const { isAuthenticated } = useAuth();

  // User profile data
  const [profileData, setProfileData] = useState({
    name: "",
    username: "",
    status: "",
    aboutMe: "",
    profilePicture: "https://via.placeholder.com/150", // Placeholder image
    mainPhone: "",
    secondaryPhone: "",
    address: "",
  });

  // For username availability - only example, not functional
  const usernameChangeDate = "25/04/2024";

  const handleFieldChange = (field: string, value: string) => {
    setProfileData({
      ...profileData,
      [field]: value,
    });
  };

  const handleSaveChanges = () => {
    // In a real application, you would save the changes to a backend
    console.log("Saving profile changes:", profileData);
    alert(t("Profile updated successfully"));
  };

  const handlePictureUpload = () => {
    // In a real application, this would open a file dialog
    console.log("Picture upload clicked");
    // For this example, we'll just use a placeholder image
  };

  const handleRemovePicture = () => {
    // In a real application, this would remove the profile picture
    console.log("Remove picture clicked");
    setProfileData({
      ...profileData,
      profilePicture: "",
    });
  };

  if (!isAuthenticated) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h5" align="center">
          Please log in to view your account.
        </Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ backgroundColor: "background.paper", p: 5, minHeight: "80vh" }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 2,
                backgroundColor: "background.paper",
              }}
            >
              {/* Profile picture section */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar
                    src={profileData.profilePicture}
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: "primary.main",
                    }}
                  />
                  <Stack direction="row" spacing={1}>
                    <Button
                      variant="contained"
                      onClick={handlePictureUpload}
                      sx={{
                        backgroundColor: "primary.main",
                        "&:hover": { backgroundColor: "primary.dark" },
                      }}
                    >
                      {t("Change picture")}
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={handleRemovePicture}
                      sx={{
                        borderColor: "error.main",
                        color: "error.main",
                        "&:hover": {
                          backgroundColor: "error.main",
                          color: "white",
                        },
                      }}
                    >
                      {t("Remove picture")}
                    </Button>
                  </Stack>
                </Box>
              </Box>

              <Divider sx={{ my: 1 }} />

              {/* Profile information */}
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="subtitle1">
                    {t("Profile name")}
                  </Typography>
                  <TextField
                    fullWidth
                    value={profileData.name}
                    onChange={(e) => handleFieldChange("name", e.target.value)}
                    variant="outlined"
                    size="small"
                    sx={{ backgroundColor: "#1E1E1E" }}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="subtitle1">{t("Username")}</Typography>
                  <Box sx={{ position: "relative" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <TextField
                        fullWidth
                        value={profileData.username}
                        onChange={(e) =>
                          handleFieldChange("username", e.target.value)
                        }
                        variant="outlined"
                        size="small"
                        sx={{ backgroundColor: "#1E1E1E" }}
                      />
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      {t("Available change in")} {usernameChangeDate}
                    </Typography>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="subtitle1">
                    {t("Main phone number")}
                  </Typography>
                  <TextField
                    fullWidth
                    value={profileData.mainPhone}
                    onChange={(e) =>
                      handleFieldChange("mainPhone", e.target.value)
                    }
                    variant="outlined"
                    size="small"
                    sx={{ backgroundColor: "#1E1E1E" }}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="subtitle1">
                    {t("Secondary phone number")}
                  </Typography>
                  <TextField
                    fullWidth
                    value={profileData.secondaryPhone}
                    onChange={(e) =>
                      handleFieldChange("secondaryPhone", e.target.value)
                    }
                    variant="outlined"
                    size="small"
                    sx={{ backgroundColor: "#1E1E1E" }}
                  />
                </Grid>

                <Grid size={{ xs: 6 }}>
                  <Typography variant="subtitle1">{t("Address")}</Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={2}
                    value={profileData.address}
                    onChange={(e) =>
                      handleFieldChange("address", e.target.value)
                    }
                    variant="outlined"
                    sx={{ backgroundColor: "#1E1E1E" }}
                    size="small"
                  />
                </Grid>

                <Grid size={{ xs: 6 }}>
                  <Typography variant="subtitle1">{t("About me")}</Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={2}
                    value={profileData.aboutMe}
                    onChange={(e) =>
                      handleFieldChange("aboutMe", e.target.value)
                    }
                    variant="outlined"
                    sx={{ backgroundColor: "#1E1E1E" }}
                    size="small"
                  />
                </Grid>
              </Grid>

              <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSaveChanges}
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                  }}
                >
                  {t("Save changes")}
                </Button>
              </Box>
            </Paper>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Container maxWidth="lg">
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 2,
                backgroundColor: "background.paper",
              }}
            >
              <OrderHistory />
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyAccountPage;
