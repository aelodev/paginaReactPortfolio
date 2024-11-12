import '../index.css'
import TypeAnimation from "../components/TypeAnimation.jsx";
import Card from "../components/Card.jsx";
import {colors, wordColors} from "../assets/NeonColors.js";
import Carousel from "../components/Carousel.jsx";
import WordNeonColor from "../ui/WordNeonColor.jsx";
import {SiAndroid, SiGithub, SiLinkedin, SiMysql} from "react-icons/si";
import {FaJava} from "react-icons/fa";
import cambridge from '../assets/cambridge.svg';
import ExpandableCard from "../components/ExpandableCard.jsx";
import {Link} from "react-router-dom";
import {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {matches: window.matchMedia("(min-width: 768px)").matches};
    }

    componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
    }

    render() {
        return (
            <div>
                {this.state.matches && (
                    <div>

                        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem'}}>
                            <h1>Alejandro Lucena</h1>
                            <h2>Desarrollador&nbsp;
                                <TypeAnimation delay={350} infinite={true}>
                                    {[
                                        <WordNeonColor key=" web" word="web" color={wordColors.darkblue}
                                                       effect={false}/>,
                                        ', ',
                                        <WordNeonColor key="android" word="Android" color="green" effect={false}/>,
                                        ' y ',
                                        <WordNeonColor key="java" word="Java" color={wordColors.orange} effect={false}/>
                                    ]}
                                </TypeAnimation>
                            </h2>
                        </div>
                        <div style={{display: 'flex', gap: '1rem'}}>
                            <Card width="600px" height="500px" color={colors.purple} title="">
                                <div style={{
                                    display: "flex",
                                    gap: "5rem",
                                    flexDirection: "column",
                                    position: "relative"
                                }}>
                                    <p className="text-xl">
                                        Mi nombre es <WordNeonColor word="Alejandro Lucena" color={wordColors.blue}
                                                                    effect={true}/> y
                                        soy estudiante de desarrollo de aplicaciones multiplataforma, soy autodidacta
                                        así que aprendí desarrollo web por mi cuenta.
                                    </p>
                                    <hr style={{
                                        border: "1px solid #5b5b5b",
                                        width: "100%",
                                        position: "absolute",
                                        top: "8rem"
                                    }}/>
                                    <p className="text-xl">
                                        Tengo más de un año de experiencia en <WordNeonColor word="Java"
                                                                                             color={wordColors.orange}
                                                                                             effect={true}/> y varios
                                        meses con <WordNeonColor word="Javascript" color={wordColors.yellow}
                                                                 effect={true}/>.
                                        Me gusta mucho obtener conocimientos aparte de lo
                                        que me explican en clase.
                                    </p>

                                    <div style={{display: "flex", gap: "5rem"}}>
                                        <SiMysql className="text-9xl card text-blue-300"/>
                                        <FaJava className="text-9xl card text-orange-400"/>
                                        <SiAndroid className="text-9xl card text-green-400"/>
                                    </div>
                                </div>
                            </Card>

                            <div style={{display: "flex", flexDirection: "column", gap: "1rem", height: "500px"}}>
                                <div>
                                    <Card width="350px" height="242px" title="Skills" color={colors.blue}
                                          className="text-center">
                                        <Carousel/>
                                    </Card>
                                </div>

                                <Card width="350px" height="242px" title="Certificaciones Recientes"
                                      className="text-center"
                                      color={colors.green}>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: "1rem"
                                    }}>
                                        <img src={cambridge} width="100px" style={{marginTop: "1rem"}} className="logo"
                                             alt="University of Cambridge Logo"/>
                                        <p>First Certificate in English B2</p>
                                    </div>
                                </Card>
                            </div>
                            <div style={{display: "flex", flexDirection: "column", gap: "1rem", height: "500px"}}>
                                <ExpandableCard width="450px" height="250px" title={"Mi biografía"} color={colors.red}>
                                    <p>
                                        Mi pasión por la tecnología y los ordenadores empezó cuando era pequeño, mi
                                        madre en su
                                        empresa
                                        tenía un ordenador y siempre me llamaba la atención, me encantaba ver cómo
                                        funcionaba, me
                                        pasaba
                                        horas utilizando el paint de ese Windows XP o incluso arrastrando viendo ese
                                        recuadro azul
                                        que
                                        se arrastraba por la pantalla. Siempre me he criado con tecnología, desde
                                        dispositivos
                                        viejos,
                                        como cuando una vez intenté revivir una vieja PSP, hasta el último iPhone que
                                        salió en esos
                                        tiempos,
                                        en ese aspecto pienso que he sido muy afortunado.
                                        <br/>
                                        <br/>
                                        Mi camino el programación empezó en la pandemia, me encontraba en 3º de la ESO y
                                        me interesó
                                        el crear programas, porque muchas veces cuando necesitaba
                                        algo no había una aplicación que lo hiciera, así que me puse a investigar y
                                        encontré el
                                        mundo de la
                                        programación, empecé viendo tutoriales de Java y de pseudocódigo utilizando
                                        Raptor, pero lo
                                        dejé de lado,
                                        ya que en esos momentos no me llamaba la atención tanto como ahora. Ese mismo
                                        verano también
                                        conocí a un
                                        muchacho que me dijo que tenía un grado medio y que estaba programando desde su
                                        casa. Yo
                                        decidí que al terminar
                                        el curso me apuntaría a un grado medio de informática, y así lo hice, cuando
                                        terminé 4º de
                                        la ESO me apunté a
                                        un grado medio.
                                        <br/>
                                        <br/>
                                        En ese grado medio aprendí los fundamentos de la informática, como el hardware,
                                        software y
                                        redes. También sobre el
                                        camino en ese grado, me interesó Linux, lo había utilizado antes pero solamente
                                        en mi
                                        antiguo instituto con su
                                        famoso Guadalinex, en este caso utilizaría la distro Parrot, ya que estaba
                                        enfocado en el
                                        hacking y es lo utilizaba
                                        el creador de contenido que yo seguía para aprender hacking ético, S4vitar.
                                        Puede ser que en
                                        hacking no haya avanzado
                                        mucho, pero gracias a este creador de contenido he aprendido mucho sobre Linux y
                                        una meta
                                        que tengo es conseguir la
                                        certificación de eJPT.
                                        <br/>
                                        <br/>
                                        Pero dejando aparte el hacking, terminé este grado medio y no sabía si elegir el
                                        grado
                                        superior
                                        de desarrollo de aplicaciones multiplataforma (DAM) o el aplicaciones web (DAW),
                                        al final me
                                        decanté por el DAM, ya
                                        que me gustaba más el desarrollo de aplicaciones móviles que el desarrollo web.
                                        Y la verdad
                                        que ahora mismo no sé
                                        qué elegir, ya que he descubierto que me gusta mucho el desarrollo web, pero
                                        también me
                                        gusta el desarrollo de
                                        aplicaciones móviles. Así que no sé qué elegir, pero lo que tengo claro es que
                                        quiero seguir
                                        aprendiendo y mejorando
                                        en este mundo de la programación.
                                        <br/>
                                        <br/>
                                        Actualmente me encuentro cursando el 2º año de DAM, aprendiendo Android con
                                        Java, y por mi
                                        cuenta aprendiendo
                                        desarrollo web con Javascript y React. Esta página web es un proyecto que he
                                        realizado para
                                        mostrar mis conocimientos
                                        con React y para mostrar mi portfolio. Espero que si estás leyendo esto te haya
                                        gustado mi
                                        página web, y que no
                                        te haya sido una pesadez. Si quieres contactar conmigo puedes hacerlo a través
                                        de mis redes
                                        sociales o a través
                                        de mi correo electrónico.
                                    </p>
                                </ExpandableCard>

                                <Link to={"/"} className="text-white">
                                    <Card width="450px" height="250px" title={"Publicaciones"} color={colors.yellow}>
                                        <p>Disponible pronto...</p>
                                    </Card>
                                </Link>
                            </div>
                        </div>
                        <div className="absolute" style={{display: 'flex', flexDirection: 'row', gap: '1rem', right: 40, bottom: 20}}>
                            <Link to={"https://github.com/Lucenabo"}>
                            <SiGithub className="text-4xl social text-white "/>
                        </Link>
                            <Link to={"https://www.linkedin.com/in/alucenad/"}>
                            <SiLinkedin className="text-4xl social text-blue-400"/>
                            </Link>
                        </div>
                    </div>)}
                {!this.state.matches && (


                    <div style={{
                        display: 'flex',
                        marginTop: '70rem',
                        padding: '2rem',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '2rem'
                    }}>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem'}}>
                            <h1>Alejandro Lucena</h1>
                            <h2>Desarrollador&nbsp;
                                <TypeAnimation delay={350} infinite={true}>
                                    {[
                                        <WordNeonColor key=" web" word="web" color={wordColors.darkblue}
                                                       effect={false}/>,
                                        ', ',
                                        <WordNeonColor key="android" word="Android" color="green" effect={false}/>,
                                        ' y ',
                                        <WordNeonColor key="java" word="Java" color={wordColors.orange} effect={false}/>
                                    ]}
                                </TypeAnimation>
                            </h2>
                        </div>
                        <div>
                            <Card width="350px" height="550px" color={colors.purple} title="">
                                <div style={{
                                    display: "flex",
                                    gap: "2rem",
                                    flexDirection: "column",
                                    position: "relative"
                                }}>
                                    <p className="text-lg">
                                        Mi nombre es <WordNeonColor word="Alejandro Lucena" color={wordColors.blue}
                                                                    effect={true}/> y
                                        soy estudiante de desarrollo de aplicaciones multiplataforma, soy autodidacta
                                        así que aprendí desarrollo web por mi cuenta.
                                    </p>
                                    <hr style={{
                                        border: "1px solid #5b5b5b",
                                        width: "100%",
                                        position: "absolute",
                                        top: "10rem"
                                    }}/>
                                    <p className="text-lg">
                                        Tengo más de un año de experiencia en <WordNeonColor word="Java"
                                                                                             color={wordColors.orange}
                                                                                             effect={true}/> y varios
                                        meses con <WordNeonColor word="Javascript" color={wordColors.yellow}
                                                                 effect={true}/>.
                                        Me gusta mucho obtener conocimientos aparte de lo
                                        que me explican en clase.
                                    </p>

                                    <div style={{display: "flex", gap: "2rem"}}>
                                        <SiMysql style={{width: '200px'}} className="text-9xl card text-blue-300"/>
                                        <FaJava style={{width: '200px'}} className="text-9xl card text-orange-400"/>
                                        <SiAndroid style={{width: '200px'}} className="text-9xl card text-green-400"/>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Card width="350px" height="250px" title="Skills" color={colors.blue}
                                  className="text-center">
                                <Carousel/>
                            </Card>
                            <Card width="350px" height="250px" title="Certificaciones Recientes"
                                  className="text-center"
                                  color={colors.green}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "1rem"
                                }}>
                                    <img src={cambridge} width="100px" style={{marginTop: "1rem"}} className="logo"
                                         alt="University of Cambridge Logo"/>
                                    <p>First Certificate in English B2</p>
                                </div>
                            </Card>

                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '2rem',
                        }}>
                            <ExpandableCard id="expCard" width="350px" height="225px" title={"Mi biografía"}
                                            color={colors.red}>
                                <p>
                                    Mi pasión por la tecnología y los ordenadores empezó cuando era pequeño, mi
                                    madre en su
                                    empresa
                                    tenía un ordenador y siempre me llamaba la atención, me encantaba ver cómo
                                    funcionaba, me
                                    pasaba
                                    horas utilizando el paint de ese Windows XP o incluso arrastrando viendo ese
                                    recuadro azul
                                    que
                                    se arrastraba por la pantalla. Siempre me he criado con tecnología, desde
                                    dispositivos
                                    viejos,
                                    como cuando una vez intenté revivir una vieja PSP, hasta el último iPhone que
                                    salió en esos
                                    tiempos,
                                    en ese aspecto pienso que he sido muy afortunado.
                                    <br/>
                                    <br/>
                                    Mi camino el programación empezó en la pandemia, me encontraba en 3º de la ESO y
                                    me interesó
                                    el crear programas, porque muchas veces cuando necesitaba
                                    algo no había una aplicación que lo hiciera, así que me puse a investigar y
                                    encontré el
                                    mundo de la
                                    programación, empecé viendo tutoriales de Java y de pseudocódigo utilizando
                                    Raptor, pero lo
                                    dejé de lado,
                                    ya que en esos momentos no me llamaba la atención tanto como ahora. Ese mismo
                                    verano también
                                    conocí a un
                                    muchacho que me dijo que tenía un grado medio y que estaba programando desde su
                                    casa. Yo
                                    decidí que al terminar
                                    el curso me apuntaría a un grado medio de informática, y así lo hice, cuando
                                    terminé 4º de
                                    la ESO me apunté a
                                    un grado medio.
                                    <br/>
                                    <br/>
                                    En ese grado medio aprendí los fundamentos de la informática, como el hardware,
                                    software y
                                    redes. También sobre el
                                    camino en ese grado, me interesó Linux, lo había utilizado antes pero solamente
                                    en mi
                                    antiguo instituto con su
                                    famoso Guadalinex, en este caso utilizaría la distro Parrot, ya que estaba
                                    enfocado en el
                                    hacking y es lo utilizaba
                                    el creador de contenido que yo seguía para aprender hacking ético, S4vitar.
                                    Puede ser que en
                                    hacking no haya avanzado
                                    mucho, pero gracias a este creador de contenido he aprendido mucho sobre Linux y
                                    una meta
                                    que tengo es conseguir la
                                    certificación de eJPT.
                                    <br/>
                                    <br/>
                                    Pero dejando aparte el hacking, terminé este grado medio y no sabía si elegir el
                                    grado
                                    superior
                                    de desarrollo de aplicaciones multiplataforma (DAM) o el aplicaciones web (DAW),
                                    al final me
                                    decanté por el DAM, ya
                                    que me gustaba más el desarrollo de aplicaciones móviles que el desarrollo web.
                                    Y la verdad
                                    que ahora mismo no sé
                                    qué elegir, ya que he descubierto que me gusta mucho el desarrollo web, pero
                                    también me
                                    gusta el desarrollo de
                                    aplicaciones móviles. Así que no sé qué elegir, pero lo que tengo claro es que
                                    quiero seguir
                                    aprendiendo y mejorando
                                    en este mundo de la programación.
                                    <br/>
                                    <br/>
                                    Actualmente me encuentro cursando el 2º año de DAM, aprendiendo Android con
                                    Java, y por mi
                                    cuenta aprendiendo
                                    desarrollo web con Javascript y React. Esta página web es un proyecto que he
                                    realizado para
                                    mostrar mis conocimientos
                                    con React y para mostrar mi portfolio. Espero que si estás leyendo esto te haya
                                    gustado mi
                                    página web, y que no
                                    te haya sido una pesadez. Si quieres contactar conmigo puedes hacerlo a través
                                    de mis redes
                                    sociales o a través
                                    de mi correo electrónico.
                                </p>
                            </ExpandableCard>

                            <Link to={"/"} className="text-white">
                                <Card width="350px" height="250px" title={"Publicaciones"} color={colors.yellow}>
                                    <p>Disponible pronto...</p>
                                </Card>
                            </Link>
                        </div>
                        <footer style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
                            <Link to={"https://github.com/Lucenabo"}>
                                <SiGithub className="text-4xl social text-white "/>
                            </Link>
                            <Link to={"https://www.linkedin.com/in/alucenad/"}>
                                <SiLinkedin className="text-4xl social text-blue-400"/>
                            </Link>
                            <Link to={"/games"}>
                                <button className="btn btn-blue">Juegos</button>
                            </Link>
                        </footer>
                    </div>
                )
                }
            </div>
        )
            ;
    }
}

export default App;