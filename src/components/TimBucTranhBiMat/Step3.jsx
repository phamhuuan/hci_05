import React from 'react';

const Step3 = ({setStep, point}) => {
	return (
		<div>
			<div style={{display: 'flex', height: 50, backgroundColor: '#C4C4C4', alignItems: 'center', paddingLeft: 50}}>Trò chơi: Tìm Bức Tranh Bị Ẩn</div>
			<div style={{flex: 1, backgroundColor: '#FDDFC5', marginTop: 30, marginRight: 40, marginLeft: 40, borderRadius: 20, paddingLeft: 20, paddingRight: 20, textAlign: 'justify', paddingTop: 40, paddingBottom: 40, fontSize: 20}}>
				{point === 100 ? (
					<div style={{textAlign: 'center'}}>
						<div>Chúc mừng, bạn đã chiến thắng</div>
					</div>
				) : (
					<div style={{textAlign: 'center'}}>
						<h1 style={{fontFamily: 'sans-serif'}}>Trò chơi đã kết thúc</h1>
						<div>Điểm của bạn: {point}</div>
					</div>
				)}
				<div style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
					<div style={{flex: 1}} />
					<div onClick={() => setStep(0)} className="button4">Hướng dẫn</div>
					<div onClick={() => setStep(1)} className="button4">Chơi lại</div>
					<div style={{flex: 1}} />
				</div>
			</div>
		</div>
	);
};

export default Step3;
