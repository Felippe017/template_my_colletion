import React from "react";
import Typography from "@mui/material/Typography";
/* import Divider from "@mui/material/Divider"; */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { HeaderComponent } from "@app/components/HeaderComponent/HeaderComponent";
import { HomeContainer, Divider } from "./styles.tsx";

export const Home: React.FC = () => {
  return (
    <>
      <HeaderComponent>
        <HomeContainer>
          <Box component="div">
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "nowrap",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "30px",
                  lineHeight: "36.31px",
                  color: "white",
                }}
              >
                DESTAQUES
              </Typography>
              <Divider />
            </Grid>
          </Box>
        </HomeContainer>
      </HeaderComponent>
    </>
  );
};
