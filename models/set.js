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
      //Associates a Set to the Category it belongs in.
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


  // // force: true will drop the table if it already exists
  // Set.sync({force: true}).then(() => {
  //   // Table created

  //   Set.create({
  //   title: 'Math 101',
  //   url: 'http://www.math.wsu.edu/HS/problems.html',
  //   CategoryId: 1,
  //   UserId: 1
  //   });

  //   Set.create({
  //   title: 'Math 202',
  //   url: 'http://catalog.csuci.edu/preview_course_nopop.php?catoid=11&coid=20549',
  //   CategoryId: 1,
  //   UserId: 1
  //   });

  //   Set.create({
  //   title: 'biology 101',
  //   url: 'www.google.com',
  //   CategoryId: 2,
  //   UserId: 1
  //   });
  // });

  return Set;
};
