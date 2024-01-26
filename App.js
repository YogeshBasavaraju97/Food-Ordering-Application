//  <div id= 'parent'>
//    <div id ='child'>
//      <h1></h1>
//        <h2></h2> Adding Siblings
//    </div>
// </div>

const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'hello World'),
    React.createElement('h2', {}, 'Thank you'),
  ])
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
