import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nimo.app',
  appName: 'nimo-v2',
  webDir: 'dist',
  bundledWebRuntime: false,
  android: {
    buildOptions: {
      keystorePath: 'c:UsersX1DocumentsAndroidsigepo.jks',
      keystoreAlias: 'android',
    },
  },
};

export default config;
