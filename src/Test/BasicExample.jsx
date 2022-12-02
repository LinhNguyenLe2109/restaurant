import Alert from 'react-bootstrap/Alert';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Button from 'react-bootstrap/Button';
function BasicExample() {
  return (
    <>
      <ThemeProvider prefixes={{ btn: 'my-btn' }}>
        <Button variant="primary">My Button</Button>
      </ThemeProvider>{' '}
      <Button bsPrefix="super-btn" variant="primary">
        Super button
      </Button>
    </>
  );
}

export default BasicExample;