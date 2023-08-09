import React from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Country = (props) => {
  const { name,flags, population, area, capital} = props.country
  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name.common)
  }
  return (
    <Col md={4} xs={12} sm={6}>
    <Card className='mb-2'>
      <Card.Img variant="top" src={flags.png} alt={name.common} />
      <Card.Body>
        <Card.Title>{name.common}</Card.Title>
        <Card.Text>
          <p>Capital : {capital}</p>
          <p>Population : {population}</p>
          <p>Area : {area}</p>
        </Card.Text>
        <Button variant="danger" onClick={()=>handleRemoveCountry(name)}>Remove Country</Button>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default Country