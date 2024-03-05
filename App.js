import React from 'react';
import ReactDOM from 'react-dom/client';
const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'hello World'),
    React.createElement('h2', {}, 'Thank you'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'hello World'),
    React.createElement('h2', {}, 'Thank you'),
  ]),
]);

const jsxheading = <h1 className="head"> hello React 🚀 </h1>;
// React Functional component

const HeadingComponent = () => <h1> Hey react I am getting closer</h1>;

const Heading = () => <h1> Hey React I am started learning react 🙏</h1>;

const Body = () => (
  <div>
    <Heading />
    <h1> Welocome to React Components</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Body />);
