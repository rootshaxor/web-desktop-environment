import { Theme } from "@web-desktop-environment/interfaces/lib/shared/settings";

export type ColorVariants = "main" | "dark" | "light" | "transparent";

export type Colors =
	| "background"
	| "primary"
	| "secondary"
	| "success"
	| "warning"
	| "error";

const transparentTheme: Theme = {
	type: "transparent",
	windowBarColor: "#BFBFBF57",
	shadowColor: "#0007",
	windowBorderColor: "#000",
	background: {
		main: "#BFBFBF27",
		light: "#EFEFEF67",
		dark: "#8F8F8F67",
		text: "#fff",
	},
	primary: {
		main: "#fff9",
		light: "#fffe",
		dark: "#eee7",
		text: "#000",
	},
	secondary: {
		main: "#111",
		light: "#252525",
		dark: "#000",
		text: "#fff",
	},
	error: {
		main: "#db5049ee",
		light: "#ff354c88",
		dark: "#f00",
		text: "#fff",
	},
	success: {
		main: "#21c62f88",
		dark: "#21c62fb8",
		light: "#21c62fee",
		text: "#fff",
	},
	warning: {
		main: "#efd951",
		light: "#ffeb51",
		dark: "#ae9941",
		text: "#fff",
	},
};

const lightTheme: Theme = {
	type: "light",
	windowBarColor: "#fff",
	shadowColor: "#0007",
	windowBorderColor: "#5d6373bb",
	background: {
		main: "#f6f8fa",
		light: "#fff",
		dark: "#dadbdd",
		text: "#222",
	},
	primary: {
		main: "#fe8270",
		light: "#ff9270",
		dark: "#ce7250",
		text: "#000",
	},
	secondary: {
		main: "#4585b2",
		light: "#abcbe2",
		dark: "#357592",
		text: "#222",
	},
	error: {
		main: "#db5049",
		light: "#ff354c",
		dark: "#f00",
		text: "#fff",
	},
	success: {
		main: "#21c62f88",
		dark: "#21c62fb8",
		light: "#21c62fee",
		text: "#fff",
	},
	warning: {
		main: "#efd951",
		light: "#ffeb51",
		dark: "#ae9941",
		text: "#fff",
	},
};

const darkTheme: Theme = {
	type: "dark",
	shadowColor: "#0007",
	windowBorderColor: "#fff",
	windowBarColor: "#333333",
	background: {
		main: "#21272b",
		light: "#31373b",
		dark: "#11171b",
		text: "#d9d9da",
	},
	primary: {
		main: "#315bef",
		dark: "#214b9f",
		light: "#416bef",
		text: "#f3e7fd",
	},
	secondary: {
		main: "#009591",
		dark: "#005456",
		light: "#00c4b4",
		text: "#c4fff4",
	},
	error: {
		main: "#db5049",
		light: "#ff354c",
		dark: "#f00",
		text: "#fff",
	},
	success: {
		main: "#21c62f88",
		dark: "#21c62fb8",
		light: "#21c62fee",
		text: "#fff",
	},
	warning: {
		main: "#efd951",
		light: "#ffeb51",
		dark: "#ae9941",
		text: "#fff",
	},
};

export const defaultTheme = darkTheme;

export const Themes = {
	dark: darkTheme,
	light: lightTheme,
	transparent: transparentTheme,
};
