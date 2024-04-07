import { ETheme } from "types/theme";

export const getPalette = (mode: ETheme) => {
	if (mode === ETheme.DARK) {
		return {
			mode,
		};
	}
	return {
		mode,
		background: {
			default: "#d6d99d",
		},
	};
};
