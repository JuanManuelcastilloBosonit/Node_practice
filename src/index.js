import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/users.js";
import "./models/machines.js";
import "./models/sensors.js";

async function main() {
  try {
    await sequelize.sync({ force: true });
    console.log("Connection has been established successfully");
    app.listen(3000);
  } catch (error) {
    console.error("unable to connect to the database: ", error);
  }
}

main();
