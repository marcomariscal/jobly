import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import "./Search.css";

const Search = () => {
  return (
    <div className="Search">
      <InputGroup size="lg">
        <Input />
        <InputGroupAddon addonType="append">
          <Button color="secondary">Search</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default Search;
