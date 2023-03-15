import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import bcrypt from "bcrypt";

function hashValor(value) {
  const saltRounds = 10;
  const hash = bcrypt.hashSync(value, saltRounds);
  return hash;
}

export const User = sequelize.define(
  "users",
  {
    username: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        const hashedValue = hashValor(value);
        this.setDataValue("password", hashedValue);
      },
    },
  },
  {
    timestamps: false,
  }
);
