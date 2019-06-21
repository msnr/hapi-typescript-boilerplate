import * as Hapi from '@hapi/hapi';

const server: Hapi.Server = new Hapi.Server({
  host: 'localhost',
  port: 8000,
});

async function start() {
  await server.start();
}

start();
