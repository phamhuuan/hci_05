import KeyCode from "./KeyCode";

const stringArr = ['i', 'í', 'ì', 'ị', 'ĩ', 'ỉ', 'e', 'é', 'è', 'ẹ', 'ẽ', 'ẻ', 'ê', 'ế', 'ề', 'ệ', 'ễ', 'ể'];

export default class AmDau {
	static amDauN = ['q', 'w', 'e', 'a', 's', 'd'];
	static convertKey(keys, nextString) {
		keys = keys.map(key => KeyCode.convertKey(key)).sort().join('');
		console.log(keys);
		switch (keys) {
			case 'kr':
				if (stringArr.includes(nextString[0])) return 'ngh';
				return 'ng';
			case 'pt':
				return 'đ';
			case 'hk':
				return 'kh';
			case 'kp':
				if (stringArr.includes(nextString[0])) return 'gh';
				return 'g';
			case 'p':
				return 'b';
			case 'hs':
				return 'gi';
			case 'k':
				if (stringArr.includes(nextString[0])) return 'k';
				return 'c';
			case 'ps':
				return 'd';
			case 'ks':
				return 'ch';
			case 'h':
				return 'h';
			case 'rs':
				return 'l';
			case 'hr':
				return 'm';
			case 'pr':
				return 'n';
			case 'hps':
				return 'p';
			case 'kst':
				return 'q';
			case 'r':
				return 'r';
			case 's':
				return 's';
			case 't':
				return 't';
			case 'ht':
				return 'th';
			case 'prs':
				return 'v';
			case 'hp':
				return 'ph';
			case 'st':
				return 'x';
			case 'kt':
				return 'nh';
			case 'rt':
				return 'tr';
			default:
				return '';
		}
	}
}