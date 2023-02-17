
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      displayName: DataTypes.STRING,
      image: DataTypes.STRING,
      
    }, {
      underscored: true,
      timestamps: false,
      tableName: 'users',
    });
  
    User.associate = (models) => {
         User.hasMany(models.BlogPost, {
          // throw new Error(`${this.name}.hasMany 
          as: 'blog_posts',
          foreignKey: 'user_id',
        }) 
      }
    return User;
  };