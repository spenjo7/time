/* 
v1.0 2020-06-07  
	- Creating to allow for easy custom timestamp outputs
	- Spliting into multiple function so we can get partial outputs like just the date or just the time
*/

const leadingZero = ( val, length = 2 ) => { // Enforce leading zeros for numbers. Ex: 1 = 01
	return `0${val}`.slice(length * -1);
}

const getDateString = ( d = new Date() ) => { //YYYY-MM-DD only
	const dx = [ // Enforce MM-DD
		d.getMonth(),
		d.getDate()
	].map( t => leadingZero(t));
	
	return `${d.getFullYear()}-${dx[0]}-${dx[1]}`;
}

const getTimeString = ( d = new Date() ) => { // HH:MM:SS.mmm only
	const dx = [ // Enforce HH:MM:SS
		d.getHours(),
		d.getMinutes(),
		d.getSeconds()
	].map( t => leadingZero(t));
	const ms = `${d.getMilliseconds()}000`.slice(0,3); // Enforce 3 decimals for .mmm
	
	return 	`${dx[0]}:${dx[1]}:${dx[2]}.${ms}`;
}

const getTimezoneString = ( d = new Date() ) => { // ex: -0400
	return d.toString().split('GMT')[1].split(' ')[0]; // Just using the pre-formated offset 
}

const dateTime = ( d = new Date() ) =>{ //YYYY-MM-DD HH:MM:SS.MMM // In case you don't want the TZ offset for some reason
	return [
		getDateString(d),
		getTimeString(d)
	].join(' ');
}

const timestamp = ( d = new Date() ) =>{ //YYYY-MM-DD HH:MM:SS.MMM TZ
	return [
		dateTime(d),
		getTimezoneString(d)
	].join(' ');
}

module.exports = { leadingZero, getDateString, getTimeString, getTimezoneString, dateTime, timestamp };