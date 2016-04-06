

var h1 = React.createElement('h1', { className: 'important', key: 'important' }, 'Introduction');
var p = React.createElement('p', { className: 'content', key: 'content' }, 'Welcome to The Iron Yard!');
var reactFragment = [ h1, p ];
var section = React.createElement('section', { className: 'container' }, reactFragment);

var parentElement = document.querySelector('[data-react-app]	');

ReactDOM.render(section, parentElement);