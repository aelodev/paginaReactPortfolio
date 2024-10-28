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
                <Link to={"/"} className="text-4xl text-white"><FaArrowLeft/></Link>
                <h1 style={{display: 'flex', justifyContent: 'center', width: '100%'}}
                    className="text-4xl text-white">My Blog</h1>
            </nav>
            <main>
                <section>

                </section>
                <section>

                </section>
            </main>
        </div>

    )
}

export default Blog