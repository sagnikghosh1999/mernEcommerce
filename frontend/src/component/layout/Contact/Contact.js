import React, { Fragment } from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import MetaData from "../MetaData";

const Contact = () => {
  return (
    <Fragment>
      <MetaData title="Contact-Us" />

      <div className="contactContainer">
        <a className="mailBtn" href="mailto:sagnikghosh813@gmail.com">
          <Button>Contact: sagnikghosh813@gmail.com</Button>
        </a>
      </div>
    </Fragment>
  );
};

export default Contact;
