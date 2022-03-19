import {Container, Row, Col} from 'react-bootstrap';

const HeadBar=()=>{
   return(
      <Container className="bg-white px-4" fluid>
         <Row className="py-4 align-items-center">
            <Col xs={12}>
               <h2 className="text-info mb-0">PERSONNEL LIST</h2>
               <span className="text-gray mb-0">List of all personnels</span>
            </Col>
            <Col>
               <Row className="text-end">
                  <Col xs={12}>
                     <div className="search d-flex align-items-center pt-1 pb-2 px-2 border border-secondary">
                        <span className="material-icons text-info me-3">search</span>
                        <input className="border-0 mx-2" type="text" placeholder="Find Personnels"/>
                     </div>
                  </Col>
                  <Col xs={12}>
                     <div className="addButton border-0 bg-info px-4 py-2">
                        <a className="d-flex text-white justify-content-center" href="#">
                           <span className="mb-0 fw-bold">ADD PERSONNEL</span>
                           <span className="material-icons">add</span>
                        </a>
                     </div>
                  </Col>
               </Row>
            </Col>
         </Row>
      </Container>
   )
}

export default HeadBar;