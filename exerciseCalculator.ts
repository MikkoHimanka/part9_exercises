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
calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 5);