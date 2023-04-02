import DataTypes from 'sequelize';

function build_user(sequelize) {
	sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    { timestamps: true }
    );
};


export default build_user;
