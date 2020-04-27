const calculateBmi = (h: number, w: number): string => {
	let bmi = w/(h*h/10000);
	if (bmi < 18.5) {
		return 'Underweight';
	} else if (bmi < 25 && bmi >= 18.5) {
		return 'Normal (healthy weight)';
	} else if (bmi <=25 && bmi < 30) {
		return 'Overweight';
	} else return 'Obese'
}

console.log(calculateBmi(180, 74));