import { useState, useEffect } from "react";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import { ToggleButton } from "./ToggleStyle";

const Toggle = () => {
	const storedMode = localStorage.getItem("mode");
	// Use a default value of false if the storedMode is null
	const file = storedMode ? JSON.parse(storedMode) : true;

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
				<ToggleButton onClick={() => setIsDark(false)} className="d-flex align-items-center pt-3">
					<LiaToggleOffSolid size={30} />
					<span className="ms-2 d-none d-sm-inline-block">Dark Mode</span>
				</ToggleButton>
			) : (
				<ToggleButton onClick={() => setIsDark(true)}>
					<LiaToggleOnSolid size={30} />
					<span className="ms-2 d-none d-sm-inline-block">Light Mode</span>
				</ToggleButton>
			)}
		</>
	);
};

export default Toggle;
