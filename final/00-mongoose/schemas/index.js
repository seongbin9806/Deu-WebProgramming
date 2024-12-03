const mongoose = require('mongoose');

const connect = async () => {
    if (process.env.NODE_ENV !== 'production') {
        mongoose.set('debug', true);
    }

    try {
        await mongoose.connect('mongodb://localhost:27017/admin', {
            dbName: 'nodejs',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('몽고디비 연결 성공');
    } catch (error) {
        console.log('몽고디비 연결 에러', error);
    }
};

// 이벤트 리스너는 기존 코드 유지
mongoose.connection.on('error', (error) => {
    console.error('몽고디비 연결 에러', error);
});
mongoose.connection.on('disconnected', () => {
    console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
    connect();
});

module.exports = connect;
