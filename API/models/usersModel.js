const bcrypt = require("bcryptjs")
function hash(string) {
  //return createHash('sha256').update(string).digest('hex');
  return bcrypt.hash(string, 10)
}
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("users", {
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        // Storing passwords in plaintext in the database is terrible.
        // Hashing the value with an appropriate cryptographic hash function is better.
        this.setDataValue("password", hash(value))
      }
    },
    email: {
      type: DataTypes.TEXT
    },
    group: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.INTEGER
    },
    enabled: {
      type: DataTypes.BOOLEAN
    }
  })

  return Users
}
