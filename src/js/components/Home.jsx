import React from "react";
import NavBar from "./NavBar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";

const Home= () => {
const imgUrl1 = "https://media.istockphoto.com/id/2065673896/es/foto/rolling-dice-macro.jpg?s=612x612&w=0&k=20&c=gw61Xz6R9WUx65dUqmSErimq5ezPeHeEB-3AkYqpCEk=";
const imgUrl2 = "https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670"
const imgUrl3 = "https://images.unsplash.com/photo-1616449973117-0e1d99c56ed3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
const imgUrl4 = "https://images.unsplash.com/photo-1616141893496-fbc65370493e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
	return (
	<>
		<NavBar />
		<div className="container ">
		<Jumbotron />
		<div className="justify-content-center d-flex mt-5">
		<Card imageUrl={imgUrl1} />
		<Card imageUrl={imgUrl2} />
		<Card imageUrl={imgUrl3} />
		<Card imageUrl={imgUrl4} />
		</div>
		</div>
	</>);
};
export default Home;