import React, {useState, useEffect} from 'react';
import { Col } from '../../pages/Styles.styled';
import { Button } from './Buttons.styled';

export const SaveButton = (props) =>{
    const [content, setContent] = useState(props.data.isSaved ? <i className="fa-solid fa-bookmark"></i> : <i className="fa-regular fa-bookmark"></i>)
    
    useEffect(() => {
        setContent(props.data.isSaved ? <i className="fa-solid fa-bookmark"></i> : <i className="fa-regular fa-bookmark"></i>)
    }, [props.data.isSaved])

    return (
            <Button onClick={props.save ? ()=> props.save(props.data) : ()=>console.log('still not implemented')}> {content} </Button>
    )
}