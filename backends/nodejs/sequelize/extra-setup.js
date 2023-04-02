function applyExtraSetup(sequelize) {
	const { user, post } = sequelize.models;

    user.hasMany(post, {
        foreignKey: {
            name: 'posts',
            onDelete: 'CASCADE'
        }
    });
    
    post.belongsTo(user);
}

export default applyExtraSetup;
