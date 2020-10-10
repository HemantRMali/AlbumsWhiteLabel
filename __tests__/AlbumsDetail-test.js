import 'react-native';
import React from 'react';
import AlbumsDetail from '../src/screens/AlbumsDetail';
import renderer from 'react-test-renderer';
it('renders correctly', () => {
  const tree = renderer.create(<AlbumsDetail />).toJSON();
  expect(tree).toMatchSnapshot();
});
