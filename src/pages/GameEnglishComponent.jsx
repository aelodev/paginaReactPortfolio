import React, { useState } from 'react'
import './game.css'

const GameEnglishComponent = () => {
  const [gameStarted, setGameStarted] = useState(false)
  const [currentCardIndex, setCurrentCardIndex] = useState(null)
  const [inputValue, setInputValue] = useState('')

  // Mapa de palabras y definiciones predefinidas
  const initialCards = [
    { key: 'abroad', value: '(al / en el) extranjero' },
    { key: 'carry-on', value: 'de mano' },
    { key: 'deal', value: 'oferta; trato, negocio' },
    {
      key: 'delayed',
      value: 'retrasado/a, demorado/a (get ~: retrasarse, demorarse)',
    },
    { key: 'in advance', value: 'con antelación, previamente' },
    { key: 'location', value: 'ubicación, lugar' },
    { key: 'off season', value: 'en temporada baja' },
    { key: 'outdoors', value: 'al aire libre' },
    {
      key: 'overnight',
      value: 'por / de una noche (for an ~ stay: para pasar una noche)',
    },
    { key: 'stopover', value: 'escala' },
    { key: 'trail', value: 'camino, sendero' },
    { key: 'breathtaking', value: 'impresionante, espectacular' },
    { key: 'closely', value: 'atentamente, con atención' },
    { key: 'deep', value: 'intenso/a; profundo/a' },
    { key: 'encourage', value: 'animar / alentar a; fomentar' },
    { key: 'harbour', value: 'puerto' },
    { key: 'immerse', value: 'sumergirse, meterse de lleno' },
    { key: 'input', value: 'información' },
    { key: 'like-minded', value: 'con ideas afines' },
    { key: 'near and far', value: '(de) todas partes' },
    { key: 'open-air', value: 'al aire libre' },
    { key: 'pay attention', value: 'prestar atención' },
    { key: 'recall', value: 'recordar' },
    { key: 'relive', value: 'revivir, volver a sentir' },
    { key: 'snap', value: 'foto' },
    { key: 'surroundings', value: 'entorno' },
    { key: 'waterfall', value: 'cascada, catarata' },
    { key: 'write down', value: 'apuntar, anotar' },
    {
      key: 'accustomed to',
      value: 'acostumbrado/a a (become ~: acostumbrarse a)',
    },
    { key: 'amazed by', value: 'maravillado/a por' },
    {
      key: 'committed to',
      value: 'comprometido/a con (be ~: comprometerse a)',
    },
    {
      key: 'curious about',
      value:
        'curioso/a sobre, interesado/a por (be ~: tener curiosidad / interés por)',
    },
    { key: 'disappointed with', value: 'decepcionado/a / desilusionado/a con' },
    { key: 'excited about', value: 'emocionado/a / entusiasmado/a por' },
    { key: 'experienced in', value: 'experto/a en' },
    { key: 'frustrated by', value: 'frustrado/a con' },
    { key: 'impressed with', value: 'impresionado/a con' },
    { key: 'jealous of', value: 'celoso/a de (be ~: tener envidia de)' },
    { key: 'popular with', value: 'conocido/a por, famoso/a entre' },
    { key: 'responsible for', value: 'responsable de' },
    { key: 'a matter of life and death', value: 'un asunto de vida o muerte' },
    { key: 'a matter of opinion', value: 'cuestión de opiniones' },
    { key: 'a matter of time', value: 'una cuestión de tiempo' },
    { key: 'as a matter of fact', value: 'de hecho, en realidad' },
    {
      key: 'be no laughing matter',
      value: 'no tener (ninguna) gracia, no ser objeto de broma',
    },
    { key: "it doesn't matter", value: 'no importa' },
    { key: 'mind over matter', value: '(fuerza de) voluntad' },
    { key: 'no matter', value: 'sin importar, independientemente de' },
    {
      key: 'the truth of the matter',
      value: 'la verdad / lo cierto (del asunto), la realidad de los hechos',
    },
    { key: 'to make matters worse', value: 'para colmo' },
    {
      key: "What's the matter?",
      value: '¿Qué pasa / ocurre?, ¿Cuál es el problema?',
    },
    { key: 'a matter of record', value: 'un asunto conocido' },
    { key: 'as a matter of course', value: 'de forma rutinaria' },
    { key: 'associated with', value: 'asociado/a / relacionado/a con' },
    { key: 'bad at', value: 'malo/a para (I’m so ~: no se me da nada bien)' },
    { key: 'crowded with', value: 'abarrotado/a / lleno/a de' },
    { key: 'deepen', value: 'profundizar (en); intensificarse' },
    { key: 'delay', value: 'retraso' },
    { key: 'encouraged', value: 'motivado/a, animado/a' },
    { key: 'encouragement', value: 'ánimo(s)' },
    { key: 'fascinated by', value: 'fascinado/a por' },
    { key: 'for that matter', value: 'en realidad, de hecho' },
    { key: 'immersion', value: 'inmersión' },
    { key: 'immersive', value: 'inmersivo/a' },
    { key: 'mad about', value: 'muy entusiasmado/a con' },
    { key: 'shocked by', value: 'sorprendido/a / estupefacto/a por' },
    { key: 'surrounded', value: 'rodeado/a' },
    { key: 'the fact of the matter is', value: 'la verdad / el hecho es que' },
    { key: 'assignment', value: 'trabajo, tarea' },
    { key: 'cheat', value: 'copiar, hacer trampas, engañar' },
    { key: 'compulsory', value: 'obligatorio/a' },
    { key: 'degree', value: 'título, grado' },
    { key: 'drop out', value: 'abandonar / dejar (los estudios)' },
    { key: 'enrolled', value: 'inscrito/a, matriculado/a' },
    { key: 'field', value: 'campo, sector' },
    { key: 'punishment', value: 'castigo' },
    { key: 'requirement', value: 'requisito' },
    { key: 'revise', value: 'repasar' },
    { key: 'scholarship', value: 'beca' },
    { key: 'attend', value: 'asistir / ir a' },
    { key: 'be into something', value: 'gustar mucho / apasionar algo' },
    { key: 'be up to', value: 'planear, tener en mente' },
    { key: 'enhance', value: 'mejorar' },
    { key: 'expect', value: 'esperar, tener la expectativa de que' },
    { key: 'expose', value: 'exponer (a)' },
    {
      key: 'force',
      value:
        'obligar (a) (be ~d to: verse obligado/a a, no quedarle (a alguien) más remedio que)',
    },
    { key: 'glad', value: 'contento/a (be ~: alegrarse de (que))' },
    { key: 'host', value: 'acoger / alojar a' },
    {
      key: 'look back',
      value: 'recordar; volver la vista atrás, pensar en el pasado',
    },
    { key: 'open-minded', value: 'abierto/a de mente' },
    { key: 'outgoing', value: 'extrovertido/a, sociable' },
    { key: 'roommate', value: 'compañero/a de habitación' },
    { key: 'stubborn', value: 'testarudo/a, terco/a' },
    {
      key: 'unfamiliar',
      value:
        'desconocido/a (be with: no conocer, no estar familiarizado/a con)',
    },
    { key: 'eye-catching', value: 'llamativo/a, vistoso/a' },
    { key: 'first-hand', value: 'de primera mano, personal' },
    { key: 'half-hearted', value: 'tímido/a, que transmite poco entusiasmo' },
    { key: 'kind-hearted', value: 'bondadoso/a, que tiene buen corazón' },
    { key: 'long-lasting', value: 'duradero/a' },
    { key: 'part-time', value: 'a tiempo parcial' },
    { key: 'short-term', value: 'a corto plazo, temporal' },
    { key: 'time-saving', value: 'que ahorra tiempo' },
    { key: 'back up', value: 'apoyar / respaldar a' },
    { key: 'cheer up', value: 'levantar el ánimo / animar (a)' },
    { key: 'count on', value: 'contar con, confiar en' },
    { key: 'get around to', value: 'sacar / encontrar tiempo para' },
    { key: 'get back', value: 'recuperar' },
    { key: 'get by', value: 'arreglárselas, salir adelante' },
    { key: 'go over', value: 'repasar' },
    { key: 'hand in', value: 'entregar' },
    { key: 'hold back', value: 'retener / frenar a' },
    { key: 'leave out', value: 'excluir, dejar fuera' },
    { key: 'look up to', value: 'admirar / respetar a' },
    { key: 'think over', value: 'pensar en, considerar' },
    { key: 'attendance', value: 'asistencia' },
    { key: 'bring up', value: 'sacar (un tema), mencionar' },
    { key: 'cheat', value: 'persona tramposa; engaño, estafa' },
    { key: 'cheating', value: 'acto de copiar, trampa(s)' },
    { key: 'expectation', value: 'expectativa' },
    { key: 'expected', value: "previsto/a (it wasn't ~: no era lo esperado)" },
    { key: 'forced', value: 'forzado/a, obligado/a' },
    { key: 'forceful', value: 'enérgico/a, fuerte' },
    { key: 'get at', value: 'querer decir, insinuar' },
    { key: 'keep up', value: 'seguir el ritmo, estar al día' },
    { key: 'narrow-minded', value: 'cerrado/a de mente, estrecho/a de miras' },
    { key: 'require', value: 'requerir / necesitar (que)' },
    { key: 'revised', value: 'revisado/a' },
    { key: 'revision', value: 'repaso' },
    { key: 'self-centred', value: 'egocéntrico/a, egoísta' },
    { key: 'strong-willed', value: 'tozudo/a, terco/a' },
    { key: 'well-behaved', value: 'educado/a, formal (be ~: portarse bien)' },
    { key: 'well-paid', value: 'bien pagado/a / remunerado/a' },
    { key: 'act out', value: 'representar, interpretar' },
    { key: 'lay down', value: 'dejar, poner a un lado' },
    { key: 'act up', value: 'portarse mal' },
    { key: 'leave out', value: 'excluir, dejar fuera' },
    { key: 'back up', value: 'apoyar/respaldar a' },
    { key: 'lock up', value: 'encerrar, meter en la cárcel' },
    { key: 'blow up', value: 'ponerse furioso/a, explotar' },
    {
      key: 'look back',
      value: 'recordar; volver la vista atrás, pensar en el pasado',
    },
    { key: 'break out', value: 'estallar (guerra); desatarse, brotar' },
    { key: 'look into', value: 'informar(se) sobre, investigar' },
    { key: 'break up', value: 'separarse' },
    { key: 'look up', value: 'buscar (información)' },
    { key: 'bring back', value: 'traer' },
    { key: 'look up to', value: 'admirar/respetar a' },
    { key: 'bring up', value: 'criar(se); sacar (un tema), mencionar' },
    { key: 'make up', value: 'formar, ser, representar' },
    { key: 'call off', value: 'cancelar' },
    { key: 'move into', value: 'instalarse/establecerse en' },
    { key: 'catch on', value: 'ponerse de moda, popularizarse; tener éxito' },
    {
      key: 'catch (someone) out',
      value: 'pillar (a alguien) desprevenido/a/por banda',
    },
    { key: 'check out', value: 'inspeccionar, echar un vistazo a: comprobar' },
    {
      key: 'move on',
      value:
        'seguir adelante, continuar, pasar/cambiar (de una actividad a otra)',
    },
    { key: 'check up on', value: 'controlar' },
    { key: 'move out', value: 'mudarse, irse; sacar' },
    { key: 'cheer up', value: 'levantar el ánimo/animar (a)' },
    { key: 'pair up', value: 'emparejar, dividir en parejas' },
    { key: 'clean up', value: 'limpiar' },
    { key: 'pick up', value: 'recoger' },
    { key: 'clock in', value: 'fichar (por)' },
    { key: 'pop up', value: 'aparecer (de repente), surgir' },
    { key: 'come about', value: 'surgir, aparecer' },
    { key: 'pull in', value: 'interesar, enganchar' },
    { key: 'come down with', value: 'contraer, enfermar de' },
    { key: 'pull off', value: 'sacar adelante, lograr, conseguir' },
    { key: 'come out', value: 'estrenarse' },
    { key: 'pull out', value: 'sacar' },
    { key: 'come up', value: 'acercarse, avecinarse' },
    { key: 'pull through', value: 'reponerse, recobrar la salud' },
    { key: 'count on', value: 'contar con, confiar en' },
    { key: 'push down', value: 'empujar' },
    { key: 'cut down on', value: 'reducir, recortar' },
    { key: 'put aside', value: 'ahorrar, guardar' },
    { key: 'drop by', value: 'pasarse (por un lugar)' },
    { key: 'put down', value: 'apuntar' },
    { key: 'drop out', value: 'abandonar/dejar (los estudios)' },
    { key: 'put off', value: 'aplazar, posponer' },
    { key: 'fall apart', value: 'romperse en pedazos, desarmarse' },
    { key: 'run out of', value: 'quedarse sin' },
    { key: 'fall behind', value: 'quedarse atrás, retrasarse' },
    { key: 'set up', value: 'instalar, poner' },
    { key: 'fall out', value: 'enfadarse, discutir' },
    {
      key: 'shop around (for)',
      value: 'comparar los precios (de algo) en distintas tiendas',
    },
    { key: 'fence off', value: 'vallar, cercar' },
    { key: 'show off', value: 'hacer alarde de, lucir' },
    { key: 'fight back', value: 'defenderse' },
    { key: 'show up', value: 'presentarse (en un lugar), aparecer' },
    { key: 'fill in', value: 'sustituir, complementar' },
    { key: 'shut down', value: 'apagar' },
    { key: 'fill in for', value: 'sustituir a' },
    { key: 'sit back', value: 'quedarse sentado/a/de brazos cruzados' },
    { key: 'fill out', value: 'rellenar, cumplimentar' },
    { key: 'sit through', value: 'quedarse/ aguantar hasta el final' },
    { key: 'find out', value: 'descubrir, averiguar' },
    { key: 'slack off', value: 'vaguear, aflojar el ritmo de trabajo' },
    { key: 'fit in', value: 'encajar' },
    { key: 'sort out', value: 'solucionar, arreglar' },
    {
      key: 'follow up',
      value: 'investigar los precedentes; hacer un seguimiento',
    },
    { key: 'sort through', value: 'revisar' },
    { key: 'get along', value: 'llevarse bien' },
    { key: 'speak out', value: 'pronunciarse, expresar la opinión' },
    { key: 'get around to', value: 'sacar/encontrar tiempo para' },
    { key: 'stand out', value: 'destacar' },
    { key: 'get at', value: 'querer decir, insinuar' },
    { key: 'stay over', value: 'quedarse a dormir' },
    { key: 'get back', value: 'recuperar' },
    { key: 'step up', value: 'avanzar, dar un paso adelante' },
    { key: 'get by', value: 'arreglárselas, salir adelante' },
    { key: 'stop by', value: 'pasarse (por un sitio)' },
    { key: 'get into', value: 'dedicarse a, meterse en' },
    { key: 'stress out', value: 'estresar a' },
    { key: 'get over', value: 'recuperarse de, superar' },
    { key: 'take (time) off', value: 'tomarse (tiempo) libre/de vacaciones' },
    { key: 'get up', value: 'levantarse' },
    { key: 'take on', value: 'aceptar, hacerse cargo de' },
    { key: 'give up', value: 'rendirse, dejar de intentar' },
    { key: 'take over', value: 'ocupar, reemplazar; absorber, adueñarse de' },
    { key: 'grow up', value: 'crecer, hacerse mayor' },
    { key: 'take up', value: 'ocupar/llevar (tiempo); coger, agarrar' },
    { key: 'hand in', value: 'entregar' },
    { key: 'tell off', value: 'regañar/reprender a' },
    { key: 'hold back', value: 'retener/frenar a' },
    { key: 'think over', value: 'pensar en, considerar' },
    { key: 'keep on', value: 'seguir, continuar' },
    { key: 'throw away', value: 'tirar, deshacerse de' },
    { key: 'keep up', value: 'seguir el ritmo, estar al día' },
    { key: 'turn up', value: 'subir (volumen)' },
    { key: 'knock down', value: 'derribar, atropellar' },
    { key: 'work out', value: 'entender, averiguar' },
    { key: 'lay down', value: 'dejar, poner a un lado' },
    { key: 'write down', value: 'apuntar, anotar' },
  ]

  const [gameCards, setGameCards] = useState([]) // Almacena las cartas para el juego actual
  // Función para obtener un índice aleatorio
  const getRandomIndex = (max) => {
    return Math.floor(Math.random() * max)
  }
  // Iniciar el juego con cartas aleatorias
  const startGame = () => {
    if (initialCards.length > 0) {
      const textIntro = document.querySelector('.text-intro-section')
      textIntro.classList.add('hide-animation')
      textIntro.classList.add('hide')
      const shuffledCards = [...initialCards].sort(() => Math.random() - 0.5) // Barajar las cartas
      setGameCards(shuffledCards) // Cargamos las cartas barajadas para el juego
      setCurrentCardIndex(0) // Empieza desde la primera carta
      setGameStarted(true)
    } else {
      alert('No hay cartas para jugar.')
    }
  }

  // Función para normalizar texto (quitar tildes y poner en minúsculas)
  const normalizeText = (text) => {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
  }

  // Verificar la respuesta
  const checkAnswer = () => {
    if (
      normalizeText(inputValue.trim()) ===
      normalizeText(gameCards[currentCardIndex].key)
    ) {
      alert('¡Correcto!')
      setInputValue('')
      if (currentCardIndex < gameCards.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1)
      } else {
        alert('¡Has completado todas las cartas!')
        setGameStarted(false)
        alert('La página se recargará en 10 segundos.')
        setTimeout(() => {
          window.location.reload()
        }, 10000)
      }
    } else {
      alert('Inténtalo de nuevo.')
    }
  }

  window.onbeforeunload = function (event) {
    event.preventDefault()
    event.returnValue =
      'Si refrescas la página, se perderá todo el progreso. ¿Estás seguro de que quieres refrescar?'
  }

  return (
    <main>
      <section className="text-intro-section">
        <h1>Study game for Nadiacita</h1>
        <p>Try to guess the keyword that corresponds to each definition</p>
        <button onClick={startGame}>Start game</button>
      </section>

      {/* Mostrar las cartas en la sección de juego */}
      {gameStarted && currentCardIndex !== null && (
        <section className="game-section show-animation">
          <div id="game-container">
            <div id="game-card">
              <h3>{gameCards[currentCardIndex].value}</h3>{' '}
              {/* Muestra la definición */}
            </div>
            <div id="game-input-container">
              <input
                type="text"
                id="game-input"
                placeholder="Write the word"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button id="game-submit-button" onClick={checkAnswer}>
                Check
              </button>
              <button
                id="game-show-answer-button"
                onClick={() => alert(gameCards[currentCardIndex].key)}
              >
                Show the solution
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

export default GameEnglishComponent
