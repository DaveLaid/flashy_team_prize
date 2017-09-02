module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    cat_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });


  Category.associate = function(models) {
    //When a Set is deleted, also delete any associated Flashcards.
    Category.hasMany(models.Set, {
      onDelete: "cascade"
    });
  };

  return Category;
};