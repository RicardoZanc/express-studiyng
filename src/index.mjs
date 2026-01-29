import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import usersRouter from './routers/user.mjs'
import colors from 'colors';

const PORT = process.env.PORT || 3001;
const getTime = {
    inHours: time => time * 60  * 60 * 1000,
    inMinutes: time => time * 60 * 1000,
    inSconds: time => time * 1000
}

const app = express();
app.use(express.json())
app.use(cookieParser('abubleee'))
app.use(session({
    secret: 'abubleee',
    saveUninitialized: false, //true salvaria objetos de sessão mesmo vazio
    resave: false,
    cookie: {
        maxAge:  getTime.inHours(2)
    }

}))

app.use(usersRouter)

app.get('/health', (req, res)=>{
    const cookieTest = req.cookies.Teste
    if(cookieTest){
        console.log(colors.green('Teste: ', cookieTest))
    }
    else {
        console.log(colors.red('Cookie teste não setado, cookies: ', req.cookies))

    }

    res.cookie('Teste', 'contentCookie')
    return res.send('ok')
})




app.listen(PORT, ()=>{

    console.log("Server listeng on: ", PORT)

})

