import express from 'express';
import bmi from './bmiCalculator';
const app = express();

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

const PORT = 3001;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});