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
    }//,
    // It is possible to create foreign keys:
    // creator_id: {
    //   type: sequelize.INTEGER,
    //
    //   references: {
    //     // This is a reference to another model
    //     model: Users,
    //
    //     // This is the column name of the referenced model
    //     key: 'id',
    //
    //     // This declares when to check the foreign key constraint. PostgreSQL only.
    //     deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
    //   }
    // }
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
  // force: true will drop the table if it already exists
  Set.sync({force: false}).then(() => {
    // Table created
    return Set.create({
    title: 'biology 101',
    url: 'www.google.com',
    CategoryId: 1,
    UserId: 1
    });
  });
  return Set;
};
