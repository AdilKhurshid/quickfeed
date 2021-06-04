// source: kit/score/score.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.score.BuildInfo', null, global);
goog.exportSymbol('proto.score.Results', null, global);
goog.exportSymbol('proto.score.Score', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.score.Score = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.score.Score, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.score.Score.displayName = 'proto.score.Score';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.score.Results = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.score.Results.repeatedFields_, null);
};
goog.inherits(proto.score.Results, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.score.Results.displayName = 'proto.score.Results';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.score.BuildInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.score.BuildInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.score.BuildInfo.displayName = 'proto.score.BuildInfo';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.score.Score.prototype.toObject = function(opt_includeInstance) {
  return proto.score.Score.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.score.Score} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.score.Score.toObject = function(includeInstance, msg) {
  var f, obj = {
    secret: jspb.Message.getFieldWithDefault(msg, 1, ""),
    testname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    score: jspb.Message.getFieldWithDefault(msg, 3, 0),
    maxscore: jspb.Message.getFieldWithDefault(msg, 4, 0),
    weight: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.score.Score}
 */
proto.score.Score.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.score.Score;
  return proto.score.Score.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.score.Score} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.score.Score}
 */
proto.score.Score.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecret(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTestname(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScore(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxscore(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.score.Score.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.score.Score.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.score.Score} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.score.Score.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecret();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTestname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getScore();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getMaxscore();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getWeight();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string Secret = 1;
 * @return {string}
 */
proto.score.Score.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.score.Score} returns this
 */
proto.score.Score.prototype.setSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string TestName = 2;
 * @return {string}
 */
proto.score.Score.prototype.getTestname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.score.Score} returns this
 */
proto.score.Score.prototype.setTestname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Score = 3;
 * @return {number}
 */
proto.score.Score.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.score.Score} returns this
 */
proto.score.Score.prototype.setScore = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 MaxScore = 4;
 * @return {number}
 */
proto.score.Score.prototype.getMaxscore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.score.Score} returns this
 */
proto.score.Score.prototype.setMaxscore = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 Weight = 5;
 * @return {number}
 */
proto.score.Score.prototype.getWeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.score.Score} returns this
 */
proto.score.Score.prototype.setWeight = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.score.Results.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.score.Results.prototype.toObject = function(opt_includeInstance) {
  return proto.score.Results.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.score.Results} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.score.Results.toObject = function(includeInstance, msg) {
  var f, obj = {
    buildinfo: (f = msg.getBuildinfo()) && proto.score.BuildInfo.toObject(includeInstance, f),
    testnamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    scoremapMap: (f = msg.getScoremapMap()) ? f.toObject(includeInstance, proto.score.Score.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.score.Results}
 */
proto.score.Results.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.score.Results;
  return proto.score.Results.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.score.Results} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.score.Results}
 */
proto.score.Results.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.score.BuildInfo;
      reader.readMessage(value,proto.score.BuildInfo.deserializeBinaryFromReader);
      msg.setBuildinfo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTestnames(value);
      break;
    case 3:
      var value = msg.getScoremapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.score.Score.deserializeBinaryFromReader, "", new proto.score.Score());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.score.Results.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.score.Results.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.score.Results} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.score.Results.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuildinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.score.BuildInfo.serializeBinaryToWriter
    );
  }
  f = message.getTestnamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getScoremapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.score.Score.serializeBinaryToWriter);
  }
};


/**
 * optional BuildInfo BuildInfo = 1;
 * @return {?proto.score.BuildInfo}
 */
proto.score.Results.prototype.getBuildinfo = function() {
  return /** @type{?proto.score.BuildInfo} */ (
    jspb.Message.getWrapperField(this, proto.score.BuildInfo, 1));
};


/**
 * @param {?proto.score.BuildInfo|undefined} value
 * @return {!proto.score.Results} returns this
*/
proto.score.Results.prototype.setBuildinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.score.Results} returns this
 */
proto.score.Results.prototype.clearBuildinfo = function() {
  return this.setBuildinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.score.Results.prototype.hasBuildinfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string TestNames = 2;
 * @return {!Array<string>}
 */
proto.score.Results.prototype.getTestnamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.score.Results} returns this
 */
proto.score.Results.prototype.setTestnamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.score.Results} returns this
 */
proto.score.Results.prototype.addTestnames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.score.Results} returns this
 */
proto.score.Results.prototype.clearTestnamesList = function() {
  return this.setTestnamesList([]);
};


/**
 * map<string, Score> ScoreMap = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.score.Score>}
 */
proto.score.Results.prototype.getScoremapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.score.Score>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.score.Score));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.score.Results} returns this
 */
proto.score.Results.prototype.clearScoremapMap = function() {
  this.getScoremapMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.score.BuildInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.score.BuildInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.score.BuildInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.score.BuildInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    buildid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    builddate: jspb.Message.getFieldWithDefault(msg, 2, ""),
    buildlog: jspb.Message.getFieldWithDefault(msg, 3, ""),
    exectime: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.score.BuildInfo}
 */
proto.score.BuildInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.score.BuildInfo;
  return proto.score.BuildInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.score.BuildInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.score.BuildInfo}
 */
proto.score.BuildInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBuildid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuilddate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuildlog(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExectime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.score.BuildInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.score.BuildInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.score.BuildInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.score.BuildInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuildid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getBuilddate();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBuildlog();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExectime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 BuildID = 1;
 * @return {number}
 */
proto.score.BuildInfo.prototype.getBuildid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.score.BuildInfo} returns this
 */
proto.score.BuildInfo.prototype.setBuildid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string BuildDate = 2;
 * @return {string}
 */
proto.score.BuildInfo.prototype.getBuilddate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.score.BuildInfo} returns this
 */
proto.score.BuildInfo.prototype.setBuilddate = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string BuildLog = 3;
 * @return {string}
 */
proto.score.BuildInfo.prototype.getBuildlog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.score.BuildInfo} returns this
 */
proto.score.BuildInfo.prototype.setBuildlog = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 ExecTime = 4;
 * @return {number}
 */
proto.score.BuildInfo.prototype.getExectime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.score.BuildInfo} returns this
 */
proto.score.BuildInfo.prototype.setExectime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


goog.object.extend(exports, proto.score);
