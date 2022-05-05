import logger from 'node-color-log';

/*
 * Log's Debug message to console
 * @param {any} message

 */
export function LogDebug(message: any): void {
  logger.debug(`${message}` + '\n');
}

/*
 * Log's Error message to console
 * @param {any} message
 * @param {Error} error
 */
export function LogError(message: any, error: Error): void {
  logger.error(`${message}` + '\n' + ` └─ ${error.message}`);
}

/*
 * Log's Info message to console
 * @param {any} message
 */
export function LogInfo(message: any): void {
  logger.info(`${message}` + '\n');
}

/*
 * Log's Warning message to console
 * @param {any} message
 * @param {Error?} error
 */
export function LogWarn(message: any, error?: Error): void {
  if (error !== undefined) {
    logger.warn(`${message}` + '\n' + ` └─ ${error.message}`);
  } else {
    logger.warn(`${message}` + '\n');
  }
}
