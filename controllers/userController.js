const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const create_user = async (req, res) => {
    const jwt = require('jsonwebtoken');

    try {
        const { name, email, address, password } = req.body;
        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            res.status(404).json({ msg: 'User is already Registered...' });
        }

        // Hash the plain password with the salt
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, address, password: hashedPassword });

        // Token contains Payload + secure_key + expiration time
        const token = jwt.sign(
            { userId: newUser.id, email: newUser.email },
            process.env.SECURE_KEY,
            { expiresIn: '1h' }
        );
        console.log('Token :' + token)

        res.status(201).json({
            message: 'Registration successful',
            token
        })
    }
    catch (error) {
        res.status(500).json(error);
    }


}
const getAllusers = async (req, res) => {
    try {

        const response = await User.findAll();
        res.status(200).json(response);

    } catch (error) {
        res.status(500).json(error);
    }
}
const delete_user = async (req, res) => {
    try {
        const { id } = req.params;
        // Find the user by primary key
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ message: 'User Not Found.' });
        }

        // Delete the specific user
        await user.destroy();

        res.status(200).json({ message: 'User Deleted Successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal Server Error.' });
    }
};

const getById = async (req, res) => {
    try {

        const { id } = req.params;
        const userId = await User.findByPk(id);
        if (!userId) {
            res.status(404).json({ mesage: 'User Not Found' });
        }

        res.status(200).json(userId);

    } catch (error) {
        res.status(500).json(error);
    }
}
const update_user = async (req, res) => {
    try {

        const { id } = req.params;
        const { name, email, address } = req.body;
        const updated_user = await User.findByPk(id);

        if (!updated_user) {
            res.status(404).json('User Not Found');
        }

        await updated_user.update({ name, email, address });
        res.status(200).json(updated_user);

    } catch (error) {
        res.status(500).json("Internal Server Error..")
    }

}
const login_user = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json('Email OR Passwrod is Required ')
        }
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json('User Not Found');
        }

        const hashedPassword = await bcrypt.compare(password, user.password);
        if (!hashedPassword) {
            return res.status(401).json('Email OR Password is not Match..')
        }

        // Generate the Token

        const token = jwt.sign(
            { id: user.id, payload: user.email },
            process.env.SECURE_KEY,
            { expiresIn: '1h' }
        );

        res.status(200).json({ message: 'Login Successfull...', token })
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal Server Error' });


    }

}
const change_password = async (req, res) => {
    try {
        //check all fields are provided or not
        const { email, oldPassword, newPassword } = req.body;
        if (!email || !oldPassword || !newPassword) {
            res.status(400).json('Email OR Password OR New Password is not Matched')
        }

        //find the user by email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            res.status(404).json('User Not Found');
        }

        //compare the entered password with db password
        const isMatchedPassword = await bcrypt.compare(oldPassword, user.password);
        if (isMatchedPassword) {
            return res.status(401).json('Passowrd not match');
        }

        // hashing the new entered password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        res.status(200).json({ message: 'Password is Updated Successfully........', username: user.password })

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json('Internal Server Error...')
    }
}

module.exports = { create_user, delete_user, getById, update_user, getAllusers, login_user, change_password }