import { Link, useSearchParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const About = () => {
  const navigate = useNavigate() 
    const [searchParams, setSearchParams] = useSearchParams()

    const setOrder = (order: 'asc' | 'desc') => {
      searchParams.set('order', order)
      setSearchParams(searchParams)
    }

  return (
    <>
    <p>Filtro: <span>{searchParams.get('filter')}</span></p>
    <p>Order: <span>{searchParams.get('order')}</span></p>

    <button onClick={() => setOrder('asc')} className='my-5'>Asc</button>
    <button onClick={() => setOrder('desc')} >Desc</button>
      <h2>Sobre:</h2>
      <p>Adicione /ciclano na url do browser para visualizar a pagina AboutItem</p>
      <ul>
        <li><Link to="/sobre/sobremim">Sobre mim</Link></li>
        <li><Link to="/sobre/sobreproduto" > Sobre o produto</Link></li>         
      </ul>
      <button className="m-4" onClick={() => navigate("/")}>Voltar</button>
    </>
  )
}

export default About 