import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@components/card";
import TextField from "@components/textField";
import Button from "@components/button";
import { Theme } from "@root/theme";
import { Link } from "react-router-dom";

interface LoginProps {
	onLogin: (host: string, port: number) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		position: "fixed",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
		background:
			"linear-gradient(45deg, rgba(29,217,105,1) 0%, rgba(0,189,255,1) 100%)",
	},
	card: {
		width: 500,
		maxWidth: "80%",
		height: 400,
		maxHeight: "70%",
		padding: "70px 60px",
		display: "flex",
		color: theme.background.text,
		flexDirection: "column",
		justifyContent: "space-between",
		backdropFilter: "blur(5px)",
		userSelect: "none",
	},
	barButtonsContainer: {
		position: "relative",
		top: 30,
		left: "91%",
		width: 40,
		height: 20,
		display: "flex",
		justifyContent: "space-between",
	},
	barButton: {
		width: 15,
		height: 15,
		borderRadius: "50%",
		zIndex: 2,
		border: "1px solid #0004",
	},
	barButtonExit: {
		cursor: "pointer",
		background: theme.error.main,
		"&:hover": {
			background: theme.error.dark,
		},
	},
	barButtonCollaps: {
		cursor: "pointer",
		background: theme.success.main,
		"&:hover": {
			background: theme.success.dark,
		},
	},
}));

const Login = (props: LoginProps) => {
	const classes = useStyles();
	const [host, setHost] = useState("localhost");
	const [port, setPort] = useState(5000);
	return (
		<div className={classes.root}>
			<div>
				<div className={classes.barButtonsContainer}>
					<div className={`${classes.barButton} ${classes.barButtonCollaps}`} />
					<div className={`${classes.barButton} ${classes.barButtonExit}`} />
				</div>
				<Card className={classes.card}>
					<h2>Login to your server</h2>
					<TextField
						value={host}
						onChange={(newValue) => setHost(newValue || "")}
						placeholder="host"
					></TextField>
					<TextField
						value={String(port || "")}
						onChange={(newValue) => setPort(Number(newValue))}
						placeholder="port"
					></TextField>
					<Button
						variant="main"
						onClick={() => props.onLogin(host, port)}
						color="background"
						border
					>
						Login
					</Button>
				</Card>
				<Link to="/demo">
					<p>or instead you can vist the Demo</p>
				</Link>
			</div>
		</div>
	);
};

export default Login;
