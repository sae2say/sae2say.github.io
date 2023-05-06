const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

app.listen(8080, function(){
    console.log('listening on 8080');
});

app.get('/home',function(req, res){
    res.sendFile(__dirname + '/views/home.html');
});

app.post('/login',function(req,res){
    console.log(req.body.m_id);
    console.log(req.body.m_pw);
    if ((req.body.m_id==='abc') && (req.body.m_pw==='1234')){
        res.send('로그인 성공!')
    }
    else{
        res.send('로그인 실패.')
    }
});

app.get('/page/:num', function(req, res) {
    const num = req.params.num;
    res.send(num + '페이지입니다.');
});