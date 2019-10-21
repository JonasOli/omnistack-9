import React, { useState } from "react";
import "./App.scss";
//@ts-ignore
import logo from "./assets/logo.svg";
import api from "./services/api";

const App: React.FC = () => {
	const [email, setEmail] = useState("");

	async function handleSubmit(evt: React.FormEvent): Promise<void> {
		evt.preventDefault();

		const response = await api.post("/sessions", { email });

		const { _id } = response.data;

		localStorage.setItem("user", _id);
	}

	return (
		<div className="container">
			<img src={logo} alt="AirCnC" />

			<div className="content">
				<p>
					Ofereça <strong>sports</strong> para programadores e encontre <strong>talentos</strong>
				</p>

				<form onSubmit={handleSubmit}>
					<label htmlFor="email">Email *</label>
					<input
						type="email"
						id="email"
						onChange={evt => setEmail(evt.target.value)}
						value={email}
						placeholder="Seu melhor email"
					/>

					<button type="submit" className="btn">
						Entrar
					</button>
				</form>
			</div>
		</div>
	);
};

export default App;
