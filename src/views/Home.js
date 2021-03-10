import React from 'react'
import {Container,Card,CardBody,Row,Col} from 'reactstrap'
import PhotoCard from '../components/PhotoCard';
import {useFetchData} from '../hooks/useFetchData'
import './style.scss'
const Home =() =>{
     const datas = useFetchData(); 
   
    return(
        <div className="p_container">
            <Row>
            {
                datas.map(item=>(
                    <Col xs={12} md={3} className="card_item">
                     <PhotoCard
                      image={item.media.m}
                      title={item.title}
                      author={item.author}
                      description={item.description}
                      tags={item.tags}
                    />
                    </Col>
                ))
            }
           </Row>
        </div>
    )

}

export default Home;