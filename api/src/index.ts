import Server from './Server';
import { configurations } from './config/configurations';

console.log('Configurations is: ', configurations);

const server = new Server(configurations);

server.bootstrap().run();
