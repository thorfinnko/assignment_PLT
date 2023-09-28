/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { renderWithProviders } from '../src/utils/test-utils';
import { screen } from '@testing-library/react-native';

it('renders correctly', () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/Cart/i);
  expect(linkElement).toBeDefined();
});
