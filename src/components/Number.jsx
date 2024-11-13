import React from "react";

const Number = ({ numberAllowed, onChange }) => {
	return (
		<div className="checkbox-wrapper-51 flex gap-4">
			<input
				type="checkbox"
				id="cbx-51"
				defaultChecked={numberAllowed}
				onChange={onChange}
			/>
			<label htmlFor="cbx-51" className="toggle">
				<span>
					<svg width="10px" height="10px" viewBox="0 0 10 10">
						<path d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"></path>
					</svg>
				</span>
			</label>
			<label htmlFor="cbx-51">Number</label>
		</div>
	);
};

export default Number;
