import 'react-native';
import React from 'react';
import AlbumList from '../src/screens/AlbumList';
import renderer from 'react-test-renderer';
it('renders correctly', () => {
  const tree = renderer.create(<AlbumList />).toJSON();
  expect(tree).toMatchSnapshot();
});
