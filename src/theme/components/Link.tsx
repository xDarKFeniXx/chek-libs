import type { Components } from "@mui/material";
import { Link } from "@tanstack/react-router";

export const MuiLink: Components["MuiLink"] = {
	defaultProps: {
		component: Link,
	},
};
