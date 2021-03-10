import React, { useState } from 'react'
import '../views/style.scss'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import ShowMoreText from 'react-show-more-text';
const PhotoCard =({image,title,author,description,tags}) =>{
    const [expand,setExpand] = useState(false)
   const executeOnClick=()=>{
       setExpand(!expand);
    }
    return(
        <div className="p_item">
        <Card>
          <CardImg top width="100%" height={300} src={image} />
          <CardBody>
            <CardTitle tag="h4">{title}<span style={{fontSize:14,fontWeight:400}}> by {author}</span></CardTitle>
               <div><span style={{fontWeight:'700'}}>Description:</span>
               <ShowMoreText
                /* Default options */
                lines={3}
                more='Show more'
                less='Show less'
                className='content-css'
                anchorClass='my-anchor-css-class'
                onClick={executeOnClick}
                expanded={expand}
                width={280}
                >
                <div className="p_desc" dangerouslySetInnerHTML={ {__html: description} } />
               </ShowMoreText>
               </div>
               <CardText><span style={{fontWeight:'700'}}>Tags:</span>{tags}</CardText>
          </CardBody>
        </Card>
       </div>
    )

}

export default PhotoCard;