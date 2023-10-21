// import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import Header from '../../../components/Header/Header.jsx';
import "./Poll.css";
function Poll(props) {
	const { pollId } = useParams();
	const navigate = useNavigate();
	const [pollNotFound, setPollNotFound] = useState();
	const [question, setQuestion] = useState();
	const [options, setOptions] = useState();
	const [option, setOption] = useState({});
	const [signupFirstErr, setSignupFirstErr] = useState();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		async function poll() {
			setIsLoading(true);
			const res = await fetch(
				`https://voteable-backend.onrender.com/v1/poll/${
					pollId ? pollId : props.pollId
				}`,
				{
					method: "GET",
				}
			);
			setIsLoading(false);
			const data = await res.json();
			if (data.error) {
				setPollNotFound(data.error);
				return;
			} else {
				setQuestion(data.data.question);
				setOptions(data.data.options);
			}
			console.log(data);
		}
		poll();
	}, [pollId]);

	async function vote() {
		const optiontext = option.text;
		const res = await fetch(
			`https://voteable-backend.onrender.com/v1/vote/${
				pollId ? pollId : props.pollId
			}`,
			{
				method: "POST",
				body: JSON.stringify({
					answer: optiontext,
					Student_ID: localStorage.getItem("Student_ID"),
					password: localStorage.getItem("password"),
				}),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		console.log(optiontext, option);

		const data = await res.json();
		if (res.ok) {
			setSignupFirstErr("Voted");
		}
		if (data.error) {
			setSignupFirstErr(data.error);
			return;
		}
	}
	return (
		<div
		// className="joinOuterContainer"
		// style={{ backgroundImage: 'linear-gradient(180deg,#17005c, #4600b6)' }}
		>
			{/* <Header /> */}
			{/* {isLoading ? (
				<CircularProgress
					style={{
						color: 'white',
						// position: "absolute",
						// top: "20%",
						// left: "40%",
					}}
				/>
			) : ( */}
			<div
				className="pollC"
				style={{ marginTop: "10%", width: "370px", flexWrap: "wrap" }}
			>
				<h2>{pollNotFound ? pollNotFound : question}</h2>
				{signupFirstErr === "Voted" ? (
					<h2
						style={{
							marginTop: "-10px",
							marginBottom: "20px",
							color: "#4600b6",
						}}
					>
						Voted
					</h2>
				) : (
					<p className="passp" style={{ marginBottom: "10px" }}>
						{signupFirstErr}
					</p>
				)}

				<div className="options">
					{options
						? options.map((option) => {
								return (
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											justifyContent: "flex-start",
											alignItems: "center",
											padding: "5px",
											borderBottom: "2px black solid",
											marginBottom: "12px",
										}}
									>
										<input
											style={{
												accentColor: "#4600b6",
												cursor: "pointer",
											}}
											className="option"
											type="radio"
											value={option.text}
											name="option"
											onClick={() => {
												setOption(option);
											}}
										/>
										{option.photo ? (
											<img
												src={`https://voteable-backend.onrender.com/uploads/${option.photo}`}
												className="optionImg"
											/>
										) : (
											""
										)}
										<p
											style={{
												fontSize: "16px",
												margin: "10px",
											}}
										>
											<b>{option.text}</b>
										</p>
										<br></br>
										<br></br>
									</div>
								);
						  })
						: ""}
				</div>
				{/* <div> */}
				<button
					className={"vBTN"}
					onClick={vote}
					style={{
						padding: "10px",
						justifyContent: "center",
						display: "flex",
						fontSize: "18px",
					}}
				>
					Vote
				</button>
				<Link
					to={`/poll/results/${props.pollId}`}
					className="vBTN"
					style={{
						padding: "10px",
						justifyContent: "center",
						display: "flex",
					}}
				>
					Results{" "}
				</Link>
				{/* </div> */}
				{/* {pollNotFound ? (
						''
					) : (
					
					)} */}
			</div>
			{/* )} */}
		</div>
	);
}

export default Poll;
