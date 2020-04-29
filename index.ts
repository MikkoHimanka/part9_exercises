import express from 'express';
import bmi from './bmiCalculator';
import exercise from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
	res.send('Hello Full Stack');
});

app.get('/bmi', (req, res) => {
	if (!req.query.height || !req.query.weight){
		res.json({
			error: "missing parameters"
		});
	} else if (isNaN(+req.query.height) || isNaN(+req.query.weight)) {
		res.json({
			error: "malformatted parameters"
		});
	} else {
		res.json({
			weight: req.query.weight,
			height: req.query.height,
			bmi: bmi(+req.query.height, +req.query.weight)
		});
	}
});

app.get('/exercises', (req, res) => {
	const body = req.body;
	const target: number = body.target as number;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const dailyExercises: Array<number> = body.daily_exercises.map((x: any) => +x).filter((x: any) => !isNaN(x));

	if (!isNaN(target) && (dailyExercises.length === body.daily_exercises.length)) {
		if (dailyExercises.length < 2) res.json({error: "period length must be at least 2 days long"});

		if (target && dailyExercises) {
			res.json(
				exercise(dailyExercises, target)
			);
		} else res.json({error: "parameters missing"});
	} else res.json({error: "malformatted parameters"});
});

const PORT = 3001;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});