import { CircularProgress } from '@mui/material';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import './Results.css';
// import sikeNigga from '../../assets/sike-nigga.jpeg';

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.defaults.plugins.legend.position = 'bottom';
ChartJS.defaults.color = 'black';
ChartJS.defaults.layout.padding = 20;
ChartJS.defaults.responsive = true;
ChartJS.defaults.maintainAspectRatio = false;
ChartJS.defaults.plugins.legend.maxHeight = 1000;
ChartJS.defaults.plugins.legend.maxWidth = 100;
ChartJS.defaults.plugins.tooltip.boxPadding = 5;

function Results() {
	const { pollId } = useParams();

	// eslint-disable-next-line
	const [question, setQuestion] = useState();
	const [options, setOptions] = useState();
	// eslint-disable-next-line
	const [option, setOption] = useState({});
	const [pollNotFound, setPollNotFound] = useState();
	const [isLoading, setIsLoading] = useState(false);

	function getRandomColor() {
		let letters = '0123456789ABCDEF';
		let color = '#';

		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		async function poll() {
			setIsLoading(true);
			const res = await fetch(
				`https://voteable-backend.onrender.com/v1/poll/${pollId}`,
				{
					method: 'GET',
				}
			);
			setIsLoading(false);
			const data = await res.json();
			if (data.error) {
				setPollNotFound('Poll not found, ID is incorrect');
				return
			} else {
				setQuestion(data.data.question);
				setOptions(data.data.options);
				// if (options) {
				//	 console.log(optLabels, optVotes);
				// }
			}
			console.log(data);
		}
		poll();
		// alert("Refresh window to change donut slice colours");
	}, [pollId]);

	//	 const optLabels = options.map((opt) => {
	//		 return opt.text;
	//	 });

	//	 const optVotes = options.map((opt) => {
	//		 return opt.votes;
	//	 });

	const data = {
		labels: options
			? options.map((opt) => {
					return `${opt.text}`;
				})
			: '',
		datasets: [
			{
				data: options
					? options.map((opt) => {
							return opt.votes;
						})
					: '',
				backgroundColor: options
					? options.map((opt) => {
							return getRandomColor();
						})
					: '',
				borderWidth: 0,
				hoverOffset: 20,
				spacing: 0,
			},
		],
	};
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
			}}
		>
			<div className="joinOuterContainer">
				<Header />
				{isLoading ? (
					<CircularProgress
						style={{
							color: 'white',
							// position: "absolute",
							// top: "20%",
							// left: "40%",
						}}
					/>
				) : (
					''
				)}
				{pollNotFound ? (
					<div className="pollc" style={{ height: '100px' }}>
						<h1>Poll not found</h1>
					</div>
				) : (
					''
				)}
				{!isLoading && options ? (
					<div
						style={{
							height: '85%',
							width: '550px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: '25px',
						}}
					>
						<h1 style={{ color: 'white' }}>{question}</h1>
						<p style={{ color: 'white' }}>
							<i>Refresh to change slice colours</i>
						</p>
						<div className="dNut">
							{/* <h2>{question}</h2><br /> */}
							{/* <p>Refresh to change doughnut slice colour</p> */}
							<Doughnut data={data} />
						</div>
					</div>
				) : (
					''
				)}
				{/* <img src={sikeNigga} alt='sikeNigga' style={{ height: '400px', marginLeft: '10px', marginRight: '10px' }} /> */}
			</div>
		</div>
	);
}

export default Results;
