import Spline from "@splinetool/react-spline";

export default function DarkLightSwitch(props) {
	return (
		<div className="w-100">
			<Spline
				scene="https://prod.spline.design/NSm0mRPhYHK-GM1T/scene.splinecode"
				onClick={props.handleClick}
				width="100%"
				height="100%"
			/>
			{/* <div>
				<Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
			</div> */}
		</div>
	);
}
