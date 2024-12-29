const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const create_user = async (req, res) => {
    const jwt = require('jsonwebtoken');

    try {
        const { name, email, address, password } = req.body;
        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            res.status(404).json({ msg: 'User is already Registered...' });
        }

        const newUser = await User.create({ name, email, address });

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
const login_user = (req, res) => {
    const { email } = req.body;
}

module.exports = { create_user, delete_user, getById, update_user, getAllusers }