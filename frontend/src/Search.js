import React, { useState } from "react";
import { InputGroup, InputGroupAddon, Input, Button, Label } from "reactstrap";
import "./Search.css";

const Search = ({ searchFor }) => {
  const [input, setInput] = useState({
    search: "",
  });

  const handleChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setInput((input) => ({ [name]: value }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchFor(input);
  };

  return (
    <div className="Search">
      <form onSubmit={handleSearchSubmit}>
        <InputGroup size="lg">
          <Label htmlFor="search"></Label>
          <Input
            onChange={handleChange}
            name="search"
            placeholder="Enter search term..."
            value={input.value}
          />
          <InputGroupAddon addonType="append">
            <Button color="secondary">Search</Button>
          </InputGroupAddon>
        </InputGroup>
      </form>
    </div>
  );
};

export default Search;
