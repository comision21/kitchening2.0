
import { Button, Form } from "react-bootstrap";
import { UseFetch } from "../hooks/UseFetch";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types'

export const FormProduct = ({products, setProducts}) => {

  const [categories, setCategories] = useState([]);
  const [sections, setSections] = useState([]);


  const getData = async () => {
    const categories =  await UseFetch("categories");
    const sections =  await UseFetch("sections");

    setCategories([...categories.data]);
    setSections([...sections.data])
   
  };

  useEffect(() => {
    getData();
  }, []);

  const [formValues, setFormValues] = useState({
    title : "",
    price : "",
    discount : "",
    categoryId : "",
    sectionId : "",
    description : ""
  });

  const handleInputChange = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name] : target.value
    })
  }

  const handleSubmitFormCreate = async (event) => {
    event.preventDefault();

    if([formValues.title,formValues.price, formValues.categoryId, formValues.sectionId, formValues.description ].includes("")){
      alert('upsss... no envíe vacío el formulario!!!')
      return 
    }

    const { data} = await UseFetch("products", 'POST', formValues);


    console.log(products)

    setProducts([
      ...products,
      data
    ])
  }


  return (
    <Form className="row" onSubmit={handleSubmitFormCreate}>
      <Form.Group className="mb-3 col-12">
        <Form.Label>Titulo</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Título del producto..." 
          name="title"
          onChange={handleInputChange}
          />
         
      </Form.Group>
      <Form.Group 
        className="mb-3 col-12 col-md-6"
        >
        <Form.Label>Precio</Form.Label>
        <Form.Control 
           name="price"
           type="number"
           onChange={handleInputChange}

          />
      </Form.Group>
      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Descuento</Form.Label>
        <Form.Control
          type="number" 
          name="discount"
          onChange={handleInputChange}

          />
      </Form.Group>
    
      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Sección</Form.Label>
        <Form.Select 
          className="form-control"
          name="sectionId"
          onChange={handleInputChange}
          >
          <option hidden>
            Selecciona...
          </option>
          {
            sections.map((section, index)  => <option key={index+section.name} value={section.id}>{section.name}</option>)
          }
          
        </Form.Select>
       
      </Form.Group>

      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Categoría</Form.Label>
        <Form.Select 
          className="form-control"
          name="categoryId"
          onChange={handleInputChange}
          >
          <option hidden>
            Selecciona...
          </option>
          {
            categories.map((section, index)  => <option key={index+section.name} value={section.id}>{section.name}</option>)
          }
        </Form.Select>
       
      </Form.Group>

      <Form.Group className="mb-3 col-12 ">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
         as="textarea"
          type="text" 
          name="description"
          onChange={handleInputChange}
          />
      </Form.Group>
      <Form.Group className="mb-3 col-12">
        <div className="d-flex justify-content-around">
        <Button  variant="outline-secondary">
        Cancelar
      </Button>
      <Button type="submit"  variant="outline-primary">
        Guardar
      </Button>
        </div>
    
      </Form.Group>

    </Form>
  );
};

FormProduct.propTypes = {
  products: PropTypes.array,
  setProducts : PropTypes.func
};
