import img from '../../img/delete.svg'
import './CreateCard.css'
interface icreateCard {
    onPublish: () => void,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    onClose: () => void
}

export const CreateCard = ({ onPublish, onChange, onClose }: icreateCard) => {
  return (
    <div className="create-card">
        <div className="create-card header">
        <ul className="create-card menu">
            <li className="create-card menu-item">
                <a href="#">публикация</a>
            </li>
            <li className="create-card menu-item">
                <a href="#">Фото/видео</a>
            </li>
            <li className="create-card menu-item">
                <a href="#">
                Прямой эфир
                </a>
            </li>
            <li className="create-card menu-item">
                <a href="">ещё</a>
            </li>
        </ul>
        <img className='close-sign' src={img} alt="close" onClick={onClose}/>
        </div>
        <textarea onChange={onChange} placeholder='Введите текст'/>
        <button className='redaction-btn' onClick={onPublish}>опубликовать</button>
    </div>
  )
}
