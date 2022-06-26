module.exports = (sequelize, DataTypes) => {
  const Supplier = sequelize.define("suppliers", {
    number: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    tradeName: {
      type: DataTypes.STRING
    },
    rfc: {
      type: DataTypes.STRING
    },
    curp: {
      type: DataTypes.STRING
    },
    concept: {
      type: DataTypes.STRING
    },
    checkName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    supportEmail: {
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
    },
    fax: {
      type: DataTypes.STRING
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
    cellphone: {
      type: DataTypes.STRING
    },
    enabled: {
      type: DataTypes.BOOLEAN
    }
  })

  return Supplier
}
