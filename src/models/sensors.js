import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Sensors = sequelize.define(
  "sensor",
  {
    code: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.ENUM("temperature", "pressure", "moisture"),
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
    },
    deregistered: {
      type: DataTypes.VIRTUAL,
      get() {
        const endDate = this.getDataValue(endDate);
        return endDate !== null ? true : false;
      },
      set(value) {
        throw new Error("Do not try to set the `deregistered` value!!");
      },
    },
  },
  {
    timestamps: false,
  }
);
