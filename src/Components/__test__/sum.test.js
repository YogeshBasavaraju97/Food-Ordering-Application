import { Sum } from '../Sum';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../Contact';

describe('Contact Us test cases', () => {
  test('sum function', () => {
    // const sum = (a, b) => {
    //   return a + b;
    // };
    const result = Sum(3, 4);
    expect(result).toBe(7);
  });

  test('should load contact us component', () => {
    render(<Contact />);
    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
  });

  it('should load button inside the contact component', () => {
    render(<Contact />);
    const button = screen.getByRole('button');

    //Assertion
    expect(button).toBeInTheDocument();
  });

  it('should load input name inside the contact component', () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText('Name');

    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  it('should load 2 input box on contact component', () => {
    render(<Contact />);
    //Querying
    const inputBox = screen.getAllByRole('textbox');

    // console.log('inputBoxes.length');

    //Assertion
    expect(inputBox.length).toBe(2);
  });
});
