import './App.css'
import MainRoutes from './routes/MainRoutes'

const App = () => {  
  return (
    <div className='container p-5'>
      <header>
        <h1>Header</h1>
      </header>
      <hr className='mb-5'/>
        <MainRoutes />
      <hr className='mt-5'/>
      <footer>
        Footer da Página
      </footer>
    </div>
  )
}
export default App
