import { experimentalStyled, Container, Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainWrapper = experimentalStyled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  width: "100%",
}));
const PageWrapper = experimentalStyled("div")(() => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
}));

const FullLayout = () => {
  return (
    <MainWrapper>
      <PageWrapper>
        <Container maxWidth="sm" sx={{ margin: "auto" }}>
          <Box
            sx={{
              minHeight: "calc(100vh - 200px)",
              paddingTop: "20px",
              paddingBottom: "30px",
            }}
          >
            <Outlet />
          </Box>
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
};

export default FullLayout;
