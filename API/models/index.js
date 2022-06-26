const dbConfig = require("../config/dbConfig.js")

const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

sequelize
  .authenticate()
  .then(() => {
    console.log("connected..")
  })
  .catch((err) => {
    console.log("Error" + err)
  })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require("./usersModel.js")(sequelize, DataTypes)
db.employee = require("./employeeModel.js")(sequelize, DataTypes)
db.supplier = require("./supplierModel.js")(sequelize, DataTypes)
db.alert = require("./alertModel.js")(sequelize, DataTypes)

//Materials
db.mCategory = require("./materialCategoryModel.js")(sequelize, DataTypes)
db.material = require("./materialModel.js")(sequelize, DataTypes)
db.mVariant = require("./materialVariantModel.js")(sequelize, DataTypes)
db.warehouse = require("./warehouseModel.js")(sequelize, DataTypes)
db.material.hasMany(db.mVariant)
const materialsWarehouse = sequelize.define("materialsWarehouse", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  decimals: {
    type: DataTypes.BOOLEAN
  },
  stock: {
    type: DataTypes.FLOAT
  },
  virtualStock: {
    type: DataTypes.FLOAT
  },
  enabled: {
    type: DataTypes.BOOLEAN
  }
})
db.material.belongsToMany(db.warehouse, { through: materialsWarehouse })

const categoriesWarehouse = sequelize.define("categoriesWarehouse", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  }
})

const materialCategories = sequelize.define("materialCategories", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  }
})
db.mCategory.belongsToMany(db.warehouse, { through: categoriesWarehouse })
db.material.belongsToMany(db.mCategory, { through: materialCategories })

db.sequelize.sync({ force: true }).then(() => {
  console.log("yes re-sync done!")
})

module.exports = db
