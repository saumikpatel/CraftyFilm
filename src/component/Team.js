import React, { Fragment, useState } from "react";
import {
  Accordion,
  Card,
  Button,
  Container,
  Row,
  Col,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import MyModal from "./Modal";
import Store from "../store";
import NavBar from "./Navbar";

const Team = () => {
  // const Teamdata = [
  //     {
  //       id: 1,
  //       name: "Montreal",
  //       players: ["Saumik", "Dhruv"],
  //     },
  //     {
  //       id: 2,
  //       name: "Toronto",
  //       players: ["Rajesh", "Jay"],
  //     },
  //     {
  //       id: 3,
  //       name: "Calgary",
  //       players: ["Sainik", "Davis"],
  //     },
  //   ];

  var store = Store.getProductList();
  const [teams, setTeams] = useState(store);

  const renderAccordion = () => {
    var deleteTeam = (id) => {
      var filtered = teams.filter(function (team) {
        return team.id !== id;
      });
      setTeams(filtered);
      Store.saveProductList(filtered);
    };

    var addPlayer = (e, index, playerName) => {
      e.preventDefault();
      if (
        playerName == undefined ||
        playerName == null ||
        playerName == ""
      ) {
        alert("Please enter player name");
        return;
      }
      var filtered = [...teams];
      var duplicate = false;
      filtered[index].players.forEach((player) => {
        if (player.toLowerCase() === playerName.toLowerCase()) {
          alert("Player name already present");
          duplicate = true;
          return;
        }
      });
      if (!duplicate) {
        filtered[index].players.push(playerName);
        setTeams(filtered);
        Store.saveProductList(filtered);
      }
    };

    var deletePlayer = (index, playername) => {
      var filtered = [...teams];
      filtered[index].players = filtered[index].players.filter(function (
        player
      ) {
        return player !== playername;
      });
      setTeams(filtered);
      Store.saveProductList(filtered);
    };

    var addTeam = async (e, teamName) => {
      e.preventDefault();
      if (teamName == "" || teamName == null || teamName == undefined) {
        alert("Please enter Team Name");
        return;
      }
      var filtered = [...teams];
      var duplicate = false;

      filtered.forEach((team) => {
        if (team.name.toLowerCase() === teamName.toLowerCase()) {
          alert("Team name already present");
          duplicate = true;
          return;
        }
      });
      if (!duplicate) {
        filtered.push({
          name: teamName,
          players: [],
        });
        console.log(filtered);
        setTeams(filtered);
        Store.saveProductList(filtered);
      }
    };

    return (
      <Fragment>
     <NavBar></NavBar>

        <div>
          <Container>
            <MyModal
              teams={teams}
              setTeams={setTeams}
              addTeam={addTeam}
              caller="Team"
            ></MyModal>
            <Row>
              {teams.map((team, index) => (
                <Col sm={12} md={{ span: 12 }} lg={{ span: 8, offset: 2 }}>
                  <Accordion key={index} style={{ marginTop: "20px" }}>
                    <Card>
                      <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey={team}
                      >
                        Team {team.name}
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey={team}>
                        <Card.Body>
                          <table className="table mt-5 text-center" s>
                            <tbody>
                              {team.players.map((player) => (
                                <tr>
                                  <td>{player}</td>

                                  <td>
                                    <button
                                      className="btn btn-danger"
                                      onClick={() =>
                                        deletePlayer(index, player)
                                      }
                                    >
                                      Delete Player
                                    </button>
                                  </td>
                                </tr>
                              ))}
                              <tr>
                                <td>
                                  {" "}
                                  <button
                                    className="btn btn-danger"
                                    onClick={() => deleteTeam(team.id)}
                                  >
                                    Delete {team.name}
                                  </button>
                                </td>
                                <td>
                                  {" "}
                                  <MyModal
                                    teams={teams}
                                    addPlayer={addPlayer}
                                    caller="Player"
                                    index={index}
                                  ></MyModal>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  };

  return renderAccordion();
};

export default Team;
