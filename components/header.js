import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Header extends React.Component {
  state = { search: "", fullSize: true };

  componentDidMount() {
    const setBound = width => {
      if (width > this.props.bounds && !this.state.fullSize) {
        this.setState({ fullSize: true });
      } else if (width <= this.props.bounds && this.state.fullSize) {
        this.setState({ fullSize: false });
      }
    };
    setBound(window.innerWidth);
    window.addEventListener("resize", e => setBound(e.target.innerWidth));
  }

  render() {
    return (
      <Navbar
        bg={this.props.theme ? this.props.theme : "dark"}
        variant={this.props.theme ? this.props.theme : "dark"}
      >
        {this.props.logo ? (
          <Navbar.Brand href="/">
            <img
              src={this.props.logo.src}
              width={this.props.logo.width}
              height={this.props.logo.height}
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        ) : null}
        {this.props.title ? (
          <Navbar.Brand href="/">{this.props.title}</Navbar.Brand>
        ) : null}
        {this.state.fullSize ? (
          <Nav className="mr-auto">
            {this.props.links.map(el => (
              <Nav.Link onClick={() => el.cb()} href={el.href ? el.href : ""}>
                {el.text}
              </Nav.Link>
            ))}
          </Nav>
        ) : null}
        {this.props.search ? (
          <Form inline>
            {this.state.fullSize ? (
              <div>
                <FormControl
                  style={
                    this.props.search ? { width: this.props.search.width } : {}
                  }
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  value={this.state.search}
                  onChange={e => {
                    this.setState({ search: e.target.value });
                    this.props.search.onChange(e.target.value);
                  }}
                />
                <Button
                  onClick={() => this.props.search.onSubmit()}
                  variant="outline-info"
                >
                  Search
                </Button>
              </div>
            ) : (
              <div className={"text-left"}>
                <Button
                  variant={this.props.theme === "light" ? "dark" : "light"}
                  onClick={() => console.log("shalom")}
                >
                  <img
                    width={"25px"}
                    height={"25px"}
                    src={require("./bars-solid.svg")}
                  />
                </Button>
              </div>
            )}
          </Form>
        ) : null}
      </Navbar>
    );
  }
}
