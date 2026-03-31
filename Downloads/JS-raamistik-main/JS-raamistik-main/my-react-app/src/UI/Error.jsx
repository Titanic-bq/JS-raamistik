import ReactDOM from "react-dom";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import "./Error.css";

const Backdrop = () => {
  return <div className="backdrop" />;
};

const ModalOverlay = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.onConfirm}>OK</Button>
      </footer>
    </Card>
  );
};

const Error = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onConfirm} />,
        document.getElementById("backdrop-root"),
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root"),
      )}
    </>
  );
};
export default Error;
