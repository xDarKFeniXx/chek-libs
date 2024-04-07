import { createTheme, responsiveFontSizes } from "@mui/material";
import { components } from "theme/components";
import { getPalette } from "theme/palette";
import type { ETheme } from "types/theme";

export const getTheme = (mode: ETheme) => {
	const theme = createTheme({
		palette: getPalette(mode),
		components,
	});
	return responsiveFontSizes(theme);
};
