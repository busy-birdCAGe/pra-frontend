import { Box, Tab, Tabs, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import unity from "../../assets/unity.svg";
import unityWhite from "../../assets/unityWhite.svg";
import { useThemeContext } from "../../ThemeContext";

const NewAuthPage = () => {
  const [tab, setTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, tabNumber: number) => {
    setTab(tabNumber);
  };

  const boxShadowStyle = {
    boxShadow:
      "0px 0px 4px 2px rgba(0, 0, 0, 0.05), 0px 0px 8px 4px rgba(0, 0, 0, 0.05)",
  };

  const { themeMode } = useThemeContext();

  return (
    <Box>
      <Grid container>
        <Grid xs={12}>
          <Box
            sx={{
              mt: "20%",
            }}
          >
            <img
              src={themeMode == "dark" ? unityWhite : unity}
              alt="logo"
              style={{ width: 105 }}
            />
          </Box>
        </Grid>
        <Grid xs={12}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ mt: 8 }}>
              <Tabs
                style={boxShadowStyle}
                sx={{
                  minHeight: "20px",
                  mb: 6,
                  bgcolor: "white",
                  borderRadius: 100,
                  "& .MuiTab-root": {
                    borderRadius: "25px",
                    color: "black",
                    width: "108px",
                    minHeight: "20px",
                    fontWeight: "bold",
                    fontSize: "12px",
                  },
                  "& button.Mui-selected": {
                    bgcolor: "secondary.main",
                    color: "black",
                  },
                  "& .MuiTabs-indicator": {
                    backgroundColor: "transparent",
                  },
                }}
                value={tab}
                onChange={handleChange}
                centered
              >
                <Tab
                  sx={{
                    "& .MuiTouchRipple-child": {
                      backgroundColor: "secondary.dark",
                    },
                  }}
                  label="Sign In"
                />
                <Tab
                  sx={{
                    "& .MuiTouchRipple-child": {
                      backgroundColor: "secondary.dark",
                    },
                  }}
                  label="Sign Up"
                />
              </Tabs>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography component="div" role="tabpanel" p={2}>
              {tab === 0 ? <SignInForm /> : <SignUpForm setTab={setTab} />}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewAuthPage;
