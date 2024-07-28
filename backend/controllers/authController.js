const Students = require('../models/Student.js');
const Admin = require('../models/Admin.js');
const { v4: uuidv4 } = require('uuid');

const login = async(req,res) => {
    const {role, email, password} = req.body;
    if(!role, !email, !password){
        res.end(400).json({
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
            res.end(400).json({
                success: false,
                message: "Cant find user",
            })
        }
        if(user.password !== password){
            res.send(403).json({
                success: false,
                message: "Unauthorized",
            })
        }
        res.send(200).json({
            success: true,
            message: "Login successful"
        })
    } catch (error) {
        console.error("Error occured while login");
        res.end(500).json({
            success: false,
            message: "Internal server error while loggin in",
        })
    }
}

const register = async(req,res) => {
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
            // Check if user already exists
            let user = await Students.findOne({ email });
            const uuid = uuidv4();
            if (user) {
                return res.status(400).json({
                    success: false,
                    message: "User already exists",
                });
            }
    
            // Create new user
            const newUser = new Students({studentId: uuid, email, password });
            await newUser.save();
    
            res.status(200).json({
                success: true,
                message: "Registration successful",
                data: user,
            });
        } catch (error) {
            console.error("Error occurred during registration:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error during registration",
            });
        }
    }    
}

module.exports = {
    login, register
}