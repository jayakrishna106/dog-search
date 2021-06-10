import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {  Alert, Card, CardBody,  CardSubtitle, CardText, CardTitle, Col, Container, Navbar, NavbarBrand, Row } from 'reactstrap';
import { getDogBreadDetails} from './components/FetchApi';
import { Img } from './components/Img';
import SimpleSearch from './components/SimpleSearch';

function App() {
  const [result, setResult] = React.useState([]);

  const callback = query => {
    setTimeout(() =>{
      if(query) {
        var obj ;
        getDogBreadDetails(query).then(r =>  setResult(r));
        if(result){
        obj =result;
        obj = obj.sort(function(a,b){ return a.name - b.name});
        obj = obj.sort(function(a,b){ return a.height.metric - b.height.metric});
        obj = obj.sort(function(a,b){ return a.life_span - b.life_span});
          setResult(obj);
        }
        else 
          setResult('');
          
      }
      else{
        setResult('');
      }
    }, 100);
 }  
  
const getAlert=() => {
if(!result){
return (<Alert color="primary">
        Please enter a valid dog bread name
       </Alert>)
}
else if(result.length===0){
  return(<Alert color="primary">
  No Data Found
 </Alert>)
}
}

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Dog Breeds</NavbarBrand>
      </Navbar>
      <Container>
        <br />
        <SimpleSearch callback={callback} debouce={600}
        placeholder={'Search here for Dog Breed'}
        />

        <br />

        {getAlert()}
        <Row>
      {result && result.map(data =>
      
      <Col sm="3" key={data.id}>

      <Card>
      <CardBody>
        <CardTitle tag="h5">{data.name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{data.bred_for}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{data.breed_group? "Bread : "+data.breed_group : data.breed_group}</CardSubtitle>
      </CardBody>
      <Img imageId={data.reference_image_id} />
      <CardBody>
      <CardText>
          Height : {data.height.metric} m
          <br />
          Weight : {data.height.metric} m
          <br />
          LifeSpan : {data.life_span}
          <br />
          {data.origin ? "Origin :" + data.origin : data.origin }
          </CardText>
      </CardBody>
    </Card>
    </Col>
      
   
        )}
        </Row>
      </Container>
    </div>
  );
}

export default App;
