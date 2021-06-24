import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "../constants";
import axios from "axios";
import styled from "styled-components";

export default function PictureOfDay() {
	const [picture, setPicture] = useState([]);

	useEffect(() => {
		axios
			.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
			.then((data) => setPicture(data.data))
			.catch((err) => console.log("error getting picture", err));
	}, []);

	console.log(picture);
	return (
		<Container>
			<Title>NASA Picture of the Day</Title>
			<Image className="image" src={picture.url} alt="Outer Space" />
			<DateName>
				{picture.date}, {picture.title}
			</DateName>
			<Description> {picture.explanation}</Description>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-flow: column wrap;
	background-color: #a9a9a9;
	border: 2px double;
	border-radius: 25px;
	margin: 2%;
`;

const Title = styled.h1`
	color: #00008b;
	font-size: 50px;
`;

const Image = styled.img`
	border-radius: 10px;
	margin: 2% 20%;
`;

const DateName = styled.h2`
	text-decoration: underline;
	color: #00008b;
	font-size: 30px;
`;

const Description = styled.p`
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	align-content: center;
	justify-items: center;
	margin 2% 30%;
    font-size: 20px;
`;
