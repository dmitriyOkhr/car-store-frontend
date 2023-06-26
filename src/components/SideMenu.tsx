import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";

const SideMenu = () => {
  return (
    <>
      <Form>
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label="Check this switch"
        />
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label="Check this switch"
        />
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label="Check this switch"
        />
      </Form>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    </>
  );
};

export default SideMenu;
