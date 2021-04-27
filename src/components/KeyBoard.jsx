import React from 'react';

const KeyBoard = ({keys}) => {
	console.log(keys);
	return (
		<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
			<div style={{display: 'flex', flexDirection: 'row'}}>
				<div className="key1">
					~<br />`
				</div>
				<div className="key2">
					!<br />1
				</div>
				<div className="key2">
					@<br />2
				</div>
				<div className="key2">
					#<br />3
				</div>
				<div className="key2">
					$<br />4
				</div>
				<div className="key2">
					%<br />5
				</div>
				<div className="key2">
					^<br />6
				</div>
				<div className="key2">
					&<br />7
				</div>
				<div className="key2">
					*<br />8
				</div>
				<div className="key2">
					(<br />9
				</div>
				<div className="key2">
					)<br />0
				</div>
				<div className="key1">
					_<br />-
				</div>
				<div className="key1">
					+<br />=
				</div>
				<div className="key4">
					Backspace
				</div>
			</div>
			<div style={{display: 'flex', flexDirection: 'row'}}>
				<div className="key5">
					Tab
				</div>
				<div className="key3" style={keys.includes('q') ? {backgroundColor: 'red'} : {}}>
					S<br />Q
				</div>
				<div className="key3" style={keys.includes('w') ? {backgroundColor: 'red'} : {}}>
					K<br />W
				</div>
				<div className="key3" style={keys.includes('e') ? {backgroundColor: 'red'} : {}}>
					R<br />E
				</div>
				<div className="key3" style={keys.includes('r') ? {backgroundColor: 'red'} : {}}>
					N<br />R
				</div>
				<div className="key3" style={keys.includes('t') ? {backgroundColor: 'red'} : {}}>
					H<br />T
				</div>
				<div className="key1">
					Y
				</div>
				<div className="key3" style={keys.includes('u') ? {backgroundColor: 'red'} : {}}>
					*<br />U
				</div>
				<div className="key3" style={keys.includes('i') ? {backgroundColor: 'red'} : {}}>
					W<br />I
				</div>
				<div className="key3" style={keys.includes('o') ? {backgroundColor: 'red'} : {}}>
					J<br />O
				</div>
				<div className="key3" style={keys.includes('p') ? {backgroundColor: 'red'} : {}}>
					N<br />P
				</div>
				<div className="key3" style={keys.includes('[') ? {backgroundColor: 'red'} : {}}>
					T<br />[
				</div>
				<div className="key1">
					&#125;<br />]
				</div>
				<div className="key6">
					|<br />\
				</div>
			</div>
			<div style={{display: 'flex', flexDirection: 'row'}}>
				<div className="key7">
					Caps Lock
				</div>
				<div className="key3" style={keys.includes('a') ? {backgroundColor: 'red'} : {}}>
					T<br />A
				</div>
				<div className="key3" style={keys.includes('s') ? {backgroundColor: 'red'} : {}}>
					P<br />S
				</div>
				<div className="key3" style={keys.includes('d') ? {backgroundColor: 'red'} : {}}>
					H<br />D
				</div>
				<div className="key3" style={keys.includes('f') ? {backgroundColor: 'red'} : {}}>
					N<br />F
				</div>
				<div className="key3" style={keys.includes('g') ? {backgroundColor: 'red'} : {}}>
					S<br />G
				</div>
				<div className="key1">
					H
				</div>
				<div className="key3" style={keys.includes('j') ? {backgroundColor: 'red'} : {}}>
					I<br />J
				</div>
				<div className="key3" style={keys.includes('k') ? {backgroundColor: 'red'} : {}}>
					Y<br />K
				</div>
				<div className="key3" style={keys.includes('l') ? {backgroundColor: 'red'} : {}}>
					J<br />L
				</div>
				<div className="key3" style={keys.includes(';') ? {backgroundColor: 'red'} : {}}>
					G<br />;
				</div>
				<div className="key3" style={keys.includes("'") ? {backgroundColor: 'red'} : {}}>
					K<br />'
				</div>
				<div className="key8">
					Enter
				</div>
			</div>
			<div style={{display: 'flex', flexDirection: 'row'}}>
				<div className="key9">
					Shift
				</div>
				<div className="key1">
					Z
				</div>
				<div className="key1">
					X
				</div>
				<div className="key3" style={keys.includes('c') ? {backgroundColor: 'red'} : {}}>
					U<br />C
				</div>
				<div className="key3" style={keys.includes('v') ? {backgroundColor: 'red'} : {}}>
					O<br />V
				</div>
				<div className="key1">
					B
				</div>
				<div className="key3" style={keys.includes('n') ? {backgroundColor: 'red'} : {}}>
					E<br />N
				</div>
				<div className="key3" style={keys.includes('m') ? {backgroundColor: 'red'} : {}}>
					A<br />M
				</div>
				<div className="key1">
					&lt;<br />,
				</div>
				<div className="key1">
					&gt;<br />.
				</div>
				<div className="key1">
					?<br />/
				</div>
				<div className="key10">
					Shift
				</div>
			</div>
			<div style={{display: 'flex', flexDirection: 'row'}}>
				<div className="key11">
					Ctrl
				</div>
				<div className="key1">
					Win
				</div>
				<div className="key5">
					Alt
				</div>
				<div className="key12">
					Space
				</div>
				<div className="key5">
					Alt
				</div>
				<div className="key1">
					Win
				</div>
				<div className="key13">
					Menu
				</div>
				<div className="key11">
					Ctrl
				</div>
			</div>
		</div>
	);
};

export default KeyBoard;
