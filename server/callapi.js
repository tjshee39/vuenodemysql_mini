const express = require('express');

const db = require('./db');

const router = express.Router();

const corsOptions = {
	origin: '*', // 출처 허용 옵션
	credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

router.get('/nameage-list', async function (req, res) {
	try {
		const sqlQuery = 'SELECT * FROM NAMEAGE;';

		db.query(sqlQuery, (err, result) => {
			res.send(result);
		});
	} catch (e) {
		res.json({
			message: 'insert error',
			error: e,
		});
	}
});

router.post('/insert-nameage', async function (req, res) {
	try {
		console.log('=======================================');
		console.log('insert-nameage', req.body);

		const nameAge = [req.body.name, req.body.age];

		const sqlQuery = 'INSERT INTO NAMEAGE(NAME, AGE) VALUES(?, ?);';

		db.query(sqlQuery, nameAge, (err, result) => {
			res.send(result);
		});
	} catch (e) {
		res.json({
			message: 'insert error',
			error: e,
		});
	}
});

module.exports = router;
