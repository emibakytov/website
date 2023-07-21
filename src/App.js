import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <>
    <Button variant="primary">Primary</Button>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://cs5.pikabu.ru/post_img/big/2014/09/12/3/1410489946_1403548524.jpg" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </>
  );
}

export default App;
