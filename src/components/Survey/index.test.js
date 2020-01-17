import React from 'react';
import renderer from 'react-test-renderer';

import Survey from '.';

describe('Survey', () => {
  test('It renders', () => {
    const component = renderer.create(<Survey />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
