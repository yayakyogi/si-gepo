import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nimo.app',
  appName: 'nimo-v2',
  webDir: 'dist',
  bundledWebRuntime: false,
,
    android: {
       buildOptions: {
          keystorePath: 'c:\Users\X1\Documents\Android\sigepo.jks',
          keystoreAlias: 'android',
       }
    }
  };

export default config;
