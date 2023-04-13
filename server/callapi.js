const express = require('express');

const db = require('./db');

const router = express.Router();

const corsOptions = {
	origin: '*', // 출처 허용 옵션
	credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

// insert
router.post('/nameage', async function (req, res) {
	try {
		console.log('=======================================');
		console.log('✏️insert-nameage', req.body);

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

// nameage data list
router.get('/nameage-list', async function (req, res) {
	try {
		console.log('=======================================');
		console.log('📜nameage-list');

		const sqlQuery = 'SELECT * FROM NAMEAGE;';

		db.query(sqlQuery, (err, result) => {
			res.send(result);
		});
	} catch (e) {
		res.json({
			message: 'select error',
			error: e,
		});
	}
});

// data of id
router.get('/nameage-info/:id', async function (req, res) {
	try {
		console.log('=======================================');
		console.log('🪪nameage-info', req.params);

		const { id } = req.params;
		const sqlQuery = `SELECT * FROM NAMEAGE WHERE id=${id};`;

		db.query(sqlQuery, (err, result) => {
			console.log(result);
			res.send(result);
		});
	} catch (e) {
		res.json({
			message: 'select error',
			error: e,
		});
	}
});

// update or delete about id's info
router.post('/nameage/:id', async function (req, res) {
	try {
		console.log('=======================================');
		console.log('✏️update/delete-nameage', req.body.state);

		const { id } = req.params;

		// state: update or delete
		const { state, name, age } = req.body;
		// const nameAge = [req.body.name, req.body.age];

		let sqlQuery;

		if (state === 'update') {
			console.log('update ··········');
			sqlQuery = `UPDATE NAMEAGE SET NAME=?, AGE=? WHERE id=${id}`;

			db.query(sqlQuery, [name, age], (err, result) => {
				res.send(result);
			});
		} else {
			console.log('delete ··········');
			sqlQuery = `DELETE FROM NAMEAGE WHERE id=${id}`;

			db.query(sqlQuery, (err, result) => {
				res.send(result);
			});
		}

		// db.query(sqlQuery, nameAge, (err, result) => {
		// 	res.send(result);
		// });
	} catch (e) {
		res.json({
			message: 'update/delete error',
			error: e,
		});
	}
});

// router.post('/delete-nameage/:id', async function (req, res) {
// 	try {
// 		console.log('=======================================');
// 		console.log('delete-nameage', req.params);

// 		const { id } = req.params;

// 		const sqlQuery = `DELETE FROM NAMEAGE WHERE id=${id}`;

// 		db.query(sqlQuery, (err, result) => {
// 			res.send(result);
// 		});
// 	} catch (e) {
// 		res.json({
// 			message: 'delete error',
// 			error: e,
// 		});
// 	}
// });

module.exports = router;
