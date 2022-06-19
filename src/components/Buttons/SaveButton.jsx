import React, {useState, useEffect} from 'react';
import { Col } from '../../pages/Styles.styled';
import { Button } from './Buttons.styled';

export const SaveButton = (props) =>{
    const [content, setContent] = useState(props.isSaved ? <i className="fa-solid fa-bookmark"></i> : <i className="fa-regular fa-bookmark"></i>)
    useEffect(() => {
        setContent(props.isSaved ? <i className="fa-solid fa-bookmark"></i> : <i className="fa-regular fa-bookmark"></i>)
    }, [props.isSaved])

    return (
        <Col>
            <Button> {content} </Button>
        </Col>
    )
}