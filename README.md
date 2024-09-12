# Proyecto04-Rockethecode

My portfolio (MG)

He dividido mi proyecto en componentes:

- file "main.js" es el que está linkeado al file index.html : aquí llamo todas las funciones vitales para que la página web funcione. Las funciones que llamo están en otras componentes

El proyecto está compuesto por:
-un HEADER: en la carpeta "Header" encontramos todas las componentes - el logo, el select para seleccionar el idioma (falta implementar otros idiomas)
Cuando la pantalla es menor de 1150px aparece el menú abajo, que hará parte del header

-un MAIN: en la carpeta "Main" encontramos todas las componentes:
---> section ContactMe: es la sección que aparece a la izquierda de la pantalla. Si pulsamos el botón "ContactMe" saldrá un popUp con mis datos
---> section Menu: aquí puedo acceder a las varias secciones de mi portfolio:

- Projects (componente en carpeta Projects)
- About Me (componente en carpeta About Me)
- Education (componente en carpeta Education)
- Experience (componente en carpeta Experience)
- Skills (componente en carpeta Skills)

-un FOOTER : en la catpeta "Footer" encontramos todas las componentes

En la carpeta "Utils" encontramos todas las funciones y estilos reutilizados en varias ocasiones
---> AnimInOut.css : controla las animaciones in y out usadas para todas mis secciones
---> ButtonBackHome: crea el botón para volver atrás después de haber abierto una seccion. Usadas en todas las secciones
---> CleanElement.js : función para limpiar mi main
---> CreateDescript.js : función usada tanto para la sección Education como para la sección Experience. Las 2 secciones tienen el mismo design, con lo cual he aprovechado la misma función

---> PrintMenuOptions.js: función usada tanto para el menú inicial, como para el menú en pantalla móvil al pulsar el botón Menu.

---> TitleSection.js: crea los títulos de las varias secciones

La carpeta Data: tiene todos los datos necesarios para pintar mi página

La carpeta Start: controla la animación y el design al cargar la página

PENDING:

- implementar el cambio de idioma según la elección del usuario
- añadir cambio de temas según la elección de usuario (crear botón, y estilos relacionados)
