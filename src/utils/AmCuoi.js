import KeyCode from "./KeyCode";

export default class AmCuoi {
	static amCuoiN = ['o', 'p', '[', 'l', ';', "'"]
	static convertKey(keys) {
		keys = keys.map(key => KeyCode.convertKey(key)).sort().join('');
		switch (keys) {
			case 'tk':
				return 'p';
			case 'nk':
				return 'c';
			case 'nt':
				return 't';
			case 'gk':
				return 'ch';
			case 'gj':
				return 'u';
			case 'g':
				return 'ng';
			case 'j':
				return 'i';
			case 'jn':
				return 'y';
			case 'k':
				return 'nh';
			case 't':
				return 'm';
			case 'n':
				return 'n';
			case 'jk':
				return 'o';
			default:
				return '';
		}
	}
}