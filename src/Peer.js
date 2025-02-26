import TTitle from "./templates/TTitle";

const Peer = () => {
	const jerryWeb = "https://jialuohu.com/";
	const davidWeb = "https://www.seongjinyoon.com/";
	const chuckWeb = "https://junhaow.com/";

	return (
		<div>
			<TTitle title="Also check out my peers' website!" />
			<a href={jerryWeb} className="peer">
				<h1>Jialuo (Jerry) Hu</h1>
			</a>
			<p>Pursuing MS CS @ UC San Diego | CS @ UC Irvine '24</p>
			<a href={davidWeb} className="peer">
				{" "}
				<h1>Seongjin (David) Yoon</h1>
			</a>
			<p>MSCS @ UC Irvine | CS @ UC Irvine '24 | ICS Honors Program</p>
			<a href={chuckWeb} className="peer">
				<h1>Junhao (Chuck) Wang</h1>
			</a>
			<p>Software Engineer at AWS Game Tech</p>
		</div>
	);
};

export default Peer;
