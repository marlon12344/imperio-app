const express = require('express');
const app = express();
app.use(express.json());
app.get('/api/ping', (req,res)=> res.json({pong:true}));
app.get('/api/app/version', (req,res)=> res.json({version:'1.0.0', apk_url:'https://github.com/SEU_USUARIO/imperio-gestao/releases/latest/download/imperio-gestao.apk'}));
app.listen(3000, ()=> console.log('Backend running on port 3000'));
