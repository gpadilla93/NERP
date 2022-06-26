module.exports = (sequelize, DataTypes) => {
  const Alert = sequelize.define("alert", {
    type: {
      type: DataTypes.STRING
    },
    enabled: {
      type: DataTypes.BOOLEAN
    }
  })

  return Alert
}
