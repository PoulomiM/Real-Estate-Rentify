import React from "react";
import Heading from "../Header/Heading";
import NavLeft from "../Header/NavLeft";
import NavRight from "../Header/NavRight";

const Layout = (props) => {
	return (
		<>
		<NavLeft />
			<div className='container mt-5 mb-2'>
				<Heading />
				<NavRight />
				<hr />
			</div>
			{props.children}
		</>
	);
};

export default Layout;
