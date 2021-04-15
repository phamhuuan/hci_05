import React from 'react';

const Step1 = ({setStep}) => {
	return (
		<div>
			<div style={{display: 'flex', height: 50, backgroundColor: '#C4C4C4', alignItems: 'center', paddingLeft: 50}}>Trò chơi: Tìm Bức Tranh Bị Ẩn</div>
			<div style={{display: 'flex', flexDirection: 'row'}}>
				<div style={{display: 'flex', flex: 1, flexDirection: 'column-reverse'}}>
					<img className="flip" src="https://i.imgur.com/yjRBm24.png" alt="CuteCat" style={{height: 256, width: 256}} />
				</div>
				<div style={{flex: 4}}>
					<div style={{flex: 1, backgroundColor: '#FDDFC5', marginTop: 30, marginRight: 40, borderRadius: 20, paddingLeft: 20, paddingRight: 20, textAlign: 'justify', paddingTop: 40, paddingBottom: 40, fontSize: 20}}>
						<b>Hướng dẫn</b>
						<br />
						<br />
						Xoá các tấm thẻ để hiện ra bức tranh bị giấu bằng cách ghép cặp đúng cho tất cả các thẻ. Bạn cần chọn liên tiếp vào 2 ô mà 1 ô là âm chữ quốc ngữ, 1 ô là tổ hợp phím khi gõ tốc ký tương ứng.
						<br />
						<br />
						Thời gian là 5 phút, với 10 cặp thẻ, mỗi cặp chọn đúng sẽ được 10 điểm, tổng điểm 100.
						<br />
						<br />
						Trò chơi kết thúc khi xoá hết các thẻ, khi hết thời gian hoặc khi sai quá 3 lần.
						<br />
						<br />
						Người chơi có thể lựa chọn phạm vi chơi: Âm đầu, Âm chính, Âm cuối, .v.v
					</div>
					<div style={{display: 'flex', flexDirection: 'row-reverse', marginTop: -150}}>
						<img onClick={() => setStep(1)} style={{width: 200, marginRight: 50}} src="https://s3-alpha-sig.figma.com/img/12b6/2792/d99ed4876924255ce46a0dc5abb0b5fd?Expires=1619395200&Signature=JK4iOdg~p-tzZdZgqHyDryQf~dUE8MDtPe2mFIBPl1VhWeWOaERB6mgyTN64do0ozqbxRcsmmQOKG9XEoDt24yA2UUwSueQ~bNmyEEliap2qCRw8rSG60j7fA6UPKwKx~MHxZKIFNhw~4m4PxraRGFkT2P9EOsMWjJAi8oanSNQDuPeBPMmTLSPCtO2aTu-Ssrh7Okx6ubfoKJH5rHJ497JBc21Yh9wOlCfC4Z2s5UuY91B8jp8DZqapZqP2qvtgmuUWSddsDIHb0iqElbC6EtDn4JwSp2mRkItgESBoCyhINCnWRHsKYhAsFbnLrFQ56KkhuLs9Yj~BtycCcsp8KA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Start" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Step1;
