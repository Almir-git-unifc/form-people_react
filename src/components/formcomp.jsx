const formcomp = () => {
  return (
    <div className="form">
      <form action="#">
        {/*  div form-header tem o título cadastre-se para entrar */}
        <div className="form-header">
          <div className="title">
            <h2>Cadastre-se</h2>
          </div>

          <div className="login-button">
            <button>
              <a href="#">Entrar</a>
            </button>
          </div>
        </div>

        <div className="input-group">
          <div className="input-box">
            <label htmlFor="firstname">Primeiro Nome</label>
            <input
              id="firstname"
              type="text"
              name="firstname"
              placeholder="Digite seu primeiro nome"
              required
            />
          </div>

          <div className="input-box">
            <label htmlFor="lastname">Sobrenome</label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Digite seu sobrenome"
              required
            />
          </div>

          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Digite seu email"
              required
            />
          </div>

          <div className="input-box">
            <label htmlFor="number">Celular</label>
            <input
              id="number"
              type="text"
              name="number"
              placeholder="(xx) xxxx-xxxx"
              required
            />
          </div>

          <div className="input-box">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <div className="input-box">
            <label htmlFor="password">Confirme sua Senha</label>
            <input
              id="password"
              type="password"
              name="confirmPassword"
              placeholder="Digite sua senha"
              required
            />
          </div>
        </div>

        <div className="gender-inputs">
            <div className="gender-title">
              <h6>Genero</h6>
            </div>

            <div className="gender-group">
                <div className="gender input">
                    <input type="radio" id="female" name="gender" />
                    <label htmlFor="female">Feminino</label>
                </div>

                <div className="gender input">
                    <input type="radio" id="male" name="gender" />
                    <label htmlFor="male">Masculino</label>
                </div>

                 <div className="gender input">
                    <input type="radio" id="others" name="gender" />
                    <label htmlFor="others">Outros</label>
                </div>

                <div className="gender input">
                    <input type="radio" id="none" name="gender" />
                    <label htmlFor="none">Prefiro não dizer</label>
                </div>
            </div>
        </div>

        <div className="continue-botton">
            <button>
                <a href="#">Continuar</a>
            </button>
        </div>

      </form>
    </div>
  );
};

export default formcomp;
