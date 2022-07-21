import { Grid } from "@mui/material";
import { useEffect } from "react";
import Accordions from "../components/Accordions";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { fetchData } from "../redux/features/google/googleSlice";

export default function Main() {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.googleQuery);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  console.log(process.env);

  console.log(data);
  return (
    <Grid container>
      <Accordions />
    </Grid>
  );
}
