import Accordion from "react-bootstrap/Accordion";
import { AccordionData } from "../types";

function BasicExample({
  interiorFeatures,
  exteriorFeatures,
  functional,
  safetyConvenience,
}: AccordionData) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Interior Features</Accordion.Header>
        <Accordion.Body>{interiorFeatures}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Exterior Features</Accordion.Header>
        <Accordion.Body>{exteriorFeatures}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Functional</Accordion.Header>
        <Accordion.Body>{functional}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Safety & Convenience</Accordion.Header>
        <Accordion.Body>{safetyConvenience}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;
