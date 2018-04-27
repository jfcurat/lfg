module.exports = function(sequelize, DataTypes) {
  const Game = sequelize.define('Game', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      get: function () {
        return this.getDataValue('genre').split(';');
      },
      set: function (val) {
        this.setDataValue('genre', val.join(';'));
      }
    },
    developer: {
      type: DataTypes.STRING,
      allowNull: false,
      get: function () {
        return this.getDataValue('developer').split(';');
      },
      set: function (val) {
        this.setDataValue('developer', val.join(';'));
      }
    },
    publisher: {
      type: DataTypes.STRING,
      allowNull: false,
      get: function () {
        return this.getDataValue('publisher').split(';');
      },
      set: function (val) {
        this.setDataValue('publisher', val.join(';'));
      }
    },
    releaseDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gameMode: {
      type: DataTypes.STRING,
      allowNull: false,
      get: function () {
        return this.getDataValue('gameMode').split(';');
      },
      set: function (val) {
        this.setDataValue('gameMode', val.join(';'));
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    esrb: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    coverPhoto: {
      type: DataTypes.STRING,
      allowNull: false,
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
