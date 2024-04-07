import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Footer } from "components/Layout/Footer";
import { Header } from "components/Layout/Header";
import { Main } from "components/Layout/Main";
import { useState } from "react";
import { getTheme } from "theme";
import { ETheme } from "types/theme.ts";

export const Layout = () => {
	const [mode, setMode] = useState(ETheme.DARK);
	const theme = getTheme(mode);
	const toggleTheme = () => {
		setMode((prev) => (prev === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK));
	};
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box
				sx={{ display: "grid", gridTemplateRows: "minmax(auto, 50px) 1fr minmax(auto, 50px)", height: "100vh", gap: 2 }}
			>
				<Header mode={mode} toggleTheme={toggleTheme} />
				<Main />
				<Footer />
			</Box>
		</ThemeProvider>
	);
};
