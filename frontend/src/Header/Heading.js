import React from "react";
import Alert from "../components/Alert";
import { Link } from "react-router-dom";

const Heading = () => {
	return (
		<>
			<div className='heading'>
				<h1 className='text-center font-weight-bolder'>
					<Link exact to='/'>
						Rentify
					</Link>
				</h1>
			</div>
			<Alert />
		</>
	);
};

export default Heading;
