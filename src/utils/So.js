import KeyCode from "./KeyCode";

export default class So {
	static soN = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'q', 'w', 'e', 'r', 't', 'u', 'i', 'o', 'p', '[', 'a', 's', 'd', 'f', 'g', 'j', 'k', 'k', 'l', ';', "'", 'v'];
	static convertKey(keys, nextString) {
		keys = keys.map(key => KeyCode.convertKey(key)).sort().join('');
		switch (keys) {
			case '#s':
				return '1';
			case '#k':
				return '2';
			case '#r':
				return '3';
			case '#n':
				return '4';
			case '#h':
				return '5';
			case '#o':
				return '0';
			default:
				return '';
		}
	}
}