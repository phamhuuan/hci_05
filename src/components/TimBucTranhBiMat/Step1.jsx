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
						<img onClick={() => setStep(1)} style={{width: 200, marginRight: 50}} src="https://s3-alpha-sig.figma.com/img/12b6/2792/d99ed4876924255ce46a0dc5abb0b5fd?Expires=1623024000&Signature=fa~0DOK37WxV6~J3hdvLxot~BJ7T-whHPaxbYH-aOc79rvpijvAXxLKfBApY5LPhfrX6eGlUIjP~myc-FrFigCW8Yu5-xX5WMf7qYBRL4xqtcTjKrie0UjzpyNfwfZY2-K-UxEgeXHm-Oi5vTP7P3Afj095p5sf4F9avXaTQWAxvypRIKxhAKZXdKU4VTei5JW8aJEYN3166CmNkdnBTq9vq-LzSPFN-Kuc8i4aU3XM7Par01Penj0xMFQ7GEKeHVF7LZlv4W--X9hMZFUoBxd8U~YJDL-q5jFvvpYXmxrBbHKqwXdeS3vnHP8GwzGHflbNNOlqYj395DqapY4jR6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Start" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Step1;
