import userService from "../services/userService";

let handleLogin = async (req,res) => {
    let email = req.body.email;
    let password = req.body.password;
  
    if(!email || !password ) {
        return res.status(500).json({
            errCode: 1, 
            message: 'Missing input parameter!'
        })
        

    }
  let userData = await userService.handleUserLogin(email, password);
  console.log (userData);
    //check email exist
    //compare password 
    // return userinfo
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errmessage,
        user: userData.user ? userData.user :{} //neu userdata tra ra thi se tra lai, con neu ko co thi se tra ra {}

    }) 
}

module.exports ={
    handleLogin: handleLogin
}