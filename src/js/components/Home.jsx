import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";


const Home = () => {
	const imgUrl0 = "https://plus.unsplash.com/premium_photo-1684517010043-7bde3568311e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471"
	const infoCard1 = {
			imgUrl: "https://images.unsplash.com/photo-1551524358-f34c0214781d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHN1cmZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
			title: "Los mejores movimiento",
			text: "Tricks brutales que veras de los mejores profesores",
			link: "https://magazine.todosurf.com/magazine/surfologia/las-mejores-olas-del-mundo/",
			buttonBtn: "Visitanos"
			}
	const infoCard2 = {
			imgUrl: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670",
			title: "Los mejores tubos",
			text: "Imaginate tubos de más de 5 metros",
			link: "https://magazine.todosurf.com/magazine/surfologia/las-mejores-olas-del-mundo/",
			buttonBtn: "Reserva"
			}
	const infoCard3 = {
			imgUrl: "https://images.unsplash.com/photo-1616449973117-0e1d99c56ed3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
			title: "Las mejores tablas",
			text: "Y es que algo básico que los iniciados no conocen es que gran parte del surf depende de saber leer el océano. Por qué ya de por sí es difícil leer e interpretar, si no conoces ciertos aspectos que darían para escribir un libro sobre rompientes y como leerlas. Y eso no es todo porque parte de predecir las rompientes tienes que posicionarte en consecuencia que supondrá un aumento en la calidad y cantidad de olas que cojas.",
			link: "https://magazine.todosurf.com/magazine/surfologia/las-mejores-olas-del-mundo/",
			buttonBtn: "Llamanos"
			}
	const infoCard4 = {
			imgUrl: "https://images.unsplash.com/photo-1616141893496-fbc65370493e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
			title: "Las mejores olas",
			text: "Las mejores olas en los mejores lugares",
			link: "hhttps://magazine.todosurf.com/magazine/surfologia/las-mejores-olas-del-mundo/",
			buttonBtn: "Más Info"
			}
	useEffect(() =>{
		console.log(infoCard1.text.length)

	},[])
	return (
		<div>
			<NavBar />
			<div className="container">
				<Jumbotron imageUrl={imgUrl0} />
				<div className="row">
					<Card cardInfo={infoCard1}/>
					<Card cardInfo={infoCard2}/>
					<Card cardInfo={infoCard3}/>
					<Card cardInfo={infoCard4}/>
				</div>
			</div>
		</div>
	);
};
export default Home;