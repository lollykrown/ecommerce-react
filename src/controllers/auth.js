const User = require('../models/user')
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
    const { firstName, lastName, email, password } = req.body

    User.findOne({ email: email })
        .exec((err, user) => {
            if (user) return res.status(404).json({
                message: 'user already exist'
            })

            const _user = new User({ firstName, lastName, email, password, username: Math.random().toString() })
            _user.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        message: 'something went wrong'
                    })
                }

                if (data) {
                    res.status(201).json({
                        message: 'user created successfully',
                        data
                    })
                }
            })
        })

}

exports.signin = (req, res) => {
    const { email, password } = req.body

    User.findOne({ email })
        .exec((error, user) => {
            if (error) {
                return res.status(400).json({
                    error,
                    message: 'something went wrong'
                })
            }
            if (user) {
                if (user.authenticate(req.body.password)) {
                    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1hr' });
                    const { _id,firstName, lastName, email, role, fullName } = user

                    res.status(200).json({
                        token,
                        user: { _id,firstName, lastName, email, role, fullName }
                    })
                } else {
                    return res.status(400).json({
                        message:'Invalid Password'
                    })
                }
            } else{
                return res.status(400).json({
                    message: 'something went wrong'
                })
            }

            const _user = new User({ firstName, lastName, email, password, username: Math.random().toString() })
            _user.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        message: 'something went wrong'
                    })
                }

                if (data) {
                    res.status(201).json({
                        message: 'user created successfully',
                        data
                    })
                }
            })
        })

}

exports.requireSignin = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    const user = jwt.verify(token, process.env.JWT_SECRET)
    req.user = user
    next()


}