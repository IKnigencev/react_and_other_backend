import bcrypt from 'bcryptjs';

import sequelize  from '../sequelize';

const models = sequelize.models;


export const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        console.log(req);
        console.log(username, password);
        const isUsed = await models.user.findOne({where: { username: username }})

        console.log(isUsed);
        if (isUsed) {
            return res.status(402).json({
                mesage: 'Данный username уже занят.'
            })
        }

        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);

        console.log(hash);
        const newUser = await models.user.create({
            username,
            password: hash
        });

        res.json({
            newUser,
            message: 'Регистрация прошла успешно'
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: 'Что-то пошло нет так..'
        })
    }
}

export const login = async (req, res) => {
    
}

export const getMe = async (req, res) => {
    
}
