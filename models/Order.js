const Sequelize = require("sequelize");
const db = require("../config/Database");

module.exports = db.define(
  "order",
  {
    Id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    CustomerId: {
      type: Sequelize.UUID,
    },
    OrderDate: {
      type: Sequelize.DATE,
    },
    InvoiceId: {
      type: Sequelize.INTEGER,
    },
    Po: {
      type: Sequelize.STRING,
    },
    Status: {
      type: Sequelize.STRING,
    },
    FunctionDate: {
      type: Sequelize.DATE,
    },
    DeliveryTime: {
      type: Sequelize.DECIMAL,
    },
    EventType: {
      type: Sequelize.STRING,
    },
    ContactPerson: {
      type: Sequelize.STRING,
    },
    ContactNumber: {
      type: Sequelize.STRING,
    },
    Block: {
      type: Sequelize.STRING,
    },
    Street: {
      type: Sequelize.STRING,
    },
    Level: {
      type: Sequelize.STRING,
    },
    Unit: {
      type: Sequelize.STRING,
    },
    Building: {
      type: Sequelize.STRING,
    },
    PostalCode: {
      type: Sequelize.STRING,
    },
    ModificationDate: {
      type: Sequelize.DATE,
    },
    DeliveryNote: {
      type: Sequelize.STRING,
    },
    MenuId: {
      type: Sequelize.INTEGER,
    },
    MenuName: {
      type: Sequelize.STRING,
    },
    MenuRate: {
      type: Sequelize.DECIMAL,
    },
    MenuPax: {
      type: Sequelize.INTEGER,
    },
    MenuSection: {
      type: Sequelize.INTEGER,
    },
    DeliveryRate: {
      type: Sequelize.DECIMAL,
    },
    StaffNo: {
      type: Sequelize.INTEGER,
    },
    StaffPrice: {
      type: Sequelize.DECIMAL,
    },
    Remark: {
      type: Sequelize.STRING,
    },
    PackedTime: {
      type: Sequelize.DATE,
    },
    DeliveryRateInternal: {
      type: Sequelize.DECIMAL,
    },
    LastMinuteChange: {
      type: Sequelize.TINYINT,
    },
    AlternateContactPerson: {
      type: Sequelize.STRING,
    },
    AlternateContactNumber: {
      type: Sequelize.STRING,
    },
    BillingId: {
      type: Sequelize.INTEGER,
    },
    SetupDetails: {
      type: Sequelize.STRING,
    },
    UpdatedDateTime: {
      type: Sequelize.DATE,
    },
    ReadyTime: {
      type: Sequelize.STRING,
    },
    NodeOrderId: {
      type: Sequelize.INTEGER,
    },
    PaymentMethodId: {
      type: Sequelize.STRING,
    },
    EventFloor: {
      type: Sequelize.STRING,
    },
    AdditionalSurcharge: {
      type: Sequelize.DECIMAL,
    },
    SubTotal: {
      type: Sequelize.DECIMAL,
    },
    DiscountPrice: {
      type: Sequelize.DECIMAL,
    },
    taxPrice: {
      type: Sequelize.DECIMAL,
    },
    GrandTotal: {
      type: Sequelize.DECIMAL,
    },
    SpecialInstructions: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
