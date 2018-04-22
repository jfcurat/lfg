module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  })

  User.associate = function(models) {
    User.hasMany(models.Post, {
      onDelete: 'cascade',
    });
  };

  return User;
}
