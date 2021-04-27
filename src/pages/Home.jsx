import React, {useState} from "react";
import MainSlideBarContainer from "../components/MainSlideBarContainer";
import NavBar from "../components/NavBar";
import AmChinh from "../utils/AmChinh";
import AmCuoi from "../utils/AmCuoi";
import AmDau from "../utils/AmDau";

const Home = () => {
	const [state, setState] = useState({
		amDau: [],
		amChinh: [],
		amCuoi: [],
		hasAmDau: false,
		hasAmChinh: false,
		hasAmCuoi: false,
		shouldSearch: true,
		numberOfKeys: 0,
		value: '',
	});

	const handleKeyDown = (event) => {
		const {key} = event;
		if (AmDau.amDauN.includes(key)) {
			if (!state.amDau.includes(key)) setState(state => ({...state, amDau: [...state.amDau, key], hasAmDau: true, numberOfKeys: state.numberOfKeys + 1}));
		} else if (AmChinh.amChinhN.includes(key)) {
			if (!state.amChinh.includes(key)) setState(state => ({...state, amChinh: [...state.amChinh, key], hasAmChinh: true, numberOfKeys: state.numberOfKeys + 1}));
		} else if (AmCuoi.amCuoiN.includes(key)) {
			if (!state.amCuoi.includes(key)) setState(state => ({...state, amCuoi: [...state.amCuoi, key], hasAmCuoi: true, numberOfKeys: state.numberOfKeys + 1}));
		} else {
			setState(state => ({...state, numberOfKeys: state.numberOfKeys + 1, shouldSearch: false}));
		}
	};

	const handleKeyUp = () => {
		if (state.numberOfKeys === 1) {
			if (state.shouldSearch && state.hasAmChinh && (state.amDau || state.amCuoi)) {
				let amDau = '', amChinh = '', amCuoi = '';
				amChinh = AmChinh.convertKey(state.amChinh, state.hasAmDau, state.hasAmCuoi);
				if (state.hasAmDau) amDau = AmDau.convertKey(state.amDau, amChinh);
				if (state.hasAmCuoi) amCuoi = AmCuoi.convertKey(state.amCuoi);
				if (amChinh !== '') setState({amDau: [], amChinh: [], amCuoi: [], hasAmChinh: false, hasAmDau: false, hasAmCuoi: false, shouldSearch: true, numberOfKeys: 0, value: state.value + amDau + amChinh + amCuoi + ' '});
				else setState(state => ({...state, amDau: [], amChinh: [], amCuoi: [], hasAmChinh: false, hasAmDau: false, hasAmCuoi: false, shouldSearch: true, numberOfKeys: 0}));
			} else {
				setState(state => ({...state, amDau: [], amChinh: [], amCuoi: [], hasAmChinh: false, hasAmDau: false, hasAmCuoi: false, shouldSearch: true, numberOfKeys: 0}));
			}
		} else {
			setState(state => ({...state, numberOfKeys: state.numberOfKeys - 1}));
		}
	};

	return (
		<div>
			<MainSlideBarContainer />
			<NavBar />
			<div className="content-wrapper">
				<input value={state.value} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />
			</div>
		</div>
	);
};

export default Home;
