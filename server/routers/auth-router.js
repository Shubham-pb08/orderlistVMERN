const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controller');
const {signupSchema,loginSchema} = require('../validators/validator')
const validate = require('../middlewares/validate-middleware');

// const {home,signup} = require('./controllers/auth-controller');


// router.get("/", (req, res) => {
//     res.status(200).send("Router is also working..."); 
// });

// router.route('/').get((req, res) => {
//     res.status(200).send("Router is also working...");
// })

// router.route('/signup').get((req, res) => {
//     res.status(200).send("working")
// })

router.route('/').get(authControllers.home);
router.route('/signup').post(validate(signupSchema), authControllers.signup)
router.route('/login').post(validate(loginSchema),authControllers.login)

module.exports = router;