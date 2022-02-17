import {useNavigate} from 'react-router-dom'

const AboutProduct = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h2 className="py-4">Sobre o Produto</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quam, repellendus ipsum nobis maiores iste ea inventore delectus itaque harum ducimus iusto enim, natus veritatis animi! Ipsum, minus similique? Illo?</p>
      <button className="m-4" onClick={() => navigate(-1)}>Página anterior</button>
      <button className="m-4" onClick={() => navigate("/")}>Home</button>
    </div>
  )
}
export default AboutProduct