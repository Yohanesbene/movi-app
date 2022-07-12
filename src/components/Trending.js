import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import avangersImg from '../assets/images/trending/avangers.jpg'
import minionsImg from '../assets/images/trending/minions.jpg'

const Trending = () => {
  return (
    <div className='py-5'>
      <Container id='trending'>
        <h1 className='mb-4'>Trending Movies</h1>
        <Row>
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
              <Image src={minionsImg} alt="Minions The Rise of Gru" className='card-image' />
              <Card.ImgOverlay className='card-overlay'>
                <Card.Title className='card-title'>Minions The Rise of Gru</Card.Title>
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
              <Image src={avangersImg} alt="Avangers Endgame" className='card-image' />
              <Card.ImgOverlay className='card-overlay'>
                <Card.Title className='card-title'>Avangers Endgame</Card.Title>
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
              <Image src={avangersImg} alt="Avangers Endgame" className='card-image' />
              <Card.ImgOverlay className='card-overlay'>
                <Card.Title className='card-title'>Avangers Endgame</Card.Title>
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
              <Image src={avangersImg} alt="Avangers Endgame" className='card-image' />
              <Card.ImgOverlay className='card-overlay'>
                <Card.Title className='card-title'>Avangers Endgame</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Trending