import { useEffect, useState } from 'react'
import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import avangersImg from '../assets/images/trending/avangers.jpg'
import hawkeyeImg from '../assets/images/superhero/hawkeye.jpg'
import axios from 'axios'
import { AiFillStar } from 'react-icons/ai'

const TvMovies = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/discover/tv`, {
      params: {
        api_key: process.env.REACT_APP_TMDB_KEY
      }
    }).then((response) => {
      setMovies(response.data.results)
    })
  }, [])

  return (
    <div className='py-5'>
      <Container id='tvMovies'>
        <h1 className='mb-4'>TV Movies</h1>
        <Row>
          {movies.map((result, index) => {
            return (
              <Col md={3} className='card-wrapper' key={index}>
                <Card className="bg-transparent text-white card-movie">
                  <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt={result.original_name} className='card-image' />
                  <div className='card-description'>
                    <Card.Title className='card-title'>{result.name}</Card.Title>
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

export default TvMovies