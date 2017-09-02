module.exports = function(sequelize, DataTypes) {
  var Flashcard = sequelize.define("Flashcard", {
    flash_num: {
      type: DataTypes.INTEGER,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 500]
      }
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 500]
      }
    }
  });


  Flashcard.associate = function(models) {
    //Associates a Set to the User who created it.
    Flashcard.belongsTo(models.Set, {
      foreignKey: {
        allowNull: false
      }
    });
  };


  return Flashcard;
};
