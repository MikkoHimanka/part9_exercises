interface Result {
	periodLength: number;
	trainingDays: number;
	success: boolean;
	rating: number;
	ratingDescription: string;
	target: number;
	average: number;
}

const calculateExercises = (hours: Array<number>, target: number): Result => {
	const periodL = hours.filter(x => x !== 0);

	let average = hours.reduce((a, b) => a + b, 0);
	average = average/hours.length;

	const success = (target <= periodL.length);

	const rating = (success) ? ((average >= 1.5) ? 3 : 2) : 1;

	const ratingDescription = (rating === 1) ? 'Failure is part of the process, try harder next time!' : ((rating === 2) ? 'Good job, but you can do better!' : 'Excellent job! Try raising your target next!');
	
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
	const cmd = process.argv;
	if (cmd.length <= 4) return ('ERROR: Period length must be at least two days long!');
	else if (cmd.filter(x => isNaN(+x)).length > 2) return ('ERROR: Arguments can only be numbers!');
	else {
		const numbers: Array<number> = cmd.filter(x => !isNaN(+x)).map(x => +x);
		const target: number = numbers.shift() as number;
		return (calculateExercises(numbers, target));
	}

};

console.log(runCalculateExercises());

export default calculateExercises;