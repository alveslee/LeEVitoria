import './SiteInicio.css';

const SiteInicio = () => {
    return (
        <>
            <div className="logo">
                <img src="src/assets/LogoConfeitaria.png" alt="logo" />
                <input type="text" />
                <button>Procurar</button>
            </div>
            <main>
                <section className="receitas">
                    <div className="receita">
                        <h2>Título da Receita 1</h2>
                        <p>Descrição da Receita 1</p>
                    </div>
                    <div className="receita">
                        <h2>Título da Receita 2</h2>
                        <p>Descrição da Receita 2</p>
                    </div>
                    <div className="receita">
                        <h2>Título da Receita 3</h2>
                        <p>Descrição da Receita 3</p>
                    </div>
                    {/* Adicione mais divs .receita conforme necessário */}
                </section>
            </main>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>Sobre Nós</h4>
                            <p>Explore uma variedade de receitas deliciosas e inspire-se na cozinha com o nosso site. Descubra novas maneiras de preparar pratos incríveis e compartilhe suas próprias criações culinárias.</p>
                        </div>
                        <div className="col-md-4">
                            <h4>Links Úteis</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Receitas</a></li>
                                <li><a href="#">Sobre</a></li>
                                <li><a href="#">Contato</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Conecte-se Conosco</h4>
                            <ul className="list-inline">
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Pinterest</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    &copy; 2024 Nome do Site. Todos os direitos reservados.
                </div>
            </footer>
        </>
    );
};

export default SiteInicio;
