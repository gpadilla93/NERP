module.exports = (sequelize, DataTypes) => {
  const Warehouse = sequelize.define("warehouse", {
    number: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    size: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    },
    street: {
      type: DataTypes.STRING
    },
    number: {
      type: DataTypes.STRING
    },
    neighborhood: {
      type: DataTypes.STRING
    },
    zipcode: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    }
  })

  return Warehouse
}
