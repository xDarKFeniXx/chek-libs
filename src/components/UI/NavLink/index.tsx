import { Link } from "@mui/material";
import { type LinkProps, Link as RouterLink } from "@tanstack/react-router";
import type { FC, PropsWithChildren } from "react";

export const NavLink: FC<PropsWithChildren<LinkProps>> = (props) => {
	return <Link {...props} component={RouterLink} />;
};
