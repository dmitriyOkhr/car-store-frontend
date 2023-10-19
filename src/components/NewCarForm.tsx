import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import axios from "../axios";
import { UploadedFileInfo, Post } from "../types";
import { Navigate } from "react-router-dom";

const NewCarForm = () => {
  const [selectedFiles, setSelectedFiles]: any = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<Post>();

  const [fields, setFields] = useState({
    brand: "",
    model: "",
    price: "",
    year: "",
    engine: "",
    drivetrain: "",
    transmission: "",
    exterior: "",
    interior: "",
    interiorFeatures: "",
    exteriorFeatures: "",
    functional: "",
    safetyConvenience: "",
  });

  const handleFileChange = (event: any) => {
    setSelectedFiles(event.target.files);
  };

  const onSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("images", selectedFiles[i]);
    }

    try {
      const response = await axios.post("/upload", formData);

      const imageUrls = response.data.map((obj: UploadedFileInfo) => {
        return obj.path;
      });

      const updatedFields = { ...fields, imageUrls };

      const { data } = await axios.post<Post>("/posts", updatedFields);
      setData(data);

      setIsLoaded(true);
    } catch (error) {
      alert("Error uploading files");
    }
  };
  if (isLoaded) {
    return <Navigate to={`/store/${data?.brand.toLowerCase()}/${data?._id}`} />;
  }

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            onChange={(e) => setFields({ ...fields, brand: e.target.value })}
            value={fields.brand}
            type="text"
            placeholder="Enter Brand"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Model</Form.Label>
          <Form.Control
            value={fields.model}
            onChange={(e) => setFields({ ...fields, model: e.target.value })}
            type="text"
            placeholder="Model"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={fields.price}
            onChange={(e) => setFields({ ...fields, price: e.target.value })}
            type="text"
            placeholder="Price"
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Year</Form.Label>
          <Form.Control
            value={fields.year}
            onChange={(e) => setFields({ ...fields, year: e.target.value })}
            type="text"
            placeholder="Enter Year"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Engine</Form.Label>
          <Form.Control
            value={fields.engine}
            onChange={(e) => setFields({ ...fields, engine: e.target.value })}
            type="text"
            placeholder="Engine"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Drivetrain</Form.Label>
          <Form.Control
            value={fields.drivetrain}
            onChange={(e) =>
              setFields({ ...fields, drivetrain: e.target.value })
            }
            type="text"
            placeholder="Enter Drivetrain"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Transmission</Form.Label>
          <Form.Control
            value={fields.transmission}
            onChange={(e) =>
              setFields({ ...fields, transmission: e.target.value })
            }
            type="text"
            placeholder="Transmission"
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Exterior</Form.Label>
          <Form.Control
            value={fields.exterior}
            onChange={(e) => setFields({ ...fields, exterior: e.target.value })}
            type="text"
            placeholder="Enter Exterior"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Interior</Form.Label>
          <Form.Control
            value={fields.interior}
            onChange={(e) => setFields({ ...fields, interior: e.target.value })}
            type="text"
            placeholder="Interior"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formFileMultiple" className="mb-3">
          <Form.Label>Add images</Form.Label>
          <Form.Control
            onChange={(e) => handleFileChange(e)}
            type="file"
            multiple
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridText">
          <InputGroup>
            <InputGroup.Text>Interior Features</InputGroup.Text>
            <Form.Control
              value={fields.interiorFeatures}
              onChange={(e) =>
                setFields({ ...fields, interiorFeatures: e.target.value })
              }
              as="textarea"
              aria-label="With textarea"
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridText">
          <InputGroup>
            <InputGroup.Text>Exterior Features</InputGroup.Text>
            <Form.Control
              value={fields.exteriorFeatures}
              onChange={(e) =>
                setFields({ ...fields, exteriorFeatures: e.target.value })
              }
              as="textarea"
              aria-label="With textarea"
            />
          </InputGroup>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridText">
          <InputGroup>
            <InputGroup.Text>Functional</InputGroup.Text>
            <Form.Control
              value={fields.functional}
              onChange={(e) =>
                setFields({ ...fields, functional: e.target.value })
              }
              as="textarea"
              aria-label="With textarea"
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridText">
          <InputGroup>
            <InputGroup.Text>Safety & Convenience</InputGroup.Text>
            <Form.Control
              value={fields.safetyConvenience}
              onChange={(e) =>
                setFields({ ...fields, safetyConvenience: e.target.value })
              }
              as="textarea"
              aria-label="With textarea"
            />
          </InputGroup>
        </Form.Group>
      </Row>

      <Button onClick={onSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NewCarForm;
