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
    //Associates a Flashcard to the Set it belongs to.
    Flashcard.belongsTo(models.Set, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  // force: true will drop the table if it already exists
  Flashcard.sync({force: false}).then(() => {
    // Table created
    return Flashcard.create({
    flash_num: 1,
    question: 'what is a hamster?',
    answer: 'a mammal',
    SetId: 1
    });
  });
  return Flashcard;
};
