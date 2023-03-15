import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "NodePractice",
  "postgres",
  "mysecretpassword",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
