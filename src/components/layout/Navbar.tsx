import { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown
} from "reactstrap";
import Swal from 'sweetalert2';

interface NavbarProps {
  data: any;
  convertLang: (lang: string) => void;
}

interface NavbarState {
  isOpen: boolean;
}

export default class NavBar extends Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.collapse = this.collapse.bind(this);
    this.cs = this.cs.bind(this);
    this.ConvertLangAndCollapse = this.ConvertLangAndCollapse.bind(this);

    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeNav);
  }

  changeNav() {
    const distanceY = window.pageXOffset || document.documentElement.scrollTop;
    const shrinkOn = 40;
    const nav = document.getElementById("navbar");
    if (nav) {
      distanceY > shrinkOn
        ? nav.classList.add("isScrollDown")
        : nav.classList.remove("isScrollDown");
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  collapse() {
    this.setState({
      isOpen: false
    });
  }

  ConvertLangAndCollapse(lang: string) {
    this.setState({
      isOpen: false
    });
    this.props.convertLang(lang);
  }

  cs() {
    Swal.fire({
      title: 'Not available yet',
      text: 'Sorry for this issue!',
      icon: 'warning',
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!'
    });
  }

  render() {
    return (
      <Navbar className="fixed-top" color="light" light expand="md" id="navbar">
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={this.collapse}
              >
                {this.props.data.lang.menus[0]}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/experiences"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={this.collapse}
              >
                {this.props.data.lang.menus[1]}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/services"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={this.collapse}
              >
                {this.props.data.lang.menus[2]}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/portfolios"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={this.collapse}
              >
                {this.props.data.lang.menus[3]}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/certificates"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={this.collapse}
              >
                {this.props.data.lang.menus[5]}
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret title="Select your language">
                {this.props.data.lang.menus[4]}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem
                  onClick={() => this.ConvertLangAndCollapse("english")}
                >
                  English
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.ConvertLangAndCollapse("indo")}
                >
                  Bahasa Indonesia
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.ConvertLangAndCollapse("sasak")}
                >
                  Sasak (Lombok)
                </DropdownItem>
                <DropdownItem onClick={this.cs}>العربية</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
