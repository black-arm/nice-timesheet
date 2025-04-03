import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger} from "@nestjs/common";
import * as https from 'https'
import * as fs from "node:fs";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });

  // Occhio eeeeh, in produzione non ci deve sta
  // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  // Load the self-signed certificate
  // const keycloakCert = fs.readFileSync('keycloak-cert.pem');
  // https.globalAgent.options.ca = keycloakCert;

  await app.listen(process.env.PORT ?? 8091);

  Logger.log('Server started');
}

bootstrap();
