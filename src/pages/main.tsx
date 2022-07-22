import { Alert, Grid } from "@mui/material";
import { useEffect } from "react";
import Accordions from "../components/Accordions";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { fetchData } from "../redux/features/google/googleSlice";

export default function Main() {
  const dispatch = useAppDispatch();

  const { error } = useAppSelector((state) => state.googleQuery);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={8}>
        {error && <Alert severity="warning">{error}</Alert>}
      </Grid>
      <Grid item xs={12}>
        <Accordions />
      </Grid>
    </Grid>
  );
}
