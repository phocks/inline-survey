import React from 'react';
import renderer from 'react-test-renderer';

import Result from '.';

describe('Result', () => {
  test('It renders', () => {
    const component = renderer.create(<Result />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
