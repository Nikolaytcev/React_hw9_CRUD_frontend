import './Card.css'
import { useNavigate } from 'react-router-dom'

export interface Icard {
    data: {
        id: number,
        name: string,
        content: string,
        created: number
        avatar: string
    }
}

function changeTime (time: number) {
    const difDate = Date.now() - time;
    if (Math.floor(difDate/(60 * 60 * 24 * 1000)) > 0) {
      return `${Math.floor(difDate/(60 * 60 * 24 * 1000))} дн.`
    }
    else if (Math.floor(difDate/(60 * 60 * 1000)) > 0) {
      return `${Math.floor(difDate/(60 * 60 * 1000))} час.`
    }
    else {
      return `${Math.floor(difDate/(60 * 1000))} мин.`
    }
  }

export const Card = ({ data }: Icard) => {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/posts/${data.id}`)}>
        <div className="card-header">
            <img src={data.avatar} alt="avatar" />
            <h3 className="card-name">{data.name}</h3>
            <p className="card-created">{changeTime(data.created)}</p>
        </ div>
        <div className="card-content-box">
            <h1 className="card-content">{data.content}</h1>
        </div>       
    </ div>
  )
}
