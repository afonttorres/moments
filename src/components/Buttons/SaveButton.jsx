import React, {useState, useEffect} from 'react';
import { Button } from './Buttons.styled';

export const SaveButton = (props) =>{
    const [content, setContent] = useState(props.data.saved ? <i className="fa-solid fa-bookmark"></i> : <i className="fa-regular fa-bookmark"></i>)
    
    useEffect(() => {
        setContent(props.data.saved ? <i className="fa-solid fa-bookmark"></i> : <i className="fa-regular fa-bookmark"></i>)
    }, [props.data.saved])

    return (
            <Button onClick={props.save ? ()=> props.save(props.data.id) : ()=>console.log('still not implemented')}> {content} </Button>
    )
}