## Run

This is an example repo to call a grpc service from a react client, inspired by [this this repo](https://github.com/norbjd/grpc-web-nginx-envoy)

To run the stack, just run:

```
docker-compose build
docker-compose up
```

Then, in a browser, open [`http://localhost:8081`](http://localhost:8081) (the client using gRPC-web to call Envoy).

Enter a name in the input and you should see:

```
Hello {entered_name}!
```

I'm using create-react-app with typescript and grpc-web, grpc & proto generated with bellow command in the root:

```
./proto-gen.sh
```
