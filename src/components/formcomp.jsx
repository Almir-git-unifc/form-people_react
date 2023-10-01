const formcomp = () => {
  return (
    <div className='form'>
      <form action='#'>
        {/*  div form-header tem o título cadastre-se para entrar */}
        <div className='form-header'>
          <h1>Cadastre-se</h1>
        </div>
        <div className='login-button'>
          <button>
            <a href='#'>Entrar</a>
          </button>
        </div>
      </form>
    </div>
  )
}

export default formcomp
