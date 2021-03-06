import React, { useState } from "react";
// import { axiosWithAuth } from "../utils/axiosWithAuth.js";

const Login = props => {
	const [creds, setCreds] = useState({ username: "", password: "" });

	const handleChange = event => {
		setCreds({ ...creds, [event.target.name]: event.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		// console.log(creds);
		// axiosWithAuth.post("/login", creds).then(res => {
		// 	localStorage.setItem("token", res.data.payload);
		// });
	};

	const redirectToRegister = event => {
		event.preventDefault();
		props.history.push("/register");
	};

	return (
		<>
			<h2>Login</h2>
			<form className="form" onSubmit={handleSubmit}>
				<input
					type="text"
					name="username"
					value={creds.username}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="password"
					value={creds.password}
					onChange={handleChange}
				/>
				<button onClick={handleSubmit}>Submit</button>
				<button onClick={redirectToRegister}>Register</button>
			</form>
		</>
	);
};

export default Login;
