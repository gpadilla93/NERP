module.exports = (sequelize, DataTypes) => {
  const MCategory = sequelize.define("mCategory", {
    type: {
      type: DataTypes.STRING
    },
    enabled: {
      type: DataTypes.BOOLEAN
    }
  })

  return MCategory
}
