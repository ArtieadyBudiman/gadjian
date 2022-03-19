import {Card, Row, Col} from 'react-bootstrap'

const CardUser=(props)=>{
   const data = props.data;
   console.log(data)
   return(
      <>
            <Card className="cardUser border-0 rounded">
               <Card.Footer className="bg-white shadow-none border border-top-0 border-start-0 border-end-0 border-bottom-1">
                  <Row>
                     <Col className="p-0" xs={5}>
                        <p className="text-gray mb-0">Personel ID: </p>
                     </Col>
                     <Col className="p-0" xs={5}>
                        <p className="text-info fw-bold mb-0 text-truncate">{data.id.value}</p>
                     </Col>
                     <Col className="p-0 text-end" xs={2}>
                        <span className="material-icons ">more_horiz</span>
                     </Col>
                  </Row>   
               </Card.Footer>
               <img className="rounded-circle mx-4 my-2" src={data.picture.large} alt="" />
               <Card.Body>
                  <Card.Text>
                     <div className="mb-0 fw-bold text-sencondary">Nama</div>
                     <div className="mb-0 text-gray">{`${data.name.first} ${data.name.last}`}</div>
                     <div className="mb-0 fw-bold text-sencondary">Telephone</div>
                     <div className="mb-0 text-gray">{data.cell}</div>
                     <div className="mb-0 fw-bold text-sencondary">Birthday</div>
                     <div className="mb-0 text-gray">{data.dob.date}</div>
                     <div className="mb-0 fw-bold text-sencondary">Email</div>
                     <div className="mb-0 text-gray text-truncate">{data.email}</div>
                  </Card.Text>
               </Card.Body>
            </Card>
      </>
   )
}

export default CardUser;