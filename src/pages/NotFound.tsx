import {useNavigate} from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Erro 404 -Not Found</h1>
      <p>A página que você busca não foi encontrada. Verifique se a URL está correta.</p>
      <button className="m-4" onClick={() => navigate("/")}>Home</button>
    </div>
  )
}

export default NotFound
