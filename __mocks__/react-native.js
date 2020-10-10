const rn = require('react-native');
jest.mock('@react-native-community/push-notification-ios', () => {});

jest.mock('react-native-track-player', () => {});
module.exports = rn;
