const cors = require('cors');
const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

// !!! express ver < 4.16
// const bodyParser = require('body-parser');

const callapi = require('./callapi');

const app = express();

const PORT = process.env.port || 8000;

app.listen(PORT, () => {
	console.log(`running on port ${PORT}`);
});

const corsOptions = {
	origin: '*', // 출처 허용 옵션
	credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

app.use(cors(corsOptions));
/* !!! express ver < 4.16
 * app.use(bodyParser.urlencoded({ extended: true }));
 * app.use(bodyParser.json());
 */
app.use(express.urlencoded({ extended: true })); // express ver > 4.16
app.use(express.json()); // express ver > 4.16
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/callapi', callapi);

// 새로고침 했을 경우 404에러 처리
// 빌드된 프로젝트의 index.html 반환
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});
