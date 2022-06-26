module.exports = (sequelize, DataTypes) => {
  const MVariant = sequelize.define("mVariant", {
    type: {
      type: DataTypes.STRING
    },
    enabled: {
      type: DataTypes.BOOLEAN
    }
  })

  return MVariant
}
