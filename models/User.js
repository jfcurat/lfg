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
    following: {
      type: DataTypes.STRING,
      get: function () {
        return this.getDataValue('genre').split(';');
      },
      set: function (val) {
        this.setDataValue('genre', val.join(';'));
      }
    }
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
