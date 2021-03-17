import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Card } from './Card';
import store from "../../../../store";
import {Provider} from "react-redux";

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders card with name', () => {
  act(() => {
      render(<Provider store={store}><BrowserRouter><Card name="name" /></BrowserRouter></Provider>, container);
  });
  expect(container.textContent).toBe('name');
});
