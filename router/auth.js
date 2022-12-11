const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router(); //it will do all the things that express can do.

require('../db/conn');  //it will help to connect with the mongodb
const User = require('../model/userSchema');  

router.get('/', (req, res, next) => {
    res.send(`Hello world from the server router js`);
});

//using promises
// router.post('/register', (req, res) => {
//     const { name, email, phone, work, password, cpassword } = req.body;

//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "plz fill the field program" });
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "Email already Exist" });
//             }
//             const user = new User({ name, email, phone, work, password, cpassword });

//             user.save().then(() => {
//                 res.status(201).json({ message: "user registered succesfully" });
//             }).catch((err) => res.status(500).json({ error: "Failed to registered" }));
//         }).catch(err => { console.log(err); })
// })

//using async and await
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "plz fill the field program" });
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
        }
        else if (password !== cpassword) {
            return res.status(422).json({ error: "password not matched" });
        }
        else {
            const user = new User({ name, email, phone, work, password, cpassword });
            //yaha pe 
            await user.save();

            res.status(201).json({ message: "user registered succesfully" });
        }

    } catch (err) {
        console.log(err);
    }

});

//login Route
router.post('/signup', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "invalid username or password" });
        }
        const userLogin = await User.findOne({ email: email });
        //console.log(userLogin);

        if (userLogin) {
            //for hashing password to match with it.
            const isMatched = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken(); //yaha pe get kar raha hai token ko
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })

            if (!isMatched) {
                res.status(400).json({ error: "invalid credential" });
            }
            else {
                res.json({ message: "user Signup succesfully" });
            }
        } else {
            res.status(400).json({ error: "invalid credential" });

        }

    } catch (err) {
        console.log(err);
    }
})


module.exports = router;
