import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { changeMode } from "../redux/features/theme/customizerSlice";

export default function TopAppBAr() {
  const dispatch = useAppDispatch();

  const customize = useAppSelector((state) => state.custumize);

  const handleModeChange = () => {
    if (!customize) return;
    dispatch(changeMode());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src="logo.svg" alt="logo" width="50%" />
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            borderRadius: 1,
            fontSize: "9px",
          }}
        >
          <IconButton onClick={handleModeChange} color="inherit">
            {customize.activeMode === "light" ? (
              <Brightness4Icon />
            ) : (
              <Brightness7Icon />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
