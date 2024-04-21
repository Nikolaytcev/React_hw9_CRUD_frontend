import './ViewCard.css'
import { useParams} from "react-router-dom"
import { Card } from "../Card/Card";
import { useEffect, useState } from 'react';

interface IviewCard {
    onDelte: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onRedaction: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export const ViewCard = ({ onDelte, onRedaction}: IviewCard) => {
    const { id } = useParams();
    const [post, setPost] = useState({id: -1, content: '', name: '', avatar: '', created: 0});

    useEffect(() => {
        fetch(`http://localhost:7070/posts/${id}`)
            .then(resp => resp.json())
            .then(resp => setPost(resp))
    })
    
  return (
    <>
        {post.content !== '' ? 
        <div className="card-view">
            <Card data={post}/>
                <button className="redaction-btn" onClick={onRedaction} id={id}>Изменить</button>
                <button className="delete-btn" onClick={onDelte} id={id}>Удалить</button>
        </div>
        : ''
        }
    </>
  )
}
