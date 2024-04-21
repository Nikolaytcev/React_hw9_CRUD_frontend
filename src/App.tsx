import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'
import { CreatePost } from './Components/CreatePost/CreatePost'
import { Cards } from './Components/Cards/Cards';
import { CreateCard } from './Components/CreateCard/CreateCard';
import { ViewCard } from './Components/ViewCard/ViewCard';
import { RedactionCard } from './Components/RedactionCard/RedactionCard';

export interface Ipost {
  id: number,
  content: string,
  name: string,
  avatar: string,
  created: number
}

function App() {
  const [posts, setPosts] = useState([]);
  const [url, setUrl] = useState<{url: string, opts?: {method: string, body?: string}}>({url: 'http://localhost:7070/posts'});
  const [inputState, setInputState] = useState<{name: string}>({name: ''})
  const navigate = useNavigate();

  const handleOnPublishPost = () => {
    const body = {content: inputState.name}
    if (body.content !== '') {
      setUrl(() => ({url: 'http://localhost:7070/posts', opts: {method: 'POST', body: JSON.stringify(body)}}));
      navigate('/');
    }
    else {
      alert('Введите текст в поле ввода!')
    }
  }

  const handleOnSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;
    const body = {content: inputState.name}
    setUrl(() => ({url: `http://localhost:7070/posts/${id}`, opts: {method: 'PUT', body: JSON.stringify(body)}}));
    navigate('/');
  }

  const onChangeEvent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setInputState(() => ({name: value}))
  }

  const handleOnClose = () => {
    navigate('/');
  }

  const handleOnDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;
    setUrl(() => ({url: `http://localhost:7070/posts/${id}`, opts: {method: 'DELETE'}}));
    navigate('/')
  }

  const handleOnRedaction = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;
    navigate(`/posts/${id}/redaction`)
  }

  useEffect(() => {
      fetch(url.url, url.opts)
      .then(resp => resp.json())
      .then((posts) => {setPosts(posts)})
    }, [url])

  return (
    <div className='container'>
      <CreatePost url='/posts/new'/>
      <Routes>
        <Route path='/' element={<Cards cards={posts}/>}/>
        <Route path="/posts/:id" element={<ViewCard onDelte={handleOnDelete} onRedaction={handleOnRedaction}/>}/>
        <Route path="/posts/:id/redaction" element={<RedactionCard onChange={onChangeEvent} onSave={handleOnSave}/>}/>
        <Route path='/posts/new' element={<CreateCard onPublish={handleOnPublishPost} onChange={onChangeEvent} onClose={handleOnClose}/>}/>
      </Routes>
    </div>
  )
}

export default App
