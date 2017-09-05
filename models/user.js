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
    //When a Set is deleted, also delete any associated Users.
    User.hasMany(models.Set, {
      onDelete: "cascade"
    });
  };


// force: true will drop the table if it already exists
  // User.sync({force: true}).then(() => {
  //   // Table created
  //   User.create({
  //     displayname: 'cinnamon',
  //     username: 'cinnamon@gmail.com',
  //     password: '123'
  //   });
  // });

  return User;
};
