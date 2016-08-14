'use strict';

/**
 * A null logger
 * The Logger class provides a means by which to disable logging via the
 * Null Object pattern.
 */
class Logger {

  /**
   * Does nothing
   * @param {...*} args - Any logging arguments
   */
  debug() {
  }

  /**
   * Does nothing
   * @param {...*} args - Any logging arguments
   */
  error() {
  }

  /**
   * Does nothing
   * @param {...*} args - Any logging arguments
   */
  fatal() {
  }

  /**
   * Does nothing
   * @param {...*} args - Any logging arguments
   */
  info() {
  }

  /**
   * Does nothing
   * @param {...*} args - Any logging arguments
   */
  log() {
  }

  /**
   * Does nothing
   * @param {...*} args - Any logging arguments
   */
  warn() {
  }
}

module.exports = Logger;

