// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBhtFQWqEbuUUBcMig1OqEsfn_hg9Dcshk",
    authDomain: "alcancia-developers.firebaseapp.com",
    projectId: "alcancia-developers",
    storageBucket: "alcancia-developers.appspot.com",
    messagingSenderId: "8144688564",
    appId: "1:8144688564:web:c5b196c9cfaaacd4f00ee1",
    measurementId: "G-7QXCZK66FV"
  }

};

export const ALCANCIA_SERVER_URL = "http://localhost:8000";
export const EXCHANGE_RATE_URL = "https://v6.exchangerate-api.com/v6/460cee64dbd1d3e35cdfcc74";
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
