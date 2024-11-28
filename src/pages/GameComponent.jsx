import React, { useState } from 'react'
import './game.css'

const GameComponent = () => {
  const [gameStarted, setGameStarted] = useState(false)
  const [currentCardIndex, setCurrentCardIndex] = useState(null)
  const [inputValue, setInputValue] = useState('')

  // Mapa de palabras y definiciones predefinidas
  const initialCards = [
    {
      key: 'Cambio climático',
      value:
        'Variación en los elementos del clima de la Tierra debido a causas naturalesy humanas.',
    },
    {
      key: 'Desarrollo sostenible',
      value:
        'Conjunto de vías de progreso económico, social y político capaces de satisfacer las necesidades actuales sin comprometer los recursos y posibilidades de las futuras generaciones.',
    },
    {
      key: 'Escala de un mapa',
      value:
        'Relación existente entre la representación reducida de una distancia o un objeto sobre un mapa y su tamaño real sobre el terreno..',
    },
    {
      key: 'Globalización',
      value:
        'Proceso de interacción entre los diferentes países del mundo en ámbitos económicos, sociales, políticos, ambientales y culturales favorecido por la implantación de la economía de libre mercado, la integración política en organizaciones internacionales y el desarrollo de los transportes.',
    },
    {
      key: 'Latitud geográfica',
      value:
        'Distancia angular entre el paralelo que pasa por un punto y el Ecuador. Puede ser latitud Norte o Sur.',
    },
    {
      key: 'Longitud geográfica',
      value:
        'Distancia angular entre el meridiano que pasa por un punto y el meridiano de referencia (0º o de Greenwich). Puede ser longitud Este u Oeste.',
    },
    {
      key: 'Mapa tématico',
      value:
        'Cartografía que utiliza diferentes símbolos puntuales, lineales o de superficies, descritos en una leyenda, para representar la distribución y otros fenómenos geográficos (evolución, densidad, flujos, etc.) de un tema concreto (población, economía, etc.).',
    },
    {
      key: 'Mapa topográfico',
      value:
        'Cartografía que representa a escala, y mediante algún sistema de proyección, la superficie terrestre en sus tres dimensiones, incluyendo elementos tanto físicos como humanos que se encuentren sobre ella.',
    },
    {
      key: 'Meridiano',
      value:
        'Semicircunferencia imaginaria perpendicular al Ecuador que pasa por los polos geográficos, respecto a los que se mide la longitud',
    },
    {
      key: 'Nodo',
      value:
        'Concentración geográfica espacial en un área muy localizada de diversos tipos de actividades como comercio, servicios, industrial.',
    },
    {
      key: 'Objetivos de desarrollo sostenible',
      value:
        'Conjunto de metas orientadas a erradicar la pobreza, proteger el planeta y asegurar la prosperidad para todos, y cuyo alcance está fijado para 2030.',
    },
    {
      key: 'Ordenación del territorio',
      value:
        'Marco jurídico general conformado por normas, programas, directrices y planes, que orientan y regulan las actuaciones y procesos de asentamiento sobre el territorio.',
    },
    {
      key: 'Paisaje geográfico',
      value:
        'Porción del territorio que presenta unas características morfológicas y funcionales semejantes, como resultado de la acción y la interacción de factores naturales y humanos.',
    },
    {
      key: 'Paralelo',
      value:
        'Circunferencia imaginaria paralela al Ecuador cuyo perímetro se reduce hacia los polos. Son la referencia para la medida de la latitud',
    },
    {
      key: 'Sistema de Información Geográfica (SIG)',
      value:
        ' Sistema informatizado de representación cartográfica y análisis de datos relacionados con posiciones en la superficie terrestre.',
    },
    {
      key: 'Altitud',
      value:
        'Distancia vertical desde cualquier punto de la superficie terrestre al nivel del mar.',
    },
    {
      key: 'Archipielago',
      value:
        'Conjunto de islas próximas entre sí, normalmente situadas en mar abierto y con un origen geológico común.',
    },
    {
      key: 'Bahía',
      value:
        'Entrada natural de mar en la costa con orillas suaves, de extensión considerable, pero menor que la de un golfo, aunque no existe una delimitación precisa.',
    },
    {
      key: 'Cordillera',
      value:
        'Cadena de montañas enlazadas entre sí y cuyo conjunto forma una individualidad geográfica.',
    },
    {
      key: 'Cuenca sedimentaria',
      value:
        'Zona deprimida formada por el hundimiento de un bloque de un zócalo por presiones orográficas, tras lo cual se va rellenando con sedimentos y formando un relieve relativamente llano.',
    },
    {
      key: 'Delta fluvial',
      value:
        'Zona de acumulación de sedimentos fluviales que se forma en la desembocadura de algunos ríos cuando las mareas son débiles y la acumulación de aluviones supera a la erosión. Suele tener una forma triangular.',
    },
    {
      key: 'Isohipsas',
      value:
        'Líneas continuas utilizadas en la representación del relieve en los mapas topográficos para unir puntos situados a la misma altitud.',
    },
    {
      key: 'Litoral',
      value:
        ' Área de transición entre ambientes marinos y terrestres. Es la porción de terreno costera de una superficie emergida',
    },
    {
      key: 'Marisma',
      value:
        'Terreno bajo y pantanoso que es invadido recurrentemente por las aguas del mar a través de las mareas o por las de los ríos en sus crecidas.',
    },
    {
      key: 'Meseta',
      value:
        'Superficie llana o ligeramente inclinada, cortada por valles y situada a una cierta altitud con respecto al nivel del mar.',
    },
    {
      key: 'Morfología cárstica',
      value:
        'Forma de relieve originada por descomposición química de determinadas rocas (caliza, yeso, etc.), compuestas por minerales solubles en agua. Se crean formas típicas como lapiaces, dolinas, poljés, cuevas, gargantas y simas',
    },
    {
      key: 'Península',
      value:
        'Porción de tierra rodeada de agua por todas partes menos por una, denominada istmo, que la une a otra tierra de mayor extensión, generalmente un continente.',
    },
    {
      key: 'Rambla',
      value:
        'Cauce normalmente seco, en ámbitos semiáridos y áridos, y que presenta aguas corrientes cuando ocurren precipitaciones.',
    },
    {
      key: 'Relieve Alpino',
      value:
        'Relieve surgido como consecuencia del plegamiento de los materiales blandos y plásticos durante la orogenia alpina. Toma su nombre de los Alpes y presenta formas abruptas y de mayores altitudes.',
    },
    {
      key: 'Relieve herciniano',
      value:
        'Montañas formadas durante la orogénesis herciniana de la Era Primaria, que presentan formas suaves y redondeadas por ser materiales muy antiguos que han sufrido una continuada erosión. Sus materiales son metamórficos y muy fallados.',
    },
    {
      key: 'Zócalo',
      value:
        'Llanura o meseta formada en la era secundaria al erosionarse las cordilleras surgidas en la orogenia herciniana. Forma la base de posteriores cuencas sedimentarias y cordilleras.',
    },
    {
      key: 'Amplitud térmica',
      value:
        'Diferencia entre la temperatura máxima y mínima de un periodo de tiempo (día, mes, año). Es sinónimo de oscilación térmica.',
    },
    {
      key: 'Anticiclón',
      value:
        'Centro de acción con presión atmosférica alta (superior a 1013 milibares, que es la presión media a nivel del mar). En ellos el aire desciende, generando estabilidad atmosférica (tiempo despejado y seco).',
    },
    {
      key: 'Aridez',
      value:
        'Situación resultante de la falta de agua por la insuficiencia de las precipitaciones. Está en relación con las necesidades de la vegetación y el régimen térmico (a mayor temperatura, mayor aridez).',
    },
    {
      key: 'Barlovento',
      value:
        'Lado de una elevación geográfica o área que está directamente expuesta a los vientos dominantes.',
    },
    {
      key: 'Borrasca',
      value:
        'Centro de acción con baja presión atmosférica (inferior a los 1013 milibares, que es la presión media a nivel del mar). En ellas el aire asciende, lo que genera nubosidad, precipitaciones y, por tanto, tiempo inestable.',
    },
    {
      key: 'Clima',
      value:
        'Sucesión habitual de los estados atmosféricos o tipos de tiempo en un lugar o región determinada durante un periodo temporal amplio.',
    },
    {
      key: 'Continentalidad',
      value:
        'Conjunto de características climáticas propias de las áreas alejadas de la influencia del mar. Las más destacadas son el aumento de la amplitud térmica intraanual y la disminución de las precipitaciones.',
    },
    {
      key: 'Corriente en Chorro (“Jet Stream”)',
      value:
        'Flujo de viento de estructura tubular existente en altura (entre los 9 y 11 km de altitud) a gran velocidad (entre los 200 y 400 km/h), causante de la distribución de presiones en altura y superficie. Separa las masas de aire de origen polar y tropical. Puede circular de forma rápida con trayectoria zonal poco ondulada o circular de forma más lenta con trayectoria fuertemente ondulada.',
    },
    {
      key: 'Depresión aislada en niveles altos (DANA)',
      value:
        'Embolsamiento de aire frío rodeado por aire más cálido debido a una profunda ondulación de la corriente en chorro polar, que acaba desprendiéndose y avanzando hacia latitudes más cálidas. Genera gran inestabilidad, con chubascos intensos y fuertes tormentas, especialmente si el aire en superficie es muy cálido y húmedo.',
    },
    {
      key: 'Equinoccio',
      value:
        'Cada uno de los dos momentos del año en el que, por hallarse el Sol sobre el ecuador, la duración del día y de las noches es la misma en toda la Tierra. Sucede del 20 al 21 de marzo y del 22 al 23 de septiembre',
    },
    {
      key: 'Frente polar',
      value:
        'Discontinuidad que separa la masa de aire frío polar de la masa de aire cálida tropical, en cuyo seno se originan borrascas que dan lugar a intensas precipitaciones.',
    },
    {
      key: 'Humedad atmosférica',
      value:
        'Cantidad de vapor de agua que contine el aire. Disminuye conforme aumenta la temperatura.',
    },
    {
      key: 'Isobaras',
      value:
        'Líneas imaginarias dibujadas en un mapa que unen todos los puntos que muestran una misma presión atmosférica.',
    },
    {
      key: 'Isotermas',
      value:
        'Líneas imaginarias dibujadas en un mapa que representan todos los puntos que tienen la misma temperatura del aire.',
    },
    {
      key: 'Isoyetas',
      value:
        'Líneas imaginarias dibujadas en un mapa que pasa por todos los puntos que tienen la misma precipitación.',
    },
    {
      key: 'Precipitaciones',
      value:
        'Cantidad de agua, en forma de lluvia, nieve o granizo, que cae en un lugar. Suelen medirse en mm o l/m2. Pueden ser orográficas (de relieve), convectivas (por calentamiento del suelo) o frontales (por frentes de acción).',
    },
    {
      key: 'Presión atmosférica',
      value:
        'Fuerza que ejerce el aire atmosférico por unidad de área sobre la superficie terrestre. Se mide con el barómetro, en milibares (mbar) o hectopascales (hPa) y se representa en los mapas mediante isobaras.',
    },
    {
      key: 'Régimen pluviométrico',
      value:
        'Variación experimentada por las lluvias a lo largo de las estaciones en función de distintos factores.',
    },
    {
      key: 'Régimen térmico',
      value:
        'Variación experimentada por las temperaturas a lo largo de las estaciones en función de distintos factores.',
    },
    {
      key: 'Sequía',
      value:
        'Periodo prolongado de tiempo con déficit de agua en un área determinada, debido a la escasez o ausencia de precipitaciones.',
    },
    {
      key: 'Solana',
      value:
        'Vertiente de la ladera de una montaña con mayor exposición a los rayos del Sol, tanto en relación con su ángulo de incidencia como con el tiempo de duración. En el hemisferio septentrional es la vertiente sur de una cordillera o montaña; en el austral, la vertiente norte.',
    },
    {
      key: 'Solsticio',
      value:
        'Cada uno de los dos momentos anuales en que el Sol se halla en uno de los dos trópicos, lo cual sucede del 21 al 22 de junio para el de Cáncer, y del 21 al 22 de diciembre para el de Capricornio, y en los que la diferencia entre la duración del día y la noche es mayor.',
    },
    {
      key: 'Sotavento',
      value: 'Ladera de un relieve o región protegida del viento.',
    },
    {
      key: 'Tiempo atmosférico',
      value:
        'Estado físico de la atmósfera en un momento preciso y en un lugar determinado. Se define por los valores de elementos como la temperatura, la humedad y la precipitación, el viento, la presión o la insolación, entre otros.',
    },
    {
      key: 'Umbría',
      value:
        'Vertiente de la ladera de una montaña con menor exposición a los rayos solares, tanto con respecto a su ángulo de incidencia como a su duración. Corresponde a las laderas orientadas al norte en el hemisferio septentrional y a las del sur en el austral.',
    },
    {
      key: 'Caudal de un río',
      value:
        'Cantidad de agua por unidad de tiempo que fluye por una corriente de un río o arroyo en un lugar determinado. Se mide generalmente en (m3/s) en las estaciones de aforo.',
    },
    {
      key: 'Ciclo hidrológico',
      value:
        'Proceso de circulación del agua modificando su estado físico (líquido, sólido, gaseoso) por la hidrosfera.',
    },
    {
      key: 'Cuenca hidrográfica',
      value:
        'Espacio entre divisorias de agua recorrido por un río principal y sus afluentes.',
    },
    {
      key: 'Estiaje',
      value:
        'Período durante el cual los ríos y arroyos alcanzan su caudal más bajo.',
    },
    {
      key: 'Estuario',
      value:
        'Desembocadura abierta de un río hacia el mar, con forma de embudo, en la que penetran las aguas marinas. Se ve afectada por las mareas y el oleaje marino, al tiempo que se produce interacción de las aguas dulces del río con las saladas procedentes del mar.',
    },
    {
      key: 'Meandro',
      value:
        'Curva descrita por el curso de un río cuya sinuosidad es pronunciada.',
    },
    {
      key: 'Red hidrográfica',
      value:
        'Conjunto formado por un río, sus afluentes y los cursos de agua atribuidos a estos últimos. Está condicionada por el relieve y el clima.',
    },
    {
      key: 'Régimen fluvial',
      value:
        'Variación del caudal de un río a lo largo del año. Depende de la distribución anual de las precipitaciones y de la cantidad de nieve acumulada en los meses de invierno que se derrite y se incorpora al caudal de los ríos en primavera y verano.',
    },
    {
      key: 'Ría',
      value:
        'Valle fluvial que, en su desembocadura, es inundado por agua marina debido al hundimiento de la línea de costa, a un aumento del nivel del mar o a ambos fenómenos a la vez.',
    },
    {
      key: 'Torrente',
      value:
        'Corriente natural de agua situada en una zona montañosa, con fuertes pendientes, caudal irregular y que puede tener gran capacidad de erosión.',
    },
    {
      key: 'Trasvase fluvial',
      value:
        'Obra de ingeniería hidráulica que conecta dos cuencas hidrográficas, una excedentaria y otra deficitaria con el fin de abastecer de agua a la cuenca de menor caudal y de esta manera poder satisfacer sus necesidades hídricas.',
    },
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
        <h1>Juego de estudiar para Nadiacita</h1>
        <p>
          En este juego, intenta adivinar la palabra clave que corresponde a
          cada definición.
        </p>
        <button onClick={startGame}>Empezar juego</button>
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
                placeholder="Escribe la palabra"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button id="game-submit-button" onClick={checkAnswer}>
                Comprobar
              </button>
              <button
                id="game-show-answer-button"
                onClick={() => alert(gameCards[currentCardIndex].key)}
              >
                Mostrar respuesta
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

export default GameComponent
