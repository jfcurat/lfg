module.exports = function(sequelize, DataTypes) {
  const Game = sequelize.define('Game', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publisher: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gameMode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    esrb: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    }
  },
  {
    timestamps: false,
  })

  Game.associate = function(models) {
    Game.hasMany(models.Post, {});
  };

  return Game;
}
