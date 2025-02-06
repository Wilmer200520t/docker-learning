import cron from "node-cron";
import chalk from "chalk";

cron.schedule("*/5 * * * * *", (date) => {
  console.log(
    `${chalk.yellow(`[${date.toUTCString()}]`)} ${chalk.white(
      `Running a task every 5 seconds.`
    )}`
  );
});
