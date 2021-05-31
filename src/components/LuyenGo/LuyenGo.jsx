import React, {useCallback, useEffect, useState} from 'react';
import KeyCode from '../../utils/KeyCode';
import KeyBoard from '../KeyBoard';

const LuyenGo = ({title, lesson, currentData, listKeys}) => {
	const [state, setState] = useState({
		text: currentData[Math.round(Math.random() * (currentData.length - 1))],
		nextTexts: [currentData[Math.round(Math.random() * (currentData.length - 1))], currentData[Math.round(Math.random() * (currentData.length - 1))], currentData[Math.round(Math.random() * (currentData.length - 1))], currentData[Math.round(Math.random() * (currentData.length - 1))]],
		prevTexts: [],
		keys: [],
		shouldSearch: true,
		numberOfKeys: 0,
		true: 0,
		false: 0,
	});

	const [timeLeft, setTimeLeft] = useState(60);

	useEffect(() => {
		const interval = setInterval(() => {
			if (timeLeft > 0) {
				setTimeLeft(timeLeft - 1);
			}
		}, 1000);
		return () => clearInterval(interval);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [timeLeft]);

	useEffect(() => {
		setState(currentState => ({
			...currentState,
			text: currentData[Math.round(Math.random() * (currentData.length - 1))],
			nextTexts: [currentData[Math.round(Math.random() * (currentData.length - 1))], currentData[Math.round(Math.random() * (currentData.length - 1))], currentData[Math.round(Math.random() * (currentData.length - 1))], currentData[Math.round(Math.random() * (currentData.length - 1))]],
			prevTexts: [],
			keys: [],
			shouldSearch: true,
			numberOfKeys: 0,
		}));
	}, [currentData]);

	const handleKeyDown = (event) => {
		const {key} = event;
		if (listKeys.includes(key)) {
			if (!state.keys.includes(key)) setState(state => ({...state, keys: [...state.keys, key], numberOfKeys: state.numberOfKeys + 1}));
		} else {
			setState(state => ({...state, numberOfKeys: state.numberOfKeys + 1, shouldSearch: false}));
		}
	};

	const handleKeyUp = () => {
		if (state.numberOfKeys === 1) {
			if (state.shouldSearch) {
				if (state.keys.map(key => KeyCode.convertKey(key)).sort().join('').split('-').join('') === state.text.tk.toLowerCase().split('').sort().join('').split('-').join('')) {
					setState(state => ({
						...state,
						text: state.nextTexts[0],
						nextTexts: state.nextTexts.map((key, index) => {
							if (index < 3) return state.nextTexts[index + 1];
							return currentData[Math.round(Math.random() * (currentData.length - 1))];
						}),
						prevTexts: state.prevTexts.length === 4 ? state.prevTexts.map((key, index) => {
							if (index < 3) return state.prevTexts[index + 1];
							return state.text;
						}) : [...state.prevTexts, state.text],
						keys: [],
						shouldSearch: true,
						numberOfKeys: 0,
						true: state.true + 1,
					}));
				} else {
					setState(state => ({...state, keys: [], shouldSearch: true, numberOfKeys: 0, false: state.false + 1}));
				}
			} else {
				setState(state => ({...state, keys: [], shouldSearch: true, numberOfKeys: 0, false: state.false + 1}));
			}
		} else {
			setState(state => ({...state, numberOfKeys: state.numberOfKeys - 1}));
		}
	};

	const tryAgain = () => {
		setTimeLeft(60);
		setState({
			text: currentData[Math.round(Math.random() * (currentData.length - 1))],
			nextTexts: [currentData[Math.round(Math.random() * (currentData.length - 1))], currentData[Math.round(Math.random() * (currentData.length - 1))], currentData[Math.round(Math.random() * (currentData.length - 1))], currentData[Math.round(Math.random() * (currentData.length - 1))]],
			prevTexts: [],
			keys: [],
			shouldSearch: true,
			numberOfKeys: 0,
			true: 0,
			false: 0,
		});
	};

	const parseTime = useCallback(() => {
		const minute = Math.floor(timeLeft / 60);
		const second = timeLeft % 60;
		return (minute < 10 ? '0' : '') + minute + ':' + (second < 10 ? '0' : '') + second;
	}, [timeLeft]);

	return (
		<div style={{flex: 6, marginLeft: 20, marginRight: 20, marginTop: 40}}>
			<b style={{fontFamily: 'Monda-Bold'}}>{title} - Bài {lesson}</b>
			{timeLeft !== 0 ? <>
				<div style={{display: 'flex', flexDirection: 'column', marginLeft: 60, marginRight: 60, marginTop: 30, height: 100, backgroundColor: 'white', borderRadius: 20}}>
				<div style={{display: 'flex', flexDirection: 'row-reverse'}}><div className="button2">{parseTime()}</div></div>
					<div style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', userSelect: 'none'}}>
						<div style={{display: 'flex', flex: 1, justifyContent: 'space-around', marginTop: 18}}>
							{state.prevTexts.map(key => <p style={{width: 40, color: '#999', textAlign: 'center'}}>{key.vn}</p>)}
						</div>
						<p style={{fontFamily: 'Monda-Bold', fontSize: 40}}>{state.text.vn}</p>
						<div style={{display: 'flex', flex: 1, justifyContent: 'space-around', marginTop: 18}}>
							{state.nextTexts.map(key => <p style={{width: 40, color: '#999', textAlign: 'center'}}>{key.vn}</p>)}
						</div>
					</div>
				</div>
				<div style={{display: 'flex', flexDirection: 'column', marginLeft: 60, marginRight: 60, marginTop: 30, alignItems: 'center'}}>
					<input value={''} style={{height: 30, width: 400}} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />
				</div>
				<div style={{marginTop: 30}}>
					<KeyBoard keys={state.keys} />
				</div>
			</> : <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 200}}>
				<div style={{fontSize: 20}}>Số từ đúng: {state.true}</div>
				<div style={{fontSize: 20}}>Số từ sai: {state.false}</div>
				<div className="button2" style={{marginTop: 50}} onClick={tryAgain}>Bắt đầu lại</div>
			</div>}
		</div>
	)
};

export default LuyenGo;
