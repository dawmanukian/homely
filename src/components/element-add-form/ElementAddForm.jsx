import React from "react";
import "./element-add-form.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const ElementAddForm = () => {
  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="Անուն" />
          </Col>
          <Col>
            <Form.Control placeholder="Ազգանուն" />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ElementAddForm;
