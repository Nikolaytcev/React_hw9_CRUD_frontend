import { Link } from "react-router-dom"

interface Iurl {
    url: string,
}

export const CreatePost = ({ url }: Iurl) => {
  return (
    <div className="new-post">
        <Link to={url} className="create-post">Создать пост</Link>
    </div>
  )
}
