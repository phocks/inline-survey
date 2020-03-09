import React from 'react';
import renderer from 'react-test-renderer';

import UpArrow from '.';

describe('UpArrow', () => {
  test('It renders', () => {
    const component = renderer.create(<UpArrow />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
