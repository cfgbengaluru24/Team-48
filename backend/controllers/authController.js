const Students = require('../models/Student.js');
const Admin = require('../models/Admin.js');
const { v4: uuidv4 } = require('uuid');

const login = async(req,res) => {
    const {role, email, password} = req.body;
    if(!role || !email || !password){
        return res.status(400).send({
            success: false,
            message: "Either of role, email or password not given",
        })
    }
    let user = null;
    try {
        if(role === 'ADMIN'){
            user = await Admin.findOne({email});
        }else{
            user = await Students.findOne({email});
        }
        if(!user){
            return res.status(400).send({
                success: false,
                message: "Cant find user",
            })
        }
        if(user.password !== password){
            return res.status(403).send({
                success: false,
                message: "Unauthorized",
            })
        }
        return res.status(200).send({
            success: true,
            message: "Login successful"
        })
    } catch (error) {
        console.error("Error occured while login");
        return res.status(500).end({
            success: false,
            message: "Internal server error while loggin in",
        })
    }
}

const register = async (req, res) => {
    const { email, password } = req.body;
    
    // Validate input fields
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Either email or password not given",
        });
    }

    try {
        let user = await Students.findOne({ email });
        const uuid = uuidv4();
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        const newUser = new Students({studentId: uuid, email, password });
        await newUser.save();

        return res.status(200).json({
            success: true,
            message: "Registration successful",
            data: newUser,
        });
    } catch (error) {
        console.error("Error occurred during registration:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error during registration",
        });
    }
}    


module.exports = {
    login, register
}
