import { environment as devEnv} from './environment.dev'

export const environment = {
  ...devEnv,
  appTitle : 'Vegans Shoppie',
  production: true
};
