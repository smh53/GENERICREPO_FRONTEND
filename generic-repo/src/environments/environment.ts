// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const LOCAL_URL: string = 'http://localhost:5001/api/';

export const environment = {
  production: false,
  evnName: 'dev',
  endPoint: 'http://localhost:5001/',
  sectionUrl: `${LOCAL_URL}Section/`,
  productUrl: `${LOCAL_URL}Product/`
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
