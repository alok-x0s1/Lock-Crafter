const PasswordStrength = ({ password }) => {
	const checkStrength = () => {
		let strength = 0;
		if (password.length >= 10) strength += 1;

		if (/[A-Z]/.test(password)) strength += 1;
		if (/[a-z]/.test(password)) strength += 1;
		if (/\d/.test(password) && password.length >= 15) strength += 1;
		if (
			/[~`!@#$%^&*(){}[\]|,<>'+=-]/.test(password) &&
			password.length >= 15
		)
			strength += 1;

		if (password.length >= 25) strength += 1;

		return strength;
	};

	const getStrengthLabel = (strength) => {
		switch (strength) {
			case 6:
				return "Strongest";
			case 5:
				return "Very Strong";
			case 4:
				return "Strong";
			case 3:
				return "Medium";
			case 2:
				return "Weak";
			default:
				return "Very Weak";
		}
	};

	const strength = checkStrength();
	const strengthLabel = getStrengthLabel(strength);

	const strengthColors = {
		"Very Weak": "bg-red-500",
		Weak: "bg-yellow-500",
		Medium: "bg-orange-500",
		Strong: "bg-green-500",
		"Very Strong": "bg-blue-500",
		Strongest: "bg-red-700",
	};

	return (
		<div className="mt-4 flex justify-start gap-2 items-center">
			<p>Password Strength &#8776; </p>

			<div
				className={`text-white rounded-sm ${strengthColors[strengthLabel]} h-fit px-4 py-2`}
			>
				<p>{strengthLabel}</p>
			</div>
		</div>
	);
};

export default PasswordStrength;
