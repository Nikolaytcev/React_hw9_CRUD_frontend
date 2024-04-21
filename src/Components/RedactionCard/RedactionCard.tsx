import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import './RedactionCard.css'

interface Iredaction {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  onSave: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const RedactionCard = ({ onChange, onSave }: Iredaction) => {
  const [post, setPost] = useState({id: -1, content: '', name: '', avatar: '', created: 0});
  const { id } = useParams() 

  useEffect(() =>{
    fetch(`http://localhost:7070/posts/${id}`)
    .then(response => response.json())
    .then((post) => setPost(post))
  })

  return (
    <>
    {post.content !== '' ? 
        <div className="card-view">
            <div className="redaction">
              <div className="redaction-title">
                <h3 className="card-name">Редактировать публикацию</h3>
              </div>
              <div className="card-header">
                <div className="redaction-img-box">
                  <img src={post.avatar} alt="avatar" />
                </div>
                <textarea onChange={onChange} defaultValue={post.content}/>
              </div>
              <button className="redaction-btn" onClick={onSave} id={id}>Сохранить</button>
            </div>
        </div>
        : ''
        }
    </>
  )
}
