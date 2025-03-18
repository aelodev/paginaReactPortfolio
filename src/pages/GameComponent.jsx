import React, { useState } from "react";
import "./game.css";

const GameComponent = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(null);
  const [inputValue, setInputValue] = useState("");

  // Mapa de palabras y definiciones predefinidas
  const initialCards = [
    /*
    {
      key: "Cambio climático",
      value:
        "Variación en los elementos del clima de la Tierra debido a causas naturalesy humanas.",
    },
    {
      key: "Desarrollo sostenible",
      value:
        "Conjunto de vías de progreso económico, social y político capaces de satisfacer las necesidades actuales sin comprometer los recursos y posibilidades de las futuras generaciones.",
    },
    {
      key: "Escala de un mapa",
      value:
        "Relación existente entre la representación reducida de una distancia o un objeto sobre un mapa y su tamaño real sobre el terreno..",
    },
    {
      key: "Globalización",
      value:
        "Proceso de interacción entre los diferentes países del mundo en ámbitos económicos, sociales, políticos, ambientales y culturales favorecido por la implantación de la economía de libre mercado, la integración política en organizaciones internacionales y el desarrollo de los transportes.",
    },
    {
      key: "Latitud geográfica",
      value:
        "Distancia angular entre el paralelo que pasa por un punto y el Ecuador. Puede ser latitud Norte o Sur.",
    },
    {
      key: "Longitud geográfica",
      value:
        "Distancia angular entre el meridiano que pasa por un punto y el meridiano de referencia (0º o de Greenwich). Puede ser longitud Este u Oeste.",
    },
    {
      key: "Mapa tématico",
      value:
        "Cartografía que utiliza diferentes símbolos puntuales, lineales o de superficies, descritos en una leyenda, para representar la distribución y otros fenómenos geográficos (evolución, densidad, flujos, etc.) de un tema concreto (población, economía, etc.).",
    },
    {
      key: "Mapa topográfico",
      value:
        "Cartografía que representa a escala, y mediante algún sistema de proyección, la superficie terrestre en sus tres dimensiones, incluyendo elementos tanto físicos como humanos que se encuentren sobre ella.",
    },
    {
      key: "Meridiano",
      value:
        "Semicircunferencia imaginaria perpendicular al Ecuador que pasa por los polos geográficos, respecto a los que se mide la longitud",
    },
    {
      key: "Nodo",
      value:
        "Concentración geográfica espacial en un área muy localizada de diversos tipos de actividades como comercio, servicios, industrial.",
    },
    {
      key: "Objetivos de desarrollo sostenible",
      value:
        "Conjunto de metas orientadas a erradicar la pobreza, proteger el planeta y asegurar la prosperidad para todos, y cuyo alcance está fijado para 2030.",
    },
    {
      key: "Ordenación del territorio",
      value:
        "Marco jurídico general conformado por normas, programas, directrices y planes, que orientan y regulan las actuaciones y procesos de asentamiento sobre el territorio.",
    },
    {
      key: "Paisaje geográfico",
      value:
        "Porción del territorio que presenta unas características morfológicas y funcionales semejantes, como resultado de la acción y la interacción de factores naturales y humanos.",
    },
    {
      key: "Paralelo",
      value:
        "Circunferencia imaginaria paralela al Ecuador cuyo perímetro se reduce hacia los polos. Son la referencia para la medida de la latitud",
    },
    {
      key: "Sistema de Información Geográfica (SIG)",
      value:
        " Sistema informatizado de representación cartográfica y análisis de datos relacionados con posiciones en la superficie terrestre.",
    },
    {
      key: "Altitud",
      value:
        "Distancia vertical desde cualquier punto de la superficie terrestre al nivel del mar.",
    },
    {
      key: "Archipielago",
      value:
        "Conjunto de islas próximas entre sí, normalmente situadas en mar abierto y con un origen geológico común.",
    },
    {
      key: "Bahía",
      value:
        "Entrada natural de mar en la costa con orillas suaves, de extensión considerable, pero menor que la de un golfo, aunque no existe una delimitación precisa.",
    },
    {
      key: "Cordillera",
      value:
        "Cadena de montañas enlazadas entre sí y cuyo conjunto forma una individualidad geográfica.",
    },
    {
      key: "Cuenca sedimentaria",
      value:
        "Zona deprimida formada por el hundimiento de un bloque de un zócalo por presiones orográficas, tras lo cual se va rellenando con sedimentos y formando un relieve relativamente llano.",
    },
    {
      key: "Delta fluvial",
      value:
        "Zona de acumulación de sedimentos fluviales que se forma en la desembocadura de algunos ríos cuando las mareas son débiles y la acumulación de aluviones supera a la erosión. Suele tener una forma triangular.",
    },
    {
      key: "Isohipsas",
      value:
        "Líneas continuas utilizadas en la representación del relieve en los mapas topográficos para unir puntos situados a la misma altitud.",
    },
    {
      key: "Litoral",
      value:
        " Área de transición entre ambientes marinos y terrestres. Es la porción de terreno costera de una superficie emergida",
    },
    {
      key: "Marisma",
      value:
        "Terreno bajo y pantanoso que es invadido recurrentemente por las aguas del mar a través de las mareas o por las de los ríos en sus crecidas.",
    },
    {
      key: "Meseta",
      value:
        "Superficie llana o ligeramente inclinada, cortada por valles y situada a una cierta altitud con respecto al nivel del mar.",
    },
    {
      key: "Morfología cárstica",
      value:
        "Forma de relieve originada por descomposición química de determinadas rocas (caliza, yeso, etc.), compuestas por minerales solubles en agua. Se crean formas típicas como lapiaces, dolinas, poljés, cuevas, gargantas y simas",
    },
    {
      key: "Península",
      value:
        "Porción de tierra rodeada de agua por todas partes menos por una, denominada istmo, que la une a otra tierra de mayor extensión, generalmente un continente.",
    },
    {
      key: "Rambla",
      value:
        "Cauce normalmente seco, en ámbitos semiáridos y áridos, y que presenta aguas corrientes cuando ocurren precipitaciones.",
    },
    {
      key: "Relieve Alpino",
      value:
        "Relieve surgido como consecuencia del plegamiento de los materiales blandos y plásticos durante la orogenia alpina. Toma su nombre de los Alpes y presenta formas abruptas y de mayores altitudes.",
    },
    {
      key: "Relieve herciniano",
      value:
        "Montañas formadas durante la orogénesis herciniana de la Era Primaria, que presentan formas suaves y redondeadas por ser materiales muy antiguos que han sufrido una continuada erosión. Sus materiales son metamórficos y muy fallados.",
    },
    {
      key: "Zócalo",
      value:
        "Llanura o meseta formada en la era secundaria al erosionarse las cordilleras surgidas en la orogenia herciniana. Forma la base de posteriores cuencas sedimentarias y cordilleras.",
    },
    {
      key: "Amplitud térmica",
      value:
        "Diferencia entre la temperatura máxima y mínima de un periodo de tiempo (día, mes, año). Es sinónimo de oscilación térmica.",
    },
    {
      key: "Anticiclón",
      value:
        "Centro de acción con presión atmosférica alta (superior a 1013 milibares, que es la presión media a nivel del mar). En ellos el aire desciende, generando estabilidad atmosférica (tiempo despejado y seco).",
    },
    {
      key: "Aridez",
      value:
        "Situación resultante de la falta de agua por la insuficiencia de las precipitaciones. Está en relación con las necesidades de la vegetación y el régimen térmico (a mayor temperatura, mayor aridez).",
    },
    {
      key: "Barlovento",
      value:
        "Lado de una elevación geográfica o área que está directamente expuesta a los vientos dominantes.",
    },
    {
      key: "Borrasca",
      value:
        "Centro de acción con baja presión atmosférica (inferior a los 1013 milibares, que es la presión media a nivel del mar). En ellas el aire asciende, lo que genera nubosidad, precipitaciones y, por tanto, tiempo inestable.",
    },
    {
      key: "Clima",
      value:
        "Sucesión habitual de los estados atmosféricos o tipos de tiempo en un lugar o región determinada durante un periodo temporal amplio.",
    },
    {
      key: "Continentalidad",
      value:
        "Conjunto de características climáticas propias de las áreas alejadas de la influencia del mar. Las más destacadas son el aumento de la amplitud térmica intraanual y la disminución de las precipitaciones.",
    },
    {
      key: "Corriente en Chorro (“Jet Stream”)",
      value:
        "Flujo de viento de estructura tubular existente en altura (entre los 9 y 11 km de altitud) a gran velocidad (entre los 200 y 400 km/h), causante de la distribución de presiones en altura y superficie. Separa las masas de aire de origen polar y tropical. Puede circular de forma rápida con trayectoria zonal poco ondulada o circular de forma más lenta con trayectoria fuertemente ondulada.",
    },
    {
      key: "Depresión aislada en niveles altos (DANA)",
      value:
        "Embolsamiento de aire frío rodeado por aire más cálido debido a una profunda ondulación de la corriente en chorro polar, que acaba desprendiéndose y avanzando hacia latitudes más cálidas. Genera gran inestabilidad, con chubascos intensos y fuertes tormentas, especialmente si el aire en superficie es muy cálido y húmedo.",
    },
    {
      key: "Equinoccio",
      value:
        "Cada uno de los dos momentos del año en el que, por hallarse el Sol sobre el ecuador, la duración del día y de las noches es la misma en toda la Tierra. Sucede del 20 al 21 de marzo y del 22 al 23 de septiembre",
    },
    {
      key: "Frente polar",
      value:
        "Discontinuidad que separa la masa de aire frío polar de la masa de aire cálida tropical, en cuyo seno se originan borrascas que dan lugar a intensas precipitaciones.",
    },
    {
      key: "Humedad atmosférica",
      value:
        "Cantidad de vapor de agua que contine el aire. Disminuye conforme aumenta la temperatura.",
    },
    {
      key: "Isobaras",
      value:
        "Líneas imaginarias dibujadas en un mapa que unen todos los puntos que muestran una misma presión atmosférica.",
    },
    {
      key: "Isotermas",
      value:
        "Líneas imaginarias dibujadas en un mapa que representan todos los puntos que tienen la misma temperatura del aire.",
    },
    {
      key: "Isoyetas",
      value:
        "Líneas imaginarias dibujadas en un mapa que pasa por todos los puntos que tienen la misma precipitación.",
    },
    {
      key: "Precipitaciones",
      value:
        "Cantidad de agua, en forma de lluvia, nieve o granizo, que cae en un lugar. Suelen medirse en mm o l/m2. Pueden ser orográficas (de relieve), convectivas (por calentamiento del suelo) o frontales (por frentes de acción).",
    },
    {
      key: "Presión atmosférica",
      value:
        "Fuerza que ejerce el aire atmosférico por unidad de área sobre la superficie terrestre. Se mide con el barómetro, en milibares (mbar) o hectopascales (hPa) y se representa en los mapas mediante isobaras.",
    },
    {
      key: "Régimen pluviométrico",
      value:
        "Variación experimentada por las lluvias a lo largo de las estaciones en función de distintos factores.",
    },
    {
      key: "Régimen térmico",
      value:
        "Variación experimentada por las temperaturas a lo largo de las estaciones en función de distintos factores.",
    },
    {
      key: "Sequía",
      value:
        "Periodo prolongado de tiempo con déficit de agua en un área determinada, debido a la escasez o ausencia de precipitaciones.",
    },
    {
      key: "Solana",
      value:
        "Vertiente de la ladera de una montaña con mayor exposición a los rayos del Sol, tanto en relación con su ángulo de incidencia como con el tiempo de duración. En el hemisferio septentrional es la vertiente sur de una cordillera o montaña; en el austral, la vertiente norte.",
    },
    {
      key: "Solsticio",
      value:
        "Cada uno de los dos momentos anuales en que el Sol se halla en uno de los dos trópicos, lo cual sucede del 21 al 22 de junio para el de Cáncer, y del 21 al 22 de diciembre para el de Capricornio, y en los que la diferencia entre la duración del día y la noche es mayor.",
    },
    {
      key: "Sotavento",
      value: "Ladera de un relieve o región protegida del viento.",
    },
    {
      key: "Tiempo atmosférico",
      value:
        "Estado físico de la atmósfera en un momento preciso y en un lugar determinado. Se define por los valores de elementos como la temperatura, la humedad y la precipitación, el viento, la presión o la insolación, entre otros.",
    },
    {
      key: "Umbría",
      value:
        "Vertiente de la ladera de una montaña con menor exposición a los rayos solares, tanto con respecto a su ángulo de incidencia como a su duración. Corresponde a las laderas orientadas al norte en el hemisferio septentrional y a las del sur en el austral.",
    },
    {
      key: "Caudal de un río",
      value:
        "Cantidad de agua por unidad de tiempo que fluye por una corriente de un río o arroyo en un lugar determinado. Se mide generalmente en (m3/s) en las estaciones de aforo.",
    },
    {
      key: "Ciclo hidrológico",
      value:
        "Proceso de circulación del agua modificando su estado físico (líquido, sólido, gaseoso) por la hidrosfera.",
    },
    {
      key: "Cuenca hidrográfica",
      value:
        "Espacio entre divisorias de agua recorrido por un río principal y sus afluentes.",
    },
    {
      key: "Estiaje",
      value:
        "Período durante el cual los ríos y arroyos alcanzan su caudal más bajo.",
    },
    {
      key: "Estuario",
      value:
        "Desembocadura abierta de un río hacia el mar, con forma de embudo, en la que penetran las aguas marinas. Se ve afectada por las mareas y el oleaje marino, al tiempo que se produce interacción de las aguas dulces del río con las saladas procedentes del mar.",
    },
    {
      key: "Meandro",
      value:
        "Curva descrita por el curso de un río cuya sinuosidad es pronunciada.",
    },
    {
      key: "Red hidrográfica",
      value:
        "Conjunto formado por un río, sus afluentes y los cursos de agua atribuidos a estos últimos. Está condicionada por el relieve y el clima.",
    },
    {
      key: "Régimen fluvial",
      value:
        "Variación del caudal de un río a lo largo del año. Depende de la distribución anual de las precipitaciones y de la cantidad de nieve acumulada en los meses de invierno que se derrite y se incorpora al caudal de los ríos en primavera y verano.",
    },
    {
      key: "Ría",
      value:
        "Valle fluvial que, en su desembocadura, es inundado por agua marina debido al hundimiento de la línea de costa, a un aumento del nivel del mar o a ambos fenómenos a la vez.",
    },
    {
      key: "Torrente",
      value:
        "Corriente natural de agua situada en una zona montañosa, con fuertes pendientes, caudal irregular y que puede tener gran capacidad de erosión.",
    },
    {
      key: "Trasvase fluvial",
      value:
        "Obra de ingeniería hidráulica que conecta dos cuencas hidrográficas, una excedentaria y otra deficitaria con el fin de abastecer de agua a la cuenca de menor caudal y de esta manera poder satisfacer sus necesidades hídricas.",
    },
    {
      key: "Bosque caducifolio",
      value:
        "Relativo a plantas o formaciones vegetales que pierden su hoja durante la estación fría, cuando reducen su actividad biológica. En España es característico del clima oceánico. Presentan árboles de tronco recto, liso y hojas anchas, como el roble o el haya, y sotobosque pobre.",
    },
    {
      key: "Bosque perennifolio",
      value:
        "Relativo a plantas o formaciones vegetales que mantienen la hoja todo el año. En España es característico de la región biogeográfica mediterránea. Presentan árboles con corteza gruesa, raíces profundas y hojas duras para adaptarse a la aridez. Las especies más representativas son la encina, el alcornoque o el pino.",
    },
    {
      key: "Endemismo",
      value:
        "Relativo a especies vegetales o animales que son propias y exclusivas de un determinado ámbito geográfico.",
    },
    {
      key: "flora",
      value:
        "conjunto de especies y variedades de plantas que viven en un espacio o ecosistema determinado.",
    },
    {
      key: "Censo de población",
      value:
        "Fuente que registra características demográficas, socioculturales y económicas de la población de un lugar.",
    },
    {
      key: "Crecimiento natural de la población",
      value:
        "Variación positiva o negativa de la población de un lugar debido a su movimiento natural (natalidad y mortalidad).",
    },
    {
      key: "Densidad de población",
      value:
        "Relación entre la población total de un área y su superficie (d = P/S), expresada normalmente en habitantes por km2 (hab./km2).",
    },
    {
      key: "Despoblación",
      value:
        "Fenómeno demográfico y territorial que consiste en la disminución del número de habitantes de un territorio con relación a un período previo.",
    },
    {
      key: "Envejecimiento de la población",
      value:
        "Proceso que tiene lugar en un país cuando el porcentaje de población con 65 años o más es superior al 12% de la población total.",
    },
    {
      key: "Éxodo rural",
      value:
        "Desplazamiento masivo de la población residente en el medio rural hacia las ciudades en busca de empleo.",
    },
    {
      key: "Inmigración irregular",
      value:
        "Movimiento migratorio de personas a través de las fronteras sin atender los requerimientos legales de ingreso y residencia del país de destino y, en ocasiones, también del país de procedencia.",
    },
    {
      key: "Padrón municipal de habitantes",
      value:
        "Registro administrativo donde constan los vecinos del municipio y sus características básicas (edad, sexo, actividad profesional, domicilio...).",
    },
    {
      key: "Pirámide de población",
      value:
        "Gráfico que representa la estructura de la población de un territorio en un momento determinado, clasificada por edad y sexo.",
    },
    {
      key: "Población activa",
      value:
        "Todas las personas en edad legal de trabajar, que o trabajan o buscan empleo. En España se considera que están en esta situación los mayores de 16 años.",
    },
    {
      key: "Tasa bruta de mortalidad",
      value:
        "Indicador demográfico que refleja la proporción de personas que fallecen respecto al total de la población en un periodo de tiempo, normalmente un año.",
    },
    {
      key: "Tasa bruta de natalidad",
      value:
        "Indicador demográfico que refleja la proporción de personas que nacen respecto al total de la población en un periodo de tiempo, normalmente un año.",
    },
    {
      key: "Tasa de fecundidad",
      value:
        "Indicador demográfico que refleja el número de nacimientos ocurridos en un período de tiempo (generalmente un año) por cada mil mujeres en edad fértil (15-49 años).",
    },
    {
      key: "Tasa de mortalidad infantil",
      value:
        "Indicador demográfico que señala la proporción existente entre el número de niños de un año o menores que mueren en un lugar y tiempo determinado respecto al total de niños de un año o menos.",
    },
    {
      key: "Tasa de paro",
      value:
        "Índice socioeconómico que relaciona el total de personas desocupadas (que desean trabajar, pero no tienen empleo) con el total de la población activa. Se expresa en tantos por ciento.",
    },
    {
      key: "Transición demográfica",
      value:
        "Proceso demográfico histórico por el que se pasa de un régimen demográfico antiguo, caracterizado por unas altas tasas de natalidad y mortalidad, a un régimen demográfico moderno, con valores muy bajos de ambas tasas.",
    },
    {
      key: "Área metropolitana",
      value:
        "Espacio urbanizado que integra una ciudad central y su periferia circundante, pudiendo incorporar otros municipios contiguos.",
    },
    {
      key: "Casco histórico",
      value:
        "Zona más antigua de la ciudad en la que se encuentran las primeras construcciones y espacios públicos, relacionados con el origen de la localidad y las zonas en las que creció hasta la etapa del desarrollo industrial.",
    },
    {
      key: "Conurbación",
      value:
        "Conjunto de ciudades independientes que crecen espacialmente y se unen formando un continuo urbano mediante la unión física de sus periferias.",
    },
    {
      key: "Emplazamiento urbano",
      value:
        "Lugar físico que ocupa una ciudad o núcleo habitado. Se trata de la localización exacta del elemento y se diferencia de la situación porque esta implica la posición relativa en relación con algún fenómeno.",
    },
    {
      key: "Ensanche urbano",
      value:
        "Área urbana creada para acoger a la población creciente de las ciudades a partir del siglo XIX. Se caracterizan por el uso del plano ortogonal y manzanas con patios interiores.",
    },
    {
      key: "Funciones urbanas",
      value:
        "Actividades que se realizan en las ciudades, necesarias para su funcionamiento y cubrir las necesidades de sus residentes y también de los habitantes de fuera de la ciudad.",
    },
    {
      key: "Gentrificación",
      value:
        "Proceso de transformación urbana en el que barrios de bajos recursos experimentan una renovación y aumento de valor, atrayendo a residentes o inversores de mayor poder adquisitivo y desplazando a los habitantes actuales.",
    },
    {
      key: "Morfología urbana",
      value:
        "Aspecto externo que presenta una ciudad, es decir, el paisaje resultante de la combinación de tres elementos: el plano, las edificaciones y los usos del suelo.",
    },
    {
      key: "Plan General de Ordenación Urbana",
      value:
        "Instrumento básico de ordenación integral del territorio que contiene la clasificación del suelo, la estructura general del territorio, la zonificación básica, la protección del medio ambiente y la programación temporal.",
    },
    {
      key: "Plano urbano",
      value:
        "Representación a escala de una población. En él se muestra la estructura vial y numerosos servicios de asistencia, transporte, turísticos y otros elementos de interés general.",
    },
    {
      key: "Red urbana",
      value:
        "Conjunto formado por las ciudades de un territorio a efectos de su articulación e integración. Las ciudades están unidas por relaciones funcionales y forman una malla que cohesiona una superficie mayor.",
    },
    {
      key: "Suburbanización",
      value:
        "Proceso de crecimiento residencial de las periferias urbanas hacia zonas rurales, provocando un desplazamiento de residentes desde el centro de la ciudad hacia áreas suburbanas. También incluye zonas industriales y comerciales.",
    },
  */
    {
      key: "Agricultura de regadío", value: "Práctica agraria consistente en el uso de procesos y técnicas para suministrar a los cultivos la cantidad de agua necesaria para su desarrollo o para mejorar la producción de la explotación, supliendo la ausencia o insuficiencia de las precipitaciones atmosféricas."
    },
    {
      key: "Agrociudad", value: "Núcleo de población que, por su tamaño, podría considerarse una ciudad, pero por las funciones que desempeña son principalmente rurales."
    },
    {
      key: "Barbecho", value: "Parte de una explotación agrícola cultivada con técnicas de rotación, que queda temporalmente sin cultivar, con el objetivo de que se regenere el suelo de forma natural en ese tiempo."
    },
    {
      key: "Dehesa", value: "Tipo de explotación agro-silvo-pastoril propia de la zona mediterránea y del sur de España, en la que se combinan actividades agrícolas, ganaderas y forestales en zonas ahuecadas de bosque mediterráneo, dando lugar a un paisaje cultural creado y mantenido por la población local. Las especies dominantes son la encina y el alcornoque."
    },
    {
      key: "Explotación agraria", value: "Conjunto de parcelas que cultiva un mismo agricultor, independientemente de su forma de tenencia (propiedad, arrendamiento, aparcería, etc.)."
    },
    {
      key: "Hábitat concentrado", value: "Tipo de poblamiento o forma que tiene la población de un lugar de ocupar el territorio, en el que las viviendas forman un núcleo continuo sin espacios agrarios entre ellas."
    },
    {
      key: "Hábitat disperso", value: "Tipo de poblamiento o forma que tiene la población de un lugar de ocupar el territorio, en el que las viviendas se encuentran aisladas unas de otras y rodeadas de la propia explotación agraria, existiendo un pequeño núcleo central en el que se encuentran concentrados los servicios del municipio."
    },
    {
      key: "Latifundio", value: "Explotación agraria de gran tamaño, normalmente de producción extensiva orientada al mercado. En España se localiza fundamentalmente en la mitad sur."
    },
    {
      key: "Minifundio", value: "Explotación agraria de pequeño tamaño, cuya producción suele ser de policultivo y estar orientada al autoconsumo. En España se localiza sobre todo en el norte y levante."
    },
    {
      key: "Monocultivo", value: "Sistema de cultivo basado en la producción de un único producto en toda la explotación agrícola. Este tipo de producción va destinada al mercado y está asociada a grandes explotaciones."
    },
    {
      key: "Parcela de cultivo", value: "Porción pequeña de terreno, considerada la unidad técnico-económica de la explotación agraria y delimitada por una linde común."
    },
    {
      key: "Política Agraria Común (PAC)", value: "Normas acerca de la agricultura decididas por la Unión Europea para los países miembros. Su objetivo es asegurar al consumidor europeo suministros a precios razonables y garantizar una retribución equitativa a los agricultores."
    },
    {
      key: "Acuicultura", value: "Cría y cultivo de especies animales y vegetales acuáticas, fundamentalmente con fines comerciales. Alguna de las instalaciones propias para la producción son los viveros y las piscifactorías."
    },
    {
      key: "Aguas jurisdiccionales", value: "Zona marítima adyacente a la costa, que llega hasta las 12 millas marinas y en las que los Estados ejercen la plenitud de su soberanía."
    },
    {
      key: "Caladero pesquero", value: "Área marítima apropiada para calar (pescar) o disponer las redes de pesca por su abundancia en una o varias especies explotables."
    },
    {
      key: "Paro biológico", value: "Interrupción temporal de la actividad pesquera ante la sobreexplotación, que tiene como objetivo evitar el agotamiento y regenerar los recursos de los caladeros. Esta situación obliga a la población pescadora a quedarse en puerto, sin trabajar y cobrando el subsidio por desempleo."
    },
    {
      key: "Pesca de altura", value: "Tipo pesca realizada con barcos de medio y gran tamaño equipados técnicamente y que suelen salir en pequeñas flotillas a lugares alejados del litoral. Permanecen fuera de puerto por un periodo de varias semanas, por lo que deben iniciar el proceso de conservación del pescado, mediante instalaciones frigoríficas a bordo."
    },
    {
      key: "Pesca de bajura", value: "Tipo de pesca realizada durante el mismo día, en las proximidades de la costa (hasta 60 millas) utilizando pequeñas embarcaciones equipadas normalmente con métodos artesanos."
    },
    {
      key: "Plataforma continental", value: "Superficie del fondo submarino próximo a la costa y con profundidades inferiores a los 200 m."
    }

  ];

  const [gameCards, setGameCards] = useState([]); // Almacena las cartas para el juego actual
  // Función para obtener un índice aleatorio
  const getRandomIndex = (max) => {
    return Math.floor(Math.random() * max);
  };
  // Iniciar el juego con cartas aleatorias
  const startGame = () => {
    if (initialCards.length > 0) {
      const textIntro = document.querySelector(".text-intro-section");
      textIntro.classList.add("hide-animation");
      textIntro.classList.add("hide");
      const shuffledCards = [...initialCards].sort(() => Math.random() - 0.5); // Barajar las cartas
      setGameCards(shuffledCards); // Cargamos las cartas barajadas para el juego
      setCurrentCardIndex(0); // Empieza desde la primera carta
      setGameStarted(true);
    } else {
      alert("No hay cartas para jugar.");
    }
  };

  // Función para normalizar texto (quitar tildes y poner en minúsculas)
  const normalizeText = (text) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  // Verificar la respuesta
  const checkAnswer = () => {
    if (
      normalizeText(inputValue.trim()) ===
      normalizeText(gameCards[currentCardIndex].key)
    ) {
      alert("¡Correcto!");
      setInputValue("");
      if (currentCardIndex < gameCards.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1);
      } else {
        alert("¡Has completado todas las cartas!");
        setGameStarted(false);
        alert("La página se recargará en 10 segundos.");
        setTimeout(() => {
          window.location.reload();
        }, 10000);
      }
    } else {
      alert("Inténtalo de nuevo.");
    }
  };

  window.onbeforeunload = function (event) {
    event.preventDefault();
    event.returnValue =
      "Si refrescas la página, se perderá todo el progreso. ¿Estás seguro de que quieres refrescar?";
  };

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
              <h3>{gameCards[currentCardIndex].value}</h3>{" "}
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
  );
};

export default GameComponent;
