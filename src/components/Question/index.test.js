import React from 'react';
import renderer from 'react-test-renderer';

import Question from '.';

describe('Question', () => {
  test('It renders', () => {
    const component = renderer.create(<Question />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
