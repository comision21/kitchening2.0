import { Row, Col, Card, CardTitle, Table } from "react-bootstrap";
import { FormSearch } from "../components/FormSearch";
import { FormProduct } from "../components/FormProduct";
import { TableItem } from "../components/TableItem";
import { useEffect, useState } from "react";
import { UseFetch } from "../hooks/UseFetch";

export const ListProductsPage = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const { data } = await UseFetch("products");

    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <Row>
      <Col sm={12} lg={4}>
        <Card className="mb-3">
          <Card.Header>
            <CardTitle>{"Agregar"} producto</CardTitle>
          </Card.Header>
          <Card.Body>
            <FormProduct products={products} setProducts={setProducts}/>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} lg={8}>
        <Card className="shadow mb-5">
          <Card.Header className="d-flex justify-content-end">
            <FormSearch />
          </Card.Header>
          <Card.Body>
            <Table striped borderless responsive>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Precio</th>
                  <th>Descuento</th>
                  <th>Categoría</th>
                  <th>Sección</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <TableItem key={product.title + index} product={product} />
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
