import { useCallback, useEffect, useRef, useState } from "react";
import Number from "./components/Number";
import Character from "./components/Character";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import PasswordStrength from "./components/PasswordStrength";
import DarkMode from "./components/DarkMode";

function App() {
	const [length, setLength] = useState(10);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [charAllowed, setCharAllowed] = useState(false);
	const [password, setPassword] = useState("");
	const [btnText, setBtnText] = useState("Copy");

	const passwordref = useRef(null);

	const passwordGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		if (charAllowed) str += "~`!@#$%^&*(){}[]|,<>'+=-";
		if (numberAllowed) str += "0123456789";

		for (let i = 1; i <= length; i++) {
			let char = Math.floor(Math.random() * str.length) + 1;

			pass += str.charAt(char);
		}

		setPassword(pass);
	}, [numberAllowed, charAllowed, length, setPassword]);

	const copyPasswordToClipboard = useCallback(() => {
		setBtnText("Copied");
		setTimeout(() => {
			setBtnText("Copy");
		}, 4000);
		passwordref.current?.select();
		window.navigator.clipboard.writeText(password);
	}, [password]);

	useEffect(() => {
		passwordGenerator();
	}, [length, numberAllowed, charAllowed, passwordGenerator]);

	return (
		<div className="max-w-2xl mx-auto h-screen">
			<DarkMode />
			<Heading />

			<div className="flex mb-4 justify-between gap-4 w-full">
				<input
					readOnly
					value={password}
					className="outline-none w-full h-12 text-xl py-1 px-3 font-semibold tracking-wider border-primary border-2 bg-gray-300 dark:bg-primary dark:text-background dark:border-background rounded-sm selection:bg-secondary selection:text-white cursor-not-allowed"
					type="text"
					ref={passwordref}
				/>
				<button
					onClick={copyPasswordToClipboard}
					className="copyBtn w-28 mb-2"
				>
					{btnText}
				</button>
			</div>

			<div className="flex text-sm gap-x-2">
				<div className="flex items-center gap-x-1">
					<input
						type="range"
						min={10}
						max={40}
						onChange={(e) => setLength(e.target.value)}
						value={length}
						className="cursor-pointer"
					/>
					<label className="font-semibold text-base">
						Length: {length}
					</label>
				</div>
			</div>
			<div className="text-center mt-3 rounded-lg">
				<Number
					numberAllowed={numberAllowed}
					onChange={() => setNumberAllowed((prev) => !prev)}
				/>
				<Character
					charAllowed={charAllowed}
					onChange={() => setCharAllowed((prev) => !prev)}
				/>
			</div>

			<PasswordStrength password={password} />

			<Footer />
		</div>
	);
}

export default App;
