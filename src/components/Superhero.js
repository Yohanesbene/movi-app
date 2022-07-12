import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import avangersImg from '../assets/images/trending/avangers.jpg'
import hawkeyeImg from '../assets/images/superhero/hawkeye.jpg'

const Superhero = () => {
  return (
    <div className='py-5'>
      <Container id='superhero'>
        <h1 className='mb-4'>Superhero Movies</h1>
        <Row>
          <Col md={3} className='card-wrapper'>
            <Card className="bg-transparent text-white card-movie">
              <Image src={hawkeyeImg} alt="Avangers Endgame" className='card-image' />
              <Card.ImgOverlay className='card-overlay'>
                <Card.Title className='card-title'>Hawkeye</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={3} className='card-wrapper'>
            <Card className="bg-transparent text-white card-movie">
              <Image src={avangersImg} alt="Avangers Endgame" className='card-image' />
              <Card.ImgOverlay className='card-overlay'>
                <Card.Title className='card-title'>Avangers Endgame</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={3} className='card-wrapper'>
            <Card className="bg-transparent text-white card-movie">
              <Image src={hawkeyeImg} alt="Avangers Endgame" className='card-image' />
              <Card.ImgOverlay className='card-overlay'>
                <Card.Title className='card-title'>Hawkeye</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={3} className='card-wrapper'>
            <Card className="bg-transparent text-white card-movie">
              <Image src={hawkeyeImg} alt="Avangers Endgame" className='card-image' />
              <Card.ImgOverlay className='card-overlay'>
                <Card.Title className='card-title'>Hawkeye</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={3} className='card-wrapper'>
            <Card className="bg-transparent text-white card-movie">
              <Image src={hawkeyeImg} alt="Avangers Endgame" className='card-image' />
              <Card.ImgOverlay className='card-overlay'>
                <Card.Title className='card-title'>Hawkeye</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={3} className='card-wrapper'>
            <Card className="bg-transparent text-white card-movie">
              <Image src={hawkeyeImg} alt="Avangers Endgame" className='card-image' />
              <Card.ImgOverlay className='card-overlay'>
                <Card.Title className='card-title'>Hawkeye</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={3} className='card-wrapper'>
            <Card className="bg-transparent text-white card-movie">
              <Image src={hawkeyeImg} alt="Avangers Endgame" className='card-image' />
              <Card.ImgOverlay className='card-overlay'>
                <Card.Title className='card-title'>Hawkeye</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={3} className='card-wrapper'>
            <Card className="bg-transparent text-white card-movie">
              <Image src={hawkeyeImg} alt="Avangers Endgame" className='card-image' />
              <Card.ImgOverlay className='card-overlay'>
                <Card.Title className='card-title'>Hawkeye</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Superhero