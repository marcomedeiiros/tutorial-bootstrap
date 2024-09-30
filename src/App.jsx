import './App.css';

function App() {
  return (
    <div className="App">
      <header className='cabecalho'>
        <nav className='container navbar navbar-expand'>
          <div className='logo'>
            <span className='navbar-brand'>logo</span>
          </div>
          <ul className='navbar-nav mx-auto'>
            <li className='nav-item'><a className='nav-link rosa' href="">Home</a></li>
            <li className='nav-item'><a className='nav-link rosa' href="">Sobre Nós</a></li>
            <li className='nav-item'><a className='nav-link rosa' href="">Contato</a></li>
          </ul>
        </nav>
      </header>
      <main className='conteudo pt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-10 artigos p-4'>
              <h2>Artigos</h2>
              <div className='produtos container'>
                <div className='produto pb-3'>
                  <h4>Seda</h4>
                  <p>Para os demais fumadores de tabaco</p>
                  <button className='btn btn-warning me-3'>Favoritar</button>
                  <button className='btn btn-success'>Comprar</button>
                </div>

                <div className='produto pb-3'>
                  <h4>Tabaco</h4>
                  <p>Para usuarios de fumos sem seda!</p>
                  <button className='btn btn-warning me-3'>Favoritar</button>
                  <button className='btn btn-success'>Comprar</button>
                </div>
              </div>
            </div>
            <div className='col-2 Tabacaria'>
              <h3>Tabacaria</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
