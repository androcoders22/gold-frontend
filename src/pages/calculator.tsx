import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Paper,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  styled,
  type SelectChangeEvent,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Placeholder prices (KWD per gram)
const goldPricesKWD = {
  "24K": 33.325,
  "22K": 30.559,
  "21K": 29.159,
  "18K": 25.994,
};
const silverPriceKWDPerGram = 0.34;
const OUNCE_TO_GRAM = 28.3495;

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
    "&.Mui-selected": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  },
}));

const CalculatorPage: React.FC = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);

  // Gold Calculator State
  const [goldCarat, setGoldCarat] = useState<keyof typeof goldPricesKWD>("24K");
  const [goldWeight, setGoldWeight] = useState<string>("");
  const [goldWeightUnit, setGoldWeightUnit] = useState<"gram" | "ounce">(
    "gram",
  );
  const [goldPrice, setGoldPrice] = useState<number | null>(null);

  // Silver Calculator State
  const [silverWeight, setSilverWeight] = useState<string>("");
  const [silverWeightUnit, setSilverWeightUnit] = useState<"gram" | "ounce">(
    "gram",
  );
  const [silverPrice, setSilverPrice] = useState<number | null>(null);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    // Reset prices when switching tabs
    setGoldPrice(null);
    setSilverPrice(null);
  };

  const handleGoldCalculate = () => {
    const weightNum = parseFloat(goldWeight);
    if (isNaN(weightNum) || weightNum <= 0) {
      setGoldPrice(null);
      return;
    }
    const weightInGrams =
      goldWeightUnit === "ounce" ? weightNum * OUNCE_TO_GRAM : weightNum;
    const pricePerGram = goldPricesKWD[goldCarat];
    setGoldPrice(weightInGrams * pricePerGram);
  };

  const handleSilverCalculate = () => {
    const weightNum = parseFloat(silverWeight);
    if (isNaN(weightNum) || weightNum <= 0) {
      setSilverPrice(null);
      return;
    }
    const weightInGrams =
      silverWeightUnit === "ounce" ? weightNum * OUNCE_TO_GRAM : weightNum;
    setSilverPrice(weightInGrams * silverPriceKWDPerGram);
  };

  const commonInputStyles = {
    "& .MuiInputLabel-root": {
      color: theme.palette.primary.light,
    },
    "& .MuiInputBase-input": {
      color: theme.palette.text.primary, // Ensure text input color is readable
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.primary.dark,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
      // Ensure input background is contrasting for readability
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255, 255, 255, 0.09)"
          : theme.palette.background.paper,
    },
    "& .MuiSelect-icon": {
      color: theme.palette.primary.light,
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        padding: theme.spacing(3),
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          py: 10,
          padding: theme.spacing(4),
          width: "100%",
          maxWidth: "600px",
          backgroundColor: theme.palette.background.paper,
          borderRadius: theme.shape.borderRadius * 2,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          sx={{ color: theme.palette.primary.main, fontWeight: "bold" }}
        >
          Precious Metals Calculator
        </Typography>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          centered
          indicatorColor="primary"
          textColor="primary"
          sx={{ marginBottom: theme.spacing(3) }}
        >
          <Tab
            label="Gold"
            sx={{
              color: theme.palette.primary.light,
              "&.Mui-selected": { color: theme.palette.primary.main },
            }}
          />
          <Tab
            label="Silver"
            sx={{
              color: theme.palette.primary.light,
              "&.Mui-selected": { color: theme.palette.primary.main },
            }}
          />
        </Tabs>

        {tabValue === 0 && ( // Gold Calculator
          <Box component="form" noValidate autoComplete="off">
            <Grid container spacing={3}>
              <Grid size={{ xs: 12 }}>
                <FormControl fullWidth sx={commonInputStyles}>
                  <InputLabel id="gold-carat-label">Carat</InputLabel>
                  <Select
                    labelId="gold-carat-label"
                    value={goldCarat}
                    label="Carat"
                    onChange={(
                      e: SelectChangeEvent<keyof typeof goldPricesKWD>,
                    ) =>
                      setGoldCarat(e.target.value as keyof typeof goldPricesKWD)
                    }
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          backgroundColor: theme.palette.background.paper,
                          color: theme.palette.text.primary,
                        },
                      },
                    }}
                  >
                    {Object.keys(goldPricesKWD).map((carat) => (
                      <MenuItem
                        key={carat}
                        value={carat}
                        sx={{
                          color: theme.palette.text.primary,
                          "&:hover": {
                            backgroundColor: theme.palette.action.hover,
                          },
                        }}
                      >
                        {carat}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 8 }}>
                <TextField
                  fullWidth
                  label="Weight"
                  type="number"
                  value={goldWeight}
                  onChange={(e) => setGoldWeight(e.target.value)}
                  sx={commonInputStyles}
                  InputProps={{
                    inputProps: { min: 0 },
                  }}
                />
              </Grid>
              <Grid
                size={{ xs: 12, sm: 4 }}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <StyledToggleButtonGroup
                  value={goldWeightUnit}
                  exclusive
                  onChange={(_, newValue) => {
                    if (newValue !== null) {
                      setGoldWeightUnit(newValue);
                    }
                  }}
                  aria-label="gold weight unit"
                >
                  <ToggleButton value="gram" aria-label="grams">
                    gram
                  </ToggleButton>
                  <ToggleButton value="ounce" aria-label="ounces">
                    ounce
                  </ToggleButton>
                </StyledToggleButtonGroup>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleGoldCalculate}
                  sx={{
                    padding: theme.spacing(1.5),
                    fontWeight: "bold",
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.getContrastText(
                      theme.palette.primary.main,
                    ),
                    "&:hover": {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Calculate Gold Price
                </Button>
              </Grid>
              {goldPrice !== null && (
                <Grid size={{ xs: 12 }}>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{
                      marginTop: theme.spacing(2),
                      color: theme.palette.primary.light,
                      fontWeight: "medium",
                    }}
                  >
                    Estimated Price:{" "}
                    <span
                      style={{
                        color: theme.palette.primary.main,
                        fontWeight: "bold",
                      }}
                    >
                      {goldPrice.toFixed(3)} KWD
                    </span>
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Box>
        )}

        {tabValue === 1 && ( // Silver Calculator
          <Box component="form" noValidate autoComplete="off">
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 8 }}>
                <TextField
                  fullWidth
                  label="Weight"
                  type="number"
                  value={silverWeight}
                  onChange={(e) => setSilverWeight(e.target.value)}
                  sx={commonInputStyles}
                  InputProps={{
                    inputProps: { min: 0 },
                  }}
                />
              </Grid>
              <Grid
                size={{ xs: 12, sm: 4 }}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <StyledToggleButtonGroup
                  value={silverWeightUnit}
                  exclusive
                  onChange={(_, newValue) => {
                    if (newValue !== null) {
                      setSilverWeightUnit(newValue);
                    }
                  }}
                  aria-label="silver weight unit"
                >
                  <ToggleButton value="gram" aria-label="grams">
                    gram
                  </ToggleButton>
                  <ToggleButton value="ounce" aria-label="ounces">
                    ounce
                  </ToggleButton>
                </StyledToggleButtonGroup>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSilverCalculate}
                  sx={{
                    padding: theme.spacing(1.5),
                    fontWeight: "bold",
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.getContrastText(
                      theme.palette.primary.main,
                    ),
                    "&:hover": {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Calculate Silver Price
                </Button>
              </Grid>
              {silverPrice !== null && (
                <Grid size={{ xs: 12 }}>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{
                      marginTop: theme.spacing(2),
                      color: theme.palette.primary.light,
                      fontWeight: "medium",
                    }}
                  >
                    Estimated Price:{" "}
                    <span
                      style={{
                        color: theme.palette.primary.main,
                        fontWeight: "bold",
                      }}
                    >
                      {silverPrice.toFixed(3)} KWD
                    </span>
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default CalculatorPage;
