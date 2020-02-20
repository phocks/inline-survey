import React from 'react';
import renderer from 'react-test-renderer';

import AnimatedIcons from '.';

describe('AnimatedIcons', () => {
  test('It renders', () => {
    const component = renderer.create(<AnimatedIcons />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
