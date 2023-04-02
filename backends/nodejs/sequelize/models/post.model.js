import DataTypes from 'sequelize';

function build_post(sequelize) {
	sequelize.define('post', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {}
    );
};


export default build_post;