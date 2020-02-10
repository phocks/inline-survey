import React from 'react';
import renderer from 'react-test-renderer';

import Chart from '.';

describe('Chart', () => {
  test('It renders', () => {
    const component = renderer.create(<Chart />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
