module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define("employee", {
    firstName: {
      type: DataTypes.STRING
    },
    middleName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstName} ${this.middleName} ${this.lastName}`
      },
      set(value) {
        throw new Error("Do not try to set the `fullName` value!")
      }
    },
    birthday: {
      type: DataTypes.DATE
    },
    gender: {
      type: DataTypes.INTEGER
    },
    phone: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  })

  return Employee
}
