import winston from "winston";

const filePath = "./reports/logs/combined.log";

const consoleFormat = winston.format.printf(({ level, message, timestamp }) => {
  const logLevel = winston.format
    .colorize()
    .colorize(level, `${level.toUpperCase()}`);
  return `${timestamp} [${logLevel}]: ${message}`;
});

const fileFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

const formedLogger: winston.Logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: process.env.LOG_LEVEL || "info",
      handleExceptions: true,
      format: winston.format.combine(winston.format.timestamp(), consoleFormat),
    }),
    new winston.transports.File({
      filename: filePath,
      level: "info",
      format: winston.format.combine(winston.format.timestamp(), fileFormat),
    }),
    new winston.transports.File({
      filename: filePath,
      level: "error",
      format: winston.format.combine(winston.format.timestamp(), fileFormat),
    }),
  ],
});

formedLogger.on("error", (error) => {
  console.log("Unknown error in Winston logger");
  console.log(error.message);
});

export const logger = {
  log: (message: string) => {
    formedLogger.info(`${message}`);
  },
  error: (message: string) => {
    formedLogger.error(`${message}`);
  },
  warn: (message: string) => {
    formedLogger.warn(`${message}`);
  },
  info: (message: string) => {
    formedLogger.info(`${message}`);
  },
  debug: (message: string) => {
    formedLogger.debug(`${message}`);
  },
};
