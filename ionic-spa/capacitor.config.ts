import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-spa',
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
      allowMixedContent: true
    },
    server: {
      cleartext: true,
      hostname: "localhost"
    }
};

export default config;
