const timestamp = ( d = new Date() ) =>{
	let tz = d.getTimezoneOffset()/6; // that way we can get halves accurately
	const tz_symb = tz > 0? '-' : '+';
	tz = `0${tz}0`.slice(-4);
	tz = `${tz_symb}${tz}`;

	const dx = [ // enforcing 2 chars for MM-DD HH:MM:SS
		d.getMonth(),
		d.getDate(),
		d.getHours(),
		d.getMinutes(),
		d.getSeconds(),
	].map( t => `0${t}`.slice(-2));
	
	const ms = `${d.getMilliseconds()}000`.slice(0,3); // enforcing 3 chars for  mmm
	
	//YYYY-MM-DD HH:MM:SS.MMM TZ
	return 	`${d.getFullYear()}-${dx[0]}-${dx[1]} ${dx[2]}:${dx[3]}.${ms} ${tz}`;
}

module.exports = { timestamp };