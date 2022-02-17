import {useParams, useNavigate} from 'react-router-dom'

const AboutItem = () => {
  const params = useParams()
  const navigate = useNavigate()

  const handleNameButton = () => {
    let name:string = 'ciclano'
    navigate(`/sobre/${name}`)
  }

  return ( 

    <>
      <p>
        Página Sobre {params.slug?.toLocaleUpperCase()}        
      </p>
      <p>({params.slug?.length} letras)</p>
      <button onClick={handleNameButton}>Pagina Sobre + Nome</button>
      {/* vai para a pagina sobre/ciclano */}
    </>
  )
}

export default AboutItem