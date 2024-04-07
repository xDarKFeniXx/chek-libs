import { Paper } from "@mui/material";
import { Outlet } from "@tanstack/react-router";

export const Main = () => {
	return (
		<Paper>
			<Outlet />
		</Paper>
	);
};
