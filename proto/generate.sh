npm install -g @bufbuild/buf @protobuf-ts/plugin ts-proto
npx buf generate --path ./zitadel --template buf.client.gen.yaml
npx buf generate --path ./zitadel --template buf.server.gen.yaml