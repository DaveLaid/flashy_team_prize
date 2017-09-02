module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    displayname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 40]
      }
    }
  });

  User.associate = function(models) {
    //When a Set is deleted, also delete any associated Flashcards.
    User.hasMany(models.Set, {
      onDelete: "cascade"
    });
  };

  return User;
};
