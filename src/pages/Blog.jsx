import {Link} from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa6";


function Blog() {
    return (
        <div>
            <nav style={{
                display: 'flex',
                position: 'fixed',
                top: 0,
                left: 0,
                paddingTop: '5px',
                paddingBottom: '5px',
                paddingLeft: '20px',
                width: '100%',
                backgroundColor: 'black'
            }}>
                <Link to={"/"} className="text-4xl text-white text-center"><FaArrowLeft/></Link>
                <h1 style={{display: 'flex', justifyContent: 'center', width: '100%'}}
                    className="text-4xl text-white">Mi Blog</h1>
            </nav>
            <main style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                top: 0,
                width: '100%',
                height: '100vh',
                marginTop: '150px'
            }}>
                <section>
                    <p className="text-2xl">
                        Aquí escribiré artículos relacionados con la programación, ciberseguridad y el mundo de la
                        tecnología en general.
                    </p>
                </section>
                <section>
                    <h2 style={{marginTop: '50px', textAlign: 'center'}} className="text-4xl">Artículos</h2>
                    <ul style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: '20px',
                        justifyContent: 'center',
                        alignItems: "center"
                    }}>
                        <li>
                            <Link to={"/blog/artOne"}>Artículo 1</Link>
                        </li>
                        <li>
                            <Link to={"/blog/2"}>Artículo 2</Link>
                        </li>
                        <li>
                            <Link to={"/blog/3"}>Artículo 3</Link>
                        </li>
                    </ul>
                </section>
            </main>
        </div>

    )
}

export default Blog