module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Categorie", {
    cat_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Category;
};