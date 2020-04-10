import React from "react";
import { Link } from "react-router-dom"
import axios from 'axios'

export default class Wizard extends React.Component {
  constructor() {
    super();

  }
   


  render() {
    return (
      <div>
        <Link to="/">Cancel</Link>
      </div>
    );
  }
}
