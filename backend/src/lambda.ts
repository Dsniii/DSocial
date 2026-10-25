import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ExpressAdapter } from '@nestjs/platform-express';
import serverless from 'serverless-http';

// Usamos require para evitar conflictos de tipado con Express en entornos serverless
const express = require('express');

let cachedServer: any;

async function bootstrap() {
  if (!cachedServer) {
    const expressApp = express();
    const nestApp = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
    );
    
    nestApp.enableCors();
    await nestApp.init();
    cachedServer = serverless(expressApp);
  }
  return cachedServer;
}

export const handler = async (req: any, res: any, context: any) => {
  const server = await bootstrap();
  return server(req, res, context);
};