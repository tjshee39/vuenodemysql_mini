const cors = require('cors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');

const callapi = require('./callapi');
// const db = require('./db');

const app = express();

const PORT = process.env.port || 8000;

app.listen(PORT, () => {
	console.log(`running on port ${PORT}`);
});

const corsOptions = {
	origin: '*', // 출처 허용 옵션
	credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

app.use('/callapi', callapi);
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/nameage-list', async function (req, res) {
// 	const sqlQuery = 'SELECT * FROM NAMEAGE;';

// 	db.query(sqlQuery, (err, result) => {
// 		res.send(result);
// 	});
// });

// app.post('/insert-nameage', async function (req, res) {
// 	console.log('========================');
// 	console.log('insertNameAge', req.body);

// 	const nameAge = [req.body.name, req.body.age];

// 	const sqlQuery = 'INSERT INTO NAMEAGE(NAME, AGE) VALUES(?, ?);';

// 	db.query(sqlQuery, nameAge, (err, result) => {
// 		res.send(result);
// 	});
// });

module.exports = app;
