/**
 * To create object of apisouce
 */
import {create} from 'axios';

/**
 * axios object
 */
const API = create({
  timeout: 60000,
});

/**
 * To perform api from class where this function/method is imported,
 * and send back completion in resolve or reject based on api response.
 */
export const request = ({url, httpMethod, params, header = {}}) => {
  // console.log('request:');
  // console.log('url:', url);
  // console.log('httpMethod:', httpMethod);
  // console.log('params:', JSON.stringify(params));
  return new Promise(async (resolve, reject) => {
    try {
      switch (httpMethod) {
        /// GET
        case 'GET':
          await API.get(url, {})
            .then((response) => {
              parseResponse(response).then((parsedResponse) => {
                if (parsedResponse.isSuccess) {
                  resolve({response: parsedResponse.response});
                } else {
                  reject(parsedResponse.message);
                }
              });
            })
            .catch((error) => {
              console.log('error:2', error);
              reject(error.response);
            });
          break;
      }
    } catch (error) {
      console.log('error:1', error);
      reject(error.response);
    }
  });
};

/**
 *  This function is used to parse response and send completion to handle resolve and reject value for parent Promise.
 * We can consider it as a child promise
 * @param {*} response
 */
export const parseResponse = (response) =>
  new Promise((parsedResponse) => {
    // console.log('API response::', response);
    JSON.stringify(parsedResponse);
    let isSuccess = false;
    isSuccess = response.status === 200 ? true : false;
    if (isSuccess) {
      parsedResponse({isSuccess: true, response: response});
    } else {
      let message = 'SOMETHING_WENT_WRONG';
      if (response.data != null && response.data.message) {
        message = response.data.message;
      }
      parsedResponse({isSuccess: false, message: message});
    }
  });
