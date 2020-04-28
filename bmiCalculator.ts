const calculateBmi = (h: number, w: number): string => {
	let bmi = w/(h*h/10000);
	if (bmi < 18.5) {
		return 'Underweight';
	} else if (bmi < 25 && bmi >= 18.5) {
		return 'Normal (healthy weight)';
	} else if (bmi <=30 && bmi >= 25 ) {
		return 'Overweight';
	} else return 'Obese'
}

const runCalculateBmi = () => {
	let cmd = process.argv;
	if (cmd.length !== 4) console.log('ERROR: Wrong number of arguments detected!');
	else if (isNaN(+cmd[2]) || isNaN(+cmd[3])) console.log('ERROR: Arguments must be numbers!');
	else console.log(calculateBmi(+cmd[2], +cmd[3]));
}

runCalculateBmi();