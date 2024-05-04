const userModel = require("../model/user_model")

const createUser = async(req,res) => {
    //Get data from the user 
    console.log(req.body)
    //# de-structuring
    const{name,email,phone} = req.body; // model ma vako naam
    //validation
    if(!name || !email || !phone){
        return res.json({
            "sucess" : false,
            "message" : "Please enter all fields"
        })
    }
    //error handling
    try{
        //check if the user already exists 
        const existingUser = await userModel.findOne({phone: phone})
        if(existingUser){
            return res.json({
                "sucess" : false,
                "message" : "User Already Exists"
            })
        }

        //Create the user model
        const newUser = new userModel({
            //value received form user
            name : name,
            email: email,
            phone:phone,
        })

        //Save the value in database
        await newUser.save() //put await in processes that takes time
        res.json({
            "sucess": true,
            "message": "User Created Successfully"
        })
    }catch(error){
        console.log(error)
        res.json({
            "success": false,
            "message": "internal server error"
        })
    }
    //send the response and stop the process
    

    // res.send("Create API is working!")
}

module.exports = {
    createUser,
}