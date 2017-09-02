module.exports = function(sequelize, DataTypes) {
  var Set = sequelize.define("Set", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    }
  });

  Set.associate = function(models) {
    Set.belongsTo(models.Category, {
      //Associates a Set to the Category is belongs in.
      foreignKey: {
        allowNull: false
      }
    });
  };

  Set.associate = function(models) {
    //Associates a Set to the User who created it.
    Set.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Set.associate = function(models) {
    //When a Set is deleted, also delete any associated Flashcards.
    Set.hasMany(models.Flashcard, {
      onDelete: "cascade"
    });
  };

  return Set;
};
