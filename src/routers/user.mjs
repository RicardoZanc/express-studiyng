import { Router } from "express";
import { userService } from "../services/users.mjs";
import { treatForResponse } from "../helpers/responseHelpers.mjs";
import colors from 'colors'

const router = Router()

router.get('/users', (req, res)=>{
    const users = userService.getUsers()
    return res.status(200).send(users)
})

router.post('/users/login', (req,res)=>{
    const credentials = req.body;
    const result = treatForResponse(
     ()=>userService.login(credentials)
    )

    console.log(colors.yellow('Result: ,', result))

    res.status(result.status).send(result.data)
        

})

export default router;