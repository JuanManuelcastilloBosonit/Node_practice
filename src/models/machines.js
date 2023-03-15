import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Machine = sequelize.define(
  "machine",
  {
    ref: {
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
        throw new Error("Do not try to set the `deregistered` value!");
      },
    },
    heads: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    status: {
      type: DataTypes.ENUM("stopped", "working", "paused", "maintenance"),
      allowNull: false,
    },
    powerKw: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    emailAlerts: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
