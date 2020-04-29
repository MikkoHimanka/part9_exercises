interface Result {
	periodLength: number,
	trainingDays: number,
	success: boolean,
	rating: number,
	ratingDescription: string,
	target: number,
	average: number,
}

const calculateExercises = (hours: Array<number>, target: number): Result => {
	let periodL = hours.filter(x => x !== 0);

	let average = hours.reduce((a, b) => a + b, 0);
	average = average/hours.length;

	let success = (target <= periodL.length);

	let rating = (success) ? ((average >= 1.5) ? 3 : 2) : 1;

	let ratingDescription = (rating === 1) ? 'Failure is part of the process, try harder next time!' : ((rating === 2) ? 'Good job, but you can do better!' : 'Excellent job! Try raising your target next!');

	return {
		periodLength: hours.length,
		trainingDays: periodL.length,
		success: success,
		rating: rating,
		target: target,
		average: average,
		ratingDescription: ratingDescription
	};
};

const runCalculateExercises = () => {
	let cmd = process.argv;
	if (cmd.length <= 4) console.log('ERROR: Period length must be at least two days long!');
	else if (cmd.filter(x => isNaN(+x)).length > 2) console.log('ERROR: Arguments can only be numbers!');
	else {
		let numbers = cmd.filter(x => !isNaN(+x)).map(x => +x);
		let target = numbers.shift();
		console.log(calculateExercises(numbers, target));
	}

}

runCalculateExercises();