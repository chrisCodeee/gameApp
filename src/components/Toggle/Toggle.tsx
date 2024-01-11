import { useState, useEffect } from "react";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import { ToggleButton } from "./ToggleStyle";

const Toggle = () => {
	const storedMode = localStorage.getItem("mode");
	// Use a default value of false if the storedMode is null
	const file = storedMode ? JSON.parse(storedMode) : false;

	const [isDark, setIsDark] = useState(file);

	useEffect(() => {
		if (isDark) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
		localStorage.setItem("mode", JSON.stringify(isDark));
	}, [isDark]);

	return (
		<>
			{isDark ? (
				<ToggleButton onClick={() => setIsDark(false)}>
					Dark Mode <LiaToggleOffSolid size={30} />
				</ToggleButton>
			) : (
				<ToggleButton onClick={() => setIsDark(true)}>
					Light Mode <LiaToggleOnSolid size={30} />
				</ToggleButton>
			)}
		</>
	);
};

export default Toggle;
