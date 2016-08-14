# Overview
null-log is a null logging module.  It provides a means by which to disable logging via the Null Object pattern.

# Installation
npm install null-log

# Usage Example
```javascript
const NullLogger = require('null-log');

class Foo {
  constructor(logger) {
    this.logger = logger || new NullLogger();
  }

  bar() {
    this.logger.info('Informational message');
  }
}
```

# API
```javascript
Logger.info(..)
Logger.log(..)
Logger.debug(..)
Logger.warn(..)
Logger.error(..)
Logger.fatal(..)
```
