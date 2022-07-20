import { BuildTheme } from "./ThemeBuilder";
import type { RootState } from "../../redux/app/store";
import { useAppSelector } from "../../redux/app/hooks";

const MyTheme = () => {
  const customize = useAppSelector((state: RootState) => state.custumize);
  const theme = BuildTheme({
    theme: customize.activeMode || "",
  });

  return theme;
};
export default MyTheme;
