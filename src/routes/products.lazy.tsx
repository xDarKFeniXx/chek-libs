import { Box } from "@mui/material";
import { Outlet, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/products")({
	component: () => (
		<Box bgcolor={"primary.main"}>
			<Outlet />
		</Box>
	),
});
