module.exports = (sequelize, DataTypes) => {
  const Material = sequelize.define("material", {
    number: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    unit: {
      type: DataTypes.INTEGER
    }
  })

  return Material
}
