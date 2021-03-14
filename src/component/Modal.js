import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";

const MyModal = ({ addTeam, addPlayer, caller, index }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  console.log(caller);
  const [teamName, setTeamName] = useState();
  const [playerName, setplayerName] = useState();
  // const [timer, setTimer] = React.useState(0);
  // const [startTime, setStartTime] = React.useState(0);
  // const [endTime, setEndTime] = React.useState(0);

  const [title, setTitle] = React.useState("Transitioning...");

  const showModal = () => {
    setIsOpen(true);
    caller === "Team" ? setTitle("Add Team") : setTitle("Add Player");
    document.body.style.backgroundColor = "white";
  };

  const hideModal = (e) => {
    if (e) {
      e.preventDefault();
    }
    setIsOpen(false);
  };

  return (
    <>
      <button className="btn btn-success" onClick={showModal} style={{margin :"0px auto", display:"block"}}>
        Add {caller}
      </button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                onChange={(e) => {
                  caller === "Team"
                    ? setTeamName(e.target.value)
                    : setplayerName(e.target.value);
                }}
                type="text"
                placeholder="Enter Team Name"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger" onClick={(e) => hideModal(e)}>
              Cancel
            </button>
            <button
              className="btn btn-success"
              onClick={(e) => {
                hideModal(e);
                caller === "Team"
                  ? addTeam(e, teamName)
                  : addPlayer(e, index, playerName);
              }}
            >
              Save
            </button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default MyModal;
