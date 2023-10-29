import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Table, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ServiceUrl from "../services/ServiceUrl.js";
import { product_api } from "../services/url.js";

let ProductList = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    ServiceUrl.getAll(product_api.main) // http://localhost:9999/api/products
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
      });
  }, []);

  console.log(data);

  return (
    <>
      <Container className="mt-3">
        <Row style={{ margin: "10px auto" }}>
          <Col>
            <h3 className="text-primary">Product List</h3>
          </Col>
        </Row>
        <Row>
          {data.map((e, i) => (
            <Col key={i}>
              <Card style={{ width: "250px", marginTop: "20px" }}>
                <Card.Img
                  variant="top"
                  style={{ height: "250px", width: "200px", margin: "0 auto" }}
                  src={e.images[0].url}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "15px" }}>
                    Name: {e.name}
                  </Card.Title>
                  <Card.Text>Price: {e.price}</Card.Text>
                  <Card.Text>Category: {e.category.name}</Card.Text>
                  <Button
                    onClick={() => {
                      navigate(`/view/${e._id}`);
                    }}
                    variant="primary"
                  >
                    View Detail
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row style={{ margin: "10px auto" }}>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                  {data.map((e) => (
                    <tr key={e._id}>
                      <td>{e.name}</td>
                      <td>{e.price}</td>
                      <td>{e.category.name}</td>
                      <td><Image style={{width:'50px'}} src={e.images[0].url} rounded /></td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProductList;
