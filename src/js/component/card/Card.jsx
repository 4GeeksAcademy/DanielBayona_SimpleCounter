import React from "react";
import "./Card.css";
const Card = ({ number }) => {
	return (
		<div className="card text-bg-dark col-sm-1 w-auto border border-dark-subtle mb-3 mt-3">
			<div className="card-body">
				<h5 className="card-title">{number}</h5>
			</div>
		</div>
	);
};


export default Card;