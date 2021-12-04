import Button from "@restart/ui/esm/Button";
import { Card } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="card">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          className="cardimg"
          variant="top"
          src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v535batch2-mynt-43.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=9f602de67a347b7c50ef8eeac3835189/100px180"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
