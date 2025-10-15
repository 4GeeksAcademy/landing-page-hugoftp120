import React from "react";
import NavBar from "./NavBar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";

const Home = () => {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<div className="container my-4">
				<div clasName="row justify-content-center">
					<div className="col-md-3 mb-4">
						<Card />
					</div>
					<div className="col-md3 mb-4">
						<Card />
					</div>
					<div clasName="col-md-3 mb-4">
						<Card />
					</div>
					<div className="col-md-3 mb-4">
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;