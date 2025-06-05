// filepath: c:\Users\Admin\Desktop\fine-gold\src\pages\MyAccount.tsx
import React, { useEffect, useState } from "react";
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema, type ProfileInput } from "../schemas/profile";
import { useAuth } from "../context/auth-context";
import { useProfile } from "../hooks/mutations/useProfile";
// import OrderHistory from "../components/my-account/order-history";
import MyBox from "../components/MyBox";

const MyAccountPage: React.FC = () => {
  const { t } = useTranslation();
  const { isAuthenticated } = useAuth();

  const { profile, updateProfile, isUpdating } = useProfile();
  const [canUpdateUsername, setCanUpdateUsername] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<ProfileInput>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      username: "",
      aboutMe: "",
      mainPhone: "",
      secondaryPhone: "",
      address: "",
    },
  });

  useEffect(() => {
    if (profile) {
      reset(profile);
    }
  }, [profile, reset]);

  useEffect(() => {
    if (profile) {
      const { usernameUpdatedAt } = profile;
      // cool down period 24 hours
      const canUpdate = usernameUpdatedAt
        ? new Date().getTime() - new Date(usernameUpdatedAt).getTime() >
          24 * 60 * 60 * 1000
        : true;

      setCanUpdateUsername(canUpdate);
    }
  }, [profile]);

  const onSubmit = (data: ProfileInput) => {
    console.log("Profile data submitted:", data);
    updateProfile(data);
  };

  const {
    handleFileSelect,
    previewUrl,
    selectedFile,
    updatePicture,
    clearSelection,
    isUpdatingPicture,
  } = useProfile();

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handlePictureUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
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
    <MyBox
      sx={{ backgroundColor: "background.paper", p: 5, minHeight: "80vh" }}
    >
      {/* <Grid container spacing={2}>
        <Grid> */}
      <Box>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
            backgroundColor: "background.paper",
            maxWidth: 800,
            mx: "auto",
          }}
        >
          {/* Profile picture section */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
                accept="image/png, image/jpeg"
              />
              <Avatar
                src={
                  previewUrl ||
                  profile?.imageUrl ||
                  "https://via.placeholder.com/150"
                }
                sx={{
                  width: 80,
                  height: 80,
                  bgcolor: "primary.main",
                }}
              />
              <Stack direction="row" spacing={1}>
                {selectedFile ? (
                  <>
                    <Button
                      variant="contained"
                      onClick={() => updatePicture()}
                      disabled={isUpdatingPicture}
                      sx={{
                        backgroundColor: "success.main",
                        "&:hover": { backgroundColor: "success.dark" },
                      }}
                    >
                      {t("Confirm")}
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={clearSelection}
                      disabled={isUpdatingPicture}
                      sx={{
                        borderColor: "error.main",
                        color: "error.main",
                        "&:hover": {
                          backgroundColor: "error.main",
                          color: "white",
                        },
                      }}
                    >
                      {t("Cancel")}
                    </Button>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </Stack>
            </Box>
          </Box>

          <Divider sx={{ my: 1 }} />

          {/* Profile information */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="subtitle1">{t("Profile name")}</Typography>
                <TextField
                  fullWidth
                  {...register("name")}
                  error={!!errors.name}
                  helperText={errors.name?.message}
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
                      {...register("username")}
                      onChange={(e) => {
                        if (canUpdateUsername) {
                          // remove non alphanumeric characters
                          const value = e.target.value.replace(
                            /[^a-zA-Z0-9_]/g,
                            "",
                          );
                          e.target.value = value;
                          register("username").onChange(e);
                        }
                      }}
                      error={!!errors.username}
                      disabled={!canUpdateUsername}
                      helperText={errors.username?.message}
                      variant="outlined"
                      size="small"
                      sx={{ backgroundColor: "#1E1E1E" }}
                    />
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    {t("You can change your username once every 24 hours.")}
                  </Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="subtitle1">
                  {t("Main phone number")}
                </Typography>
                <TextField
                  fullWidth
                  {...register("mainPhone")}
                  error={!!errors.mainPhone}
                  helperText={errors.mainPhone?.message}
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
                  {...register("secondaryPhone")}
                  error={!!errors.secondaryPhone}
                  helperText={errors.secondaryPhone?.message}
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
                  {...register("address")}
                  error={!!errors.address}
                  helperText={errors.address?.message}
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
                  {...register("aboutMe")}
                  error={!!errors.aboutMe}
                  helperText={errors.aboutMe?.message}
                  variant="outlined"
                  sx={{ backgroundColor: "#1E1E1E" }}
                  size="small"
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isUpdating || !isDirty}
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                }}
              >
                {isUpdating ? t("Saving...") : t("Save changes")}
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
      {/* </Grid> */}
      {/* <Grid size={{ xs: 12, md: 7 }}>
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
        </Grid> */}
      {/* </Grid> */}
    </MyBox>
  );
};

export default MyAccountPage;
