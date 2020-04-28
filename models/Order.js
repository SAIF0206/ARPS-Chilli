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
    ChilliCompanyId: {
      type: Sequelize.INTEGER,
    },
    CustomerId: {
      type: Sequelize.UUID,
    },
    OrderDate: {
      type: Sequelize.DATE,
    },
    InvoiceDate: {
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
      // Made Date as STRING Easy to use
      type: Sequelize.STRING,
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
    DriverId: {
      type: Sequelize.INTEGER,
    },
    DriverName: {
      type: Sequelize.DATE,
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
    JobNumber: {
      type: Sequelize.INTEGER,
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
    NOrderId: {
      type: Sequelize.INTEGER,
    },
    UpdatedDateTime: {
      type: Sequelize.DATE,
    },
    ReadyTime: {
      type: Sequelize.STRING,
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
    AddOnsPrice: {
      type: Sequelize.DECIMAL,
    },
    CouponCode: {
      type: Sequelize.STRING,
    },
    Volume: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
