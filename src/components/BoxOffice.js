import { useEffect, useState } from 'react'
import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import avangersImg from '../assets/images/trending/avangers.jpg'
import minionsImg from '../assets/images/trending/minions.jpg'
import axios from 'axios'
import { AiFillStar } from 'react-icons/ai'

const BoxOffice = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_TMDB_KEY
      }
    }).then((response) => {
      setMovies(response.data.results)
    })
  }, [])

  return (
    <div className='py-5'>
      <Container id='boxOffice'>
        <h1 className='mb-4'>Box Office</h1>
        <Row>
          {movies.map((result, index) => {
            return (
              <Col md={3} className='card-wrapper' key={index}>
                <Card className="bg-transparent text-white card-movie">
                  <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt={result.original_title} className='card-image' />
                  <div className='card-description'>
                    <Card.Title className='card-title'>{result.title}</Card.Title>
                    <div className='subtitle-wrapper'>
                      <AiFillStar />
                      <Card.Text className='card-subtitle'>{result.vote_average}</Card.Text>
                    </div>
                  </div>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default BoxOffice