const express = require('express');
const app = express();
const path = require('path');

app.get('/test', (req,res,next)=>{
  res.json({
    board : [
      {
        id:1,
        name : '홍길동',
        age : 20,
        addr : '송파구'
      },
      {
        id:2,
        name : '최병찬',
        age : 29,
        addr : '송파구'
      },
      {
        id:3,
        name : '김진수',
        age : 26,
        addr : '동작구'
      },
    ]
  })
})

app.get('/', (req,res,next)=>{
  // res.sendFile('D:/practice/node/02/index.html')
  res.sendFile(path.join(__dirname, './index.html'));
})

app.listen(3000, ()=>{
  console.log('server stated at http://127.0.0.1:3000')
})