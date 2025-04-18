import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Logger} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: ['error', 'warn', 'log', 'debug', 'verbose'],
    });

    // Occhio eeeeh, in produzione non ci deve sta
    // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    // Load the self-signed certificate
    // const keycloakCert = fs.readFileSync('keycloak-cert.pem');
    // https.globalAgent.options.ca = keycloakCert;

    /* Swagger Configs da spostare
    * https://docs.nestjs.com/openapi/introduction
    */
    const config = new DocumentBuilder()
        .setTitle('nice-timesheet-api')
        .setDescription('APIs for Nice timesheet project')
        .setVersion('1.0')
        .addTag('nice-timesheet')
        .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs/api', app, documentFactory);
    /* .Swagger Configs da spostare */

    await app.listen(process.env.PORT ?? 8091);

    Logger.log('Server started');
}

bootstrap();
