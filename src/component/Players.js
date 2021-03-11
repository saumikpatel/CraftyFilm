import { React, Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import NavBar from "./Navbar";

import Store from "../store";





const Players = () => {
var store = Store.getProductList();
  const [teams, setTeams] = useState(store);
  const [isSearching, setIsSearching] = useState(false);
  const [filteredData, setFiltereddata] = useState();
  console.log(teams);

  const search = (filter) => {
    console.log(filter);
    var trimmedfilter = filter.trim();
    if (
      trimmedfilter.trim() === "" ||
      trimmedfilter === null ||
      trimmedfilter === undefined
    ) {
      setTeams(teams);
      setIsSearching(false);
    }

    var filterData = [];
    for (var i = 0; i < teams.length; i++) {
      for (var j = 0; j < teams[i].players.length; j++) {
        if (
          teams[i].players[j]
            .toLowerCase()
            .startsWith(filter.toLowerCase().trim())
        ) {
          filterData.push({
            name: teams[i].name,
            players: [teams[i].players[j]],
          });
        }
      }
    }

    setFiltereddata(filterData);
    setIsSearching(true);
  };

  if (!isSearching) {
    return (
      <Fragment>
        <NavBar></NavBar>
        <Form.Group>
          <Form.Control
            onChange={(e) => {
              search(e.target.value);
            }}
            type="text"
            placeholder="Type Here to search player"
          />
        </Form.Group>

        <table className="table mt-5 text-center">
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Team Name</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) =>
              team.players.map((player, key) => (
                <tr key={key}>
                  <td>{player}</td>
                  <td>{team.name}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <NavBar></NavBar>
        <Form.Group>
          <Form.Control
            onChange={(e) => {
              search(e.target.value);
            }}
            type="text"
            placeholder="Type Here to search player"
          />
        </Form.Group>

        <table className="table mt-5 text-center">
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Team Name</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((team, index) =>
              team.players.map((player, key) => (
                <tr key={index}>
                  <td>{player}</td>
                  <td>{team.name}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </Fragment>
    );
  }
};

export default Players;
