const Logger = require('../logger');
const test = require('tape-catch');

test('constructor should not throw', function(t) {
  t.plan(1);
  const logger = new Logger();
  t.pass('instantiated logger');
});

test('debug should not throw', function(t) {
  t.plan(1);
  const logger = new Logger();
  logger.debug('foo','bar');
  t.pass('function did not throw');
});

test('error should not throw', function(t) {
  t.plan(1);
  const logger = new Logger();
  logger.error('foo','bar');
  t.pass('function did not throw');
});

test('fatal should not throw', function(t) {
  t.plan(1);
  const logger = new Logger();
  logger.fatal('foo','bar');
  t.pass('function did not throw');
});

test('info should not throw', function(t) {
  t.plan(1);
  const logger = new Logger();
  logger.info('foo','bar');
  t.pass('function did not throw');
});

test('log should not throw', function(t) {
  t.plan(1);
  const logger = new Logger();
  logger.log('foo','bar');
  t.pass('function did not throw');
});

test('warn should not throw', function(t) {
  t.plan(1);
  const logger = new Logger();
  logger.warn('foo','bar');
  t.pass('function did not throw');
});
