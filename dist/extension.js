var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/@grpc/grpc-js/build/src/constants.js
var require_constants = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = exports2.DEFAULT_MAX_SEND_MESSAGE_LENGTH = exports2.Propagate = exports2.LogVerbosity = exports2.Status = void 0;
    var Status;
    (function(Status2) {
      Status2[Status2["OK"] = 0] = "OK";
      Status2[Status2["CANCELLED"] = 1] = "CANCELLED";
      Status2[Status2["UNKNOWN"] = 2] = "UNKNOWN";
      Status2[Status2["INVALID_ARGUMENT"] = 3] = "INVALID_ARGUMENT";
      Status2[Status2["DEADLINE_EXCEEDED"] = 4] = "DEADLINE_EXCEEDED";
      Status2[Status2["NOT_FOUND"] = 5] = "NOT_FOUND";
      Status2[Status2["ALREADY_EXISTS"] = 6] = "ALREADY_EXISTS";
      Status2[Status2["PERMISSION_DENIED"] = 7] = "PERMISSION_DENIED";
      Status2[Status2["RESOURCE_EXHAUSTED"] = 8] = "RESOURCE_EXHAUSTED";
      Status2[Status2["FAILED_PRECONDITION"] = 9] = "FAILED_PRECONDITION";
      Status2[Status2["ABORTED"] = 10] = "ABORTED";
      Status2[Status2["OUT_OF_RANGE"] = 11] = "OUT_OF_RANGE";
      Status2[Status2["UNIMPLEMENTED"] = 12] = "UNIMPLEMENTED";
      Status2[Status2["INTERNAL"] = 13] = "INTERNAL";
      Status2[Status2["UNAVAILABLE"] = 14] = "UNAVAILABLE";
      Status2[Status2["DATA_LOSS"] = 15] = "DATA_LOSS";
      Status2[Status2["UNAUTHENTICATED"] = 16] = "UNAUTHENTICATED";
    })(Status = exports2.Status || (exports2.Status = {}));
    var LogVerbosity;
    (function(LogVerbosity2) {
      LogVerbosity2[LogVerbosity2["DEBUG"] = 0] = "DEBUG";
      LogVerbosity2[LogVerbosity2["INFO"] = 1] = "INFO";
      LogVerbosity2[LogVerbosity2["ERROR"] = 2] = "ERROR";
      LogVerbosity2[LogVerbosity2["NONE"] = 3] = "NONE";
    })(LogVerbosity = exports2.LogVerbosity || (exports2.LogVerbosity = {}));
    var Propagate;
    (function(Propagate2) {
      Propagate2[Propagate2["DEADLINE"] = 1] = "DEADLINE";
      Propagate2[Propagate2["CENSUS_STATS_CONTEXT"] = 2] = "CENSUS_STATS_CONTEXT";
      Propagate2[Propagate2["CENSUS_TRACING_CONTEXT"] = 4] = "CENSUS_TRACING_CONTEXT";
      Propagate2[Propagate2["CANCELLATION"] = 8] = "CANCELLATION";
      Propagate2[Propagate2["DEFAULTS"] = 65535] = "DEFAULTS";
    })(Propagate = exports2.Propagate || (exports2.Propagate = {}));
    exports2.DEFAULT_MAX_SEND_MESSAGE_LENGTH = -1;
    exports2.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = 4 * 1024 * 1024;
  }
});

// node_modules/@grpc/grpc-js/build/src/logging.js
var require_logging = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/logging.js"(exports2) {
    "use strict";
    var _a;
    var _b;
    var _c;
    var _d;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.trace = exports2.log = exports2.setLoggerVerbosity = exports2.setLogger = exports2.getLogger = void 0;
    var constants_1 = require_constants();
    var _logger = console;
    var _logVerbosity = constants_1.LogVerbosity.ERROR;
    var verbosityString = (_b = (_a = process.env.GRPC_NODE_VERBOSITY) !== null && _a !== void 0 ? _a : process.env.GRPC_VERBOSITY) !== null && _b !== void 0 ? _b : "";
    switch (verbosityString.toUpperCase()) {
      case "DEBUG":
        _logVerbosity = constants_1.LogVerbosity.DEBUG;
        break;
      case "INFO":
        _logVerbosity = constants_1.LogVerbosity.INFO;
        break;
      case "ERROR":
        _logVerbosity = constants_1.LogVerbosity.ERROR;
        break;
      case "NONE":
        _logVerbosity = constants_1.LogVerbosity.NONE;
        break;
      default:
    }
    exports2.getLogger = () => {
      return _logger;
    };
    exports2.setLogger = (logger) => {
      _logger = logger;
    };
    exports2.setLoggerVerbosity = (verbosity) => {
      _logVerbosity = verbosity;
    };
    exports2.log = (severity, ...args) => {
      if (severity >= _logVerbosity && typeof _logger.error === "function") {
        _logger.error(...args);
      }
    };
    var tracersString = (_d = (_c = process.env.GRPC_NODE_TRACE) !== null && _c !== void 0 ? _c : process.env.GRPC_TRACE) !== null && _d !== void 0 ? _d : "";
    var enabledTracers = new Set();
    var disabledTracers = new Set();
    for (const tracerName of tracersString.split(",")) {
      if (tracerName.startsWith("-")) {
        disabledTracers.add(tracerName.substring(1));
      } else {
        enabledTracers.add(tracerName);
      }
    }
    var allEnabled = enabledTracers.has("all");
    function trace(severity, tracer, text) {
      if (!disabledTracers.has(tracer) && (allEnabled || enabledTracers.has(tracer))) {
        exports2.log(severity, new Date().toISOString() + " | " + tracer + " | " + text);
      }
    }
    exports2.trace = trace;
  }
});

// node_modules/@grpc/grpc-js/build/src/metadata.js
var require_metadata = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/metadata.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Metadata = void 0;
    var logging_1 = require_logging();
    var constants_1 = require_constants();
    var LEGAL_KEY_REGEX = /^[0-9a-z_.-]+$/;
    var LEGAL_NON_BINARY_VALUE_REGEX = /^[ -~]*$/;
    function isLegalKey(key) {
      return LEGAL_KEY_REGEX.test(key);
    }
    function isLegalNonBinaryValue(value) {
      return LEGAL_NON_BINARY_VALUE_REGEX.test(value);
    }
    function isBinaryKey(key) {
      return key.endsWith("-bin");
    }
    function isCustomMetadata(key) {
      return !key.startsWith("grpc-");
    }
    function normalizeKey(key) {
      return key.toLowerCase();
    }
    function validate(key, value) {
      if (!isLegalKey(key)) {
        throw new Error('Metadata key "' + key + '" contains illegal characters');
      }
      if (value !== null && value !== void 0) {
        if (isBinaryKey(key)) {
          if (!(value instanceof Buffer)) {
            throw new Error("keys that end with '-bin' must have Buffer values");
          }
        } else {
          if (value instanceof Buffer) {
            throw new Error("keys that don't end with '-bin' must have String values");
          }
          if (!isLegalNonBinaryValue(value)) {
            throw new Error('Metadata string value "' + value + '" contains illegal characters');
          }
        }
      }
    }
    var Metadata = class {
      constructor(options) {
        this.internalRepr = new Map();
        if (options === void 0) {
          this.options = {};
        } else {
          this.options = options;
        }
      }
      set(key, value) {
        key = normalizeKey(key);
        validate(key, value);
        this.internalRepr.set(key, [value]);
      }
      add(key, value) {
        key = normalizeKey(key);
        validate(key, value);
        const existingValue = this.internalRepr.get(key);
        if (existingValue === void 0) {
          this.internalRepr.set(key, [value]);
        } else {
          existingValue.push(value);
        }
      }
      remove(key) {
        key = normalizeKey(key);
        validate(key);
        this.internalRepr.delete(key);
      }
      get(key) {
        key = normalizeKey(key);
        validate(key);
        return this.internalRepr.get(key) || [];
      }
      getMap() {
        const result = {};
        this.internalRepr.forEach((values, key) => {
          if (values.length > 0) {
            const v = values[0];
            result[key] = v instanceof Buffer ? v.slice() : v;
          }
        });
        return result;
      }
      clone() {
        const newMetadata = new Metadata(this.options);
        const newInternalRepr = newMetadata.internalRepr;
        this.internalRepr.forEach((value, key) => {
          const clonedValue = value.map((v) => {
            if (v instanceof Buffer) {
              return Buffer.from(v);
            } else {
              return v;
            }
          });
          newInternalRepr.set(key, clonedValue);
        });
        return newMetadata;
      }
      merge(other) {
        other.internalRepr.forEach((values, key) => {
          const mergedValue = (this.internalRepr.get(key) || []).concat(values);
          this.internalRepr.set(key, mergedValue);
        });
      }
      setOptions(options) {
        this.options = options;
      }
      getOptions() {
        return this.options;
      }
      toHttp2Headers() {
        const result = {};
        this.internalRepr.forEach((values, key) => {
          result[key] = values.map((value) => {
            if (value instanceof Buffer) {
              return value.toString("base64");
            } else {
              return value;
            }
          });
        });
        return result;
      }
      _getCoreRepresentation() {
        return this.internalRepr;
      }
      static fromHttp2Headers(headers) {
        const result = new Metadata();
        Object.keys(headers).forEach((key) => {
          if (key.charAt(0) === ":") {
            return;
          }
          const values = headers[key];
          try {
            if (isBinaryKey(key)) {
              if (Array.isArray(values)) {
                values.forEach((value) => {
                  result.add(key, Buffer.from(value, "base64"));
                });
              } else if (values !== void 0) {
                if (isCustomMetadata(key)) {
                  values.split(",").forEach((v) => {
                    result.add(key, Buffer.from(v.trim(), "base64"));
                  });
                } else {
                  result.add(key, Buffer.from(values, "base64"));
                }
              }
            } else {
              if (Array.isArray(values)) {
                values.forEach((value) => {
                  result.add(key, value);
                });
              } else if (values !== void 0) {
                result.add(key, values);
              }
            }
          } catch (error) {
            const message = `Failed to add metadata entry ${key}: ${values}. ${error.message}. For more information see https://github.com/grpc/grpc-node/issues/1173`;
            logging_1.log(constants_1.LogVerbosity.ERROR, message);
          }
        });
        return result;
      }
    };
    exports2.Metadata = Metadata;
  }
});

// node_modules/@grpc/grpc-js/build/src/call-credentials.js
var require_call_credentials = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/call-credentials.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CallCredentials = void 0;
    var metadata_1 = require_metadata();
    function isCurrentOauth2Client(client) {
      return "getRequestHeaders" in client && typeof client.getRequestHeaders === "function";
    }
    var CallCredentials = class {
      static createFromMetadataGenerator(metadataGenerator) {
        return new SingleCallCredentials(metadataGenerator);
      }
      static createFromGoogleCredential(googleCredentials) {
        return CallCredentials.createFromMetadataGenerator((options, callback) => {
          let getHeaders;
          if (isCurrentOauth2Client(googleCredentials)) {
            getHeaders = googleCredentials.getRequestHeaders(options.service_url);
          } else {
            getHeaders = new Promise((resolve, reject) => {
              googleCredentials.getRequestMetadata(options.service_url, (err, headers) => {
                if (err) {
                  reject(err);
                  return;
                }
                resolve(headers);
              });
            });
          }
          getHeaders.then((headers) => {
            const metadata = new metadata_1.Metadata();
            for (const key of Object.keys(headers)) {
              metadata.add(key, headers[key]);
            }
            callback(null, metadata);
          }, (err) => {
            callback(err);
          });
        });
      }
      static createEmpty() {
        return new EmptyCallCredentials();
      }
    };
    exports2.CallCredentials = CallCredentials;
    var ComposedCallCredentials = class extends CallCredentials {
      constructor(creds) {
        super();
        this.creds = creds;
      }
      async generateMetadata(options) {
        const base = new metadata_1.Metadata();
        const generated = await Promise.all(this.creds.map((cred) => cred.generateMetadata(options)));
        for (const gen of generated) {
          base.merge(gen);
        }
        return base;
      }
      compose(other) {
        return new ComposedCallCredentials(this.creds.concat([other]));
      }
      _equals(other) {
        if (this === other) {
          return true;
        }
        if (other instanceof ComposedCallCredentials) {
          return this.creds.every((value, index) => value._equals(other.creds[index]));
        } else {
          return false;
        }
      }
    };
    var SingleCallCredentials = class extends CallCredentials {
      constructor(metadataGenerator) {
        super();
        this.metadataGenerator = metadataGenerator;
      }
      generateMetadata(options) {
        return new Promise((resolve, reject) => {
          this.metadataGenerator(options, (err, metadata) => {
            if (metadata !== void 0) {
              resolve(metadata);
            } else {
              reject(err);
            }
          });
        });
      }
      compose(other) {
        return new ComposedCallCredentials([this, other]);
      }
      _equals(other) {
        if (this === other) {
          return true;
        }
        if (other instanceof SingleCallCredentials) {
          return this.metadataGenerator === other.metadataGenerator;
        } else {
          return false;
        }
      }
    };
    var EmptyCallCredentials = class extends CallCredentials {
      generateMetadata(options) {
        return Promise.resolve(new metadata_1.Metadata());
      }
      compose(other) {
        return other;
      }
      _equals(other) {
        return other instanceof EmptyCallCredentials;
      }
    };
  }
});

// node_modules/@grpc/grpc-js/build/src/filter-stack.js
var require_filter_stack = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/filter-stack.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FilterStackFactory = exports2.FilterStack = void 0;
    var FilterStack = class {
      constructor(filters) {
        this.filters = filters;
      }
      sendMetadata(metadata) {
        let result = metadata;
        for (let i = 0; i < this.filters.length; i++) {
          result = this.filters[i].sendMetadata(result);
        }
        return result;
      }
      receiveMetadata(metadata) {
        let result = metadata;
        for (let i = this.filters.length - 1; i >= 0; i--) {
          result = this.filters[i].receiveMetadata(result);
        }
        return result;
      }
      sendMessage(message) {
        let result = message;
        for (let i = 0; i < this.filters.length; i++) {
          result = this.filters[i].sendMessage(result);
        }
        return result;
      }
      receiveMessage(message) {
        let result = message;
        for (let i = this.filters.length - 1; i >= 0; i--) {
          result = this.filters[i].receiveMessage(result);
        }
        return result;
      }
      receiveTrailers(status) {
        let result = status;
        for (let i = this.filters.length - 1; i >= 0; i--) {
          result = this.filters[i].receiveTrailers(result);
        }
        return result;
      }
    };
    exports2.FilterStack = FilterStack;
    var FilterStackFactory = class {
      constructor(factories) {
        this.factories = factories;
      }
      createFilter(callStream) {
        return new FilterStack(this.factories.map((factory) => factory.createFilter(callStream)));
      }
    };
    exports2.FilterStackFactory = FilterStackFactory;
  }
});

// node_modules/@grpc/grpc-js/build/src/stream-decoder.js
var require_stream_decoder = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/stream-decoder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StreamDecoder = void 0;
    var ReadState;
    (function(ReadState2) {
      ReadState2[ReadState2["NO_DATA"] = 0] = "NO_DATA";
      ReadState2[ReadState2["READING_SIZE"] = 1] = "READING_SIZE";
      ReadState2[ReadState2["READING_MESSAGE"] = 2] = "READING_MESSAGE";
    })(ReadState || (ReadState = {}));
    var StreamDecoder = class {
      constructor() {
        this.readState = ReadState.NO_DATA;
        this.readCompressFlag = Buffer.alloc(1);
        this.readPartialSize = Buffer.alloc(4);
        this.readSizeRemaining = 4;
        this.readMessageSize = 0;
        this.readPartialMessage = [];
        this.readMessageRemaining = 0;
      }
      write(data) {
        let readHead = 0;
        let toRead;
        const result = [];
        while (readHead < data.length) {
          switch (this.readState) {
            case ReadState.NO_DATA:
              this.readCompressFlag = data.slice(readHead, readHead + 1);
              readHead += 1;
              this.readState = ReadState.READING_SIZE;
              this.readPartialSize.fill(0);
              this.readSizeRemaining = 4;
              this.readMessageSize = 0;
              this.readMessageRemaining = 0;
              this.readPartialMessage = [];
              break;
            case ReadState.READING_SIZE:
              toRead = Math.min(data.length - readHead, this.readSizeRemaining);
              data.copy(this.readPartialSize, 4 - this.readSizeRemaining, readHead, readHead + toRead);
              this.readSizeRemaining -= toRead;
              readHead += toRead;
              if (this.readSizeRemaining === 0) {
                this.readMessageSize = this.readPartialSize.readUInt32BE(0);
                this.readMessageRemaining = this.readMessageSize;
                if (this.readMessageRemaining > 0) {
                  this.readState = ReadState.READING_MESSAGE;
                } else {
                  const message = Buffer.concat([this.readCompressFlag, this.readPartialSize], 5);
                  this.readState = ReadState.NO_DATA;
                  result.push(message);
                }
              }
              break;
            case ReadState.READING_MESSAGE:
              toRead = Math.min(data.length - readHead, this.readMessageRemaining);
              this.readPartialMessage.push(data.slice(readHead, readHead + toRead));
              this.readMessageRemaining -= toRead;
              readHead += toRead;
              if (this.readMessageRemaining === 0) {
                const framedMessageBuffers = [
                  this.readCompressFlag,
                  this.readPartialSize
                ].concat(this.readPartialMessage);
                const framedMessage = Buffer.concat(framedMessageBuffers, this.readMessageSize + 5);
                this.readState = ReadState.NO_DATA;
                result.push(framedMessage);
              }
              break;
            default:
              throw new Error("Unexpected read state");
          }
        }
        return result;
      }
    };
    exports2.StreamDecoder = StreamDecoder;
  }
});

// node_modules/@grpc/grpc-js/build/src/call-stream.js
var require_call_stream = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/call-stream.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Http2CallStream = exports2.InterceptingListenerImpl = exports2.isInterceptingListener = void 0;
    var http2 = require("http2");
    var os = require("os");
    var constants_1 = require_constants();
    var filter_stack_1 = require_filter_stack();
    var metadata_1 = require_metadata();
    var stream_decoder_1 = require_stream_decoder();
    var logging = require_logging();
    var constants_2 = require_constants();
    var TRACER_NAME = "call_stream";
    var { HTTP2_HEADER_STATUS, HTTP2_HEADER_CONTENT_TYPE, NGHTTP2_CANCEL } = http2.constants;
    function getSystemErrorName(errno) {
      for (const [name, num] of Object.entries(os.constants.errno)) {
        if (num === errno) {
          return name;
        }
      }
      return "Unknown system error " + errno;
    }
    function isInterceptingListener(listener) {
      return listener.onReceiveMetadata !== void 0 && listener.onReceiveMetadata.length === 1;
    }
    exports2.isInterceptingListener = isInterceptingListener;
    var InterceptingListenerImpl = class {
      constructor(listener, nextListener) {
        this.listener = listener;
        this.nextListener = nextListener;
        this.processingMessage = false;
        this.pendingStatus = null;
      }
      onReceiveMetadata(metadata) {
        this.listener.onReceiveMetadata(metadata, (metadata2) => {
          this.nextListener.onReceiveMetadata(metadata2);
        });
      }
      onReceiveMessage(message) {
        this.processingMessage = true;
        this.listener.onReceiveMessage(message, (msg) => {
          this.processingMessage = false;
          this.nextListener.onReceiveMessage(msg);
          if (this.pendingStatus) {
            this.nextListener.onReceiveStatus(this.pendingStatus);
          }
        });
      }
      onReceiveStatus(status) {
        this.listener.onReceiveStatus(status, (processedStatus) => {
          if (this.processingMessage) {
            this.pendingStatus = processedStatus;
          } else {
            this.nextListener.onReceiveStatus(processedStatus);
          }
        });
      }
    };
    exports2.InterceptingListenerImpl = InterceptingListenerImpl;
    var Http2CallStream = class {
      constructor(methodName, channel, options, filterStackFactory, channelCallCredentials, callNumber) {
        this.methodName = methodName;
        this.channel = channel;
        this.options = options;
        this.channelCallCredentials = channelCallCredentials;
        this.callNumber = callNumber;
        this.http2Stream = null;
        this.pendingRead = false;
        this.isWriteFilterPending = false;
        this.pendingWrite = null;
        this.pendingWriteCallback = null;
        this.writesClosed = false;
        this.decoder = new stream_decoder_1.StreamDecoder();
        this.isReadFilterPending = false;
        this.canPush = false;
        this.readsClosed = false;
        this.statusOutput = false;
        this.unpushedReadMessages = [];
        this.unfilteredReadMessages = [];
        this.mappedStatusCode = constants_1.Status.UNKNOWN;
        this.finalStatus = null;
        this.subchannel = null;
        this.listener = null;
        this.internalError = null;
        this.filterStack = filterStackFactory.createFilter(this);
        this.credentials = channelCallCredentials;
        this.disconnectListener = () => {
          this.endCall({
            code: constants_1.Status.UNAVAILABLE,
            details: "Connection dropped",
            metadata: new metadata_1.Metadata()
          });
        };
        if (this.options.parentCall && this.options.flags & constants_1.Propagate.CANCELLATION) {
          this.options.parentCall.on("cancelled", () => {
            this.cancelWithStatus(constants_1.Status.CANCELLED, "Cancelled by parent call");
          });
        }
      }
      outputStatus() {
        if (!this.statusOutput) {
          this.statusOutput = true;
          const filteredStatus = this.filterStack.receiveTrailers(this.finalStatus);
          process.nextTick(() => {
            var _a;
            (_a = this.listener) === null || _a === void 0 ? void 0 : _a.onReceiveStatus(filteredStatus);
          });
          if (this.subchannel) {
            this.subchannel.callUnref();
            this.subchannel.removeDisconnectListener(this.disconnectListener);
          }
        }
      }
      trace(text) {
        logging.trace(constants_2.LogVerbosity.DEBUG, TRACER_NAME, "[" + this.callNumber + "] " + text);
      }
      endCall(status) {
        if (this.finalStatus === null || this.finalStatus.code === constants_1.Status.OK) {
          this.trace("ended with status: code=" + status.code + ' details="' + status.details + '"');
          this.finalStatus = status;
          this.maybeOutputStatus();
        }
        this.destroyHttp2Stream();
      }
      maybeOutputStatus() {
        if (this.finalStatus !== null) {
          if (this.finalStatus.code !== constants_1.Status.OK || this.readsClosed && this.unpushedReadMessages.length === 0 && this.unfilteredReadMessages.length === 0 && !this.isReadFilterPending) {
            this.outputStatus();
          }
        }
      }
      push(message) {
        this.trace("pushing to reader message of length " + (message instanceof Buffer ? message.length : null));
        this.canPush = false;
        process.nextTick(() => {
          var _a;
          if (this.statusOutput) {
            return;
          }
          (_a = this.listener) === null || _a === void 0 ? void 0 : _a.onReceiveMessage(message);
          this.maybeOutputStatus();
        });
      }
      handleFilterError(error) {
        this.cancelWithStatus(constants_1.Status.INTERNAL, error.message);
      }
      handleFilteredRead(message) {
        if (this.finalStatus !== null && this.finalStatus.code !== constants_1.Status.OK) {
          this.maybeOutputStatus();
          return;
        }
        this.isReadFilterPending = false;
        if (this.canPush) {
          this.http2Stream.pause();
          this.push(message);
        } else {
          this.trace("unpushedReadMessages.push message of length " + message.length);
          this.unpushedReadMessages.push(message);
        }
        if (this.unfilteredReadMessages.length > 0) {
          const nextMessage = this.unfilteredReadMessages.shift();
          this.filterReceivedMessage(nextMessage);
        }
      }
      filterReceivedMessage(framedMessage) {
        if (this.finalStatus !== null && this.finalStatus.code !== constants_1.Status.OK) {
          this.maybeOutputStatus();
          return;
        }
        this.trace("filterReceivedMessage of length " + framedMessage.length);
        this.isReadFilterPending = true;
        this.filterStack.receiveMessage(Promise.resolve(framedMessage)).then(this.handleFilteredRead.bind(this), this.handleFilterError.bind(this));
      }
      tryPush(messageBytes) {
        if (this.isReadFilterPending) {
          this.trace("unfilteredReadMessages.push message of length " + (messageBytes && messageBytes.length));
          this.unfilteredReadMessages.push(messageBytes);
        } else {
          this.filterReceivedMessage(messageBytes);
        }
      }
      handleTrailers(headers) {
        let headersString = "";
        for (const header of Object.keys(headers)) {
          headersString += "		" + header + ": " + headers[header] + "\n";
        }
        this.trace("Received server trailers:\n" + headersString);
        let metadata;
        try {
          metadata = metadata_1.Metadata.fromHttp2Headers(headers);
        } catch (e) {
          metadata = new metadata_1.Metadata();
        }
        const metadataMap = metadata.getMap();
        let code = this.mappedStatusCode;
        if (code === constants_1.Status.UNKNOWN && typeof metadataMap["grpc-status"] === "string") {
          const receivedStatus = Number(metadataMap["grpc-status"]);
          if (receivedStatus in constants_1.Status) {
            code = receivedStatus;
            this.trace("received status code " + receivedStatus + " from server");
          }
          metadata.remove("grpc-status");
        }
        let details = "";
        if (typeof metadataMap["grpc-message"] === "string") {
          details = decodeURI(metadataMap["grpc-message"]);
          metadata.remove("grpc-message");
          this.trace('received status details string "' + details + '" from server');
        }
        const status = { code, details, metadata };
        this.endCall(status);
      }
      attachHttp2Stream(stream, subchannel, extraFilterFactory) {
        if (extraFilterFactory !== void 0) {
          this.filterStack = new filter_stack_1.FilterStack([
            this.filterStack,
            extraFilterFactory.createFilter(this)
          ]);
        }
        if (this.finalStatus !== null) {
          stream.close(NGHTTP2_CANCEL);
        } else {
          this.trace("attachHttp2Stream from subchannel " + subchannel.getAddress());
          this.http2Stream = stream;
          this.subchannel = subchannel;
          subchannel.addDisconnectListener(this.disconnectListener);
          subchannel.callRef();
          stream.on("response", (headers, flags) => {
            var _a;
            let headersString = "";
            for (const header of Object.keys(headers)) {
              headersString += "		" + header + ": " + headers[header] + "\n";
            }
            this.trace("Received server headers:\n" + headersString);
            switch (headers[":status"]) {
              case 400:
                this.mappedStatusCode = constants_1.Status.INTERNAL;
                break;
              case 401:
                this.mappedStatusCode = constants_1.Status.UNAUTHENTICATED;
                break;
              case 403:
                this.mappedStatusCode = constants_1.Status.PERMISSION_DENIED;
                break;
              case 404:
                this.mappedStatusCode = constants_1.Status.UNIMPLEMENTED;
                break;
              case 429:
              case 502:
              case 503:
              case 504:
                this.mappedStatusCode = constants_1.Status.UNAVAILABLE;
                break;
              default:
                this.mappedStatusCode = constants_1.Status.UNKNOWN;
            }
            if (flags & http2.constants.NGHTTP2_FLAG_END_STREAM) {
              this.handleTrailers(headers);
            } else {
              let metadata;
              try {
                metadata = metadata_1.Metadata.fromHttp2Headers(headers);
              } catch (error) {
                this.endCall({
                  code: constants_1.Status.UNKNOWN,
                  details: error.message,
                  metadata: new metadata_1.Metadata()
                });
                return;
              }
              try {
                const finalMetadata = this.filterStack.receiveMetadata(metadata);
                (_a = this.listener) === null || _a === void 0 ? void 0 : _a.onReceiveMetadata(finalMetadata);
              } catch (error) {
                this.endCall({
                  code: constants_1.Status.UNKNOWN,
                  details: error.message,
                  metadata: new metadata_1.Metadata()
                });
              }
            }
          });
          stream.on("trailers", this.handleTrailers.bind(this));
          stream.on("data", (data) => {
            this.trace("receive HTTP/2 data frame of length " + data.length);
            const messages = this.decoder.write(data);
            for (const message of messages) {
              this.trace("parsed message of length " + message.length);
              this.tryPush(message);
            }
          });
          stream.on("end", () => {
            this.readsClosed = true;
            this.maybeOutputStatus();
          });
          stream.on("close", () => {
            process.nextTick(() => {
              var _a;
              this.trace("HTTP/2 stream closed with code " + stream.rstCode);
              if (((_a = this.finalStatus) === null || _a === void 0 ? void 0 : _a.code) === constants_1.Status.OK) {
                return;
              }
              let code;
              let details = "";
              switch (stream.rstCode) {
                case http2.constants.NGHTTP2_NO_ERROR:
                  if (this.finalStatus !== null) {
                    return;
                  }
                  code = constants_1.Status.INTERNAL;
                  details = `Received RST_STREAM with code ${stream.rstCode}`;
                  break;
                case http2.constants.NGHTTP2_REFUSED_STREAM:
                  code = constants_1.Status.UNAVAILABLE;
                  details = "Stream refused by server";
                  break;
                case http2.constants.NGHTTP2_CANCEL:
                  code = constants_1.Status.CANCELLED;
                  details = "Call cancelled";
                  break;
                case http2.constants.NGHTTP2_ENHANCE_YOUR_CALM:
                  code = constants_1.Status.RESOURCE_EXHAUSTED;
                  details = "Bandwidth exhausted";
                  break;
                case http2.constants.NGHTTP2_INADEQUATE_SECURITY:
                  code = constants_1.Status.PERMISSION_DENIED;
                  details = "Protocol not secure enough";
                  break;
                case http2.constants.NGHTTP2_INTERNAL_ERROR:
                  code = constants_1.Status.INTERNAL;
                  if (this.internalError === null) {
                    details = `Received RST_STREAM with code ${stream.rstCode} (Internal server error)`;
                  } else {
                    if (this.internalError.code === "ECONNRESET") {
                      code = constants_1.Status.UNAVAILABLE;
                      details = this.internalError.message;
                    } else {
                      details = `Received RST_STREAM with code ${stream.rstCode} triggered by internal client error: ${this.internalError.message}`;
                    }
                  }
                  break;
                default:
                  code = constants_1.Status.INTERNAL;
                  details = `Received RST_STREAM with code ${stream.rstCode}`;
              }
              this.endCall({ code, details, metadata: new metadata_1.Metadata() });
            });
          });
          stream.on("error", (err) => {
            if (err.code !== "ERR_HTTP2_STREAM_ERROR") {
              this.trace("Node error event: message=" + err.message + " code=" + err.code + " errno=" + getSystemErrorName(err.errno) + " syscall=" + err.syscall);
              this.internalError = err;
            }
          });
          if (!this.pendingRead) {
            stream.pause();
          }
          if (this.pendingWrite) {
            if (!this.pendingWriteCallback) {
              throw new Error("Invalid state in write handling code");
            }
            this.trace("sending data chunk of length " + this.pendingWrite.length + " (deferred)");
            stream.write(this.pendingWrite, this.pendingWriteCallback);
          }
          this.maybeCloseWrites();
        }
      }
      start(metadata, listener) {
        this.trace("Sending metadata");
        this.listener = listener;
        this.channel._startCallStream(this, metadata);
      }
      destroyHttp2Stream() {
        var _a;
        if (this.http2Stream !== null && !this.http2Stream.destroyed) {
          let code;
          if (((_a = this.finalStatus) === null || _a === void 0 ? void 0 : _a.code) === constants_1.Status.OK) {
            code = http2.constants.NGHTTP2_NO_ERROR;
          } else {
            code = http2.constants.NGHTTP2_CANCEL;
          }
          this.trace("close http2 stream with code " + code);
          this.http2Stream.close(code);
        }
      }
      cancelWithStatus(status, details) {
        this.trace("cancelWithStatus code: " + status + ' details: "' + details + '"');
        this.endCall({ code: status, details, metadata: new metadata_1.Metadata() });
      }
      getDeadline() {
        if (this.options.parentCall && this.options.flags & constants_1.Propagate.DEADLINE) {
          const parentDeadline = this.options.parentCall.getDeadline();
          const selfDeadline = this.options.deadline;
          const parentDeadlineMsecs = parentDeadline instanceof Date ? parentDeadline.getTime() : parentDeadline;
          const selfDeadlineMsecs = selfDeadline instanceof Date ? selfDeadline.getTime() : selfDeadline;
          return Math.min(parentDeadlineMsecs, selfDeadlineMsecs);
        } else {
          return this.options.deadline;
        }
      }
      getCredentials() {
        return this.credentials;
      }
      setCredentials(credentials) {
        this.credentials = this.channelCallCredentials.compose(credentials);
      }
      getStatus() {
        return this.finalStatus;
      }
      getPeer() {
        var _a, _b;
        return (_b = (_a = this.subchannel) === null || _a === void 0 ? void 0 : _a.getAddress()) !== null && _b !== void 0 ? _b : this.channel.getTarget();
      }
      getMethod() {
        return this.methodName;
      }
      getHost() {
        return this.options.host;
      }
      startRead() {
        if (this.finalStatus !== null && this.finalStatus.code !== constants_1.Status.OK) {
          this.readsClosed = true;
          this.maybeOutputStatus();
          return;
        }
        this.canPush = true;
        if (this.http2Stream === null) {
          this.pendingRead = true;
        } else {
          if (this.unpushedReadMessages.length > 0) {
            const nextMessage = this.unpushedReadMessages.shift();
            this.push(nextMessage);
            return;
          }
          this.http2Stream.resume();
        }
      }
      maybeCloseWrites() {
        if (this.writesClosed && !this.isWriteFilterPending && this.http2Stream !== null) {
          this.trace("calling end() on HTTP/2 stream");
          this.http2Stream.end();
        }
      }
      sendMessageWithContext(context, message) {
        var _a;
        this.trace("write() called with message of length " + message.length);
        const writeObj = {
          message,
          flags: context.flags
        };
        const cb = (_a = context.callback) !== null && _a !== void 0 ? _a : () => {
        };
        this.isWriteFilterPending = true;
        this.filterStack.sendMessage(Promise.resolve(writeObj)).then((message2) => {
          this.isWriteFilterPending = false;
          if (this.http2Stream === null) {
            this.trace("deferring writing data chunk of length " + message2.message.length);
            this.pendingWrite = message2.message;
            this.pendingWriteCallback = cb;
          } else {
            this.trace("sending data chunk of length " + message2.message.length);
            this.http2Stream.write(message2.message, cb);
            this.maybeCloseWrites();
          }
        }, this.handleFilterError.bind(this));
      }
      halfClose() {
        this.trace("end() called");
        this.writesClosed = true;
        this.maybeCloseWrites();
      }
    };
    exports2.Http2CallStream = Http2CallStream;
  }
});

// node_modules/@grpc/grpc-js/build/src/tls-helpers.js
var require_tls_helpers = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/tls-helpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getDefaultRootsData = exports2.CIPHER_SUITES = void 0;
    var fs = require("fs");
    exports2.CIPHER_SUITES = process.env.GRPC_SSL_CIPHER_SUITES;
    var DEFAULT_ROOTS_FILE_PATH = process.env.GRPC_DEFAULT_SSL_ROOTS_FILE_PATH;
    var defaultRootsData = null;
    function getDefaultRootsData() {
      if (DEFAULT_ROOTS_FILE_PATH) {
        if (defaultRootsData === null) {
          defaultRootsData = fs.readFileSync(DEFAULT_ROOTS_FILE_PATH);
        }
        return defaultRootsData;
      }
      return null;
    }
    exports2.getDefaultRootsData = getDefaultRootsData;
  }
});

// node_modules/@grpc/grpc-js/build/src/channel-credentials.js
var require_channel_credentials = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/channel-credentials.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ChannelCredentials = void 0;
    var tls_1 = require("tls");
    var call_credentials_1 = require_call_credentials();
    var tls_helpers_1 = require_tls_helpers();
    function verifyIsBufferOrNull(obj, friendlyName) {
      if (obj && !(obj instanceof Buffer)) {
        throw new TypeError(`${friendlyName}, if provided, must be a Buffer.`);
      }
    }
    function bufferOrNullEqual(buf1, buf2) {
      if (buf1 === null && buf2 === null) {
        return true;
      } else {
        return buf1 !== null && buf2 !== null && buf1.equals(buf2);
      }
    }
    var ChannelCredentials = class {
      constructor(callCredentials) {
        this.callCredentials = callCredentials || call_credentials_1.CallCredentials.createEmpty();
      }
      _getCallCredentials() {
        return this.callCredentials;
      }
      static createSsl(rootCerts, privateKey, certChain, verifyOptions) {
        verifyIsBufferOrNull(rootCerts, "Root certificate");
        verifyIsBufferOrNull(privateKey, "Private key");
        verifyIsBufferOrNull(certChain, "Certificate chain");
        if (privateKey && !certChain) {
          throw new Error("Private key must be given with accompanying certificate chain");
        }
        if (!privateKey && certChain) {
          throw new Error("Certificate chain must be given with accompanying private key");
        }
        return new SecureChannelCredentialsImpl(rootCerts || tls_helpers_1.getDefaultRootsData(), privateKey || null, certChain || null, verifyOptions || {});
      }
      static createInsecure() {
        return new InsecureChannelCredentialsImpl();
      }
    };
    exports2.ChannelCredentials = ChannelCredentials;
    var InsecureChannelCredentialsImpl = class extends ChannelCredentials {
      constructor(callCredentials) {
        super(callCredentials);
      }
      compose(callCredentials) {
        throw new Error("Cannot compose insecure credentials");
      }
      _getConnectionOptions() {
        return null;
      }
      _isSecure() {
        return false;
      }
      _equals(other) {
        return other instanceof InsecureChannelCredentialsImpl;
      }
    };
    var SecureChannelCredentialsImpl = class extends ChannelCredentials {
      constructor(rootCerts, privateKey, certChain, verifyOptions) {
        super();
        this.rootCerts = rootCerts;
        this.privateKey = privateKey;
        this.certChain = certChain;
        this.verifyOptions = verifyOptions;
        const secureContext = tls_1.createSecureContext({
          ca: rootCerts || void 0,
          key: privateKey || void 0,
          cert: certChain || void 0,
          ciphers: tls_helpers_1.CIPHER_SUITES
        });
        this.connectionOptions = { secureContext };
        if (verifyOptions && verifyOptions.checkServerIdentity) {
          this.connectionOptions.checkServerIdentity = (host, cert) => {
            return verifyOptions.checkServerIdentity(host, { raw: cert.raw });
          };
        }
      }
      compose(callCredentials) {
        const combinedCallCredentials = this.callCredentials.compose(callCredentials);
        return new ComposedChannelCredentialsImpl(this, combinedCallCredentials);
      }
      _getConnectionOptions() {
        return Object.assign({}, this.connectionOptions);
      }
      _isSecure() {
        return true;
      }
      _equals(other) {
        if (this === other) {
          return true;
        }
        if (other instanceof SecureChannelCredentialsImpl) {
          if (!bufferOrNullEqual(this.rootCerts, other.rootCerts)) {
            return false;
          }
          if (!bufferOrNullEqual(this.privateKey, other.privateKey)) {
            return false;
          }
          if (!bufferOrNullEqual(this.certChain, other.certChain)) {
            return false;
          }
          return this.verifyOptions.checkServerIdentity === other.verifyOptions.checkServerIdentity;
        } else {
          return false;
        }
      }
    };
    var ComposedChannelCredentialsImpl = class extends ChannelCredentials {
      constructor(channelCredentials, callCreds) {
        super(callCreds);
        this.channelCredentials = channelCredentials;
      }
      compose(callCredentials) {
        const combinedCallCredentials = this.callCredentials.compose(callCredentials);
        return new ComposedChannelCredentialsImpl(this.channelCredentials, combinedCallCredentials);
      }
      _getConnectionOptions() {
        return this.channelCredentials._getConnectionOptions();
      }
      _isSecure() {
        return true;
      }
      _equals(other) {
        if (this === other) {
          return true;
        }
        if (other instanceof ComposedChannelCredentialsImpl) {
          return this.channelCredentials._equals(other.channelCredentials) && this.callCredentials._equals(other.callCredentials);
        } else {
          return false;
        }
      }
    };
  }
});

// node_modules/@grpc/grpc-js/build/src/picker.js
var require_picker = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/picker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.QueuePicker = exports2.UnavailablePicker = exports2.PickResultType = void 0;
    var metadata_1 = require_metadata();
    var constants_1 = require_constants();
    var PickResultType;
    (function(PickResultType2) {
      PickResultType2[PickResultType2["COMPLETE"] = 0] = "COMPLETE";
      PickResultType2[PickResultType2["QUEUE"] = 1] = "QUEUE";
      PickResultType2[PickResultType2["TRANSIENT_FAILURE"] = 2] = "TRANSIENT_FAILURE";
      PickResultType2[PickResultType2["DROP"] = 3] = "DROP";
    })(PickResultType = exports2.PickResultType || (exports2.PickResultType = {}));
    var UnavailablePicker = class {
      constructor(status) {
        if (status !== void 0) {
          this.status = status;
        } else {
          this.status = {
            code: constants_1.Status.UNAVAILABLE,
            details: "No connection established",
            metadata: new metadata_1.Metadata()
          };
        }
      }
      pick(pickArgs) {
        return {
          pickResultType: PickResultType.TRANSIENT_FAILURE,
          subchannel: null,
          status: this.status,
          extraFilterFactory: null,
          onCallStarted: null
        };
      }
    };
    exports2.UnavailablePicker = UnavailablePicker;
    var QueuePicker = class {
      constructor(loadBalancer) {
        this.loadBalancer = loadBalancer;
        this.calledExitIdle = false;
      }
      pick(pickArgs) {
        if (!this.calledExitIdle) {
          process.nextTick(() => {
            this.loadBalancer.exitIdle();
          });
          this.calledExitIdle = true;
        }
        return {
          pickResultType: PickResultType.QUEUE,
          subchannel: null,
          status: null,
          extraFilterFactory: null,
          onCallStarted: null
        };
      }
    };
    exports2.QueuePicker = QueuePicker;
  }
});

// node_modules/@grpc/grpc-js/build/src/backoff-timeout.js
var require_backoff_timeout = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/backoff-timeout.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BackoffTimeout = void 0;
    var INITIAL_BACKOFF_MS = 1e3;
    var BACKOFF_MULTIPLIER = 1.6;
    var MAX_BACKOFF_MS = 12e4;
    var BACKOFF_JITTER = 0.2;
    function uniformRandom(min, max) {
      return Math.random() * (max - min) + min;
    }
    var BackoffTimeout = class {
      constructor(callback, options) {
        this.callback = callback;
        this.initialDelay = INITIAL_BACKOFF_MS;
        this.multiplier = BACKOFF_MULTIPLIER;
        this.maxDelay = MAX_BACKOFF_MS;
        this.jitter = BACKOFF_JITTER;
        this.running = false;
        this.hasRef = true;
        if (options) {
          if (options.initialDelay) {
            this.initialDelay = options.initialDelay;
          }
          if (options.multiplier) {
            this.multiplier = options.multiplier;
          }
          if (options.jitter) {
            this.jitter = options.jitter;
          }
          if (options.maxDelay) {
            this.maxDelay = options.maxDelay;
          }
        }
        this.nextDelay = this.initialDelay;
        this.timerId = setTimeout(() => {
        }, 0);
        clearTimeout(this.timerId);
      }
      runOnce() {
        var _a, _b;
        this.running = true;
        this.timerId = setTimeout(() => {
          this.callback();
          this.running = false;
        }, this.nextDelay);
        if (!this.hasRef) {
          (_b = (_a = this.timerId).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
        const nextBackoff = Math.min(this.nextDelay * this.multiplier, this.maxDelay);
        const jitterMagnitude = nextBackoff * this.jitter;
        this.nextDelay = nextBackoff + uniformRandom(-jitterMagnitude, jitterMagnitude);
      }
      stop() {
        clearTimeout(this.timerId);
        this.running = false;
      }
      reset() {
        this.nextDelay = this.initialDelay;
      }
      isRunning() {
        return this.running;
      }
      ref() {
        var _a, _b;
        this.hasRef = true;
        (_b = (_a = this.timerId).ref) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
      unref() {
        var _a, _b;
        this.hasRef = false;
        (_b = (_a = this.timerId).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
    };
    exports2.BackoffTimeout = BackoffTimeout;
  }
});

// node_modules/@grpc/grpc-js/build/src/service-config.js
var require_service_config = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/service-config.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.extractAndSelectServiceConfig = exports2.validateServiceConfig = void 0;
    var os = require("os");
    var load_balancer_1 = require_load_balancer();
    var TIMEOUT_REGEX = /^\d+(\.\d{1,9})?s$/;
    var CLIENT_LANGUAGE_STRING = "node";
    function validateName(obj) {
      if (!("service" in obj) || typeof obj.service !== "string") {
        throw new Error("Invalid method config name: invalid service");
      }
      const result = {
        service: obj.service
      };
      if ("method" in obj) {
        if (typeof obj.method === "string") {
          result.method = obj.method;
        } else {
          throw new Error("Invalid method config name: invalid method");
        }
      }
      return result;
    }
    function validateMethodConfig(obj) {
      const result = {
        name: []
      };
      if (!("name" in obj) || !Array.isArray(obj.name)) {
        throw new Error("Invalid method config: invalid name array");
      }
      for (const name of obj.name) {
        result.name.push(validateName(name));
      }
      if ("waitForReady" in obj) {
        if (typeof obj.waitForReady !== "boolean") {
          throw new Error("Invalid method config: invalid waitForReady");
        }
        result.waitForReady = obj.waitForReady;
      }
      if ("timeout" in obj) {
        if (!(typeof obj.timeout === "string") || !TIMEOUT_REGEX.test(obj.timeout)) {
          throw new Error("Invalid method config: invalid timeout");
        }
        result.timeout = obj.timeout;
      }
      if ("maxRequestBytes" in obj) {
        if (typeof obj.maxRequestBytes !== "number") {
          throw new Error("Invalid method config: invalid maxRequestBytes");
        }
        result.maxRequestBytes = obj.maxRequestBytes;
      }
      if ("maxResponseBytes" in obj) {
        if (typeof obj.maxResponseBytes !== "number") {
          throw new Error("Invalid method config: invalid maxRequestBytes");
        }
        result.maxResponseBytes = obj.maxResponseBytes;
      }
      return result;
    }
    function validateServiceConfig(obj) {
      const result = {
        loadBalancingConfig: [],
        methodConfig: []
      };
      if ("loadBalancingPolicy" in obj) {
        if (typeof obj.loadBalancingPolicy === "string") {
          result.loadBalancingPolicy = obj.loadBalancingPolicy;
        } else {
          throw new Error("Invalid service config: invalid loadBalancingPolicy");
        }
      }
      if ("loadBalancingConfig" in obj) {
        if (Array.isArray(obj.loadBalancingConfig)) {
          for (const config of obj.loadBalancingConfig) {
            result.loadBalancingConfig.push(load_balancer_1.validateLoadBalancingConfig(config));
          }
        } else {
          throw new Error("Invalid service config: invalid loadBalancingConfig");
        }
      }
      if ("methodConfig" in obj) {
        if (Array.isArray(obj.methodConfig)) {
          for (const methodConfig of obj.methodConfig) {
            result.methodConfig.push(validateMethodConfig(methodConfig));
          }
        }
      }
      const seenMethodNames = [];
      for (const methodConfig of result.methodConfig) {
        for (const name of methodConfig.name) {
          for (const seenName of seenMethodNames) {
            if (name.service === seenName.service && name.method === seenName.method) {
              throw new Error(`Invalid service config: duplicate name ${name.service}/${name.method}`);
            }
          }
          seenMethodNames.push(name);
        }
      }
      return result;
    }
    exports2.validateServiceConfig = validateServiceConfig;
    function validateCanaryConfig(obj) {
      if (!("serviceConfig" in obj)) {
        throw new Error("Invalid service config choice: missing service config");
      }
      const result = {
        serviceConfig: validateServiceConfig(obj.serviceConfig)
      };
      if ("clientLanguage" in obj) {
        if (Array.isArray(obj.clientLanguage)) {
          result.clientLanguage = [];
          for (const lang of obj.clientLanguage) {
            if (typeof lang === "string") {
              result.clientLanguage.push(lang);
            } else {
              throw new Error("Invalid service config choice: invalid clientLanguage");
            }
          }
        } else {
          throw new Error("Invalid service config choice: invalid clientLanguage");
        }
      }
      if ("clientHostname" in obj) {
        if (Array.isArray(obj.clientHostname)) {
          result.clientHostname = [];
          for (const lang of obj.clientHostname) {
            if (typeof lang === "string") {
              result.clientHostname.push(lang);
            } else {
              throw new Error("Invalid service config choice: invalid clientHostname");
            }
          }
        } else {
          throw new Error("Invalid service config choice: invalid clientHostname");
        }
      }
      if ("percentage" in obj) {
        if (typeof obj.percentage === "number" && 0 <= obj.percentage && obj.percentage <= 100) {
          result.percentage = obj.percentage;
        } else {
          throw new Error("Invalid service config choice: invalid percentage");
        }
      }
      const allowedFields = [
        "clientLanguage",
        "percentage",
        "clientHostname",
        "serviceConfig"
      ];
      for (const field in obj) {
        if (!allowedFields.includes(field)) {
          throw new Error(`Invalid service config choice: unexpected field ${field}`);
        }
      }
      return result;
    }
    function validateAndSelectCanaryConfig(obj, percentage) {
      if (!Array.isArray(obj)) {
        throw new Error("Invalid service config list");
      }
      for (const config of obj) {
        const validatedConfig = validateCanaryConfig(config);
        if (typeof validatedConfig.percentage === "number" && percentage > validatedConfig.percentage) {
          continue;
        }
        if (Array.isArray(validatedConfig.clientHostname)) {
          let hostnameMatched = false;
          for (const hostname of validatedConfig.clientHostname) {
            if (hostname === os.hostname()) {
              hostnameMatched = true;
            }
          }
          if (!hostnameMatched) {
            continue;
          }
        }
        if (Array.isArray(validatedConfig.clientLanguage)) {
          let languageMatched = false;
          for (const language of validatedConfig.clientLanguage) {
            if (language === CLIENT_LANGUAGE_STRING) {
              languageMatched = true;
            }
          }
          if (!languageMatched) {
            continue;
          }
        }
        return validatedConfig.serviceConfig;
      }
      throw new Error("No matching service config found");
    }
    function extractAndSelectServiceConfig(txtRecord, percentage) {
      for (const record of txtRecord) {
        if (record.length > 0 && record[0].startsWith("grpc_config=")) {
          const recordString = record.join("").substring("grpc_config=".length);
          const recordJson = JSON.parse(recordString);
          return validateAndSelectCanaryConfig(recordJson, percentage);
        }
      }
      return null;
    }
    exports2.extractAndSelectServiceConfig = extractAndSelectServiceConfig;
  }
});

// node_modules/@grpc/grpc-js/build/src/uri-parser.js
var require_uri_parser = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/uri-parser.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.uriToString = exports2.splitHostPort = exports2.parseUri = void 0;
    var URI_REGEX = /^(?:([A-Za-z0-9+.-]+):)?(?:\/\/([^/]*)\/)?(.+)$/;
    function parseUri(uriString) {
      const parsedUri = URI_REGEX.exec(uriString);
      if (parsedUri === null) {
        return null;
      }
      return {
        scheme: parsedUri[1],
        authority: parsedUri[2],
        path: parsedUri[3]
      };
    }
    exports2.parseUri = parseUri;
    var NUMBER_REGEX = /^\d+$/;
    function splitHostPort(path2) {
      if (path2.startsWith("[")) {
        const hostEnd = path2.indexOf("]");
        if (hostEnd === -1) {
          return null;
        }
        const host = path2.substring(1, hostEnd);
        if (host.indexOf(":") === -1) {
          return null;
        }
        if (path2.length > hostEnd + 1) {
          if (path2[hostEnd + 1] === ":") {
            const portString = path2.substring(hostEnd + 2);
            if (NUMBER_REGEX.test(portString)) {
              return {
                host,
                port: +portString
              };
            } else {
              return null;
            }
          } else {
            return null;
          }
        } else {
          return {
            host
          };
        }
      } else {
        const splitPath = path2.split(":");
        if (splitPath.length === 2) {
          if (NUMBER_REGEX.test(splitPath[1])) {
            return {
              host: splitPath[0],
              port: +splitPath[1]
            };
          } else {
            return null;
          }
        } else {
          return {
            host: path2
          };
        }
      }
    }
    exports2.splitHostPort = splitHostPort;
    function uriToString(uri) {
      let result = "";
      if (uri.scheme !== void 0) {
        result += uri.scheme + ":";
      }
      if (uri.authority !== void 0) {
        result += "//" + uri.authority + "/";
      }
      result += uri.path;
      return result;
    }
    exports2.uriToString = uriToString;
  }
});

// node_modules/@grpc/grpc-js/build/src/resolver-dns.js
var require_resolver_dns = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/resolver-dns.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setup = void 0;
    var resolver_1 = require_resolver();
    var dns = require("dns");
    var util = require("util");
    var service_config_1 = require_service_config();
    var constants_1 = require_constants();
    var metadata_1 = require_metadata();
    var logging = require_logging();
    var constants_2 = require_constants();
    var uri_parser_1 = require_uri_parser();
    var net_1 = require("net");
    var TRACER_NAME = "dns_resolver";
    function trace(text) {
      logging.trace(constants_2.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    var DEFAULT_PORT = 443;
    var resolveTxtPromise = util.promisify(dns.resolveTxt);
    var dnsLookupPromise = util.promisify(dns.lookup);
    function mergeArrays(...arrays) {
      const result = [];
      for (let i = 0; i < Math.max.apply(null, arrays.map((array) => array.length)); i++) {
        for (const array of arrays) {
          if (i < array.length) {
            result.push(array[i]);
          }
        }
      }
      return result;
    }
    var DnsResolver = class {
      constructor(target, listener, channelOptions) {
        var _a, _b;
        this.target = target;
        this.listener = listener;
        this.pendingLookupPromise = null;
        this.pendingTxtPromise = null;
        this.latestLookupResult = null;
        this.latestServiceConfig = null;
        this.latestServiceConfigError = null;
        trace("Resolver constructed for target " + uri_parser_1.uriToString(target));
        const hostPort = uri_parser_1.splitHostPort(target.path);
        if (hostPort === null) {
          this.ipResult = null;
          this.dnsHostname = null;
          this.port = null;
        } else {
          if (net_1.isIPv4(hostPort.host) || net_1.isIPv6(hostPort.host)) {
            this.ipResult = [
              {
                host: hostPort.host,
                port: (_a = hostPort.port) !== null && _a !== void 0 ? _a : DEFAULT_PORT
              }
            ];
            this.dnsHostname = null;
            this.port = null;
          } else {
            this.ipResult = null;
            this.dnsHostname = hostPort.host;
            this.port = (_b = hostPort.port) !== null && _b !== void 0 ? _b : DEFAULT_PORT;
          }
        }
        this.percentage = Math.random() * 100;
        this.defaultResolutionError = {
          code: constants_1.Status.UNAVAILABLE,
          details: `Name resolution failed for target ${uri_parser_1.uriToString(this.target)}`,
          metadata: new metadata_1.Metadata()
        };
      }
      startResolution() {
        if (this.ipResult !== null) {
          trace("Returning IP address for target " + uri_parser_1.uriToString(this.target));
          setImmediate(() => {
            this.listener.onSuccessfulResolution(this.ipResult, null, null, null, {});
          });
          return;
        }
        if (this.dnsHostname === null) {
          setImmediate(() => {
            this.listener.onError({
              code: constants_1.Status.UNAVAILABLE,
              details: `Failed to parse DNS address ${uri_parser_1.uriToString(this.target)}`,
              metadata: new metadata_1.Metadata()
            });
          });
        } else {
          this.latestLookupResult = null;
          const hostname = this.dnsHostname;
          this.pendingLookupPromise = dnsLookupPromise(hostname, { all: true });
          this.pendingLookupPromise.then((addressList) => {
            this.pendingLookupPromise = null;
            const ip4Addresses = addressList.filter((addr) => addr.family === 4);
            const ip6Addresses = addressList.filter((addr) => addr.family === 6);
            this.latestLookupResult = mergeArrays(ip6Addresses, ip4Addresses).map((addr) => ({ host: addr.address, port: +this.port }));
            const allAddressesString = "[" + this.latestLookupResult.map((addr) => addr.host + ":" + addr.port).join(",") + "]";
            trace("Resolved addresses for target " + uri_parser_1.uriToString(this.target) + ": " + allAddressesString);
            if (this.latestLookupResult.length === 0) {
              this.listener.onError(this.defaultResolutionError);
              return;
            }
            this.listener.onSuccessfulResolution(this.latestLookupResult, this.latestServiceConfig, this.latestServiceConfigError, null, {});
          }, (err) => {
            trace("Resolution error for target " + uri_parser_1.uriToString(this.target) + ": " + err.message);
            this.pendingLookupPromise = null;
            this.listener.onError(this.defaultResolutionError);
          });
          if (this.pendingTxtPromise === null) {
            this.pendingTxtPromise = resolveTxtPromise(hostname);
            this.pendingTxtPromise.then((txtRecord) => {
              this.pendingTxtPromise = null;
              try {
                this.latestServiceConfig = service_config_1.extractAndSelectServiceConfig(txtRecord, this.percentage);
              } catch (err) {
                this.latestServiceConfigError = {
                  code: constants_1.Status.UNAVAILABLE,
                  details: "Parsing service config failed",
                  metadata: new metadata_1.Metadata()
                };
              }
              if (this.latestLookupResult !== null) {
                this.listener.onSuccessfulResolution(this.latestLookupResult, this.latestServiceConfig, this.latestServiceConfigError, null, {});
              }
            }, (err) => {
            });
          }
        }
      }
      updateResolution() {
        trace("Resolution update requested for target " + uri_parser_1.uriToString(this.target));
        if (this.pendingLookupPromise === null) {
          this.startResolution();
        }
      }
      destroy() {
      }
      static getDefaultAuthority(target) {
        return target.path;
      }
    };
    function setup() {
      resolver_1.registerResolver("dns", DnsResolver);
      resolver_1.registerDefaultScheme("dns");
    }
    exports2.setup = setup;
  }
});

// node_modules/@grpc/grpc-js/build/src/resolver-uds.js
var require_resolver_uds = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/resolver-uds.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setup = void 0;
    var resolver_1 = require_resolver();
    var UdsResolver = class {
      constructor(target, listener, channelOptions) {
        this.listener = listener;
        this.addresses = [];
        let path2;
        if (target.authority === "") {
          path2 = "/" + target.path;
        } else {
          path2 = target.path;
        }
        this.addresses = [{ path: path2 }];
      }
      updateResolution() {
        process.nextTick(this.listener.onSuccessfulResolution, this.addresses, null, null, null, {});
      }
      destroy() {
      }
      static getDefaultAuthority(target) {
        return "localhost";
      }
    };
    function setup() {
      resolver_1.registerResolver("unix", UdsResolver);
    }
    exports2.setup = setup;
  }
});

// node_modules/@grpc/grpc-js/build/src/resolver-ip.js
var require_resolver_ip = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/resolver-ip.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setup = void 0;
    var net_1 = require("net");
    var constants_1 = require_constants();
    var metadata_1 = require_metadata();
    var resolver_1 = require_resolver();
    var uri_parser_1 = require_uri_parser();
    var logging = require_logging();
    var TRACER_NAME = "ip_resolver";
    function trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    var IPV4_SCHEME = "ipv4";
    var IPV6_SCHEME = "ipv6";
    var DEFAULT_PORT = 443;
    var IpResolver = class {
      constructor(target, listener, channelOptions) {
        var _a;
        this.target = target;
        this.listener = listener;
        this.addresses = [];
        this.error = null;
        trace("Resolver constructed for target " + uri_parser_1.uriToString(target));
        const addresses = [];
        if (!(target.scheme === IPV4_SCHEME || target.scheme === IPV6_SCHEME)) {
          this.error = {
            code: constants_1.Status.UNAVAILABLE,
            details: `Unrecognized scheme ${target.scheme} in IP resolver`,
            metadata: new metadata_1.Metadata()
          };
          return;
        }
        const pathList = target.path.split(",");
        for (const path2 of pathList) {
          const hostPort = uri_parser_1.splitHostPort(path2);
          if (hostPort === null) {
            this.error = {
              code: constants_1.Status.UNAVAILABLE,
              details: `Failed to parse ${target.scheme} address ${path2}`,
              metadata: new metadata_1.Metadata()
            };
            return;
          }
          if (target.scheme === IPV4_SCHEME && !net_1.isIPv4(hostPort.host) || target.scheme === IPV6_SCHEME && !net_1.isIPv6(hostPort.host)) {
            this.error = {
              code: constants_1.Status.UNAVAILABLE,
              details: `Failed to parse ${target.scheme} address ${path2}`,
              metadata: new metadata_1.Metadata()
            };
            return;
          }
          addresses.push({
            host: hostPort.host,
            port: (_a = hostPort.port) !== null && _a !== void 0 ? _a : DEFAULT_PORT
          });
        }
        this.addresses = addresses;
        trace("Parsed " + target.scheme + " address list " + this.addresses);
      }
      updateResolution() {
        process.nextTick(() => {
          if (this.error) {
            this.listener.onError(this.error);
          } else {
            this.listener.onSuccessfulResolution(this.addresses, null, null, null, {});
          }
        });
      }
      destroy() {
      }
      static getDefaultAuthority(target) {
        return target.path.split(",")[0];
      }
    };
    function setup() {
      resolver_1.registerResolver(IPV4_SCHEME, IpResolver);
      resolver_1.registerResolver(IPV6_SCHEME, IpResolver);
    }
    exports2.setup = setup;
  }
});

// node_modules/@grpc/grpc-js/build/src/resolver.js
var require_resolver = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/resolver.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.registerAll = exports2.mapUriDefaultScheme = exports2.getDefaultAuthority = exports2.createResolver = exports2.registerDefaultScheme = exports2.registerResolver = void 0;
    var resolver_dns = require_resolver_dns();
    var resolver_uds = require_resolver_uds();
    var resolver_ip = require_resolver_ip();
    var uri_parser_1 = require_uri_parser();
    var registeredResolvers = {};
    var defaultScheme = null;
    function registerResolver(scheme, resolverClass) {
      registeredResolvers[scheme] = resolverClass;
    }
    exports2.registerResolver = registerResolver;
    function registerDefaultScheme(scheme) {
      defaultScheme = scheme;
    }
    exports2.registerDefaultScheme = registerDefaultScheme;
    function createResolver(target, listener, options) {
      if (target.scheme !== void 0 && target.scheme in registeredResolvers) {
        return new registeredResolvers[target.scheme](target, listener, options);
      } else {
        throw new Error(`No resolver could be created for target ${uri_parser_1.uriToString(target)}`);
      }
    }
    exports2.createResolver = createResolver;
    function getDefaultAuthority(target) {
      if (target.scheme !== void 0 && target.scheme in registeredResolvers) {
        return registeredResolvers[target.scheme].getDefaultAuthority(target);
      } else {
        throw new Error(`Invalid target ${uri_parser_1.uriToString(target)}`);
      }
    }
    exports2.getDefaultAuthority = getDefaultAuthority;
    function mapUriDefaultScheme(target) {
      if (target.scheme === void 0 || !(target.scheme in registeredResolvers)) {
        if (defaultScheme !== null) {
          return {
            scheme: defaultScheme,
            authority: void 0,
            path: uri_parser_1.uriToString(target)
          };
        } else {
          return null;
        }
      }
      return target;
    }
    exports2.mapUriDefaultScheme = mapUriDefaultScheme;
    function registerAll() {
      resolver_dns.setup();
      resolver_uds.setup();
      resolver_ip.setup();
    }
    exports2.registerAll = registerAll;
  }
});

// node_modules/@grpc/grpc-js/build/src/http_proxy.js
var require_http_proxy = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/http_proxy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getProxiedConnection = exports2.mapProxyName = void 0;
    var logging_1 = require_logging();
    var constants_1 = require_constants();
    var resolver_1 = require_resolver();
    var http = require("http");
    var tls = require("tls");
    var logging = require_logging();
    var subchannel_1 = require_subchannel();
    var uri_parser_1 = require_uri_parser();
    var url_1 = require("url");
    var TRACER_NAME = "proxy";
    function trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    function getProxyInfo() {
      let proxyEnv = "";
      let envVar = "";
      if (process.env.grpc_proxy) {
        envVar = "grpc_proxy";
        proxyEnv = process.env.grpc_proxy;
      } else if (process.env.https_proxy) {
        envVar = "https_proxy";
        proxyEnv = process.env.https_proxy;
      } else if (process.env.http_proxy) {
        envVar = "http_proxy";
        proxyEnv = process.env.http_proxy;
      } else {
        return {};
      }
      let proxyUrl;
      try {
        proxyUrl = new url_1.URL(proxyEnv);
      } catch (e) {
        logging_1.log(constants_1.LogVerbosity.ERROR, `cannot parse value of "${envVar}" env var`);
        return {};
      }
      if (proxyUrl.protocol !== "http:") {
        logging_1.log(constants_1.LogVerbosity.ERROR, `"${proxyUrl.protocol}" scheme not supported in proxy URI`);
        return {};
      }
      let userCred = null;
      if (proxyUrl.username) {
        if (proxyUrl.password) {
          logging_1.log(constants_1.LogVerbosity.INFO, "userinfo found in proxy URI");
          userCred = `${proxyUrl.username}:${proxyUrl.password}`;
        } else {
          userCred = proxyUrl.username;
        }
      }
      const hostname = proxyUrl.hostname;
      let port = proxyUrl.port;
      if (port === "") {
        port = "80";
      }
      const result = {
        address: `${hostname}:${port}`
      };
      if (userCred) {
        result.creds = userCred;
      }
      trace("Proxy server " + result.address + " set by environment variable " + envVar);
      return result;
    }
    function getNoProxyHostList() {
      let noProxyStr = process.env.no_grpc_proxy;
      let envVar = "no_grpc_proxy";
      if (!noProxyStr) {
        noProxyStr = process.env.no_proxy;
        envVar = "no_proxy";
      }
      if (noProxyStr) {
        trace("No proxy server list set by environment variable " + envVar);
        return noProxyStr.split(",");
      } else {
        return [];
      }
    }
    function mapProxyName(target, options) {
      var _a;
      const noProxyResult = {
        target,
        extraOptions: {}
      };
      if (((_a = options["grpc.enable_http_proxy"]) !== null && _a !== void 0 ? _a : 1) === 0) {
        return noProxyResult;
      }
      const proxyInfo = getProxyInfo();
      if (!proxyInfo.address) {
        return noProxyResult;
      }
      const hostPort = uri_parser_1.splitHostPort(target.path);
      if (!hostPort) {
        return noProxyResult;
      }
      const serverHost = hostPort.host;
      for (const host of getNoProxyHostList()) {
        if (host === serverHost) {
          trace("Not using proxy for target in no_proxy list: " + uri_parser_1.uriToString(target));
          return noProxyResult;
        }
      }
      const extraOptions = {
        "grpc.http_connect_target": uri_parser_1.uriToString(target)
      };
      if (proxyInfo.creds) {
        extraOptions["grpc.http_connect_creds"] = proxyInfo.creds;
      }
      return {
        target: {
          scheme: "dns",
          path: proxyInfo.address
        },
        extraOptions
      };
    }
    exports2.mapProxyName = mapProxyName;
    function getProxiedConnection(address, channelOptions, connectionOptions) {
      if (!("grpc.http_connect_target" in channelOptions)) {
        return Promise.resolve({});
      }
      const realTarget = channelOptions["grpc.http_connect_target"];
      const parsedTarget = uri_parser_1.parseUri(realTarget);
      if (parsedTarget === null) {
        return Promise.resolve({});
      }
      const options = {
        method: "CONNECT",
        path: parsedTarget.path
      };
      if (subchannel_1.isTcpSubchannelAddress(address)) {
        options.host = address.host;
        options.port = address.port;
      } else {
        options.socketPath = address.path;
      }
      if ("grpc.http_connect_creds" in channelOptions) {
        options.headers = {
          "Proxy-Authorization": "Basic " + Buffer.from(channelOptions["grpc.http_connect_creds"]).toString("base64")
        };
      }
      const proxyAddressString = subchannel_1.subchannelAddressToString(address);
      trace("Using proxy " + proxyAddressString + " to connect to " + options.path);
      return new Promise((resolve, reject) => {
        const request = http.request(options);
        request.once("connect", (res, socket, head) => {
          var _a;
          request.removeAllListeners();
          socket.removeAllListeners();
          if (res.statusCode === 200) {
            trace("Successfully connected to " + options.path + " through proxy " + proxyAddressString);
            if ("secureContext" in connectionOptions) {
              const targetPath = resolver_1.getDefaultAuthority(parsedTarget);
              const hostPort = uri_parser_1.splitHostPort(targetPath);
              const remoteHost = (_a = hostPort === null || hostPort === void 0 ? void 0 : hostPort.host) !== null && _a !== void 0 ? _a : targetPath;
              const cts = tls.connect(Object.assign({ host: remoteHost, servername: remoteHost, socket }, connectionOptions), () => {
                trace("Successfully established a TLS connection to " + options.path + " through proxy " + proxyAddressString);
                resolve({ socket: cts, realTarget: parsedTarget });
              });
              cts.on("error", () => {
                reject();
              });
            } else {
              resolve({
                socket,
                realTarget: parsedTarget
              });
            }
          } else {
            logging_1.log(constants_1.LogVerbosity.ERROR, "Failed to connect to " + options.path + " through proxy " + proxyAddressString + " with status " + res.statusCode);
            reject();
          }
        });
        request.once("error", (err) => {
          request.removeAllListeners();
          logging_1.log(constants_1.LogVerbosity.ERROR, "Failed to connect to proxy " + proxyAddressString + " with error " + err.message);
          reject();
        });
        request.end();
      });
    }
    exports2.getProxiedConnection = getProxiedConnection;
  }
});

// node_modules/@grpc/grpc-js/package.json
var require_package = __commonJS({
  "node_modules/@grpc/grpc-js/package.json"(exports2, module2) {
    module2.exports = {
      name: "@grpc/grpc-js",
      version: "1.3.4",
      description: "gRPC Library for Node - pure JS implementation",
      homepage: "https://grpc.io/",
      repository: "https://github.com/grpc/grpc-node/tree/master/packages/grpc-js",
      main: "build/src/index.js",
      engines: {
        node: "^8.13.0 || >=10.10.0"
      },
      keywords: [],
      author: {
        name: "Google Inc."
      },
      types: "build/src/index.d.ts",
      license: "Apache-2.0",
      devDependencies: {
        "@grpc/proto-loader": "^0.5.5",
        "@types/gulp": "^4.0.6",
        "@types/gulp-mocha": "0.0.32",
        "@types/lodash": "^4.14.108",
        "@types/mocha": "^5.2.6",
        "@types/ncp": "^2.0.1",
        "@types/pify": "^3.0.2",
        "@types/yargs": "^15.0.5",
        "clang-format": "^1.0.55",
        execa: "^2.0.3",
        gts: "^2.0.0",
        gulp: "^4.0.2",
        "gulp-mocha": "^6.0.0",
        lodash: "^4.17.4",
        "mocha-jenkins-reporter": "^0.4.1",
        ncp: "^2.0.0",
        pify: "^4.0.1",
        rimraf: "^3.0.2",
        "ts-node": "^8.3.0",
        typescript: "^3.7.2",
        yargs: "^15.4.1"
      },
      contributors: [
        {
          name: "Google Inc."
        }
      ],
      scripts: {
        build: "npm run compile",
        clean: `node -e 'require("rimraf")("./build", () => {})'`,
        compile: "tsc -p .",
        format: 'clang-format -i -style="{Language: JavaScript, BasedOnStyle: Google, ColumnLimit: 80}" src/*.ts test/*.ts',
        lint: "npm run check",
        prepare: "npm run compile",
        test: "gulp test",
        check: "gts check src/**/*.ts",
        fix: "gts fix src/*.ts",
        pretest: "npm run compile",
        posttest: "npm run check"
      },
      dependencies: {
        "@types/node": ">=12.12.47"
      },
      files: [
        "src/**/*.ts",
        "build/src/*.{js,d.ts,js.map}",
        "LICENSE",
        "deps/envoy-api/envoy/api/v2/**/*.proto",
        "deps/envoy-api/envoy/config/**/*.proto",
        "deps/envoy-api/envoy/service/**/*.proto",
        "deps/envoy-api/envoy/type/**/*.proto",
        "deps/udpa/udpa/**/*.proto",
        "deps/googleapis/google/api/*.proto",
        "deps/googleapis/google/rpc/*.proto",
        "deps/protoc-gen-validate/validate/**/*.proto"
      ]
    };
  }
});

// node_modules/@grpc/grpc-js/build/src/subchannel.js
var require_subchannel = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/subchannel.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Subchannel = exports2.subchannelAddressToString = exports2.subchannelAddressEqual = exports2.isTcpSubchannelAddress = void 0;
    var http2 = require("http2");
    var tls_1 = require("tls");
    var channel_1 = require_channel();
    var backoff_timeout_1 = require_backoff_timeout();
    var resolver_1 = require_resolver();
    var logging = require_logging();
    var constants_1 = require_constants();
    var http_proxy_1 = require_http_proxy();
    var net = require("net");
    var uri_parser_1 = require_uri_parser();
    var clientVersion = require_package().version;
    var TRACER_NAME = "subchannel";
    function trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    function refTrace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, "subchannel_refcount", text);
    }
    var KEEPALIVE_MAX_TIME_MS = ~(1 << 31);
    var KEEPALIVE_TIMEOUT_MS = 2e4;
    var { HTTP2_HEADER_AUTHORITY, HTTP2_HEADER_CONTENT_TYPE, HTTP2_HEADER_METHOD, HTTP2_HEADER_PATH, HTTP2_HEADER_TE, HTTP2_HEADER_USER_AGENT } = http2.constants;
    var tooManyPingsData = Buffer.from("too_many_pings", "ascii");
    function isTcpSubchannelAddress(address) {
      return "port" in address;
    }
    exports2.isTcpSubchannelAddress = isTcpSubchannelAddress;
    function subchannelAddressEqual(address1, address2) {
      if (isTcpSubchannelAddress(address1)) {
        return isTcpSubchannelAddress(address2) && address1.host === address2.host && address1.port === address2.port;
      } else {
        return !isTcpSubchannelAddress(address2) && address1.path === address2.path;
      }
    }
    exports2.subchannelAddressEqual = subchannelAddressEqual;
    function subchannelAddressToString(address) {
      if (isTcpSubchannelAddress(address)) {
        return address.host + ":" + address.port;
      } else {
        return address.path;
      }
    }
    exports2.subchannelAddressToString = subchannelAddressToString;
    var Subchannel = class {
      constructor(channelTarget, subchannelAddress, options, credentials) {
        this.channelTarget = channelTarget;
        this.subchannelAddress = subchannelAddress;
        this.options = options;
        this.credentials = credentials;
        this.connectivityState = channel_1.ConnectivityState.IDLE;
        this.session = null;
        this.continueConnecting = false;
        this.stateListeners = [];
        this.disconnectListeners = [];
        this.keepaliveTimeMs = KEEPALIVE_MAX_TIME_MS;
        this.keepaliveTimeoutMs = KEEPALIVE_TIMEOUT_MS;
        this.keepaliveWithoutCalls = false;
        this.callRefcount = 0;
        this.refcount = 0;
        this.userAgent = [
          options["grpc.primary_user_agent"],
          `grpc-node-js/${clientVersion}`,
          options["grpc.secondary_user_agent"]
        ].filter((e) => e).join(" ");
        if ("grpc.keepalive_time_ms" in options) {
          this.keepaliveTimeMs = options["grpc.keepalive_time_ms"];
        }
        if ("grpc.keepalive_timeout_ms" in options) {
          this.keepaliveTimeoutMs = options["grpc.keepalive_timeout_ms"];
        }
        if ("grpc.keepalive_permit_without_calls" in options) {
          this.keepaliveWithoutCalls = options["grpc.keepalive_permit_without_calls"] === 1;
        } else {
          this.keepaliveWithoutCalls = false;
        }
        this.keepaliveIntervalId = setTimeout(() => {
        }, 0);
        clearTimeout(this.keepaliveIntervalId);
        this.keepaliveTimeoutId = setTimeout(() => {
        }, 0);
        clearTimeout(this.keepaliveTimeoutId);
        const backoffOptions = {
          initialDelay: options["grpc.initial_reconnect_backoff_ms"],
          maxDelay: options["grpc.max_reconnect_backoff_ms"]
        };
        this.backoffTimeout = new backoff_timeout_1.BackoffTimeout(() => {
          this.handleBackoffTimer();
        }, backoffOptions);
        this.subchannelAddressString = subchannelAddressToString(subchannelAddress);
      }
      handleBackoffTimer() {
        if (this.continueConnecting) {
          this.transitionToState([channel_1.ConnectivityState.TRANSIENT_FAILURE], channel_1.ConnectivityState.CONNECTING);
        } else {
          this.transitionToState([channel_1.ConnectivityState.TRANSIENT_FAILURE], channel_1.ConnectivityState.IDLE);
        }
      }
      startBackoff() {
        this.backoffTimeout.runOnce();
      }
      stopBackoff() {
        this.backoffTimeout.stop();
        this.backoffTimeout.reset();
      }
      sendPing() {
        var _a, _b;
        logging.trace(constants_1.LogVerbosity.DEBUG, "keepalive", "Sending ping to " + this.subchannelAddressString);
        this.keepaliveTimeoutId = setTimeout(() => {
          this.transitionToState([channel_1.ConnectivityState.READY], channel_1.ConnectivityState.IDLE);
        }, this.keepaliveTimeoutMs);
        (_b = (_a = this.keepaliveTimeoutId).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.session.ping((err, duration, payload) => {
          clearTimeout(this.keepaliveTimeoutId);
        });
      }
      startKeepalivePings() {
        var _a, _b;
        this.keepaliveIntervalId = setInterval(() => {
          this.sendPing();
        }, this.keepaliveTimeMs);
        (_b = (_a = this.keepaliveIntervalId).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
      stopKeepalivePings() {
        clearInterval(this.keepaliveIntervalId);
        clearTimeout(this.keepaliveTimeoutId);
      }
      createSession(proxyConnectionResult) {
        var _a, _b, _c;
        const targetAuthority = resolver_1.getDefaultAuthority((_a = proxyConnectionResult.realTarget) !== null && _a !== void 0 ? _a : this.channelTarget);
        let connectionOptions = this.credentials._getConnectionOptions() || {};
        connectionOptions.maxSendHeaderBlockLength = Number.MAX_SAFE_INTEGER;
        if ("grpc-node.max_session_memory" in this.options) {
          connectionOptions.maxSessionMemory = this.options["grpc-node.max_session_memory"];
        }
        let addressScheme = "http://";
        if ("secureContext" in connectionOptions) {
          addressScheme = "https://";
          if (this.options["grpc.ssl_target_name_override"]) {
            const sslTargetNameOverride = this.options["grpc.ssl_target_name_override"];
            connectionOptions.checkServerIdentity = (host, cert) => {
              return tls_1.checkServerIdentity(sslTargetNameOverride, cert);
            };
            connectionOptions.servername = sslTargetNameOverride;
          } else {
            const authorityHostname = (_c = (_b = uri_parser_1.splitHostPort(targetAuthority)) === null || _b === void 0 ? void 0 : _b.host) !== null && _c !== void 0 ? _c : "localhost";
            connectionOptions.servername = authorityHostname;
          }
          if (proxyConnectionResult.socket) {
            connectionOptions.createConnection = (authority, option) => {
              return proxyConnectionResult.socket;
            };
          }
        } else {
          connectionOptions.createConnection = (authority, option) => {
            if (proxyConnectionResult.socket) {
              return proxyConnectionResult.socket;
            } else {
              return net.connect(this.subchannelAddress);
            }
          };
        }
        connectionOptions = Object.assign(Object.assign({}, connectionOptions), this.subchannelAddress);
        const session = http2.connect(addressScheme + targetAuthority, connectionOptions);
        this.session = session;
        session.unref();
        session.once("connect", () => {
          if (this.session === session) {
            this.transitionToState([channel_1.ConnectivityState.CONNECTING], channel_1.ConnectivityState.READY);
          }
        });
        session.once("close", () => {
          if (this.session === session) {
            this.transitionToState([channel_1.ConnectivityState.CONNECTING], channel_1.ConnectivityState.TRANSIENT_FAILURE);
            this.transitionToState([channel_1.ConnectivityState.READY], channel_1.ConnectivityState.IDLE);
          }
        });
        session.once("goaway", (errorCode, lastStreamID, opaqueData) => {
          if (this.session === session) {
            if (errorCode === http2.constants.NGHTTP2_ENHANCE_YOUR_CALM && opaqueData.equals(tooManyPingsData)) {
              this.keepaliveTimeMs = Math.min(2 * this.keepaliveTimeMs, KEEPALIVE_MAX_TIME_MS);
              logging.log(constants_1.LogVerbosity.ERROR, `Connection to ${uri_parser_1.uriToString(this.channelTarget)} at ${this.subchannelAddressString} rejected by server because of excess pings. Increasing ping interval to ${this.keepaliveTimeMs} ms`);
            }
            trace(this.subchannelAddressString + " connection closed by GOAWAY with code " + errorCode);
            this.transitionToState([channel_1.ConnectivityState.CONNECTING, channel_1.ConnectivityState.READY], channel_1.ConnectivityState.IDLE);
          }
        });
        session.once("error", (error) => {
          trace(this.subchannelAddressString + " connection closed with error " + error.message);
        });
      }
      startConnectingInternal() {
        var _a, _b;
        const connectionOptions = this.credentials._getConnectionOptions() || {};
        if ("secureContext" in connectionOptions) {
          connectionOptions.ALPNProtocols = ["h2"];
          if (this.options["grpc.ssl_target_name_override"]) {
            const sslTargetNameOverride = this.options["grpc.ssl_target_name_override"];
            connectionOptions.checkServerIdentity = (host, cert) => {
              return tls_1.checkServerIdentity(sslTargetNameOverride, cert);
            };
            connectionOptions.servername = sslTargetNameOverride;
          } else {
            if ("grpc.http_connect_target" in this.options) {
              const targetPath = resolver_1.getDefaultAuthority((_a = uri_parser_1.parseUri(this.options["grpc.http_connect_target"])) !== null && _a !== void 0 ? _a : {
                path: "localhost"
              });
              const hostPort = uri_parser_1.splitHostPort(targetPath);
              connectionOptions.servername = (_b = hostPort === null || hostPort === void 0 ? void 0 : hostPort.host) !== null && _b !== void 0 ? _b : targetPath;
            }
          }
        }
        http_proxy_1.getProxiedConnection(this.subchannelAddress, this.options, connectionOptions).then((result) => {
          this.createSession(result);
        }, (reason) => {
          this.transitionToState([channel_1.ConnectivityState.CONNECTING], channel_1.ConnectivityState.TRANSIENT_FAILURE);
        });
      }
      transitionToState(oldStates, newState) {
        if (oldStates.indexOf(this.connectivityState) === -1) {
          return false;
        }
        trace(this.subchannelAddressString + " " + channel_1.ConnectivityState[this.connectivityState] + " -> " + channel_1.ConnectivityState[newState]);
        const previousState = this.connectivityState;
        this.connectivityState = newState;
        switch (newState) {
          case channel_1.ConnectivityState.READY:
            this.stopBackoff();
            this.session.socket.once("close", () => {
              for (const listener of this.disconnectListeners) {
                listener();
              }
            });
            if (this.keepaliveWithoutCalls) {
              this.startKeepalivePings();
            }
            break;
          case channel_1.ConnectivityState.CONNECTING:
            this.startBackoff();
            this.startConnectingInternal();
            this.continueConnecting = false;
            break;
          case channel_1.ConnectivityState.TRANSIENT_FAILURE:
            if (this.session) {
              this.session.close();
            }
            this.session = null;
            this.stopKeepalivePings();
            if (!this.backoffTimeout.isRunning()) {
              process.nextTick(() => {
                this.handleBackoffTimer();
              });
            }
            break;
          case channel_1.ConnectivityState.IDLE:
            if (this.session) {
              this.session.close();
            }
            this.session = null;
            this.stopKeepalivePings();
            break;
          default:
            throw new Error(`Invalid state: unknown ConnectivityState ${newState}`);
        }
        for (const listener of [...this.stateListeners]) {
          listener(this, previousState, newState);
        }
        return true;
      }
      checkBothRefcounts() {
        if (this.callRefcount === 0 && this.refcount === 0) {
          this.transitionToState([
            channel_1.ConnectivityState.CONNECTING,
            channel_1.ConnectivityState.READY
          ], channel_1.ConnectivityState.TRANSIENT_FAILURE);
        }
      }
      callRef() {
        refTrace(this.subchannelAddressString + " callRefcount " + this.callRefcount + " -> " + (this.callRefcount + 1));
        if (this.callRefcount === 0) {
          if (this.session) {
            this.session.ref();
          }
          this.backoffTimeout.ref();
          if (!this.keepaliveWithoutCalls) {
            this.startKeepalivePings();
          }
        }
        this.callRefcount += 1;
      }
      callUnref() {
        refTrace(this.subchannelAddressString + " callRefcount " + this.callRefcount + " -> " + (this.callRefcount - 1));
        this.callRefcount -= 1;
        if (this.callRefcount === 0) {
          if (this.session) {
            this.session.unref();
          }
          this.backoffTimeout.unref();
          if (!this.keepaliveWithoutCalls) {
            this.stopKeepalivePings();
          }
          this.checkBothRefcounts();
        }
      }
      ref() {
        refTrace(this.subchannelAddressString + " refcount " + this.refcount + " -> " + (this.refcount + 1));
        this.refcount += 1;
      }
      unref() {
        refTrace(this.subchannelAddressString + " refcount " + this.refcount + " -> " + (this.refcount - 1));
        this.refcount -= 1;
        this.checkBothRefcounts();
      }
      unrefIfOneRef() {
        if (this.refcount === 1) {
          this.unref();
          return true;
        }
        return false;
      }
      startCallStream(metadata, callStream, extraFilterFactory) {
        const headers = metadata.toHttp2Headers();
        headers[HTTP2_HEADER_AUTHORITY] = callStream.getHost();
        headers[HTTP2_HEADER_USER_AGENT] = this.userAgent;
        headers[HTTP2_HEADER_CONTENT_TYPE] = "application/grpc";
        headers[HTTP2_HEADER_METHOD] = "POST";
        headers[HTTP2_HEADER_PATH] = callStream.getMethod();
        headers[HTTP2_HEADER_TE] = "trailers";
        let http2Stream;
        try {
          http2Stream = this.session.request(headers);
        } catch (e) {
          this.transitionToState([channel_1.ConnectivityState.READY], channel_1.ConnectivityState.TRANSIENT_FAILURE);
          throw e;
        }
        let headersString = "";
        for (const header of Object.keys(headers)) {
          headersString += "		" + header + ": " + headers[header] + "\n";
        }
        logging.trace(constants_1.LogVerbosity.DEBUG, "call_stream", "Starting stream on subchannel " + this.subchannelAddressString + " with headers\n" + headersString);
        callStream.attachHttp2Stream(http2Stream, this, extraFilterFactory);
      }
      startConnecting() {
        if (!this.transitionToState([channel_1.ConnectivityState.IDLE], channel_1.ConnectivityState.CONNECTING)) {
          if (this.connectivityState === channel_1.ConnectivityState.TRANSIENT_FAILURE) {
            this.continueConnecting = true;
          }
        }
      }
      getConnectivityState() {
        return this.connectivityState;
      }
      addConnectivityStateListener(listener) {
        this.stateListeners.push(listener);
      }
      removeConnectivityStateListener(listener) {
        const listenerIndex = this.stateListeners.indexOf(listener);
        if (listenerIndex > -1) {
          this.stateListeners.splice(listenerIndex, 1);
        }
      }
      addDisconnectListener(listener) {
        this.disconnectListeners.push(listener);
      }
      removeDisconnectListener(listener) {
        const listenerIndex = this.disconnectListeners.indexOf(listener);
        if (listenerIndex > -1) {
          this.disconnectListeners.splice(listenerIndex, 1);
        }
      }
      resetBackoff() {
        this.backoffTimeout.reset();
        this.transitionToState([channel_1.ConnectivityState.TRANSIENT_FAILURE], channel_1.ConnectivityState.CONNECTING);
      }
      getAddress() {
        return this.subchannelAddressString;
      }
    };
    exports2.Subchannel = Subchannel;
  }
});

// node_modules/@grpc/grpc-js/build/src/load-balancer-pick-first.js
var require_load_balancer_pick_first = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/load-balancer-pick-first.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setup = exports2.PickFirstLoadBalancer = exports2.PickFirstLoadBalancingConfig = void 0;
    var load_balancer_1 = require_load_balancer();
    var channel_1 = require_channel();
    var picker_1 = require_picker();
    var subchannel_1 = require_subchannel();
    var logging = require_logging();
    var constants_1 = require_constants();
    var TRACER_NAME = "pick_first";
    function trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    var TYPE_NAME = "pick_first";
    var CONNECTION_DELAY_INTERVAL_MS = 250;
    var PickFirstLoadBalancingConfig = class {
      getLoadBalancerName() {
        return TYPE_NAME;
      }
      constructor() {
      }
      toJsonObject() {
        return {
          [TYPE_NAME]: {}
        };
      }
      static createFromJson(obj) {
        return new PickFirstLoadBalancingConfig();
      }
    };
    exports2.PickFirstLoadBalancingConfig = PickFirstLoadBalancingConfig;
    var PickFirstPicker = class {
      constructor(subchannel) {
        this.subchannel = subchannel;
      }
      pick(pickArgs) {
        return {
          pickResultType: picker_1.PickResultType.COMPLETE,
          subchannel: this.subchannel,
          status: null,
          extraFilterFactory: null,
          onCallStarted: null
        };
      }
    };
    var PickFirstLoadBalancer = class {
      constructor(channelControlHelper) {
        this.channelControlHelper = channelControlHelper;
        this.latestAddressList = [];
        this.subchannels = [];
        this.currentState = channel_1.ConnectivityState.IDLE;
        this.currentSubchannelIndex = 0;
        this.currentPick = null;
        this.triedAllSubchannels = false;
        this.subchannelStateCounts = {
          [channel_1.ConnectivityState.CONNECTING]: 0,
          [channel_1.ConnectivityState.IDLE]: 0,
          [channel_1.ConnectivityState.READY]: 0,
          [channel_1.ConnectivityState.SHUTDOWN]: 0,
          [channel_1.ConnectivityState.TRANSIENT_FAILURE]: 0
        };
        this.subchannelStateListener = (subchannel, previousState, newState) => {
          this.subchannelStateCounts[previousState] -= 1;
          this.subchannelStateCounts[newState] += 1;
          if (subchannel === this.subchannels[this.currentSubchannelIndex] && newState === channel_1.ConnectivityState.TRANSIENT_FAILURE) {
            this.startNextSubchannelConnecting();
          }
          if (newState === channel_1.ConnectivityState.READY) {
            this.pickSubchannel(subchannel);
            return;
          } else {
            if (this.triedAllSubchannels && this.subchannelStateCounts[channel_1.ConnectivityState.IDLE] === this.subchannels.length) {
              this.resetSubchannelList();
              this.updateState(channel_1.ConnectivityState.IDLE, new picker_1.QueuePicker(this));
              return;
            }
            if (this.currentPick === null) {
              if (this.triedAllSubchannels) {
                let newLBState;
                if (this.subchannelStateCounts[channel_1.ConnectivityState.CONNECTING] > 0) {
                  newLBState = channel_1.ConnectivityState.CONNECTING;
                } else if (this.subchannelStateCounts[channel_1.ConnectivityState.TRANSIENT_FAILURE] > 0) {
                  newLBState = channel_1.ConnectivityState.TRANSIENT_FAILURE;
                } else {
                  newLBState = channel_1.ConnectivityState.IDLE;
                }
                if (newLBState !== this.currentState) {
                  if (newLBState === channel_1.ConnectivityState.TRANSIENT_FAILURE) {
                    this.updateState(newLBState, new picker_1.UnavailablePicker());
                  } else {
                    this.updateState(newLBState, new picker_1.QueuePicker(this));
                  }
                }
              } else {
                this.updateState(channel_1.ConnectivityState.CONNECTING, new picker_1.QueuePicker(this));
              }
            }
          }
        };
        this.pickedSubchannelStateListener = (subchannel, previousState, newState) => {
          if (newState !== channel_1.ConnectivityState.READY) {
            this.currentPick = null;
            subchannel.unref();
            subchannel.removeConnectivityStateListener(this.pickedSubchannelStateListener);
            if (this.subchannels.length > 0) {
              if (this.triedAllSubchannels) {
                let newLBState;
                if (this.subchannelStateCounts[channel_1.ConnectivityState.CONNECTING] > 0) {
                  newLBState = channel_1.ConnectivityState.CONNECTING;
                } else if (this.subchannelStateCounts[channel_1.ConnectivityState.TRANSIENT_FAILURE] > 0) {
                  newLBState = channel_1.ConnectivityState.TRANSIENT_FAILURE;
                } else {
                  newLBState = channel_1.ConnectivityState.IDLE;
                }
                if (newLBState === channel_1.ConnectivityState.TRANSIENT_FAILURE) {
                  this.updateState(newLBState, new picker_1.UnavailablePicker());
                } else {
                  this.updateState(newLBState, new picker_1.QueuePicker(this));
                }
              } else {
                this.updateState(channel_1.ConnectivityState.CONNECTING, new picker_1.QueuePicker(this));
              }
            } else {
              this.updateState(channel_1.ConnectivityState.IDLE, new picker_1.QueuePicker(this));
            }
          }
        };
        this.connectionDelayTimeout = setTimeout(() => {
        }, 0);
        clearTimeout(this.connectionDelayTimeout);
      }
      startNextSubchannelConnecting() {
        if (this.triedAllSubchannels) {
          return;
        }
        for (const [index, subchannel] of this.subchannels.entries()) {
          if (index > this.currentSubchannelIndex) {
            const subchannelState = subchannel.getConnectivityState();
            if (subchannelState === channel_1.ConnectivityState.IDLE || subchannelState === channel_1.ConnectivityState.CONNECTING) {
              this.startConnecting(index);
              return;
            }
          }
        }
        this.triedAllSubchannels = true;
      }
      startConnecting(subchannelIndex) {
        clearTimeout(this.connectionDelayTimeout);
        this.currentSubchannelIndex = subchannelIndex;
        if (this.subchannels[subchannelIndex].getConnectivityState() === channel_1.ConnectivityState.IDLE) {
          trace("Start connecting to subchannel with address " + this.subchannels[subchannelIndex].getAddress());
          process.nextTick(() => {
            this.subchannels[subchannelIndex].startConnecting();
          });
        }
        this.connectionDelayTimeout = setTimeout(() => {
          this.startNextSubchannelConnecting();
        }, CONNECTION_DELAY_INTERVAL_MS);
      }
      pickSubchannel(subchannel) {
        trace("Pick subchannel with address " + subchannel.getAddress());
        if (this.currentPick !== null) {
          this.currentPick.unref();
          this.currentPick.removeConnectivityStateListener(this.pickedSubchannelStateListener);
        }
        this.currentPick = subchannel;
        this.updateState(channel_1.ConnectivityState.READY, new PickFirstPicker(subchannel));
        subchannel.addConnectivityStateListener(this.pickedSubchannelStateListener);
        subchannel.ref();
        this.resetSubchannelList();
        clearTimeout(this.connectionDelayTimeout);
      }
      updateState(newState, picker) {
        trace(channel_1.ConnectivityState[this.currentState] + " -> " + channel_1.ConnectivityState[newState]);
        this.currentState = newState;
        this.channelControlHelper.updateState(newState, picker);
      }
      resetSubchannelList() {
        for (const subchannel of this.subchannels) {
          subchannel.removeConnectivityStateListener(this.subchannelStateListener);
          subchannel.unref();
        }
        this.currentSubchannelIndex = 0;
        this.subchannelStateCounts = {
          [channel_1.ConnectivityState.CONNECTING]: 0,
          [channel_1.ConnectivityState.IDLE]: 0,
          [channel_1.ConnectivityState.READY]: 0,
          [channel_1.ConnectivityState.SHUTDOWN]: 0,
          [channel_1.ConnectivityState.TRANSIENT_FAILURE]: 0
        };
        this.subchannels = [];
        this.triedAllSubchannels = false;
      }
      connectToAddressList() {
        this.resetSubchannelList();
        trace("Connect to address list " + this.latestAddressList.map((address) => subchannel_1.subchannelAddressToString(address)));
        this.subchannels = this.latestAddressList.map((address) => this.channelControlHelper.createSubchannel(address, {}));
        for (const subchannel of this.subchannels) {
          subchannel.ref();
        }
        for (const subchannel of this.subchannels) {
          subchannel.addConnectivityStateListener(this.subchannelStateListener);
          this.subchannelStateCounts[subchannel.getConnectivityState()] += 1;
          if (subchannel.getConnectivityState() === channel_1.ConnectivityState.READY) {
            this.pickSubchannel(subchannel);
            this.resetSubchannelList();
            return;
          }
        }
        for (const [index, subchannel] of this.subchannels.entries()) {
          const subchannelState = subchannel.getConnectivityState();
          if (subchannelState === channel_1.ConnectivityState.IDLE || subchannelState === channel_1.ConnectivityState.CONNECTING) {
            this.startConnecting(index);
            if (this.currentPick === null) {
              this.updateState(channel_1.ConnectivityState.CONNECTING, new picker_1.QueuePicker(this));
            }
            return;
          }
        }
        if (this.currentPick === null) {
          this.updateState(channel_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker());
        }
      }
      updateAddressList(addressList, lbConfig) {
        if (this.subchannels.length === 0 || !this.latestAddressList.every((value, index) => addressList[index] === value)) {
          this.latestAddressList = addressList;
          this.connectToAddressList();
        }
      }
      exitIdle() {
        for (const subchannel of this.subchannels) {
          subchannel.startConnecting();
        }
        if (this.currentState === channel_1.ConnectivityState.IDLE) {
          if (this.latestAddressList.length > 0) {
            this.connectToAddressList();
          }
        }
        if (this.currentState === channel_1.ConnectivityState.IDLE || this.triedAllSubchannels) {
          this.channelControlHelper.requestReresolution();
        }
      }
      resetBackoff() {
      }
      destroy() {
        this.resetSubchannelList();
        if (this.currentPick !== null) {
          this.currentPick.unref();
          this.currentPick.removeConnectivityStateListener(this.pickedSubchannelStateListener);
        }
      }
      getTypeName() {
        return TYPE_NAME;
      }
    };
    exports2.PickFirstLoadBalancer = PickFirstLoadBalancer;
    function setup() {
      load_balancer_1.registerLoadBalancerType(TYPE_NAME, PickFirstLoadBalancer, PickFirstLoadBalancingConfig);
    }
    exports2.setup = setup;
  }
});

// node_modules/@grpc/grpc-js/build/src/load-balancer-round-robin.js
var require_load_balancer_round_robin = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/load-balancer-round-robin.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setup = exports2.RoundRobinLoadBalancer = void 0;
    var load_balancer_1 = require_load_balancer();
    var channel_1 = require_channel();
    var picker_1 = require_picker();
    var subchannel_1 = require_subchannel();
    var logging = require_logging();
    var constants_1 = require_constants();
    var TRACER_NAME = "round_robin";
    function trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    var TYPE_NAME = "round_robin";
    var RoundRobinLoadBalancingConfig = class {
      getLoadBalancerName() {
        return TYPE_NAME;
      }
      constructor() {
      }
      toJsonObject() {
        return {
          [TYPE_NAME]: {}
        };
      }
      static createFromJson(obj) {
        return new RoundRobinLoadBalancingConfig();
      }
    };
    var RoundRobinPicker = class {
      constructor(subchannelList, nextIndex = 0) {
        this.subchannelList = subchannelList;
        this.nextIndex = nextIndex;
      }
      pick(pickArgs) {
        const pickedSubchannel = this.subchannelList[this.nextIndex];
        this.nextIndex = (this.nextIndex + 1) % this.subchannelList.length;
        return {
          pickResultType: picker_1.PickResultType.COMPLETE,
          subchannel: pickedSubchannel,
          status: null,
          extraFilterFactory: null,
          onCallStarted: null
        };
      }
      peekNextSubchannel() {
        return this.subchannelList[this.nextIndex];
      }
    };
    var RoundRobinLoadBalancer = class {
      constructor(channelControlHelper) {
        this.channelControlHelper = channelControlHelper;
        this.subchannels = [];
        this.currentState = channel_1.ConnectivityState.IDLE;
        this.currentReadyPicker = null;
        this.subchannelStateCounts = {
          [channel_1.ConnectivityState.CONNECTING]: 0,
          [channel_1.ConnectivityState.IDLE]: 0,
          [channel_1.ConnectivityState.READY]: 0,
          [channel_1.ConnectivityState.SHUTDOWN]: 0,
          [channel_1.ConnectivityState.TRANSIENT_FAILURE]: 0
        };
        this.subchannelStateListener = (subchannel, previousState, newState) => {
          this.subchannelStateCounts[previousState] -= 1;
          this.subchannelStateCounts[newState] += 1;
          this.calculateAndUpdateState();
          if (newState === channel_1.ConnectivityState.TRANSIENT_FAILURE || newState === channel_1.ConnectivityState.IDLE) {
            this.channelControlHelper.requestReresolution();
            subchannel.startConnecting();
          }
        };
      }
      calculateAndUpdateState() {
        if (this.subchannelStateCounts[channel_1.ConnectivityState.READY] > 0) {
          const readySubchannels = this.subchannels.filter((subchannel) => subchannel.getConnectivityState() === channel_1.ConnectivityState.READY);
          let index = 0;
          if (this.currentReadyPicker !== null) {
            index = readySubchannels.indexOf(this.currentReadyPicker.peekNextSubchannel());
            if (index < 0) {
              index = 0;
            }
          }
          this.updateState(channel_1.ConnectivityState.READY, new RoundRobinPicker(readySubchannels, index));
        } else if (this.subchannelStateCounts[channel_1.ConnectivityState.CONNECTING] > 0) {
          this.updateState(channel_1.ConnectivityState.CONNECTING, new picker_1.QueuePicker(this));
        } else if (this.subchannelStateCounts[channel_1.ConnectivityState.TRANSIENT_FAILURE] > 0) {
          this.updateState(channel_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker());
        } else {
          this.updateState(channel_1.ConnectivityState.IDLE, new picker_1.QueuePicker(this));
        }
      }
      updateState(newState, picker) {
        trace(channel_1.ConnectivityState[this.currentState] + " -> " + channel_1.ConnectivityState[newState]);
        if (newState === channel_1.ConnectivityState.READY) {
          this.currentReadyPicker = picker;
        } else {
          this.currentReadyPicker = null;
        }
        this.currentState = newState;
        this.channelControlHelper.updateState(newState, picker);
      }
      resetSubchannelList() {
        for (const subchannel of this.subchannels) {
          subchannel.removeConnectivityStateListener(this.subchannelStateListener);
          subchannel.unref();
        }
        this.subchannelStateCounts = {
          [channel_1.ConnectivityState.CONNECTING]: 0,
          [channel_1.ConnectivityState.IDLE]: 0,
          [channel_1.ConnectivityState.READY]: 0,
          [channel_1.ConnectivityState.SHUTDOWN]: 0,
          [channel_1.ConnectivityState.TRANSIENT_FAILURE]: 0
        };
        this.subchannels = [];
      }
      updateAddressList(addressList, lbConfig) {
        this.resetSubchannelList();
        trace("Connect to address list " + addressList.map((address) => subchannel_1.subchannelAddressToString(address)));
        this.subchannels = addressList.map((address) => this.channelControlHelper.createSubchannel(address, {}));
        for (const subchannel of this.subchannels) {
          subchannel.ref();
          subchannel.addConnectivityStateListener(this.subchannelStateListener);
          const subchannelState = subchannel.getConnectivityState();
          this.subchannelStateCounts[subchannelState] += 1;
          if (subchannelState === channel_1.ConnectivityState.IDLE || subchannelState === channel_1.ConnectivityState.TRANSIENT_FAILURE) {
            subchannel.startConnecting();
          }
        }
        this.calculateAndUpdateState();
      }
      exitIdle() {
        for (const subchannel of this.subchannels) {
          subchannel.startConnecting();
        }
      }
      resetBackoff() {
      }
      destroy() {
        this.resetSubchannelList();
      }
      getTypeName() {
        return TYPE_NAME;
      }
    };
    exports2.RoundRobinLoadBalancer = RoundRobinLoadBalancer;
    function setup() {
      load_balancer_1.registerLoadBalancerType(TYPE_NAME, RoundRobinLoadBalancer, RoundRobinLoadBalancingConfig);
    }
    exports2.setup = setup;
  }
});

// node_modules/@grpc/grpc-js/build/src/load-balancer.js
var require_load_balancer = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/load-balancer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.registerAll = exports2.validateLoadBalancingConfig = exports2.getFirstUsableConfig = exports2.isLoadBalancerNameRegistered = exports2.createLoadBalancer = exports2.registerLoadBalancerType = void 0;
    var load_balancer_pick_first = require_load_balancer_pick_first();
    var load_balancer_round_robin = require_load_balancer_round_robin();
    var registeredLoadBalancerTypes = {};
    function registerLoadBalancerType(typeName, loadBalancerType, loadBalancingConfigType) {
      registeredLoadBalancerTypes[typeName] = {
        LoadBalancer: loadBalancerType,
        LoadBalancingConfig: loadBalancingConfigType
      };
    }
    exports2.registerLoadBalancerType = registerLoadBalancerType;
    function createLoadBalancer(config, channelControlHelper) {
      const typeName = config.getLoadBalancerName();
      if (typeName in registeredLoadBalancerTypes) {
        return new registeredLoadBalancerTypes[typeName].LoadBalancer(channelControlHelper);
      } else {
        return null;
      }
    }
    exports2.createLoadBalancer = createLoadBalancer;
    function isLoadBalancerNameRegistered(typeName) {
      return typeName in registeredLoadBalancerTypes;
    }
    exports2.isLoadBalancerNameRegistered = isLoadBalancerNameRegistered;
    function getFirstUsableConfig(configs, defaultPickFirst = false) {
      for (const config of configs) {
        if (config.getLoadBalancerName() in registeredLoadBalancerTypes) {
          return config;
        }
      }
      if (defaultPickFirst) {
        return new load_balancer_pick_first.PickFirstLoadBalancingConfig();
      } else {
        return null;
      }
    }
    exports2.getFirstUsableConfig = getFirstUsableConfig;
    function validateLoadBalancingConfig(obj) {
      if (!(obj !== null && typeof obj === "object")) {
        throw new Error("Load balancing config must be an object");
      }
      const keys = Object.keys(obj);
      if (keys.length !== 1) {
        throw new Error("Provided load balancing config has multiple conflicting entries");
      }
      const typeName = keys[0];
      if (typeName in registeredLoadBalancerTypes) {
        return registeredLoadBalancerTypes[typeName].LoadBalancingConfig.createFromJson(obj[typeName]);
      } else {
        throw new Error(`Unrecognized load balancing config name ${typeName}`);
      }
    }
    exports2.validateLoadBalancingConfig = validateLoadBalancingConfig;
    function registerAll() {
      load_balancer_pick_first.setup();
      load_balancer_round_robin.setup();
    }
    exports2.registerAll = registerAll;
  }
});

// node_modules/@grpc/grpc-js/build/src/load-balancer-child-handler.js
var require_load_balancer_child_handler = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/load-balancer-child-handler.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ChildLoadBalancerHandler = void 0;
    var load_balancer_1 = require_load_balancer();
    var channel_1 = require_channel();
    var TYPE_NAME = "child_load_balancer_helper";
    var ChildLoadBalancerHandler = class {
      constructor(channelControlHelper) {
        this.channelControlHelper = channelControlHelper;
        this.currentChild = null;
        this.pendingChild = null;
        this.ChildPolicyHelper = class {
          constructor(parent) {
            this.parent = parent;
            this.child = null;
          }
          createSubchannel(subchannelAddress, subchannelArgs) {
            return this.parent.channelControlHelper.createSubchannel(subchannelAddress, subchannelArgs);
          }
          updateState(connectivityState, picker) {
            var _a;
            if (this.calledByPendingChild()) {
              if (connectivityState !== channel_1.ConnectivityState.READY) {
                return;
              }
              (_a = this.parent.currentChild) === null || _a === void 0 ? void 0 : _a.destroy();
              this.parent.currentChild = this.parent.pendingChild;
              this.parent.pendingChild = null;
            } else if (!this.calledByCurrentChild()) {
              return;
            }
            this.parent.channelControlHelper.updateState(connectivityState, picker);
          }
          requestReresolution() {
            var _a;
            const latestChild = (_a = this.parent.pendingChild) !== null && _a !== void 0 ? _a : this.parent.currentChild;
            if (this.child === latestChild) {
              this.parent.channelControlHelper.requestReresolution();
            }
          }
          setChild(newChild) {
            this.child = newChild;
          }
          calledByPendingChild() {
            return this.child === this.parent.pendingChild;
          }
          calledByCurrentChild() {
            return this.child === this.parent.currentChild;
          }
        };
      }
      updateAddressList(addressList, lbConfig, attributes) {
        let childToUpdate;
        if (this.currentChild === null || this.currentChild.getTypeName() !== lbConfig.getLoadBalancerName()) {
          const newHelper = new this.ChildPolicyHelper(this);
          const newChild = load_balancer_1.createLoadBalancer(lbConfig, newHelper);
          newHelper.setChild(newChild);
          if (this.currentChild === null) {
            this.currentChild = newChild;
            childToUpdate = this.currentChild;
          } else {
            if (this.pendingChild) {
              this.pendingChild.destroy();
            }
            this.pendingChild = newChild;
            childToUpdate = this.pendingChild;
          }
        } else {
          if (this.pendingChild === null) {
            childToUpdate = this.currentChild;
          } else {
            childToUpdate = this.pendingChild;
          }
        }
        childToUpdate.updateAddressList(addressList, lbConfig, attributes);
      }
      exitIdle() {
        if (this.currentChild) {
          this.currentChild.resetBackoff();
          if (this.pendingChild) {
            this.pendingChild.resetBackoff();
          }
        }
      }
      resetBackoff() {
        if (this.currentChild) {
          this.currentChild.resetBackoff();
          if (this.pendingChild) {
            this.pendingChild.resetBackoff();
          }
        }
      }
      destroy() {
        if (this.currentChild) {
          this.currentChild.destroy();
          this.currentChild = null;
        }
        if (this.pendingChild) {
          this.pendingChild.destroy();
          this.pendingChild = null;
        }
      }
      getTypeName() {
        return TYPE_NAME;
      }
    };
    exports2.ChildLoadBalancerHandler = ChildLoadBalancerHandler;
  }
});

// node_modules/@grpc/grpc-js/build/src/resolving-load-balancer.js
var require_resolving_load_balancer = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/resolving-load-balancer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ResolvingLoadBalancer = void 0;
    var load_balancer_1 = require_load_balancer();
    var service_config_1 = require_service_config();
    var channel_1 = require_channel();
    var resolver_1 = require_resolver();
    var picker_1 = require_picker();
    var backoff_timeout_1 = require_backoff_timeout();
    var constants_1 = require_constants();
    var metadata_1 = require_metadata();
    var logging = require_logging();
    var constants_2 = require_constants();
    var uri_parser_1 = require_uri_parser();
    var load_balancer_child_handler_1 = require_load_balancer_child_handler();
    var TRACER_NAME = "resolving_load_balancer";
    function trace(text) {
      logging.trace(constants_2.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    function getDefaultConfigSelector(serviceConfig) {
      return function defaultConfigSelector(methodName, metadata) {
        var _a, _b;
        const splitName = methodName.split("/").filter((x) => x.length > 0);
        const service = (_a = splitName[0]) !== null && _a !== void 0 ? _a : "";
        const method = (_b = splitName[1]) !== null && _b !== void 0 ? _b : "";
        if (serviceConfig && serviceConfig.methodConfig) {
          for (const methodConfig of serviceConfig.methodConfig) {
            for (const name of methodConfig.name) {
              if (name.service === service && (name.method === void 0 || name.method === method)) {
                return {
                  methodConfig,
                  pickInformation: {},
                  status: constants_1.Status.OK
                };
              }
            }
          }
        }
        return {
          methodConfig: { name: [] },
          pickInformation: {},
          status: constants_1.Status.OK
        };
      };
    }
    var ResolvingLoadBalancer = class {
      constructor(target, channelControlHelper, channelOptions, onSuccessfulResolution, onFailedResolution) {
        this.target = target;
        this.channelControlHelper = channelControlHelper;
        this.channelOptions = channelOptions;
        this.onSuccessfulResolution = onSuccessfulResolution;
        this.onFailedResolution = onFailedResolution;
        this.latestChildState = channel_1.ConnectivityState.IDLE;
        this.latestChildPicker = new picker_1.QueuePicker(this);
        this.currentState = channel_1.ConnectivityState.IDLE;
        this.previousServiceConfig = null;
        this.continueResolving = false;
        if (channelOptions["grpc.service_config"]) {
          this.defaultServiceConfig = service_config_1.validateServiceConfig(JSON.parse(channelOptions["grpc.service_config"]));
        } else {
          this.defaultServiceConfig = {
            loadBalancingConfig: [],
            methodConfig: []
          };
        }
        this.updateState(channel_1.ConnectivityState.IDLE, new picker_1.QueuePicker(this));
        this.childLoadBalancer = new load_balancer_child_handler_1.ChildLoadBalancerHandler({
          createSubchannel: channelControlHelper.createSubchannel.bind(channelControlHelper),
          requestReresolution: () => {
            if (this.backoffTimeout.isRunning()) {
              this.continueResolving = true;
            } else {
              this.updateResolution();
            }
          },
          updateState: (newState, picker) => {
            this.latestChildState = newState;
            this.latestChildPicker = picker;
            this.updateState(newState, picker);
          }
        });
        this.innerResolver = resolver_1.createResolver(target, {
          onSuccessfulResolution: (addressList, serviceConfig, serviceConfigError, configSelector, attributes) => {
            var _a;
            let workingServiceConfig = null;
            if (serviceConfig === null) {
              if (serviceConfigError === null) {
                this.previousServiceConfig = null;
                workingServiceConfig = this.defaultServiceConfig;
              } else {
                if (this.previousServiceConfig === null) {
                  this.handleResolutionFailure(serviceConfigError);
                } else {
                  workingServiceConfig = this.previousServiceConfig;
                }
              }
            } else {
              workingServiceConfig = serviceConfig;
              this.previousServiceConfig = serviceConfig;
            }
            const workingConfigList = (_a = workingServiceConfig === null || workingServiceConfig === void 0 ? void 0 : workingServiceConfig.loadBalancingConfig) !== null && _a !== void 0 ? _a : [];
            const loadBalancingConfig = load_balancer_1.getFirstUsableConfig(workingConfigList, true);
            if (loadBalancingConfig === null) {
              this.handleResolutionFailure({
                code: constants_1.Status.UNAVAILABLE,
                details: "All load balancer options in service config are not compatible",
                metadata: new metadata_1.Metadata()
              });
              return;
            }
            this.childLoadBalancer.updateAddressList(addressList, loadBalancingConfig, attributes);
            const finalServiceConfig = workingServiceConfig !== null && workingServiceConfig !== void 0 ? workingServiceConfig : this.defaultServiceConfig;
            this.onSuccessfulResolution(configSelector !== null && configSelector !== void 0 ? configSelector : getDefaultConfigSelector(finalServiceConfig));
          },
          onError: (error) => {
            this.handleResolutionFailure(error);
          }
        }, channelOptions);
        this.backoffTimeout = new backoff_timeout_1.BackoffTimeout(() => {
          if (this.continueResolving) {
            this.updateResolution();
            this.continueResolving = false;
          } else {
            this.updateState(this.latestChildState, this.latestChildPicker);
          }
        });
        this.backoffTimeout.unref();
      }
      updateResolution() {
        this.innerResolver.updateResolution();
        if (this.currentState === channel_1.ConnectivityState.IDLE) {
          this.updateState(channel_1.ConnectivityState.CONNECTING, new picker_1.QueuePicker(this));
        }
      }
      updateState(connectivityState, picker) {
        trace(uri_parser_1.uriToString(this.target) + " " + channel_1.ConnectivityState[this.currentState] + " -> " + channel_1.ConnectivityState[connectivityState]);
        if (connectivityState === channel_1.ConnectivityState.IDLE) {
          picker = new picker_1.QueuePicker(this);
        }
        this.currentState = connectivityState;
        this.channelControlHelper.updateState(connectivityState, picker);
      }
      handleResolutionFailure(error) {
        if (this.latestChildState === channel_1.ConnectivityState.IDLE) {
          this.updateState(channel_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker(error));
          this.onFailedResolution(error);
        }
        this.backoffTimeout.runOnce();
      }
      exitIdle() {
        this.childLoadBalancer.exitIdle();
        if (this.currentState === channel_1.ConnectivityState.IDLE) {
          if (this.backoffTimeout.isRunning()) {
            this.continueResolving = true;
          } else {
            this.updateResolution();
          }
          this.updateState(channel_1.ConnectivityState.CONNECTING, new picker_1.QueuePicker(this));
        }
      }
      updateAddressList(addressList, lbConfig) {
        throw new Error("updateAddressList not supported on ResolvingLoadBalancer");
      }
      resetBackoff() {
        this.backoffTimeout.reset();
        this.childLoadBalancer.resetBackoff();
      }
      destroy() {
        this.childLoadBalancer.destroy();
        this.innerResolver.destroy();
        this.updateState(channel_1.ConnectivityState.SHUTDOWN, new picker_1.UnavailablePicker());
      }
      getTypeName() {
        return "resolving_load_balancer";
      }
    };
    exports2.ResolvingLoadBalancer = ResolvingLoadBalancer;
  }
});

// node_modules/@grpc/grpc-js/build/src/channel-options.js
var require_channel_options = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/channel-options.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.channelOptionsEqual = exports2.recognizedOptions = void 0;
    exports2.recognizedOptions = {
      "grpc.ssl_target_name_override": true,
      "grpc.primary_user_agent": true,
      "grpc.secondary_user_agent": true,
      "grpc.default_authority": true,
      "grpc.keepalive_time_ms": true,
      "grpc.keepalive_timeout_ms": true,
      "grpc.keepalive_permit_without_calls": true,
      "grpc.service_config": true,
      "grpc.max_concurrent_streams": true,
      "grpc.initial_reconnect_backoff_ms": true,
      "grpc.max_reconnect_backoff_ms": true,
      "grpc.use_local_subchannel_pool": true,
      "grpc.max_send_message_length": true,
      "grpc.max_receive_message_length": true,
      "grpc.enable_http_proxy": true,
      "grpc-node.max_session_memory": true
    };
    function channelOptionsEqual(options1, options2) {
      const keys1 = Object.keys(options1).sort();
      const keys2 = Object.keys(options2).sort();
      if (keys1.length !== keys2.length) {
        return false;
      }
      for (let i = 0; i < keys1.length; i += 1) {
        if (keys1[i] !== keys2[i]) {
          return false;
        }
        if (options1[keys1[i]] !== options2[keys2[i]]) {
          return false;
        }
      }
      return true;
    }
    exports2.channelOptionsEqual = channelOptionsEqual;
  }
});

// node_modules/@grpc/grpc-js/build/src/subchannel-pool.js
var require_subchannel_pool = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/subchannel-pool.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getSubchannelPool = exports2.SubchannelPool = void 0;
    var channel_options_1 = require_channel_options();
    var subchannel_1 = require_subchannel();
    var uri_parser_1 = require_uri_parser();
    var REF_CHECK_INTERVAL = 1e4;
    var SubchannelPool = class {
      constructor(global2) {
        this.global = global2;
        this.pool = Object.create(null);
        this.cleanupTimer = null;
      }
      unrefUnusedSubchannels() {
        let allSubchannelsUnrefed = true;
        for (const channelTarget in this.pool) {
          const subchannelObjArray = this.pool[channelTarget];
          const refedSubchannels = subchannelObjArray.filter((value) => !value.subchannel.unrefIfOneRef());
          if (refedSubchannels.length > 0) {
            allSubchannelsUnrefed = false;
          }
          this.pool[channelTarget] = refedSubchannels;
        }
        if (allSubchannelsUnrefed && this.cleanupTimer !== null) {
          clearInterval(this.cleanupTimer);
          this.cleanupTimer = null;
        }
      }
      ensureCleanupTask() {
        var _a, _b;
        if (this.global && this.cleanupTimer === null) {
          this.cleanupTimer = setInterval(() => {
            this.unrefUnusedSubchannels();
          }, REF_CHECK_INTERVAL);
          (_b = (_a = this.cleanupTimer).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
      }
      getOrCreateSubchannel(channelTargetUri, subchannelTarget, channelArguments, channelCredentials) {
        this.ensureCleanupTask();
        const channelTarget = uri_parser_1.uriToString(channelTargetUri);
        if (channelTarget in this.pool) {
          const subchannelObjArray = this.pool[channelTarget];
          for (const subchannelObj of subchannelObjArray) {
            if (subchannel_1.subchannelAddressEqual(subchannelTarget, subchannelObj.subchannelAddress) && channel_options_1.channelOptionsEqual(channelArguments, subchannelObj.channelArguments) && channelCredentials._equals(subchannelObj.channelCredentials)) {
              return subchannelObj.subchannel;
            }
          }
        }
        const subchannel = new subchannel_1.Subchannel(channelTargetUri, subchannelTarget, channelArguments, channelCredentials);
        if (!(channelTarget in this.pool)) {
          this.pool[channelTarget] = [];
        }
        this.pool[channelTarget].push({
          subchannelAddress: subchannelTarget,
          channelArguments,
          channelCredentials,
          subchannel
        });
        if (this.global) {
          subchannel.ref();
        }
        return subchannel;
      }
    };
    exports2.SubchannelPool = SubchannelPool;
    var globalSubchannelPool = new SubchannelPool(true);
    function getSubchannelPool(global2) {
      if (global2) {
        return globalSubchannelPool;
      } else {
        return new SubchannelPool(false);
      }
    }
    exports2.getSubchannelPool = getSubchannelPool;
  }
});

// node_modules/@grpc/grpc-js/build/src/filter.js
var require_filter = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/filter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BaseFilter = void 0;
    var BaseFilter = class {
      async sendMetadata(metadata) {
        return metadata;
      }
      receiveMetadata(metadata) {
        return metadata;
      }
      async sendMessage(message) {
        return message;
      }
      async receiveMessage(message) {
        return message;
      }
      receiveTrailers(status) {
        return status;
      }
    };
    exports2.BaseFilter = BaseFilter;
  }
});

// node_modules/@grpc/grpc-js/build/src/call-credentials-filter.js
var require_call_credentials_filter = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/call-credentials-filter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CallCredentialsFilterFactory = exports2.CallCredentialsFilter = void 0;
    var filter_1 = require_filter();
    var constants_1 = require_constants();
    var uri_parser_1 = require_uri_parser();
    var CallCredentialsFilter = class extends filter_1.BaseFilter {
      constructor(channel, stream) {
        var _a, _b;
        super();
        this.channel = channel;
        this.stream = stream;
        this.channel = channel;
        this.stream = stream;
        const splitPath = stream.getMethod().split("/");
        let serviceName = "";
        if (splitPath.length >= 2) {
          serviceName = splitPath[1];
        }
        const hostname = (_b = (_a = uri_parser_1.splitHostPort(stream.getHost())) === null || _a === void 0 ? void 0 : _a.host) !== null && _b !== void 0 ? _b : "localhost";
        this.serviceUrl = `https://${hostname}/${serviceName}`;
      }
      async sendMetadata(metadata) {
        const credentials = this.stream.getCredentials();
        const credsMetadata = credentials.generateMetadata({
          service_url: this.serviceUrl
        });
        const resultMetadata = await metadata;
        try {
          resultMetadata.merge(await credsMetadata);
        } catch (error) {
          this.stream.cancelWithStatus(constants_1.Status.UNAUTHENTICATED, `Failed to retrieve auth metadata with error: ${error.message}`);
          return Promise.reject("Failed to retrieve auth metadata");
        }
        if (resultMetadata.get("authorization").length > 1) {
          this.stream.cancelWithStatus(constants_1.Status.INTERNAL, '"authorization" metadata cannot have multiple values');
          return Promise.reject('"authorization" metadata cannot have multiple values');
        }
        return resultMetadata;
      }
    };
    exports2.CallCredentialsFilter = CallCredentialsFilter;
    var CallCredentialsFilterFactory = class {
      constructor(channel) {
        this.channel = channel;
        this.channel = channel;
      }
      createFilter(callStream) {
        return new CallCredentialsFilter(this.channel, callStream);
      }
    };
    exports2.CallCredentialsFilterFactory = CallCredentialsFilterFactory;
  }
});

// node_modules/@grpc/grpc-js/build/src/deadline-filter.js
var require_deadline_filter = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/deadline-filter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DeadlineFilterFactory = exports2.DeadlineFilter = void 0;
    var constants_1 = require_constants();
    var filter_1 = require_filter();
    var units = [
      ["m", 1],
      ["S", 1e3],
      ["M", 60 * 1e3],
      ["H", 60 * 60 * 1e3]
    ];
    function getDeadline(deadline) {
      const now = new Date().getTime();
      const timeoutMs = Math.max(deadline - now, 0);
      for (const [unit, factor] of units) {
        const amount = timeoutMs / factor;
        if (amount < 1e8) {
          return String(Math.ceil(amount)) + unit;
        }
      }
      throw new Error("Deadline is too far in the future");
    }
    var DeadlineFilter = class extends filter_1.BaseFilter {
      constructor(channel, callStream) {
        var _a, _b;
        super();
        this.channel = channel;
        this.callStream = callStream;
        this.timer = null;
        const callDeadline = callStream.getDeadline();
        if (callDeadline instanceof Date) {
          this.deadline = callDeadline.getTime();
        } else {
          this.deadline = callDeadline;
        }
        const now = new Date().getTime();
        let timeout = this.deadline - now;
        if (timeout <= 0) {
          process.nextTick(() => {
            callStream.cancelWithStatus(constants_1.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
          });
        } else if (this.deadline !== Infinity) {
          this.timer = setTimeout(() => {
            callStream.cancelWithStatus(constants_1.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
          }, timeout);
          (_b = (_a = this.timer).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
      }
      async sendMetadata(metadata) {
        if (this.deadline === Infinity) {
          return metadata;
        }
        const finalMetadata = await metadata;
        const timeoutString = getDeadline(this.deadline);
        finalMetadata.set("grpc-timeout", timeoutString);
        return finalMetadata;
      }
      receiveTrailers(status) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        return status;
      }
    };
    exports2.DeadlineFilter = DeadlineFilter;
    var DeadlineFilterFactory = class {
      constructor(channel) {
        this.channel = channel;
      }
      createFilter(callStream) {
        return new DeadlineFilter(this.channel, callStream);
      }
    };
    exports2.DeadlineFilterFactory = DeadlineFilterFactory;
  }
});

// node_modules/@grpc/grpc-js/build/src/compression-filter.js
var require_compression_filter = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/compression-filter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CompressionFilterFactory = exports2.CompressionFilter = void 0;
    var zlib = require("zlib");
    var filter_1 = require_filter();
    var CompressionHandler = class {
      async writeMessage(message, compress) {
        let messageBuffer = message;
        if (compress) {
          messageBuffer = await this.compressMessage(messageBuffer);
        }
        const output = Buffer.allocUnsafe(messageBuffer.length + 5);
        output.writeUInt8(compress ? 1 : 0, 0);
        output.writeUInt32BE(messageBuffer.length, 1);
        messageBuffer.copy(output, 5);
        return output;
      }
      async readMessage(data) {
        const compressed = data.readUInt8(0) === 1;
        let messageBuffer = data.slice(5);
        if (compressed) {
          messageBuffer = await this.decompressMessage(messageBuffer);
        }
        return messageBuffer;
      }
    };
    var IdentityHandler = class extends CompressionHandler {
      async compressMessage(message) {
        return message;
      }
      async writeMessage(message, compress) {
        const output = Buffer.allocUnsafe(message.length + 5);
        output.writeUInt8(0, 0);
        output.writeUInt32BE(message.length, 1);
        message.copy(output, 5);
        return output;
      }
      decompressMessage(message) {
        return Promise.reject(new Error('Received compressed message but "grpc-encoding" header was identity'));
      }
    };
    var DeflateHandler = class extends CompressionHandler {
      compressMessage(message) {
        return new Promise((resolve, reject) => {
          zlib.deflate(message, (err, output) => {
            if (err) {
              reject(err);
            } else {
              resolve(output);
            }
          });
        });
      }
      decompressMessage(message) {
        return new Promise((resolve, reject) => {
          zlib.inflate(message, (err, output) => {
            if (err) {
              reject(err);
            } else {
              resolve(output);
            }
          });
        });
      }
    };
    var GzipHandler = class extends CompressionHandler {
      compressMessage(message) {
        return new Promise((resolve, reject) => {
          zlib.gzip(message, (err, output) => {
            if (err) {
              reject(err);
            } else {
              resolve(output);
            }
          });
        });
      }
      decompressMessage(message) {
        return new Promise((resolve, reject) => {
          zlib.unzip(message, (err, output) => {
            if (err) {
              reject(err);
            } else {
              resolve(output);
            }
          });
        });
      }
    };
    var UnknownHandler = class extends CompressionHandler {
      constructor(compressionName) {
        super();
        this.compressionName = compressionName;
      }
      compressMessage(message) {
        return Promise.reject(new Error(`Received message compressed with unsupported compression method ${this.compressionName}`));
      }
      decompressMessage(message) {
        return Promise.reject(new Error(`Compression method not supported: ${this.compressionName}`));
      }
    };
    function getCompressionHandler(compressionName) {
      switch (compressionName) {
        case "identity":
          return new IdentityHandler();
        case "deflate":
          return new DeflateHandler();
        case "gzip":
          return new GzipHandler();
        default:
          return new UnknownHandler(compressionName);
      }
    }
    var CompressionFilter = class extends filter_1.BaseFilter {
      constructor() {
        super(...arguments);
        this.sendCompression = new IdentityHandler();
        this.receiveCompression = new IdentityHandler();
      }
      async sendMetadata(metadata) {
        const headers = await metadata;
        headers.set("grpc-accept-encoding", "identity,deflate,gzip");
        headers.set("accept-encoding", "identity");
        return headers;
      }
      receiveMetadata(metadata) {
        const receiveEncoding = metadata.get("grpc-encoding");
        if (receiveEncoding.length > 0) {
          const encoding = receiveEncoding[0];
          if (typeof encoding === "string") {
            this.receiveCompression = getCompressionHandler(encoding);
          }
        }
        metadata.remove("grpc-encoding");
        metadata.remove("grpc-accept-encoding");
        return metadata;
      }
      async sendMessage(message) {
        const resolvedMessage = await message;
        const compress = resolvedMessage.flags === void 0 ? false : (resolvedMessage.flags & 2) === 0;
        return {
          message: await this.sendCompression.writeMessage(resolvedMessage.message, compress),
          flags: resolvedMessage.flags
        };
      }
      async receiveMessage(message) {
        return this.receiveCompression.readMessage(await message);
      }
    };
    exports2.CompressionFilter = CompressionFilter;
    var CompressionFilterFactory = class {
      constructor(channel) {
        this.channel = channel;
      }
      createFilter(callStream) {
        return new CompressionFilter();
      }
    };
    exports2.CompressionFilterFactory = CompressionFilterFactory;
  }
});

// node_modules/@grpc/grpc-js/build/src/max-message-size-filter.js
var require_max_message_size_filter = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/max-message-size-filter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MaxMessageSizeFilterFactory = exports2.MaxMessageSizeFilter = void 0;
    var filter_1 = require_filter();
    var constants_1 = require_constants();
    var MaxMessageSizeFilter = class extends filter_1.BaseFilter {
      constructor(options, callStream) {
        super();
        this.options = options;
        this.callStream = callStream;
        this.maxSendMessageSize = constants_1.DEFAULT_MAX_SEND_MESSAGE_LENGTH;
        this.maxReceiveMessageSize = constants_1.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH;
        if ("grpc.max_send_message_length" in options) {
          this.maxSendMessageSize = options["grpc.max_send_message_length"];
        }
        if ("grpc.max_receive_message_length" in options) {
          this.maxReceiveMessageSize = options["grpc.max_receive_message_length"];
        }
      }
      async sendMessage(message) {
        if (this.maxSendMessageSize === -1) {
          return message;
        } else {
          const concreteMessage = await message;
          if (concreteMessage.message.length > this.maxSendMessageSize) {
            this.callStream.cancelWithStatus(constants_1.Status.RESOURCE_EXHAUSTED, `Sent message larger than max (${concreteMessage.message.length} vs. ${this.maxSendMessageSize})`);
            return Promise.reject("Message too large");
          } else {
            return concreteMessage;
          }
        }
      }
      async receiveMessage(message) {
        if (this.maxReceiveMessageSize === -1) {
          return message;
        } else {
          const concreteMessage = await message;
          if (concreteMessage.length > this.maxReceiveMessageSize) {
            this.callStream.cancelWithStatus(constants_1.Status.RESOURCE_EXHAUSTED, `Received message larger than max (${concreteMessage.length} vs. ${this.maxReceiveMessageSize})`);
            return Promise.reject("Message too large");
          } else {
            return concreteMessage;
          }
        }
      }
    };
    exports2.MaxMessageSizeFilter = MaxMessageSizeFilter;
    var MaxMessageSizeFilterFactory = class {
      constructor(options) {
        this.options = options;
      }
      createFilter(callStream) {
        return new MaxMessageSizeFilter(this.options, callStream);
      }
    };
    exports2.MaxMessageSizeFilterFactory = MaxMessageSizeFilterFactory;
  }
});

// node_modules/@grpc/grpc-js/build/src/channel.js
var require_channel = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/channel.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ChannelImplementation = exports2.ConnectivityState = void 0;
    var call_stream_1 = require_call_stream();
    var channel_credentials_1 = require_channel_credentials();
    var resolving_load_balancer_1 = require_resolving_load_balancer();
    var subchannel_pool_1 = require_subchannel_pool();
    var picker_1 = require_picker();
    var constants_1 = require_constants();
    var filter_stack_1 = require_filter_stack();
    var call_credentials_filter_1 = require_call_credentials_filter();
    var deadline_filter_1 = require_deadline_filter();
    var compression_filter_1 = require_compression_filter();
    var resolver_1 = require_resolver();
    var logging_1 = require_logging();
    var max_message_size_filter_1 = require_max_message_size_filter();
    var http_proxy_1 = require_http_proxy();
    var uri_parser_1 = require_uri_parser();
    var ConnectivityState;
    (function(ConnectivityState2) {
      ConnectivityState2[ConnectivityState2["IDLE"] = 0] = "IDLE";
      ConnectivityState2[ConnectivityState2["CONNECTING"] = 1] = "CONNECTING";
      ConnectivityState2[ConnectivityState2["READY"] = 2] = "READY";
      ConnectivityState2[ConnectivityState2["TRANSIENT_FAILURE"] = 3] = "TRANSIENT_FAILURE";
      ConnectivityState2[ConnectivityState2["SHUTDOWN"] = 4] = "SHUTDOWN";
    })(ConnectivityState = exports2.ConnectivityState || (exports2.ConnectivityState = {}));
    var MAX_TIMEOUT_TIME = 2147483647;
    var nextCallNumber = 0;
    function getNewCallNumber() {
      const callNumber = nextCallNumber;
      nextCallNumber += 1;
      if (nextCallNumber >= Number.MAX_SAFE_INTEGER) {
        nextCallNumber = 0;
      }
      return callNumber;
    }
    var ChannelImplementation = class {
      constructor(target, credentials, options) {
        var _a, _b, _c;
        this.credentials = credentials;
        this.options = options;
        this.connectivityState = ConnectivityState.IDLE;
        this.currentPicker = new picker_1.UnavailablePicker();
        this.configSelectionQueue = [];
        this.pickQueue = [];
        this.connectivityStateWatchers = [];
        this.configSelector = null;
        if (typeof target !== "string") {
          throw new TypeError("Channel target must be a string");
        }
        if (!(credentials instanceof channel_credentials_1.ChannelCredentials)) {
          throw new TypeError("Channel credentials must be a ChannelCredentials object");
        }
        if (options) {
          if (typeof options !== "object" || !Object.values(options).every((value) => typeof value === "string" || typeof value === "number" || typeof value === "undefined")) {
            throw new TypeError("Channel options must be an object with string or number values");
          }
        }
        const originalTargetUri = uri_parser_1.parseUri(target);
        if (originalTargetUri === null) {
          throw new Error(`Could not parse target name "${target}"`);
        }
        const defaultSchemeMapResult = resolver_1.mapUriDefaultScheme(originalTargetUri);
        if (defaultSchemeMapResult === null) {
          throw new Error(`Could not find a default scheme for target name "${target}"`);
        }
        this.callRefTimer = setInterval(() => {
        }, MAX_TIMEOUT_TIME);
        (_b = (_a = this.callRefTimer).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
        if (this.options["grpc.default_authority"]) {
          this.defaultAuthority = this.options["grpc.default_authority"];
        } else {
          this.defaultAuthority = resolver_1.getDefaultAuthority(defaultSchemeMapResult);
        }
        const proxyMapResult = http_proxy_1.mapProxyName(defaultSchemeMapResult, options);
        this.target = proxyMapResult.target;
        this.options = Object.assign({}, this.options, proxyMapResult.extraOptions);
        this.subchannelPool = subchannel_pool_1.getSubchannelPool(((_c = options["grpc.use_local_subchannel_pool"]) !== null && _c !== void 0 ? _c : 0) === 0);
        const channelControlHelper = {
          createSubchannel: (subchannelAddress, subchannelArgs) => {
            return this.subchannelPool.getOrCreateSubchannel(this.target, subchannelAddress, Object.assign({}, this.options, subchannelArgs), this.credentials);
          },
          updateState: (connectivityState, picker) => {
            this.currentPicker = picker;
            const queueCopy = this.pickQueue.slice();
            this.pickQueue = [];
            this.callRefTimerUnref();
            for (const { callStream, callMetadata, callConfig } of queueCopy) {
              this.tryPick(callStream, callMetadata, callConfig);
            }
            this.updateState(connectivityState);
          },
          requestReresolution: () => {
            throw new Error("Resolving load balancer should never call requestReresolution");
          }
        };
        this.resolvingLoadBalancer = new resolving_load_balancer_1.ResolvingLoadBalancer(this.target, channelControlHelper, options, (configSelector) => {
          this.configSelector = configSelector;
          process.nextTick(() => {
            const localQueue = this.configSelectionQueue;
            this.configSelectionQueue = [];
            this.callRefTimerUnref();
            for (const { callStream, callMetadata } of localQueue) {
              this.tryGetConfig(callStream, callMetadata);
            }
            this.configSelectionQueue = [];
          });
        }, (status) => {
          if (this.configSelectionQueue.length > 0) {
            logging_1.trace(constants_1.LogVerbosity.DEBUG, "channel", "Name resolution failed for target " + uri_parser_1.uriToString(this.target) + " with calls queued for config selection");
          }
          const localQueue = this.configSelectionQueue;
          this.configSelectionQueue = [];
          this.callRefTimerUnref();
          for (const { callStream, callMetadata } of localQueue) {
            if (callMetadata.getOptions().waitForReady) {
              this.callRefTimerRef();
              this.configSelectionQueue.push({ callStream, callMetadata });
            } else {
              callStream.cancelWithStatus(status.code, status.details);
            }
          }
        });
        this.filterStackFactory = new filter_stack_1.FilterStackFactory([
          new call_credentials_filter_1.CallCredentialsFilterFactory(this),
          new deadline_filter_1.DeadlineFilterFactory(this),
          new max_message_size_filter_1.MaxMessageSizeFilterFactory(this.options),
          new compression_filter_1.CompressionFilterFactory(this)
        ]);
      }
      callRefTimerRef() {
        var _a, _b, _c, _d;
        if (!((_b = (_a = this.callRefTimer).hasRef) === null || _b === void 0 ? void 0 : _b.call(_a))) {
          logging_1.trace(constants_1.LogVerbosity.DEBUG, "channel", "callRefTimer.ref | configSelectionQueue.length=" + this.configSelectionQueue.length + " pickQueue.length=" + this.pickQueue.length);
          (_d = (_c = this.callRefTimer).ref) === null || _d === void 0 ? void 0 : _d.call(_c);
        }
      }
      callRefTimerUnref() {
        var _a, _b;
        if (!this.callRefTimer.hasRef || this.callRefTimer.hasRef()) {
          logging_1.trace(constants_1.LogVerbosity.DEBUG, "channel", "callRefTimer.unref | configSelectionQueue.length=" + this.configSelectionQueue.length + " pickQueue.length=" + this.pickQueue.length);
          (_b = (_a = this.callRefTimer).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
      }
      pushPick(callStream, callMetadata, callConfig) {
        this.pickQueue.push({ callStream, callMetadata, callConfig });
        this.callRefTimerRef();
      }
      tryPick(callStream, callMetadata, callConfig) {
        var _a, _b, _c;
        const pickResult = this.currentPicker.pick({ metadata: callMetadata, extraPickInfo: callConfig.pickInformation });
        logging_1.trace(constants_1.LogVerbosity.DEBUG, "channel", "Pick result: " + picker_1.PickResultType[pickResult.pickResultType] + " subchannel: " + ((_a = pickResult.subchannel) === null || _a === void 0 ? void 0 : _a.getAddress()) + " status: " + ((_b = pickResult.status) === null || _b === void 0 ? void 0 : _b.code) + " " + ((_c = pickResult.status) === null || _c === void 0 ? void 0 : _c.details));
        switch (pickResult.pickResultType) {
          case picker_1.PickResultType.COMPLETE:
            if (pickResult.subchannel === null) {
              callStream.cancelWithStatus(constants_1.Status.UNAVAILABLE, "Request dropped by load balancing policy");
            } else {
              if (pickResult.subchannel.getConnectivityState() !== ConnectivityState.READY) {
                logging_1.log(constants_1.LogVerbosity.ERROR, "Error: COMPLETE pick result subchannel " + pickResult.subchannel.getAddress() + " has state " + ConnectivityState[pickResult.subchannel.getConnectivityState()]);
                this.pushPick(callStream, callMetadata, callConfig);
                break;
              }
              callStream.filterStack.sendMetadata(Promise.resolve(callMetadata.clone())).then((finalMetadata) => {
                var _a2, _b2, _c2;
                const subchannelState = pickResult.subchannel.getConnectivityState();
                if (subchannelState === ConnectivityState.READY) {
                  try {
                    pickResult.subchannel.startCallStream(finalMetadata, callStream, (_a2 = pickResult.extraFilterFactory) !== null && _a2 !== void 0 ? _a2 : void 0);
                    (_b2 = callConfig.onCommitted) === null || _b2 === void 0 ? void 0 : _b2.call(callConfig);
                    (_c2 = pickResult.onCallStarted) === null || _c2 === void 0 ? void 0 : _c2.call(pickResult);
                  } catch (error) {
                    if (error.code === "ERR_HTTP2_GOAWAY_SESSION") {
                      logging_1.trace(constants_1.LogVerbosity.INFO, "channel", "Failed to start call on picked subchannel " + pickResult.subchannel.getAddress() + " with error " + error.message + ". Retrying pick");
                      this.tryPick(callStream, callMetadata, callConfig);
                    } else {
                      logging_1.trace(constants_1.LogVerbosity.INFO, "channel", "Failed to start call on picked subchanel " + pickResult.subchannel.getAddress() + " with error " + error.message + ". Ending call");
                      callStream.cancelWithStatus(constants_1.Status.INTERNAL, `Failed to start HTTP/2 stream with error: ${error.message}`);
                    }
                  }
                } else {
                  logging_1.trace(constants_1.LogVerbosity.INFO, "channel", "Picked subchannel " + pickResult.subchannel.getAddress() + " has state " + ConnectivityState[subchannelState] + " after metadata filters. Retrying pick");
                  this.tryPick(callStream, callMetadata, callConfig);
                }
              }, (error) => {
                callStream.cancelWithStatus(typeof error.code === "number" ? error.code : constants_1.Status.UNKNOWN, `Getting metadata from plugin failed with error: ${error.message}`);
              });
            }
            break;
          case picker_1.PickResultType.QUEUE:
            this.pushPick(callStream, callMetadata, callConfig);
            break;
          case picker_1.PickResultType.TRANSIENT_FAILURE:
            if (callMetadata.getOptions().waitForReady) {
              this.pushPick(callStream, callMetadata, callConfig);
            } else {
              callStream.cancelWithStatus(pickResult.status.code, pickResult.status.details);
            }
            break;
          case picker_1.PickResultType.DROP:
            callStream.cancelWithStatus(pickResult.status.code, pickResult.status.details);
            break;
          default:
            throw new Error(`Invalid state: unknown pickResultType ${pickResult.pickResultType}`);
        }
      }
      removeConnectivityStateWatcher(watcherObject) {
        const watcherIndex = this.connectivityStateWatchers.findIndex((value) => value === watcherObject);
        if (watcherIndex >= 0) {
          this.connectivityStateWatchers.splice(watcherIndex, 1);
        }
      }
      updateState(newState) {
        logging_1.trace(constants_1.LogVerbosity.DEBUG, "connectivity_state", uri_parser_1.uriToString(this.target) + " " + ConnectivityState[this.connectivityState] + " -> " + ConnectivityState[newState]);
        this.connectivityState = newState;
        const watchersCopy = this.connectivityStateWatchers.slice();
        for (const watcherObject of watchersCopy) {
          if (newState !== watcherObject.currentState) {
            if (watcherObject.timer) {
              clearTimeout(watcherObject.timer);
            }
            this.removeConnectivityStateWatcher(watcherObject);
            watcherObject.callback();
          }
        }
      }
      tryGetConfig(stream, metadata) {
        if (this.configSelector === null) {
          this.resolvingLoadBalancer.exitIdle();
          this.configSelectionQueue.push({
            callStream: stream,
            callMetadata: metadata
          });
          this.callRefTimerRef();
        } else {
          const callConfig = this.configSelector(stream.getMethod(), metadata);
          if (callConfig.status === constants_1.Status.OK) {
            this.tryPick(stream, metadata, callConfig);
          } else {
            stream.cancelWithStatus(callConfig.status, "Failed to route call to method " + stream.getMethod());
          }
        }
      }
      _startCallStream(stream, metadata) {
        this.tryGetConfig(stream, metadata.clone());
      }
      close() {
        this.resolvingLoadBalancer.destroy();
        this.updateState(ConnectivityState.SHUTDOWN);
        clearInterval(this.callRefTimer);
        this.subchannelPool.unrefUnusedSubchannels();
      }
      getTarget() {
        return uri_parser_1.uriToString(this.target);
      }
      getConnectivityState(tryToConnect) {
        const connectivityState = this.connectivityState;
        if (tryToConnect) {
          this.resolvingLoadBalancer.exitIdle();
        }
        return connectivityState;
      }
      watchConnectivityState(currentState, deadline, callback) {
        if (this.connectivityState === ConnectivityState.SHUTDOWN) {
          throw new Error("Channel has been shut down");
        }
        let timer = null;
        if (deadline !== Infinity) {
          const deadlineDate = deadline instanceof Date ? deadline : new Date(deadline);
          const now = new Date();
          if (deadline === -Infinity || deadlineDate <= now) {
            process.nextTick(callback, new Error("Deadline passed without connectivity state change"));
            return;
          }
          timer = setTimeout(() => {
            this.removeConnectivityStateWatcher(watcherObject);
            callback(new Error("Deadline passed without connectivity state change"));
          }, deadlineDate.getTime() - now.getTime());
        }
        const watcherObject = {
          currentState,
          callback,
          timer
        };
        this.connectivityStateWatchers.push(watcherObject);
      }
      createCall(method, deadline, host, parentCall, propagateFlags) {
        if (typeof method !== "string") {
          throw new TypeError("Channel#createCall: method must be a string");
        }
        if (!(typeof deadline === "number" || deadline instanceof Date)) {
          throw new TypeError("Channel#createCall: deadline must be a number or Date");
        }
        if (this.connectivityState === ConnectivityState.SHUTDOWN) {
          throw new Error("Channel has been shut down");
        }
        const callNumber = getNewCallNumber();
        logging_1.trace(constants_1.LogVerbosity.DEBUG, "channel", uri_parser_1.uriToString(this.target) + " createCall [" + callNumber + '] method="' + method + '", deadline=' + deadline);
        const finalOptions = {
          deadline,
          flags: propagateFlags !== null && propagateFlags !== void 0 ? propagateFlags : constants_1.Propagate.DEFAULTS,
          host: host !== null && host !== void 0 ? host : this.defaultAuthority,
          parentCall
        };
        const stream = new call_stream_1.Http2CallStream(method, this, finalOptions, this.filterStackFactory, this.credentials._getCallCredentials(), callNumber);
        return stream;
      }
    };
    exports2.ChannelImplementation = ChannelImplementation;
  }
});

// node_modules/@grpc/grpc-js/build/src/call.js
var require_call = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/call.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ClientDuplexStreamImpl = exports2.ClientWritableStreamImpl = exports2.ClientReadableStreamImpl = exports2.ClientUnaryCallImpl = exports2.callErrorFromStatus = void 0;
    var events_1 = require("events");
    var stream_1 = require("stream");
    var constants_1 = require_constants();
    function callErrorFromStatus(status) {
      const message = `${status.code} ${constants_1.Status[status.code]}: ${status.details}`;
      return Object.assign(new Error(message), status);
    }
    exports2.callErrorFromStatus = callErrorFromStatus;
    var ClientUnaryCallImpl = class extends events_1.EventEmitter {
      constructor() {
        super();
      }
      cancel() {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.cancelWithStatus(constants_1.Status.CANCELLED, "Cancelled on client");
      }
      getPeer() {
        var _a, _b;
        return (_b = (_a = this.call) === null || _a === void 0 ? void 0 : _a.getPeer()) !== null && _b !== void 0 ? _b : "unknown";
      }
    };
    exports2.ClientUnaryCallImpl = ClientUnaryCallImpl;
    var ClientReadableStreamImpl = class extends stream_1.Readable {
      constructor(deserialize) {
        super({ objectMode: true });
        this.deserialize = deserialize;
      }
      cancel() {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.cancelWithStatus(constants_1.Status.CANCELLED, "Cancelled on client");
      }
      getPeer() {
        var _a, _b;
        return (_b = (_a = this.call) === null || _a === void 0 ? void 0 : _a.getPeer()) !== null && _b !== void 0 ? _b : "unknown";
      }
      _read(_size) {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.startRead();
      }
    };
    exports2.ClientReadableStreamImpl = ClientReadableStreamImpl;
    var ClientWritableStreamImpl = class extends stream_1.Writable {
      constructor(serialize) {
        super({ objectMode: true });
        this.serialize = serialize;
      }
      cancel() {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.cancelWithStatus(constants_1.Status.CANCELLED, "Cancelled on client");
      }
      getPeer() {
        var _a, _b;
        return (_b = (_a = this.call) === null || _a === void 0 ? void 0 : _a.getPeer()) !== null && _b !== void 0 ? _b : "unknown";
      }
      _write(chunk, encoding, cb) {
        var _a;
        const context = {
          callback: cb
        };
        const flags = Number(encoding);
        if (!Number.isNaN(flags)) {
          context.flags = flags;
        }
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.sendMessageWithContext(context, chunk);
      }
      _final(cb) {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.halfClose();
        cb();
      }
    };
    exports2.ClientWritableStreamImpl = ClientWritableStreamImpl;
    var ClientDuplexStreamImpl = class extends stream_1.Duplex {
      constructor(serialize, deserialize) {
        super({ objectMode: true });
        this.serialize = serialize;
        this.deserialize = deserialize;
      }
      cancel() {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.cancelWithStatus(constants_1.Status.CANCELLED, "Cancelled on client");
      }
      getPeer() {
        var _a, _b;
        return (_b = (_a = this.call) === null || _a === void 0 ? void 0 : _a.getPeer()) !== null && _b !== void 0 ? _b : "unknown";
      }
      _read(_size) {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.startRead();
      }
      _write(chunk, encoding, cb) {
        var _a;
        const context = {
          callback: cb
        };
        const flags = Number(encoding);
        if (!Number.isNaN(flags)) {
          context.flags = flags;
        }
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.sendMessageWithContext(context, chunk);
      }
      _final(cb) {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.halfClose();
        cb();
      }
    };
    exports2.ClientDuplexStreamImpl = ClientDuplexStreamImpl;
  }
});

// node_modules/@grpc/grpc-js/build/src/client-interceptors.js
var require_client_interceptors = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/client-interceptors.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getInterceptingCall = exports2.InterceptingCall = exports2.RequesterBuilder = exports2.ListenerBuilder = exports2.InterceptorConfigurationError = void 0;
    var metadata_1 = require_metadata();
    var call_stream_1 = require_call_stream();
    var constants_1 = require_constants();
    var InterceptorConfigurationError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "InterceptorConfigurationError";
        Error.captureStackTrace(this, InterceptorConfigurationError);
      }
    };
    exports2.InterceptorConfigurationError = InterceptorConfigurationError;
    var ListenerBuilder = class {
      constructor() {
        this.metadata = void 0;
        this.message = void 0;
        this.status = void 0;
      }
      withOnReceiveMetadata(onReceiveMetadata) {
        this.metadata = onReceiveMetadata;
        return this;
      }
      withOnReceiveMessage(onReceiveMessage) {
        this.message = onReceiveMessage;
        return this;
      }
      withOnReceiveStatus(onReceiveStatus) {
        this.status = onReceiveStatus;
        return this;
      }
      build() {
        return {
          onReceiveMetadata: this.metadata,
          onReceiveMessage: this.message,
          onReceiveStatus: this.status
        };
      }
    };
    exports2.ListenerBuilder = ListenerBuilder;
    var RequesterBuilder = class {
      constructor() {
        this.start = void 0;
        this.message = void 0;
        this.halfClose = void 0;
        this.cancel = void 0;
      }
      withStart(start) {
        this.start = start;
        return this;
      }
      withSendMessage(sendMessage) {
        this.message = sendMessage;
        return this;
      }
      withHalfClose(halfClose) {
        this.halfClose = halfClose;
        return this;
      }
      withCancel(cancel) {
        this.cancel = cancel;
        return this;
      }
      build() {
        return {
          start: this.start,
          sendMessage: this.message,
          halfClose: this.halfClose,
          cancel: this.cancel
        };
      }
    };
    exports2.RequesterBuilder = RequesterBuilder;
    var defaultListener = {
      onReceiveMetadata: (metadata, next) => {
        next(metadata);
      },
      onReceiveMessage: (message, next) => {
        next(message);
      },
      onReceiveStatus: (status, next) => {
        next(status);
      }
    };
    var defaultRequester = {
      start: (metadata, listener, next) => {
        next(metadata, listener);
      },
      sendMessage: (message, next) => {
        next(message);
      },
      halfClose: (next) => {
        next();
      },
      cancel: (next) => {
        next();
      }
    };
    var InterceptingCall = class {
      constructor(nextCall, requester) {
        var _a, _b, _c, _d;
        this.nextCall = nextCall;
        this.processingMessage = false;
        this.pendingHalfClose = false;
        if (requester) {
          this.requester = {
            start: (_a = requester.start) !== null && _a !== void 0 ? _a : defaultRequester.start,
            sendMessage: (_b = requester.sendMessage) !== null && _b !== void 0 ? _b : defaultRequester.sendMessage,
            halfClose: (_c = requester.halfClose) !== null && _c !== void 0 ? _c : defaultRequester.halfClose,
            cancel: (_d = requester.cancel) !== null && _d !== void 0 ? _d : defaultRequester.cancel
          };
        } else {
          this.requester = defaultRequester;
        }
      }
      cancelWithStatus(status, details) {
        this.requester.cancel(() => {
          this.nextCall.cancelWithStatus(status, details);
        });
      }
      getPeer() {
        return this.nextCall.getPeer();
      }
      start(metadata, interceptingListener) {
        var _a, _b, _c, _d, _e, _f;
        const fullInterceptingListener = {
          onReceiveMetadata: (_b = (_a = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveMetadata) === null || _a === void 0 ? void 0 : _a.bind(interceptingListener)) !== null && _b !== void 0 ? _b : (metadata2) => {
          },
          onReceiveMessage: (_d = (_c = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveMessage) === null || _c === void 0 ? void 0 : _c.bind(interceptingListener)) !== null && _d !== void 0 ? _d : (message) => {
          },
          onReceiveStatus: (_f = (_e = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveStatus) === null || _e === void 0 ? void 0 : _e.bind(interceptingListener)) !== null && _f !== void 0 ? _f : (status) => {
          }
        };
        this.requester.start(metadata, fullInterceptingListener, (md, listener) => {
          var _a2, _b2, _c2;
          let finalInterceptingListener;
          if (call_stream_1.isInterceptingListener(listener)) {
            finalInterceptingListener = listener;
          } else {
            const fullListener = {
              onReceiveMetadata: (_a2 = listener.onReceiveMetadata) !== null && _a2 !== void 0 ? _a2 : defaultListener.onReceiveMetadata,
              onReceiveMessage: (_b2 = listener.onReceiveMessage) !== null && _b2 !== void 0 ? _b2 : defaultListener.onReceiveMessage,
              onReceiveStatus: (_c2 = listener.onReceiveStatus) !== null && _c2 !== void 0 ? _c2 : defaultListener.onReceiveStatus
            };
            finalInterceptingListener = new call_stream_1.InterceptingListenerImpl(fullListener, fullInterceptingListener);
          }
          this.nextCall.start(md, finalInterceptingListener);
        });
      }
      sendMessageWithContext(context, message) {
        this.processingMessage = true;
        this.requester.sendMessage(message, (finalMessage) => {
          this.processingMessage = false;
          this.nextCall.sendMessageWithContext(context, finalMessage);
          if (this.pendingHalfClose) {
            this.nextCall.halfClose();
          }
        });
      }
      sendMessage(message) {
        this.sendMessageWithContext({}, message);
      }
      startRead() {
        this.nextCall.startRead();
      }
      halfClose() {
        this.requester.halfClose(() => {
          if (this.processingMessage) {
            this.pendingHalfClose = true;
          } else {
            this.nextCall.halfClose();
          }
        });
      }
      setCredentials(credentials) {
        this.nextCall.setCredentials(credentials);
      }
    };
    exports2.InterceptingCall = InterceptingCall;
    function getCall(channel, path2, options) {
      var _a, _b;
      const deadline = (_a = options.deadline) !== null && _a !== void 0 ? _a : Infinity;
      const host = options.host;
      const parent = (_b = options.parent) !== null && _b !== void 0 ? _b : null;
      const propagateFlags = options.propagate_flags;
      const credentials = options.credentials;
      const call = channel.createCall(path2, deadline, host, parent, propagateFlags);
      if (credentials) {
        call.setCredentials(credentials);
      }
      return call;
    }
    var BaseInterceptingCall = class {
      constructor(call, methodDefinition) {
        this.call = call;
        this.methodDefinition = methodDefinition;
      }
      cancelWithStatus(status, details) {
        this.call.cancelWithStatus(status, details);
      }
      getPeer() {
        return this.call.getPeer();
      }
      setCredentials(credentials) {
        this.call.setCredentials(credentials);
      }
      sendMessageWithContext(context, message) {
        let serialized;
        try {
          serialized = this.methodDefinition.requestSerialize(message);
        } catch (e) {
          this.call.cancelWithStatus(constants_1.Status.INTERNAL, `Request message serialization failure: ${e.message}`);
          return;
        }
        this.call.sendMessageWithContext(context, serialized);
      }
      sendMessage(message) {
        this.sendMessageWithContext({}, message);
      }
      start(metadata, interceptingListener) {
        let readError = null;
        this.call.start(metadata, {
          onReceiveMetadata: (metadata2) => {
            var _a;
            (_a = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveMetadata) === null || _a === void 0 ? void 0 : _a.call(interceptingListener, metadata2);
          },
          onReceiveMessage: (message) => {
            var _a;
            let deserialized;
            try {
              deserialized = this.methodDefinition.responseDeserialize(message);
            } catch (e) {
              readError = {
                code: constants_1.Status.INTERNAL,
                details: `Response message parsing error: ${e.message}`,
                metadata: new metadata_1.Metadata()
              };
              this.call.cancelWithStatus(readError.code, readError.details);
              return;
            }
            (_a = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveMessage) === null || _a === void 0 ? void 0 : _a.call(interceptingListener, deserialized);
          },
          onReceiveStatus: (status) => {
            var _a, _b;
            if (readError) {
              (_a = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveStatus) === null || _a === void 0 ? void 0 : _a.call(interceptingListener, readError);
            } else {
              (_b = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveStatus) === null || _b === void 0 ? void 0 : _b.call(interceptingListener, status);
            }
          }
        });
      }
      startRead() {
        this.call.startRead();
      }
      halfClose() {
        this.call.halfClose();
      }
    };
    var BaseUnaryInterceptingCall = class extends BaseInterceptingCall {
      constructor(call, methodDefinition) {
        super(call, methodDefinition);
      }
      start(metadata, listener) {
        var _a, _b;
        let receivedMessage = false;
        const wrapperListener = {
          onReceiveMetadata: (_b = (_a = listener === null || listener === void 0 ? void 0 : listener.onReceiveMetadata) === null || _a === void 0 ? void 0 : _a.bind(listener)) !== null && _b !== void 0 ? _b : (metadata2) => {
          },
          onReceiveMessage: (message) => {
            var _a2;
            receivedMessage = true;
            (_a2 = listener === null || listener === void 0 ? void 0 : listener.onReceiveMessage) === null || _a2 === void 0 ? void 0 : _a2.call(listener, message);
          },
          onReceiveStatus: (status) => {
            var _a2, _b2;
            if (!receivedMessage) {
              (_a2 = listener === null || listener === void 0 ? void 0 : listener.onReceiveMessage) === null || _a2 === void 0 ? void 0 : _a2.call(listener, null);
            }
            (_b2 = listener === null || listener === void 0 ? void 0 : listener.onReceiveStatus) === null || _b2 === void 0 ? void 0 : _b2.call(listener, status);
          }
        };
        super.start(metadata, wrapperListener);
        this.call.startRead();
      }
    };
    var BaseStreamingInterceptingCall = class extends BaseInterceptingCall {
    };
    function getBottomInterceptingCall(channel, options, methodDefinition) {
      const call = getCall(channel, methodDefinition.path, options);
      if (methodDefinition.responseStream) {
        return new BaseStreamingInterceptingCall(call, methodDefinition);
      } else {
        return new BaseUnaryInterceptingCall(call, methodDefinition);
      }
    }
    function getInterceptingCall(interceptorArgs, methodDefinition, options, channel) {
      if (interceptorArgs.clientInterceptors.length > 0 && interceptorArgs.clientInterceptorProviders.length > 0) {
        throw new InterceptorConfigurationError("Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.");
      }
      if (interceptorArgs.callInterceptors.length > 0 && interceptorArgs.callInterceptorProviders.length > 0) {
        throw new InterceptorConfigurationError("Both interceptors and interceptor_providers were passed as call options. Only one of these is allowed.");
      }
      let interceptors = [];
      if (interceptorArgs.callInterceptors.length > 0 || interceptorArgs.callInterceptorProviders.length > 0) {
        interceptors = [].concat(interceptorArgs.callInterceptors, interceptorArgs.callInterceptorProviders.map((provider) => provider(methodDefinition))).filter((interceptor) => interceptor);
      } else {
        interceptors = [].concat(interceptorArgs.clientInterceptors, interceptorArgs.clientInterceptorProviders.map((provider) => provider(methodDefinition))).filter((interceptor) => interceptor);
      }
      const interceptorOptions = Object.assign({}, options, {
        method_definition: methodDefinition
      });
      const getCall2 = interceptors.reduceRight((nextCall, nextInterceptor) => {
        return (currentOptions) => nextInterceptor(currentOptions, nextCall);
      }, (finalOptions) => getBottomInterceptingCall(channel, finalOptions, methodDefinition));
      return getCall2(interceptorOptions);
    }
    exports2.getInterceptingCall = getInterceptingCall;
  }
});

// node_modules/@grpc/grpc-js/build/src/client.js
var require_client = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/client.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Client = void 0;
    var call_1 = require_call();
    var channel_1 = require_channel();
    var constants_1 = require_constants();
    var metadata_1 = require_metadata();
    var client_interceptors_1 = require_client_interceptors();
    var CHANNEL_SYMBOL = Symbol();
    var INTERCEPTOR_SYMBOL = Symbol();
    var INTERCEPTOR_PROVIDER_SYMBOL = Symbol();
    var CALL_INVOCATION_TRANSFORMER_SYMBOL = Symbol();
    function isFunction(arg) {
      return typeof arg === "function";
    }
    var Client = class {
      constructor(address, credentials, options = {}) {
        var _a, _b;
        options = Object.assign({}, options);
        this[INTERCEPTOR_SYMBOL] = (_a = options.interceptors) !== null && _a !== void 0 ? _a : [];
        delete options.interceptors;
        this[INTERCEPTOR_PROVIDER_SYMBOL] = (_b = options.interceptor_providers) !== null && _b !== void 0 ? _b : [];
        delete options.interceptor_providers;
        if (this[INTERCEPTOR_SYMBOL].length > 0 && this[INTERCEPTOR_PROVIDER_SYMBOL].length > 0) {
          throw new Error("Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.");
        }
        this[CALL_INVOCATION_TRANSFORMER_SYMBOL] = options.callInvocationTransformer;
        delete options.callInvocationTransformer;
        if (options.channelOverride) {
          this[CHANNEL_SYMBOL] = options.channelOverride;
        } else if (options.channelFactoryOverride) {
          const channelFactoryOverride = options.channelFactoryOverride;
          delete options.channelFactoryOverride;
          this[CHANNEL_SYMBOL] = channelFactoryOverride(address, credentials, options);
        } else {
          this[CHANNEL_SYMBOL] = new channel_1.ChannelImplementation(address, credentials, options);
        }
      }
      close() {
        this[CHANNEL_SYMBOL].close();
      }
      getChannel() {
        return this[CHANNEL_SYMBOL];
      }
      waitForReady(deadline, callback) {
        const checkState = (err) => {
          if (err) {
            callback(new Error("Failed to connect before the deadline"));
            return;
          }
          let newState;
          try {
            newState = this[CHANNEL_SYMBOL].getConnectivityState(true);
          } catch (e) {
            callback(new Error("The channel has been closed"));
            return;
          }
          if (newState === channel_1.ConnectivityState.READY) {
            callback();
          } else {
            try {
              this[CHANNEL_SYMBOL].watchConnectivityState(newState, deadline, checkState);
            } catch (e) {
              callback(new Error("The channel has been closed"));
            }
          }
        };
        setImmediate(checkState);
      }
      checkOptionalUnaryResponseArguments(arg1, arg2, arg3) {
        if (isFunction(arg1)) {
          return { metadata: new metadata_1.Metadata(), options: {}, callback: arg1 };
        } else if (isFunction(arg2)) {
          if (arg1 instanceof metadata_1.Metadata) {
            return { metadata: arg1, options: {}, callback: arg2 };
          } else {
            return { metadata: new metadata_1.Metadata(), options: arg1, callback: arg2 };
          }
        } else {
          if (!(arg1 instanceof metadata_1.Metadata && arg2 instanceof Object && isFunction(arg3))) {
            throw new Error("Incorrect arguments passed");
          }
          return { metadata: arg1, options: arg2, callback: arg3 };
        }
      }
      makeUnaryRequest(method, serialize, deserialize, argument, metadata, options, callback) {
        var _a, _b;
        const checkedArguments = this.checkOptionalUnaryResponseArguments(metadata, options, callback);
        const methodDefinition = {
          path: method,
          requestStream: false,
          responseStream: false,
          requestSerialize: serialize,
          responseDeserialize: deserialize
        };
        let callProperties = {
          argument,
          metadata: checkedArguments.metadata,
          call: new call_1.ClientUnaryCallImpl(),
          channel: this[CHANNEL_SYMBOL],
          methodDefinition,
          callOptions: checkedArguments.options,
          callback: checkedArguments.callback
        };
        if (this[CALL_INVOCATION_TRANSFORMER_SYMBOL]) {
          callProperties = this[CALL_INVOCATION_TRANSFORMER_SYMBOL](callProperties);
        }
        const emitter = callProperties.call;
        const interceptorArgs = {
          clientInterceptors: this[INTERCEPTOR_SYMBOL],
          clientInterceptorProviders: this[INTERCEPTOR_PROVIDER_SYMBOL],
          callInterceptors: (_a = callProperties.callOptions.interceptors) !== null && _a !== void 0 ? _a : [],
          callInterceptorProviders: (_b = callProperties.callOptions.interceptor_providers) !== null && _b !== void 0 ? _b : []
        };
        const call = client_interceptors_1.getInterceptingCall(interceptorArgs, callProperties.methodDefinition, callProperties.callOptions, callProperties.channel);
        emitter.call = call;
        if (callProperties.callOptions.credentials) {
          call.setCredentials(callProperties.callOptions.credentials);
        }
        let responseMessage = null;
        let receivedStatus = false;
        call.start(callProperties.metadata, {
          onReceiveMetadata: (metadata2) => {
            emitter.emit("metadata", metadata2);
          },
          onReceiveMessage(message) {
            if (responseMessage !== null) {
              call.cancelWithStatus(constants_1.Status.INTERNAL, "Too many responses received");
            }
            responseMessage = message;
          },
          onReceiveStatus(status) {
            if (receivedStatus) {
              return;
            }
            receivedStatus = true;
            if (status.code === constants_1.Status.OK) {
              callProperties.callback(null, responseMessage);
            } else {
              callProperties.callback(call_1.callErrorFromStatus(status));
            }
            emitter.emit("status", status);
          }
        });
        call.sendMessage(argument);
        call.halfClose();
        return emitter;
      }
      makeClientStreamRequest(method, serialize, deserialize, metadata, options, callback) {
        var _a, _b;
        const checkedArguments = this.checkOptionalUnaryResponseArguments(metadata, options, callback);
        const methodDefinition = {
          path: method,
          requestStream: true,
          responseStream: false,
          requestSerialize: serialize,
          responseDeserialize: deserialize
        };
        let callProperties = {
          metadata: checkedArguments.metadata,
          call: new call_1.ClientWritableStreamImpl(serialize),
          channel: this[CHANNEL_SYMBOL],
          methodDefinition,
          callOptions: checkedArguments.options,
          callback: checkedArguments.callback
        };
        if (this[CALL_INVOCATION_TRANSFORMER_SYMBOL]) {
          callProperties = this[CALL_INVOCATION_TRANSFORMER_SYMBOL](callProperties);
        }
        const emitter = callProperties.call;
        const interceptorArgs = {
          clientInterceptors: this[INTERCEPTOR_SYMBOL],
          clientInterceptorProviders: this[INTERCEPTOR_PROVIDER_SYMBOL],
          callInterceptors: (_a = callProperties.callOptions.interceptors) !== null && _a !== void 0 ? _a : [],
          callInterceptorProviders: (_b = callProperties.callOptions.interceptor_providers) !== null && _b !== void 0 ? _b : []
        };
        const call = client_interceptors_1.getInterceptingCall(interceptorArgs, callProperties.methodDefinition, callProperties.callOptions, callProperties.channel);
        emitter.call = call;
        if (callProperties.callOptions.credentials) {
          call.setCredentials(callProperties.callOptions.credentials);
        }
        let responseMessage = null;
        let receivedStatus = false;
        call.start(callProperties.metadata, {
          onReceiveMetadata: (metadata2) => {
            emitter.emit("metadata", metadata2);
          },
          onReceiveMessage(message) {
            if (responseMessage !== null) {
              call.cancelWithStatus(constants_1.Status.INTERNAL, "Too many responses received");
            }
            responseMessage = message;
          },
          onReceiveStatus(status) {
            if (receivedStatus) {
              return;
            }
            receivedStatus = true;
            if (status.code === constants_1.Status.OK) {
              callProperties.callback(null, responseMessage);
            } else {
              callProperties.callback(call_1.callErrorFromStatus(status));
            }
            emitter.emit("status", status);
          }
        });
        return emitter;
      }
      checkMetadataAndOptions(arg1, arg2) {
        let metadata;
        let options;
        if (arg1 instanceof metadata_1.Metadata) {
          metadata = arg1;
          if (arg2) {
            options = arg2;
          } else {
            options = {};
          }
        } else {
          if (arg1) {
            options = arg1;
          } else {
            options = {};
          }
          metadata = new metadata_1.Metadata();
        }
        return { metadata, options };
      }
      makeServerStreamRequest(method, serialize, deserialize, argument, metadata, options) {
        var _a, _b;
        const checkedArguments = this.checkMetadataAndOptions(metadata, options);
        const methodDefinition = {
          path: method,
          requestStream: false,
          responseStream: true,
          requestSerialize: serialize,
          responseDeserialize: deserialize
        };
        let callProperties = {
          argument,
          metadata: checkedArguments.metadata,
          call: new call_1.ClientReadableStreamImpl(deserialize),
          channel: this[CHANNEL_SYMBOL],
          methodDefinition,
          callOptions: checkedArguments.options
        };
        if (this[CALL_INVOCATION_TRANSFORMER_SYMBOL]) {
          callProperties = this[CALL_INVOCATION_TRANSFORMER_SYMBOL](callProperties);
        }
        const stream = callProperties.call;
        const interceptorArgs = {
          clientInterceptors: this[INTERCEPTOR_SYMBOL],
          clientInterceptorProviders: this[INTERCEPTOR_PROVIDER_SYMBOL],
          callInterceptors: (_a = callProperties.callOptions.interceptors) !== null && _a !== void 0 ? _a : [],
          callInterceptorProviders: (_b = callProperties.callOptions.interceptor_providers) !== null && _b !== void 0 ? _b : []
        };
        const call = client_interceptors_1.getInterceptingCall(interceptorArgs, callProperties.methodDefinition, callProperties.callOptions, callProperties.channel);
        stream.call = call;
        if (callProperties.callOptions.credentials) {
          call.setCredentials(callProperties.callOptions.credentials);
        }
        let receivedStatus = false;
        call.start(callProperties.metadata, {
          onReceiveMetadata(metadata2) {
            stream.emit("metadata", metadata2);
          },
          onReceiveMessage(message) {
            stream.push(message);
          },
          onReceiveStatus(status) {
            if (receivedStatus) {
              return;
            }
            receivedStatus = true;
            stream.push(null);
            if (status.code !== constants_1.Status.OK) {
              stream.emit("error", call_1.callErrorFromStatus(status));
            }
            stream.emit("status", status);
          }
        });
        call.sendMessage(argument);
        call.halfClose();
        return stream;
      }
      makeBidiStreamRequest(method, serialize, deserialize, metadata, options) {
        var _a, _b;
        const checkedArguments = this.checkMetadataAndOptions(metadata, options);
        const methodDefinition = {
          path: method,
          requestStream: true,
          responseStream: true,
          requestSerialize: serialize,
          responseDeserialize: deserialize
        };
        let callProperties = {
          metadata: checkedArguments.metadata,
          call: new call_1.ClientDuplexStreamImpl(serialize, deserialize),
          channel: this[CHANNEL_SYMBOL],
          methodDefinition,
          callOptions: checkedArguments.options
        };
        if (this[CALL_INVOCATION_TRANSFORMER_SYMBOL]) {
          callProperties = this[CALL_INVOCATION_TRANSFORMER_SYMBOL](callProperties);
        }
        const stream = callProperties.call;
        const interceptorArgs = {
          clientInterceptors: this[INTERCEPTOR_SYMBOL],
          clientInterceptorProviders: this[INTERCEPTOR_PROVIDER_SYMBOL],
          callInterceptors: (_a = callProperties.callOptions.interceptors) !== null && _a !== void 0 ? _a : [],
          callInterceptorProviders: (_b = callProperties.callOptions.interceptor_providers) !== null && _b !== void 0 ? _b : []
        };
        const call = client_interceptors_1.getInterceptingCall(interceptorArgs, callProperties.methodDefinition, callProperties.callOptions, callProperties.channel);
        stream.call = call;
        if (callProperties.callOptions.credentials) {
          call.setCredentials(callProperties.callOptions.credentials);
        }
        let receivedStatus = false;
        call.start(callProperties.metadata, {
          onReceiveMetadata(metadata2) {
            stream.emit("metadata", metadata2);
          },
          onReceiveMessage(message) {
            stream.push(message);
          },
          onReceiveStatus(status) {
            if (receivedStatus) {
              return;
            }
            receivedStatus = true;
            stream.push(null);
            if (status.code !== constants_1.Status.OK) {
              stream.emit("error", call_1.callErrorFromStatus(status));
            }
            stream.emit("status", status);
          }
        });
        return stream;
      }
    };
    exports2.Client = Client;
  }
});

// node_modules/@grpc/grpc-js/build/src/make-client.js
var require_make_client = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/make-client.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadPackageDefinition = exports2.makeClientConstructor = void 0;
    var client_1 = require_client();
    var requesterFuncs = {
      unary: client_1.Client.prototype.makeUnaryRequest,
      server_stream: client_1.Client.prototype.makeServerStreamRequest,
      client_stream: client_1.Client.prototype.makeClientStreamRequest,
      bidi: client_1.Client.prototype.makeBidiStreamRequest
    };
    function isPrototypePolluted(key) {
      return ["__proto__", "prototype", "constructor"].includes(key);
    }
    function makeClientConstructor(methods, serviceName, classOptions) {
      if (!classOptions) {
        classOptions = {};
      }
      class ServiceClientImpl extends client_1.Client {
      }
      Object.keys(methods).forEach((name) => {
        if (isPrototypePolluted(name)) {
          return;
        }
        const attrs = methods[name];
        let methodType;
        if (typeof name === "string" && name.charAt(0) === "$") {
          throw new Error("Method names cannot start with $");
        }
        if (attrs.requestStream) {
          if (attrs.responseStream) {
            methodType = "bidi";
          } else {
            methodType = "client_stream";
          }
        } else {
          if (attrs.responseStream) {
            methodType = "server_stream";
          } else {
            methodType = "unary";
          }
        }
        const serialize = attrs.requestSerialize;
        const deserialize = attrs.responseDeserialize;
        const methodFunc = partial(requesterFuncs[methodType], attrs.path, serialize, deserialize);
        ServiceClientImpl.prototype[name] = methodFunc;
        Object.assign(ServiceClientImpl.prototype[name], attrs);
        if (attrs.originalName && !isPrototypePolluted(attrs.originalName)) {
          ServiceClientImpl.prototype[attrs.originalName] = ServiceClientImpl.prototype[name];
        }
      });
      ServiceClientImpl.service = methods;
      return ServiceClientImpl;
    }
    exports2.makeClientConstructor = makeClientConstructor;
    function partial(fn, path2, serialize, deserialize) {
      return function(...args) {
        return fn.call(this, path2, serialize, deserialize, ...args);
      };
    }
    function isProtobufTypeDefinition(obj) {
      return "format" in obj;
    }
    function loadPackageDefinition(packageDef) {
      const result = {};
      for (const serviceFqn in packageDef) {
        if (Object.prototype.hasOwnProperty.call(packageDef, serviceFqn)) {
          const service = packageDef[serviceFqn];
          const nameComponents = serviceFqn.split(".");
          if (nameComponents.some((comp) => isPrototypePolluted(comp))) {
            continue;
          }
          const serviceName = nameComponents[nameComponents.length - 1];
          let current = result;
          for (const packageName of nameComponents.slice(0, -1)) {
            if (!current[packageName]) {
              current[packageName] = {};
            }
            current = current[packageName];
          }
          if (isProtobufTypeDefinition(service)) {
            current[serviceName] = service;
          } else {
            current[serviceName] = makeClientConstructor(service, serviceName, {});
          }
        }
      }
      return result;
    }
    exports2.loadPackageDefinition = loadPackageDefinition;
  }
});

// node_modules/@grpc/grpc-js/build/src/server-call.js
var require_server_call = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/server-call.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Http2ServerCallStream = exports2.ServerDuplexStreamImpl = exports2.ServerWritableStreamImpl = exports2.ServerReadableStreamImpl = exports2.ServerUnaryCallImpl = void 0;
    var events_1 = require("events");
    var http2 = require("http2");
    var stream_1 = require("stream");
    var constants_1 = require_constants();
    var metadata_1 = require_metadata();
    var stream_decoder_1 = require_stream_decoder();
    var logging = require_logging();
    var TRACER_NAME = "server_call";
    function trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    var GRPC_ACCEPT_ENCODING_HEADER = "grpc-accept-encoding";
    var GRPC_ENCODING_HEADER = "grpc-encoding";
    var GRPC_MESSAGE_HEADER = "grpc-message";
    var GRPC_STATUS_HEADER = "grpc-status";
    var GRPC_TIMEOUT_HEADER = "grpc-timeout";
    var DEADLINE_REGEX = /(\d{1,8})\s*([HMSmun])/;
    var deadlineUnitsToMs = {
      H: 36e5,
      M: 6e4,
      S: 1e3,
      m: 1,
      u: 1e-3,
      n: 1e-6
    };
    var defaultResponseHeaders = {
      [GRPC_ACCEPT_ENCODING_HEADER]: "identity",
      [GRPC_ENCODING_HEADER]: "identity",
      [http2.constants.HTTP2_HEADER_STATUS]: http2.constants.HTTP_STATUS_OK,
      [http2.constants.HTTP2_HEADER_CONTENT_TYPE]: "application/grpc+proto"
    };
    var defaultResponseOptions = {
      waitForTrailers: true
    };
    var ServerUnaryCallImpl = class extends events_1.EventEmitter {
      constructor(call, metadata, request) {
        super();
        this.call = call;
        this.metadata = metadata;
        this.request = request;
        this.cancelled = false;
        this.call.setupSurfaceCall(this);
      }
      getPeer() {
        return this.call.getPeer();
      }
      sendMetadata(responseMetadata) {
        this.call.sendMetadata(responseMetadata);
      }
      getDeadline() {
        return this.call.getDeadline();
      }
    };
    exports2.ServerUnaryCallImpl = ServerUnaryCallImpl;
    var ServerReadableStreamImpl = class extends stream_1.Readable {
      constructor(call, metadata, deserialize) {
        super({ objectMode: true });
        this.call = call;
        this.metadata = metadata;
        this.deserialize = deserialize;
        this.cancelled = false;
        this.call.setupSurfaceCall(this);
        this.call.setupReadable(this);
      }
      _read(size) {
        if (!this.call.consumeUnpushedMessages(this)) {
          return;
        }
        this.call.resume();
      }
      getPeer() {
        return this.call.getPeer();
      }
      sendMetadata(responseMetadata) {
        this.call.sendMetadata(responseMetadata);
      }
      getDeadline() {
        return this.call.getDeadline();
      }
    };
    exports2.ServerReadableStreamImpl = ServerReadableStreamImpl;
    var ServerWritableStreamImpl = class extends stream_1.Writable {
      constructor(call, metadata, serialize, request) {
        super({ objectMode: true });
        this.call = call;
        this.metadata = metadata;
        this.serialize = serialize;
        this.request = request;
        this.cancelled = false;
        this.trailingMetadata = new metadata_1.Metadata();
        this.call.setupSurfaceCall(this);
        this.on("error", (err) => {
          this.call.sendError(err);
          this.end();
        });
      }
      getPeer() {
        return this.call.getPeer();
      }
      sendMetadata(responseMetadata) {
        this.call.sendMetadata(responseMetadata);
      }
      getDeadline() {
        return this.call.getDeadline();
      }
      _write(chunk, encoding, callback) {
        try {
          const response = this.call.serializeMessage(chunk);
          if (!this.call.write(response)) {
            this.call.once("drain", callback);
            return;
          }
        } catch (err) {
          err.code = constants_1.Status.INTERNAL;
          this.emit("error", err);
        }
        callback();
      }
      _final(callback) {
        this.call.sendStatus({
          code: constants_1.Status.OK,
          details: "OK",
          metadata: this.trailingMetadata
        });
        callback(null);
      }
      end(metadata) {
        if (metadata) {
          this.trailingMetadata = metadata;
        }
        super.end();
      }
    };
    exports2.ServerWritableStreamImpl = ServerWritableStreamImpl;
    var ServerDuplexStreamImpl = class extends stream_1.Duplex {
      constructor(call, metadata, serialize, deserialize) {
        super({ objectMode: true });
        this.call = call;
        this.metadata = metadata;
        this.serialize = serialize;
        this.deserialize = deserialize;
        this.cancelled = false;
        this.trailingMetadata = new metadata_1.Metadata();
        this.call.setupSurfaceCall(this);
        this.call.setupReadable(this);
        this.on("error", (err) => {
          this.call.sendError(err);
          this.end();
        });
      }
      getPeer() {
        return this.call.getPeer();
      }
      sendMetadata(responseMetadata) {
        this.call.sendMetadata(responseMetadata);
      }
      getDeadline() {
        return this.call.getDeadline();
      }
      end(metadata) {
        if (metadata) {
          this.trailingMetadata = metadata;
        }
        super.end();
      }
    };
    exports2.ServerDuplexStreamImpl = ServerDuplexStreamImpl;
    ServerDuplexStreamImpl.prototype._read = ServerReadableStreamImpl.prototype._read;
    ServerDuplexStreamImpl.prototype._write = ServerWritableStreamImpl.prototype._write;
    ServerDuplexStreamImpl.prototype._final = ServerWritableStreamImpl.prototype._final;
    ServerDuplexStreamImpl.prototype.end = ServerWritableStreamImpl.prototype.end;
    var Http2ServerCallStream = class extends events_1.EventEmitter {
      constructor(stream, handler, options) {
        super();
        this.stream = stream;
        this.handler = handler;
        this.options = options;
        this.cancelled = false;
        this.deadlineTimer = setTimeout(() => {
        }, 0);
        this.deadline = Infinity;
        this.wantTrailers = false;
        this.metadataSent = false;
        this.canPush = false;
        this.isPushPending = false;
        this.bufferedMessages = [];
        this.messagesToPush = [];
        this.maxSendMessageSize = constants_1.DEFAULT_MAX_SEND_MESSAGE_LENGTH;
        this.maxReceiveMessageSize = constants_1.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH;
        this.stream.once("error", (err) => {
        });
        this.stream.once("close", () => {
          var _a;
          trace("Request to method " + ((_a = this.handler) === null || _a === void 0 ? void 0 : _a.path) + " stream closed with rstCode " + this.stream.rstCode);
          this.cancelled = true;
          this.emit("cancelled", "cancelled");
        });
        this.stream.on("drain", () => {
          this.emit("drain");
        });
        if ("grpc.max_send_message_length" in options) {
          this.maxSendMessageSize = options["grpc.max_send_message_length"];
        }
        if ("grpc.max_receive_message_length" in options) {
          this.maxReceiveMessageSize = options["grpc.max_receive_message_length"];
        }
        clearTimeout(this.deadlineTimer);
      }
      checkCancelled() {
        if (this.stream.destroyed) {
          this.cancelled = true;
        }
        return this.cancelled;
      }
      sendMetadata(customMetadata) {
        if (this.checkCancelled()) {
          return;
        }
        if (this.metadataSent) {
          return;
        }
        this.metadataSent = true;
        const custom = customMetadata ? customMetadata.toHttp2Headers() : null;
        const headers = Object.assign({}, defaultResponseHeaders, custom);
        this.stream.respond(headers, defaultResponseOptions);
      }
      receiveMetadata(headers) {
        const metadata = metadata_1.Metadata.fromHttp2Headers(headers);
        const timeoutHeader = metadata.get(GRPC_TIMEOUT_HEADER);
        if (timeoutHeader.length > 0) {
          const match = timeoutHeader[0].toString().match(DEADLINE_REGEX);
          if (match === null) {
            const err = new Error("Invalid deadline");
            err.code = constants_1.Status.OUT_OF_RANGE;
            this.sendError(err);
            return;
          }
          const timeout = +match[1] * deadlineUnitsToMs[match[2]] | 0;
          const now = new Date();
          this.deadline = now.setMilliseconds(now.getMilliseconds() + timeout);
          this.deadlineTimer = setTimeout(handleExpiredDeadline, timeout, this);
          metadata.remove(GRPC_TIMEOUT_HEADER);
        }
        metadata.remove(http2.constants.HTTP2_HEADER_ACCEPT_ENCODING);
        metadata.remove(http2.constants.HTTP2_HEADER_TE);
        metadata.remove(http2.constants.HTTP2_HEADER_CONTENT_TYPE);
        metadata.remove("grpc-encoding");
        metadata.remove("grpc-accept-encoding");
        return metadata;
      }
      receiveUnaryMessage() {
        return new Promise((resolve, reject) => {
          const stream = this.stream;
          const chunks = [];
          let totalLength = 0;
          stream.on("data", (data) => {
            chunks.push(data);
            totalLength += data.byteLength;
          });
          stream.once("end", async () => {
            try {
              const requestBytes = Buffer.concat(chunks, totalLength);
              if (this.maxReceiveMessageSize !== -1 && requestBytes.length > this.maxReceiveMessageSize) {
                this.sendError({
                  code: constants_1.Status.RESOURCE_EXHAUSTED,
                  details: `Received message larger than max (${requestBytes.length} vs. ${this.maxReceiveMessageSize})`
                });
                resolve();
              }
              resolve(this.deserializeMessage(requestBytes));
            } catch (err) {
              err.code = constants_1.Status.INTERNAL;
              this.sendError(err);
              resolve();
            }
          });
        });
      }
      serializeMessage(value) {
        const messageBuffer = this.handler.serialize(value);
        const byteLength = messageBuffer.byteLength;
        const output = Buffer.allocUnsafe(byteLength + 5);
        output.writeUInt8(0, 0);
        output.writeUInt32BE(byteLength, 1);
        messageBuffer.copy(output, 5);
        return output;
      }
      deserializeMessage(bytes) {
        const receivedMessage = bytes.slice(5);
        return this.handler.deserialize(receivedMessage);
      }
      async sendUnaryMessage(err, value, metadata, flags) {
        if (this.checkCancelled()) {
          return;
        }
        if (!metadata) {
          metadata = new metadata_1.Metadata();
        }
        if (err) {
          if (!Object.prototype.hasOwnProperty.call(err, "metadata")) {
            err.metadata = metadata;
          }
          this.sendError(err);
          return;
        }
        try {
          const response = this.serializeMessage(value);
          this.write(response);
          this.sendStatus({ code: constants_1.Status.OK, details: "OK", metadata });
        } catch (err2) {
          err2.code = constants_1.Status.INTERNAL;
          this.sendError(err2);
        }
      }
      sendStatus(statusObj) {
        var _a;
        if (this.checkCancelled()) {
          return;
        }
        trace("Request to method " + ((_a = this.handler) === null || _a === void 0 ? void 0 : _a.path) + " ended with status code: " + constants_1.Status[statusObj.code] + " details: " + statusObj.details);
        clearTimeout(this.deadlineTimer);
        if (!this.wantTrailers) {
          this.wantTrailers = true;
          this.stream.once("wantTrailers", () => {
            const trailersToSend = Object.assign({
              [GRPC_STATUS_HEADER]: statusObj.code,
              [GRPC_MESSAGE_HEADER]: encodeURI(statusObj.details)
            }, statusObj.metadata.toHttp2Headers());
            this.stream.sendTrailers(trailersToSend);
          });
          this.sendMetadata();
          this.stream.end();
        }
      }
      sendError(error) {
        if (this.checkCancelled()) {
          return;
        }
        const status = {
          code: constants_1.Status.UNKNOWN,
          details: "message" in error ? error.message : "Unknown Error",
          metadata: "metadata" in error && error.metadata !== void 0 ? error.metadata : new metadata_1.Metadata()
        };
        if ("code" in error && typeof error.code === "number" && Number.isInteger(error.code)) {
          status.code = error.code;
          if ("details" in error && typeof error.details === "string") {
            status.details = error.details;
          }
        }
        this.sendStatus(status);
      }
      write(chunk) {
        if (this.checkCancelled()) {
          return;
        }
        if (this.maxSendMessageSize !== -1 && chunk.length > this.maxSendMessageSize) {
          this.sendError({
            code: constants_1.Status.RESOURCE_EXHAUSTED,
            details: `Sent message larger than max (${chunk.length} vs. ${this.maxSendMessageSize})`
          });
          return;
        }
        this.sendMetadata();
        return this.stream.write(chunk);
      }
      resume() {
        this.stream.resume();
      }
      setupSurfaceCall(call) {
        this.once("cancelled", (reason) => {
          call.cancelled = true;
          call.emit("cancelled", reason);
        });
      }
      setupReadable(readable) {
        const decoder = new stream_decoder_1.StreamDecoder();
        this.stream.on("data", async (data) => {
          const messages = decoder.write(data);
          for (const message of messages) {
            if (this.maxReceiveMessageSize !== -1 && message.length > this.maxReceiveMessageSize) {
              this.sendError({
                code: constants_1.Status.RESOURCE_EXHAUSTED,
                details: `Received message larger than max (${message.length} vs. ${this.maxReceiveMessageSize})`
              });
              return;
            }
            this.pushOrBufferMessage(readable, message);
          }
        });
        this.stream.once("end", () => {
          this.pushOrBufferMessage(readable, null);
        });
      }
      consumeUnpushedMessages(readable) {
        this.canPush = true;
        while (this.messagesToPush.length > 0) {
          const nextMessage = this.messagesToPush.shift();
          const canPush = readable.push(nextMessage);
          if (nextMessage === null || canPush === false) {
            this.canPush = false;
            break;
          }
        }
        return this.canPush;
      }
      pushOrBufferMessage(readable, messageBytes) {
        if (this.isPushPending) {
          this.bufferedMessages.push(messageBytes);
        } else {
          this.pushMessage(readable, messageBytes);
        }
      }
      async pushMessage(readable, messageBytes) {
        if (messageBytes === null) {
          if (this.canPush) {
            readable.push(null);
          } else {
            this.messagesToPush.push(null);
          }
          return;
        }
        this.isPushPending = true;
        try {
          const deserialized = await this.deserializeMessage(messageBytes);
          if (this.canPush) {
            if (!readable.push(deserialized)) {
              this.canPush = false;
              this.stream.pause();
            }
          } else {
            this.messagesToPush.push(deserialized);
          }
        } catch (error) {
          this.bufferedMessages.length = 0;
          if (!("code" in error && typeof error.code === "number" && Number.isInteger(error.code) && error.code >= constants_1.Status.OK && error.code <= constants_1.Status.UNAUTHENTICATED)) {
            error.code = constants_1.Status.INTERNAL;
          }
          readable.emit("error", error);
        }
        this.isPushPending = false;
        if (this.bufferedMessages.length > 0) {
          this.pushMessage(readable, this.bufferedMessages.shift());
        }
      }
      getPeer() {
        const socket = this.stream.session.socket;
        if (socket.remoteAddress) {
          if (socket.remotePort) {
            return `${socket.remoteAddress}:${socket.remotePort}`;
          } else {
            return socket.remoteAddress;
          }
        } else {
          return "unknown";
        }
      }
      getDeadline() {
        return this.deadline;
      }
    };
    exports2.Http2ServerCallStream = Http2ServerCallStream;
    function handleExpiredDeadline(call) {
      const err = new Error("Deadline exceeded");
      err.code = constants_1.Status.DEADLINE_EXCEEDED;
      call.sendError(err);
      call.cancelled = true;
      call.emit("cancelled", "deadline");
    }
  }
});

// node_modules/@grpc/grpc-js/build/src/server.js
var require_server = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/server.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Server = void 0;
    var http2 = require("http2");
    var constants_1 = require_constants();
    var metadata_1 = require_metadata();
    var server_call_1 = require_server_call();
    var resolver_1 = require_resolver();
    var logging = require_logging();
    var subchannel_1 = require_subchannel();
    var uri_parser_1 = require_uri_parser();
    var TRACER_NAME = "server";
    function trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    function noop() {
    }
    function getUnimplementedStatusResponse(methodName) {
      return {
        code: constants_1.Status.UNIMPLEMENTED,
        details: `The server does not implement the method ${methodName}`,
        metadata: new metadata_1.Metadata()
      };
    }
    function getDefaultHandler(handlerType, methodName) {
      const unimplementedStatusResponse = getUnimplementedStatusResponse(methodName);
      switch (handlerType) {
        case "unary":
          return (call, callback) => {
            callback(unimplementedStatusResponse, null);
          };
        case "clientStream":
          return (call, callback) => {
            callback(unimplementedStatusResponse, null);
          };
        case "serverStream":
          return (call) => {
            call.emit("error", unimplementedStatusResponse);
          };
        case "bidi":
          return (call) => {
            call.emit("error", unimplementedStatusResponse);
          };
        default:
          throw new Error(`Invalid handlerType ${handlerType}`);
      }
    }
    var Server = class {
      constructor(options) {
        this.http2ServerList = [];
        this.handlers = new Map();
        this.sessions = new Set();
        this.started = false;
        this.options = options !== null && options !== void 0 ? options : {};
      }
      addProtoService() {
        throw new Error("Not implemented. Use addService() instead");
      }
      addService(service, implementation) {
        if (service === null || typeof service !== "object" || implementation === null || typeof implementation !== "object") {
          throw new Error("addService() requires two objects as arguments");
        }
        const serviceKeys = Object.keys(service);
        if (serviceKeys.length === 0) {
          throw new Error("Cannot add an empty service to a server");
        }
        serviceKeys.forEach((name) => {
          const attrs = service[name];
          let methodType;
          if (attrs.requestStream) {
            if (attrs.responseStream) {
              methodType = "bidi";
            } else {
              methodType = "clientStream";
            }
          } else {
            if (attrs.responseStream) {
              methodType = "serverStream";
            } else {
              methodType = "unary";
            }
          }
          let implFn = implementation[name];
          let impl;
          if (implFn === void 0 && typeof attrs.originalName === "string") {
            implFn = implementation[attrs.originalName];
          }
          if (implFn !== void 0) {
            impl = implFn.bind(implementation);
          } else {
            impl = getDefaultHandler(methodType, name);
          }
          const success = this.register(attrs.path, impl, attrs.responseSerialize, attrs.requestDeserialize, methodType);
          if (success === false) {
            throw new Error(`Method handler for ${attrs.path} already provided.`);
          }
        });
      }
      removeService(service) {
        if (service === null || typeof service !== "object") {
          throw new Error("removeService() requires object as argument");
        }
        const serviceKeys = Object.keys(service);
        serviceKeys.forEach((name) => {
          const attrs = service[name];
          this.unregister(attrs.path);
        });
      }
      bind(port, creds) {
        throw new Error("Not implemented. Use bindAsync() instead");
      }
      bindAsync(port, creds, callback) {
        if (this.started === true) {
          throw new Error("server is already started");
        }
        if (typeof port !== "string") {
          throw new TypeError("port must be a string");
        }
        if (creds === null || typeof creds !== "object") {
          throw new TypeError("creds must be an object");
        }
        if (typeof callback !== "function") {
          throw new TypeError("callback must be a function");
        }
        const initialPortUri = uri_parser_1.parseUri(port);
        if (initialPortUri === null) {
          throw new Error(`Could not parse port "${port}"`);
        }
        const portUri = resolver_1.mapUriDefaultScheme(initialPortUri);
        if (portUri === null) {
          throw new Error(`Could not get a default scheme for port "${port}"`);
        }
        const serverOptions = {
          maxSendHeaderBlockLength: Number.MAX_SAFE_INTEGER
        };
        if ("grpc-node.max_session_memory" in this.options) {
          serverOptions.maxSessionMemory = this.options["grpc-node.max_session_memory"];
        }
        if ("grpc.max_concurrent_streams" in this.options) {
          serverOptions.settings = {
            maxConcurrentStreams: this.options["grpc.max_concurrent_streams"]
          };
        }
        const setupServer = () => {
          let http2Server;
          if (creds._isSecure()) {
            const secureServerOptions = Object.assign(serverOptions, creds._getSettings());
            http2Server = http2.createSecureServer(secureServerOptions);
          } else {
            http2Server = http2.createServer(serverOptions);
          }
          http2Server.setTimeout(0, noop);
          this._setupHandlers(http2Server);
          return http2Server;
        };
        const bindSpecificPort = (addressList, portNum, previousCount) => {
          if (addressList.length === 0) {
            return Promise.resolve({ port: portNum, count: previousCount });
          }
          return Promise.all(addressList.map((address) => {
            trace("Attempting to bind " + subchannel_1.subchannelAddressToString(address));
            let addr;
            if (subchannel_1.isTcpSubchannelAddress(address)) {
              addr = {
                host: address.host,
                port: portNum
              };
            } else {
              addr = address;
            }
            const http2Server = setupServer();
            return new Promise((resolve, reject) => {
              function onError(err) {
                resolve(err);
              }
              http2Server.once("error", onError);
              http2Server.listen(addr, () => {
                trace("Successfully bound " + subchannel_1.subchannelAddressToString(address));
                this.http2ServerList.push(http2Server);
                const boundAddress = http2Server.address();
                if (typeof boundAddress === "string") {
                  resolve(portNum);
                } else {
                  resolve(boundAddress.port);
                }
                http2Server.removeListener("error", onError);
              });
            });
          })).then((results) => {
            let count = 0;
            for (const result of results) {
              if (typeof result === "number") {
                count += 1;
                if (result !== portNum) {
                  throw new Error("Invalid state: multiple port numbers added from single address");
                }
              }
            }
            return {
              port: portNum,
              count: count + previousCount
            };
          });
        };
        const bindWildcardPort = (addressList) => {
          if (addressList.length === 0) {
            return Promise.resolve({ port: 0, count: 0 });
          }
          const address = addressList[0];
          const http2Server = setupServer();
          return new Promise((resolve, reject) => {
            function onError(err) {
              resolve(bindWildcardPort(addressList.slice(1)));
            }
            http2Server.once("error", onError);
            http2Server.listen(address, () => {
              this.http2ServerList.push(http2Server);
              resolve(bindSpecificPort(addressList.slice(1), http2Server.address().port, 1));
              http2Server.removeListener("error", onError);
            });
          });
        };
        const resolverListener = {
          onSuccessfulResolution: (addressList, serviceConfig, serviceConfigError) => {
            resolverListener.onSuccessfulResolution = () => {
            };
            if (addressList.length === 0) {
              callback(new Error(`No addresses resolved for port ${port}`), 0);
              return;
            }
            let bindResultPromise;
            if (subchannel_1.isTcpSubchannelAddress(addressList[0])) {
              if (addressList[0].port === 0) {
                bindResultPromise = bindWildcardPort(addressList);
              } else {
                bindResultPromise = bindSpecificPort(addressList, addressList[0].port, 0);
              }
            } else {
              bindResultPromise = bindSpecificPort(addressList, 1, 0);
            }
            bindResultPromise.then((bindResult) => {
              if (bindResult.count === 0) {
                const errorString = `No address added out of total ${addressList.length} resolved`;
                logging.log(constants_1.LogVerbosity.ERROR, errorString);
                callback(new Error(errorString), 0);
              } else {
                if (bindResult.count < addressList.length) {
                  logging.log(constants_1.LogVerbosity.INFO, `WARNING Only ${bindResult.count} addresses added out of total ${addressList.length} resolved`);
                }
                callback(null, bindResult.port);
              }
            }, (error) => {
              const errorString = `No address added out of total ${addressList.length} resolved`;
              logging.log(constants_1.LogVerbosity.ERROR, errorString);
              callback(new Error(errorString), 0);
            });
          },
          onError: (error) => {
            callback(new Error(error.details), 0);
          }
        };
        const resolver = resolver_1.createResolver(portUri, resolverListener, this.options);
        resolver.updateResolution();
      }
      forceShutdown() {
        for (const http2Server of this.http2ServerList) {
          if (http2Server.listening) {
            http2Server.close();
          }
        }
        this.started = false;
        this.sessions.forEach((session) => {
          session.destroy(http2.constants.NGHTTP2_CANCEL);
        });
        this.sessions.clear();
      }
      register(name, handler, serialize, deserialize, type) {
        if (this.handlers.has(name)) {
          return false;
        }
        this.handlers.set(name, {
          func: handler,
          serialize,
          deserialize,
          type,
          path: name
        });
        return true;
      }
      unregister(name) {
        return this.handlers.delete(name);
      }
      start() {
        if (this.http2ServerList.length === 0 || this.http2ServerList.every((http2Server) => http2Server.listening !== true)) {
          throw new Error("server must be bound in order to start");
        }
        if (this.started === true) {
          throw new Error("server is already started");
        }
        this.started = true;
      }
      tryShutdown(callback) {
        let pendingChecks = 0;
        function maybeCallback() {
          pendingChecks--;
          if (pendingChecks === 0) {
            callback();
          }
        }
        this.started = false;
        for (const http2Server of this.http2ServerList) {
          if (http2Server.listening) {
            pendingChecks++;
            http2Server.close(maybeCallback);
          }
        }
        this.sessions.forEach((session) => {
          if (!session.closed) {
            pendingChecks += 1;
            session.close(maybeCallback);
          }
        });
        if (pendingChecks === 0) {
          callback();
        }
      }
      addHttp2Port() {
        throw new Error("Not yet implemented");
      }
      _setupHandlers(http2Server) {
        if (http2Server === null) {
          return;
        }
        http2Server.on("stream", (stream, headers) => {
          const contentType = headers[http2.constants.HTTP2_HEADER_CONTENT_TYPE];
          if (typeof contentType !== "string" || !contentType.startsWith("application/grpc")) {
            stream.respond({
              [http2.constants.HTTP2_HEADER_STATUS]: http2.constants.HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE
            }, { endStream: true });
            return;
          }
          try {
            const path2 = headers[http2.constants.HTTP2_HEADER_PATH];
            const serverAddress = http2Server.address();
            let serverAddressString = "null";
            if (serverAddress) {
              if (typeof serverAddress === "string") {
                serverAddressString = serverAddress;
              } else {
                serverAddressString = serverAddress.address + ":" + serverAddress.port;
              }
            }
            trace("Received call to method " + path2 + " at address " + serverAddressString);
            const handler = this.handlers.get(path2);
            if (handler === void 0) {
              trace("No handler registered for method " + path2 + ". Sending UNIMPLEMENTED status.");
              throw getUnimplementedStatusResponse(path2);
            }
            const call = new server_call_1.Http2ServerCallStream(stream, handler, this.options);
            const metadata = call.receiveMetadata(headers);
            switch (handler.type) {
              case "unary":
                handleUnary(call, handler, metadata);
                break;
              case "clientStream":
                handleClientStreaming(call, handler, metadata);
                break;
              case "serverStream":
                handleServerStreaming(call, handler, metadata);
                break;
              case "bidi":
                handleBidiStreaming(call, handler, metadata);
                break;
              default:
                throw new Error(`Unknown handler type: ${handler.type}`);
            }
          } catch (err) {
            const call = new server_call_1.Http2ServerCallStream(stream, null, this.options);
            if (err.code === void 0) {
              err.code = constants_1.Status.INTERNAL;
            }
            call.sendError(err);
          }
        });
        http2Server.on("session", (session) => {
          if (!this.started) {
            session.destroy();
            return;
          }
          this.sessions.add(session);
          session.on("close", () => {
            this.sessions.delete(session);
          });
        });
      }
    };
    exports2.Server = Server;
    async function handleUnary(call, handler, metadata) {
      const request = await call.receiveUnaryMessage();
      if (request === void 0 || call.cancelled) {
        return;
      }
      const emitter = new server_call_1.ServerUnaryCallImpl(call, metadata, request);
      handler.func(emitter, (err, value, trailer, flags) => {
        call.sendUnaryMessage(err, value, trailer, flags);
      });
    }
    function handleClientStreaming(call, handler, metadata) {
      const stream = new server_call_1.ServerReadableStreamImpl(call, metadata, handler.deserialize);
      function respond(err, value, trailer, flags) {
        stream.destroy();
        call.sendUnaryMessage(err, value, trailer, flags);
      }
      if (call.cancelled) {
        return;
      }
      stream.on("error", respond);
      handler.func(stream, respond);
    }
    async function handleServerStreaming(call, handler, metadata) {
      const request = await call.receiveUnaryMessage();
      if (request === void 0 || call.cancelled) {
        return;
      }
      const stream = new server_call_1.ServerWritableStreamImpl(call, metadata, handler.serialize, request);
      handler.func(stream);
    }
    function handleBidiStreaming(call, handler, metadata) {
      const stream = new server_call_1.ServerDuplexStreamImpl(call, metadata, handler.serialize, handler.deserialize);
      if (call.cancelled) {
        return;
      }
      handler.func(stream);
    }
  }
});

// node_modules/@grpc/grpc-js/build/src/server-credentials.js
var require_server_credentials = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/server-credentials.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ServerCredentials = void 0;
    var tls_helpers_1 = require_tls_helpers();
    var ServerCredentials = class {
      static createInsecure() {
        return new InsecureServerCredentials();
      }
      static createSsl(rootCerts, keyCertPairs, checkClientCertificate = false) {
        if (rootCerts !== null && !Buffer.isBuffer(rootCerts)) {
          throw new TypeError("rootCerts must be null or a Buffer");
        }
        if (!Array.isArray(keyCertPairs)) {
          throw new TypeError("keyCertPairs must be an array");
        }
        if (typeof checkClientCertificate !== "boolean") {
          throw new TypeError("checkClientCertificate must be a boolean");
        }
        const cert = [];
        const key = [];
        for (let i = 0; i < keyCertPairs.length; i++) {
          const pair = keyCertPairs[i];
          if (pair === null || typeof pair !== "object") {
            throw new TypeError(`keyCertPair[${i}] must be an object`);
          }
          if (!Buffer.isBuffer(pair.private_key)) {
            throw new TypeError(`keyCertPair[${i}].private_key must be a Buffer`);
          }
          if (!Buffer.isBuffer(pair.cert_chain)) {
            throw new TypeError(`keyCertPair[${i}].cert_chain must be a Buffer`);
          }
          cert.push(pair.cert_chain);
          key.push(pair.private_key);
        }
        return new SecureServerCredentials({
          ca: rootCerts || tls_helpers_1.getDefaultRootsData() || void 0,
          cert,
          key,
          requestCert: checkClientCertificate,
          ciphers: tls_helpers_1.CIPHER_SUITES
        });
      }
    };
    exports2.ServerCredentials = ServerCredentials;
    var InsecureServerCredentials = class extends ServerCredentials {
      _isSecure() {
        return false;
      }
      _getSettings() {
        return null;
      }
    };
    var SecureServerCredentials = class extends ServerCredentials {
      constructor(options) {
        super();
        this.options = options;
      }
      _isSecure() {
        return true;
      }
      _getSettings() {
        return this.options;
      }
    };
  }
});

// node_modules/@grpc/grpc-js/build/src/status-builder.js
var require_status_builder = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/status-builder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StatusBuilder = void 0;
    var StatusBuilder = class {
      constructor() {
        this.code = null;
        this.details = null;
        this.metadata = null;
      }
      withCode(code) {
        this.code = code;
        return this;
      }
      withDetails(details) {
        this.details = details;
        return this;
      }
      withMetadata(metadata) {
        this.metadata = metadata;
        return this;
      }
      build() {
        const status = {};
        if (this.code !== null) {
          status.code = this.code;
        }
        if (this.details !== null) {
          status.details = this.details;
        }
        if (this.metadata !== null) {
          status.metadata = this.metadata;
        }
        return status;
      }
    };
    exports2.StatusBuilder = StatusBuilder;
  }
});

// node_modules/@grpc/grpc-js/build/src/experimental.js
var require_experimental = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/experimental.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var logging_1 = require_logging();
    Object.defineProperty(exports2, "trace", { enumerable: true, get: function() {
      return logging_1.trace;
    } });
    var resolver_1 = require_resolver();
    Object.defineProperty(exports2, "registerResolver", { enumerable: true, get: function() {
      return resolver_1.registerResolver;
    } });
    var uri_parser_1 = require_uri_parser();
    Object.defineProperty(exports2, "uriToString", { enumerable: true, get: function() {
      return uri_parser_1.uriToString;
    } });
    var backoff_timeout_1 = require_backoff_timeout();
    Object.defineProperty(exports2, "BackoffTimeout", { enumerable: true, get: function() {
      return backoff_timeout_1.BackoffTimeout;
    } });
    var load_balancer_1 = require_load_balancer();
    Object.defineProperty(exports2, "registerLoadBalancerType", { enumerable: true, get: function() {
      return load_balancer_1.registerLoadBalancerType;
    } });
    Object.defineProperty(exports2, "getFirstUsableConfig", { enumerable: true, get: function() {
      return load_balancer_1.getFirstUsableConfig;
    } });
    Object.defineProperty(exports2, "validateLoadBalancingConfig", { enumerable: true, get: function() {
      return load_balancer_1.validateLoadBalancingConfig;
    } });
    var subchannel_1 = require_subchannel();
    Object.defineProperty(exports2, "subchannelAddressToString", { enumerable: true, get: function() {
      return subchannel_1.subchannelAddressToString;
    } });
    var load_balancer_child_handler_1 = require_load_balancer_child_handler();
    Object.defineProperty(exports2, "ChildLoadBalancerHandler", { enumerable: true, get: function() {
      return load_balancer_child_handler_1.ChildLoadBalancerHandler;
    } });
    var picker_1 = require_picker();
    Object.defineProperty(exports2, "UnavailablePicker", { enumerable: true, get: function() {
      return picker_1.UnavailablePicker;
    } });
    Object.defineProperty(exports2, "QueuePicker", { enumerable: true, get: function() {
      return picker_1.QueuePicker;
    } });
    Object.defineProperty(exports2, "PickResultType", { enumerable: true, get: function() {
      return picker_1.PickResultType;
    } });
    var filter_1 = require_filter();
    Object.defineProperty(exports2, "BaseFilter", { enumerable: true, get: function() {
      return filter_1.BaseFilter;
    } });
    var filter_stack_1 = require_filter_stack();
    Object.defineProperty(exports2, "FilterStackFactory", { enumerable: true, get: function() {
      return filter_stack_1.FilterStackFactory;
    } });
  }
});

// node_modules/@grpc/grpc-js/build/src/index.js
var require_src = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.experimental = exports2.StatusBuilder = exports2.getClientChannel = exports2.ServerCredentials = exports2.Server = exports2.setLogVerbosity = exports2.setLogger = exports2.load = exports2.loadObject = exports2.CallCredentials = exports2.ChannelCredentials = exports2.waitForClientReady = exports2.closeClient = exports2.Channel = exports2.makeGenericClientConstructor = exports2.makeClientConstructor = exports2.loadPackageDefinition = exports2.Client = exports2.propagate = exports2.connectivityState = exports2.status = exports2.logVerbosity = exports2.Metadata = exports2.credentials = void 0;
    var call_credentials_1 = require_call_credentials();
    Object.defineProperty(exports2, "CallCredentials", { enumerable: true, get: function() {
      return call_credentials_1.CallCredentials;
    } });
    var channel_1 = require_channel();
    Object.defineProperty(exports2, "connectivityState", { enumerable: true, get: function() {
      return channel_1.ConnectivityState;
    } });
    Object.defineProperty(exports2, "Channel", { enumerable: true, get: function() {
      return channel_1.ChannelImplementation;
    } });
    var channel_credentials_1 = require_channel_credentials();
    Object.defineProperty(exports2, "ChannelCredentials", { enumerable: true, get: function() {
      return channel_credentials_1.ChannelCredentials;
    } });
    var client_1 = require_client();
    Object.defineProperty(exports2, "Client", { enumerable: true, get: function() {
      return client_1.Client;
    } });
    var constants_1 = require_constants();
    Object.defineProperty(exports2, "logVerbosity", { enumerable: true, get: function() {
      return constants_1.LogVerbosity;
    } });
    Object.defineProperty(exports2, "status", { enumerable: true, get: function() {
      return constants_1.Status;
    } });
    Object.defineProperty(exports2, "propagate", { enumerable: true, get: function() {
      return constants_1.Propagate;
    } });
    var logging = require_logging();
    var make_client_1 = require_make_client();
    Object.defineProperty(exports2, "loadPackageDefinition", { enumerable: true, get: function() {
      return make_client_1.loadPackageDefinition;
    } });
    Object.defineProperty(exports2, "makeClientConstructor", { enumerable: true, get: function() {
      return make_client_1.makeClientConstructor;
    } });
    Object.defineProperty(exports2, "makeGenericClientConstructor", { enumerable: true, get: function() {
      return make_client_1.makeClientConstructor;
    } });
    var metadata_1 = require_metadata();
    Object.defineProperty(exports2, "Metadata", { enumerable: true, get: function() {
      return metadata_1.Metadata;
    } });
    var server_1 = require_server();
    Object.defineProperty(exports2, "Server", { enumerable: true, get: function() {
      return server_1.Server;
    } });
    var server_credentials_1 = require_server_credentials();
    Object.defineProperty(exports2, "ServerCredentials", { enumerable: true, get: function() {
      return server_credentials_1.ServerCredentials;
    } });
    var status_builder_1 = require_status_builder();
    Object.defineProperty(exports2, "StatusBuilder", { enumerable: true, get: function() {
      return status_builder_1.StatusBuilder;
    } });
    exports2.credentials = {
      combineChannelCredentials: (channelCredentials, ...callCredentials) => {
        return callCredentials.reduce((acc, other) => acc.compose(other), channelCredentials);
      },
      combineCallCredentials: (first, ...additional) => {
        return additional.reduce((acc, other) => acc.compose(other), first);
      },
      createInsecure: channel_credentials_1.ChannelCredentials.createInsecure,
      createSsl: channel_credentials_1.ChannelCredentials.createSsl,
      createFromMetadataGenerator: call_credentials_1.CallCredentials.createFromMetadataGenerator,
      createFromGoogleCredential: call_credentials_1.CallCredentials.createFromGoogleCredential,
      createEmpty: call_credentials_1.CallCredentials.createEmpty
    };
    exports2.closeClient = (client) => client.close();
    exports2.waitForClientReady = (client, deadline, callback) => client.waitForReady(deadline, callback);
    exports2.loadObject = (value, options) => {
      throw new Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead");
    };
    exports2.load = (filename, format, options) => {
      throw new Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead");
    };
    exports2.setLogger = (logger) => {
      logging.setLogger(logger);
    };
    exports2.setLogVerbosity = (verbosity) => {
      logging.setLoggerVerbosity(verbosity);
    };
    exports2.getClientChannel = (client) => {
      return client_1.Client.prototype.getChannel.call(client);
    };
    var client_interceptors_1 = require_client_interceptors();
    Object.defineProperty(exports2, "ListenerBuilder", { enumerable: true, get: function() {
      return client_interceptors_1.ListenerBuilder;
    } });
    Object.defineProperty(exports2, "RequesterBuilder", { enumerable: true, get: function() {
      return client_interceptors_1.RequesterBuilder;
    } });
    Object.defineProperty(exports2, "InterceptingCall", { enumerable: true, get: function() {
      return client_interceptors_1.InterceptingCall;
    } });
    Object.defineProperty(exports2, "InterceptorConfigurationError", { enumerable: true, get: function() {
      return client_interceptors_1.InterceptorConfigurationError;
    } });
    var experimental = require_experimental();
    exports2.experimental = experimental;
    var resolver = require_resolver();
    var load_balancer = require_load_balancer();
    (() => {
      resolver.registerAll();
      load_balancer.registerAll();
    })();
  }
});

// node_modules/google-protobuf/google-protobuf.js
var require_google_protobuf = __commonJS({
  "node_modules/google-protobuf/google-protobuf.js"(exports, module) {
    var $jscomp = $jscomp || {};
    $jscomp.scope = {};
    $jscomp.findInternal = function(a, b, c) {
      a instanceof String && (a = String(a));
      for (var d = a.length, e = 0; e < d; e++) {
        var f = a[e];
        if (b.call(c, f, e, a))
          return { i: e, v: f };
      }
      return { i: -1, v: void 0 };
    };
    $jscomp.ASSUME_ES5 = false;
    $jscomp.ASSUME_NO_NATIVE_MAP = false;
    $jscomp.ASSUME_NO_NATIVE_SET = false;
    $jscomp.SIMPLE_FROUND_POLYFILL = false;
    $jscomp.defineProperty = $jscomp.ASSUME_ES5 || typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
      a != Array.prototype && a != Object.prototype && (a[b] = c.value);
    };
    $jscomp.getGlobal = function(a) {
      return typeof window != "undefined" && window === a ? a : typeof global != "undefined" && global != null ? global : a;
    };
    $jscomp.global = $jscomp.getGlobal(exports);
    $jscomp.polyfill = function(a, b, c, d) {
      if (b) {
        c = $jscomp.global;
        a = a.split(".");
        for (d = 0; d < a.length - 1; d++) {
          var e = a[d];
          e in c || (c[e] = {});
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && b != null && $jscomp.defineProperty(c, a, { configurable: true, writable: true, value: b });
      }
    };
    $jscomp.polyfill("Array.prototype.findIndex", function(a) {
      return a ? a : function(a2, c) {
        return $jscomp.findInternal(this, a2, c).i;
      };
    }, "es6", "es3");
    $jscomp.checkStringArgs = function(a, b, c) {
      if (a == null)
        throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
      if (b instanceof RegExp)
        throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
      return a + "";
    };
    $jscomp.polyfill("String.prototype.endsWith", function(a) {
      return a ? a : function(a2, c) {
        var b = $jscomp.checkStringArgs(this, a2, "endsWith");
        a2 += "";
        c === void 0 && (c = b.length);
        c = Math.max(0, Math.min(c | 0, b.length));
        for (var e = a2.length; 0 < e && 0 < c; )
          if (b[--c] != a2[--e])
            return false;
        return 0 >= e;
      };
    }, "es6", "es3");
    $jscomp.polyfill("Array.prototype.find", function(a) {
      return a ? a : function(a2, c) {
        return $jscomp.findInternal(this, a2, c).v;
      };
    }, "es6", "es3");
    $jscomp.polyfill("String.prototype.startsWith", function(a) {
      return a ? a : function(a2, c) {
        var b = $jscomp.checkStringArgs(this, a2, "startsWith");
        a2 += "";
        var e = b.length, f = a2.length;
        c = Math.max(0, Math.min(c | 0, b.length));
        for (var g = 0; g < f && c < e; )
          if (b[c++] != a2[g++])
            return false;
        return g >= f;
      };
    }, "es6", "es3");
    $jscomp.polyfill("String.prototype.repeat", function(a) {
      return a ? a : function(a2) {
        var b = $jscomp.checkStringArgs(this, null, "repeat");
        if (0 > a2 || 1342177279 < a2)
          throw new RangeError("Invalid count value");
        a2 |= 0;
        for (var d = ""; a2; )
          if (a2 & 1 && (d += b), a2 >>>= 1)
            b += b;
        return d;
      };
    }, "es6", "es3");
    var COMPILED = true;
    var goog = goog || {};
    goog.global = exports || self;
    goog.isDef = function(a) {
      return a !== void 0;
    };
    goog.isString = function(a) {
      return typeof a == "string";
    };
    goog.isBoolean = function(a) {
      return typeof a == "boolean";
    };
    goog.isNumber = function(a) {
      return typeof a == "number";
    };
    goog.exportPath_ = function(a, b, c) {
      a = a.split(".");
      c = c || goog.global;
      a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift()); )
        !a.length && goog.isDef(b) ? c[d] = b : c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {};
    };
    goog.define = function(a, b) {
      if (!COMPILED) {
        var c = goog.global.CLOSURE_UNCOMPILED_DEFINES, d = goog.global.CLOSURE_DEFINES;
        c && c.nodeType === void 0 && Object.prototype.hasOwnProperty.call(c, a) ? b = c[a] : d && d.nodeType === void 0 && Object.prototype.hasOwnProperty.call(d, a) && (b = d[a]);
      }
      return b;
    };
    goog.FEATURESET_YEAR = 2012;
    goog.DEBUG = true;
    goog.LOCALE = "en";
    goog.TRUSTED_SITE = true;
    goog.STRICT_MODE_COMPATIBLE = false;
    goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
    goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = false;
    goog.provide = function(a) {
      if (goog.isInModuleLoader_())
        throw Error("goog.provide cannot be used within a module.");
      if (!COMPILED && goog.isProvided_(a))
        throw Error('Namespace "' + a + '" already declared.');
      goog.constructNamespace_(a);
    };
    goog.constructNamespace_ = function(a, b) {
      if (!COMPILED) {
        delete goog.implicitNamespaces_[a];
        for (var c = a; (c = c.substring(0, c.lastIndexOf("."))) && !goog.getObjectByName(c); )
          goog.implicitNamespaces_[c] = true;
      }
      goog.exportPath_(a, b);
    };
    goog.getScriptNonce = function(a) {
      if (a && a != goog.global)
        return goog.getScriptNonce_(a.document);
      goog.cspNonce_ === null && (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document));
      return goog.cspNonce_;
    };
    goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
    goog.cspNonce_ = null;
    goog.getScriptNonce_ = function(a) {
      return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && goog.NONCE_PATTERN_.test(a) ? a : "";
    };
    goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
    goog.module = function(a) {
      if (!goog.isString(a) || !a || a.search(goog.VALID_MODULE_RE_) == -1)
        throw Error("Invalid module identifier");
      if (!goog.isInGoogModuleLoader_())
        throw Error("Module " + a + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
      if (goog.moduleLoaderState_.moduleName)
        throw Error("goog.module may only be called once per module.");
      goog.moduleLoaderState_.moduleName = a;
      if (!COMPILED) {
        if (goog.isProvided_(a))
          throw Error('Namespace "' + a + '" already declared.');
        delete goog.implicitNamespaces_[a];
      }
    };
    goog.module.get = function(a) {
      return goog.module.getInternal_(a);
    };
    goog.module.getInternal_ = function(a) {
      if (!COMPILED) {
        if (a in goog.loadedModules_)
          return goog.loadedModules_[a].exports;
        if (!goog.implicitNamespaces_[a])
          return a = goog.getObjectByName(a), a != null ? a : null;
      }
      return null;
    };
    goog.ModuleType = { ES6: "es6", GOOG: "goog" };
    goog.moduleLoaderState_ = null;
    goog.isInModuleLoader_ = function() {
      return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
    };
    goog.isInGoogModuleLoader_ = function() {
      return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG;
    };
    goog.isInEs6ModuleLoader_ = function() {
      if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6)
        return true;
      var a = goog.global.$jscomp;
      return a ? typeof a.getCurrentModulePath != "function" ? false : !!a.getCurrentModulePath() : false;
    };
    goog.module.declareLegacyNamespace = function() {
      if (!COMPILED && !goog.isInGoogModuleLoader_())
        throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
      if (!COMPILED && !goog.moduleLoaderState_.moduleName)
        throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
      goog.moduleLoaderState_.declareLegacyNamespace = true;
    };
    goog.declareModuleId = function(a) {
      if (!COMPILED) {
        if (!goog.isInEs6ModuleLoader_())
          throw Error("goog.declareModuleId may only be called from within an ES6 module");
        if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName)
          throw Error("goog.declareModuleId may only be called once per module.");
        if (a in goog.loadedModules_)
          throw Error('Module with namespace "' + a + '" already exists.');
      }
      if (goog.moduleLoaderState_)
        goog.moduleLoaderState_.moduleName = a;
      else {
        var b = goog.global.$jscomp;
        if (!b || typeof b.getCurrentModulePath != "function")
          throw Error('Module with namespace "' + a + '" has been loaded incorrectly.');
        b = b.require(b.getCurrentModulePath());
        goog.loadedModules_[a] = { exports: b, type: goog.ModuleType.ES6, moduleId: a };
      }
    };
    goog.setTestOnly = function(a) {
      if (goog.DISALLOW_TEST_ONLY_CODE)
        throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
    };
    goog.forwardDeclare = function(a) {
    };
    COMPILED || (goog.isProvided_ = function(a) {
      return a in goog.loadedModules_ || !goog.implicitNamespaces_[a] && goog.isDefAndNotNull(goog.getObjectByName(a));
    }, goog.implicitNamespaces_ = { "goog.module": true });
    goog.getObjectByName = function(a, b) {
      a = a.split(".");
      b = b || goog.global;
      for (var c = 0; c < a.length; c++)
        if (b = b[a[c]], !goog.isDefAndNotNull(b))
          return null;
      return b;
    };
    goog.globalize = function(a, b) {
      b = b || goog.global;
      for (var c in a)
        b[c] = a[c];
    };
    goog.addDependency = function(a, b, c, d) {
      !COMPILED && goog.DEPENDENCIES_ENABLED && goog.debugLoader_.addDependency(a, b, c, d);
    };
    goog.ENABLE_DEBUG_LOADER = true;
    goog.logToConsole_ = function(a) {
      goog.global.console && goog.global.console.error(a);
    };
    goog.require = function(a) {
      if (!COMPILED) {
        goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(a);
        if (goog.isProvided_(a)) {
          if (goog.isInModuleLoader_())
            return goog.module.getInternal_(a);
        } else if (goog.ENABLE_DEBUG_LOADER) {
          var b = goog.moduleLoaderState_;
          goog.moduleLoaderState_ = null;
          try {
            goog.debugLoader_.load_(a);
          } finally {
            goog.moduleLoaderState_ = b;
          }
        }
        return null;
      }
    };
    goog.requireType = function(a) {
      return {};
    };
    goog.basePath = "";
    goog.nullFunction = function() {
    };
    goog.abstractMethod = function() {
      throw Error("unimplemented abstract method");
    };
    goog.addSingletonGetter = function(a) {
      a.instance_ = void 0;
      a.getInstance = function() {
        if (a.instance_)
          return a.instance_;
        goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a);
        return a.instance_ = new a();
      };
    };
    goog.instantiatedSingletons_ = [];
    goog.LOAD_MODULE_USING_EVAL = true;
    goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
    goog.loadedModules_ = {};
    goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
    goog.TRANSPILE = "detect";
    goog.ASSUME_ES_MODULES_TRANSPILED = false;
    goog.TRANSPILE_TO_LANGUAGE = "";
    goog.TRANSPILER = "transpile.js";
    goog.hasBadLetScoping = null;
    goog.useSafari10Workaround = function() {
      if (goog.hasBadLetScoping == null) {
        try {
          var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";');
        } catch (b) {
          a = false;
        }
        goog.hasBadLetScoping = a;
      }
      return goog.hasBadLetScoping;
    };
    goog.workaroundSafari10EvalBug = function(a) {
      return "(function(){" + a + "\n;})();\n";
    };
    goog.loadModule = function(a) {
      var b = goog.moduleLoaderState_;
      try {
        goog.moduleLoaderState_ = { moduleName: "", declareLegacyNamespace: false, type: goog.ModuleType.GOOG };
        if (goog.isFunction(a))
          var c = a.call(void 0, {});
        else if (goog.isString(a))
          goog.useSafari10Workaround() && (a = goog.workaroundSafari10EvalBug(a)), c = goog.loadModuleFromSource_.call(void 0, a);
        else
          throw Error("Invalid module definition");
        var d = goog.moduleLoaderState_.moduleName;
        if (goog.isString(d) && d)
          goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(d, c) : goog.SEAL_MODULE_EXPORTS && Object.seal && typeof c == "object" && c != null && Object.seal(c), goog.loadedModules_[d] = { exports: c, type: goog.ModuleType.GOOG, moduleId: goog.moduleLoaderState_.moduleName };
        else
          throw Error('Invalid module name "' + d + '"');
      } finally {
        goog.moduleLoaderState_ = b;
      }
    };
    goog.loadModuleFromSource_ = function(a) {
      eval(a);
      return {};
    };
    goog.normalizePath_ = function(a) {
      a = a.split("/");
      for (var b = 0; b < a.length; )
        a[b] == "." ? a.splice(b, 1) : b && a[b] == ".." && a[b - 1] && a[b - 1] != ".." ? a.splice(--b, 2) : b++;
      return a.join("/");
    };
    goog.loadFileSync_ = function(a) {
      if (goog.global.CLOSURE_LOAD_FILE_SYNC)
        return goog.global.CLOSURE_LOAD_FILE_SYNC(a);
      try {
        var b = new goog.global.XMLHttpRequest();
        b.open("get", a, false);
        b.send();
        return b.status == 0 || b.status == 200 ? b.responseText : null;
      } catch (c) {
        return null;
      }
    };
    goog.transpile_ = function(a, b, c) {
      var d = goog.global.$jscomp;
      d || (goog.global.$jscomp = d = {});
      var e = d.transpile;
      if (!e) {
        var f = goog.basePath + goog.TRANSPILER, g = goog.loadFileSync_(f);
        if (g) {
          (function() {
            (0, eval)(g + "\n//# sourceURL=" + f);
          }).call(goog.global);
          if (goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile)
            throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
          goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile;
          d = goog.global.$jscomp;
          e = d.transpile;
        }
      }
      e || (e = d.transpile = function(a2, b2) {
        goog.logToConsole_(b2 + " requires transpilation but no transpiler was found.");
        return a2;
      });
      return e(a, b, c);
    };
    goog.typeOf = function(a) {
      var b = typeof a;
      if (b == "object")
        if (a) {
          if (a instanceof Array)
            return "array";
          if (a instanceof Object)
            return b;
          var c = Object.prototype.toString.call(a);
          if (c == "[object Window]")
            return "object";
          if (c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice"))
            return "array";
          if (c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call"))
            return "function";
        } else
          return "null";
      else if (b == "function" && typeof a.call == "undefined")
        return "object";
      return b;
    };
    goog.isNull = function(a) {
      return a === null;
    };
    goog.isDefAndNotNull = function(a) {
      return a != null;
    };
    goog.isArray = function(a) {
      return goog.typeOf(a) == "array";
    };
    goog.isArrayLike = function(a) {
      var b = goog.typeOf(a);
      return b == "array" || b == "object" && typeof a.length == "number";
    };
    goog.isDateLike = function(a) {
      return goog.isObject(a) && typeof a.getFullYear == "function";
    };
    goog.isFunction = function(a) {
      return goog.typeOf(a) == "function";
    };
    goog.isObject = function(a) {
      var b = typeof a;
      return b == "object" && a != null || b == "function";
    };
    goog.getUid = function(a) {
      return a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_);
    };
    goog.hasUid = function(a) {
      return !!a[goog.UID_PROPERTY_];
    };
    goog.removeUid = function(a) {
      a !== null && "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);
      try {
        delete a[goog.UID_PROPERTY_];
      } catch (b) {
      }
    };
    goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0);
    goog.uidCounter_ = 0;
    goog.getHashCode = goog.getUid;
    goog.removeHashCode = goog.removeUid;
    goog.cloneObject = function(a) {
      var b = goog.typeOf(a);
      if (b == "object" || b == "array") {
        if (typeof a.clone === "function")
          return a.clone();
        b = b == "array" ? [] : {};
        for (var c in a)
          b[c] = goog.cloneObject(a[c]);
        return b;
      }
      return a;
    };
    goog.bindNative_ = function(a, b, c) {
      return a.call.apply(a.bind, arguments);
    };
    goog.bindJs_ = function(a, b, c) {
      if (!a)
        throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
          var c2 = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(c2, d);
          return a.apply(b, c2);
        };
      }
      return function() {
        return a.apply(b, arguments);
      };
    };
    goog.bind = function(a, b, c) {
      Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
      return goog.bind.apply(null, arguments);
    };
    goog.partial = function(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function() {
        var b2 = c.slice();
        b2.push.apply(b2, arguments);
        return a.apply(this, b2);
      };
    };
    goog.mixin = function(a, b) {
      for (var c in b)
        a[c] = b[c];
    };
    goog.now = goog.TRUSTED_SITE && Date.now || function() {
      return +new Date();
    };
    goog.globalEval = function(a) {
      if (goog.global.execScript)
        goog.global.execScript(a, "JavaScript");
      else if (goog.global.eval) {
        if (goog.evalWorksForGlobals_ == null) {
          try {
            goog.global.eval("var _evalTest_ = 1;");
          } catch (d) {
          }
          if (typeof goog.global._evalTest_ != "undefined") {
            try {
              delete goog.global._evalTest_;
            } catch (d) {
            }
            goog.evalWorksForGlobals_ = true;
          } else
            goog.evalWorksForGlobals_ = false;
        }
        if (goog.evalWorksForGlobals_)
          goog.global.eval(a);
        else {
          var b = goog.global.document, c = b.createElement("SCRIPT");
          c.type = "text/javascript";
          c.defer = false;
          c.appendChild(b.createTextNode(a));
          b.head.appendChild(c);
          b.head.removeChild(c);
        }
      } else
        throw Error("goog.globalEval not available");
    };
    goog.evalWorksForGlobals_ = null;
    goog.getCssName = function(a, b) {
      if (String(a).charAt(0) == ".")
        throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + a);
      var c = function(a2) {
        return goog.cssNameMapping_[a2] || a2;
      }, d = function(a2) {
        a2 = a2.split("-");
        for (var b2 = [], d2 = 0; d2 < a2.length; d2++)
          b2.push(c(a2[d2]));
        return b2.join("-");
      };
      d = goog.cssNameMapping_ ? goog.cssNameMappingStyle_ == "BY_WHOLE" ? c : d : function(a2) {
        return a2;
      };
      a = b ? a + "-" + d(b) : d(a);
      return goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(a) : a;
    };
    goog.setCssNameMapping = function(a, b) {
      goog.cssNameMapping_ = a;
      goog.cssNameMappingStyle_ = b;
    };
    !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
    goog.getMsg = function(a, b, c) {
      c && c.html && (a = a.replace(/</g, "&lt;"));
      b && (a = a.replace(/\{\$([^}]+)}/g, function(a2, c2) {
        return b != null && c2 in b ? b[c2] : a2;
      }));
      return a;
    };
    goog.getMsgWithFallback = function(a, b) {
      return a;
    };
    goog.exportSymbol = function(a, b, c) {
      goog.exportPath_(a, b, c);
    };
    goog.exportProperty = function(a, b, c) {
      a[b] = c;
    };
    goog.inherits = function(a, b) {
      function c() {
      }
      c.prototype = b.prototype;
      a.superClass_ = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.base = function(a2, c2, f) {
        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)
          d[e - 2] = arguments[e];
        return b.prototype[c2].apply(a2, d);
      };
    };
    goog.base = function(a, b, c) {
      var d = arguments.callee.caller;
      if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !d)
        throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
      if (typeof d.superClass_ !== "undefined") {
        for (var e = Array(arguments.length - 1), f = 1; f < arguments.length; f++)
          e[f - 1] = arguments[f];
        return d.superClass_.constructor.apply(a, e);
      }
      if (typeof b != "string" && typeof b != "symbol")
        throw Error("method names provided to goog.base must be a string or a symbol");
      e = Array(arguments.length - 2);
      for (f = 2; f < arguments.length; f++)
        e[f - 2] = arguments[f];
      f = false;
      for (var g = a.constructor.prototype; g; g = Object.getPrototypeOf(g))
        if (g[b] === d)
          f = true;
        else if (f)
          return g[b].apply(a, e);
      if (a[b] === d)
        return a.constructor.prototype[b].apply(a, e);
      throw Error("goog.base called from a method of one name to a method of a different name");
    };
    goog.scope = function(a) {
      if (goog.isInModuleLoader_())
        throw Error("goog.scope is not supported within a module.");
      a.call(goog.global);
    };
    COMPILED || (goog.global.COMPILED = COMPILED);
    goog.defineClass = function(a, b) {
      var c = b.constructor, d = b.statics;
      c && c != Object.prototype.constructor || (c = function() {
        throw Error("cannot instantiate an interface (no constructor defined).");
      });
      c = goog.defineClass.createSealingConstructor_(c, a);
      a && goog.inherits(c, a);
      delete b.constructor;
      delete b.statics;
      goog.defineClass.applyProperties_(c.prototype, b);
      d != null && (d instanceof Function ? d(c) : goog.defineClass.applyProperties_(c, d));
      return c;
    };
    goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
    goog.defineClass.createSealingConstructor_ = function(a, b) {
      if (!goog.defineClass.SEAL_CLASS_INSTANCES)
        return a;
      var c = !goog.defineClass.isUnsealable_(b), d = function() {
        var b2 = a.apply(this, arguments) || this;
        b2[goog.UID_PROPERTY_] = b2[goog.UID_PROPERTY_];
        this.constructor === d && c && Object.seal instanceof Function && Object.seal(b2);
        return b2;
      };
      return d;
    };
    goog.defineClass.isUnsealable_ = function(a) {
      return a && a.prototype && a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_];
    };
    goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    goog.defineClass.applyProperties_ = function(a, b) {
      for (var c in b)
        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
      for (var d = 0; d < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; d++)
        c = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d], Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
    };
    goog.tagUnsealableClass = function(a) {
      !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = true);
    };
    goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
    !COMPILED && goog.DEPENDENCIES_ENABLED && (goog.inHtmlDocument_ = function() {
      var a = goog.global.document;
      return a != null && "write" in a;
    }, goog.isDocumentLoading_ = function() {
      var a = goog.global.document;
      return a.attachEvent ? a.readyState != "complete" : a.readyState == "loading";
    }, goog.findBasePath_ = function() {
      if (goog.isDef(goog.global.CLOSURE_BASE_PATH) && goog.isString(goog.global.CLOSURE_BASE_PATH))
        goog.basePath = goog.global.CLOSURE_BASE_PATH;
      else if (goog.inHtmlDocument_()) {
        var a = goog.global.document, b = a.currentScript;
        a = b ? [b] : a.getElementsByTagName("SCRIPT");
        for (b = a.length - 1; 0 <= b; --b) {
          var c = a[b].src, d = c.lastIndexOf("?");
          d = d == -1 ? c.length : d;
          if (c.substr(d - 7, 7) == "base.js") {
            goog.basePath = c.substr(0, d - 7);
            break;
          }
        }
      }
    }, goog.findBasePath_(), goog.Transpiler = function() {
      this.requiresTranspilation_ = null;
      this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE;
    }, goog.Transpiler.prototype.createRequiresTranspilation_ = function() {
      function a(a, b) {
        e ? d[a] = true : b() ? (c = a, d[a] = false) : e = d[a] = true;
      }
      function b(a) {
        try {
          return !!eval(a);
        } catch (h) {
          return false;
        }
      }
      var c = "es3", d = { es3: false }, e = false, f = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
      a("es5", function() {
        return b("[1,].length==1");
      });
      a("es6", function() {
        return f.match(/Edge\/(\d+)(\.\d)*/i) ? false : b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()');
      });
      a("es7", function() {
        return b("2 ** 2 == 4");
      });
      a("es8", function() {
        return b("async () => 1, true");
      });
      a("es9", function() {
        return b("({...rest} = {}), true");
      });
      a("es_next", function() {
        return false;
      });
      return { target: c, map: d };
    }, goog.Transpiler.prototype.needsTranspile = function(a, b) {
      if (goog.TRANSPILE == "always")
        return true;
      if (goog.TRANSPILE == "never")
        return false;
      if (!this.requiresTranspilation_) {
        var c = this.createRequiresTranspilation_();
        this.requiresTranspilation_ = c.map;
        this.transpilationTarget_ = this.transpilationTarget_ || c.target;
      }
      if (a in this.requiresTranspilation_)
        return this.requiresTranspilation_[a] ? true : !goog.inHtmlDocument_() || b != "es6" || "noModule" in goog.global.document.createElement("script") ? false : true;
      throw Error("Unknown language mode: " + a);
    }, goog.Transpiler.prototype.transpile = function(a, b) {
      return goog.transpile_(a, b, this.transpilationTarget_);
    }, goog.transpiler_ = new goog.Transpiler(), goog.protectScriptTag_ = function(a) {
      return a.replace(/<\/(SCRIPT)/ig, "\\x3c/$1");
    }, goog.DebugLoader_ = function() {
      this.dependencies_ = {};
      this.idToPath_ = {};
      this.written_ = {};
      this.loadingDeps_ = [];
      this.depsToLoad_ = [];
      this.paused_ = false;
      this.factory_ = new goog.DependencyFactory(goog.transpiler_);
      this.deferredCallbacks_ = {};
      this.deferredQueue_ = [];
    }, goog.DebugLoader_.prototype.bootstrap = function(a, b) {
      function c() {
        d && (goog.global.setTimeout(d, 0), d = null);
      }
      var d = b;
      if (a.length) {
        b = [];
        for (var e = 0; e < a.length; e++) {
          var f = this.getPathFromDeps_(a[e]);
          if (!f)
            throw Error("Unregonized namespace: " + a[e]);
          b.push(this.dependencies_[f]);
        }
        f = goog.require;
        var g = 0;
        for (e = 0; e < a.length; e++)
          f(a[e]), b[e].onLoad(function() {
            ++g == a.length && c();
          });
      } else
        c();
    }, goog.DebugLoader_.prototype.loadClosureDeps = function() {
      this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + "deps.js"), "deps.js", [], [], {}, false));
      this.loadDeps_();
    }, goog.DebugLoader_.prototype.requested = function(a, b) {
      (a = this.getPathFromDeps_(a)) && (b || this.areDepsLoaded_(this.dependencies_[a].requires)) && (b = this.deferredCallbacks_[a]) && (delete this.deferredCallbacks_[a], b());
    }, goog.DebugLoader_.prototype.setDependencyFactory = function(a) {
      this.factory_ = a;
    }, goog.DebugLoader_.prototype.load_ = function(a) {
      if (this.getPathFromDeps_(a)) {
        var b = this, c = [], d = function(a2) {
          var e = b.getPathFromDeps_(a2);
          if (!e)
            throw Error("Bad dependency path or symbol: " + a2);
          if (!b.written_[e]) {
            b.written_[e] = true;
            a2 = b.dependencies_[e];
            for (e = 0; e < a2.requires.length; e++)
              goog.isProvided_(a2.requires[e]) || d(a2.requires[e]);
            c.push(a2);
          }
        };
        d(a);
        a = !!this.depsToLoad_.length;
        this.depsToLoad_ = this.depsToLoad_.concat(c);
        this.paused_ || a || this.loadDeps_();
      } else
        throw a = "goog.require could not find: " + a, goog.logToConsole_(a), Error(a);
    }, goog.DebugLoader_.prototype.loadDeps_ = function() {
      for (var a = this, b = this.paused_; this.depsToLoad_.length && !b; )
        (function() {
          var c = false, d = a.depsToLoad_.shift(), e = false;
          a.loading_(d);
          var f = { pause: function() {
            if (c)
              throw Error("Cannot call pause after the call to load.");
            b = true;
          }, resume: function() {
            c ? a.resume_() : b = false;
          }, loaded: function() {
            if (e)
              throw Error("Double call to loaded.");
            e = true;
            a.loaded_(d);
          }, pending: function() {
            for (var b2 = [], c2 = 0; c2 < a.loadingDeps_.length; c2++)
              b2.push(a.loadingDeps_[c2]);
            return b2;
          }, setModuleState: function(a2) {
            goog.moduleLoaderState_ = { type: a2, moduleName: "", declareLegacyNamespace: false };
          }, registerEs6ModuleExports: function(a2, b2, c2) {
            c2 && (goog.loadedModules_[c2] = { exports: b2, type: goog.ModuleType.ES6, moduleId: c2 || "" });
          }, registerGoogModuleExports: function(a2, b2) {
            goog.loadedModules_[a2] = { exports: b2, type: goog.ModuleType.GOOG, moduleId: a2 };
          }, clearModuleState: function() {
            goog.moduleLoaderState_ = null;
          }, defer: function(b2) {
            if (c)
              throw Error("Cannot register with defer after the call to load.");
            a.defer_(d, b2);
          }, areDepsLoaded: function() {
            return a.areDepsLoaded_(d.requires);
          } };
          try {
            d.load(f);
          } finally {
            c = true;
          }
        })();
      b && this.pause_();
    }, goog.DebugLoader_.prototype.pause_ = function() {
      this.paused_ = true;
    }, goog.DebugLoader_.prototype.resume_ = function() {
      this.paused_ && (this.paused_ = false, this.loadDeps_());
    }, goog.DebugLoader_.prototype.loading_ = function(a) {
      this.loadingDeps_.push(a);
    }, goog.DebugLoader_.prototype.loaded_ = function(a) {
      for (var b = 0; b < this.loadingDeps_.length; b++)
        if (this.loadingDeps_[b] == a) {
          this.loadingDeps_.splice(b, 1);
          break;
        }
      for (b = 0; b < this.deferredQueue_.length; b++)
        if (this.deferredQueue_[b] == a.path) {
          this.deferredQueue_.splice(b, 1);
          break;
        }
      if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length)
        for (; this.deferredQueue_.length; )
          this.requested(this.deferredQueue_.shift(), true);
      a.loaded();
    }, goog.DebugLoader_.prototype.areDepsLoaded_ = function(a) {
      for (var b = 0; b < a.length; b++) {
        var c = this.getPathFromDeps_(a[b]);
        if (!c || !(c in this.deferredCallbacks_ || goog.isProvided_(a[b])))
          return false;
      }
      return true;
    }, goog.DebugLoader_.prototype.getPathFromDeps_ = function(a) {
      return a in this.idToPath_ ? this.idToPath_[a] : a in this.dependencies_ ? a : null;
    }, goog.DebugLoader_.prototype.defer_ = function(a, b) {
      this.deferredCallbacks_[a.path] = b;
      this.deferredQueue_.push(a.path);
    }, goog.LoadController = function() {
    }, goog.LoadController.prototype.pause = function() {
    }, goog.LoadController.prototype.resume = function() {
    }, goog.LoadController.prototype.loaded = function() {
    }, goog.LoadController.prototype.pending = function() {
    }, goog.LoadController.prototype.registerEs6ModuleExports = function(a, b, c) {
    }, goog.LoadController.prototype.setModuleState = function(a) {
    }, goog.LoadController.prototype.clearModuleState = function() {
    }, goog.LoadController.prototype.defer = function(a) {
    }, goog.LoadController.prototype.areDepsLoaded = function() {
    }, goog.Dependency = function(a, b, c, d, e) {
      this.path = a;
      this.relativePath = b;
      this.provides = c;
      this.requires = d;
      this.loadFlags = e;
      this.loaded_ = false;
      this.loadCallbacks_ = [];
    }, goog.Dependency.prototype.getPathName = function() {
      var a = this.path, b = a.indexOf("://");
      0 <= b && (a = a.substring(b + 3), b = a.indexOf("/"), 0 <= b && (a = a.substring(b + 1)));
      return a;
    }, goog.Dependency.prototype.onLoad = function(a) {
      this.loaded_ ? a() : this.loadCallbacks_.push(a);
    }, goog.Dependency.prototype.loaded = function() {
      this.loaded_ = true;
      var a = this.loadCallbacks_;
      this.loadCallbacks_ = [];
      for (var b = 0; b < a.length; b++)
        a[b]();
    }, goog.Dependency.defer_ = false, goog.Dependency.callbackMap_ = {}, goog.Dependency.registerCallback_ = function(a) {
      var b = Math.random().toString(32);
      goog.Dependency.callbackMap_[b] = a;
      return b;
    }, goog.Dependency.unregisterCallback_ = function(a) {
      delete goog.Dependency.callbackMap_[a];
    }, goog.Dependency.callback_ = function(a, b) {
      if (a in goog.Dependency.callbackMap_) {
        for (var c = goog.Dependency.callbackMap_[a], d = [], e = 1; e < arguments.length; e++)
          d.push(arguments[e]);
        c.apply(void 0, d);
      } else
        throw Error("Callback key " + a + " does not exist (was base.js loaded more than once?).");
    }, goog.Dependency.prototype.load = function(a) {
      if (goog.global.CLOSURE_IMPORT_SCRIPT)
        goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a.loaded() : a.pause();
      else if (goog.inHtmlDocument_()) {
        var b = goog.global.document;
        if (b.readyState == "complete" && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
          if (/\bdeps.js$/.test(this.path)) {
            a.loaded();
            return;
          }
          throw Error('Cannot write "' + this.path + '" after document load');
        }
        if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
          var c = goog.Dependency.registerCallback_(function(b2) {
            goog.DebugLoader_.IS_OLD_IE_ && b2.readyState != "complete" || (goog.Dependency.unregisterCallback_(c), a.loaded());
          }), d = !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce() ? ' nonce="' + goog.getScriptNonce() + '"' : "";
          d = '<script src="' + this.path + '" ' + (goog.DebugLoader_.IS_OLD_IE_ ? "onreadystatechange" : "onload") + `="goog.Dependency.callback_('` + c + `', this)" type="text/javascript" ` + (goog.Dependency.defer_ ? "defer" : "") + d + "><\/script>";
          b.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(d) : d);
        } else {
          var e = b.createElement("script");
          e.defer = goog.Dependency.defer_;
          e.async = false;
          e.type = "text/javascript";
          (d = goog.getScriptNonce()) && e.setAttribute("nonce", d);
          goog.DebugLoader_.IS_OLD_IE_ ? (a.pause(), e.onreadystatechange = function() {
            if (e.readyState == "loaded" || e.readyState == "complete")
              a.loaded(), a.resume();
          }) : e.onload = function() {
            e.onload = null;
            a.loaded();
          };
          e.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path;
          b.head.appendChild(e);
        }
      } else
        goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), this.relativePath == "deps.js" ? (goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."), a.loaded()) : a.pause();
    }, goog.Es6ModuleDependency = function(a, b, c, d, e) {
      goog.Dependency.call(this, a, b, c, d, e);
    }, goog.inherits(goog.Es6ModuleDependency, goog.Dependency), goog.Es6ModuleDependency.prototype.load = function(a) {
      function b(a2, b2) {
        a2 = b2 ? '<script type="module" crossorigin>' + b2 + "<\/script>" : '<script type="module" crossorigin src="' + a2 + '"><\/script>';
        d.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(a2) : a2);
      }
      function c(a2, b2) {
        var c2 = d.createElement("script");
        c2.defer = true;
        c2.async = false;
        c2.type = "module";
        c2.setAttribute("crossorigin", true);
        var e2 = goog.getScriptNonce();
        e2 && c2.setAttribute("nonce", e2);
        b2 ? c2.textContent = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(b2) : b2 : c2.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(a2) : a2;
        d.head.appendChild(c2);
      }
      if (goog.global.CLOSURE_IMPORT_SCRIPT)
        goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a.loaded() : a.pause();
      else if (goog.inHtmlDocument_()) {
        var d = goog.global.document, e = this;
        if (goog.isDocumentLoading_()) {
          var f = b;
          goog.Dependency.defer_ = true;
        } else
          f = c;
        var g = goog.Dependency.registerCallback_(function() {
          goog.Dependency.unregisterCallback_(g);
          a.setModuleState(goog.ModuleType.ES6);
        });
        f(void 0, 'goog.Dependency.callback_("' + g + '")');
        f(this.path, void 0);
        var h = goog.Dependency.registerCallback_(function(b2) {
          goog.Dependency.unregisterCallback_(h);
          a.registerEs6ModuleExports(e.path, b2, goog.moduleLoaderState_.moduleName);
        });
        f(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + h + '", m)');
        var k = goog.Dependency.registerCallback_(function() {
          goog.Dependency.unregisterCallback_(k);
          a.clearModuleState();
          a.loaded();
        });
        f(void 0, 'goog.Dependency.callback_("' + k + '")');
      } else
        goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), a.pause();
    }, goog.TransformedDependency = function(a, b, c, d, e) {
      goog.Dependency.call(this, a, b, c, d, e);
      this.contents_ = null;
      this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"));
    }, goog.inherits(goog.TransformedDependency, goog.Dependency), goog.TransformedDependency.prototype.load = function(a) {
      function b() {
        e.contents_ = goog.loadFileSync_(e.path);
        e.contents_ && (e.contents_ = e.transform(e.contents_), e.contents_ && (e.contents_ += "\n//# sourceURL=" + e.path));
      }
      function c() {
        e.lazyFetch_ && b();
        if (e.contents_) {
          f && a.setModuleState(goog.ModuleType.ES6);
          try {
            var c2 = e.contents_;
            e.contents_ = null;
            goog.globalEval(c2);
            if (f)
              var d2 = goog.moduleLoaderState_.moduleName;
          } finally {
            f && a.clearModuleState();
          }
          f && goog.global.$jscomp.require.ensure([e.getPathName()], function() {
            a.registerEs6ModuleExports(e.path, goog.global.$jscomp.require(e.getPathName()), d2);
          });
          a.loaded();
        }
      }
      function d() {
        var a2 = goog.global.document, b2 = goog.Dependency.registerCallback_(function() {
          goog.Dependency.unregisterCallback_(b2);
          c();
        }), d2 = '<script type="text/javascript">' + goog.protectScriptTag_('goog.Dependency.callback_("' + b2 + '");') + "<\/script>";
        a2.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(d2) : d2);
      }
      var e = this;
      if (goog.global.CLOSURE_IMPORT_SCRIPT)
        b(), this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (this.contents_ = null, a.loaded()) : a.pause();
      else {
        var f = this.loadFlags.module == goog.ModuleType.ES6;
        this.lazyFetch_ || b();
        var g = 1 < a.pending().length, h = g && goog.DebugLoader_.IS_OLD_IE_;
        g = goog.Dependency.defer_ && (g || goog.isDocumentLoading_());
        if (h || g)
          a.defer(function() {
            c();
          });
        else {
          var k = goog.global.document;
          h = goog.inHtmlDocument_() && "ActiveXObject" in goog.global;
          if (f && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !h) {
            goog.Dependency.defer_ = true;
            a.pause();
            var l = k.onreadystatechange;
            k.onreadystatechange = function() {
              k.readyState == "interactive" && (k.onreadystatechange = l, c(), a.resume());
              goog.isFunction(l) && l.apply(void 0, arguments);
            };
          } else
            !goog.DebugLoader_.IS_OLD_IE_ && goog.inHtmlDocument_() && goog.isDocumentLoading_() ? d() : c();
        }
      }
    }, goog.TransformedDependency.prototype.transform = function(a) {
    }, goog.TranspiledDependency = function(a, b, c, d, e, f) {
      goog.TransformedDependency.call(this, a, b, c, d, e);
      this.transpiler = f;
    }, goog.inherits(goog.TranspiledDependency, goog.TransformedDependency), goog.TranspiledDependency.prototype.transform = function(a) {
      return this.transpiler.transpile(a, this.getPathName());
    }, goog.PreTranspiledEs6ModuleDependency = function(a, b, c, d, e) {
      goog.TransformedDependency.call(this, a, b, c, d, e);
    }, goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency), goog.PreTranspiledEs6ModuleDependency.prototype.transform = function(a) {
      return a;
    }, goog.GoogModuleDependency = function(a, b, c, d, e, f, g) {
      goog.TransformedDependency.call(this, a, b, c, d, e);
      this.needsTranspile_ = f;
      this.transpiler_ = g;
    }, goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency), goog.GoogModuleDependency.prototype.transform = function(a) {
      this.needsTranspile_ && (a = this.transpiler_.transpile(a, this.getPathName()));
      return goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify(a + "\n//# sourceURL=" + this.path + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + a + "\n;return exports});\n//# sourceURL=" + this.path + "\n";
    }, goog.DebugLoader_.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.DebugLoader_.prototype.addDependency = function(a, b, c, d) {
      b = b || [];
      a = a.replace(/\\/g, "/");
      var e = goog.normalizePath_(goog.basePath + a);
      d && typeof d !== "boolean" || (d = d ? { module: goog.ModuleType.GOOG } : {});
      c = this.factory_.createDependency(e, a, b, c, d, goog.transpiler_.needsTranspile(d.lang || "es3", d.module));
      this.dependencies_[e] = c;
      for (c = 0; c < b.length; c++)
        this.idToPath_[b[c]] = e;
      this.idToPath_[a] = e;
    }, goog.DependencyFactory = function(a) {
      this.transpiler = a;
    }, goog.DependencyFactory.prototype.createDependency = function(a, b, c, d, e, f) {
      return e.module == goog.ModuleType.GOOG ? new goog.GoogModuleDependency(a, b, c, d, e, f, this.transpiler) : f ? new goog.TranspiledDependency(a, b, c, d, e, this.transpiler) : e.module == goog.ModuleType.ES6 ? goog.TRANSPILE == "never" && goog.ASSUME_ES_MODULES_TRANSPILED ? new goog.PreTranspiledEs6ModuleDependency(a, b, c, d, e) : new goog.Es6ModuleDependency(a, b, c, d, e) : new goog.Dependency(a, b, c, d, e);
    }, goog.debugLoader_ = new goog.DebugLoader_(), goog.loadClosureDeps = function() {
      goog.debugLoader_.loadClosureDeps();
    }, goog.setDependencyFactory = function(a) {
      goog.debugLoader_.setDependencyFactory(a);
    }, goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(), goog.bootstrap = function(a, b) {
      goog.debugLoader_.bootstrap(a, b);
    });
    goog.TRUSTED_TYPES_POLICY_NAME = "";
    goog.identity_ = function(a) {
      return a;
    };
    goog.createTrustedTypesPolicy = function(a) {
      var b = null;
      if (typeof TrustedTypes === "undefined" || !TrustedTypes.createPolicy)
        return b;
      try {
        b = TrustedTypes.createPolicy(a, { createHTML: goog.identity_, createScript: goog.identity_, createScriptURL: goog.identity_, createURL: goog.identity_ });
      } catch (c) {
        goog.logToConsole_(c.message);
      }
      return b;
    };
    goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null;
    goog.object = {};
    goog.object.is = function(a, b) {
      return a === b ? a !== 0 || 1 / a === 1 / b : a !== a && b !== b;
    };
    goog.object.forEach = function(a, b, c) {
      for (var d in a)
        b.call(c, a[d], d, a);
    };
    goog.object.filter = function(a, b, c) {
      var d = {}, e;
      for (e in a)
        b.call(c, a[e], e, a) && (d[e] = a[e]);
      return d;
    };
    goog.object.map = function(a, b, c) {
      var d = {}, e;
      for (e in a)
        d[e] = b.call(c, a[e], e, a);
      return d;
    };
    goog.object.some = function(a, b, c) {
      for (var d in a)
        if (b.call(c, a[d], d, a))
          return true;
      return false;
    };
    goog.object.every = function(a, b, c) {
      for (var d in a)
        if (!b.call(c, a[d], d, a))
          return false;
      return true;
    };
    goog.object.getCount = function(a) {
      var b = 0, c;
      for (c in a)
        b++;
      return b;
    };
    goog.object.getAnyKey = function(a) {
      for (var b in a)
        return b;
    };
    goog.object.getAnyValue = function(a) {
      for (var b in a)
        return a[b];
    };
    goog.object.contains = function(a, b) {
      return goog.object.containsValue(a, b);
    };
    goog.object.getValues = function(a) {
      var b = [], c = 0, d;
      for (d in a)
        b[c++] = a[d];
      return b;
    };
    goog.object.getKeys = function(a) {
      var b = [], c = 0, d;
      for (d in a)
        b[c++] = d;
      return b;
    };
    goog.object.getValueByKeys = function(a, b) {
      var c = goog.isArrayLike(b), d = c ? b : arguments;
      for (c = c ? 0 : 1; c < d.length; c++) {
        if (a == null)
          return;
        a = a[d[c]];
      }
      return a;
    };
    goog.object.containsKey = function(a, b) {
      return a !== null && b in a;
    };
    goog.object.containsValue = function(a, b) {
      for (var c in a)
        if (a[c] == b)
          return true;
      return false;
    };
    goog.object.findKey = function(a, b, c) {
      for (var d in a)
        if (b.call(c, a[d], d, a))
          return d;
    };
    goog.object.findValue = function(a, b, c) {
      return (b = goog.object.findKey(a, b, c)) && a[b];
    };
    goog.object.isEmpty = function(a) {
      for (var b in a)
        return false;
      return true;
    };
    goog.object.clear = function(a) {
      for (var b in a)
        delete a[b];
    };
    goog.object.remove = function(a, b) {
      var c;
      (c = b in a) && delete a[b];
      return c;
    };
    goog.object.add = function(a, b, c) {
      if (a !== null && b in a)
        throw Error('The object already contains the key "' + b + '"');
      goog.object.set(a, b, c);
    };
    goog.object.get = function(a, b, c) {
      return a !== null && b in a ? a[b] : c;
    };
    goog.object.set = function(a, b, c) {
      a[b] = c;
    };
    goog.object.setIfUndefined = function(a, b, c) {
      return b in a ? a[b] : a[b] = c;
    };
    goog.object.setWithReturnValueIfNotSet = function(a, b, c) {
      if (b in a)
        return a[b];
      c = c();
      return a[b] = c;
    };
    goog.object.equals = function(a, b) {
      for (var c in a)
        if (!(c in b) || a[c] !== b[c])
          return false;
      for (var d in b)
        if (!(d in a))
          return false;
      return true;
    };
    goog.object.clone = function(a) {
      var b = {}, c;
      for (c in a)
        b[c] = a[c];
      return b;
    };
    goog.object.unsafeClone = function(a) {
      var b = goog.typeOf(a);
      if (b == "object" || b == "array") {
        if (goog.isFunction(a.clone))
          return a.clone();
        b = b == "array" ? [] : {};
        for (var c in a)
          b[c] = goog.object.unsafeClone(a[c]);
        return b;
      }
      return a;
    };
    goog.object.transpose = function(a) {
      var b = {}, c;
      for (c in a)
        b[a[c]] = c;
      return b;
    };
    goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    goog.object.extend = function(a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
          a[c] = d[c];
        for (var f = 0; f < goog.object.PROTOTYPE_FIELDS_.length; f++)
          c = goog.object.PROTOTYPE_FIELDS_[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    };
    goog.object.create = function(a) {
      var b = arguments.length;
      if (b == 1 && goog.isArray(arguments[0]))
        return goog.object.create.apply(null, arguments[0]);
      if (b % 2)
        throw Error("Uneven number of arguments");
      for (var c = {}, d = 0; d < b; d += 2)
        c[arguments[d]] = arguments[d + 1];
      return c;
    };
    goog.object.createSet = function(a) {
      var b = arguments.length;
      if (b == 1 && goog.isArray(arguments[0]))
        return goog.object.createSet.apply(null, arguments[0]);
      for (var c = {}, d = 0; d < b; d++)
        c[arguments[d]] = true;
      return c;
    };
    goog.object.createImmutableView = function(a) {
      var b = a;
      Object.isFrozen && !Object.isFrozen(a) && (b = Object.create(a), Object.freeze(b));
      return b;
    };
    goog.object.isImmutableView = function(a) {
      return !!Object.isFrozen && Object.isFrozen(a);
    };
    goog.object.getAllPropertyNames = function(a, b, c) {
      if (!a)
        return [];
      if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
        return goog.object.getKeys(a);
      for (var d = {}; a && (a !== Object.prototype || b) && (a !== Function.prototype || c); ) {
        for (var e = Object.getOwnPropertyNames(a), f = 0; f < e.length; f++)
          d[e[f]] = true;
        a = Object.getPrototypeOf(a);
      }
      return goog.object.getKeys(d);
    };
    goog.object.getSuperClass = function(a) {
      return (a = Object.getPrototypeOf(a.prototype)) && a.constructor;
    };
    goog.debug = {};
    goog.debug.Error = function(a) {
      if (Error.captureStackTrace)
        Error.captureStackTrace(this, goog.debug.Error);
      else {
        var b = Error().stack;
        b && (this.stack = b);
      }
      a && (this.message = String(a));
      this.reportErrorToServer = true;
    };
    goog.inherits(goog.debug.Error, Error);
    goog.debug.Error.prototype.name = "CustomError";
    goog.dom = {};
    goog.dom.NodeType = { ELEMENT: 1, ATTRIBUTE: 2, TEXT: 3, CDATA_SECTION: 4, ENTITY_REFERENCE: 5, ENTITY: 6, PROCESSING_INSTRUCTION: 7, COMMENT: 8, DOCUMENT: 9, DOCUMENT_TYPE: 10, DOCUMENT_FRAGMENT: 11, NOTATION: 12 };
    goog.asserts = {};
    goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
    goog.asserts.AssertionError = function(a, b) {
      goog.debug.Error.call(this, goog.asserts.subs_(a, b));
      this.messagePattern = a;
    };
    goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
    goog.asserts.AssertionError.prototype.name = "AssertionError";
    goog.asserts.DEFAULT_ERROR_HANDLER = function(a) {
      throw a;
    };
    goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
    goog.asserts.subs_ = function(a, b) {
      a = a.split("%s");
      for (var c = "", d = a.length - 1, e = 0; e < d; e++)
        c += a[e] + (e < b.length ? b[e] : "%s");
      return c + a[d];
    };
    goog.asserts.doAssertFailure_ = function(a, b, c, d) {
      var e = "Assertion failed";
      if (c) {
        e += ": " + c;
        var f = d;
      } else
        a && (e += ": " + a, f = b);
      a = new goog.asserts.AssertionError("" + e, f || []);
      goog.asserts.errorHandler_(a);
    };
    goog.asserts.setErrorHandler = function(a) {
      goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = a);
    };
    goog.asserts.assert = function(a, b, c) {
      goog.asserts.ENABLE_ASSERTS && !a && goog.asserts.doAssertFailure_("", null, b, Array.prototype.slice.call(arguments, 2));
      return a;
    };
    goog.asserts.assertExists = function(a, b, c) {
      goog.asserts.ENABLE_ASSERTS && a == null && goog.asserts.doAssertFailure_("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
      return a;
    };
    goog.asserts.fail = function(a, b) {
      goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
    };
    goog.asserts.assertNumber = function(a, b, c) {
      goog.asserts.ENABLE_ASSERTS && !goog.isNumber(a) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a;
    };
    goog.asserts.assertString = function(a, b, c) {
      goog.asserts.ENABLE_ASSERTS && !goog.isString(a) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a;
    };
    goog.asserts.assertFunction = function(a, b, c) {
      goog.asserts.ENABLE_ASSERTS && !goog.isFunction(a) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a;
    };
    goog.asserts.assertObject = function(a, b, c) {
      goog.asserts.ENABLE_ASSERTS && !goog.isObject(a) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a;
    };
    goog.asserts.assertArray = function(a, b, c) {
      goog.asserts.ENABLE_ASSERTS && !goog.isArray(a) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a;
    };
    goog.asserts.assertBoolean = function(a, b, c) {
      goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(a) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a;
    };
    goog.asserts.assertElement = function(a, b, c) {
      !goog.asserts.ENABLE_ASSERTS || goog.isObject(a) && a.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a;
    };
    goog.asserts.assertInstanceof = function(a, b, c, d) {
      !goog.asserts.ENABLE_ASSERTS || a instanceof b || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(b), goog.asserts.getType_(a)], c, Array.prototype.slice.call(arguments, 3));
      return a;
    };
    goog.asserts.assertFinite = function(a, b, c) {
      !goog.asserts.ENABLE_ASSERTS || typeof a == "number" && isFinite(a) || goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [a], b, Array.prototype.slice.call(arguments, 2));
      return a;
    };
    goog.asserts.assertObjectPrototypeIsIntact = function() {
      for (var a in Object.prototype)
        goog.asserts.fail(a + " should not be enumerable in Object.prototype.");
    };
    goog.asserts.getType_ = function(a) {
      return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : a === null ? "null" : typeof a;
    };
    var jspb = { BinaryConstants: {}, ConstBinaryMessage: function() {
    }, BinaryMessage: function() {
    } };
    jspb.BinaryConstants.FieldType = { INVALID: -1, DOUBLE: 1, FLOAT: 2, INT64: 3, UINT64: 4, INT32: 5, FIXED64: 6, FIXED32: 7, BOOL: 8, STRING: 9, GROUP: 10, MESSAGE: 11, BYTES: 12, UINT32: 13, ENUM: 14, SFIXED32: 15, SFIXED64: 16, SINT32: 17, SINT64: 18, FHASH64: 30, VHASH64: 31 };
    jspb.BinaryConstants.WireType = { INVALID: -1, VARINT: 0, FIXED64: 1, DELIMITED: 2, START_GROUP: 3, END_GROUP: 4, FIXED32: 5 };
    jspb.BinaryConstants.FieldTypeToWireType = function(a) {
      var b = jspb.BinaryConstants.FieldType, c = jspb.BinaryConstants.WireType;
      switch (a) {
        case b.INT32:
        case b.INT64:
        case b.UINT32:
        case b.UINT64:
        case b.SINT32:
        case b.SINT64:
        case b.BOOL:
        case b.ENUM:
        case b.VHASH64:
          return c.VARINT;
        case b.DOUBLE:
        case b.FIXED64:
        case b.SFIXED64:
        case b.FHASH64:
          return c.FIXED64;
        case b.STRING:
        case b.MESSAGE:
        case b.BYTES:
          return c.DELIMITED;
        case b.FLOAT:
        case b.FIXED32:
        case b.SFIXED32:
          return c.FIXED32;
        default:
          return c.INVALID;
      }
    };
    jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1;
    jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60;
    jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54;
    jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22;
    jspb.BinaryConstants.FLOAT64_EPS = 5e-324;
    jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324;
    jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292;
    jspb.BinaryConstants.TWO_TO_20 = 1048576;
    jspb.BinaryConstants.TWO_TO_23 = 8388608;
    jspb.BinaryConstants.TWO_TO_31 = 2147483648;
    jspb.BinaryConstants.TWO_TO_32 = 4294967296;
    jspb.BinaryConstants.TWO_TO_52 = 4503599627370496;
    jspb.BinaryConstants.TWO_TO_63 = 9223372036854776e3;
    jspb.BinaryConstants.TWO_TO_64 = 18446744073709552e3;
    jspb.BinaryConstants.ZERO_HASH = "\0\0\0\0\0\0\0\0";
    goog.array = {};
    goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE;
    goog.array.ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR;
    goog.array.peek = function(a) {
      return a[a.length - 1];
    };
    goog.array.last = goog.array.peek;
    goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function(a, b, c) {
      goog.asserts.assert(a.length != null);
      return Array.prototype.indexOf.call(a, b, c);
    } : function(a, b, c) {
      c = c == null ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
      if (goog.isString(a))
        return goog.isString(b) && b.length == 1 ? a.indexOf(b, c) : -1;
      for (; c < a.length; c++)
        if (c in a && a[c] === b)
          return c;
      return -1;
    };
    goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function(a, b, c) {
      goog.asserts.assert(a.length != null);
      return Array.prototype.lastIndexOf.call(a, b, c == null ? a.length - 1 : c);
    } : function(a, b, c) {
      c = c == null ? a.length - 1 : c;
      0 > c && (c = Math.max(0, a.length + c));
      if (goog.isString(a))
        return goog.isString(b) && b.length == 1 ? a.lastIndexOf(b, c) : -1;
      for (; 0 <= c; c--)
        if (c in a && a[c] === b)
          return c;
      return -1;
    };
    goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function(a, b, c) {
      goog.asserts.assert(a.length != null);
      Array.prototype.forEach.call(a, b, c);
    } : function(a, b, c) {
      for (var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0; f < d; f++)
        f in e && b.call(c, e[f], f, a);
    };
    goog.array.forEachRight = function(a, b, c) {
      var d = a.length, e = goog.isString(a) ? a.split("") : a;
      for (--d; 0 <= d; --d)
        d in e && b.call(c, e[d], d, a);
    };
    goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function(a, b, c) {
      goog.asserts.assert(a.length != null);
      return Array.prototype.filter.call(a, b, c);
    } : function(a, b, c) {
      for (var d = a.length, e = [], f = 0, g = goog.isString(a) ? a.split("") : a, h = 0; h < d; h++)
        if (h in g) {
          var k = g[h];
          b.call(c, k, h, a) && (e[f++] = k);
        }
      return e;
    };
    goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function(a, b, c) {
      goog.asserts.assert(a.length != null);
      return Array.prototype.map.call(a, b, c);
    } : function(a, b, c) {
      for (var d = a.length, e = Array(d), f = goog.isString(a) ? a.split("") : a, g = 0; g < d; g++)
        g in f && (e[g] = b.call(c, f[g], g, a));
      return e;
    };
    goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function(a, b, c, d) {
      goog.asserts.assert(a.length != null);
      d && (b = goog.bind(b, d));
      return Array.prototype.reduce.call(a, b, c);
    } : function(a, b, c, d) {
      var e = c;
      goog.array.forEach(a, function(c2, g) {
        e = b.call(d, e, c2, g, a);
      });
      return e;
    };
    goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function(a, b, c, d) {
      goog.asserts.assert(a.length != null);
      goog.asserts.assert(b != null);
      d && (b = goog.bind(b, d));
      return Array.prototype.reduceRight.call(a, b, c);
    } : function(a, b, c, d) {
      var e = c;
      goog.array.forEachRight(a, function(c2, g) {
        e = b.call(d, e, c2, g, a);
      });
      return e;
    };
    goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function(a, b, c) {
      goog.asserts.assert(a.length != null);
      return Array.prototype.some.call(a, b, c);
    } : function(a, b, c) {
      for (var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a))
          return true;
      return false;
    };
    goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function(a, b, c) {
      goog.asserts.assert(a.length != null);
      return Array.prototype.every.call(a, b, c);
    } : function(a, b, c) {
      for (var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && !b.call(c, e[f], f, a))
          return false;
      return true;
    };
    goog.array.count = function(a, b, c) {
      var d = 0;
      goog.array.forEach(a, function(a2, f, g) {
        b.call(c, a2, f, g) && ++d;
      }, c);
      return d;
    };
    goog.array.find = function(a, b, c) {
      b = goog.array.findIndex(a, b, c);
      return 0 > b ? null : goog.isString(a) ? a.charAt(b) : a[b];
    };
    goog.array.findIndex = function(a, b, c) {
      for (var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a))
          return f;
      return -1;
    };
    goog.array.findRight = function(a, b, c) {
      b = goog.array.findIndexRight(a, b, c);
      return 0 > b ? null : goog.isString(a) ? a.charAt(b) : a[b];
    };
    goog.array.findIndexRight = function(a, b, c) {
      var d = a.length, e = goog.isString(a) ? a.split("") : a;
      for (--d; 0 <= d; d--)
        if (d in e && b.call(c, e[d], d, a))
          return d;
      return -1;
    };
    goog.array.contains = function(a, b) {
      return 0 <= goog.array.indexOf(a, b);
    };
    goog.array.isEmpty = function(a) {
      return a.length == 0;
    };
    goog.array.clear = function(a) {
      if (!goog.isArray(a))
        for (var b = a.length - 1; 0 <= b; b--)
          delete a[b];
      a.length = 0;
    };
    goog.array.insert = function(a, b) {
      goog.array.contains(a, b) || a.push(b);
    };
    goog.array.insertAt = function(a, b, c) {
      goog.array.splice(a, c, 0, b);
    };
    goog.array.insertArrayAt = function(a, b, c) {
      goog.partial(goog.array.splice, a, c, 0).apply(null, b);
    };
    goog.array.insertBefore = function(a, b, c) {
      var d;
      arguments.length == 2 || 0 > (d = goog.array.indexOf(a, c)) ? a.push(b) : goog.array.insertAt(a, b, d);
    };
    goog.array.remove = function(a, b) {
      b = goog.array.indexOf(a, b);
      var c;
      (c = 0 <= b) && goog.array.removeAt(a, b);
      return c;
    };
    goog.array.removeLast = function(a, b) {
      b = goog.array.lastIndexOf(a, b);
      return 0 <= b ? (goog.array.removeAt(a, b), true) : false;
    };
    goog.array.removeAt = function(a, b) {
      goog.asserts.assert(a.length != null);
      return Array.prototype.splice.call(a, b, 1).length == 1;
    };
    goog.array.removeIf = function(a, b, c) {
      b = goog.array.findIndex(a, b, c);
      return 0 <= b ? (goog.array.removeAt(a, b), true) : false;
    };
    goog.array.removeAllIf = function(a, b, c) {
      var d = 0;
      goog.array.forEachRight(a, function(e, f) {
        b.call(c, e, f, a) && goog.array.removeAt(a, f) && d++;
      });
      return d;
    };
    goog.array.concat = function(a) {
      return Array.prototype.concat.apply([], arguments);
    };
    goog.array.join = function(a) {
      return Array.prototype.concat.apply([], arguments);
    };
    goog.array.toArray = function(a) {
      var b = a.length;
      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
          c[d] = a[d];
        return c;
      }
      return [];
    };
    goog.array.clone = goog.array.toArray;
    goog.array.extend = function(a, b) {
      for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (goog.isArrayLike(d)) {
          var e = a.length || 0, f = d.length || 0;
          a.length = e + f;
          for (var g = 0; g < f; g++)
            a[e + g] = d[g];
        } else
          a.push(d);
      }
    };
    goog.array.splice = function(a, b, c, d) {
      goog.asserts.assert(a.length != null);
      return Array.prototype.splice.apply(a, goog.array.slice(arguments, 1));
    };
    goog.array.slice = function(a, b, c) {
      goog.asserts.assert(a.length != null);
      return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
    };
    goog.array.removeDuplicates = function(a, b, c) {
      b = b || a;
      var d = function(a2) {
        return goog.isObject(a2) ? "o" + goog.getUid(a2) : (typeof a2).charAt(0) + a2;
      };
      c = c || d;
      d = {};
      for (var e = 0, f = 0; f < a.length; ) {
        var g = a[f++], h = c(g);
        Object.prototype.hasOwnProperty.call(d, h) || (d[h] = true, b[e++] = g);
      }
      b.length = e;
    };
    goog.array.binarySearch = function(a, b, c) {
      return goog.array.binarySearch_(a, c || goog.array.defaultCompare, false, b);
    };
    goog.array.binarySelect = function(a, b, c) {
      return goog.array.binarySearch_(a, b, true, void 0, c);
    };
    goog.array.binarySearch_ = function(a, b, c, d, e) {
      for (var f = 0, g = a.length, h; f < g; ) {
        var k = f + g >> 1;
        var l = c ? b.call(e, a[k], k, a) : b(d, a[k]);
        0 < l ? f = k + 1 : (g = k, h = !l);
      }
      return h ? f : ~f;
    };
    goog.array.sort = function(a, b) {
      a.sort(b || goog.array.defaultCompare);
    };
    goog.array.stableSort = function(a, b) {
      for (var c = Array(a.length), d = 0; d < a.length; d++)
        c[d] = { index: d, value: a[d] };
      var e = b || goog.array.defaultCompare;
      goog.array.sort(c, function(a2, b2) {
        return e(a2.value, b2.value) || a2.index - b2.index;
      });
      for (d = 0; d < a.length; d++)
        a[d] = c[d].value;
    };
    goog.array.sortByKey = function(a, b, c) {
      var d = c || goog.array.defaultCompare;
      goog.array.sort(a, function(a2, c2) {
        return d(b(a2), b(c2));
      });
    };
    goog.array.sortObjectsByKey = function(a, b, c) {
      goog.array.sortByKey(a, function(a2) {
        return a2[b];
      }, c);
    };
    goog.array.isSorted = function(a, b, c) {
      b = b || goog.array.defaultCompare;
      for (var d = 1; d < a.length; d++) {
        var e = b(a[d - 1], a[d]);
        if (0 < e || e == 0 && c)
          return false;
      }
      return true;
    };
    goog.array.equals = function(a, b, c) {
      if (!goog.isArrayLike(a) || !goog.isArrayLike(b) || a.length != b.length)
        return false;
      var d = a.length;
      c = c || goog.array.defaultCompareEquality;
      for (var e = 0; e < d; e++)
        if (!c(a[e], b[e]))
          return false;
      return true;
    };
    goog.array.compare3 = function(a, b, c) {
      c = c || goog.array.defaultCompare;
      for (var d = Math.min(a.length, b.length), e = 0; e < d; e++) {
        var f = c(a[e], b[e]);
        if (f != 0)
          return f;
      }
      return goog.array.defaultCompare(a.length, b.length);
    };
    goog.array.defaultCompare = function(a, b) {
      return a > b ? 1 : a < b ? -1 : 0;
    };
    goog.array.inverseDefaultCompare = function(a, b) {
      return -goog.array.defaultCompare(a, b);
    };
    goog.array.defaultCompareEquality = function(a, b) {
      return a === b;
    };
    goog.array.binaryInsert = function(a, b, c) {
      c = goog.array.binarySearch(a, b, c);
      return 0 > c ? (goog.array.insertAt(a, b, -(c + 1)), true) : false;
    };
    goog.array.binaryRemove = function(a, b, c) {
      b = goog.array.binarySearch(a, b, c);
      return 0 <= b ? goog.array.removeAt(a, b) : false;
    };
    goog.array.bucket = function(a, b, c) {
      for (var d = {}, e = 0; e < a.length; e++) {
        var f = a[e], g = b.call(c, f, e, a);
        goog.isDef(g) && (d[g] || (d[g] = [])).push(f);
      }
      return d;
    };
    goog.array.toObject = function(a, b, c) {
      var d = {};
      goog.array.forEach(a, function(e, f) {
        d[b.call(c, e, f, a)] = e;
      });
      return d;
    };
    goog.array.range = function(a, b, c) {
      var d = [], e = 0, f = a;
      c = c || 1;
      b !== void 0 && (e = a, f = b);
      if (0 > c * (f - e))
        return [];
      if (0 < c)
        for (a = e; a < f; a += c)
          d.push(a);
      else
        for (a = e; a > f; a += c)
          d.push(a);
      return d;
    };
    goog.array.repeat = function(a, b) {
      for (var c = [], d = 0; d < b; d++)
        c[d] = a;
      return c;
    };
    goog.array.flatten = function(a) {
      for (var b = [], c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        if (goog.isArray(d))
          for (var e = 0; e < d.length; e += 8192) {
            var f = goog.array.slice(d, e, e + 8192);
            f = goog.array.flatten.apply(null, f);
            for (var g = 0; g < f.length; g++)
              b.push(f[g]);
          }
        else
          b.push(d);
      }
      return b;
    };
    goog.array.rotate = function(a, b) {
      goog.asserts.assert(a.length != null);
      a.length && (b %= a.length, 0 < b ? Array.prototype.unshift.apply(a, a.splice(-b, b)) : 0 > b && Array.prototype.push.apply(a, a.splice(0, -b)));
      return a;
    };
    goog.array.moveItem = function(a, b, c) {
      goog.asserts.assert(0 <= b && b < a.length);
      goog.asserts.assert(0 <= c && c < a.length);
      b = Array.prototype.splice.call(a, b, 1);
      Array.prototype.splice.call(a, c, 0, b[0]);
    };
    goog.array.zip = function(a) {
      if (!arguments.length)
        return [];
      for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++)
        arguments[d].length < c && (c = arguments[d].length);
      for (d = 0; d < c; d++) {
        for (var e = [], f = 0; f < arguments.length; f++)
          e.push(arguments[f][d]);
        b.push(e);
      }
      return b;
    };
    goog.array.shuffle = function(a, b) {
      b = b || Math.random;
      for (var c = a.length - 1; 0 < c; c--) {
        var d = Math.floor(b() * (c + 1)), e = a[c];
        a[c] = a[d];
        a[d] = e;
      }
    };
    goog.array.copyByIndex = function(a, b) {
      var c = [];
      goog.array.forEach(b, function(b2) {
        c.push(a[b2]);
      });
      return c;
    };
    goog.array.concatMap = function(a, b, c) {
      return goog.array.concat.apply([], goog.array.map(a, b, c));
    };
    goog.crypt = {};
    goog.crypt.stringToByteArray = function(a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && (b[c++] = e & 255, e >>= 8);
        b[c++] = e;
      }
      return b;
    };
    goog.crypt.byteArrayToString = function(a) {
      if (8192 >= a.length)
        return String.fromCharCode.apply(null, a);
      for (var b = "", c = 0; c < a.length; c += 8192) {
        var d = goog.array.slice(a, c, c + 8192);
        b += String.fromCharCode.apply(null, d);
      }
      return b;
    };
    goog.crypt.byteArrayToHex = function(a, b) {
      return goog.array.map(a, function(a2) {
        a2 = a2.toString(16);
        return 1 < a2.length ? a2 : "0" + a2;
      }).join(b || "");
    };
    goog.crypt.hexToByteArray = function(a) {
      goog.asserts.assert(a.length % 2 == 0, "Key string length must be multiple of 2");
      for (var b = [], c = 0; c < a.length; c += 2)
        b.push(parseInt(a.substring(c, c + 2), 16));
      return b;
    };
    goog.crypt.stringToUtf8ByteArray = function(a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : ((e & 64512) == 55296 && d + 1 < a.length && (a.charCodeAt(d + 1) & 64512) == 56320 ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128);
      }
      return b;
    };
    goog.crypt.utf8ByteArrayToString = function(a) {
      for (var b = [], c = 0, d = 0; c < a.length; ) {
        var e = a[c++];
        if (128 > e)
          b[d++] = String.fromCharCode(e);
        else if (191 < e && 224 > e) {
          var f = a[c++];
          b[d++] = String.fromCharCode((e & 31) << 6 | f & 63);
        } else if (239 < e && 365 > e) {
          f = a[c++];
          var g = a[c++], h = a[c++];
          e = ((e & 7) << 18 | (f & 63) << 12 | (g & 63) << 6 | h & 63) - 65536;
          b[d++] = String.fromCharCode(55296 + (e >> 10));
          b[d++] = String.fromCharCode(56320 + (e & 1023));
        } else
          f = a[c++], g = a[c++], b[d++] = String.fromCharCode((e & 15) << 12 | (f & 63) << 6 | g & 63);
      }
      return b.join("");
    };
    goog.crypt.xorByteArray = function(a, b) {
      goog.asserts.assert(a.length == b.length, "XOR array lengths must match");
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d] ^ b[d]);
      return c;
    };
    goog.dom.asserts = {};
    goog.dom.asserts.assertIsLocation = function(a) {
      if (goog.asserts.ENABLE_ASSERTS) {
        var b = goog.dom.asserts.getWindow_(a);
        b && (!a || !(a instanceof b.Location) && a instanceof b.Element) && goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(a));
      }
      return a;
    };
    goog.dom.asserts.assertIsElementType_ = function(a, b) {
      if (goog.asserts.ENABLE_ASSERTS) {
        var c = goog.dom.asserts.getWindow_(a);
        c && typeof c[b] != "undefined" && (a && (a instanceof c[b] || !(a instanceof c.Location || a instanceof c.Element)) || goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b, goog.dom.asserts.debugStringForType_(a)));
      }
      return a;
    };
    goog.dom.asserts.assertIsHTMLAnchorElement = function(a) {
      return goog.dom.asserts.assertIsElementType_(a, "HTMLAnchorElement");
    };
    goog.dom.asserts.assertIsHTMLButtonElement = function(a) {
      return goog.dom.asserts.assertIsElementType_(a, "HTMLButtonElement");
    };
    goog.dom.asserts.assertIsHTMLLinkElement = function(a) {
      return goog.dom.asserts.assertIsElementType_(a, "HTMLLinkElement");
    };
    goog.dom.asserts.assertIsHTMLImageElement = function(a) {
      return goog.dom.asserts.assertIsElementType_(a, "HTMLImageElement");
    };
    goog.dom.asserts.assertIsHTMLAudioElement = function(a) {
      return goog.dom.asserts.assertIsElementType_(a, "HTMLAudioElement");
    };
    goog.dom.asserts.assertIsHTMLVideoElement = function(a) {
      return goog.dom.asserts.assertIsElementType_(a, "HTMLVideoElement");
    };
    goog.dom.asserts.assertIsHTMLInputElement = function(a) {
      return goog.dom.asserts.assertIsElementType_(a, "HTMLInputElement");
    };
    goog.dom.asserts.assertIsHTMLTextAreaElement = function(a) {
      return goog.dom.asserts.assertIsElementType_(a, "HTMLTextAreaElement");
    };
    goog.dom.asserts.assertIsHTMLCanvasElement = function(a) {
      return goog.dom.asserts.assertIsElementType_(a, "HTMLCanvasElement");
    };
    goog.dom.asserts.assertIsHTMLEmbedElement = function(a) {
      return goog.dom.asserts.assertIsElementType_(a, "HTMLEmbedElement");
    };
    goog.dom.asserts.assertIsHTMLFormElement = function(a) {
      return goog.dom.asserts.assertIsElementType_(a, "HTMLFormElement");
    };
    goog.dom.asserts.assertIsHTMLFrameElement = function(a) {
      return goog.dom.asserts.assertIsElementType_(a, "HTMLFrameElement");
    };
    goog.dom.asserts.assertIsHTMLIFrameElement = function(a) {
      return goog.dom.asserts.assertIsElementType_(a, "HTMLIFrameElement");
    };
    goog.dom.asserts.assertIsHTMLObjectElement = function(a) {
      return goog.dom.asserts.assertIsElementType_(a, "HTMLObjectElement");
    };
    goog.dom.asserts.assertIsHTMLScriptElement = function(a) {
      return goog.dom.asserts.assertIsElementType_(a, "HTMLScriptElement");
    };
    goog.dom.asserts.debugStringForType_ = function(a) {
      if (goog.isObject(a))
        try {
          return a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a);
        } catch (b) {
          return "<object could not be stringified>";
        }
      else
        return a === void 0 ? "undefined" : a === null ? "null" : typeof a;
    };
    goog.dom.asserts.getWindow_ = function(a) {
      try {
        var b = a && a.ownerDocument, c = b && (b.defaultView || b.parentWindow);
        c = c || goog.global;
        if (c.Element && c.Location)
          return c;
      } catch (d) {
      }
      return null;
    };
    goog.functions = {};
    goog.functions.constant = function(a) {
      return function() {
        return a;
      };
    };
    goog.functions.FALSE = function() {
      return false;
    };
    goog.functions.TRUE = function() {
      return true;
    };
    goog.functions.NULL = function() {
      return null;
    };
    goog.functions.identity = function(a, b) {
      return a;
    };
    goog.functions.error = function(a) {
      return function() {
        throw Error(a);
      };
    };
    goog.functions.fail = function(a) {
      return function() {
        throw a;
      };
    };
    goog.functions.lock = function(a, b) {
      b = b || 0;
      return function() {
        return a.apply(this, Array.prototype.slice.call(arguments, 0, b));
      };
    };
    goog.functions.nth = function(a) {
      return function() {
        return arguments[a];
      };
    };
    goog.functions.partialRight = function(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function() {
        var b2 = Array.prototype.slice.call(arguments);
        b2.push.apply(b2, c);
        return a.apply(this, b2);
      };
    };
    goog.functions.withReturnValue = function(a, b) {
      return goog.functions.sequence(a, goog.functions.constant(b));
    };
    goog.functions.equalTo = function(a, b) {
      return function(c) {
        return b ? a == c : a === c;
      };
    };
    goog.functions.compose = function(a, b) {
      var c = arguments, d = c.length;
      return function() {
        var a2;
        d && (a2 = c[d - 1].apply(this, arguments));
        for (var b2 = d - 2; 0 <= b2; b2--)
          a2 = c[b2].call(this, a2);
        return a2;
      };
    };
    goog.functions.sequence = function(a) {
      var b = arguments, c = b.length;
      return function() {
        for (var a2, e = 0; e < c; e++)
          a2 = b[e].apply(this, arguments);
        return a2;
      };
    };
    goog.functions.and = function(a) {
      var b = arguments, c = b.length;
      return function() {
        for (var a2 = 0; a2 < c; a2++)
          if (!b[a2].apply(this, arguments))
            return false;
        return true;
      };
    };
    goog.functions.or = function(a) {
      var b = arguments, c = b.length;
      return function() {
        for (var a2 = 0; a2 < c; a2++)
          if (b[a2].apply(this, arguments))
            return true;
        return false;
      };
    };
    goog.functions.not = function(a) {
      return function() {
        return !a.apply(this, arguments);
      };
    };
    goog.functions.create = function(a, b) {
      var c = function() {
      };
      c.prototype = a.prototype;
      c = new c();
      a.apply(c, Array.prototype.slice.call(arguments, 1));
      return c;
    };
    goog.functions.CACHE_RETURN_VALUE = true;
    goog.functions.cacheReturnValue = function(a) {
      var b = false, c;
      return function() {
        if (!goog.functions.CACHE_RETURN_VALUE)
          return a();
        b || (c = a(), b = true);
        return c;
      };
    };
    goog.functions.once = function(a) {
      var b = a;
      return function() {
        if (b) {
          var a2 = b;
          b = null;
          a2();
        }
      };
    };
    goog.functions.debounce = function(a, b, c) {
      var d = 0;
      return function(e) {
        goog.global.clearTimeout(d);
        var f = arguments;
        d = goog.global.setTimeout(function() {
          a.apply(c, f);
        }, b);
      };
    };
    goog.functions.throttle = function(a, b, c) {
      var d = 0, e = false, f = [], g = function() {
        d = 0;
        e && (e = false, h());
      }, h = function() {
        d = goog.global.setTimeout(g, b);
        a.apply(c, f);
      };
      return function(a2) {
        f = arguments;
        d ? e = true : h();
      };
    };
    goog.functions.rateLimit = function(a, b, c) {
      var d = 0, e = function() {
        d = 0;
      };
      return function(f) {
        d || (d = goog.global.setTimeout(e, b), a.apply(c, arguments));
      };
    };
    goog.dom.HtmlElement = function() {
    };
    goog.dom.TagName = function(a) {
      this.tagName_ = a;
    };
    goog.dom.TagName.prototype.toString = function() {
      return this.tagName_;
    };
    goog.dom.TagName.A = new goog.dom.TagName("A");
    goog.dom.TagName.ABBR = new goog.dom.TagName("ABBR");
    goog.dom.TagName.ACRONYM = new goog.dom.TagName("ACRONYM");
    goog.dom.TagName.ADDRESS = new goog.dom.TagName("ADDRESS");
    goog.dom.TagName.APPLET = new goog.dom.TagName("APPLET");
    goog.dom.TagName.AREA = new goog.dom.TagName("AREA");
    goog.dom.TagName.ARTICLE = new goog.dom.TagName("ARTICLE");
    goog.dom.TagName.ASIDE = new goog.dom.TagName("ASIDE");
    goog.dom.TagName.AUDIO = new goog.dom.TagName("AUDIO");
    goog.dom.TagName.B = new goog.dom.TagName("B");
    goog.dom.TagName.BASE = new goog.dom.TagName("BASE");
    goog.dom.TagName.BASEFONT = new goog.dom.TagName("BASEFONT");
    goog.dom.TagName.BDI = new goog.dom.TagName("BDI");
    goog.dom.TagName.BDO = new goog.dom.TagName("BDO");
    goog.dom.TagName.BIG = new goog.dom.TagName("BIG");
    goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName("BLOCKQUOTE");
    goog.dom.TagName.BODY = new goog.dom.TagName("BODY");
    goog.dom.TagName.BR = new goog.dom.TagName("BR");
    goog.dom.TagName.BUTTON = new goog.dom.TagName("BUTTON");
    goog.dom.TagName.CANVAS = new goog.dom.TagName("CANVAS");
    goog.dom.TagName.CAPTION = new goog.dom.TagName("CAPTION");
    goog.dom.TagName.CENTER = new goog.dom.TagName("CENTER");
    goog.dom.TagName.CITE = new goog.dom.TagName("CITE");
    goog.dom.TagName.CODE = new goog.dom.TagName("CODE");
    goog.dom.TagName.COL = new goog.dom.TagName("COL");
    goog.dom.TagName.COLGROUP = new goog.dom.TagName("COLGROUP");
    goog.dom.TagName.COMMAND = new goog.dom.TagName("COMMAND");
    goog.dom.TagName.DATA = new goog.dom.TagName("DATA");
    goog.dom.TagName.DATALIST = new goog.dom.TagName("DATALIST");
    goog.dom.TagName.DD = new goog.dom.TagName("DD");
    goog.dom.TagName.DEL = new goog.dom.TagName("DEL");
    goog.dom.TagName.DETAILS = new goog.dom.TagName("DETAILS");
    goog.dom.TagName.DFN = new goog.dom.TagName("DFN");
    goog.dom.TagName.DIALOG = new goog.dom.TagName("DIALOG");
    goog.dom.TagName.DIR = new goog.dom.TagName("DIR");
    goog.dom.TagName.DIV = new goog.dom.TagName("DIV");
    goog.dom.TagName.DL = new goog.dom.TagName("DL");
    goog.dom.TagName.DT = new goog.dom.TagName("DT");
    goog.dom.TagName.EM = new goog.dom.TagName("EM");
    goog.dom.TagName.EMBED = new goog.dom.TagName("EMBED");
    goog.dom.TagName.FIELDSET = new goog.dom.TagName("FIELDSET");
    goog.dom.TagName.FIGCAPTION = new goog.dom.TagName("FIGCAPTION");
    goog.dom.TagName.FIGURE = new goog.dom.TagName("FIGURE");
    goog.dom.TagName.FONT = new goog.dom.TagName("FONT");
    goog.dom.TagName.FOOTER = new goog.dom.TagName("FOOTER");
    goog.dom.TagName.FORM = new goog.dom.TagName("FORM");
    goog.dom.TagName.FRAME = new goog.dom.TagName("FRAME");
    goog.dom.TagName.FRAMESET = new goog.dom.TagName("FRAMESET");
    goog.dom.TagName.H1 = new goog.dom.TagName("H1");
    goog.dom.TagName.H2 = new goog.dom.TagName("H2");
    goog.dom.TagName.H3 = new goog.dom.TagName("H3");
    goog.dom.TagName.H4 = new goog.dom.TagName("H4");
    goog.dom.TagName.H5 = new goog.dom.TagName("H5");
    goog.dom.TagName.H6 = new goog.dom.TagName("H6");
    goog.dom.TagName.HEAD = new goog.dom.TagName("HEAD");
    goog.dom.TagName.HEADER = new goog.dom.TagName("HEADER");
    goog.dom.TagName.HGROUP = new goog.dom.TagName("HGROUP");
    goog.dom.TagName.HR = new goog.dom.TagName("HR");
    goog.dom.TagName.HTML = new goog.dom.TagName("HTML");
    goog.dom.TagName.I = new goog.dom.TagName("I");
    goog.dom.TagName.IFRAME = new goog.dom.TagName("IFRAME");
    goog.dom.TagName.IMG = new goog.dom.TagName("IMG");
    goog.dom.TagName.INPUT = new goog.dom.TagName("INPUT");
    goog.dom.TagName.INS = new goog.dom.TagName("INS");
    goog.dom.TagName.ISINDEX = new goog.dom.TagName("ISINDEX");
    goog.dom.TagName.KBD = new goog.dom.TagName("KBD");
    goog.dom.TagName.KEYGEN = new goog.dom.TagName("KEYGEN");
    goog.dom.TagName.LABEL = new goog.dom.TagName("LABEL");
    goog.dom.TagName.LEGEND = new goog.dom.TagName("LEGEND");
    goog.dom.TagName.LI = new goog.dom.TagName("LI");
    goog.dom.TagName.LINK = new goog.dom.TagName("LINK");
    goog.dom.TagName.MAIN = new goog.dom.TagName("MAIN");
    goog.dom.TagName.MAP = new goog.dom.TagName("MAP");
    goog.dom.TagName.MARK = new goog.dom.TagName("MARK");
    goog.dom.TagName.MATH = new goog.dom.TagName("MATH");
    goog.dom.TagName.MENU = new goog.dom.TagName("MENU");
    goog.dom.TagName.MENUITEM = new goog.dom.TagName("MENUITEM");
    goog.dom.TagName.META = new goog.dom.TagName("META");
    goog.dom.TagName.METER = new goog.dom.TagName("METER");
    goog.dom.TagName.NAV = new goog.dom.TagName("NAV");
    goog.dom.TagName.NOFRAMES = new goog.dom.TagName("NOFRAMES");
    goog.dom.TagName.NOSCRIPT = new goog.dom.TagName("NOSCRIPT");
    goog.dom.TagName.OBJECT = new goog.dom.TagName("OBJECT");
    goog.dom.TagName.OL = new goog.dom.TagName("OL");
    goog.dom.TagName.OPTGROUP = new goog.dom.TagName("OPTGROUP");
    goog.dom.TagName.OPTION = new goog.dom.TagName("OPTION");
    goog.dom.TagName.OUTPUT = new goog.dom.TagName("OUTPUT");
    goog.dom.TagName.P = new goog.dom.TagName("P");
    goog.dom.TagName.PARAM = new goog.dom.TagName("PARAM");
    goog.dom.TagName.PICTURE = new goog.dom.TagName("PICTURE");
    goog.dom.TagName.PRE = new goog.dom.TagName("PRE");
    goog.dom.TagName.PROGRESS = new goog.dom.TagName("PROGRESS");
    goog.dom.TagName.Q = new goog.dom.TagName("Q");
    goog.dom.TagName.RP = new goog.dom.TagName("RP");
    goog.dom.TagName.RT = new goog.dom.TagName("RT");
    goog.dom.TagName.RTC = new goog.dom.TagName("RTC");
    goog.dom.TagName.RUBY = new goog.dom.TagName("RUBY");
    goog.dom.TagName.S = new goog.dom.TagName("S");
    goog.dom.TagName.SAMP = new goog.dom.TagName("SAMP");
    goog.dom.TagName.SCRIPT = new goog.dom.TagName("SCRIPT");
    goog.dom.TagName.SECTION = new goog.dom.TagName("SECTION");
    goog.dom.TagName.SELECT = new goog.dom.TagName("SELECT");
    goog.dom.TagName.SMALL = new goog.dom.TagName("SMALL");
    goog.dom.TagName.SOURCE = new goog.dom.TagName("SOURCE");
    goog.dom.TagName.SPAN = new goog.dom.TagName("SPAN");
    goog.dom.TagName.STRIKE = new goog.dom.TagName("STRIKE");
    goog.dom.TagName.STRONG = new goog.dom.TagName("STRONG");
    goog.dom.TagName.STYLE = new goog.dom.TagName("STYLE");
    goog.dom.TagName.SUB = new goog.dom.TagName("SUB");
    goog.dom.TagName.SUMMARY = new goog.dom.TagName("SUMMARY");
    goog.dom.TagName.SUP = new goog.dom.TagName("SUP");
    goog.dom.TagName.SVG = new goog.dom.TagName("SVG");
    goog.dom.TagName.TABLE = new goog.dom.TagName("TABLE");
    goog.dom.TagName.TBODY = new goog.dom.TagName("TBODY");
    goog.dom.TagName.TD = new goog.dom.TagName("TD");
    goog.dom.TagName.TEMPLATE = new goog.dom.TagName("TEMPLATE");
    goog.dom.TagName.TEXTAREA = new goog.dom.TagName("TEXTAREA");
    goog.dom.TagName.TFOOT = new goog.dom.TagName("TFOOT");
    goog.dom.TagName.TH = new goog.dom.TagName("TH");
    goog.dom.TagName.THEAD = new goog.dom.TagName("THEAD");
    goog.dom.TagName.TIME = new goog.dom.TagName("TIME");
    goog.dom.TagName.TITLE = new goog.dom.TagName("TITLE");
    goog.dom.TagName.TR = new goog.dom.TagName("TR");
    goog.dom.TagName.TRACK = new goog.dom.TagName("TRACK");
    goog.dom.TagName.TT = new goog.dom.TagName("TT");
    goog.dom.TagName.U = new goog.dom.TagName("U");
    goog.dom.TagName.UL = new goog.dom.TagName("UL");
    goog.dom.TagName.VAR = new goog.dom.TagName("VAR");
    goog.dom.TagName.VIDEO = new goog.dom.TagName("VIDEO");
    goog.dom.TagName.WBR = new goog.dom.TagName("WBR");
    goog.dom.tags = {};
    goog.dom.tags.VOID_TAGS_ = { area: true, base: true, br: true, col: true, command: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
    goog.dom.tags.isVoidTag = function(a) {
      return goog.dom.tags.VOID_TAGS_[a] === true;
    };
    goog.html = {};
    goog.html.trustedtypes = {};
    goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#html") : null;
    goog.string = {};
    goog.string.TypedString = function() {
    };
    goog.string.Const = function(a, b) {
      this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = a === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && b || "";
      this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_;
    };
    goog.string.Const.prototype.implementsGoogStringTypedString = true;
    goog.string.Const.prototype.getTypedStringValue = function() {
      return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
    };
    goog.string.Const.prototype.toString = function() {
      return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}";
    };
    goog.string.Const.unwrap = function(a) {
      if (a instanceof goog.string.Const && a.constructor === goog.string.Const && a.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_)
        return a.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
      goog.asserts.fail("expected object of type Const, got '" + a + "'");
      return "type_error:Const";
    };
    goog.string.Const.from = function(a) {
      return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, a);
    };
    goog.string.Const.TYPE_MARKER_ = {};
    goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};
    goog.string.Const.EMPTY = goog.string.Const.from("");
    goog.html.SafeScript = function() {
      this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = "";
      this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
    };
    goog.html.SafeScript.prototype.implementsGoogStringTypedString = true;
    goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
    goog.html.SafeScript.fromConstant = function(a) {
      a = goog.string.Const.unwrap(a);
      return a.length === 0 ? goog.html.SafeScript.EMPTY : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(a);
    };
    goog.html.SafeScript.fromConstantAndArgs = function(a, b) {
      for (var c = [], d = 1; d < arguments.length; d++)
        c.push(goog.html.SafeScript.stringify_(arguments[d]));
      return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("(" + goog.string.Const.unwrap(a) + ")(" + c.join(", ") + ");");
    };
    goog.html.SafeScript.fromJson = function(a) {
      return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(goog.html.SafeScript.stringify_(a));
    };
    goog.html.SafeScript.prototype.getTypedStringValue = function() {
      return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
    };
    goog.DEBUG && (goog.html.SafeScript.prototype.toString = function() {
      return "SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}";
    });
    goog.html.SafeScript.unwrap = function(a) {
      return goog.html.SafeScript.unwrapTrustedScript(a).toString();
    };
    goog.html.SafeScript.unwrapTrustedScript = function(a) {
      if (a instanceof goog.html.SafeScript && a.constructor === goog.html.SafeScript && a.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
        return a.privateDoNotAccessOrElseSafeScriptWrappedValue_;
      goog.asserts.fail("expected object of type SafeScript, got '" + a + "' of type " + goog.typeOf(a));
      return "type_error:SafeScript";
    };
    goog.html.SafeScript.stringify_ = function(a) {
      return JSON.stringify(a).replace(/</g, "\\x3c");
    };
    goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function(a) {
      return new goog.html.SafeScript().initSecurityPrivateDoNotAccessOrElse_(a);
    };
    goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a) {
      this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(a) : a;
      return this;
    };
    goog.html.SafeScript.EMPTY = goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
    goog.fs = {};
    goog.fs.url = {};
    goog.fs.url.createObjectUrl = function(a) {
      return goog.fs.url.getUrlObject_().createObjectURL(a);
    };
    goog.fs.url.revokeObjectUrl = function(a) {
      goog.fs.url.getUrlObject_().revokeObjectURL(a);
    };
    goog.fs.url.getUrlObject_ = function() {
      var a = goog.fs.url.findUrlObject_();
      if (a != null)
        return a;
      throw Error("This browser doesn't seem to support blob URLs");
    };
    goog.fs.url.findUrlObject_ = function() {
      return goog.isDef(goog.global.URL) && goog.isDef(goog.global.URL.createObjectURL) ? goog.global.URL : goog.isDef(goog.global.webkitURL) && goog.isDef(goog.global.webkitURL.createObjectURL) ? goog.global.webkitURL : goog.isDef(goog.global.createObjectURL) ? goog.global : null;
    };
    goog.fs.url.browserSupportsObjectUrls = function() {
      return goog.fs.url.findUrlObject_() != null;
    };
    goog.i18n = {};
    goog.i18n.bidi = {};
    goog.i18n.bidi.FORCE_RTL = false;
    goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || (goog.LOCALE.substring(0, 2).toLowerCase() == "ar" || goog.LOCALE.substring(0, 2).toLowerCase() == "fa" || goog.LOCALE.substring(0, 2).toLowerCase() == "he" || goog.LOCALE.substring(0, 2).toLowerCase() == "iw" || goog.LOCALE.substring(0, 2).toLowerCase() == "ps" || goog.LOCALE.substring(0, 2).toLowerCase() == "sd" || goog.LOCALE.substring(0, 2).toLowerCase() == "ug" || goog.LOCALE.substring(0, 2).toLowerCase() == "ur" || goog.LOCALE.substring(0, 2).toLowerCase() == "yi") && (goog.LOCALE.length == 2 || goog.LOCALE.substring(2, 3) == "-" || goog.LOCALE.substring(2, 3) == "_") || 3 <= goog.LOCALE.length && goog.LOCALE.substring(0, 3).toLowerCase() == "ckb" && (goog.LOCALE.length == 3 || goog.LOCALE.substring(3, 4) == "-" || goog.LOCALE.substring(3, 4) == "_") || 7 <= goog.LOCALE.length && (goog.LOCALE.substring(2, 3) == "-" || goog.LOCALE.substring(2, 3) == "_") && (goog.LOCALE.substring(3, 7).toLowerCase() == "adlm" || goog.LOCALE.substring(3, 7).toLowerCase() == "arab" || goog.LOCALE.substring(3, 7).toLowerCase() == "hebr" || goog.LOCALE.substring(3, 7).toLowerCase() == "nkoo" || goog.LOCALE.substring(3, 7).toLowerCase() == "rohg" || goog.LOCALE.substring(3, 7).toLowerCase() == "thaa") || 8 <= goog.LOCALE.length && (goog.LOCALE.substring(3, 4) == "-" || goog.LOCALE.substring(3, 4) == "_") && (goog.LOCALE.substring(4, 8).toLowerCase() == "adlm" || goog.LOCALE.substring(4, 8).toLowerCase() == "arab" || goog.LOCALE.substring(4, 8).toLowerCase() == "hebr" || goog.LOCALE.substring(4, 8).toLowerCase() == "nkoo" || goog.LOCALE.substring(4, 8).toLowerCase() == "rohg" || goog.LOCALE.substring(4, 8).toLowerCase() == "thaa");
    goog.i18n.bidi.Format = { LRE: "\u202A", RLE: "\u202B", PDF: "\u202C", LRM: "\u200E", RLM: "\u200F" };
    goog.i18n.bidi.Dir = { LTR: 1, RTL: -1, NEUTRAL: 0 };
    goog.i18n.bidi.RIGHT = "right";
    goog.i18n.bidi.LEFT = "left";
    goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT;
    goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;
    goog.i18n.bidi.toDir = function(a, b) {
      return typeof a == "number" ? 0 < a ? goog.i18n.bidi.Dir.LTR : 0 > a ? goog.i18n.bidi.Dir.RTL : b ? null : goog.i18n.bidi.Dir.NEUTRAL : a == null ? null : a ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
    };
    goog.i18n.bidi.ltrChars_ = "A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0900-\u1FFF\u200E\u2C00-\uD801\uD804-\uD839\uD83C-\uDBFF\uF900-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF";
    goog.i18n.bidi.rtlChars_ = "\u0591-\u06EF\u06FA-\u08FF\u200F\uD802-\uD803\uD83A-\uD83B\uFB1D-\uFDFF\uFE70-\uFEFC";
    goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;
    goog.i18n.bidi.stripHtmlIfNeeded_ = function(a, b) {
      return b ? a.replace(goog.i18n.bidi.htmlSkipReg_, "") : a;
    };
    goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]");
    goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]");
    goog.i18n.bidi.hasAnyRtl = function(a, b) {
      return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b));
    };
    goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl;
    goog.i18n.bidi.hasAnyLtr = function(a, b) {
      return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b));
    };
    goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]");
    goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]");
    goog.i18n.bidi.isRtlChar = function(a) {
      return goog.i18n.bidi.rtlRe_.test(a);
    };
    goog.i18n.bidi.isLtrChar = function(a) {
      return goog.i18n.bidi.ltrRe_.test(a);
    };
    goog.i18n.bidi.isNeutralChar = function(a) {
      return !goog.i18n.bidi.isLtrChar(a) && !goog.i18n.bidi.isRtlChar(a);
    };
    goog.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]");
    goog.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]");
    goog.i18n.bidi.startsWithRtl = function(a, b) {
      return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b));
    };
    goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl;
    goog.i18n.bidi.startsWithLtr = function(a, b) {
      return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b));
    };
    goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr;
    goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;
    goog.i18n.bidi.isNeutralText = function(a, b) {
      a = goog.i18n.bidi.stripHtmlIfNeeded_(a, b);
      return goog.i18n.bidi.isRequiredLtrRe_.test(a) || !goog.i18n.bidi.hasAnyLtr(a) && !goog.i18n.bidi.hasAnyRtl(a);
    };
    goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$");
    goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$");
    goog.i18n.bidi.endsWithLtr = function(a, b) {
      return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b));
    };
    goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr;
    goog.i18n.bidi.endsWithRtl = function(a, b) {
      return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b));
    };
    goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl;
    goog.i18n.bidi.rtlLocalesRe_ = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
    goog.i18n.bidi.isRtlLanguage = function(a) {
      return goog.i18n.bidi.rtlLocalesRe_.test(a);
    };
    goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
    goog.i18n.bidi.guardBracketInText = function(a, b) {
      b = (b === void 0 ? goog.i18n.bidi.hasAnyRtl(a) : b) ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM;
      return a.replace(goog.i18n.bidi.bracketGuardTextRe_, b + "$&" + b);
    };
    goog.i18n.bidi.enforceRtlInHtml = function(a) {
      return a.charAt(0) == "<" ? a.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + a + "</span>";
    };
    goog.i18n.bidi.enforceRtlInText = function(a) {
      return goog.i18n.bidi.Format.RLE + a + goog.i18n.bidi.Format.PDF;
    };
    goog.i18n.bidi.enforceLtrInHtml = function(a) {
      return a.charAt(0) == "<" ? a.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + a + "</span>";
    };
    goog.i18n.bidi.enforceLtrInText = function(a) {
      return goog.i18n.bidi.Format.LRE + a + goog.i18n.bidi.Format.PDF;
    };
    goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
    goog.i18n.bidi.leftRe_ = /left/gi;
    goog.i18n.bidi.rightRe_ = /right/gi;
    goog.i18n.bidi.tempRe_ = /%%%%/g;
    goog.i18n.bidi.mirrorCSS = function(a) {
      return a.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
    };
    goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;
    goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;
    goog.i18n.bidi.normalizeHebrewQuote = function(a) {
      return a.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1\u05F4").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1\u05F3");
    };
    goog.i18n.bidi.wordSeparatorRe_ = /\s+/;
    goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/;
    goog.i18n.bidi.rtlDetectionThreshold_ = 0.4;
    goog.i18n.bidi.estimateDirection = function(a, b) {
      var c = 0, d = 0, e = false;
      a = goog.i18n.bidi.stripHtmlIfNeeded_(a, b).split(goog.i18n.bidi.wordSeparatorRe_);
      for (b = 0; b < a.length; b++) {
        var f = a[b];
        goog.i18n.bidi.startsWithRtl(f) ? (c++, d++) : goog.i18n.bidi.isRequiredLtrRe_.test(f) ? e = true : goog.i18n.bidi.hasAnyLtr(f) ? d++ : goog.i18n.bidi.hasNumeralsRe_.test(f) && (e = true);
      }
      return d == 0 ? e ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : c / d > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
    };
    goog.i18n.bidi.detectRtlDirectionality = function(a, b) {
      return goog.i18n.bidi.estimateDirection(a, b) == goog.i18n.bidi.Dir.RTL;
    };
    goog.i18n.bidi.setElementDirAndAlign = function(a, b) {
      a && (b = goog.i18n.bidi.toDir(b)) && (a.style.textAlign = b == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT, a.dir = b == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr");
    };
    goog.i18n.bidi.setElementDirByTextDirectionality = function(a, b) {
      switch (goog.i18n.bidi.estimateDirection(b)) {
        case goog.i18n.bidi.Dir.LTR:
          a.dir = "ltr";
          break;
        case goog.i18n.bidi.Dir.RTL:
          a.dir = "rtl";
          break;
        default:
          a.removeAttribute("dir");
      }
    };
    goog.i18n.bidi.DirectionalString = function() {
    };
    goog.html.TrustedResourceUrl = function() {
      this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = "";
      this.trustedURL_ = null;
      this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
    };
    goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = true;
    goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function() {
      return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString();
    };
    goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
    goog.html.TrustedResourceUrl.prototype.getDirection = function() {
      return goog.i18n.bidi.Dir.LTR;
    };
    goog.html.TrustedResourceUrl.prototype.cloneWithParams = function(a, b) {
      var c = goog.html.TrustedResourceUrl.unwrap(this);
      c = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(c);
      var d = c[3] || "";
      return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(c[1] + goog.html.TrustedResourceUrl.stringifyParams_("?", c[2] || "", a) + goog.html.TrustedResourceUrl.stringifyParams_("#", d, b));
    };
    goog.DEBUG && (goog.html.TrustedResourceUrl.prototype.toString = function() {
      return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}";
    });
    goog.html.TrustedResourceUrl.unwrap = function(a) {
      return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(a).toString();
    };
    goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function(a) {
      if (a instanceof goog.html.TrustedResourceUrl && a.constructor === goog.html.TrustedResourceUrl && a.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
        return a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;
      goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + a + "' of type " + goog.typeOf(a));
      return "type_error:TrustedResourceUrl";
    };
    goog.html.TrustedResourceUrl.unwrapTrustedURL = function(a) {
      return a.trustedURL_ ? a.trustedURL_ : goog.html.TrustedResourceUrl.unwrap(a);
    };
    goog.html.TrustedResourceUrl.format = function(a, b) {
      var c = goog.string.Const.unwrap(a);
      if (!goog.html.TrustedResourceUrl.BASE_URL_.test(c))
        throw Error("Invalid TrustedResourceUrl format: " + c);
      a = c.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, function(a2, e) {
        if (!Object.prototype.hasOwnProperty.call(b, e))
          throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
        a2 = b[e];
        return a2 instanceof goog.string.Const ? goog.string.Const.unwrap(a2) : encodeURIComponent(String(a2));
      });
      return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a);
    };
    goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g;
    goog.html.TrustedResourceUrl.BASE_URL_ = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;
    goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    goog.html.TrustedResourceUrl.formatWithParams = function(a, b, c, d) {
      return goog.html.TrustedResourceUrl.format(a, b).cloneWithParams(c, d);
    };
    goog.html.TrustedResourceUrl.fromConstant = function(a) {
      return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a));
    };
    goog.html.TrustedResourceUrl.fromConstants = function(a) {
      for (var b = "", c = 0; c < a.length; c++)
        b += goog.string.Const.unwrap(a[c]);
      return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b);
    };
    goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
    goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function(a) {
      var b = new goog.html.TrustedResourceUrl();
      b.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(a) : a;
      goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY && (b.trustedURL_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(a));
      return b;
    };
    goog.html.TrustedResourceUrl.stringifyParams_ = function(a, b, c) {
      if (c == null)
        return b;
      if (goog.isString(c))
        return c ? a + encodeURIComponent(c) : "";
      for (var d in c) {
        var e = c[d];
        e = goog.isArray(e) ? e : [e];
        for (var f = 0; f < e.length; f++) {
          var g = e[f];
          g != null && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)));
        }
      }
      return b;
    };
    goog.string.internal = {};
    goog.string.internal.startsWith = function(a, b) {
      return a.lastIndexOf(b, 0) == 0;
    };
    goog.string.internal.endsWith = function(a, b) {
      var c = a.length - b.length;
      return 0 <= c && a.indexOf(b, c) == c;
    };
    goog.string.internal.caseInsensitiveStartsWith = function(a, b) {
      return goog.string.internal.caseInsensitiveCompare(b, a.substr(0, b.length)) == 0;
    };
    goog.string.internal.caseInsensitiveEndsWith = function(a, b) {
      return goog.string.internal.caseInsensitiveCompare(b, a.substr(a.length - b.length, b.length)) == 0;
    };
    goog.string.internal.caseInsensitiveEquals = function(a, b) {
      return a.toLowerCase() == b.toLowerCase();
    };
    goog.string.internal.isEmptyOrWhitespace = function(a) {
      return /^[\s\xa0]*$/.test(a);
    };
    goog.string.internal.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(a) {
      return a.trim();
    } : function(a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    };
    goog.string.internal.caseInsensitiveCompare = function(a, b) {
      a = String(a).toLowerCase();
      b = String(b).toLowerCase();
      return a < b ? -1 : a == b ? 0 : 1;
    };
    goog.string.internal.newLineToBr = function(a, b) {
      return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>");
    };
    goog.string.internal.htmlEscape = function(a, b) {
      if (b)
        a = a.replace(goog.string.internal.AMP_RE_, "&amp;").replace(goog.string.internal.LT_RE_, "&lt;").replace(goog.string.internal.GT_RE_, "&gt;").replace(goog.string.internal.QUOT_RE_, "&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.internal.NULL_RE_, "&#0;");
      else {
        if (!goog.string.internal.ALL_RE_.test(a))
          return a;
        a.indexOf("&") != -1 && (a = a.replace(goog.string.internal.AMP_RE_, "&amp;"));
        a.indexOf("<") != -1 && (a = a.replace(goog.string.internal.LT_RE_, "&lt;"));
        a.indexOf(">") != -1 && (a = a.replace(goog.string.internal.GT_RE_, "&gt;"));
        a.indexOf('"') != -1 && (a = a.replace(goog.string.internal.QUOT_RE_, "&quot;"));
        a.indexOf("'") != -1 && (a = a.replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;"));
        a.indexOf("\0") != -1 && (a = a.replace(goog.string.internal.NULL_RE_, "&#0;"));
      }
      return a;
    };
    goog.string.internal.AMP_RE_ = /&/g;
    goog.string.internal.LT_RE_ = /</g;
    goog.string.internal.GT_RE_ = />/g;
    goog.string.internal.QUOT_RE_ = /"/g;
    goog.string.internal.SINGLE_QUOTE_RE_ = /'/g;
    goog.string.internal.NULL_RE_ = /\x00/g;
    goog.string.internal.ALL_RE_ = /[\x00&<>"']/;
    goog.string.internal.whitespaceEscape = function(a, b) {
      return goog.string.internal.newLineToBr(a.replace(/  /g, " &#160;"), b);
    };
    goog.string.internal.contains = function(a, b) {
      return a.indexOf(b) != -1;
    };
    goog.string.internal.caseInsensitiveContains = function(a, b) {
      return goog.string.internal.contains(a.toLowerCase(), b.toLowerCase());
    };
    goog.string.internal.compareVersions = function(a, b) {
      var c = 0;
      a = goog.string.internal.trim(String(a)).split(".");
      b = goog.string.internal.trim(String(b)).split(".");
      for (var d = Math.max(a.length, b.length), e = 0; c == 0 && e < d; e++) {
        var f = a[e] || "", g = b[e] || "";
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          if (f[0].length == 0 && g[0].length == 0)
            break;
          c = f[1].length == 0 ? 0 : parseInt(f[1], 10);
          var h = g[1].length == 0 ? 0 : parseInt(g[1], 10);
          c = goog.string.internal.compareElements_(c, h) || goog.string.internal.compareElements_(f[2].length == 0, g[2].length == 0) || goog.string.internal.compareElements_(f[2], g[2]);
          f = f[3];
          g = g[3];
        } while (c == 0);
      }
      return c;
    };
    goog.string.internal.compareElements_ = function(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
    goog.html.SafeUrl = function() {
      this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = "";
      this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
    };
    goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez";
    goog.html.SafeUrl.prototype.implementsGoogStringTypedString = true;
    goog.html.SafeUrl.prototype.getTypedStringValue = function() {
      return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
    };
    goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
    goog.html.SafeUrl.prototype.getDirection = function() {
      return goog.i18n.bidi.Dir.LTR;
    };
    goog.DEBUG && (goog.html.SafeUrl.prototype.toString = function() {
      return "SafeUrl{" + this.privateDoNotAccessOrElseSafeUrlWrappedValue_ + "}";
    });
    goog.html.SafeUrl.unwrap = function(a) {
      return goog.html.SafeUrl.unwrapTrustedURL(a).toString();
    };
    goog.html.SafeUrl.unwrapTrustedURL = function(a) {
      if (a instanceof goog.html.SafeUrl && a.constructor === goog.html.SafeUrl && a.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
        return a.privateDoNotAccessOrElseSafeUrlWrappedValue_;
      goog.asserts.fail("expected object of type SafeUrl, got '" + a + "' of type " + goog.typeOf(a));
      return "type_error:SafeUrl";
    };
    goog.html.SafeUrl.fromConstant = function(a) {
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a));
    };
    goog.html.SAFE_MIME_TYPE_PATTERN_ = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i;
    goog.html.SafeUrl.isSafeMimeType = function(a) {
      return goog.html.SAFE_MIME_TYPE_PATTERN_.test(a);
    };
    goog.html.SafeUrl.fromBlob = function(a) {
      a = goog.html.SAFE_MIME_TYPE_PATTERN_.test(a.type) ? goog.fs.url.createObjectUrl(a) : goog.html.SafeUrl.INNOCUOUS_STRING;
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
    };
    goog.html.DATA_URL_PATTERN_ = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i;
    goog.html.SafeUrl.fromDataUrl = function(a) {
      a = a.replace(/(%0A|%0D)/g, "");
      var b = a.match(goog.html.DATA_URL_PATTERN_);
      b = b && goog.html.SAFE_MIME_TYPE_PATTERN_.test(b[1]);
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b ? a : goog.html.SafeUrl.INNOCUOUS_STRING);
    };
    goog.html.SafeUrl.fromTelUrl = function(a) {
      goog.string.internal.caseInsensitiveStartsWith(a, "tel:") || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
    };
    goog.html.SIP_URL_PATTERN_ = /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i;
    goog.html.SafeUrl.fromSipUrl = function(a) {
      goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(a)) || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
    };
    goog.html.SafeUrl.fromFacebookMessengerUrl = function(a) {
      goog.string.internal.caseInsensitiveStartsWith(a, "fb-messenger://share") || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
    };
    goog.html.SafeUrl.fromWhatsAppUrl = function(a) {
      goog.string.internal.caseInsensitiveStartsWith(a, "whatsapp://send") || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
    };
    goog.html.SafeUrl.fromSmsUrl = function(a) {
      goog.string.internal.caseInsensitiveStartsWith(a, "sms:") && goog.html.SafeUrl.isSmsUrlBodyValid_(a) || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
    };
    goog.html.SafeUrl.isSmsUrlBodyValid_ = function(a) {
      var b = a.indexOf("#");
      0 < b && (a = a.substring(0, b));
      b = a.match(/[?&]body=/gi);
      if (!b)
        return true;
      if (1 < b.length)
        return false;
      a = a.match(/[?&]body=([^&]*)/)[1];
      if (!a)
        return true;
      try {
        decodeURIComponent(a);
      } catch (c) {
        return false;
      }
      return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(a);
    };
    goog.html.SafeUrl.fromSshUrl = function(a) {
      goog.string.internal.caseInsensitiveStartsWith(a, "ssh://") || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
    };
    goog.html.SafeUrl.sanitizeChromeExtensionUrl = function(a, b) {
      return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, a, b);
    };
    goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function(a, b) {
      return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, a, b);
    };
    goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function(a, b) {
      return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, a, b);
    };
    goog.html.SafeUrl.sanitizeExtensionUrl_ = function(a, b, c) {
      (a = a.exec(b)) ? (a = a[1], (c instanceof goog.string.Const ? [goog.string.Const.unwrap(c)] : c.map(function(a2) {
        return goog.string.Const.unwrap(a2);
      })).indexOf(a) == -1 && (b = goog.html.SafeUrl.INNOCUOUS_STRING)) : b = goog.html.SafeUrl.INNOCUOUS_STRING;
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b);
    };
    goog.html.SafeUrl.fromTrustedResourceUrl = function(a) {
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(a));
    };
    goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_;
    goog.html.SafeUrl.sanitize = function(a) {
      if (a instanceof goog.html.SafeUrl)
        return a;
      a = typeof a == "object" && a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a);
      goog.html.SAFE_URL_PATTERN_.test(a) || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
    };
    goog.html.SafeUrl.sanitizeAssertUnchanged = function(a, b) {
      if (a instanceof goog.html.SafeUrl)
        return a;
      a = typeof a == "object" && a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a);
      if (b && /^data:/i.test(a) && (b = goog.html.SafeUrl.fromDataUrl(a), b.getTypedStringValue() == a))
        return b;
      goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(a), "%s does not match the safe URL pattern", a) || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
    };
    goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
    goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function(a) {
      var b = new goog.html.SafeUrl();
      b.privateDoNotAccessOrElseSafeUrlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(a) : a;
      return b;
    };
    goog.html.SafeUrl.ABOUT_BLANK = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank");
    goog.html.SafeStyle = function() {
      this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = "";
      this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
    };
    goog.html.SafeStyle.prototype.implementsGoogStringTypedString = true;
    goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
    goog.html.SafeStyle.fromConstant = function(a) {
      a = goog.string.Const.unwrap(a);
      if (a.length === 0)
        return goog.html.SafeStyle.EMPTY;
      goog.asserts.assert(goog.string.internal.endsWith(a, ";"), "Last character of style string is not ';': " + a);
      goog.asserts.assert(goog.string.internal.contains(a, ":"), `Style string must contain at least one ':', to specify a "name: value" pair: ` + a);
      return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(a);
    };
    goog.html.SafeStyle.prototype.getTypedStringValue = function() {
      return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
    };
    goog.DEBUG && (goog.html.SafeStyle.prototype.toString = function() {
      return "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}";
    });
    goog.html.SafeStyle.unwrap = function(a) {
      if (a instanceof goog.html.SafeStyle && a.constructor === goog.html.SafeStyle && a.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
        return a.privateDoNotAccessOrElseSafeStyleWrappedValue_;
      goog.asserts.fail("expected object of type SafeStyle, got '" + a + "' of type " + goog.typeOf(a));
      return "type_error:SafeStyle";
    };
    goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function(a) {
      return new goog.html.SafeStyle().initSecurityPrivateDoNotAccessOrElse_(a);
    };
    goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a) {
      this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = a;
      return this;
    };
    goog.html.SafeStyle.EMPTY = goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
    goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez";
    goog.html.SafeStyle.create = function(a) {
      var b = "", c;
      for (c in a) {
        if (!/^[-_a-zA-Z0-9]+$/.test(c))
          throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
        var d = a[c];
        d != null && (d = goog.isArray(d) ? goog.array.map(d, goog.html.SafeStyle.sanitizePropertyValue_).join(" ") : goog.html.SafeStyle.sanitizePropertyValue_(d), b += c + ":" + d + ";");
      }
      return b ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b) : goog.html.SafeStyle.EMPTY;
    };
    goog.html.SafeStyle.sanitizePropertyValue_ = function(a) {
      if (a instanceof goog.html.SafeUrl)
        return 'url("' + goog.html.SafeUrl.unwrap(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
      a = a instanceof goog.string.Const ? goog.string.Const.unwrap(a) : goog.html.SafeStyle.sanitizePropertyValueString_(String(a));
      if (/[{;}]/.test(a))
        throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.", [a]);
      return a;
    };
    goog.html.SafeStyle.sanitizePropertyValueString_ = function(a) {
      var b = a.replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.URL_RE_, "url");
      if (goog.html.SafeStyle.VALUE_RE_.test(b)) {
        if (goog.html.SafeStyle.COMMENT_RE_.test(a))
          return goog.asserts.fail("String value disallows comments, got: " + a), goog.html.SafeStyle.INNOCUOUS_STRING;
        if (!goog.html.SafeStyle.hasBalancedQuotes_(a))
          return goog.asserts.fail("String value requires balanced quotes, got: " + a), goog.html.SafeStyle.INNOCUOUS_STRING;
        if (!goog.html.SafeStyle.hasBalancedSquareBrackets_(a))
          return goog.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a), goog.html.SafeStyle.INNOCUOUS_STRING;
      } else
        return goog.asserts.fail("String value allows only " + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + " and simple functions, got: " + a), goog.html.SafeStyle.INNOCUOUS_STRING;
      return goog.html.SafeStyle.sanitizeUrl_(a);
    };
    goog.html.SafeStyle.hasBalancedQuotes_ = function(a) {
      for (var b = true, c = true, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        e == "'" && c ? b = !b : e == '"' && b && (c = !c);
      }
      return b && c;
    };
    goog.html.SafeStyle.hasBalancedSquareBrackets_ = function(a) {
      for (var b = true, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if (e == "]") {
          if (b)
            return false;
          b = true;
        } else if (e == "[") {
          if (!b)
            return false;
          b = false;
        } else if (!b && !c.test(e))
          return false;
      }
      return b;
    };
    goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ = `[-,."'%_!# a-zA-Z0-9\\[\\]]`;
    goog.html.SafeStyle.VALUE_RE_ = new RegExp("^" + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$");
    goog.html.SafeStyle.URL_RE_ = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;
    goog.html.SafeStyle.FUNCTIONS_RE_ = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g;
    goog.html.SafeStyle.COMMENT_RE_ = /\/\*/;
    goog.html.SafeStyle.sanitizeUrl_ = function(a) {
      return a.replace(goog.html.SafeStyle.URL_RE_, function(a2, c, d, e) {
        var b = "";
        d = d.replace(/^(['"])(.*)\1$/, function(a3, c2, d2) {
          b = c2;
          return d2;
        });
        a2 = goog.html.SafeUrl.sanitize(d).getTypedStringValue();
        return c + b + a2 + b + e;
      });
    };
    goog.html.SafeStyle.concat = function(a) {
      var b = "", c = function(a2) {
        goog.isArray(a2) ? goog.array.forEach(a2, c) : b += goog.html.SafeStyle.unwrap(a2);
      };
      goog.array.forEach(arguments, c);
      return b ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b) : goog.html.SafeStyle.EMPTY;
    };
    goog.html.SafeStyleSheet = function() {
      this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = "";
      this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
    };
    goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = true;
    goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
    goog.html.SafeStyleSheet.createRule = function(a, b) {
      if (goog.string.internal.contains(a, "<"))
        throw Error("Selector does not allow '<', got: " + a);
      var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
      if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c))
        throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
      if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(c))
        throw Error("() and [] in selector must be balanced, got: " + a);
      b instanceof goog.html.SafeStyle || (b = goog.html.SafeStyle.create(b));
      a = a + "{" + goog.html.SafeStyle.unwrap(b).replace(/</g, "\\3C ") + "}";
      return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a);
    };
    goog.html.SafeStyleSheet.hasBalancedBrackets_ = function(a) {
      for (var b = { "(": ")", "[": "]" }, c = [], d = 0; d < a.length; d++) {
        var e = a[d];
        if (b[e])
          c.push(b[e]);
        else if (goog.object.contains(b, e) && c.pop() != e)
          return false;
      }
      return c.length == 0;
    };
    goog.html.SafeStyleSheet.concat = function(a) {
      var b = "", c = function(a2) {
        goog.isArray(a2) ? goog.array.forEach(a2, c) : b += goog.html.SafeStyleSheet.unwrap(a2);
      };
      goog.array.forEach(arguments, c);
      return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b);
    };
    goog.html.SafeStyleSheet.fromConstant = function(a) {
      a = goog.string.Const.unwrap(a);
      if (a.length === 0)
        return goog.html.SafeStyleSheet.EMPTY;
      goog.asserts.assert(!goog.string.internal.contains(a, "<"), "Forbidden '<' character in style sheet string: " + a);
      return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a);
    };
    goog.html.SafeStyleSheet.prototype.getTypedStringValue = function() {
      return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
    };
    goog.DEBUG && (goog.html.SafeStyleSheet.prototype.toString = function() {
      return "SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}";
    });
    goog.html.SafeStyleSheet.unwrap = function(a) {
      if (a instanceof goog.html.SafeStyleSheet && a.constructor === goog.html.SafeStyleSheet && a.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
        return a.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
      goog.asserts.fail("expected object of type SafeStyleSheet, got '" + a + "' of type " + goog.typeOf(a));
      return "type_error:SafeStyleSheet";
    };
    goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function(a) {
      return new goog.html.SafeStyleSheet().initSecurityPrivateDoNotAccessOrElse_(a);
    };
    goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a) {
      this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = a;
      return this;
    };
    goog.html.SafeStyleSheet.EMPTY = goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");
    goog.labs = {};
    goog.labs.userAgent = {};
    goog.labs.userAgent.util = {};
    goog.labs.userAgent.util.getNativeUserAgentString_ = function() {
      var a = goog.labs.userAgent.util.getNavigator_();
      return a && (a = a.userAgent) ? a : "";
    };
    goog.labs.userAgent.util.getNavigator_ = function() {
      return goog.global.navigator;
    };
    goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_();
    goog.labs.userAgent.util.setUserAgent = function(a) {
      goog.labs.userAgent.util.userAgent_ = a || goog.labs.userAgent.util.getNativeUserAgentString_();
    };
    goog.labs.userAgent.util.getUserAgent = function() {
      return goog.labs.userAgent.util.userAgent_;
    };
    goog.labs.userAgent.util.matchUserAgent = function(a) {
      var b = goog.labs.userAgent.util.getUserAgent();
      return goog.string.internal.contains(b, a);
    };
    goog.labs.userAgent.util.matchUserAgentIgnoreCase = function(a) {
      var b = goog.labs.userAgent.util.getUserAgent();
      return goog.string.internal.caseInsensitiveContains(b, a);
    };
    goog.labs.userAgent.util.extractVersionTuples = function(a) {
      for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a); )
        c.push([d[1], d[2], d[3] || void 0]);
      return c;
    };
    goog.labs.userAgent.browser = {};
    goog.labs.userAgent.browser.matchOpera_ = function() {
      return goog.labs.userAgent.util.matchUserAgent("Opera");
    };
    goog.labs.userAgent.browser.matchIE_ = function() {
      return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
    };
    goog.labs.userAgent.browser.matchEdgeHtml_ = function() {
      return goog.labs.userAgent.util.matchUserAgent("Edge");
    };
    goog.labs.userAgent.browser.matchEdgeChromium_ = function() {
      return goog.labs.userAgent.util.matchUserAgent("Edg/");
    };
    goog.labs.userAgent.browser.matchOperaChromium_ = function() {
      return goog.labs.userAgent.util.matchUserAgent("OPR");
    };
    goog.labs.userAgent.browser.matchFirefox_ = function() {
      return goog.labs.userAgent.util.matchUserAgent("Firefox") || goog.labs.userAgent.util.matchUserAgent("FxiOS");
    };
    goog.labs.userAgent.browser.matchSafari_ = function() {
      return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchEdgeHtml_() || goog.labs.userAgent.browser.matchEdgeChromium_() || goog.labs.userAgent.browser.matchOperaChromium_() || goog.labs.userAgent.browser.matchFirefox_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"));
    };
    goog.labs.userAgent.browser.matchCoast_ = function() {
      return goog.labs.userAgent.util.matchUserAgent("Coast");
    };
    goog.labs.userAgent.browser.matchIosWebview_ = function() {
      return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && !goog.labs.userAgent.browser.matchFirefox_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit");
    };
    goog.labs.userAgent.browser.matchChrome_ = function() {
      return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchEdgeHtml_();
    };
    goog.labs.userAgent.browser.matchAndroidBrowser_ = function() {
      return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk());
    };
    goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_;
    goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_;
    goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdgeHtml_;
    goog.labs.userAgent.browser.isEdgeChromium = goog.labs.userAgent.browser.matchEdgeChromium_;
    goog.labs.userAgent.browser.isOperaChromium = goog.labs.userAgent.browser.matchOperaChromium_;
    goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_;
    goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_;
    goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_;
    goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_;
    goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_;
    goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_;
    goog.labs.userAgent.browser.isSilk = function() {
      return goog.labs.userAgent.util.matchUserAgent("Silk");
    };
    goog.labs.userAgent.browser.getVersion = function() {
      function a(a2) {
        a2 = goog.array.find(a2, d);
        return c[a2] || "";
      }
      var b = goog.labs.userAgent.util.getUserAgent();
      if (goog.labs.userAgent.browser.isIE())
        return goog.labs.userAgent.browser.getIEVersion_(b);
      b = goog.labs.userAgent.util.extractVersionTuples(b);
      var c = {};
      goog.array.forEach(b, function(a2) {
        c[a2[0]] = a2[1];
      });
      var d = goog.partial(goog.object.containsKey, c);
      return goog.labs.userAgent.browser.isOpera() ? a(["Version", "Opera"]) : goog.labs.userAgent.browser.isEdge() ? a(["Edge"]) : goog.labs.userAgent.browser.isEdgeChromium() ? a(["Edg"]) : goog.labs.userAgent.browser.isChrome() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || "";
    };
    goog.labs.userAgent.browser.isVersionOrHigher = function(a) {
      return 0 <= goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(), a);
    };
    goog.labs.userAgent.browser.getIEVersion_ = function(a) {
      var b = /rv: *([\d\.]*)/.exec(a);
      if (b && b[1])
        return b[1];
      b = "";
      var c = /MSIE +([\d\.]+)/.exec(a);
      if (c && c[1])
        if (a = /Trident\/(\d.\d)/.exec(a), c[1] == "7.0")
          if (a && a[1])
            switch (a[1]) {
              case "4.0":
                b = "8.0";
                break;
              case "5.0":
                b = "9.0";
                break;
              case "6.0":
                b = "10.0";
                break;
              case "7.0":
                b = "11.0";
            }
          else
            b = "7.0";
        else
          b = c[1];
      return b;
    };
    goog.html.SafeHtml = function() {
      this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
      this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      this.dir_ = null;
    };
    goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = true;
    goog.html.SafeHtml.prototype.getDirection = function() {
      return this.dir_;
    };
    goog.html.SafeHtml.prototype.implementsGoogStringTypedString = true;
    goog.html.SafeHtml.prototype.getTypedStringValue = function() {
      return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
    };
    goog.DEBUG && (goog.html.SafeHtml.prototype.toString = function() {
      return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}";
    });
    goog.html.SafeHtml.unwrap = function(a) {
      return goog.html.SafeHtml.unwrapTrustedHTML(a).toString();
    };
    goog.html.SafeHtml.unwrapTrustedHTML = function(a) {
      if (a instanceof goog.html.SafeHtml && a.constructor === goog.html.SafeHtml && a.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
        return a.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
      goog.asserts.fail("expected object of type SafeHtml, got '" + a + "' of type " + goog.typeOf(a));
      return "type_error:SafeHtml";
    };
    goog.html.SafeHtml.htmlEscape = function(a) {
      if (a instanceof goog.html.SafeHtml)
        return a;
      var b = typeof a == "object", c = null;
      b && a.implementsGoogI18nBidiDirectionalString && (c = a.getDirection());
      a = b && a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a);
      return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(a), c);
    };
    goog.html.SafeHtml.htmlEscapePreservingNewlines = function(a) {
      if (a instanceof goog.html.SafeHtml)
        return a;
      a = goog.html.SafeHtml.htmlEscape(a);
      return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(a)), a.getDirection());
    };
    goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function(a) {
      if (a instanceof goog.html.SafeHtml)
        return a;
      a = goog.html.SafeHtml.htmlEscape(a);
      return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(a)), a.getDirection());
    };
    goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape;
    goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/;
    goog.html.SafeHtml.URL_ATTRIBUTES_ = { action: true, cite: true, data: true, formaction: true, href: true, manifest: true, poster: true, src: true };
    goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = { APPLET: true, BASE: true, EMBED: true, IFRAME: true, LINK: true, MATH: true, META: true, OBJECT: true, SCRIPT: true, STYLE: true, SVG: true, TEMPLATE: true };
    goog.html.SafeHtml.create = function(a, b, c) {
      goog.html.SafeHtml.verifyTagName(String(a));
      return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(a), b, c);
    };
    goog.html.SafeHtml.verifyTagName = function(a) {
      if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(a))
        throw Error("Invalid tag name <" + a + ">.");
      if (a.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)
        throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
    };
    goog.html.SafeHtml.createIframe = function(a, b, c, d) {
      a && goog.html.TrustedResourceUrl.unwrap(a);
      var e = {};
      e.src = a || null;
      e.srcdoc = b && goog.html.SafeHtml.unwrap(b);
      a = goog.html.SafeHtml.combineAttributes(e, { sandbox: "" }, c);
      return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a, d);
    };
    goog.html.SafeHtml.createSandboxIframe = function(a, b, c, d) {
      if (!goog.html.SafeHtml.canUseSandboxIframe())
        throw Error("The browser does not support sandboxed iframes.");
      var e = {};
      e.src = a ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a)) : null;
      e.srcdoc = b || null;
      e.sandbox = "";
      a = goog.html.SafeHtml.combineAttributes(e, {}, c);
      return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a, d);
    };
    goog.html.SafeHtml.canUseSandboxIframe = function() {
      return goog.global.HTMLIFrameElement && "sandbox" in goog.global.HTMLIFrameElement.prototype;
    };
    goog.html.SafeHtml.createScriptSrc = function(a, b) {
      goog.html.TrustedResourceUrl.unwrap(a);
      a = goog.html.SafeHtml.combineAttributes({ src: a }, {}, b);
      return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", a);
    };
    goog.html.SafeHtml.createScript = function(a, b) {
      for (var c in b) {
        var d = c.toLowerCase();
        if (d == "language" || d == "src" || d == "text" || d == "type")
          throw Error('Cannot set "' + d + '" attribute');
      }
      c = "";
      a = goog.array.concat(a);
      for (d = 0; d < a.length; d++)
        c += goog.html.SafeScript.unwrap(a[d]);
      a = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c, goog.i18n.bidi.Dir.NEUTRAL);
      return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", b, a);
    };
    goog.html.SafeHtml.createStyle = function(a, b) {
      b = goog.html.SafeHtml.combineAttributes({ type: "text/css" }, {}, b);
      var c = "";
      a = goog.array.concat(a);
      for (var d = 0; d < a.length; d++)
        c += goog.html.SafeStyleSheet.unwrap(a[d]);
      a = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c, goog.i18n.bidi.Dir.NEUTRAL);
      return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", b, a);
    };
    goog.html.SafeHtml.createMetaRefresh = function(a, b) {
      a = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a));
      (goog.labs.userAgent.browser.isIE() || goog.labs.userAgent.browser.isEdge()) && goog.string.internal.contains(a, ";") && (a = "'" + a.replace(/'/g, "%27") + "'");
      return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", { "http-equiv": "refresh", content: (b || 0) + "; url=" + a });
    };
    goog.html.SafeHtml.getAttrNameAndValue_ = function(a, b, c) {
      if (c instanceof goog.string.Const)
        c = goog.string.Const.unwrap(c);
      else if (b.toLowerCase() == "style")
        c = goog.html.SafeHtml.getStyleValue_(c);
      else {
        if (/^on/i.test(b))
          throw Error('Attribute "' + b + '" requires goog.string.Const value, "' + c + '" given.');
        if (b.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_)
          if (c instanceof goog.html.TrustedResourceUrl)
            c = goog.html.TrustedResourceUrl.unwrap(c);
          else if (c instanceof goog.html.SafeUrl)
            c = goog.html.SafeUrl.unwrap(c);
          else if (goog.isString(c))
            c = goog.html.SafeUrl.sanitize(c).getTypedStringValue();
          else
            throw Error('Attribute "' + b + '" on tag "' + a + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + c + '" given.');
      }
      c.implementsGoogStringTypedString && (c = c.getTypedStringValue());
      goog.asserts.assert(goog.isString(c) || goog.isNumber(c), "String or number value expected, got " + typeof c + " with value: " + c);
      return b + '="' + goog.string.internal.htmlEscape(String(c)) + '"';
    };
    goog.html.SafeHtml.getStyleValue_ = function(a) {
      if (!goog.isObject(a))
        throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof a + " given: " + a);
      a instanceof goog.html.SafeStyle || (a = goog.html.SafeStyle.create(a));
      return goog.html.SafeStyle.unwrap(a);
    };
    goog.html.SafeHtml.createWithDir = function(a, b, c, d) {
      b = goog.html.SafeHtml.create(b, c, d);
      b.dir_ = a;
      return b;
    };
    goog.html.SafeHtml.join = function(a, b) {
      a = goog.html.SafeHtml.htmlEscape(a);
      var c = a.getDirection(), d = [], e = function(a2) {
        goog.isArray(a2) ? goog.array.forEach(a2, e) : (a2 = goog.html.SafeHtml.htmlEscape(a2), d.push(goog.html.SafeHtml.unwrap(a2)), a2 = a2.getDirection(), c == goog.i18n.bidi.Dir.NEUTRAL ? c = a2 : a2 != goog.i18n.bidi.Dir.NEUTRAL && c != a2 && (c = null));
      };
      goog.array.forEach(b, e);
      return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(d.join(goog.html.SafeHtml.unwrap(a)), c);
    };
    goog.html.SafeHtml.concat = function(a) {
      return goog.html.SafeHtml.join(goog.html.SafeHtml.EMPTY, Array.prototype.slice.call(arguments));
    };
    goog.html.SafeHtml.concatWithDir = function(a, b) {
      var c = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
      c.dir_ = a;
      return c;
    };
    goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
    goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function(a, b) {
      return new goog.html.SafeHtml().initSecurityPrivateDoNotAccessOrElse_(a, b);
    };
    goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a, b) {
      this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(a) : a;
      this.dir_ = b;
      return this;
    };
    goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function(a, b, c) {
      var d = null;
      var e = "<" + a + goog.html.SafeHtml.stringifyAttributes(a, b);
      goog.isDefAndNotNull(c) ? goog.isArray(c) || (c = [c]) : c = [];
      goog.dom.tags.isVoidTag(a.toLowerCase()) ? (goog.asserts.assert(!c.length, "Void tag <" + a + "> does not allow content."), e += ">") : (d = goog.html.SafeHtml.concat(c), e += ">" + goog.html.SafeHtml.unwrap(d) + "</" + a + ">", d = d.getDirection());
      (a = b && b.dir) && (d = /^(ltr|rtl|auto)$/i.test(a) ? goog.i18n.bidi.Dir.NEUTRAL : null);
      return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(e, d);
    };
    goog.html.SafeHtml.stringifyAttributes = function(a, b) {
      var c = "";
      if (b)
        for (var d in b) {
          if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(d))
            throw Error('Invalid attribute name "' + d + '".');
          var e = b[d];
          goog.isDefAndNotNull(e) && (c += " " + goog.html.SafeHtml.getAttrNameAndValue_(a, d, e));
        }
      return c;
    };
    goog.html.SafeHtml.combineAttributes = function(a, b, c) {
      var d = {}, e;
      for (e in a)
        goog.asserts.assert(e.toLowerCase() == e, "Must be lower case"), d[e] = a[e];
      for (e in b)
        goog.asserts.assert(e.toLowerCase() == e, "Must be lower case"), d[e] = b[e];
      for (e in c) {
        var f = e.toLowerCase();
        if (f in a)
          throw Error('Cannot override "' + f + '" attribute, got "' + e + '" with value "' + c[e] + '"');
        f in b && delete d[f];
        d[e] = c[e];
      }
      return d;
    };
    goog.html.SafeHtml.DOCTYPE_HTML = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>", goog.i18n.bidi.Dir.NEUTRAL);
    goog.html.SafeHtml.EMPTY = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("", goog.i18n.bidi.Dir.NEUTRAL);
    goog.html.SafeHtml.BR = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>", goog.i18n.bidi.Dir.NEUTRAL);
    goog.html.uncheckedconversions = {};
    goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function(a, b, c) {
      goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
      goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification");
      return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(b, c || null);
    };
    goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function(a, b) {
      goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
      goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification");
      return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(b);
    };
    goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function(a, b) {
      goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
      goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification");
      return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b);
    };
    goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function(a, b) {
      goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
      goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification");
      return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b);
    };
    goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function(a, b) {
      goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
      goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification");
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b);
    };
    goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(a, b) {
      goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
      goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification");
      return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b);
    };
    goog.dom.safe = {};
    goog.dom.safe.InsertAdjacentHtmlPosition = { AFTERBEGIN: "afterbegin", AFTEREND: "afterend", BEFOREBEGIN: "beforebegin", BEFOREEND: "beforeend" };
    goog.dom.safe.insertAdjacentHtml = function(a, b, c) {
      a.insertAdjacentHTML(b, goog.html.SafeHtml.unwrapTrustedHTML(c));
    };
    goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = { MATH: true, SCRIPT: true, STYLE: true, SVG: true, TEMPLATE: true };
    goog.dom.safe.isInnerHtmlCleanupRecursive_ = goog.functions.cacheReturnValue(function() {
      if (goog.DEBUG && typeof document === "undefined")
        return false;
      var a = document.createElement("div"), b = document.createElement("div");
      b.appendChild(document.createElement("div"));
      a.appendChild(b);
      if (goog.DEBUG && !a.firstChild)
        return false;
      b = a.firstChild.firstChild;
      a.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY);
      return !b.parentElement;
    });
    goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function(a, b) {
      if (goog.dom.safe.isInnerHtmlCleanupRecursive_())
        for (; a.lastChild; )
          a.removeChild(a.lastChild);
      a.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(b);
    };
    goog.dom.safe.setInnerHtml = function(a, b) {
      if (goog.asserts.ENABLE_ASSERTS) {
        var c = a.tagName.toUpperCase();
        if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[c])
          throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a.tagName + ".");
      }
      goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(a, b);
    };
    goog.dom.safe.setOuterHtml = function(a, b) {
      a.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(b);
    };
    goog.dom.safe.setFormElementAction = function(a, b) {
      b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b);
      goog.dom.asserts.assertIsHTMLFormElement(a).action = goog.html.SafeUrl.unwrapTrustedURL(b);
    };
    goog.dom.safe.setButtonFormAction = function(a, b) {
      b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b);
      goog.dom.asserts.assertIsHTMLButtonElement(a).formAction = goog.html.SafeUrl.unwrapTrustedURL(b);
    };
    goog.dom.safe.setInputFormAction = function(a, b) {
      b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b);
      goog.dom.asserts.assertIsHTMLInputElement(a).formAction = goog.html.SafeUrl.unwrapTrustedURL(b);
    };
    goog.dom.safe.setStyle = function(a, b) {
      a.style.cssText = goog.html.SafeStyle.unwrap(b);
    };
    goog.dom.safe.documentWrite = function(a, b) {
      a.write(goog.html.SafeHtml.unwrapTrustedHTML(b));
    };
    goog.dom.safe.setAnchorHref = function(a, b) {
      goog.dom.asserts.assertIsHTMLAnchorElement(a);
      b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b);
      a.href = goog.html.SafeUrl.unwrapTrustedURL(b);
    };
    goog.dom.safe.setImageSrc = function(a, b) {
      goog.dom.asserts.assertIsHTMLImageElement(a);
      if (!(b instanceof goog.html.SafeUrl)) {
        var c = /^data:image\//i.test(b);
        b = goog.html.SafeUrl.sanitizeAssertUnchanged(b, c);
      }
      a.src = goog.html.SafeUrl.unwrapTrustedURL(b);
    };
    goog.dom.safe.setAudioSrc = function(a, b) {
      goog.dom.asserts.assertIsHTMLAudioElement(a);
      if (!(b instanceof goog.html.SafeUrl)) {
        var c = /^data:audio\//i.test(b);
        b = goog.html.SafeUrl.sanitizeAssertUnchanged(b, c);
      }
      a.src = goog.html.SafeUrl.unwrapTrustedURL(b);
    };
    goog.dom.safe.setVideoSrc = function(a, b) {
      goog.dom.asserts.assertIsHTMLVideoElement(a);
      if (!(b instanceof goog.html.SafeUrl)) {
        var c = /^data:video\//i.test(b);
        b = goog.html.SafeUrl.sanitizeAssertUnchanged(b, c);
      }
      a.src = goog.html.SafeUrl.unwrapTrustedURL(b);
    };
    goog.dom.safe.setEmbedSrc = function(a, b) {
      goog.dom.asserts.assertIsHTMLEmbedElement(a);
      a.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b);
    };
    goog.dom.safe.setFrameSrc = function(a, b) {
      goog.dom.asserts.assertIsHTMLFrameElement(a);
      a.src = goog.html.TrustedResourceUrl.unwrapTrustedURL(b);
    };
    goog.dom.safe.setIframeSrc = function(a, b) {
      goog.dom.asserts.assertIsHTMLIFrameElement(a);
      a.src = goog.html.TrustedResourceUrl.unwrapTrustedURL(b);
    };
    goog.dom.safe.setIframeSrcdoc = function(a, b) {
      goog.dom.asserts.assertIsHTMLIFrameElement(a);
      a.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(b);
    };
    goog.dom.safe.setLinkHrefAndRel = function(a, b, c) {
      goog.dom.asserts.assertIsHTMLLinkElement(a);
      a.rel = c;
      goog.string.internal.caseInsensitiveContains(c, "stylesheet") ? (goog.asserts.assert(b instanceof goog.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'), a.href = goog.html.TrustedResourceUrl.unwrapTrustedURL(b)) : a.href = b instanceof goog.html.TrustedResourceUrl ? goog.html.TrustedResourceUrl.unwrapTrustedURL(b) : b instanceof goog.html.SafeUrl ? goog.html.SafeUrl.unwrapTrustedURL(b) : goog.html.SafeUrl.unwrapTrustedURL(goog.html.SafeUrl.sanitizeAssertUnchanged(b));
    };
    goog.dom.safe.setObjectData = function(a, b) {
      goog.dom.asserts.assertIsHTMLObjectElement(a);
      a.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b);
    };
    goog.dom.safe.setScriptSrc = function(a, b) {
      goog.dom.asserts.assertIsHTMLScriptElement(a);
      a.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b);
      (b = goog.getScriptNonce()) && a.setAttribute("nonce", b);
    };
    goog.dom.safe.setScriptContent = function(a, b) {
      goog.dom.asserts.assertIsHTMLScriptElement(a);
      a.text = goog.html.SafeScript.unwrapTrustedScript(b);
      (b = goog.getScriptNonce()) && a.setAttribute("nonce", b);
    };
    goog.dom.safe.setLocationHref = function(a, b) {
      goog.dom.asserts.assertIsLocation(a);
      b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b);
      a.href = goog.html.SafeUrl.unwrapTrustedURL(b);
    };
    goog.dom.safe.assignLocation = function(a, b) {
      goog.dom.asserts.assertIsLocation(a);
      b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b);
      a.assign(goog.html.SafeUrl.unwrapTrustedURL(b));
    };
    goog.dom.safe.replaceLocation = function(a, b) {
      goog.dom.asserts.assertIsLocation(a);
      b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b);
      a.replace(goog.html.SafeUrl.unwrapTrustedURL(b));
    };
    goog.dom.safe.openInWindow = function(a, b, c, d, e) {
      a = a instanceof goog.html.SafeUrl ? a : goog.html.SafeUrl.sanitizeAssertUnchanged(a);
      return (b || goog.global).open(goog.html.SafeUrl.unwrapTrustedURL(a), c ? goog.string.Const.unwrap(c) : "", d, e);
    };
    goog.dom.safe.parseFromStringHtml = function(a, b) {
      return goog.dom.safe.parseFromString(a, b, "text/html");
    };
    goog.dom.safe.parseFromString = function(a, b, c) {
      return a.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(b), c);
    };
    goog.dom.safe.createImageFromBlob = function(a) {
      if (!/^image\/.*/g.test(a.type))
        throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");
      var b = goog.global.URL.createObjectURL(a);
      a = new goog.global.Image();
      a.onload = function() {
        goog.global.URL.revokeObjectURL(b);
      };
      goog.dom.safe.setImageSrc(a, goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."), b));
      return a;
    };
    goog.string.DETECT_DOUBLE_ESCAPING = false;
    goog.string.FORCE_NON_DOM_HTML_UNESCAPING = false;
    goog.string.Unicode = { NBSP: "\xA0" };
    goog.string.startsWith = goog.string.internal.startsWith;
    goog.string.endsWith = goog.string.internal.endsWith;
    goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith;
    goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith;
    goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals;
    goog.string.subs = function(a, b) {
      for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
        d += c.shift() + e.shift();
      return d + c.join("%s");
    };
    goog.string.collapseWhitespace = function(a) {
      return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
    };
    goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace;
    goog.string.isEmptyString = function(a) {
      return a.length == 0;
    };
    goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
    goog.string.isEmptyOrWhitespaceSafe = function(a) {
      return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(a));
    };
    goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
    goog.string.isBreakingWhitespace = function(a) {
      return !/[^\t\n\r ]/.test(a);
    };
    goog.string.isAlpha = function(a) {
      return !/[^a-zA-Z]/.test(a);
    };
    goog.string.isNumeric = function(a) {
      return !/[^0-9]/.test(a);
    };
    goog.string.isAlphaNumeric = function(a) {
      return !/[^a-zA-Z0-9]/.test(a);
    };
    goog.string.isSpace = function(a) {
      return a == " ";
    };
    goog.string.isUnicodeChar = function(a) {
      return a.length == 1 && " " <= a && "~" >= a || "\x80" <= a && "\uFFFD" >= a;
    };
    goog.string.stripNewlines = function(a) {
      return a.replace(/(\r\n|\r|\n)+/g, " ");
    };
    goog.string.canonicalizeNewlines = function(a) {
      return a.replace(/(\r\n|\r|\n)/g, "\n");
    };
    goog.string.normalizeWhitespace = function(a) {
      return a.replace(/\xa0|\s/g, " ");
    };
    goog.string.normalizeSpaces = function(a) {
      return a.replace(/\xa0|[ \t]+/g, " ");
    };
    goog.string.collapseBreakingSpaces = function(a) {
      return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
    };
    goog.string.trim = goog.string.internal.trim;
    goog.string.trimLeft = function(a) {
      return a.replace(/^[\s\xa0]+/, "");
    };
    goog.string.trimRight = function(a) {
      return a.replace(/[\s\xa0]+$/, "");
    };
    goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare;
    goog.string.numberAwareCompare_ = function(a, b, c) {
      if (a == b)
        return 0;
      if (!a)
        return -1;
      if (!b)
        return 1;
      for (var d = a.toLowerCase().match(c), e = b.toLowerCase().match(c), f = Math.min(d.length, e.length), g = 0; g < f; g++) {
        c = d[g];
        var h = e[g];
        if (c != h)
          return a = parseInt(c, 10), !isNaN(a) && (b = parseInt(h, 10), !isNaN(b) && a - b) ? a - b : c < h ? -1 : 1;
      }
      return d.length != e.length ? d.length - e.length : a < b ? -1 : 1;
    };
    goog.string.intAwareCompare = function(a, b) {
      return goog.string.numberAwareCompare_(a, b, /\d+|\D+/g);
    };
    goog.string.floatAwareCompare = function(a, b) {
      return goog.string.numberAwareCompare_(a, b, /\d+|\.\d+|\D+/g);
    };
    goog.string.numerateCompare = goog.string.floatAwareCompare;
    goog.string.urlEncode = function(a) {
      return encodeURIComponent(String(a));
    };
    goog.string.urlDecode = function(a) {
      return decodeURIComponent(a.replace(/\+/g, " "));
    };
    goog.string.newLineToBr = goog.string.internal.newLineToBr;
    goog.string.htmlEscape = function(a, b) {
      a = goog.string.internal.htmlEscape(a, b);
      goog.string.DETECT_DOUBLE_ESCAPING && (a = a.replace(goog.string.E_RE_, "&#101;"));
      return a;
    };
    goog.string.E_RE_ = /e/g;
    goog.string.unescapeEntities = function(a) {
      return goog.string.contains(a, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(a) : goog.string.unescapePureXmlEntities_(a) : a;
    };
    goog.string.unescapeEntitiesWithDocument = function(a, b) {
      return goog.string.contains(a, "&") ? goog.string.unescapeEntitiesUsingDom_(a, b) : a;
    };
    goog.string.unescapeEntitiesUsingDom_ = function(a, b) {
      var c = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
      var d = b ? b.createElement("div") : goog.global.document.createElement("div");
      return a.replace(goog.string.HTML_ENTITY_PATTERN_, function(a2, b2) {
        var e = c[a2];
        if (e)
          return e;
        b2.charAt(0) == "#" && (b2 = Number("0" + b2.substr(1)), isNaN(b2) || (e = String.fromCharCode(b2)));
        e || (goog.dom.safe.setInnerHtml(d, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Single HTML entity."), a2 + " ")), e = d.firstChild.nodeValue.slice(0, -1));
        return c[a2] = e;
      });
    };
    goog.string.unescapePureXmlEntities_ = function(a) {
      return a.replace(/&([^;]+);/g, function(a2, c) {
        switch (c) {
          case "amp":
            return "&";
          case "lt":
            return "<";
          case "gt":
            return ">";
          case "quot":
            return '"';
          default:
            return c.charAt(0) != "#" || (c = Number("0" + c.substr(1)), isNaN(c)) ? a2 : String.fromCharCode(c);
        }
      });
    };
    goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
    goog.string.whitespaceEscape = function(a, b) {
      return goog.string.newLineToBr(a.replace(/  /g, " &#160;"), b);
    };
    goog.string.preserveSpaces = function(a) {
      return a.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
    };
    goog.string.stripQuotes = function(a, b) {
      for (var c = b.length, d = 0; d < c; d++) {
        var e = c == 1 ? b : b.charAt(d);
        if (a.charAt(0) == e && a.charAt(a.length - 1) == e)
          return a.substring(1, a.length - 1);
      }
      return a;
    };
    goog.string.truncate = function(a, b, c) {
      c && (a = goog.string.unescapeEntities(a));
      a.length > b && (a = a.substring(0, b - 3) + "...");
      c && (a = goog.string.htmlEscape(a));
      return a;
    };
    goog.string.truncateMiddle = function(a, b, c, d) {
      c && (a = goog.string.unescapeEntities(a));
      if (d && a.length > b) {
        d > b && (d = b);
        var e = a.length - d;
        a = a.substring(0, b - d) + "..." + a.substring(e);
      } else
        a.length > b && (d = Math.floor(b / 2), e = a.length - d, a = a.substring(0, d + b % 2) + "..." + a.substring(e));
      c && (a = goog.string.htmlEscape(a));
      return a;
    };
    goog.string.specialEscapeChars_ = { "\0": "\\0", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\v": "\\x0B", '"': '\\"', "\\": "\\\\", "<": "\\u003C" };
    goog.string.jsEscapeCache_ = { "'": "\\'" };
    goog.string.quote = function(a) {
      a = String(a);
      for (var b = ['"'], c = 0; c < a.length; c++) {
        var d = a.charAt(c), e = d.charCodeAt(0);
        b[c + 1] = goog.string.specialEscapeChars_[d] || (31 < e && 127 > e ? d : goog.string.escapeChar(d));
      }
      b.push('"');
      return b.join("");
    };
    goog.string.escapeString = function(a) {
      for (var b = [], c = 0; c < a.length; c++)
        b[c] = goog.string.escapeChar(a.charAt(c));
      return b.join("");
    };
    goog.string.escapeChar = function(a) {
      if (a in goog.string.jsEscapeCache_)
        return goog.string.jsEscapeCache_[a];
      if (a in goog.string.specialEscapeChars_)
        return goog.string.jsEscapeCache_[a] = goog.string.specialEscapeChars_[a];
      var b = a.charCodeAt(0);
      if (31 < b && 127 > b)
        var c = a;
      else {
        if (256 > b) {
          if (c = "\\x", 16 > b || 256 < b)
            c += "0";
        } else
          c = "\\u", 4096 > b && (c += "0");
        c += b.toString(16).toUpperCase();
      }
      return goog.string.jsEscapeCache_[a] = c;
    };
    goog.string.contains = goog.string.internal.contains;
    goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains;
    goog.string.countOf = function(a, b) {
      return a && b ? a.split(b).length - 1 : 0;
    };
    goog.string.removeAt = function(a, b, c) {
      var d = a;
      0 <= b && b < a.length && 0 < c && (d = a.substr(0, b) + a.substr(b + c, a.length - b - c));
      return d;
    };
    goog.string.remove = function(a, b) {
      return a.replace(b, "");
    };
    goog.string.removeAll = function(a, b) {
      b = new RegExp(goog.string.regExpEscape(b), "g");
      return a.replace(b, "");
    };
    goog.string.replaceAll = function(a, b, c) {
      b = new RegExp(goog.string.regExpEscape(b), "g");
      return a.replace(b, c.replace(/\$/g, "$$$$"));
    };
    goog.string.regExpEscape = function(a) {
      return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
    };
    goog.string.repeat = String.prototype.repeat ? function(a, b) {
      return a.repeat(b);
    } : function(a, b) {
      return Array(b + 1).join(a);
    };
    goog.string.padNumber = function(a, b, c) {
      a = goog.isDef(c) ? a.toFixed(c) : String(a);
      c = a.indexOf(".");
      c == -1 && (c = a.length);
      return goog.string.repeat("0", Math.max(0, b - c)) + a;
    };
    goog.string.makeSafe = function(a) {
      return a == null ? "" : String(a);
    };
    goog.string.buildString = function(a) {
      return Array.prototype.join.call(arguments, "");
    };
    goog.string.getRandomString = function() {
      return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36);
    };
    goog.string.compareVersions = goog.string.internal.compareVersions;
    goog.string.hashCode = function(a) {
      for (var b = 0, c = 0; c < a.length; ++c)
        b = 31 * b + a.charCodeAt(c) >>> 0;
      return b;
    };
    goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
    goog.string.createUniqueString = function() {
      return "goog_" + goog.string.uniqueStringCounter_++;
    };
    goog.string.toNumber = function(a) {
      var b = Number(a);
      return b == 0 && goog.string.isEmptyOrWhitespace(a) ? NaN : b;
    };
    goog.string.isLowerCamelCase = function(a) {
      return /^[a-z]+([A-Z][a-z]*)*$/.test(a);
    };
    goog.string.isUpperCamelCase = function(a) {
      return /^([A-Z][a-z]*)+$/.test(a);
    };
    goog.string.toCamelCase = function(a) {
      return String(a).replace(/\-([a-z])/g, function(a2, c) {
        return c.toUpperCase();
      });
    };
    goog.string.toSelectorCase = function(a) {
      return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
    };
    goog.string.toTitleCase = function(a, b) {
      b = goog.isString(b) ? goog.string.regExpEscape(b) : "\\s";
      return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a2, b2, e) {
        return b2 + e.toUpperCase();
      });
    };
    goog.string.capitalize = function(a) {
      return String(a.charAt(0)).toUpperCase() + String(a.substr(1)).toLowerCase();
    };
    goog.string.parseInt = function(a) {
      isFinite(a) && (a = String(a));
      return goog.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
    };
    goog.string.splitLimit = function(a, b, c) {
      a = a.split(b);
      for (var d = []; 0 < c && a.length; )
        d.push(a.shift()), c--;
      a.length && d.push(a.join(b));
      return d;
    };
    goog.string.lastComponent = function(a, b) {
      if (b)
        typeof b == "string" && (b = [b]);
      else
        return a;
      for (var c = -1, d = 0; d < b.length; d++)
        if (b[d] != "") {
          var e = a.lastIndexOf(b[d]);
          e > c && (c = e);
        }
      return c == -1 ? a : a.slice(c + 1);
    };
    goog.string.editDistance = function(a, b) {
      var c = [], d = [];
      if (a == b)
        return 0;
      if (!a.length || !b.length)
        return Math.max(a.length, b.length);
      for (var e = 0; e < b.length + 1; e++)
        c[e] = e;
      for (e = 0; e < a.length; e++) {
        d[0] = e + 1;
        for (var f = 0; f < b.length; f++)
          d[f + 1] = Math.min(d[f] + 1, c[f + 1] + 1, c[f] + Number(a[e] != b[f]));
        for (f = 0; f < c.length; f++)
          c[f] = d[f];
      }
      return d[b.length];
    };
    goog.labs.userAgent.engine = {};
    goog.labs.userAgent.engine.isPresto = function() {
      return goog.labs.userAgent.util.matchUserAgent("Presto");
    };
    goog.labs.userAgent.engine.isTrident = function() {
      return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
    };
    goog.labs.userAgent.engine.isEdge = function() {
      return goog.labs.userAgent.util.matchUserAgent("Edge");
    };
    goog.labs.userAgent.engine.isWebKit = function() {
      return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !goog.labs.userAgent.engine.isEdge();
    };
    goog.labs.userAgent.engine.isGecko = function() {
      return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge();
    };
    goog.labs.userAgent.engine.getVersion = function() {
      var a = goog.labs.userAgent.util.getUserAgent();
      if (a) {
        a = goog.labs.userAgent.util.extractVersionTuples(a);
        var b = goog.labs.userAgent.engine.getEngineTuple_(a);
        if (b)
          return b[0] == "Gecko" ? goog.labs.userAgent.engine.getVersionForKey_(a, "Firefox") : b[1];
        a = a[0];
        var c;
        if (a && (c = a[2]) && (c = /Trident\/([^\s;]+)/.exec(c)))
          return c[1];
      }
      return "";
    };
    goog.labs.userAgent.engine.getEngineTuple_ = function(a) {
      if (!goog.labs.userAgent.engine.isEdge())
        return a[1];
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (c[0] == "Edge")
          return c;
      }
    };
    goog.labs.userAgent.engine.isVersionOrHigher = function(a) {
      return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), a);
    };
    goog.labs.userAgent.engine.getVersionForKey_ = function(a, b) {
      return (a = goog.array.find(a, function(a2) {
        return b == a2[0];
      })) && a[1] || "";
    };
    goog.labs.userAgent.platform = {};
    goog.labs.userAgent.platform.isAndroid = function() {
      return goog.labs.userAgent.util.matchUserAgent("Android");
    };
    goog.labs.userAgent.platform.isIpod = function() {
      return goog.labs.userAgent.util.matchUserAgent("iPod");
    };
    goog.labs.userAgent.platform.isIphone = function() {
      return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad");
    };
    goog.labs.userAgent.platform.isIpad = function() {
      return goog.labs.userAgent.util.matchUserAgent("iPad");
    };
    goog.labs.userAgent.platform.isIos = function() {
      return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod();
    };
    goog.labs.userAgent.platform.isMacintosh = function() {
      return goog.labs.userAgent.util.matchUserAgent("Macintosh");
    };
    goog.labs.userAgent.platform.isLinux = function() {
      return goog.labs.userAgent.util.matchUserAgent("Linux");
    };
    goog.labs.userAgent.platform.isWindows = function() {
      return goog.labs.userAgent.util.matchUserAgent("Windows");
    };
    goog.labs.userAgent.platform.isChromeOS = function() {
      return goog.labs.userAgent.util.matchUserAgent("CrOS");
    };
    goog.labs.userAgent.platform.isChromecast = function() {
      return goog.labs.userAgent.util.matchUserAgent("CrKey");
    };
    goog.labs.userAgent.platform.isKaiOS = function() {
      return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS");
    };
    goog.labs.userAgent.platform.isGo2Phone = function() {
      return goog.labs.userAgent.util.matchUserAgentIgnoreCase("GAFP");
    };
    goog.labs.userAgent.platform.getVersion = function() {
      var a = goog.labs.userAgent.util.getUserAgent(), b = "";
      goog.labs.userAgent.platform.isWindows() ? (b = /Windows (?:NT|Phone) ([0-9.]+)/, b = (a = b.exec(a)) ? a[1] : "0.0") : goog.labs.userAgent.platform.isIos() ? (b = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, b = (a = b.exec(a)) && a[1].replace(/_/g, ".")) : goog.labs.userAgent.platform.isMacintosh() ? (b = /Mac OS X ([0-9_.]+)/, b = (a = b.exec(a)) ? a[1].replace(/_/g, ".") : "10") : goog.labs.userAgent.platform.isKaiOS() ? (b = /(?:KaiOS)\/(\S+)/i, b = (a = b.exec(a)) && a[1]) : goog.labs.userAgent.platform.isAndroid() ? (b = /Android\s+([^\);]+)(\)|;)/, b = (a = b.exec(a)) && a[1]) : goog.labs.userAgent.platform.isChromeOS() && (b = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, b = (a = b.exec(a)) && a[1]);
      return b || "";
    };
    goog.labs.userAgent.platform.isVersionOrHigher = function(a) {
      return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), a);
    };
    goog.reflect = {};
    goog.reflect.object = function(a, b) {
      return b;
    };
    goog.reflect.objectProperty = function(a, b) {
      return a;
    };
    goog.reflect.sinkValue = function(a) {
      goog.reflect.sinkValue[" "](a);
      return a;
    };
    goog.reflect.sinkValue[" "] = goog.nullFunction;
    goog.reflect.canAccessProperty = function(a, b) {
      try {
        return goog.reflect.sinkValue(a[b]), true;
      } catch (c) {
      }
      return false;
    };
    goog.reflect.cache = function(a, b, c, d) {
      d = d ? d(b) : b;
      return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b);
    };
    goog.userAgent = {};
    goog.userAgent.ASSUME_IE = false;
    goog.userAgent.ASSUME_EDGE = false;
    goog.userAgent.ASSUME_GECKO = false;
    goog.userAgent.ASSUME_WEBKIT = false;
    goog.userAgent.ASSUME_MOBILE_WEBKIT = false;
    goog.userAgent.ASSUME_OPERA = false;
    goog.userAgent.ASSUME_ANY_VERSION = false;
    goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
    goog.userAgent.getUserAgentString = function() {
      return goog.labs.userAgent.util.getUserAgent();
    };
    goog.userAgent.getNavigatorTyped = function() {
      return goog.global.navigator || null;
    };
    goog.userAgent.getNavigator = function() {
      return goog.userAgent.getNavigatorTyped();
    };
    goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera();
    goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE();
    goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge();
    goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE;
    goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko();
    goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit();
    goog.userAgent.isMobile_ = function() {
      return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile");
    };
    goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
    goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
    goog.userAgent.determinePlatform_ = function() {
      var a = goog.userAgent.getNavigatorTyped();
      return a && a.platform || "";
    };
    goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
    goog.userAgent.ASSUME_MAC = false;
    goog.userAgent.ASSUME_WINDOWS = false;
    goog.userAgent.ASSUME_LINUX = false;
    goog.userAgent.ASSUME_X11 = false;
    goog.userAgent.ASSUME_ANDROID = false;
    goog.userAgent.ASSUME_IPHONE = false;
    goog.userAgent.ASSUME_IPAD = false;
    goog.userAgent.ASSUME_IPOD = false;
    goog.userAgent.ASSUME_KAIOS = false;
    goog.userAgent.ASSUME_GO2PHONE = false;
    goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD;
    goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh();
    goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows();
    goog.userAgent.isLegacyLinux_ = function() {
      return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS();
    };
    goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_();
    goog.userAgent.isX11_ = function() {
      var a = goog.userAgent.getNavigatorTyped();
      return !!a && goog.string.contains(a.appVersion || "", "X11");
    };
    goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_();
    goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid();
    goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone();
    goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
    goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIpod();
    goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIos();
    goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_KAIOS : goog.labs.userAgent.platform.isKaiOS();
    goog.userAgent.GO2PHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_GO2PHONE : goog.labs.userAgent.platform.isGo2Phone();
    goog.userAgent.determineVersion_ = function() {
      var a = "", b = goog.userAgent.getVersionRegexResult_();
      b && (a = b ? b[1] : "");
      return goog.userAgent.IE && (b = goog.userAgent.getDocumentMode_(), b != null && b > parseFloat(a)) ? String(b) : a;
    };
    goog.userAgent.getVersionRegexResult_ = function() {
      var a = goog.userAgent.getUserAgentString();
      if (goog.userAgent.GECKO)
        return /rv:([^\);]+)(\)|;)/.exec(a);
      if (goog.userAgent.EDGE)
        return /Edge\/([\d\.]+)/.exec(a);
      if (goog.userAgent.IE)
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if (goog.userAgent.WEBKIT)
        return /WebKit\/(\S+)/.exec(a);
      if (goog.userAgent.OPERA)
        return /(?:Version)[ \/]?(\S+)/.exec(a);
    };
    goog.userAgent.getDocumentMode_ = function() {
      var a = goog.global.document;
      return a ? a.documentMode : void 0;
    };
    goog.userAgent.VERSION = goog.userAgent.determineVersion_();
    goog.userAgent.compare = function(a, b) {
      return goog.string.compareVersions(a, b);
    };
    goog.userAgent.isVersionOrHigherCache_ = {};
    goog.userAgent.isVersionOrHigher = function(a) {
      return goog.userAgent.ASSUME_ANY_VERSION || goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, a, function() {
        return 0 <= goog.string.compareVersions(goog.userAgent.VERSION, a);
      });
    };
    goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher;
    goog.userAgent.isDocumentModeOrHigher = function(a) {
      return Number(goog.userAgent.DOCUMENT_MODE) >= a;
    };
    goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
    goog.userAgent.DOCUMENT_MODE = function() {
      if (goog.global.document && goog.userAgent.IE)
        return goog.userAgent.getDocumentMode_();
    }();
    goog.userAgent.product = {};
    goog.userAgent.product.ASSUME_FIREFOX = false;
    goog.userAgent.product.ASSUME_IPHONE = false;
    goog.userAgent.product.ASSUME_IPAD = false;
    goog.userAgent.product.ASSUME_ANDROID = false;
    goog.userAgent.product.ASSUME_CHROME = false;
    goog.userAgent.product.ASSUME_SAFARI = false;
    goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI;
    goog.userAgent.product.OPERA = goog.userAgent.OPERA;
    goog.userAgent.product.IE = goog.userAgent.IE;
    goog.userAgent.product.EDGE = goog.userAgent.EDGE;
    goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox();
    goog.userAgent.product.isIphoneOrIpod_ = function() {
      return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod();
    };
    goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_();
    goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
    goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser();
    goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome();
    goog.userAgent.product.isSafariDesktop_ = function() {
      return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos();
    };
    goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_();
    goog.crypt.base64 = {};
    goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "+/=";
    goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "-_.";
    goog.crypt.base64.Alphabet = { DEFAULT: 0, NO_PADDING: 1, WEBSAFE: 2, WEBSAFE_DOT_PADDING: 3, WEBSAFE_NO_PADDING: 4 };
    goog.crypt.base64.paddingChars_ = "=.";
    goog.crypt.base64.isPadding_ = function(a) {
      return goog.string.contains(goog.crypt.base64.paddingChars_, a);
    };
    goog.crypt.base64.byteToCharMaps_ = {};
    goog.crypt.base64.charToByteMap_ = null;
    goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI || goog.userAgent.OPERA;
    goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || typeof goog.global.btoa == "function";
    goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && typeof goog.global.atob == "function";
    goog.crypt.base64.encodeByteArray = function(a, b) {
      goog.asserts.assert(goog.isArrayLike(a), "encodeByteArray takes an array as a parameter");
      b === void 0 && (b = goog.crypt.base64.Alphabet.DEFAULT);
      goog.crypt.base64.init_();
      b = goog.crypt.base64.byteToCharMaps_[b];
      for (var c = [], d = 0; d < a.length; d += 3) {
        var e = a[d], f = d + 1 < a.length, g = f ? a[d + 1] : 0, h = d + 2 < a.length, k = h ? a[d + 2] : 0, l = e >> 2;
        e = (e & 3) << 4 | g >> 4;
        g = (g & 15) << 2 | k >> 6;
        k &= 63;
        h || (k = 64, f || (g = 64));
        c.push(b[l], b[e], b[g] || "", b[k] || "");
      }
      return c.join("");
    };
    goog.crypt.base64.encodeString = function(a, b) {
      return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !b ? goog.global.btoa(a) : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(a), b);
    };
    goog.crypt.base64.decodeString = function(a, b) {
      if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !b)
        return goog.global.atob(a);
      var c = "";
      goog.crypt.base64.decodeStringInternal_(a, function(a2) {
        c += String.fromCharCode(a2);
      });
      return c;
    };
    goog.crypt.base64.decodeStringToByteArray = function(a, b) {
      var c = [];
      goog.crypt.base64.decodeStringInternal_(a, function(a2) {
        c.push(a2);
      });
      return c;
    };
    goog.crypt.base64.decodeStringToUint8Array = function(a) {
      goog.asserts.assert(!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"), "Browser does not support typed arrays");
      var b = a.length, c = 3 * b / 4;
      c % 3 ? c = Math.floor(c) : goog.crypt.base64.isPadding_(a[b - 1]) && (c = goog.crypt.base64.isPadding_(a[b - 2]) ? c - 2 : c - 1);
      var d = new Uint8Array(c), e = 0;
      goog.crypt.base64.decodeStringInternal_(a, function(a2) {
        d[e++] = a2;
      });
      return d.subarray(0, e);
    };
    goog.crypt.base64.decodeStringInternal_ = function(a, b) {
      function c(b2) {
        for (; d < a.length; ) {
          var c2 = a.charAt(d++), e2 = goog.crypt.base64.charToByteMap_[c2];
          if (e2 != null)
            return e2;
          if (!goog.string.isEmptyOrWhitespace(c2))
            throw Error("Unknown base64 encoding at char: " + c2);
        }
        return b2;
      }
      goog.crypt.base64.init_();
      for (var d = 0; ; ) {
        var e = c(-1), f = c(0), g = c(64), h = c(64);
        if (h === 64 && e === -1)
          break;
        b(e << 2 | f >> 4);
        g != 64 && (b(f << 4 & 240 | g >> 2), h != 64 && b(g << 6 & 192 | h));
      }
    };
    goog.crypt.base64.init_ = function() {
      if (!goog.crypt.base64.charToByteMap_) {
        goog.crypt.base64.charToByteMap_ = {};
        for (var a = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
          var d = a.concat(b[c].split(""));
          goog.crypt.base64.byteToCharMaps_[c] = d;
          for (var e = 0; e < d.length; e++) {
            var f = d[e], g = goog.crypt.base64.charToByteMap_[f];
            g === void 0 ? goog.crypt.base64.charToByteMap_[f] = e : goog.asserts.assert(g === e);
          }
        }
      }
    };
    jspb.utils = {};
    jspb.utils.split64Low = 0;
    jspb.utils.split64High = 0;
    jspb.utils.splitUint64 = function(a) {
      var b = a >>> 0;
      a = Math.floor((a - b) / jspb.BinaryConstants.TWO_TO_32) >>> 0;
      jspb.utils.split64Low = b;
      jspb.utils.split64High = a;
    };
    jspb.utils.splitInt64 = function(a) {
      var b = 0 > a;
      a = Math.abs(a);
      var c = a >>> 0;
      a = Math.floor((a - c) / jspb.BinaryConstants.TWO_TO_32);
      a >>>= 0;
      b && (a = ~a >>> 0, c = (~c >>> 0) + 1, 4294967295 < c && (c = 0, a++, 4294967295 < a && (a = 0)));
      jspb.utils.split64Low = c;
      jspb.utils.split64High = a;
    };
    jspb.utils.splitZigzag64 = function(a) {
      var b = 0 > a;
      a = 2 * Math.abs(a);
      jspb.utils.splitUint64(a);
      a = jspb.utils.split64Low;
      var c = jspb.utils.split64High;
      b && (a == 0 ? c == 0 ? c = a = 4294967295 : (c--, a = 4294967295) : a--);
      jspb.utils.split64Low = a;
      jspb.utils.split64High = c;
    };
    jspb.utils.splitFloat32 = function(a) {
      var b = 0 > a ? 1 : 0;
      a = b ? -a : a;
      if (a === 0)
        0 < 1 / a ? (jspb.utils.split64High = 0, jspb.utils.split64Low = 0) : (jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483648);
      else if (isNaN(a))
        jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483647;
      else if (a > jspb.BinaryConstants.FLOAT32_MAX)
        jspb.utils.split64High = 0, jspb.utils.split64Low = (b << 31 | 2139095040) >>> 0;
      else if (a < jspb.BinaryConstants.FLOAT32_MIN)
        a = Math.round(a / Math.pow(2, -149)), jspb.utils.split64High = 0, jspb.utils.split64Low = (b << 31 | a) >>> 0;
      else {
        var c = Math.floor(Math.log(a) / Math.LN2);
        a *= Math.pow(2, -c);
        a = Math.round(a * jspb.BinaryConstants.TWO_TO_23) & 8388607;
        jspb.utils.split64High = 0;
        jspb.utils.split64Low = (b << 31 | c + 127 << 23 | a) >>> 0;
      }
    };
    jspb.utils.splitFloat64 = function(a) {
      var b = 0 > a ? 1 : 0;
      a = b ? -a : a;
      if (a === 0)
        jspb.utils.split64High = 0 < 1 / a ? 0 : 2147483648, jspb.utils.split64Low = 0;
      else if (isNaN(a))
        jspb.utils.split64High = 2147483647, jspb.utils.split64Low = 4294967295;
      else if (a > jspb.BinaryConstants.FLOAT64_MAX)
        jspb.utils.split64High = (b << 31 | 2146435072) >>> 0, jspb.utils.split64Low = 0;
      else if (a < jspb.BinaryConstants.FLOAT64_MIN) {
        var c = a / Math.pow(2, -1074);
        a = c / jspb.BinaryConstants.TWO_TO_32;
        jspb.utils.split64High = (b << 31 | a) >>> 0;
        jspb.utils.split64Low = c >>> 0;
      } else {
        c = a;
        var d = 0;
        if (2 <= c)
          for (; 2 <= c && 1023 > d; )
            d++, c /= 2;
        else
          for (; 1 > c && -1022 < d; )
            c *= 2, d--;
        c = a * Math.pow(2, -d);
        a = c * jspb.BinaryConstants.TWO_TO_20 & 1048575;
        c = c * jspb.BinaryConstants.TWO_TO_52 >>> 0;
        jspb.utils.split64High = (b << 31 | d + 1023 << 20 | a) >>> 0;
        jspb.utils.split64Low = c;
      }
    };
    jspb.utils.splitHash64 = function(a) {
      var b = a.charCodeAt(0), c = a.charCodeAt(1), d = a.charCodeAt(2), e = a.charCodeAt(3), f = a.charCodeAt(4), g = a.charCodeAt(5), h = a.charCodeAt(6);
      a = a.charCodeAt(7);
      jspb.utils.split64Low = b + (c << 8) + (d << 16) + (e << 24) >>> 0;
      jspb.utils.split64High = f + (g << 8) + (h << 16) + (a << 24) >>> 0;
    };
    jspb.utils.joinUint64 = function(a, b) {
      return b * jspb.BinaryConstants.TWO_TO_32 + (a >>> 0);
    };
    jspb.utils.joinInt64 = function(a, b) {
      var c = b & 2147483648;
      c && (a = ~a + 1 >>> 0, b = ~b >>> 0, a == 0 && (b = b + 1 >>> 0));
      a = jspb.utils.joinUint64(a, b);
      return c ? -a : a;
    };
    jspb.utils.toZigzag64 = function(a, b, c) {
      var d = b >> 31;
      return c(a << 1 ^ d, (b << 1 | a >>> 31) ^ d);
    };
    jspb.utils.joinZigzag64 = function(a, b) {
      return jspb.utils.fromZigzag64(a, b, jspb.utils.joinInt64);
    };
    jspb.utils.fromZigzag64 = function(a, b, c) {
      var d = -(a & 1);
      return c((a >>> 1 | b << 31) ^ d, b >>> 1 ^ d);
    };
    jspb.utils.joinFloat32 = function(a, b) {
      b = 2 * (a >> 31) + 1;
      var c = a >>> 23 & 255;
      a &= 8388607;
      return c == 255 ? a ? NaN : Infinity * b : c == 0 ? b * Math.pow(2, -149) * a : b * Math.pow(2, c - 150) * (a + Math.pow(2, 23));
    };
    jspb.utils.joinFloat64 = function(a, b) {
      var c = 2 * (b >> 31) + 1, d = b >>> 20 & 2047;
      a = jspb.BinaryConstants.TWO_TO_32 * (b & 1048575) + a;
      return d == 2047 ? a ? NaN : Infinity * c : d == 0 ? c * Math.pow(2, -1074) * a : c * Math.pow(2, d - 1075) * (a + jspb.BinaryConstants.TWO_TO_52);
    };
    jspb.utils.joinHash64 = function(a, b) {
      return String.fromCharCode(a >>> 0 & 255, a >>> 8 & 255, a >>> 16 & 255, a >>> 24 & 255, b >>> 0 & 255, b >>> 8 & 255, b >>> 16 & 255, b >>> 24 & 255);
    };
    jspb.utils.DIGITS = "0123456789abcdef".split("");
    jspb.utils.ZERO_CHAR_CODE_ = 48;
    jspb.utils.A_CHAR_CODE_ = 97;
    jspb.utils.joinUnsignedDecimalString = function(a, b) {
      function c(a2, b2) {
        a2 = a2 ? String(a2) : "";
        return b2 ? "0000000".slice(a2.length) + a2 : a2;
      }
      if (2097151 >= b)
        return "" + jspb.utils.joinUint64(a, b);
      var d = (a >>> 24 | b << 8) >>> 0 & 16777215;
      b = b >> 16 & 65535;
      a = (a & 16777215) + 6777216 * d + 6710656 * b;
      d += 8147497 * b;
      b *= 2;
      1e7 <= a && (d += Math.floor(a / 1e7), a %= 1e7);
      1e7 <= d && (b += Math.floor(d / 1e7), d %= 1e7);
      return c(b, 0) + c(d, b) + c(a, 1);
    };
    jspb.utils.joinSignedDecimalString = function(a, b) {
      var c = b & 2147483648;
      c && (a = ~a + 1 >>> 0, b = ~b + (a == 0 ? 1 : 0) >>> 0);
      a = jspb.utils.joinUnsignedDecimalString(a, b);
      return c ? "-" + a : a;
    };
    jspb.utils.hash64ToDecimalString = function(a, b) {
      jspb.utils.splitHash64(a);
      a = jspb.utils.split64Low;
      var c = jspb.utils.split64High;
      return b ? jspb.utils.joinSignedDecimalString(a, c) : jspb.utils.joinUnsignedDecimalString(a, c);
    };
    jspb.utils.hash64ArrayToDecimalStrings = function(a, b) {
      for (var c = Array(a.length), d = 0; d < a.length; d++)
        c[d] = jspb.utils.hash64ToDecimalString(a[d], b);
      return c;
    };
    jspb.utils.decimalStringToHash64 = function(a) {
      function b(a2, b2) {
        for (var c2 = 0; 8 > c2 && (a2 !== 1 || 0 < b2); c2++)
          b2 = a2 * e[c2] + b2, e[c2] = b2 & 255, b2 >>>= 8;
      }
      function c() {
        for (var a2 = 0; 8 > a2; a2++)
          e[a2] = ~e[a2] & 255;
      }
      goog.asserts.assert(0 < a.length);
      var d = false;
      a[0] === "-" && (d = true, a = a.slice(1));
      for (var e = [0, 0, 0, 0, 0, 0, 0, 0], f = 0; f < a.length; f++)
        b(10, a.charCodeAt(f) - jspb.utils.ZERO_CHAR_CODE_);
      d && (c(), b(1, 1));
      return goog.crypt.byteArrayToString(e);
    };
    jspb.utils.splitDecimalString = function(a) {
      jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a));
    };
    jspb.utils.toHexDigit_ = function(a) {
      return String.fromCharCode(10 > a ? jspb.utils.ZERO_CHAR_CODE_ + a : jspb.utils.A_CHAR_CODE_ - 10 + a);
    };
    jspb.utils.fromHexCharCode_ = function(a) {
      return a >= jspb.utils.A_CHAR_CODE_ ? a - jspb.utils.A_CHAR_CODE_ + 10 : a - jspb.utils.ZERO_CHAR_CODE_;
    };
    jspb.utils.hash64ToHexString = function(a) {
      var b = Array(18);
      b[0] = "0";
      b[1] = "x";
      for (var c = 0; 8 > c; c++) {
        var d = a.charCodeAt(7 - c);
        b[2 * c + 2] = jspb.utils.toHexDigit_(d >> 4);
        b[2 * c + 3] = jspb.utils.toHexDigit_(d & 15);
      }
      return b.join("");
    };
    jspb.utils.hexStringToHash64 = function(a) {
      a = a.toLowerCase();
      goog.asserts.assert(a.length == 18);
      goog.asserts.assert(a[0] == "0");
      goog.asserts.assert(a[1] == "x");
      for (var b = "", c = 0; 8 > c; c++) {
        var d = jspb.utils.fromHexCharCode_(a.charCodeAt(2 * c + 2)), e = jspb.utils.fromHexCharCode_(a.charCodeAt(2 * c + 3));
        b = String.fromCharCode(16 * d + e) + b;
      }
      return b;
    };
    jspb.utils.hash64ToNumber = function(a, b) {
      jspb.utils.splitHash64(a);
      a = jspb.utils.split64Low;
      var c = jspb.utils.split64High;
      return b ? jspb.utils.joinInt64(a, c) : jspb.utils.joinUint64(a, c);
    };
    jspb.utils.numberToHash64 = function(a) {
      jspb.utils.splitInt64(a);
      return jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High);
    };
    jspb.utils.countVarints = function(a, b, c) {
      for (var d = 0, e = b; e < c; e++)
        d += a[e] >> 7;
      return c - b - d;
    };
    jspb.utils.countVarintFields = function(a, b, c, d) {
      var e = 0;
      d = 8 * d + jspb.BinaryConstants.WireType.VARINT;
      if (128 > d)
        for (; b < c && a[b++] == d; )
          for (e++; ; ) {
            var f = a[b++];
            if ((f & 128) == 0)
              break;
          }
      else
        for (; b < c; ) {
          for (f = d; 128 < f; ) {
            if (a[b] != (f & 127 | 128))
              return e;
            b++;
            f >>= 7;
          }
          if (a[b++] != f)
            break;
          for (e++; f = a[b++], (f & 128) != 0; )
            ;
        }
      return e;
    };
    jspb.utils.countFixedFields_ = function(a, b, c, d, e) {
      var f = 0;
      if (128 > d)
        for (; b < c && a[b++] == d; )
          f++, b += e;
      else
        for (; b < c; ) {
          for (var g = d; 128 < g; ) {
            if (a[b++] != (g & 127 | 128))
              return f;
            g >>= 7;
          }
          if (a[b++] != g)
            break;
          f++;
          b += e;
        }
      return f;
    };
    jspb.utils.countFixed32Fields = function(a, b, c, d) {
      return jspb.utils.countFixedFields_(a, b, c, 8 * d + jspb.BinaryConstants.WireType.FIXED32, 4);
    };
    jspb.utils.countFixed64Fields = function(a, b, c, d) {
      return jspb.utils.countFixedFields_(a, b, c, 8 * d + jspb.BinaryConstants.WireType.FIXED64, 8);
    };
    jspb.utils.countDelimitedFields = function(a, b, c, d) {
      var e = 0;
      for (d = 8 * d + jspb.BinaryConstants.WireType.DELIMITED; b < c; ) {
        for (var f = d; 128 < f; ) {
          if (a[b++] != (f & 127 | 128))
            return e;
          f >>= 7;
        }
        if (a[b++] != f)
          break;
        e++;
        for (var g = 0, h = 1; f = a[b++], g += (f & 127) * h, h *= 128, (f & 128) != 0; )
          ;
        b += g;
      }
      return e;
    };
    jspb.utils.debugBytesToTextFormat = function(a) {
      var b = '"';
      if (a) {
        a = jspb.utils.byteSourceToUint8Array(a);
        for (var c = 0; c < a.length; c++)
          b += "\\x", 16 > a[c] && (b += "0"), b += a[c].toString(16);
      }
      return b + '"';
    };
    jspb.utils.debugScalarToTextFormat = function(a) {
      return typeof a === "string" ? goog.string.quote(a) : a.toString();
    };
    jspb.utils.stringToByteArray = function(a) {
      for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        if (255 < d)
          throw Error("Conversion error: string contains codepoint outside of byte range");
        b[c] = d;
      }
      return b;
    };
    jspb.utils.byteSourceToUint8Array = function(a) {
      if (a.constructor === Uint8Array)
        return a;
      if (a.constructor === ArrayBuffer || typeof Buffer != "undefined" && a.constructor === Buffer || a.constructor === Array)
        return new Uint8Array(a);
      if (a.constructor === String)
        return goog.crypt.base64.decodeStringToUint8Array(a);
      goog.asserts.fail("Type not convertible to Uint8Array.");
      return new Uint8Array(0);
    };
    jspb.BinaryDecoder = function(a, b, c) {
      this.bytes_ = null;
      this.cursor_ = this.end_ = this.start_ = 0;
      this.error_ = false;
      a && this.setBlock(a, b, c);
    };
    jspb.BinaryDecoder.instanceCache_ = [];
    jspb.BinaryDecoder.alloc = function(a, b, c) {
      if (jspb.BinaryDecoder.instanceCache_.length) {
        var d = jspb.BinaryDecoder.instanceCache_.pop();
        a && d.setBlock(a, b, c);
        return d;
      }
      return new jspb.BinaryDecoder(a, b, c);
    };
    jspb.BinaryDecoder.prototype.free = function() {
      this.clear();
      100 > jspb.BinaryDecoder.instanceCache_.length && jspb.BinaryDecoder.instanceCache_.push(this);
    };
    jspb.BinaryDecoder.prototype.clone = function() {
      return jspb.BinaryDecoder.alloc(this.bytes_, this.start_, this.end_ - this.start_);
    };
    jspb.BinaryDecoder.prototype.clear = function() {
      this.bytes_ = null;
      this.cursor_ = this.end_ = this.start_ = 0;
      this.error_ = false;
    };
    jspb.BinaryDecoder.prototype.getBuffer = function() {
      return this.bytes_;
    };
    jspb.BinaryDecoder.prototype.setBlock = function(a, b, c) {
      this.bytes_ = jspb.utils.byteSourceToUint8Array(a);
      this.start_ = b !== void 0 ? b : 0;
      this.end_ = c !== void 0 ? this.start_ + c : this.bytes_.length;
      this.cursor_ = this.start_;
    };
    jspb.BinaryDecoder.prototype.getEnd = function() {
      return this.end_;
    };
    jspb.BinaryDecoder.prototype.setEnd = function(a) {
      this.end_ = a;
    };
    jspb.BinaryDecoder.prototype.reset = function() {
      this.cursor_ = this.start_;
    };
    jspb.BinaryDecoder.prototype.getCursor = function() {
      return this.cursor_;
    };
    jspb.BinaryDecoder.prototype.setCursor = function(a) {
      this.cursor_ = a;
    };
    jspb.BinaryDecoder.prototype.advance = function(a) {
      this.cursor_ += a;
      goog.asserts.assert(this.cursor_ <= this.end_);
    };
    jspb.BinaryDecoder.prototype.atEnd = function() {
      return this.cursor_ == this.end_;
    };
    jspb.BinaryDecoder.prototype.pastEnd = function() {
      return this.cursor_ > this.end_;
    };
    jspb.BinaryDecoder.prototype.getError = function() {
      return this.error_ || 0 > this.cursor_ || this.cursor_ > this.end_;
    };
    jspb.BinaryDecoder.prototype.readSplitVarint64 = function(a) {
      for (var b = 128, c = 0, d = 0, e = 0; 4 > e && 128 <= b; e++)
        b = this.bytes_[this.cursor_++], c |= (b & 127) << 7 * e;
      128 <= b && (b = this.bytes_[this.cursor_++], c |= (b & 127) << 28, d |= (b & 127) >> 4);
      if (128 <= b)
        for (e = 0; 5 > e && 128 <= b; e++)
          b = this.bytes_[this.cursor_++], d |= (b & 127) << 7 * e + 3;
      if (128 > b)
        return a(c >>> 0, d >>> 0);
      goog.asserts.fail("Failed to read varint, encoding is invalid.");
      this.error_ = true;
    };
    jspb.BinaryDecoder.prototype.readSplitZigzagVarint64 = function(a) {
      return this.readSplitVarint64(function(b, c) {
        return jspb.utils.fromZigzag64(b, c, a);
      });
    };
    jspb.BinaryDecoder.prototype.readSplitFixed64 = function(a) {
      var b = this.bytes_, c = this.cursor_;
      this.cursor_ += 8;
      for (var d = 0, e = 0, f = c + 7; f >= c; f--)
        d = d << 8 | b[f], e = e << 8 | b[f + 4];
      return a(d, e);
    };
    jspb.BinaryDecoder.prototype.skipVarint = function() {
      for (; this.bytes_[this.cursor_] & 128; )
        this.cursor_++;
      this.cursor_++;
    };
    jspb.BinaryDecoder.prototype.unskipVarint = function(a) {
      for (; 128 < a; )
        this.cursor_--, a >>>= 7;
      this.cursor_--;
    };
    jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function() {
      var a = this.bytes_;
      var b = a[this.cursor_ + 0];
      var c = b & 127;
      if (128 > b)
        return this.cursor_ += 1, goog.asserts.assert(this.cursor_ <= this.end_), c;
      b = a[this.cursor_ + 1];
      c |= (b & 127) << 7;
      if (128 > b)
        return this.cursor_ += 2, goog.asserts.assert(this.cursor_ <= this.end_), c;
      b = a[this.cursor_ + 2];
      c |= (b & 127) << 14;
      if (128 > b)
        return this.cursor_ += 3, goog.asserts.assert(this.cursor_ <= this.end_), c;
      b = a[this.cursor_ + 3];
      c |= (b & 127) << 21;
      if (128 > b)
        return this.cursor_ += 4, goog.asserts.assert(this.cursor_ <= this.end_), c;
      b = a[this.cursor_ + 4];
      c |= (b & 15) << 28;
      if (128 > b)
        return this.cursor_ += 5, goog.asserts.assert(this.cursor_ <= this.end_), c >>> 0;
      this.cursor_ += 5;
      128 <= a[this.cursor_++] && 128 <= a[this.cursor_++] && 128 <= a[this.cursor_++] && 128 <= a[this.cursor_++] && 128 <= a[this.cursor_++] && goog.asserts.assert(false);
      goog.asserts.assert(this.cursor_ <= this.end_);
      return c;
    };
    jspb.BinaryDecoder.prototype.readSignedVarint32 = jspb.BinaryDecoder.prototype.readUnsignedVarint32;
    jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function() {
      return this.readUnsignedVarint32().toString();
    };
    jspb.BinaryDecoder.prototype.readSignedVarint32String = function() {
      return this.readSignedVarint32().toString();
    };
    jspb.BinaryDecoder.prototype.readZigzagVarint32 = function() {
      var a = this.readUnsignedVarint32();
      return a >>> 1 ^ -(a & 1);
    };
    jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function() {
      return this.readSplitVarint64(jspb.utils.joinUint64);
    };
    jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function() {
      return this.readSplitVarint64(jspb.utils.joinUnsignedDecimalString);
    };
    jspb.BinaryDecoder.prototype.readSignedVarint64 = function() {
      return this.readSplitVarint64(jspb.utils.joinInt64);
    };
    jspb.BinaryDecoder.prototype.readSignedVarint64String = function() {
      return this.readSplitVarint64(jspb.utils.joinSignedDecimalString);
    };
    jspb.BinaryDecoder.prototype.readZigzagVarint64 = function() {
      return this.readSplitVarint64(jspb.utils.joinZigzag64);
    };
    jspb.BinaryDecoder.prototype.readZigzagVarintHash64 = function() {
      return this.readSplitZigzagVarint64(jspb.utils.joinHash64);
    };
    jspb.BinaryDecoder.prototype.readZigzagVarint64String = function() {
      return this.readSplitZigzagVarint64(jspb.utils.joinSignedDecimalString);
    };
    jspb.BinaryDecoder.prototype.readUint8 = function() {
      var a = this.bytes_[this.cursor_ + 0];
      this.cursor_ += 1;
      goog.asserts.assert(this.cursor_ <= this.end_);
      return a;
    };
    jspb.BinaryDecoder.prototype.readUint16 = function() {
      var a = this.bytes_[this.cursor_ + 0], b = this.bytes_[this.cursor_ + 1];
      this.cursor_ += 2;
      goog.asserts.assert(this.cursor_ <= this.end_);
      return a << 0 | b << 8;
    };
    jspb.BinaryDecoder.prototype.readUint32 = function() {
      var a = this.bytes_[this.cursor_ + 0], b = this.bytes_[this.cursor_ + 1], c = this.bytes_[this.cursor_ + 2], d = this.bytes_[this.cursor_ + 3];
      this.cursor_ += 4;
      goog.asserts.assert(this.cursor_ <= this.end_);
      return (a << 0 | b << 8 | c << 16 | d << 24) >>> 0;
    };
    jspb.BinaryDecoder.prototype.readUint64 = function() {
      var a = this.readUint32(), b = this.readUint32();
      return jspb.utils.joinUint64(a, b);
    };
    jspb.BinaryDecoder.prototype.readUint64String = function() {
      var a = this.readUint32(), b = this.readUint32();
      return jspb.utils.joinUnsignedDecimalString(a, b);
    };
    jspb.BinaryDecoder.prototype.readInt8 = function() {
      var a = this.bytes_[this.cursor_ + 0];
      this.cursor_ += 1;
      goog.asserts.assert(this.cursor_ <= this.end_);
      return a << 24 >> 24;
    };
    jspb.BinaryDecoder.prototype.readInt16 = function() {
      var a = this.bytes_[this.cursor_ + 0], b = this.bytes_[this.cursor_ + 1];
      this.cursor_ += 2;
      goog.asserts.assert(this.cursor_ <= this.end_);
      return (a << 0 | b << 8) << 16 >> 16;
    };
    jspb.BinaryDecoder.prototype.readInt32 = function() {
      var a = this.bytes_[this.cursor_ + 0], b = this.bytes_[this.cursor_ + 1], c = this.bytes_[this.cursor_ + 2], d = this.bytes_[this.cursor_ + 3];
      this.cursor_ += 4;
      goog.asserts.assert(this.cursor_ <= this.end_);
      return a << 0 | b << 8 | c << 16 | d << 24;
    };
    jspb.BinaryDecoder.prototype.readInt64 = function() {
      var a = this.readUint32(), b = this.readUint32();
      return jspb.utils.joinInt64(a, b);
    };
    jspb.BinaryDecoder.prototype.readInt64String = function() {
      var a = this.readUint32(), b = this.readUint32();
      return jspb.utils.joinSignedDecimalString(a, b);
    };
    jspb.BinaryDecoder.prototype.readFloat = function() {
      var a = this.readUint32();
      return jspb.utils.joinFloat32(a, 0);
    };
    jspb.BinaryDecoder.prototype.readDouble = function() {
      var a = this.readUint32(), b = this.readUint32();
      return jspb.utils.joinFloat64(a, b);
    };
    jspb.BinaryDecoder.prototype.readBool = function() {
      return !!this.bytes_[this.cursor_++];
    };
    jspb.BinaryDecoder.prototype.readEnum = function() {
      return this.readSignedVarint32();
    };
    jspb.BinaryDecoder.prototype.readString = function(a) {
      var b = this.bytes_, c = this.cursor_;
      a = c + a;
      for (var d = [], e = ""; c < a; ) {
        var f = b[c++];
        if (128 > f)
          d.push(f);
        else if (192 > f)
          continue;
        else if (224 > f) {
          var g = b[c++];
          d.push((f & 31) << 6 | g & 63);
        } else if (240 > f) {
          g = b[c++];
          var h = b[c++];
          d.push((f & 15) << 12 | (g & 63) << 6 | h & 63);
        } else if (248 > f) {
          g = b[c++];
          h = b[c++];
          var k = b[c++];
          f = (f & 7) << 18 | (g & 63) << 12 | (h & 63) << 6 | k & 63;
          f -= 65536;
          d.push((f >> 10 & 1023) + 55296, (f & 1023) + 56320);
        }
        8192 <= d.length && (e += String.fromCharCode.apply(null, d), d.length = 0);
      }
      e += goog.crypt.byteArrayToString(d);
      this.cursor_ = c;
      return e;
    };
    jspb.BinaryDecoder.prototype.readStringWithLength = function() {
      var a = this.readUnsignedVarint32();
      return this.readString(a);
    };
    jspb.BinaryDecoder.prototype.readBytes = function(a) {
      if (0 > a || this.cursor_ + a > this.bytes_.length)
        return this.error_ = true, goog.asserts.fail("Invalid byte length!"), new Uint8Array(0);
      var b = this.bytes_.subarray(this.cursor_, this.cursor_ + a);
      this.cursor_ += a;
      goog.asserts.assert(this.cursor_ <= this.end_);
      return b;
    };
    jspb.BinaryDecoder.prototype.readVarintHash64 = function() {
      return this.readSplitVarint64(jspb.utils.joinHash64);
    };
    jspb.BinaryDecoder.prototype.readFixedHash64 = function() {
      var a = this.bytes_, b = this.cursor_, c = a[b + 0], d = a[b + 1], e = a[b + 2], f = a[b + 3], g = a[b + 4], h = a[b + 5], k = a[b + 6];
      a = a[b + 7];
      this.cursor_ += 8;
      return String.fromCharCode(c, d, e, f, g, h, k, a);
    };
    jspb.BinaryReader = function(a, b, c) {
      this.decoder_ = jspb.BinaryDecoder.alloc(a, b, c);
      this.fieldCursor_ = this.decoder_.getCursor();
      this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
      this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
      this.error_ = false;
      this.readCallbacks_ = null;
    };
    jspb.BinaryReader.instanceCache_ = [];
    jspb.BinaryReader.alloc = function(a, b, c) {
      if (jspb.BinaryReader.instanceCache_.length) {
        var d = jspb.BinaryReader.instanceCache_.pop();
        a && d.decoder_.setBlock(a, b, c);
        return d;
      }
      return new jspb.BinaryReader(a, b, c);
    };
    jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc;
    jspb.BinaryReader.prototype.free = function() {
      this.decoder_.clear();
      this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
      this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
      this.error_ = false;
      this.readCallbacks_ = null;
      100 > jspb.BinaryReader.instanceCache_.length && jspb.BinaryReader.instanceCache_.push(this);
    };
    jspb.BinaryReader.prototype.getFieldCursor = function() {
      return this.fieldCursor_;
    };
    jspb.BinaryReader.prototype.getCursor = function() {
      return this.decoder_.getCursor();
    };
    jspb.BinaryReader.prototype.getBuffer = function() {
      return this.decoder_.getBuffer();
    };
    jspb.BinaryReader.prototype.getFieldNumber = function() {
      return this.nextField_;
    };
    jspb.BinaryReader.prototype.getWireType = function() {
      return this.nextWireType_;
    };
    jspb.BinaryReader.prototype.isDelimited = function() {
      return this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED;
    };
    jspb.BinaryReader.prototype.isEndGroup = function() {
      return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP;
    };
    jspb.BinaryReader.prototype.getError = function() {
      return this.error_ || this.decoder_.getError();
    };
    jspb.BinaryReader.prototype.setBlock = function(a, b, c) {
      this.decoder_.setBlock(a, b, c);
      this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
      this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
    };
    jspb.BinaryReader.prototype.reset = function() {
      this.decoder_.reset();
      this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
      this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
    };
    jspb.BinaryReader.prototype.advance = function(a) {
      this.decoder_.advance(a);
    };
    jspb.BinaryReader.prototype.nextField = function() {
      if (this.decoder_.atEnd())
        return false;
      if (this.getError())
        return goog.asserts.fail("Decoder hit an error"), false;
      this.fieldCursor_ = this.decoder_.getCursor();
      var a = this.decoder_.readUnsignedVarint32(), b = a >>> 3;
      a &= 7;
      if (a != jspb.BinaryConstants.WireType.VARINT && a != jspb.BinaryConstants.WireType.FIXED32 && a != jspb.BinaryConstants.WireType.FIXED64 && a != jspb.BinaryConstants.WireType.DELIMITED && a != jspb.BinaryConstants.WireType.START_GROUP && a != jspb.BinaryConstants.WireType.END_GROUP)
        return goog.asserts.fail("Invalid wire type: %s (at position %s)", a, this.fieldCursor_), this.error_ = true, false;
      this.nextField_ = b;
      this.nextWireType_ = a;
      return true;
    };
    jspb.BinaryReader.prototype.unskipHeader = function() {
      this.decoder_.unskipVarint(this.nextField_ << 3 | this.nextWireType_);
    };
    jspb.BinaryReader.prototype.skipMatchingFields = function() {
      var a = this.nextField_;
      for (this.unskipHeader(); this.nextField() && this.getFieldNumber() == a; )
        this.skipField();
      this.decoder_.atEnd() || this.unskipHeader();
    };
    jspb.BinaryReader.prototype.skipVarintField = function() {
      this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT ? (goog.asserts.fail("Invalid wire type for skipVarintField"), this.skipField()) : this.decoder_.skipVarint();
    };
    jspb.BinaryReader.prototype.skipDelimitedField = function() {
      if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED)
        goog.asserts.fail("Invalid wire type for skipDelimitedField"), this.skipField();
      else {
        var a = this.decoder_.readUnsignedVarint32();
        this.decoder_.advance(a);
      }
    };
    jspb.BinaryReader.prototype.skipFixed32Field = function() {
      this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32 ? (goog.asserts.fail("Invalid wire type for skipFixed32Field"), this.skipField()) : this.decoder_.advance(4);
    };
    jspb.BinaryReader.prototype.skipFixed64Field = function() {
      this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64 ? (goog.asserts.fail("Invalid wire type for skipFixed64Field"), this.skipField()) : this.decoder_.advance(8);
    };
    jspb.BinaryReader.prototype.skipGroup = function() {
      var a = this.nextField_;
      do {
        if (!this.nextField()) {
          goog.asserts.fail("Unmatched start-group tag: stream EOF");
          this.error_ = true;
          break;
        }
        if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP) {
          this.nextField_ != a && (goog.asserts.fail("Unmatched end-group tag"), this.error_ = true);
          break;
        }
        this.skipField();
      } while (1);
    };
    jspb.BinaryReader.prototype.skipField = function() {
      switch (this.nextWireType_) {
        case jspb.BinaryConstants.WireType.VARINT:
          this.skipVarintField();
          break;
        case jspb.BinaryConstants.WireType.FIXED64:
          this.skipFixed64Field();
          break;
        case jspb.BinaryConstants.WireType.DELIMITED:
          this.skipDelimitedField();
          break;
        case jspb.BinaryConstants.WireType.FIXED32:
          this.skipFixed32Field();
          break;
        case jspb.BinaryConstants.WireType.START_GROUP:
          this.skipGroup();
          break;
        default:
          goog.asserts.fail("Invalid wire encoding for field.");
      }
    };
    jspb.BinaryReader.prototype.registerReadCallback = function(a, b) {
      this.readCallbacks_ === null && (this.readCallbacks_ = {});
      goog.asserts.assert(!this.readCallbacks_[a]);
      this.readCallbacks_[a] = b;
    };
    jspb.BinaryReader.prototype.runReadCallback = function(a) {
      goog.asserts.assert(this.readCallbacks_ !== null);
      a = this.readCallbacks_[a];
      goog.asserts.assert(a);
      return a(this);
    };
    jspb.BinaryReader.prototype.readAny = function(a) {
      this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(a);
      var b = jspb.BinaryConstants.FieldType;
      switch (a) {
        case b.DOUBLE:
          return this.readDouble();
        case b.FLOAT:
          return this.readFloat();
        case b.INT64:
          return this.readInt64();
        case b.UINT64:
          return this.readUint64();
        case b.INT32:
          return this.readInt32();
        case b.FIXED64:
          return this.readFixed64();
        case b.FIXED32:
          return this.readFixed32();
        case b.BOOL:
          return this.readBool();
        case b.STRING:
          return this.readString();
        case b.GROUP:
          goog.asserts.fail("Group field type not supported in readAny()");
        case b.MESSAGE:
          goog.asserts.fail("Message field type not supported in readAny()");
        case b.BYTES:
          return this.readBytes();
        case b.UINT32:
          return this.readUint32();
        case b.ENUM:
          return this.readEnum();
        case b.SFIXED32:
          return this.readSfixed32();
        case b.SFIXED64:
          return this.readSfixed64();
        case b.SINT32:
          return this.readSint32();
        case b.SINT64:
          return this.readSint64();
        case b.FHASH64:
          return this.readFixedHash64();
        case b.VHASH64:
          return this.readVarintHash64();
        default:
          goog.asserts.fail("Invalid field type in readAny()");
      }
      return 0;
    };
    jspb.BinaryReader.prototype.readMessage = function(a, b) {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
      var c = this.decoder_.getEnd(), d = this.decoder_.readUnsignedVarint32();
      d = this.decoder_.getCursor() + d;
      this.decoder_.setEnd(d);
      b(a, this);
      this.decoder_.setCursor(d);
      this.decoder_.setEnd(c);
    };
    jspb.BinaryReader.prototype.readGroup = function(a, b, c) {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP);
      goog.asserts.assert(this.nextField_ == a);
      c(b, this);
      this.error_ || this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP || (goog.asserts.fail("Group submessage did not end with an END_GROUP tag"), this.error_ = true);
    };
    jspb.BinaryReader.prototype.getFieldDecoder = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
      var a = this.decoder_.readUnsignedVarint32(), b = this.decoder_.getCursor(), c = b + a;
      a = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), b, a);
      this.decoder_.setCursor(c);
      return a;
    };
    jspb.BinaryReader.prototype.readInt32 = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readSignedVarint32();
    };
    jspb.BinaryReader.prototype.readInt32String = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readSignedVarint32String();
    };
    jspb.BinaryReader.prototype.readInt64 = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readSignedVarint64();
    };
    jspb.BinaryReader.prototype.readInt64String = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readSignedVarint64String();
    };
    jspb.BinaryReader.prototype.readUint32 = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readUnsignedVarint32();
    };
    jspb.BinaryReader.prototype.readUint32String = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readUnsignedVarint32String();
    };
    jspb.BinaryReader.prototype.readUint64 = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readUnsignedVarint64();
    };
    jspb.BinaryReader.prototype.readUint64String = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readUnsignedVarint64String();
    };
    jspb.BinaryReader.prototype.readSint32 = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readZigzagVarint32();
    };
    jspb.BinaryReader.prototype.readSint64 = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readZigzagVarint64();
    };
    jspb.BinaryReader.prototype.readSint64String = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readZigzagVarint64String();
    };
    jspb.BinaryReader.prototype.readFixed32 = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
      return this.decoder_.readUint32();
    };
    jspb.BinaryReader.prototype.readFixed64 = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
      return this.decoder_.readUint64();
    };
    jspb.BinaryReader.prototype.readFixed64String = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
      return this.decoder_.readUint64String();
    };
    jspb.BinaryReader.prototype.readSfixed32 = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
      return this.decoder_.readInt32();
    };
    jspb.BinaryReader.prototype.readSfixed32String = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
      return this.decoder_.readInt32().toString();
    };
    jspb.BinaryReader.prototype.readSfixed64 = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
      return this.decoder_.readInt64();
    };
    jspb.BinaryReader.prototype.readSfixed64String = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
      return this.decoder_.readInt64String();
    };
    jspb.BinaryReader.prototype.readFloat = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
      return this.decoder_.readFloat();
    };
    jspb.BinaryReader.prototype.readDouble = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
      return this.decoder_.readDouble();
    };
    jspb.BinaryReader.prototype.readBool = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return !!this.decoder_.readUnsignedVarint32();
    };
    jspb.BinaryReader.prototype.readEnum = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readSignedVarint64();
    };
    jspb.BinaryReader.prototype.readString = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
      var a = this.decoder_.readUnsignedVarint32();
      return this.decoder_.readString(a);
    };
    jspb.BinaryReader.prototype.readBytes = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
      var a = this.decoder_.readUnsignedVarint32();
      return this.decoder_.readBytes(a);
    };
    jspb.BinaryReader.prototype.readVarintHash64 = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readVarintHash64();
    };
    jspb.BinaryReader.prototype.readSintHash64 = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readZigzagVarintHash64();
    };
    jspb.BinaryReader.prototype.readSplitVarint64 = function(a) {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readSplitVarint64(a);
    };
    jspb.BinaryReader.prototype.readSplitZigzagVarint64 = function(a) {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readSplitVarint64(function(b, c) {
        return jspb.utils.fromZigzag64(b, c, a);
      });
    };
    jspb.BinaryReader.prototype.readFixedHash64 = function() {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
      return this.decoder_.readFixedHash64();
    };
    jspb.BinaryReader.prototype.readSplitFixed64 = function(a) {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
      return this.decoder_.readSplitFixed64(a);
    };
    jspb.BinaryReader.prototype.readPackedField_ = function(a) {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
      var b = this.decoder_.readUnsignedVarint32();
      b = this.decoder_.getCursor() + b;
      for (var c = []; this.decoder_.getCursor() < b; )
        c.push(a.call(this.decoder_));
      return c;
    };
    jspb.BinaryReader.prototype.readPackedInt32 = function() {
      return this.readPackedField_(this.decoder_.readSignedVarint32);
    };
    jspb.BinaryReader.prototype.readPackedInt32String = function() {
      return this.readPackedField_(this.decoder_.readSignedVarint32String);
    };
    jspb.BinaryReader.prototype.readPackedInt64 = function() {
      return this.readPackedField_(this.decoder_.readSignedVarint64);
    };
    jspb.BinaryReader.prototype.readPackedInt64String = function() {
      return this.readPackedField_(this.decoder_.readSignedVarint64String);
    };
    jspb.BinaryReader.prototype.readPackedUint32 = function() {
      return this.readPackedField_(this.decoder_.readUnsignedVarint32);
    };
    jspb.BinaryReader.prototype.readPackedUint32String = function() {
      return this.readPackedField_(this.decoder_.readUnsignedVarint32String);
    };
    jspb.BinaryReader.prototype.readPackedUint64 = function() {
      return this.readPackedField_(this.decoder_.readUnsignedVarint64);
    };
    jspb.BinaryReader.prototype.readPackedUint64String = function() {
      return this.readPackedField_(this.decoder_.readUnsignedVarint64String);
    };
    jspb.BinaryReader.prototype.readPackedSint32 = function() {
      return this.readPackedField_(this.decoder_.readZigzagVarint32);
    };
    jspb.BinaryReader.prototype.readPackedSint64 = function() {
      return this.readPackedField_(this.decoder_.readZigzagVarint64);
    };
    jspb.BinaryReader.prototype.readPackedSint64String = function() {
      return this.readPackedField_(this.decoder_.readZigzagVarint64String);
    };
    jspb.BinaryReader.prototype.readPackedFixed32 = function() {
      return this.readPackedField_(this.decoder_.readUint32);
    };
    jspb.BinaryReader.prototype.readPackedFixed64 = function() {
      return this.readPackedField_(this.decoder_.readUint64);
    };
    jspb.BinaryReader.prototype.readPackedFixed64String = function() {
      return this.readPackedField_(this.decoder_.readUint64String);
    };
    jspb.BinaryReader.prototype.readPackedSfixed32 = function() {
      return this.readPackedField_(this.decoder_.readInt32);
    };
    jspb.BinaryReader.prototype.readPackedSfixed64 = function() {
      return this.readPackedField_(this.decoder_.readInt64);
    };
    jspb.BinaryReader.prototype.readPackedSfixed64String = function() {
      return this.readPackedField_(this.decoder_.readInt64String);
    };
    jspb.BinaryReader.prototype.readPackedFloat = function() {
      return this.readPackedField_(this.decoder_.readFloat);
    };
    jspb.BinaryReader.prototype.readPackedDouble = function() {
      return this.readPackedField_(this.decoder_.readDouble);
    };
    jspb.BinaryReader.prototype.readPackedBool = function() {
      return this.readPackedField_(this.decoder_.readBool);
    };
    jspb.BinaryReader.prototype.readPackedEnum = function() {
      return this.readPackedField_(this.decoder_.readEnum);
    };
    jspb.BinaryReader.prototype.readPackedVarintHash64 = function() {
      return this.readPackedField_(this.decoder_.readVarintHash64);
    };
    jspb.BinaryReader.prototype.readPackedFixedHash64 = function() {
      return this.readPackedField_(this.decoder_.readFixedHash64);
    };
    jspb.BinaryEncoder = function() {
      this.buffer_ = [];
    };
    jspb.BinaryEncoder.prototype.length = function() {
      return this.buffer_.length;
    };
    jspb.BinaryEncoder.prototype.end = function() {
      var a = this.buffer_;
      this.buffer_ = [];
      return a;
    };
    jspb.BinaryEncoder.prototype.writeSplitVarint64 = function(a, b) {
      goog.asserts.assert(a == Math.floor(a));
      goog.asserts.assert(b == Math.floor(b));
      goog.asserts.assert(0 <= a && a < jspb.BinaryConstants.TWO_TO_32);
      for (goog.asserts.assert(0 <= b && b < jspb.BinaryConstants.TWO_TO_32); 0 < b || 127 < a; )
        this.buffer_.push(a & 127 | 128), a = (a >>> 7 | b << 25) >>> 0, b >>>= 7;
      this.buffer_.push(a);
    };
    jspb.BinaryEncoder.prototype.writeSplitFixed64 = function(a, b) {
      goog.asserts.assert(a == Math.floor(a));
      goog.asserts.assert(b == Math.floor(b));
      goog.asserts.assert(0 <= a && a < jspb.BinaryConstants.TWO_TO_32);
      goog.asserts.assert(0 <= b && b < jspb.BinaryConstants.TWO_TO_32);
      this.writeUint32(a);
      this.writeUint32(b);
    };
    jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function(a) {
      goog.asserts.assert(a == Math.floor(a));
      for (goog.asserts.assert(0 <= a && a < jspb.BinaryConstants.TWO_TO_32); 127 < a; )
        this.buffer_.push(a & 127 | 128), a >>>= 7;
      this.buffer_.push(a);
    };
    jspb.BinaryEncoder.prototype.writeSignedVarint32 = function(a) {
      goog.asserts.assert(a == Math.floor(a));
      goog.asserts.assert(a >= -jspb.BinaryConstants.TWO_TO_31 && a < jspb.BinaryConstants.TWO_TO_31);
      if (0 <= a)
        this.writeUnsignedVarint32(a);
      else {
        for (var b = 0; 9 > b; b++)
          this.buffer_.push(a & 127 | 128), a >>= 7;
        this.buffer_.push(1);
      }
    };
    jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function(a) {
      goog.asserts.assert(a == Math.floor(a));
      goog.asserts.assert(0 <= a && a < jspb.BinaryConstants.TWO_TO_64);
      jspb.utils.splitInt64(a);
      this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
    };
    jspb.BinaryEncoder.prototype.writeSignedVarint64 = function(a) {
      goog.asserts.assert(a == Math.floor(a));
      goog.asserts.assert(a >= -jspb.BinaryConstants.TWO_TO_63 && a < jspb.BinaryConstants.TWO_TO_63);
      jspb.utils.splitInt64(a);
      this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
    };
    jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function(a) {
      goog.asserts.assert(a == Math.floor(a));
      goog.asserts.assert(a >= -jspb.BinaryConstants.TWO_TO_31 && a < jspb.BinaryConstants.TWO_TO_31);
      this.writeUnsignedVarint32((a << 1 ^ a >> 31) >>> 0);
    };
    jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function(a) {
      goog.asserts.assert(a == Math.floor(a));
      goog.asserts.assert(a >= -jspb.BinaryConstants.TWO_TO_63 && a < jspb.BinaryConstants.TWO_TO_63);
      jspb.utils.splitZigzag64(a);
      this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
    };
    jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function(a) {
      this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(a));
    };
    jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function(a) {
      var b = this;
      jspb.utils.splitHash64(a);
      jspb.utils.toZigzag64(jspb.utils.split64Low, jspb.utils.split64High, function(a2, d) {
        b.writeSplitVarint64(a2 >>> 0, d >>> 0);
      });
    };
    jspb.BinaryEncoder.prototype.writeUint8 = function(a) {
      goog.asserts.assert(a == Math.floor(a));
      goog.asserts.assert(0 <= a && 256 > a);
      this.buffer_.push(a >>> 0 & 255);
    };
    jspb.BinaryEncoder.prototype.writeUint16 = function(a) {
      goog.asserts.assert(a == Math.floor(a));
      goog.asserts.assert(0 <= a && 65536 > a);
      this.buffer_.push(a >>> 0 & 255);
      this.buffer_.push(a >>> 8 & 255);
    };
    jspb.BinaryEncoder.prototype.writeUint32 = function(a) {
      goog.asserts.assert(a == Math.floor(a));
      goog.asserts.assert(0 <= a && a < jspb.BinaryConstants.TWO_TO_32);
      this.buffer_.push(a >>> 0 & 255);
      this.buffer_.push(a >>> 8 & 255);
      this.buffer_.push(a >>> 16 & 255);
      this.buffer_.push(a >>> 24 & 255);
    };
    jspb.BinaryEncoder.prototype.writeUint64 = function(a) {
      goog.asserts.assert(a == Math.floor(a));
      goog.asserts.assert(0 <= a && a < jspb.BinaryConstants.TWO_TO_64);
      jspb.utils.splitUint64(a);
      this.writeUint32(jspb.utils.split64Low);
      this.writeUint32(jspb.utils.split64High);
    };
    jspb.BinaryEncoder.prototype.writeInt8 = function(a) {
      goog.asserts.assert(a == Math.floor(a));
      goog.asserts.assert(-128 <= a && 128 > a);
      this.buffer_.push(a >>> 0 & 255);
    };
    jspb.BinaryEncoder.prototype.writeInt16 = function(a) {
      goog.asserts.assert(a == Math.floor(a));
      goog.asserts.assert(-32768 <= a && 32768 > a);
      this.buffer_.push(a >>> 0 & 255);
      this.buffer_.push(a >>> 8 & 255);
    };
    jspb.BinaryEncoder.prototype.writeInt32 = function(a) {
      goog.asserts.assert(a == Math.floor(a));
      goog.asserts.assert(a >= -jspb.BinaryConstants.TWO_TO_31 && a < jspb.BinaryConstants.TWO_TO_31);
      this.buffer_.push(a >>> 0 & 255);
      this.buffer_.push(a >>> 8 & 255);
      this.buffer_.push(a >>> 16 & 255);
      this.buffer_.push(a >>> 24 & 255);
    };
    jspb.BinaryEncoder.prototype.writeInt64 = function(a) {
      goog.asserts.assert(a == Math.floor(a));
      goog.asserts.assert(a >= -jspb.BinaryConstants.TWO_TO_63 && a < jspb.BinaryConstants.TWO_TO_63);
      jspb.utils.splitInt64(a);
      this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
    };
    jspb.BinaryEncoder.prototype.writeInt64String = function(a) {
      goog.asserts.assert(a == Math.floor(a));
      goog.asserts.assert(+a >= -jspb.BinaryConstants.TWO_TO_63 && +a < jspb.BinaryConstants.TWO_TO_63);
      jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a));
      this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
    };
    jspb.BinaryEncoder.prototype.writeFloat = function(a) {
      goog.asserts.assert(a === Infinity || a === -Infinity || isNaN(a) || a >= -jspb.BinaryConstants.FLOAT32_MAX && a <= jspb.BinaryConstants.FLOAT32_MAX);
      jspb.utils.splitFloat32(a);
      this.writeUint32(jspb.utils.split64Low);
    };
    jspb.BinaryEncoder.prototype.writeDouble = function(a) {
      goog.asserts.assert(a === Infinity || a === -Infinity || isNaN(a) || a >= -jspb.BinaryConstants.FLOAT64_MAX && a <= jspb.BinaryConstants.FLOAT64_MAX);
      jspb.utils.splitFloat64(a);
      this.writeUint32(jspb.utils.split64Low);
      this.writeUint32(jspb.utils.split64High);
    };
    jspb.BinaryEncoder.prototype.writeBool = function(a) {
      goog.asserts.assert(typeof a === "boolean" || typeof a === "number");
      this.buffer_.push(a ? 1 : 0);
    };
    jspb.BinaryEncoder.prototype.writeEnum = function(a) {
      goog.asserts.assert(a == Math.floor(a));
      goog.asserts.assert(a >= -jspb.BinaryConstants.TWO_TO_31 && a < jspb.BinaryConstants.TWO_TO_31);
      this.writeSignedVarint32(a);
    };
    jspb.BinaryEncoder.prototype.writeBytes = function(a) {
      this.buffer_.push.apply(this.buffer_, a);
    };
    jspb.BinaryEncoder.prototype.writeVarintHash64 = function(a) {
      jspb.utils.splitHash64(a);
      this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
    };
    jspb.BinaryEncoder.prototype.writeFixedHash64 = function(a) {
      jspb.utils.splitHash64(a);
      this.writeUint32(jspb.utils.split64Low);
      this.writeUint32(jspb.utils.split64High);
    };
    jspb.BinaryEncoder.prototype.writeString = function(a) {
      for (var b = this.buffer_.length, c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        if (128 > d)
          this.buffer_.push(d);
        else if (2048 > d)
          this.buffer_.push(d >> 6 | 192), this.buffer_.push(d & 63 | 128);
        else if (65536 > d)
          if (55296 <= d && 56319 >= d && c + 1 < a.length) {
            var e = a.charCodeAt(c + 1);
            56320 <= e && 57343 >= e && (d = 1024 * (d - 55296) + e - 56320 + 65536, this.buffer_.push(d >> 18 | 240), this.buffer_.push(d >> 12 & 63 | 128), this.buffer_.push(d >> 6 & 63 | 128), this.buffer_.push(d & 63 | 128), c++);
          } else
            this.buffer_.push(d >> 12 | 224), this.buffer_.push(d >> 6 & 63 | 128), this.buffer_.push(d & 63 | 128);
      }
      return this.buffer_.length - b;
    };
    jspb.arith = {};
    jspb.arith.UInt64 = function(a, b) {
      this.lo = a;
      this.hi = b;
    };
    jspb.arith.UInt64.prototype.cmp = function(a) {
      return this.hi < a.hi || this.hi == a.hi && this.lo < a.lo ? -1 : this.hi == a.hi && this.lo == a.lo ? 0 : 1;
    };
    jspb.arith.UInt64.prototype.rightShift = function() {
      return new jspb.arith.UInt64((this.lo >>> 1 | (this.hi & 1) << 31) >>> 0, this.hi >>> 1 >>> 0);
    };
    jspb.arith.UInt64.prototype.leftShift = function() {
      return new jspb.arith.UInt64(this.lo << 1 >>> 0, (this.hi << 1 | this.lo >>> 31) >>> 0);
    };
    jspb.arith.UInt64.prototype.msb = function() {
      return !!(this.hi & 2147483648);
    };
    jspb.arith.UInt64.prototype.lsb = function() {
      return !!(this.lo & 1);
    };
    jspb.arith.UInt64.prototype.zero = function() {
      return this.lo == 0 && this.hi == 0;
    };
    jspb.arith.UInt64.prototype.add = function(a) {
      return new jspb.arith.UInt64((this.lo + a.lo & 4294967295) >>> 0 >>> 0, ((this.hi + a.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + a.lo ? 1 : 0) >>> 0);
    };
    jspb.arith.UInt64.prototype.sub = function(a) {
      return new jspb.arith.UInt64((this.lo - a.lo & 4294967295) >>> 0 >>> 0, ((this.hi - a.hi & 4294967295) >>> 0) - (0 > this.lo - a.lo ? 1 : 0) >>> 0);
    };
    jspb.arith.UInt64.mul32x32 = function(a, b) {
      var c = a & 65535;
      a >>>= 16;
      var d = b & 65535, e = b >>> 16;
      b = c * d + 65536 * (c * e & 65535) + 65536 * (a * d & 65535);
      for (c = a * e + (c * e >>> 16) + (a * d >>> 16); 4294967296 <= b; )
        b -= 4294967296, c += 1;
      return new jspb.arith.UInt64(b >>> 0, c >>> 0);
    };
    jspb.arith.UInt64.prototype.mul = function(a) {
      var b = jspb.arith.UInt64.mul32x32(this.lo, a);
      a = jspb.arith.UInt64.mul32x32(this.hi, a);
      a.hi = a.lo;
      a.lo = 0;
      return b.add(a);
    };
    jspb.arith.UInt64.prototype.div = function(a) {
      if (a == 0)
        return [];
      var b = new jspb.arith.UInt64(0, 0), c = new jspb.arith.UInt64(this.lo, this.hi);
      a = new jspb.arith.UInt64(a, 0);
      for (var d = new jspb.arith.UInt64(1, 0); !a.msb(); )
        a = a.leftShift(), d = d.leftShift();
      for (; !d.zero(); )
        0 >= a.cmp(c) && (b = b.add(d), c = c.sub(a)), a = a.rightShift(), d = d.rightShift();
      return [b, c];
    };
    jspb.arith.UInt64.prototype.toString = function() {
      for (var a = "", b = this; !b.zero(); ) {
        b = b.div(10);
        var c = b[0];
        a = b[1].lo + a;
        b = c;
      }
      a == "" && (a = "0");
      return a;
    };
    jspb.arith.UInt64.fromString = function(a) {
      for (var b = new jspb.arith.UInt64(0, 0), c = new jspb.arith.UInt64(0, 0), d = 0; d < a.length; d++) {
        if ("0" > a[d] || "9" < a[d])
          return null;
        var e = parseInt(a[d], 10);
        c.lo = e;
        b = b.mul(10).add(c);
      }
      return b;
    };
    jspb.arith.UInt64.prototype.clone = function() {
      return new jspb.arith.UInt64(this.lo, this.hi);
    };
    jspb.arith.Int64 = function(a, b) {
      this.lo = a;
      this.hi = b;
    };
    jspb.arith.Int64.prototype.add = function(a) {
      return new jspb.arith.Int64((this.lo + a.lo & 4294967295) >>> 0 >>> 0, ((this.hi + a.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + a.lo ? 1 : 0) >>> 0);
    };
    jspb.arith.Int64.prototype.sub = function(a) {
      return new jspb.arith.Int64((this.lo - a.lo & 4294967295) >>> 0 >>> 0, ((this.hi - a.hi & 4294967295) >>> 0) - (0 > this.lo - a.lo ? 1 : 0) >>> 0);
    };
    jspb.arith.Int64.prototype.clone = function() {
      return new jspb.arith.Int64(this.lo, this.hi);
    };
    jspb.arith.Int64.prototype.toString = function() {
      var a = (this.hi & 2147483648) != 0, b = new jspb.arith.UInt64(this.lo, this.hi);
      a && (b = new jspb.arith.UInt64(0, 0).sub(b));
      return (a ? "-" : "") + b.toString();
    };
    jspb.arith.Int64.fromString = function(a) {
      var b = 0 < a.length && a[0] == "-";
      b && (a = a.substring(1));
      a = jspb.arith.UInt64.fromString(a);
      if (a === null)
        return null;
      b && (a = new jspb.arith.UInt64(0, 0).sub(a));
      return new jspb.arith.Int64(a.lo, a.hi);
    };
    jspb.BinaryWriter = function() {
      this.blocks_ = [];
      this.totalLength_ = 0;
      this.encoder_ = new jspb.BinaryEncoder();
      this.bookmarks_ = [];
    };
    jspb.BinaryWriter.prototype.appendUint8Array_ = function(a) {
      var b = this.encoder_.end();
      this.blocks_.push(b);
      this.blocks_.push(a);
      this.totalLength_ += b.length + a.length;
    };
    jspb.BinaryWriter.prototype.beginDelimited_ = function(a) {
      this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED);
      a = this.encoder_.end();
      this.blocks_.push(a);
      this.totalLength_ += a.length;
      a.push(this.totalLength_);
      return a;
    };
    jspb.BinaryWriter.prototype.endDelimited_ = function(a) {
      var b = a.pop();
      b = this.totalLength_ + this.encoder_.length() - b;
      for (goog.asserts.assert(0 <= b); 127 < b; )
        a.push(b & 127 | 128), b >>>= 7, this.totalLength_++;
      a.push(b);
      this.totalLength_++;
    };
    jspb.BinaryWriter.prototype.writeSerializedMessage = function(a, b, c) {
      this.appendUint8Array_(a.subarray(b, c));
    };
    jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function(a, b, c) {
      a != null && b != null && c != null && this.writeSerializedMessage(a, b, c);
    };
    jspb.BinaryWriter.prototype.reset = function() {
      this.blocks_ = [];
      this.encoder_.end();
      this.totalLength_ = 0;
      this.bookmarks_ = [];
    };
    jspb.BinaryWriter.prototype.getResultBuffer = function() {
      goog.asserts.assert(this.bookmarks_.length == 0);
      for (var a = new Uint8Array(this.totalLength_ + this.encoder_.length()), b = this.blocks_, c = b.length, d = 0, e = 0; e < c; e++) {
        var f = b[e];
        a.set(f, d);
        d += f.length;
      }
      b = this.encoder_.end();
      a.set(b, d);
      d += b.length;
      goog.asserts.assert(d == a.length);
      this.blocks_ = [a];
      return a;
    };
    jspb.BinaryWriter.prototype.getResultBase64String = function(a) {
      return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), a);
    };
    jspb.BinaryWriter.prototype.beginSubMessage = function(a) {
      this.bookmarks_.push(this.beginDelimited_(a));
    };
    jspb.BinaryWriter.prototype.endSubMessage = function() {
      goog.asserts.assert(0 <= this.bookmarks_.length);
      this.endDelimited_(this.bookmarks_.pop());
    };
    jspb.BinaryWriter.prototype.writeFieldHeader_ = function(a, b) {
      goog.asserts.assert(1 <= a && a == Math.floor(a));
      this.encoder_.writeUnsignedVarint32(8 * a + b);
    };
    jspb.BinaryWriter.prototype.writeAny = function(a, b, c) {
      var d = jspb.BinaryConstants.FieldType;
      switch (a) {
        case d.DOUBLE:
          this.writeDouble(b, c);
          break;
        case d.FLOAT:
          this.writeFloat(b, c);
          break;
        case d.INT64:
          this.writeInt64(b, c);
          break;
        case d.UINT64:
          this.writeUint64(b, c);
          break;
        case d.INT32:
          this.writeInt32(b, c);
          break;
        case d.FIXED64:
          this.writeFixed64(b, c);
          break;
        case d.FIXED32:
          this.writeFixed32(b, c);
          break;
        case d.BOOL:
          this.writeBool(b, c);
          break;
        case d.STRING:
          this.writeString(b, c);
          break;
        case d.GROUP:
          goog.asserts.fail("Group field type not supported in writeAny()");
          break;
        case d.MESSAGE:
          goog.asserts.fail("Message field type not supported in writeAny()");
          break;
        case d.BYTES:
          this.writeBytes(b, c);
          break;
        case d.UINT32:
          this.writeUint32(b, c);
          break;
        case d.ENUM:
          this.writeEnum(b, c);
          break;
        case d.SFIXED32:
          this.writeSfixed32(b, c);
          break;
        case d.SFIXED64:
          this.writeSfixed64(b, c);
          break;
        case d.SINT32:
          this.writeSint32(b, c);
          break;
        case d.SINT64:
          this.writeSint64(b, c);
          break;
        case d.FHASH64:
          this.writeFixedHash64(b, c);
          break;
        case d.VHASH64:
          this.writeVarintHash64(b, c);
          break;
        default:
          goog.asserts.fail("Invalid field type in writeAny()");
      }
    };
    jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function(a, b) {
      b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint32(b));
    };
    jspb.BinaryWriter.prototype.writeSignedVarint32_ = function(a, b) {
      b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(b));
    };
    jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function(a, b) {
      b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint64(b));
    };
    jspb.BinaryWriter.prototype.writeSignedVarint64_ = function(a, b) {
      b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint64(b));
    };
    jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function(a, b) {
      b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint32(b));
    };
    jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function(a, b) {
      b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64(b));
    };
    jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function(a, b) {
      b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64String(b));
    };
    jspb.BinaryWriter.prototype.writeZigzagVarintHash64_ = function(a, b) {
      b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarintHash64(b));
    };
    jspb.BinaryWriter.prototype.writeInt32 = function(a, b) {
      b != null && (goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_31 && b < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(a, b));
    };
    jspb.BinaryWriter.prototype.writeInt32String = function(a, b) {
      b != null && (b = parseInt(b, 10), goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_31 && b < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(a, b));
    };
    jspb.BinaryWriter.prototype.writeInt64 = function(a, b) {
      b != null && (goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_63 && b < jspb.BinaryConstants.TWO_TO_63), this.writeSignedVarint64_(a, b));
    };
    jspb.BinaryWriter.prototype.writeInt64String = function(a, b) {
      b != null && (b = jspb.arith.Int64.fromString(b), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(b.lo, b.hi));
    };
    jspb.BinaryWriter.prototype.writeUint32 = function(a, b) {
      b != null && (goog.asserts.assert(0 <= b && b < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(a, b));
    };
    jspb.BinaryWriter.prototype.writeUint32String = function(a, b) {
      b != null && (b = parseInt(b, 10), goog.asserts.assert(0 <= b && b < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(a, b));
    };
    jspb.BinaryWriter.prototype.writeUint64 = function(a, b) {
      b != null && (goog.asserts.assert(0 <= b && b < jspb.BinaryConstants.TWO_TO_64), this.writeUnsignedVarint64_(a, b));
    };
    jspb.BinaryWriter.prototype.writeUint64String = function(a, b) {
      b != null && (b = jspb.arith.UInt64.fromString(b), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(b.lo, b.hi));
    };
    jspb.BinaryWriter.prototype.writeSint32 = function(a, b) {
      b != null && (goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_31 && b < jspb.BinaryConstants.TWO_TO_31), this.writeZigzagVarint32_(a, b));
    };
    jspb.BinaryWriter.prototype.writeSint64 = function(a, b) {
      b != null && (goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_63 && b < jspb.BinaryConstants.TWO_TO_63), this.writeZigzagVarint64_(a, b));
    };
    jspb.BinaryWriter.prototype.writeSintHash64 = function(a, b) {
      b != null && this.writeZigzagVarintHash64_(a, b);
    };
    jspb.BinaryWriter.prototype.writeSint64String = function(a, b) {
      b != null && this.writeZigzagVarint64String_(a, b);
    };
    jspb.BinaryWriter.prototype.writeFixed32 = function(a, b) {
      b != null && (goog.asserts.assert(0 <= b && b < jspb.BinaryConstants.TWO_TO_32), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeUint32(b));
    };
    jspb.BinaryWriter.prototype.writeFixed64 = function(a, b) {
      b != null && (goog.asserts.assert(0 <= b && b < jspb.BinaryConstants.TWO_TO_64), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeUint64(b));
    };
    jspb.BinaryWriter.prototype.writeFixed64String = function(a, b) {
      b != null && (b = jspb.arith.UInt64.fromString(b), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(b.lo, b.hi));
    };
    jspb.BinaryWriter.prototype.writeSfixed32 = function(a, b) {
      b != null && (goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_31 && b < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeInt32(b));
    };
    jspb.BinaryWriter.prototype.writeSfixed64 = function(a, b) {
      b != null && (goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_63 && b < jspb.BinaryConstants.TWO_TO_63), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeInt64(b));
    };
    jspb.BinaryWriter.prototype.writeSfixed64String = function(a, b) {
      b != null && (b = jspb.arith.Int64.fromString(b), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(b.lo, b.hi));
    };
    jspb.BinaryWriter.prototype.writeFloat = function(a, b) {
      b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeFloat(b));
    };
    jspb.BinaryWriter.prototype.writeDouble = function(a, b) {
      b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeDouble(b));
    };
    jspb.BinaryWriter.prototype.writeBool = function(a, b) {
      b != null && (goog.asserts.assert(typeof b === "boolean" || typeof b === "number"), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeBool(b));
    };
    jspb.BinaryWriter.prototype.writeEnum = function(a, b) {
      b != null && (goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_31 && b < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(b));
    };
    jspb.BinaryWriter.prototype.writeString = function(a, b) {
      b != null && (a = this.beginDelimited_(a), this.encoder_.writeString(b), this.endDelimited_(a));
    };
    jspb.BinaryWriter.prototype.writeBytes = function(a, b) {
      b != null && (b = jspb.utils.byteSourceToUint8Array(b), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(b.length), this.appendUint8Array_(b));
    };
    jspb.BinaryWriter.prototype.writeMessage = function(a, b, c) {
      b != null && (a = this.beginDelimited_(a), c(b, this), this.endDelimited_(a));
    };
    jspb.BinaryWriter.prototype.writeMessageSet = function(a, b, c) {
      b != null && (this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.START_GROUP), this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(a), a = this.beginDelimited_(3), c(b, this), this.endDelimited_(a), this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.END_GROUP));
    };
    jspb.BinaryWriter.prototype.writeGroup = function(a, b, c) {
      b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.START_GROUP), c(b, this), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.END_GROUP));
    };
    jspb.BinaryWriter.prototype.writeFixedHash64 = function(a, b) {
      b != null && (goog.asserts.assert(b.length == 8), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeFixedHash64(b));
    };
    jspb.BinaryWriter.prototype.writeVarintHash64 = function(a, b) {
      b != null && (goog.asserts.assert(b.length == 8), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeVarintHash64(b));
    };
    jspb.BinaryWriter.prototype.writeSplitFixed64 = function(a, b, c) {
      this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.FIXED64);
      this.encoder_.writeSplitFixed64(b, c);
    };
    jspb.BinaryWriter.prototype.writeSplitVarint64 = function(a, b, c) {
      this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT);
      this.encoder_.writeSplitVarint64(b, c);
    };
    jspb.BinaryWriter.prototype.writeSplitZigzagVarint64 = function(a, b, c) {
      this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT);
      var d = this.encoder_;
      jspb.utils.toZigzag64(b, c, function(a2, b2) {
        d.writeSplitVarint64(a2 >>> 0, b2 >>> 0);
      });
    };
    jspb.BinaryWriter.prototype.writeRepeatedInt32 = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeSignedVarint32_(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedInt32String = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeInt32String(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedInt64 = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeSignedVarint64_(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function(a, b, c, d) {
      if (b != null)
        for (var e = 0; e < b.length; e++)
          this.writeSplitFixed64(a, c(b[e]), d(b[e]));
    };
    jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function(a, b, c, d) {
      if (b != null)
        for (var e = 0; e < b.length; e++)
          this.writeSplitVarint64(a, c(b[e]), d(b[e]));
    };
    jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 = function(a, b, c, d) {
      if (b != null)
        for (var e = 0; e < b.length; e++)
          this.writeSplitZigzagVarint64(a, c(b[e]), d(b[e]));
    };
    jspb.BinaryWriter.prototype.writeRepeatedInt64String = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeInt64String(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedUint32 = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeUnsignedVarint32_(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedUint32String = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeUint32String(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedUint64 = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeUnsignedVarint64_(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedUint64String = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeUint64String(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedSint32 = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeZigzagVarint32_(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedSint64 = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeZigzagVarint64_(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedSint64String = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeZigzagVarint64String_(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedSintHash64 = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeZigzagVarintHash64_(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeFixed32(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeFixed64(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeFixed64String(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeSfixed32(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeSfixed64(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeSfixed64String(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedFloat = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeFloat(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedDouble = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeDouble(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedBool = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeBool(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedEnum = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeEnum(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedString = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeString(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedBytes = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeBytes(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedMessage = function(a, b, c) {
      if (b != null)
        for (var d = 0; d < b.length; d++) {
          var e = this.beginDelimited_(a);
          c(b[d], this);
          this.endDelimited_(e);
        }
    };
    jspb.BinaryWriter.prototype.writeRepeatedGroup = function(a, b, c) {
      if (b != null)
        for (var d = 0; d < b.length; d++)
          this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.START_GROUP), c(b[d], this), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.END_GROUP);
    };
    jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeFixedHash64(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; c++)
          this.writeVarintHash64(a, b[c]);
    };
    jspb.BinaryWriter.prototype.writePackedInt32 = function(a, b) {
      if (b != null && b.length) {
        a = this.beginDelimited_(a);
        for (var c = 0; c < b.length; c++)
          this.encoder_.writeSignedVarint32(b[c]);
        this.endDelimited_(a);
      }
    };
    jspb.BinaryWriter.prototype.writePackedInt32String = function(a, b) {
      if (b != null && b.length) {
        a = this.beginDelimited_(a);
        for (var c = 0; c < b.length; c++)
          this.encoder_.writeSignedVarint32(parseInt(b[c], 10));
        this.endDelimited_(a);
      }
    };
    jspb.BinaryWriter.prototype.writePackedInt64 = function(a, b) {
      if (b != null && b.length) {
        a = this.beginDelimited_(a);
        for (var c = 0; c < b.length; c++)
          this.encoder_.writeSignedVarint64(b[c]);
        this.endDelimited_(a);
      }
    };
    jspb.BinaryWriter.prototype.writePackedSplitFixed64 = function(a, b, c, d) {
      if (b != null) {
        a = this.beginDelimited_(a);
        for (var e = 0; e < b.length; e++)
          this.encoder_.writeSplitFixed64(c(b[e]), d(b[e]));
        this.endDelimited_(a);
      }
    };
    jspb.BinaryWriter.prototype.writePackedSplitVarint64 = function(a, b, c, d) {
      if (b != null) {
        a = this.beginDelimited_(a);
        for (var e = 0; e < b.length; e++)
          this.encoder_.writeSplitVarint64(c(b[e]), d(b[e]));
        this.endDelimited_(a);
      }
    };
    jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64 = function(a, b, c, d) {
      if (b != null) {
        a = this.beginDelimited_(a);
        for (var e = this.encoder_, f = 0; f < b.length; f++)
          jspb.utils.toZigzag64(c(b[f]), d(b[f]), function(a2, b2) {
            e.writeSplitVarint64(a2 >>> 0, b2 >>> 0);
          });
        this.endDelimited_(a);
      }
    };
    jspb.BinaryWriter.prototype.writePackedInt64String = function(a, b) {
      if (b != null && b.length) {
        a = this.beginDelimited_(a);
        for (var c = 0; c < b.length; c++) {
          var d = jspb.arith.Int64.fromString(b[c]);
          this.encoder_.writeSplitVarint64(d.lo, d.hi);
        }
        this.endDelimited_(a);
      }
    };
    jspb.BinaryWriter.prototype.writePackedUint32 = function(a, b) {
      if (b != null && b.length) {
        a = this.beginDelimited_(a);
        for (var c = 0; c < b.length; c++)
          this.encoder_.writeUnsignedVarint32(b[c]);
        this.endDelimited_(a);
      }
    };
    jspb.BinaryWriter.prototype.writePackedUint32String = function(a, b) {
      if (b != null && b.length) {
        a = this.beginDelimited_(a);
        for (var c = 0; c < b.length; c++)
          this.encoder_.writeUnsignedVarint32(parseInt(b[c], 10));
        this.endDelimited_(a);
      }
    };
    jspb.BinaryWriter.prototype.writePackedUint64 = function(a, b) {
      if (b != null && b.length) {
        a = this.beginDelimited_(a);
        for (var c = 0; c < b.length; c++)
          this.encoder_.writeUnsignedVarint64(b[c]);
        this.endDelimited_(a);
      }
    };
    jspb.BinaryWriter.prototype.writePackedUint64String = function(a, b) {
      if (b != null && b.length) {
        a = this.beginDelimited_(a);
        for (var c = 0; c < b.length; c++) {
          var d = jspb.arith.UInt64.fromString(b[c]);
          this.encoder_.writeSplitVarint64(d.lo, d.hi);
        }
        this.endDelimited_(a);
      }
    };
    jspb.BinaryWriter.prototype.writePackedSint32 = function(a, b) {
      if (b != null && b.length) {
        a = this.beginDelimited_(a);
        for (var c = 0; c < b.length; c++)
          this.encoder_.writeZigzagVarint32(b[c]);
        this.endDelimited_(a);
      }
    };
    jspb.BinaryWriter.prototype.writePackedSint64 = function(a, b) {
      if (b != null && b.length) {
        a = this.beginDelimited_(a);
        for (var c = 0; c < b.length; c++)
          this.encoder_.writeZigzagVarint64(b[c]);
        this.endDelimited_(a);
      }
    };
    jspb.BinaryWriter.prototype.writePackedSint64String = function(a, b) {
      if (b != null && b.length) {
        a = this.beginDelimited_(a);
        for (var c = 0; c < b.length; c++)
          this.encoder_.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(b[c]));
        this.endDelimited_(a);
      }
    };
    jspb.BinaryWriter.prototype.writePackedSintHash64 = function(a, b) {
      if (b != null && b.length) {
        a = this.beginDelimited_(a);
        for (var c = 0; c < b.length; c++)
          this.encoder_.writeZigzagVarintHash64(b[c]);
        this.endDelimited_(a);
      }
    };
    jspb.BinaryWriter.prototype.writePackedFixed32 = function(a, b) {
      if (b != null && b.length)
        for (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b.length), a = 0; a < b.length; a++)
          this.encoder_.writeUint32(b[a]);
    };
    jspb.BinaryWriter.prototype.writePackedFixed64 = function(a, b) {
      if (b != null && b.length)
        for (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a = 0; a < b.length; a++)
          this.encoder_.writeUint64(b[a]);
    };
    jspb.BinaryWriter.prototype.writePackedFixed64String = function(a, b) {
      if (b != null && b.length)
        for (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a = 0; a < b.length; a++) {
          var c = jspb.arith.UInt64.fromString(b[a]);
          this.encoder_.writeSplitFixed64(c.lo, c.hi);
        }
    };
    jspb.BinaryWriter.prototype.writePackedSfixed32 = function(a, b) {
      if (b != null && b.length)
        for (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b.length), a = 0; a < b.length; a++)
          this.encoder_.writeInt32(b[a]);
    };
    jspb.BinaryWriter.prototype.writePackedSfixed64 = function(a, b) {
      if (b != null && b.length)
        for (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a = 0; a < b.length; a++)
          this.encoder_.writeInt64(b[a]);
    };
    jspb.BinaryWriter.prototype.writePackedSfixed64String = function(a, b) {
      if (b != null && b.length)
        for (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a = 0; a < b.length; a++)
          this.encoder_.writeInt64String(b[a]);
    };
    jspb.BinaryWriter.prototype.writePackedFloat = function(a, b) {
      if (b != null && b.length)
        for (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b.length), a = 0; a < b.length; a++)
          this.encoder_.writeFloat(b[a]);
    };
    jspb.BinaryWriter.prototype.writePackedDouble = function(a, b) {
      if (b != null && b.length)
        for (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a = 0; a < b.length; a++)
          this.encoder_.writeDouble(b[a]);
    };
    jspb.BinaryWriter.prototype.writePackedBool = function(a, b) {
      if (b != null && b.length)
        for (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(b.length), a = 0; a < b.length; a++)
          this.encoder_.writeBool(b[a]);
    };
    jspb.BinaryWriter.prototype.writePackedEnum = function(a, b) {
      if (b != null && b.length) {
        a = this.beginDelimited_(a);
        for (var c = 0; c < b.length; c++)
          this.encoder_.writeEnum(b[c]);
        this.endDelimited_(a);
      }
    };
    jspb.BinaryWriter.prototype.writePackedFixedHash64 = function(a, b) {
      if (b != null && b.length)
        for (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a = 0; a < b.length; a++)
          this.encoder_.writeFixedHash64(b[a]);
    };
    jspb.BinaryWriter.prototype.writePackedVarintHash64 = function(a, b) {
      if (b != null && b.length) {
        a = this.beginDelimited_(a);
        for (var c = 0; c < b.length; c++)
          this.encoder_.writeVarintHash64(b[c]);
        this.endDelimited_(a);
      }
    };
    jspb.Map = function(a, b) {
      this.arr_ = a;
      this.valueCtor_ = b;
      this.map_ = {};
      this.arrClean = true;
      0 < this.arr_.length && this.loadFromArray_();
    };
    jspb.Map.prototype.loadFromArray_ = function() {
      for (var a = 0; a < this.arr_.length; a++) {
        var b = this.arr_[a], c = b[0];
        this.map_[c.toString()] = new jspb.Map.Entry_(c, b[1]);
      }
      this.arrClean = true;
    };
    jspb.Map.prototype.toArray = function() {
      if (this.arrClean) {
        if (this.valueCtor_) {
          var a = this.map_, b;
          for (b in a)
            if (Object.prototype.hasOwnProperty.call(a, b)) {
              var c = a[b].valueWrapper;
              c && c.toArray();
            }
        }
      } else {
        this.arr_.length = 0;
        a = this.stringKeys_();
        a.sort();
        for (b = 0; b < a.length; b++) {
          var d = this.map_[a[b]];
          (c = d.valueWrapper) && c.toArray();
          this.arr_.push([d.key, d.value]);
        }
        this.arrClean = true;
      }
      return this.arr_;
    };
    jspb.Map.prototype.toObject = function(a, b) {
      for (var c = this.toArray(), d = [], e = 0; e < c.length; e++) {
        var f = this.map_[c[e][0].toString()];
        this.wrapEntry_(f);
        var g = f.valueWrapper;
        g ? (goog.asserts.assert(b), d.push([f.key, b(a, g)])) : d.push([f.key, f.value]);
      }
      return d;
    };
    jspb.Map.fromObject = function(a, b, c) {
      b = new jspb.Map([], b);
      for (var d = 0; d < a.length; d++) {
        var e = a[d][0], f = c(a[d][1]);
        b.set(e, f);
      }
      return b;
    };
    jspb.Map.ArrayIteratorIterable_ = function(a) {
      this.idx_ = 0;
      this.arr_ = a;
    };
    jspb.Map.ArrayIteratorIterable_.prototype.next = function() {
      return this.idx_ < this.arr_.length ? { done: false, value: this.arr_[this.idx_++] } : { done: true, value: void 0 };
    };
    typeof Symbol != "undefined" && (jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] = function() {
      return this;
    });
    jspb.Map.prototype.getLength = function() {
      return this.stringKeys_().length;
    };
    jspb.Map.prototype.clear = function() {
      this.map_ = {};
      this.arrClean = false;
    };
    jspb.Map.prototype.del = function(a) {
      a = a.toString();
      var b = this.map_.hasOwnProperty(a);
      delete this.map_[a];
      this.arrClean = false;
      return b;
    };
    jspb.Map.prototype.getEntryList = function() {
      var a = [], b = this.stringKeys_();
      b.sort();
      for (var c = 0; c < b.length; c++) {
        var d = this.map_[b[c]];
        a.push([d.key, d.value]);
      }
      return a;
    };
    jspb.Map.prototype.entries = function() {
      var a = [], b = this.stringKeys_();
      b.sort();
      for (var c = 0; c < b.length; c++) {
        var d = this.map_[b[c]];
        a.push([d.key, this.wrapEntry_(d)]);
      }
      return new jspb.Map.ArrayIteratorIterable_(a);
    };
    jspb.Map.prototype.keys = function() {
      var a = [], b = this.stringKeys_();
      b.sort();
      for (var c = 0; c < b.length; c++)
        a.push(this.map_[b[c]].key);
      return new jspb.Map.ArrayIteratorIterable_(a);
    };
    jspb.Map.prototype.values = function() {
      var a = [], b = this.stringKeys_();
      b.sort();
      for (var c = 0; c < b.length; c++)
        a.push(this.wrapEntry_(this.map_[b[c]]));
      return new jspb.Map.ArrayIteratorIterable_(a);
    };
    jspb.Map.prototype.forEach = function(a, b) {
      var c = this.stringKeys_();
      c.sort();
      for (var d = 0; d < c.length; d++) {
        var e = this.map_[c[d]];
        a.call(b, this.wrapEntry_(e), e.key, this);
      }
    };
    jspb.Map.prototype.set = function(a, b) {
      var c = new jspb.Map.Entry_(a);
      this.valueCtor_ ? (c.valueWrapper = b, c.value = b.toArray()) : c.value = b;
      this.map_[a.toString()] = c;
      this.arrClean = false;
      return this;
    };
    jspb.Map.prototype.wrapEntry_ = function(a) {
      return this.valueCtor_ ? (a.valueWrapper || (a.valueWrapper = new this.valueCtor_(a.value)), a.valueWrapper) : a.value;
    };
    jspb.Map.prototype.get = function(a) {
      if (a = this.map_[a.toString()])
        return this.wrapEntry_(a);
    };
    jspb.Map.prototype.has = function(a) {
      return a.toString() in this.map_;
    };
    jspb.Map.prototype.serializeBinary = function(a, b, c, d, e) {
      var f = this.stringKeys_();
      f.sort();
      for (var g = 0; g < f.length; g++) {
        var h = this.map_[f[g]];
        b.beginSubMessage(a);
        c.call(b, 1, h.key);
        this.valueCtor_ ? d.call(b, 2, this.wrapEntry_(h), e) : d.call(b, 2, h.value);
        b.endSubMessage();
      }
    };
    jspb.Map.deserializeBinary = function(a, b, c, d, e, f, g) {
      for (; b.nextField() && !b.isEndGroup(); ) {
        var h = b.getFieldNumber();
        h == 1 ? f = c.call(b) : h == 2 && (a.valueCtor_ ? (goog.asserts.assert(e), g || (g = new a.valueCtor_()), d.call(b, g, e)) : g = d.call(b));
      }
      goog.asserts.assert(f != void 0);
      goog.asserts.assert(g != void 0);
      a.set(f, g);
    };
    jspb.Map.prototype.stringKeys_ = function() {
      var a = this.map_, b = [], c;
      for (c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
      return b;
    };
    jspb.Map.Entry_ = function(a, b) {
      this.key = a;
      this.value = b;
      this.valueWrapper = void 0;
    };
    jspb.ExtensionFieldInfo = function(a, b, c, d, e) {
      this.fieldIndex = a;
      this.fieldName = b;
      this.ctor = c;
      this.toObjectFn = d;
      this.isRepeated = e;
    };
    jspb.ExtensionFieldBinaryInfo = function(a, b, c, d, e, f) {
      this.fieldInfo = a;
      this.binaryReaderFn = b;
      this.binaryWriterFn = c;
      this.binaryMessageSerializeFn = d;
      this.binaryMessageDeserializeFn = e;
      this.isPacked = f;
    };
    jspb.ExtensionFieldInfo.prototype.isMessageType = function() {
      return !!this.ctor;
    };
    jspb.Message = function() {
    };
    jspb.Message.GENERATE_TO_OBJECT = true;
    jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE;
    jspb.Message.GENERATE_TO_STRING = true;
    jspb.Message.ASSUME_LOCAL_ARRAYS = false;
    jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = true;
    jspb.Message.SUPPORTS_UINT8ARRAY_ = typeof Uint8Array == "function";
    jspb.Message.prototype.getJsPbMessageId = function() {
      return this.messageId_;
    };
    jspb.Message.getIndex_ = function(a, b) {
      return b + a.arrayIndexOffset_;
    };
    jspb.Message.hiddenES6Property_ = function() {
    };
    jspb.Message.getFieldNumber_ = function(a, b) {
      return b - a.arrayIndexOffset_;
    };
    jspb.Message.initialize = function(a, b, c, d, e, f) {
      a.wrappers_ = null;
      b || (b = c ? [c] : []);
      a.messageId_ = c ? String(c) : void 0;
      a.arrayIndexOffset_ = c === 0 ? -1 : 0;
      a.array = b;
      jspb.Message.initPivotAndExtensionObject_(a, d);
      a.convertedPrimitiveFields_ = {};
      jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS || (a.repeatedFields = e);
      if (e)
        for (b = 0; b < e.length; b++)
          c = e[b], c < a.pivot_ ? (c = jspb.Message.getIndex_(a, c), a.array[c] = a.array[c] || jspb.Message.EMPTY_LIST_SENTINEL_) : (jspb.Message.maybeInitEmptyExtensionObject_(a), a.extensionObject_[c] = a.extensionObject_[c] || jspb.Message.EMPTY_LIST_SENTINEL_);
      if (f && f.length)
        for (b = 0; b < f.length; b++)
          jspb.Message.computeOneofCase(a, f[b]);
    };
    jspb.Message.EMPTY_LIST_SENTINEL_ = goog.DEBUG && Object.freeze ? Object.freeze([]) : [];
    jspb.Message.isArray_ = function(a) {
      return jspb.Message.ASSUME_LOCAL_ARRAYS ? a instanceof Array : Array.isArray(a);
    };
    jspb.Message.isExtensionObject_ = function(a) {
      return a !== null && typeof a == "object" && !jspb.Message.isArray_(a) && !(jspb.Message.SUPPORTS_UINT8ARRAY_ && a instanceof Uint8Array);
    };
    jspb.Message.initPivotAndExtensionObject_ = function(a, b) {
      var c = a.array.length, d = -1;
      if (c && (d = c - 1, c = a.array[d], jspb.Message.isExtensionObject_(c))) {
        a.pivot_ = jspb.Message.getFieldNumber_(a, d);
        a.extensionObject_ = c;
        return;
      }
      -1 < b ? (a.pivot_ = Math.max(b, jspb.Message.getFieldNumber_(a, d + 1)), a.extensionObject_ = null) : a.pivot_ = Number.MAX_VALUE;
    };
    jspb.Message.maybeInitEmptyExtensionObject_ = function(a) {
      var b = jspb.Message.getIndex_(a, a.pivot_);
      a.array[b] || (a.extensionObject_ = a.array[b] = {});
    };
    jspb.Message.toObjectList = function(a, b, c) {
      for (var d = [], e = 0; e < a.length; e++)
        d[e] = b.call(a[e], c, a[e]);
      return d;
    };
    jspb.Message.toObjectExtension = function(a, b, c, d, e) {
      for (var f in c) {
        var g = c[f], h = d.call(a, g);
        if (h != null) {
          for (var k in g.fieldName)
            if (g.fieldName.hasOwnProperty(k))
              break;
          b[k] = g.toObjectFn ? g.isRepeated ? jspb.Message.toObjectList(h, g.toObjectFn, e) : g.toObjectFn(e, h) : h;
        }
      }
    };
    jspb.Message.serializeBinaryExtensions = function(a, b, c, d) {
      for (var e in c) {
        var f = c[e], g = f.fieldInfo;
        if (!f.binaryWriterFn)
          throw Error("Message extension present that was generated without binary serialization support");
        var h = d.call(a, g);
        if (h != null)
          if (g.isMessageType())
            if (f.binaryMessageSerializeFn)
              f.binaryWriterFn.call(b, g.fieldIndex, h, f.binaryMessageSerializeFn);
            else
              throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
          else
            f.binaryWriterFn.call(b, g.fieldIndex, h);
      }
    };
    jspb.Message.readBinaryExtension = function(a, b, c, d, e) {
      var f = c[b.getFieldNumber()];
      if (f) {
        c = f.fieldInfo;
        if (!f.binaryReaderFn)
          throw Error("Deserializing extension whose generated code does not support binary format");
        if (c.isMessageType()) {
          var g = new c.ctor();
          f.binaryReaderFn.call(b, g, f.binaryMessageDeserializeFn);
        } else
          g = f.binaryReaderFn.call(b);
        c.isRepeated && !f.isPacked ? (b = d.call(a, c)) ? b.push(g) : e.call(a, c, [g]) : e.call(a, c, g);
      } else
        b.skipField();
    };
    jspb.Message.getField = function(a, b) {
      if (b < a.pivot_) {
        b = jspb.Message.getIndex_(a, b);
        var c = a.array[b];
        return c === jspb.Message.EMPTY_LIST_SENTINEL_ ? a.array[b] = [] : c;
      }
      if (a.extensionObject_)
        return c = a.extensionObject_[b], c === jspb.Message.EMPTY_LIST_SENTINEL_ ? a.extensionObject_[b] = [] : c;
    };
    jspb.Message.getRepeatedField = function(a, b) {
      return jspb.Message.getField(a, b);
    };
    jspb.Message.getOptionalFloatingPointField = function(a, b) {
      a = jspb.Message.getField(a, b);
      return a == null ? a : +a;
    };
    jspb.Message.getBooleanField = function(a, b) {
      a = jspb.Message.getField(a, b);
      return a == null ? a : !!a;
    };
    jspb.Message.getRepeatedFloatingPointField = function(a, b) {
      var c = jspb.Message.getRepeatedField(a, b);
      a.convertedPrimitiveFields_ || (a.convertedPrimitiveFields_ = {});
      if (!a.convertedPrimitiveFields_[b]) {
        for (var d = 0; d < c.length; d++)
          c[d] = +c[d];
        a.convertedPrimitiveFields_[b] = true;
      }
      return c;
    };
    jspb.Message.getRepeatedBooleanField = function(a, b) {
      var c = jspb.Message.getRepeatedField(a, b);
      a.convertedPrimitiveFields_ || (a.convertedPrimitiveFields_ = {});
      if (!a.convertedPrimitiveFields_[b]) {
        for (var d = 0; d < c.length; d++)
          c[d] = !!c[d];
        a.convertedPrimitiveFields_[b] = true;
      }
      return c;
    };
    jspb.Message.bytesAsB64 = function(a) {
      if (a == null || typeof a === "string")
        return a;
      if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a instanceof Uint8Array)
        return goog.crypt.base64.encodeByteArray(a);
      goog.asserts.fail("Cannot coerce to b64 string: " + goog.typeOf(a));
      return null;
    };
    jspb.Message.bytesAsU8 = function(a) {
      if (a == null || a instanceof Uint8Array)
        return a;
      if (typeof a === "string")
        return goog.crypt.base64.decodeStringToUint8Array(a);
      goog.asserts.fail("Cannot coerce to Uint8Array: " + goog.typeOf(a));
      return null;
    };
    jspb.Message.bytesListAsB64 = function(a) {
      jspb.Message.assertConsistentTypes_(a);
      return a.length && typeof a[0] !== "string" ? goog.array.map(a, jspb.Message.bytesAsB64) : a;
    };
    jspb.Message.bytesListAsU8 = function(a) {
      jspb.Message.assertConsistentTypes_(a);
      return !a.length || a[0] instanceof Uint8Array ? a : goog.array.map(a, jspb.Message.bytesAsU8);
    };
    jspb.Message.assertConsistentTypes_ = function(a) {
      if (goog.DEBUG && a && 1 < a.length) {
        var b = goog.typeOf(a[0]);
        goog.array.forEach(a, function(a2) {
          goog.typeOf(a2) != b && goog.asserts.fail("Inconsistent type in JSPB repeated field array. Got " + goog.typeOf(a2) + " expected " + b);
        });
      }
    };
    jspb.Message.getFieldWithDefault = function(a, b, c) {
      a = jspb.Message.getField(a, b);
      return a == null ? c : a;
    };
    jspb.Message.getBooleanFieldWithDefault = function(a, b, c) {
      a = jspb.Message.getBooleanField(a, b);
      return a == null ? c : a;
    };
    jspb.Message.getFloatingPointFieldWithDefault = function(a, b, c) {
      a = jspb.Message.getOptionalFloatingPointField(a, b);
      return a == null ? c : a;
    };
    jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault;
    jspb.Message.getMapField = function(a, b, c, d) {
      a.wrappers_ || (a.wrappers_ = {});
      if (b in a.wrappers_)
        return a.wrappers_[b];
      var e = jspb.Message.getField(a, b);
      if (!e) {
        if (c)
          return;
        e = [];
        jspb.Message.setField(a, b, e);
      }
      return a.wrappers_[b] = new jspb.Map(e, d);
    };
    jspb.Message.setField = function(a, b, c) {
      goog.asserts.assertInstanceof(a, jspb.Message);
      b < a.pivot_ ? a.array[jspb.Message.getIndex_(a, b)] = c : (jspb.Message.maybeInitEmptyExtensionObject_(a), a.extensionObject_[b] = c);
      return a;
    };
    jspb.Message.setProto3IntField = function(a, b, c) {
      return jspb.Message.setFieldIgnoringDefault_(a, b, c, 0);
    };
    jspb.Message.setProto3FloatField = function(a, b, c) {
      return jspb.Message.setFieldIgnoringDefault_(a, b, c, 0);
    };
    jspb.Message.setProto3BooleanField = function(a, b, c) {
      return jspb.Message.setFieldIgnoringDefault_(a, b, c, false);
    };
    jspb.Message.setProto3StringField = function(a, b, c) {
      return jspb.Message.setFieldIgnoringDefault_(a, b, c, "");
    };
    jspb.Message.setProto3BytesField = function(a, b, c) {
      return jspb.Message.setFieldIgnoringDefault_(a, b, c, "");
    };
    jspb.Message.setProto3EnumField = function(a, b, c) {
      return jspb.Message.setFieldIgnoringDefault_(a, b, c, 0);
    };
    jspb.Message.setProto3StringIntField = function(a, b, c) {
      return jspb.Message.setFieldIgnoringDefault_(a, b, c, "0");
    };
    jspb.Message.setFieldIgnoringDefault_ = function(a, b, c, d) {
      goog.asserts.assertInstanceof(a, jspb.Message);
      c !== d ? jspb.Message.setField(a, b, c) : b < a.pivot_ ? a.array[jspb.Message.getIndex_(a, b)] = null : (jspb.Message.maybeInitEmptyExtensionObject_(a), delete a.extensionObject_[b]);
      return a;
    };
    jspb.Message.addToRepeatedField = function(a, b, c, d) {
      goog.asserts.assertInstanceof(a, jspb.Message);
      b = jspb.Message.getRepeatedField(a, b);
      d != void 0 ? b.splice(d, 0, c) : b.push(c);
      return a;
    };
    jspb.Message.setOneofField = function(a, b, c, d) {
      goog.asserts.assertInstanceof(a, jspb.Message);
      (c = jspb.Message.computeOneofCase(a, c)) && c !== b && d !== void 0 && (a.wrappers_ && c in a.wrappers_ && (a.wrappers_[c] = void 0), jspb.Message.setField(a, c, void 0));
      return jspb.Message.setField(a, b, d);
    };
    jspb.Message.computeOneofCase = function(a, b) {
      for (var c, d, e = 0; e < b.length; e++) {
        var f = b[e], g = jspb.Message.getField(a, f);
        g != null && (c = f, d = g, jspb.Message.setField(a, f, void 0));
      }
      return c ? (jspb.Message.setField(a, c, d), c) : 0;
    };
    jspb.Message.getWrapperField = function(a, b, c, d) {
      a.wrappers_ || (a.wrappers_ = {});
      if (!a.wrappers_[c]) {
        var e = jspb.Message.getField(a, c);
        if (d || e)
          a.wrappers_[c] = new b(e);
      }
      return a.wrappers_[c];
    };
    jspb.Message.getRepeatedWrapperField = function(a, b, c) {
      jspb.Message.wrapRepeatedField_(a, b, c);
      b = a.wrappers_[c];
      b == jspb.Message.EMPTY_LIST_SENTINEL_ && (b = a.wrappers_[c] = []);
      return b;
    };
    jspb.Message.wrapRepeatedField_ = function(a, b, c) {
      a.wrappers_ || (a.wrappers_ = {});
      if (!a.wrappers_[c]) {
        for (var d = jspb.Message.getRepeatedField(a, c), e = [], f = 0; f < d.length; f++)
          e[f] = new b(d[f]);
        a.wrappers_[c] = e;
      }
    };
    jspb.Message.setWrapperField = function(a, b, c) {
      goog.asserts.assertInstanceof(a, jspb.Message);
      a.wrappers_ || (a.wrappers_ = {});
      var d = c ? c.toArray() : c;
      a.wrappers_[b] = c;
      return jspb.Message.setField(a, b, d);
    };
    jspb.Message.setOneofWrapperField = function(a, b, c, d) {
      goog.asserts.assertInstanceof(a, jspb.Message);
      a.wrappers_ || (a.wrappers_ = {});
      var e = d ? d.toArray() : d;
      a.wrappers_[b] = d;
      return jspb.Message.setOneofField(a, b, c, e);
    };
    jspb.Message.setRepeatedWrapperField = function(a, b, c) {
      goog.asserts.assertInstanceof(a, jspb.Message);
      a.wrappers_ || (a.wrappers_ = {});
      c = c || [];
      for (var d = [], e = 0; e < c.length; e++)
        d[e] = c[e].toArray();
      a.wrappers_[b] = c;
      return jspb.Message.setField(a, b, d);
    };
    jspb.Message.addToRepeatedWrapperField = function(a, b, c, d, e) {
      jspb.Message.wrapRepeatedField_(a, d, b);
      var f = a.wrappers_[b];
      f || (f = a.wrappers_[b] = []);
      c = c ? c : new d();
      a = jspb.Message.getRepeatedField(a, b);
      e != void 0 ? (f.splice(e, 0, c), a.splice(e, 0, c.toArray())) : (f.push(c), a.push(c.toArray()));
      return c;
    };
    jspb.Message.toMap = function(a, b, c, d) {
      for (var e = {}, f = 0; f < a.length; f++)
        e[b.call(a[f])] = c ? c.call(a[f], d, a[f]) : a[f];
      return e;
    };
    jspb.Message.prototype.syncMapFields_ = function() {
      if (this.wrappers_)
        for (var a in this.wrappers_) {
          var b = this.wrappers_[a];
          if (Array.isArray(b))
            for (var c = 0; c < b.length; c++)
              b[c] && b[c].toArray();
          else
            b && b.toArray();
        }
    };
    jspb.Message.prototype.toArray = function() {
      this.syncMapFields_();
      return this.array;
    };
    jspb.Message.GENERATE_TO_STRING && (jspb.Message.prototype.toString = function() {
      this.syncMapFields_();
      return this.array.toString();
    });
    jspb.Message.prototype.getExtension = function(a) {
      if (this.extensionObject_) {
        this.wrappers_ || (this.wrappers_ = {});
        var b = a.fieldIndex;
        if (a.isRepeated) {
          if (a.isMessageType())
            return this.wrappers_[b] || (this.wrappers_[b] = goog.array.map(this.extensionObject_[b] || [], function(b2) {
              return new a.ctor(b2);
            })), this.wrappers_[b];
        } else if (a.isMessageType())
          return !this.wrappers_[b] && this.extensionObject_[b] && (this.wrappers_[b] = new a.ctor(this.extensionObject_[b])), this.wrappers_[b];
        return this.extensionObject_[b];
      }
    };
    jspb.Message.prototype.setExtension = function(a, b) {
      this.wrappers_ || (this.wrappers_ = {});
      jspb.Message.maybeInitEmptyExtensionObject_(this);
      var c = a.fieldIndex;
      a.isRepeated ? (b = b || [], a.isMessageType() ? (this.wrappers_[c] = b, this.extensionObject_[c] = goog.array.map(b, function(a2) {
        return a2.toArray();
      })) : this.extensionObject_[c] = b) : a.isMessageType() ? (this.wrappers_[c] = b, this.extensionObject_[c] = b ? b.toArray() : b) : this.extensionObject_[c] = b;
      return this;
    };
    jspb.Message.difference = function(a, b) {
      if (!(a instanceof b.constructor))
        throw Error("Messages have different types.");
      var c = a.toArray();
      b = b.toArray();
      var d = [], e = 0, f = c.length > b.length ? c.length : b.length;
      a.getJsPbMessageId() && (d[0] = a.getJsPbMessageId(), e = 1);
      for (; e < f; e++)
        jspb.Message.compareFields(c[e], b[e]) || (d[e] = b[e]);
      return new a.constructor(d);
    };
    jspb.Message.equals = function(a, b) {
      return a == b || !(!a || !b) && a instanceof b.constructor && jspb.Message.compareFields(a.toArray(), b.toArray());
    };
    jspb.Message.compareExtensions = function(a, b) {
      a = a || {};
      b = b || {};
      var c = {}, d;
      for (d in a)
        c[d] = 0;
      for (d in b)
        c[d] = 0;
      for (d in c)
        if (!jspb.Message.compareFields(a[d], b[d]))
          return false;
      return true;
    };
    jspb.Message.compareFields = function(a, b) {
      if (a == b)
        return true;
      if (!goog.isObject(a) || !goog.isObject(b))
        return typeof a === "number" && isNaN(a) || typeof b === "number" && isNaN(b) ? String(a) == String(b) : false;
      if (a.constructor != b.constructor)
        return false;
      if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a.constructor === Uint8Array) {
        if (a.length != b.length)
          return false;
        for (var c = 0; c < a.length; c++)
          if (a[c] != b[c])
            return false;
        return true;
      }
      if (a.constructor === Array) {
        var d = void 0, e = void 0, f = Math.max(a.length, b.length);
        for (c = 0; c < f; c++) {
          var g = a[c], h = b[c];
          g && g.constructor == Object && (goog.asserts.assert(d === void 0), goog.asserts.assert(c === a.length - 1), d = g, g = void 0);
          h && h.constructor == Object && (goog.asserts.assert(e === void 0), goog.asserts.assert(c === b.length - 1), e = h, h = void 0);
          if (!jspb.Message.compareFields(g, h))
            return false;
        }
        return d || e ? (d = d || {}, e = e || {}, jspb.Message.compareExtensions(d, e)) : true;
      }
      if (a.constructor === Object)
        return jspb.Message.compareExtensions(a, b);
      throw Error("Invalid type in JSPB array");
    };
    jspb.Message.prototype.cloneMessage = function() {
      return jspb.Message.cloneMessage(this);
    };
    jspb.Message.prototype.clone = function() {
      return jspb.Message.cloneMessage(this);
    };
    jspb.Message.clone = function(a) {
      return jspb.Message.cloneMessage(a);
    };
    jspb.Message.cloneMessage = function(a) {
      return new a.constructor(jspb.Message.clone_(a.toArray()));
    };
    jspb.Message.copyInto = function(a, b) {
      goog.asserts.assertInstanceof(a, jspb.Message);
      goog.asserts.assertInstanceof(b, jspb.Message);
      goog.asserts.assert(a.constructor == b.constructor, "Copy source and target message should have the same type.");
      a = jspb.Message.clone(a);
      for (var c = b.toArray(), d = a.toArray(), e = c.length = 0; e < d.length; e++)
        c[e] = d[e];
      b.wrappers_ = a.wrappers_;
      b.extensionObject_ = a.extensionObject_;
    };
    jspb.Message.clone_ = function(a) {
      if (Array.isArray(a)) {
        for (var b = Array(a.length), c = 0; c < a.length; c++) {
          var d = a[c];
          d != null && (b[c] = typeof d == "object" ? jspb.Message.clone_(goog.asserts.assert(d)) : d);
        }
        return b;
      }
      if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a instanceof Uint8Array)
        return new Uint8Array(a);
      b = {};
      for (c in a)
        d = a[c], d != null && (b[c] = typeof d == "object" ? jspb.Message.clone_(goog.asserts.assert(d)) : d);
      return b;
    };
    jspb.Message.registerMessageType = function(a, b) {
      b.messageId = a;
    };
    jspb.Message.messageSetExtensions = {};
    jspb.Message.messageSetExtensionsBinary = {};
    jspb.Export = {};
    exports.Map = jspb.Map;
    exports.Message = jspb.Message;
    exports.BinaryReader = jspb.BinaryReader;
    exports.BinaryWriter = jspb.BinaryWriter;
    exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo;
    exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo;
    exports.exportSymbol = goog.exportSymbol;
    exports.inherits = goog.inherits;
    exports.object = { extend: goog.object.extend };
    exports.typeOf = goog.typeOf;
  }
});

// node_modules/google-protobuf/google/protobuf/duration_pb.js
var require_duration_pb = __commonJS({
  "node_modules/google-protobuf/google/protobuf/duration_pb.js"(exports2) {
    var jspb2 = require_google_protobuf();
    var goog2 = jspb2;
    var global2 = Function("return this")();
    goog2.exportSymbol("proto.google.protobuf.Duration", null, global2);
    proto.google.protobuf.Duration = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.google.protobuf.Duration, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.google.protobuf.Duration.displayName = "proto.google.protobuf.Duration";
    }
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.google.protobuf.Duration.prototype.toObject = function(opt_includeInstance) {
        return proto.google.protobuf.Duration.toObject(opt_includeInstance, this);
      };
      proto.google.protobuf.Duration.toObject = function(includeInstance, msg) {
        var f, obj = {
          seconds: jspb2.Message.getFieldWithDefault(msg, 1, 0),
          nanos: jspb2.Message.getFieldWithDefault(msg, 2, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.google.protobuf.Duration.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.google.protobuf.Duration();
      return proto.google.protobuf.Duration.deserializeBinaryFromReader(msg, reader);
    };
    proto.google.protobuf.Duration.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readInt64();
            msg.setSeconds(value);
            break;
          case 2:
            var value = reader.readInt32();
            msg.setNanos(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.google.protobuf.Duration.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.google.protobuf.Duration.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.google.protobuf.Duration.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSeconds();
      if (f !== 0) {
        writer.writeInt64(1, f);
      }
      f = message.getNanos();
      if (f !== 0) {
        writer.writeInt32(2, f);
      }
    };
    proto.google.protobuf.Duration.prototype.getSeconds = function() {
      return jspb2.Message.getFieldWithDefault(this, 1, 0);
    };
    proto.google.protobuf.Duration.prototype.setSeconds = function(value) {
      return jspb2.Message.setProto3IntField(this, 1, value);
    };
    proto.google.protobuf.Duration.prototype.getNanos = function() {
      return jspb2.Message.getFieldWithDefault(this, 2, 0);
    };
    proto.google.protobuf.Duration.prototype.setNanos = function(value) {
      return jspb2.Message.setProto3IntField(this, 2, value);
    };
    goog2.object.extend(exports2, proto.google.protobuf);
  }
});

// src/proto/kernel_pb.js
var require_kernel_pb = __commonJS({
  "src/proto/kernel_pb.js"(exports2) {
    var jspb2 = require_google_protobuf();
    var goog2 = jspb2;
    var global2 = Function("return this")();
    var google_protobuf_duration_pb = require_duration_pb();
    goog2.object.extend(proto, google_protobuf_duration_pb);
    goog2.exportSymbol("proto.CacheRequest", null, global2);
    goog2.exportSymbol("proto.CacheResponse", null, global2);
    goog2.exportSymbol("proto.CancelEvaluate", null, global2);
    goog2.exportSymbol("proto.Content", null, global2);
    goog2.exportSymbol("proto.EvaluateError", null, global2);
    goog2.exportSymbol("proto.EvaluateRequest", null, global2);
    goog2.exportSymbol("proto.EvaluateResponse", null, global2);
    goog2.exportSymbol("proto.LineAndColumn", null, global2);
    goog2.exportSymbol("proto.Output", null, global2);
    goog2.exportSymbol("proto.PromptRequest", null, global2);
    goog2.exportSymbol("proto.PromptResponse", null, global2);
    goog2.exportSymbol("proto.ToClient", null, global2);
    goog2.exportSymbol("proto.ToClient.KindCase", null, global2);
    goog2.exportSymbol("proto.ToServer", null, global2);
    goog2.exportSymbol("proto.ToServer.KindCase", null, global2);
    proto.ToServer = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, proto.ToServer.oneofGroups_);
    };
    goog2.inherits(proto.ToServer, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.ToServer.displayName = "proto.ToServer";
    }
    proto.ToClient = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, proto.ToClient.oneofGroups_);
    };
    goog2.inherits(proto.ToClient, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.ToClient.displayName = "proto.ToClient";
    }
    proto.EvaluateRequest = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.EvaluateRequest, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.EvaluateRequest.displayName = "proto.EvaluateRequest";
    }
    proto.EvaluateResponse = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, proto.EvaluateResponse.repeatedFields_, null);
    };
    goog2.inherits(proto.EvaluateResponse, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.EvaluateResponse.displayName = "proto.EvaluateResponse";
    }
    proto.EvaluateError = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.EvaluateError, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.EvaluateError.displayName = "proto.EvaluateError";
    }
    proto.LineAndColumn = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.LineAndColumn, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.LineAndColumn.displayName = "proto.LineAndColumn";
    }
    proto.Output = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, proto.Output.repeatedFields_, null);
    };
    goog2.inherits(proto.Output, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.Output.displayName = "proto.Output";
    }
    proto.Content = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.Content, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.Content.displayName = "proto.Content";
    }
    proto.PromptRequest = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.PromptRequest, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.PromptRequest.displayName = "proto.PromptRequest";
    }
    proto.PromptResponse = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.PromptResponse, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.PromptResponse.displayName = "proto.PromptResponse";
    }
    proto.CacheRequest = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.CacheRequest, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.CacheRequest.displayName = "proto.CacheRequest";
    }
    proto.CacheResponse = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.CacheResponse, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.CacheResponse.displayName = "proto.CacheResponse";
    }
    proto.CancelEvaluate = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.CancelEvaluate, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.CancelEvaluate.displayName = "proto.CancelEvaluate";
    }
    proto.ToServer.oneofGroups_ = [[1, 2, 3, 4]];
    proto.ToServer.KindCase = {
      KIND_NOT_SET: 0,
      EVALUATE: 1,
      PROMPT: 2,
      CACHE: 3,
      CANCEL: 4
    };
    proto.ToServer.prototype.getKindCase = function() {
      return jspb2.Message.computeOneofCase(this, proto.ToServer.oneofGroups_[0]);
    };
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.ToServer.prototype.toObject = function(opt_includeInstance) {
        return proto.ToServer.toObject(opt_includeInstance, this);
      };
      proto.ToServer.toObject = function(includeInstance, msg) {
        var f, obj = {
          evaluate: (f = msg.getEvaluate()) && proto.EvaluateRequest.toObject(includeInstance, f),
          prompt: (f = msg.getPrompt()) && proto.PromptResponse.toObject(includeInstance, f),
          cache: (f = msg.getCache()) && proto.CacheResponse.toObject(includeInstance, f),
          cancel: (f = msg.getCancel()) && proto.CancelEvaluate.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.ToServer.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.ToServer();
      return proto.ToServer.deserializeBinaryFromReader(msg, reader);
    };
    proto.ToServer.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.EvaluateRequest();
            reader.readMessage(value, proto.EvaluateRequest.deserializeBinaryFromReader);
            msg.setEvaluate(value);
            break;
          case 2:
            var value = new proto.PromptResponse();
            reader.readMessage(value, proto.PromptResponse.deserializeBinaryFromReader);
            msg.setPrompt(value);
            break;
          case 3:
            var value = new proto.CacheResponse();
            reader.readMessage(value, proto.CacheResponse.deserializeBinaryFromReader);
            msg.setCache(value);
            break;
          case 4:
            var value = new proto.CancelEvaluate();
            reader.readMessage(value, proto.CancelEvaluate.deserializeBinaryFromReader);
            msg.setCancel(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.ToServer.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.ToServer.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.ToServer.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getEvaluate();
      if (f != null) {
        writer.writeMessage(1, f, proto.EvaluateRequest.serializeBinaryToWriter);
      }
      f = message.getPrompt();
      if (f != null) {
        writer.writeMessage(2, f, proto.PromptResponse.serializeBinaryToWriter);
      }
      f = message.getCache();
      if (f != null) {
        writer.writeMessage(3, f, proto.CacheResponse.serializeBinaryToWriter);
      }
      f = message.getCancel();
      if (f != null) {
        writer.writeMessage(4, f, proto.CancelEvaluate.serializeBinaryToWriter);
      }
    };
    proto.ToServer.prototype.getEvaluate = function() {
      return jspb2.Message.getWrapperField(this, proto.EvaluateRequest, 1);
    };
    proto.ToServer.prototype.setEvaluate = function(value) {
      return jspb2.Message.setOneofWrapperField(this, 1, proto.ToServer.oneofGroups_[0], value);
    };
    proto.ToServer.prototype.clearEvaluate = function() {
      return this.setEvaluate(void 0);
    };
    proto.ToServer.prototype.hasEvaluate = function() {
      return jspb2.Message.getField(this, 1) != null;
    };
    proto.ToServer.prototype.getPrompt = function() {
      return jspb2.Message.getWrapperField(this, proto.PromptResponse, 2);
    };
    proto.ToServer.prototype.setPrompt = function(value) {
      return jspb2.Message.setOneofWrapperField(this, 2, proto.ToServer.oneofGroups_[0], value);
    };
    proto.ToServer.prototype.clearPrompt = function() {
      return this.setPrompt(void 0);
    };
    proto.ToServer.prototype.hasPrompt = function() {
      return jspb2.Message.getField(this, 2) != null;
    };
    proto.ToServer.prototype.getCache = function() {
      return jspb2.Message.getWrapperField(this, proto.CacheResponse, 3);
    };
    proto.ToServer.prototype.setCache = function(value) {
      return jspb2.Message.setOneofWrapperField(this, 3, proto.ToServer.oneofGroups_[0], value);
    };
    proto.ToServer.prototype.clearCache = function() {
      return this.setCache(void 0);
    };
    proto.ToServer.prototype.hasCache = function() {
      return jspb2.Message.getField(this, 3) != null;
    };
    proto.ToServer.prototype.getCancel = function() {
      return jspb2.Message.getWrapperField(this, proto.CancelEvaluate, 4);
    };
    proto.ToServer.prototype.setCancel = function(value) {
      return jspb2.Message.setOneofWrapperField(this, 4, proto.ToServer.oneofGroups_[0], value);
    };
    proto.ToServer.prototype.clearCancel = function() {
      return this.setCancel(void 0);
    };
    proto.ToServer.prototype.hasCancel = function() {
      return jspb2.Message.getField(this, 4) != null;
    };
    proto.ToClient.oneofGroups_ = [[1, 2, 3, 4]];
    proto.ToClient.KindCase = {
      KIND_NOT_SET: 0,
      OUTPUT: 1,
      EVALUATE: 2,
      PROMPT: 3,
      CACHE: 4
    };
    proto.ToClient.prototype.getKindCase = function() {
      return jspb2.Message.computeOneofCase(this, proto.ToClient.oneofGroups_[0]);
    };
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.ToClient.prototype.toObject = function(opt_includeInstance) {
        return proto.ToClient.toObject(opt_includeInstance, this);
      };
      proto.ToClient.toObject = function(includeInstance, msg) {
        var f, obj = {
          output: (f = msg.getOutput()) && proto.Output.toObject(includeInstance, f),
          evaluate: (f = msg.getEvaluate()) && proto.EvaluateResponse.toObject(includeInstance, f),
          prompt: (f = msg.getPrompt()) && proto.PromptRequest.toObject(includeInstance, f),
          cache: (f = msg.getCache()) && proto.CacheRequest.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.ToClient.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.ToClient();
      return proto.ToClient.deserializeBinaryFromReader(msg, reader);
    };
    proto.ToClient.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.Output();
            reader.readMessage(value, proto.Output.deserializeBinaryFromReader);
            msg.setOutput(value);
            break;
          case 2:
            var value = new proto.EvaluateResponse();
            reader.readMessage(value, proto.EvaluateResponse.deserializeBinaryFromReader);
            msg.setEvaluate(value);
            break;
          case 3:
            var value = new proto.PromptRequest();
            reader.readMessage(value, proto.PromptRequest.deserializeBinaryFromReader);
            msg.setPrompt(value);
            break;
          case 4:
            var value = new proto.CacheRequest();
            reader.readMessage(value, proto.CacheRequest.deserializeBinaryFromReader);
            msg.setCache(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.ToClient.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.ToClient.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.ToClient.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getOutput();
      if (f != null) {
        writer.writeMessage(1, f, proto.Output.serializeBinaryToWriter);
      }
      f = message.getEvaluate();
      if (f != null) {
        writer.writeMessage(2, f, proto.EvaluateResponse.serializeBinaryToWriter);
      }
      f = message.getPrompt();
      if (f != null) {
        writer.writeMessage(3, f, proto.PromptRequest.serializeBinaryToWriter);
      }
      f = message.getCache();
      if (f != null) {
        writer.writeMessage(4, f, proto.CacheRequest.serializeBinaryToWriter);
      }
    };
    proto.ToClient.prototype.getOutput = function() {
      return jspb2.Message.getWrapperField(this, proto.Output, 1);
    };
    proto.ToClient.prototype.setOutput = function(value) {
      return jspb2.Message.setOneofWrapperField(this, 1, proto.ToClient.oneofGroups_[0], value);
    };
    proto.ToClient.prototype.clearOutput = function() {
      return this.setOutput(void 0);
    };
    proto.ToClient.prototype.hasOutput = function() {
      return jspb2.Message.getField(this, 1) != null;
    };
    proto.ToClient.prototype.getEvaluate = function() {
      return jspb2.Message.getWrapperField(this, proto.EvaluateResponse, 2);
    };
    proto.ToClient.prototype.setEvaluate = function(value) {
      return jspb2.Message.setOneofWrapperField(this, 2, proto.ToClient.oneofGroups_[0], value);
    };
    proto.ToClient.prototype.clearEvaluate = function() {
      return this.setEvaluate(void 0);
    };
    proto.ToClient.prototype.hasEvaluate = function() {
      return jspb2.Message.getField(this, 2) != null;
    };
    proto.ToClient.prototype.getPrompt = function() {
      return jspb2.Message.getWrapperField(this, proto.PromptRequest, 3);
    };
    proto.ToClient.prototype.setPrompt = function(value) {
      return jspb2.Message.setOneofWrapperField(this, 3, proto.ToClient.oneofGroups_[0], value);
    };
    proto.ToClient.prototype.clearPrompt = function() {
      return this.setPrompt(void 0);
    };
    proto.ToClient.prototype.hasPrompt = function() {
      return jspb2.Message.getField(this, 3) != null;
    };
    proto.ToClient.prototype.getCache = function() {
      return jspb2.Message.getWrapperField(this, proto.CacheRequest, 4);
    };
    proto.ToClient.prototype.setCache = function(value) {
      return jspb2.Message.setOneofWrapperField(this, 4, proto.ToClient.oneofGroups_[0], value);
    };
    proto.ToClient.prototype.clearCache = function() {
      return this.setCache(void 0);
    };
    proto.ToClient.prototype.hasCache = function() {
      return jspb2.Message.getField(this, 4) != null;
    };
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.EvaluateRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.EvaluateRequest.toObject(opt_includeInstance, this);
      };
      proto.EvaluateRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          code: jspb2.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.EvaluateRequest.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.EvaluateRequest();
      return proto.EvaluateRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.EvaluateRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setCode(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.EvaluateRequest.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.EvaluateRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.EvaluateRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getCode();
      if (f.length > 0) {
        writer.writeString(1, f);
      }
    };
    proto.EvaluateRequest.prototype.getCode = function() {
      return jspb2.Message.getFieldWithDefault(this, 1, "");
    };
    proto.EvaluateRequest.prototype.setCode = function(value) {
      return jspb2.Message.setProto3StringField(this, 1, value);
    };
    proto.EvaluateResponse.repeatedFields_ = [2];
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.EvaluateResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.EvaluateResponse.toObject(opt_includeInstance, this);
      };
      proto.EvaluateResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          duration: (f = msg.getDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
          errorsList: jspb2.Message.toObjectList(msg.getErrorsList(), proto.EvaluateError.toObject, includeInstance)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.EvaluateResponse.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.EvaluateResponse();
      return proto.EvaluateResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.EvaluateResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new google_protobuf_duration_pb.Duration();
            reader.readMessage(value, google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
            msg.setDuration(value);
            break;
          case 2:
            var value = new proto.EvaluateError();
            reader.readMessage(value, proto.EvaluateError.deserializeBinaryFromReader);
            msg.addErrors(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.EvaluateResponse.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.EvaluateResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.EvaluateResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getDuration();
      if (f != null) {
        writer.writeMessage(1, f, google_protobuf_duration_pb.Duration.serializeBinaryToWriter);
      }
      f = message.getErrorsList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(2, f, proto.EvaluateError.serializeBinaryToWriter);
      }
    };
    proto.EvaluateResponse.prototype.getDuration = function() {
      return jspb2.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1);
    };
    proto.EvaluateResponse.prototype.setDuration = function(value) {
      return jspb2.Message.setWrapperField(this, 1, value);
    };
    proto.EvaluateResponse.prototype.clearDuration = function() {
      return this.setDuration(void 0);
    };
    proto.EvaluateResponse.prototype.hasDuration = function() {
      return jspb2.Message.getField(this, 1) != null;
    };
    proto.EvaluateResponse.prototype.getErrorsList = function() {
      return jspb2.Message.getRepeatedWrapperField(this, proto.EvaluateError, 2);
    };
    proto.EvaluateResponse.prototype.setErrorsList = function(value) {
      return jspb2.Message.setRepeatedWrapperField(this, 2, value);
    };
    proto.EvaluateResponse.prototype.addErrors = function(opt_value, opt_index) {
      return jspb2.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.EvaluateError, opt_index);
    };
    proto.EvaluateResponse.prototype.clearErrorsList = function() {
      return this.setErrorsList([]);
    };
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.EvaluateError.prototype.toObject = function(opt_includeInstance) {
        return proto.EvaluateError.toObject(opt_includeInstance, this);
      };
      proto.EvaluateError.toObject = function(includeInstance, msg) {
        var f, obj = {
          message: jspb2.Message.getFieldWithDefault(msg, 1, ""),
          stack: jspb2.Message.getFieldWithDefault(msg, 2, ""),
          position: (f = msg.getPosition()) && proto.LineAndColumn.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.EvaluateError.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.EvaluateError();
      return proto.EvaluateError.deserializeBinaryFromReader(msg, reader);
    };
    proto.EvaluateError.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setMessage(value);
            break;
          case 2:
            var value = reader.readString();
            msg.setStack(value);
            break;
          case 3:
            var value = new proto.LineAndColumn();
            reader.readMessage(value, proto.LineAndColumn.deserializeBinaryFromReader);
            msg.setPosition(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.EvaluateError.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.EvaluateError.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.EvaluateError.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getMessage();
      if (f.length > 0) {
        writer.writeString(1, f);
      }
      f = jspb2.Message.getField(message, 2);
      if (f != null) {
        writer.writeString(2, f);
      }
      f = message.getPosition();
      if (f != null) {
        writer.writeMessage(3, f, proto.LineAndColumn.serializeBinaryToWriter);
      }
    };
    proto.EvaluateError.prototype.getMessage = function() {
      return jspb2.Message.getFieldWithDefault(this, 1, "");
    };
    proto.EvaluateError.prototype.setMessage = function(value) {
      return jspb2.Message.setProto3StringField(this, 1, value);
    };
    proto.EvaluateError.prototype.getStack = function() {
      return jspb2.Message.getFieldWithDefault(this, 2, "");
    };
    proto.EvaluateError.prototype.setStack = function(value) {
      return jspb2.Message.setField(this, 2, value);
    };
    proto.EvaluateError.prototype.clearStack = function() {
      return jspb2.Message.setField(this, 2, void 0);
    };
    proto.EvaluateError.prototype.hasStack = function() {
      return jspb2.Message.getField(this, 2) != null;
    };
    proto.EvaluateError.prototype.getPosition = function() {
      return jspb2.Message.getWrapperField(this, proto.LineAndColumn, 3);
    };
    proto.EvaluateError.prototype.setPosition = function(value) {
      return jspb2.Message.setWrapperField(this, 3, value);
    };
    proto.EvaluateError.prototype.clearPosition = function() {
      return this.setPosition(void 0);
    };
    proto.EvaluateError.prototype.hasPosition = function() {
      return jspb2.Message.getField(this, 3) != null;
    };
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.LineAndColumn.prototype.toObject = function(opt_includeInstance) {
        return proto.LineAndColumn.toObject(opt_includeInstance, this);
      };
      proto.LineAndColumn.toObject = function(includeInstance, msg) {
        var f, obj = {
          line: jspb2.Message.getFieldWithDefault(msg, 1, 0),
          column: jspb2.Message.getFieldWithDefault(msg, 2, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.LineAndColumn.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.LineAndColumn();
      return proto.LineAndColumn.deserializeBinaryFromReader(msg, reader);
    };
    proto.LineAndColumn.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readInt32();
            msg.setLine(value);
            break;
          case 2:
            var value = reader.readInt32();
            msg.setColumn(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.LineAndColumn.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.LineAndColumn.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.LineAndColumn.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getLine();
      if (f !== 0) {
        writer.writeInt32(1, f);
      }
      f = message.getColumn();
      if (f !== 0) {
        writer.writeInt32(2, f);
      }
    };
    proto.LineAndColumn.prototype.getLine = function() {
      return jspb2.Message.getFieldWithDefault(this, 1, 0);
    };
    proto.LineAndColumn.prototype.setLine = function(value) {
      return jspb2.Message.setProto3IntField(this, 1, value);
    };
    proto.LineAndColumn.prototype.getColumn = function() {
      return jspb2.Message.getFieldWithDefault(this, 2, 0);
    };
    proto.LineAndColumn.prototype.setColumn = function(value) {
      return jspb2.Message.setProto3IntField(this, 2, value);
    };
    proto.Output.repeatedFields_ = [1];
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.Output.prototype.toObject = function(opt_includeInstance) {
        return proto.Output.toObject(opt_includeInstance, this);
      };
      proto.Output.toObject = function(includeInstance, msg) {
        var f, obj = {
          contentList: jspb2.Message.toObjectList(msg.getContentList(), proto.Content.toObject, includeInstance)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.Output.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.Output();
      return proto.Output.deserializeBinaryFromReader(msg, reader);
    };
    proto.Output.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.Content();
            reader.readMessage(value, proto.Content.deserializeBinaryFromReader);
            msg.addContent(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.Output.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.Output.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.Output.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getContentList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(1, f, proto.Content.serializeBinaryToWriter);
      }
    };
    proto.Output.prototype.getContentList = function() {
      return jspb2.Message.getRepeatedWrapperField(this, proto.Content, 1);
    };
    proto.Output.prototype.setContentList = function(value) {
      return jspb2.Message.setRepeatedWrapperField(this, 1, value);
    };
    proto.Output.prototype.addContent = function(opt_value, opt_index) {
      return jspb2.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Content, opt_index);
    };
    proto.Output.prototype.clearContentList = function() {
      return this.setContentList([]);
    };
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.Content.prototype.toObject = function(opt_includeInstance) {
        return proto.Content.toObject(opt_includeInstance, this);
      };
      proto.Content.toObject = function(includeInstance, msg) {
        var f, obj = {
          mime: jspb2.Message.getFieldWithDefault(msg, 1, ""),
          value: msg.getValue_asB64()
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.Content.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.Content();
      return proto.Content.deserializeBinaryFromReader(msg, reader);
    };
    proto.Content.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setMime(value);
            break;
          case 2:
            var value = reader.readBytes();
            msg.setValue(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.Content.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.Content.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.Content.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getMime();
      if (f.length > 0) {
        writer.writeString(1, f);
      }
      f = message.getValue_asU8();
      if (f.length > 0) {
        writer.writeBytes(2, f);
      }
    };
    proto.Content.prototype.getMime = function() {
      return jspb2.Message.getFieldWithDefault(this, 1, "");
    };
    proto.Content.prototype.setMime = function(value) {
      return jspb2.Message.setProto3StringField(this, 1, value);
    };
    proto.Content.prototype.getValue = function() {
      return jspb2.Message.getFieldWithDefault(this, 2, "");
    };
    proto.Content.prototype.getValue_asB64 = function() {
      return jspb2.Message.bytesAsB64(this.getValue());
    };
    proto.Content.prototype.getValue_asU8 = function() {
      return jspb2.Message.bytesAsU8(this.getValue());
    };
    proto.Content.prototype.setValue = function(value) {
      return jspb2.Message.setProto3BytesField(this, 2, value);
    };
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.PromptRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.PromptRequest.toObject(opt_includeInstance, this);
      };
      proto.PromptRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          prompt: jspb2.Message.getFieldWithDefault(msg, 1, ""),
          placeholder: jspb2.Message.getFieldWithDefault(msg, 2, ""),
          password: jspb2.Message.getBooleanFieldWithDefault(msg, 3, false)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.PromptRequest.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.PromptRequest();
      return proto.PromptRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.PromptRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setPrompt(value);
            break;
          case 2:
            var value = reader.readString();
            msg.setPlaceholder(value);
            break;
          case 3:
            var value = reader.readBool();
            msg.setPassword(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.PromptRequest.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.PromptRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.PromptRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = jspb2.Message.getField(message, 1);
      if (f != null) {
        writer.writeString(1, f);
      }
      f = jspb2.Message.getField(message, 2);
      if (f != null) {
        writer.writeString(2, f);
      }
      f = message.getPassword();
      if (f) {
        writer.writeBool(3, f);
      }
    };
    proto.PromptRequest.prototype.getPrompt = function() {
      return jspb2.Message.getFieldWithDefault(this, 1, "");
    };
    proto.PromptRequest.prototype.setPrompt = function(value) {
      return jspb2.Message.setField(this, 1, value);
    };
    proto.PromptRequest.prototype.clearPrompt = function() {
      return jspb2.Message.setField(this, 1, void 0);
    };
    proto.PromptRequest.prototype.hasPrompt = function() {
      return jspb2.Message.getField(this, 1) != null;
    };
    proto.PromptRequest.prototype.getPlaceholder = function() {
      return jspb2.Message.getFieldWithDefault(this, 2, "");
    };
    proto.PromptRequest.prototype.setPlaceholder = function(value) {
      return jspb2.Message.setField(this, 2, value);
    };
    proto.PromptRequest.prototype.clearPlaceholder = function() {
      return jspb2.Message.setField(this, 2, void 0);
    };
    proto.PromptRequest.prototype.hasPlaceholder = function() {
      return jspb2.Message.getField(this, 2) != null;
    };
    proto.PromptRequest.prototype.getPassword = function() {
      return jspb2.Message.getBooleanFieldWithDefault(this, 3, false);
    };
    proto.PromptRequest.prototype.setPassword = function(value) {
      return jspb2.Message.setProto3BooleanField(this, 3, value);
    };
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.PromptResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.PromptResponse.toObject(opt_includeInstance, this);
      };
      proto.PromptResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          value: jspb2.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.PromptResponse.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.PromptResponse();
      return proto.PromptResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.PromptResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setValue(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.PromptResponse.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.PromptResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.PromptResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = jspb2.Message.getField(message, 1);
      if (f != null) {
        writer.writeString(1, f);
      }
    };
    proto.PromptResponse.prototype.getValue = function() {
      return jspb2.Message.getFieldWithDefault(this, 1, "");
    };
    proto.PromptResponse.prototype.setValue = function(value) {
      return jspb2.Message.setField(this, 1, value);
    };
    proto.PromptResponse.prototype.clearValue = function() {
      return jspb2.Message.setField(this, 1, void 0);
    };
    proto.PromptResponse.prototype.hasValue = function() {
      return jspb2.Message.getField(this, 1) != null;
    };
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.CacheRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.CacheRequest.toObject(opt_includeInstance, this);
      };
      proto.CacheRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          key: jspb2.Message.getFieldWithDefault(msg, 1, ""),
          write: jspb2.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.CacheRequest.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.CacheRequest();
      return proto.CacheRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.CacheRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setKey(value);
            break;
          case 2:
            var value = reader.readString();
            msg.setWrite(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.CacheRequest.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.CacheRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.CacheRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getKey();
      if (f.length > 0) {
        writer.writeString(1, f);
      }
      f = jspb2.Message.getField(message, 2);
      if (f != null) {
        writer.writeString(2, f);
      }
    };
    proto.CacheRequest.prototype.getKey = function() {
      return jspb2.Message.getFieldWithDefault(this, 1, "");
    };
    proto.CacheRequest.prototype.setKey = function(value) {
      return jspb2.Message.setProto3StringField(this, 1, value);
    };
    proto.CacheRequest.prototype.getWrite = function() {
      return jspb2.Message.getFieldWithDefault(this, 2, "");
    };
    proto.CacheRequest.prototype.setWrite = function(value) {
      return jspb2.Message.setField(this, 2, value);
    };
    proto.CacheRequest.prototype.clearWrite = function() {
      return jspb2.Message.setField(this, 2, void 0);
    };
    proto.CacheRequest.prototype.hasWrite = function() {
      return jspb2.Message.getField(this, 2) != null;
    };
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.CacheResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.CacheResponse.toObject(opt_includeInstance, this);
      };
      proto.CacheResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          value: jspb2.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.CacheResponse.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.CacheResponse();
      return proto.CacheResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.CacheResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setValue(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.CacheResponse.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.CacheResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.CacheResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = jspb2.Message.getField(message, 1);
      if (f != null) {
        writer.writeString(1, f);
      }
    };
    proto.CacheResponse.prototype.getValue = function() {
      return jspb2.Message.getFieldWithDefault(this, 1, "");
    };
    proto.CacheResponse.prototype.setValue = function(value) {
      return jspb2.Message.setField(this, 1, value);
    };
    proto.CacheResponse.prototype.clearValue = function() {
      return jspb2.Message.setField(this, 1, void 0);
    };
    proto.CacheResponse.prototype.hasValue = function() {
      return jspb2.Message.getField(this, 1) != null;
    };
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.CancelEvaluate.prototype.toObject = function(opt_includeInstance) {
        return proto.CancelEvaluate.toObject(opt_includeInstance, this);
      };
      proto.CancelEvaluate.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.CancelEvaluate.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.CancelEvaluate();
      return proto.CancelEvaluate.deserializeBinaryFromReader(msg, reader);
    };
    proto.CancelEvaluate.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.CancelEvaluate.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.CancelEvaluate.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.CancelEvaluate.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    goog2.object.extend(exports2, proto);
  }
});

// src/proto/kernel_grpc_pb.js
var require_kernel_grpc_pb = __commonJS({
  "src/proto/kernel_grpc_pb.js"(exports2) {
    "use strict";
    var grpc2 = require_src();
    var kernel_pb = require_kernel_pb();
    var google_protobuf_duration_pb = require_duration_pb();
    function serialize_ToClient(arg) {
      if (!(arg instanceof kernel_pb.ToClient)) {
        throw new Error("Expected argument of type ToClient");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_ToClient(buffer_arg) {
      return kernel_pb.ToClient.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_ToServer(arg) {
      if (!(arg instanceof kernel_pb.ToServer)) {
        throw new Error("Expected argument of type ToServer");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_ToServer(buffer_arg) {
      return kernel_pb.ToServer.deserializeBinary(new Uint8Array(buffer_arg));
    }
    var KernelService = exports2.KernelService = {
      session: {
        path: "/Kernel/Session",
        requestStream: true,
        responseStream: true,
        requestType: kernel_pb.ToServer,
        responseType: kernel_pb.ToClient,
        requestSerialize: serialize_ToServer,
        requestDeserialize: deserialize_ToServer,
        responseSerialize: serialize_ToClient,
        responseDeserialize: deserialize_ToClient
      }
    };
    exports2.KernelClient = grpc2.makeGenericClientConstructor(KernelService);
  }
});

// src/extension/main.ts
__export(exports, {
  activate: () => activate,
  deactivate: () => deactivate,
  rawToNotebookCellData: () => rawToNotebookCellData
});
var vscode5 = __toModule(require("vscode"));

// src/extension/kernel.ts
var import_kernel_grpc_pb = __toModule(require_kernel_grpc_pb());
var import_kernel_pb = __toModule(require_kernel_pb());

// src/extension/config.ts
var vscode = require("vscode");
function getConfig() {
  return vscode.workspace.getConfiguration("goNotebookKernel");
}

// src/extension/tools.ts
var import_fs = __toModule(require("fs"));
var vscode2 = require("vscode");
var path = require("path");
var proc = require("child_process");
var { F_OK, X_OK } = require("fs").constants;
function canAccess(path2, mode) {
  return __async(this, null, function* () {
    try {
      yield import_fs.promises.access(path2, mode);
      return true;
    } catch (error) {
      return false;
    }
  });
}
function assertCanAccess(path2, mode, err) {
  return canAccess(path2, mode).then((x) => x || Promise.reject(err));
}
function isCmd(command, ...args) {
  return new Promise((resolve) => {
    const p = proc.spawn(command, args);
    p.on("error", () => resolve(false));
    p.on("exit", () => resolve(true));
  });
}
function readCmd(label, command) {
  return new Promise((resolve, reject) => {
    proc.exec(command, (err, stdout, stderr) => {
      if (!err)
        resolve(stdout + stderr);
      else if (err.signal)
        reject(new Error(`${label} was terminated with signal ${err.signal}`));
      else if (stdout.length + stderr.length)
        reject(new Error(`${label} exited with code ${err.code || 0}:
${stdout + stderr}`));
      else if (err.code != null)
        reject(new Error(`${label} exited with code ${err.code}`));
      else
        reject(new Error(`${label} exited`));
    });
  });
}
function waitForProc(label, proc2, getOutput) {
  return new Promise((resolve, reject) => {
    proc2.on("error", (err) => reject(new Error(`An error occured while executing ${label}: ${err.message}`)));
    proc2.on("exit", (code, signal) => {
      const out = getOutput && getOutput();
      if (signal)
        reject(new Error(`${label} was terminated with signal ${signal}`));
      else if (code === 0)
        resolve(out);
      else if (out && out.length)
        reject(new Error(`${label} exited with code ${code}:
${out}`));
      else
        reject(new Error(`${label} exited with code ${code}`));
    });
  });
}
var GoTool = class {
  constructor(name, module2, version, output) {
    this.name = name;
    this.module = module2;
    this.version = version;
    this.output = output;
  }
  get config() {
    const value = getConfig();
    Object.defineProperty(this, "config", { value });
    return value;
  }
  get goCmd() {
    const value = (() => __async(this, null, function* () {
      let goCmd = this.config.get("go.path");
      if (goCmd) {
        yield assertCanAccess(goCmd, F_OK, new Error(`'${goCmd}' does not exist or cannot be accessed`));
        yield assertCanAccess(goCmd, X_OK, new Error(`'${goCmd}' cannot be executed`));
        return goCmd;
      }
      if (!(yield isCmd("go", "--version")))
        throw new Error(`Cannot find 'go'. Please add 'go' to the PATH or configure 'goNotebookKernel.go.path'.`);
      return "go";
    }))();
    Object.defineProperty(this, "goCmd", { value });
    return value;
  }
  get path() {
    const value = (() => __async(this, null, function* () {
      const kernelPath = this.config.get("kernel.path");
      if (kernelPath) {
        yield assertCanAccess(kernelPath, F_OK, new Error(`'${kernelPath}' does not exist or cannot be accessed`));
        yield assertCanAccess(kernelPath, X_OK, new Error(`'${kernelPath}' cannot be executed`));
        return kernelPath;
      }
      const goBin = (yield readCmd("`go env GOBIN`", `${yield this.goCmd} env GOBIN`)).trim();
      const goBinPath = path.join(goBin, this.name);
      if (goBin.length && (yield canAccess(goBinPath, F_OK | X_OK)))
        return goBinPath;
      const goPath = (yield readCmd("`go env GOPATH`", `${yield this.goCmd} env GOPATH`)).trim();
      const goPathPath = path.join(goPath.split(";")[0], "bin", this.name);
      if (goPath.length && (yield canAccess(goPathPath, F_OK | X_OK)))
        return goPathPath;
    }))();
    Object.defineProperty(this, "path", { value });
    return value;
  }
  install(ask) {
    return __async(this, null, function* () {
      var _a, _b, _c;
      const tags = this.config.get("kernel.tags");
      const modVer = `${this.module}@${this.version}`;
      const label = `"go get${tags ? "-tags " + tags : ""} ${modVer}"`;
      if (ask) {
        const sel = yield vscode2.window.showWarningMessage(`${ask}. Run ${label} to install.`, "Install");
        if (sel != "Install")
          return;
      }
      const args = ["get", "-u", modVer];
      if (tags)
        args.splice(1, 0, "-tags", tags);
      (_a = this.output) == null ? void 0 : _a.clear();
      (_b = this.output) == null ? void 0 : _b.append(`Installing kernel: go ${args.join(" ")}

`);
      (_c = this.output) == null ? void 0 : _c.show();
      const env = Object.assign({}, process.env, { GO111MODULE: "on" });
      const p = proc.spawn(yield this.goCmd, args, { env });
      p.stdout.on("data", (b) => {
        var _a2;
        return (_a2 = this.output) == null ? void 0 : _a2.append(b.toString());
      });
      p.stderr.on("data", (b) => {
        var _a2;
        return (_a2 = this.output) == null ? void 0 : _a2.append(b.toString());
      });
      yield waitForProc(label, p);
      const path2 = yield this.path;
      if (path2)
        return path2;
      vscode2.window.showErrorMessage("Failed to install kernel");
    });
  }
  launch(args, installAsk) {
    return __async(this, null, function* () {
      const kernelPath = (yield this.path) || (yield this.install(installAsk));
      if (!kernelPath)
        return;
      return proc.spawn(kernelPath, args);
    });
  }
};

// src/extension/kernel.ts
var vscode3 = require("vscode");
var grpc = require_src();
var _Kernel = class {
  constructor() {
    this.label = "Go Kernel";
    this.id = "go-kernel";
    this.supportedLanguages = ["go"];
    this.sessions = new Map();
    this.cache = new Map();
    this.diagnostics = vscode3.languages.createDiagnosticCollection();
  }
  static get module() {
    return getConfig().get("kernel.module") || "gitlab.com/ethan.reesor/vscode-notebooks/go-kernel/cmd/notebook-kernel";
  }
  static get version() {
    return getConfig().get("kernel.version") || "latest";
  }
  static get output() {
    const value = vscode3.window.createOutputChannel("Go Notebook Kernel");
    Object.defineProperty(this, "output", { value });
    return value;
  }
  static goTool() {
    return new GoTool(this.executable, this.module, this.version, this.output);
  }
  static install(ask = true) {
    return __async(this, null, function* () {
      this.goTool().install(ask ? this.installAsk : void 0);
    });
  }
  static launch() {
    return this.goTool().launch(["tcp", "localhost:"], this.installAsk);
  }
  kill(signal) {
    var _a;
    const sessions = Array.from(this.sessions.values());
    this.sessions.clear();
    for (const session of sessions)
      session.cancel();
    return ((_a = this.proc) == null ? void 0 : _a.kill(signal)) || false;
  }
  interrupt(document2) {
    const session = this.sessions.get(document2.uri);
    if (session)
      session.write(new import_kernel_pb.ToServer().setCancel(new import_kernel_pb.CancelEvaluate()));
  }
  executeCells(doc, cells, ctrl) {
    return __async(this, null, function* () {
      if (!this.kernel) {
        try {
          yield this.launch();
        } catch (error) {
          _Kernel.output.append(error.message);
          vscode3.window.showErrorMessage(error.message);
          return;
        }
      }
      let session = this.sessions.get(doc.uri);
      if (!session) {
        session = this.kernel.session();
        this.sessions.set(doc.uri, session);
      }
      for (const cell of cells) {
        const exec = ctrl.createNotebookCellExecution(cell);
        yield this.execute(session, exec);
      }
    });
  }
  stopSession(uri) {
    const session = this.sessions.get(uri);
    if (!session)
      return;
    session.cancel();
    this.sessions.delete(uri);
  }
  launch() {
    return __async(this, null, function* () {
      if (this.connectTo) {
        this.kernel = new import_kernel_grpc_pb.KernelClient(`localhost:${this.connectTo}`, grpc.credentials.createInsecure());
        return;
      }
      this.proc = yield _Kernel.launch();
      if (!this.proc)
        return;
      this.proc.stdout.on("data", (b) => _Kernel.output.appendLine(`[Kernel] ${b.toString()}`));
      this.proc.stderr.on("data", (b) => _Kernel.output.appendLine(`[Kernel] ${b.toString()}`));
      this.proc.on("exit", () => {
        this.proc = void 0;
        this.kernel = void 0;
        for (const session of this.sessions.values())
          session.cancel();
        this.sessions.clear();
      });
      const listening = yield Promise.race([
        waitForProc("Kernel", this.proc).then(() => Promise.reject("Kernel exited with code 0")),
        new Promise((resolve) => {
          let s = "";
          this.proc.stdout.on("data", (b) => {
            s += b.toString("utf-8");
            if (s.indexOf("\n") >= 0)
              resolve(s);
          });
        })
      ]);
      const [, port] = /^Listening on .*:(\d+)\n/.exec(listening);
      this.kernel = new import_kernel_grpc_pb.KernelClient(`localhost:${port}`, grpc.credentials.createInsecure());
    });
  }
  execute(session, exec) {
    return __async(this, null, function* () {
      exec.start();
      exec.clearOutput();
      this.diagnostics.set(exec.cell.document.uri, []);
      let resolve;
      const done = new Promise((r, j) => resolve = r);
      const handle = (msg) => __async(this, null, function* () {
        switch (msg.getKindCase()) {
          case import_kernel_pb.ToClient.KindCase.OUTPUT:
            {
              const items = msg.getOutput().getContentList().map((c) => {
                let mime = c.getMime();
                let value = Buffer.from(c.getValue());
                switch (mime) {
                  case "stdout":
                    return vscode3.NotebookCellOutputItem.text(value.toString("utf-8"));
                  case "stderr":
                    return vscode3.NotebookCellOutputItem.stderr(value.toString("utf-8"));
                }
                return new vscode3.NotebookCellOutputItem(value, "application/json");
              });
              exec.appendOutput([new vscode3.NotebookCellOutput(items)]);
            }
            break;
          case import_kernel_pb.ToClient.KindCase.EVALUATE:
            {
              const resp = msg.getEvaluate().toObject();
              const result = {
                success: true
              };
              for (const err of resp.errorsList) {
                result.success = false;
                if (err.position) {
                  const lineNo = err.position.line - 1;
                  const column = err.position.column - 1;
                  const line = exec.cell.document.lineAt(lineNo);
                  this.diagnostics.set(exec.cell.document.uri, [
                    new vscode3.Diagnostic(new vscode3.Range(lineNo, column, lineNo, line.text.length - column), err.message, vscode3.DiagnosticSeverity.Error)
                  ]);
                }
                exec.appendOutput([
                  new vscode3.NotebookCellOutput([
                    vscode3.NotebookCellOutputItem.stderr(err.message)
                  ])
                ]);
              }
              session.off("data", handle);
              resolve(result);
            }
            break;
          case import_kernel_pb.ToClient.KindCase.PROMPT:
            {
              const _a = msg.getPrompt().toObject(), { placeholder } = _a, opts = __objRest(_a, ["placeholder"]);
              const answer = yield vscode3.window.showInputBox(__spreadProps(__spreadValues({}, opts), { placeHolder: placeholder }));
              const resp = new import_kernel_pb.PromptResponse();
              if (answer)
                resp.setValue(answer);
              session.write(new import_kernel_pb.ToServer().setPrompt(resp));
            }
            break;
          case import_kernel_pb.ToClient.KindCase.CACHE:
            {
              let cache = this.cache.get(exec.cell.notebook.uri);
              if (!cache)
                this.cache.set(exec.cell.notebook.uri, cache = {});
              const req2 = msg.getCache().toObject();
              const resp = new import_kernel_pb.CacheResponse();
              if (req2.key in cache)
                resp.setValue(cache[req2.key]);
              if (req2.write)
                cache[req2.key] = req2.write;
              session.write(new import_kernel_pb.ToServer().setCache(resp));
            }
            break;
        }
      });
      session.on("end", () => {
        session.off("data", handle);
        resolve({ success: false });
      });
      session.on("data", handle);
      const req = new import_kernel_pb.ToServer();
      const evalReq = new import_kernel_pb.EvaluateRequest();
      evalReq.setCode(exec.cell.document.getText());
      req.setEvaluate(evalReq);
      session.write(req);
      const { success } = yield done;
      exec.end(success);
    });
  }
};
var Kernel = _Kernel;
Kernel.executable = "notebook-kernel";
Kernel.installAsk = "The Go notebook kernel is not available";

// src/extension/markdownParser.ts
var import_util = __toModule(require("util"));
var vscode4 = __toModule(require("vscode"));
var LANG_IDS = new Map([
  ["bat", "batch"],
  ["js", "javascript"],
  ["ts", "typescript"],
  ["go", "go"]
]);
var LANG_ABBREVS = new Map(Array.from(LANG_IDS.keys()).map((k) => [LANG_IDS.get(k), k]));
function parseCodeBlockStart(line) {
  const match = line.match(/(    |\t)?```(\S*)/);
  return match && {
    indentation: match[1],
    langId: match[2]
  };
}
function isCodeBlockStart(line) {
  return !!parseCodeBlockStart(line);
}
function isCodeBlockEndLine(line) {
  return !!line.match(/^\s*```/);
}
function parseMarkdown(content) {
  const lines = content.split(/\r?\n/g);
  let cells = [];
  let i = 0;
  for (; i < lines.length; ) {
    const leadingWhitespace = i === 0 ? parseWhitespaceLines(true) : "";
    const codeBlockMatch = parseCodeBlockStart(lines[i]);
    if (codeBlockMatch && codeBlockMatch.langId === "output") {
      parseCodeBlock(leadingWhitespace, codeBlockMatch, true);
    } else if (codeBlockMatch) {
      parseCodeBlock(leadingWhitespace, codeBlockMatch);
    } else {
      parseMarkdownParagraph(leadingWhitespace);
    }
  }
  function parseWhitespaceLines(isFirst) {
    let start = i;
    const nextNonWhitespaceLineOffset = lines.slice(start).findIndex((l) => l !== "");
    let end;
    let isLast = false;
    if (nextNonWhitespaceLineOffset < 0) {
      end = lines.length;
      isLast = true;
    } else {
      end = start + nextNonWhitespaceLineOffset;
    }
    i = end;
    const numWhitespaceLines = end - start + (isFirst || isLast ? 0 : 1);
    return "\n".repeat(numWhitespaceLines);
  }
  function parseCodeBlock(leadingWhitespace, codeBlockStart, output = false) {
    const language = LANG_IDS.get(codeBlockStart.langId) || codeBlockStart.langId;
    const startSourceIdx = ++i;
    while (true) {
      const currLine = lines[i];
      if (i >= lines.length) {
        break;
      } else if (isCodeBlockEndLine(currLine)) {
        i++;
        break;
      }
      i++;
    }
    const textEncoder = new import_util.TextEncoder();
    const content2 = lines.slice(startSourceIdx, i - 1).map((line) => line.replace(new RegExp("^" + codeBlockStart.indentation), "")).join("\n");
    const trailingWhitespace = parseWhitespaceLines(false);
    if (output) {
      cells[cells.length - 1].outputs = [{ items: [{ data: textEncoder.encode(content2), mime: "text/plain" }] }];
    } else {
      cells.push({
        language,
        content: content2,
        kind: vscode4.NotebookCellKind.Code,
        leadingWhitespace,
        trailingWhitespace,
        indentation: codeBlockStart.indentation
      });
    }
  }
  function parseMarkdownParagraph(leadingWhitespace) {
    const startSourceIdx = i;
    while (true) {
      if (i >= lines.length) {
        break;
      }
      const currLine = lines[i];
      if (currLine === "" || isCodeBlockStart(currLine)) {
        break;
      }
      i++;
    }
    const content2 = lines.slice(startSourceIdx, i).join("\n");
    const trailingWhitespace = parseWhitespaceLines(false);
    cells.push({
      language: "markdown",
      content: content2,
      kind: vscode4.NotebookCellKind.Markup,
      leadingWhitespace,
      trailingWhitespace
    });
  }
  return cells;
}
var stringDecoder = new import_util.TextDecoder();
function writeCellsToMarkdown(cells) {
  var _a, _b, _c, _d;
  let result = "";
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    if (i === 0) {
      result += (_b = (_a = cell.metadata) == null ? void 0 : _a.leadingWhitespace) != null ? _b : "";
    }
    if (cell.kind === vscode4.NotebookCellKind.Code) {
      let outputParsed = "";
      for (const x of cell.outputs) {
        if (x.items[0].mime === "text/plain" && x.items[0].data.length > 0) {
          outputParsed += stringDecoder.decode(x.items[0].data);
        }
      }
      const indentation = ((_c = cell.metadata) == null ? void 0 : _c.indentation) || "";
      const languageAbbrev = (_d = LANG_ABBREVS.get(cell.languageId)) != null ? _d : cell.languageId;
      const codePrefix = indentation + "```" + languageAbbrev + "\n";
      const contents = cell.value.split(/\r?\n/g).map((line) => indentation + line).join("\n");
      const codeSuffix = "\n" + indentation + "```";
      result += codePrefix + contents + codeSuffix;
      if (outputParsed.length > 0) {
        result += "\n```output\n" + outputParsed;
        if (outputParsed.slice(-1) != "\n") {
          result += "\n";
        }
        result += "```";
      }
    } else {
      result += cell.value;
    }
    result += getBetweenCellsWhitespace(cells, i);
  }
  return result;
}
function getBetweenCellsWhitespace(cells, idx) {
  var _a, _b, _c, _d;
  const thisCell = cells[idx];
  const nextCell = cells[idx + 1];
  if (!nextCell) {
    return (_b = (_a = thisCell.metadata) == null ? void 0 : _a.trailingWhitespace) != null ? _b : "\n";
  }
  const trailing = (_c = thisCell.metadata) == null ? void 0 : _c.trailingWhitespace;
  const leading = (_d = nextCell.metadata) == null ? void 0 : _d.leadingWhitespace;
  if (typeof trailing === "string" && typeof leading === "string") {
    return trailing + leading;
  }
  const combined = (trailing != null ? trailing : "") + (leading != null ? leading : "");
  if (!combined || combined === "\n") {
    return "\n\n";
  }
  return combined;
}

// src/extension/main.ts
var kernel = new Kernel();
function activate(context) {
  const controller = vscode5.notebooks.createNotebookController("go-kernel", "markdown-notebook", "Go Kernel");
  controller.supportedLanguages = ["go"];
  controller.executeHandler = (cells, doc, ctrl) => kernel.executeCells(doc, cells, ctrl);
  controller.interruptHandler = (doc) => kernel.interrupt(doc);
  context.subscriptions.push(vscode5.commands.registerCommand("goNotebookKernel.kernel.restart", () => {
    kernel.kill("SIGTERM");
  }));
  context.subscriptions.push(vscode5.commands.registerCommand("goNotebookKernel.kernel.rebuild", () => __async(this, null, function* () {
    yield Kernel.install(false);
  })));
  context.subscriptions.push(vscode5.commands.registerCommand("goNotebookKernel.kernel.stopSession", () => __async(this, null, function* () {
    var _a, _b;
    const uri = (_b = (_a = vscode5.window.activeTextEditor) == null ? void 0 : _a.document) == null ? void 0 : _b.uri;
    if (uri)
      kernel.stopSession(uri);
  })));
  context.subscriptions.push(vscode5.workspace.registerNotebookSerializer("markdown-notebook", new MarkdownProvider(), {
    transientOutputs: false,
    transientCellMetadata: {
      inputCollapsed: true,
      outputCollapsed: true
    }
  }));
}
function deactivate() {
  kernel.kill("SIGKILL");
}
var MarkdownProvider = class {
  deserializeNotebook(data, _token) {
    const content = Buffer.from(data).toString("utf8");
    const cellRawData = parseMarkdown(content);
    const cells = cellRawData.map(rawToNotebookCellData);
    return {
      cells
    };
  }
  serializeNotebook(data, _token) {
    const stringOutput = writeCellsToMarkdown(data.cells);
    return Buffer.from(stringOutput);
  }
};
function rawToNotebookCellData(data) {
  return {
    kind: data.kind,
    languageId: data.language,
    metadata: { leadingWhitespace: data.leadingWhitespace, trailingWhitespace: data.trailingWhitespace, indentation: data.indentation },
    outputs: data.outputs || [],
    value: data.content
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate,
  rawToNotebookCellData
});
//# sourceMappingURL=extension.js.map
