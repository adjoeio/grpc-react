var PROTO_PATH = __dirname + "/greeting.proto";

var assert = require("assert");
var async = require("async");
var _ = require("lodash");
var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
var process = require("process");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
var greeting = protoDescriptor.greeting;

/**
 * @param {!Object} call
 * @param {function():?} callback
 */
function doSayHello(call, callback) {
  callback(null, { message: "Hello " + call.request.name + "!" });
}

/**
 * @return {!Object} gRPC server
 */
function getServer() {
  var server = new grpc.Server();
  server.addService(greeting.Greeter.service, {
    greet: doSayHello,
  });
  return server;
}

if (require.main === module) {
  var server = getServer();
  console.log("Server started");
  server.bindAsync(
    "0.0.0.0:50051",
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      assert.ifError(err);
      server.start();
    }
  );
  process.on("SIGTERM", () => {
    server.close(() => {
      console.log("Server terminated");
    });
  });
}
