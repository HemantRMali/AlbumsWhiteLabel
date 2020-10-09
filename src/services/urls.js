/**
 *  To bind version of API.
 */
const API_VERSION = 'v1';

/**
 * This is the base url of all the apis.
 */
export function configBaseURL(locale, environment) {
  return environment + `${locale}/rest/` + `${API_VERSION}`;
}
