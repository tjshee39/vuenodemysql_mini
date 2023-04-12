const express = require('express');
// const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');

const db = require('./db');

const router = express.Router();

// const PORT = process.env.port || 8000;

// router.listen(PORT, () => {
// 	console.log(`running on port ${PORT}`);
// });

const corsOptions = {
	origin: '*', // 출처 허용 옵션
	credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

// router.use(cors(corsOptions));
// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(bodyParser.json());
router.use(history());
// app.use(express.static(path.join(__dirname, 'public')));

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
