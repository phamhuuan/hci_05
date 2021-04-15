import React from "react";
import Color from "../../constants/Colors";

const Introduce = ({setSelected}) => {
	return (
		<div className="container-fluid">
			<div className="row" style={{display: 'flex', flexDirection: 'row', marginTop: 80}}>
				<div className="col-lg-6" style={{display: 'flex', flex: 1, justifyContent: 'center'}}>
					<img
						src="https://cdn11.bigcommerce.com/s-803d4/images/stencil/1280x1280/products/4206/10583/v59ROV9E__28684.1600278897.jpg?c=2?imbypass=on"
						alt="StenoMachine"
						style={{width: 500, height: 500}}
					/>
				</div>
				<div className="col-lg-6" style={{display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center'}}>
					<div>
						<p style={{fontFamily: 'Monda-Regular', fontSize: 48, fontWeight: 700}}>TỐC KÝ TIẾNG VIỆT</p>
						<p style={{fontFamily: 'Monda-Regular', marginTop: 20, fontSize: 24, fontWeight: 400}}>Website Tốc Ký Tiếng Việt Miễn Phí</p>
						<button className="btn btn-block" onClick={() => setSelected(2)} style={{backgroundColor: '#353A3F', borderRadius: 20, padding: 10, color: Color.PrimaryWhite, width: 200}}>Học Tốc Ký Ngay</button>
					</div>
				</div>
			</div>
			<div className="row" style={{display: 'flex', flexDirection: 'row', marginTop: 80}}>
				<div className="col-lg-6" style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<p style={{fontFamily: 'Monda-Regular', fontSize: 48, fontWeight: 700}}>TỐC KÝ</p>
				</div>
				<div className="col-lg-4" style={{display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center'}}>
					<p style={{fontFamily: 'Monda-Regular', marginTop: 20, fontSize: 24, fontWeight: 400, textAlign: 'justify'}}><b>Tốc ký (Shorthand)</b> là Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
				</div>
			</div>
			<div className="row" style={{display: 'flex', flexDirection: 'row', marginTop: 80}}>
				<div className="col-lg-1" />
				<div className="col-lg-4" style={{display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center'}}>
					<p style={{fontFamily: 'Monda-Regular', marginTop: 20, fontSize: 24, fontWeight: 400, textAlign: 'justify'}}><b>Tốc ký (Shorthand)</b> là Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
				</div>
				<div className="col-lg-1" />
				<div className="col-lg-4" style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<p style={{fontFamily: 'Monda-Regular', fontSize: 48, fontWeight: 700, textAlign: 'center'}}>Tại sao lại chọn tốc ký?</p>
				</div>
			</div>
			<div className="row" style={{display: 'flex', flexDirection: 'row', marginTop: 80}}>
				<div className="col-lg-1" />
				<div className="col-lg-4" style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
					<p style={{fontFamily: 'Monda-Regular', fontSize: 48, fontWeight: 700}}>Tốc ký Tiếng Việt của chúng tôi có gì?</p>
				</div>
				<div className="col-lg-1" />
				<div className="col-lg-4" style={{display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<p style={{fontFamily: 'Monda-Regular', marginTop: 20, fontSize: 24, fontWeight: 400, textAlign: 'justify'}}><b>Tốc ký (Shorthand)</b> là Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
					<button className="btn btn-block" onClick={() => setSelected(3)} style={{backgroundColor: '#353A3F', borderRadius: 20, padding: 10, color: Color.PrimaryWhite, width: 200}}>Tham gia ngay</button>
				</div>
			</div>
			<div style={{height: 100}} />
		</div>
	);
};

export default Introduce;
