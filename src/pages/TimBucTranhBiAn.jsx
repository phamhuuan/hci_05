import React, {useState} from 'react';
import MainSlideBarContainer from '../components/MainSlideBarContainer';
import NavBar from '../components/NavBar';
import Step1 from '../components/TimBucTranhBiMat/Step1';
import Step2 from '../components/TimBucTranhBiMat/Step2';

const TimBucTranhBiAn = () => {
	const [state, setState] = useState({
		step: 0,
	});

	const setStep = (step) => {
		setState({...state, step});
	}

	return (
		<div>
			<MainSlideBarContainer />
			<NavBar />
			<div className="content-wrapper">
				{state.step === 0 && <Step1 setStep={setStep} />}
				{state.step === 1 && <Step2 setStep={setStep} />}
			</div>
		</div>
	);
};

export default TimBucTranhBiAn;
