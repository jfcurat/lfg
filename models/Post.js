module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
    post: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amountOfPlayersNeeded: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  })

  
  Post.associate = function(models) {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      }
    });

  };

  return Post;
}
