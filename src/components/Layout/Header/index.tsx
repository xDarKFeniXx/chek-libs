import { Paper, Stack, Switch } from "@mui/material";
import { NavLink } from "components/UI/NavLink";
import type { FC } from "react";
import { ETheme } from "types/theme";

export interface IHeaderProps {
	mode: ETheme;
	toggleTheme: () => void;
}

export const Header: FC<IHeaderProps> = ({ mode, toggleTheme }) => {
	return (
		<Paper
			sx={{ display: "flex", flexDirection: "row", gap: 2, justifyContent: "space-between", alignItems: "center" }}
		>
			<Stack direction={"row"} gap={2} m={2}>
				<NavLink to={"/about"}>About</NavLink>
				<NavLink to={"/products"}>Products</NavLink>
				<NavLink to={"/categories"}>Categories</NavLink>
				<NavLink to={"/orders"}>Orders</NavLink>
			</Stack>
			<Stack m={2}>
				<Switch checked={mode === ETheme.DARK} onClick={toggleTheme} />
			</Stack>
		</Paper>
	);
};
