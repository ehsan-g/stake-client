import { CircularProgress, Grid } from "@mui/material";
import { Suspense, FC } from "react";
const Loadable = (Component: FC) => (props: any) =>
  (
    <Suspense
      fallback={
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
      }
    >
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
