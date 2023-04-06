import { CompatServiceDefinition } from "nice-grpc/lib/service-definitions";
import { createChannel, createClientFactory } from "nice-grpc";
import {
  AuthServiceClient,
  AuthServiceDefinition,
} from "./proto/server/zitadel/auth";
import { ZitadelApp } from "./core";
import { authMiddleware } from "./middleware";

const createClient = <Client>(
  definition: CompatServiceDefinition,
  accessToken: string
) => {
  const channel = createChannel(process.env.ZITADEL_API_URL);
  return createClientFactory()
    .use(authMiddleware(accessToken))
    .create(definition, channel) as Client;
};

export async function getAuth(app?: ZitadelApp): Promise<AuthServiceClient> {
  return createClient<AuthServiceClient>(AuthServiceDefinition, "");
}