import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="menu container">
          <input type="checkbox" id="menu" />
          <label htmlFor="menu">
            <img
              src={`${process.env.PUBLIC_URL}/images/menu.png`}
              className="menu-icono"
              alt="icono menu"
            />
          </label>
          <nav className="navbar">
            <ul>
              <li>
                <a href="#">inicio</a>
              </li>
              <li>
                <a href="#">servicio</a>
              </li>
              <li>
                <a href="#">producto</a>
              </li>
              <li>
                <a href="#">contacto</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-content container">
          <h1>Cafe de autor</h1>
          <p>
            Se refiere a un café que se caracteriza por su alta calidad, sabor
            excepcional y perfil de sabor único. Este tipo de café se obtiene
            gracias a un cuidado especial en todas las etapas de su producción,
            desde el cultivo hasta la preparación, y se destaca por su
            trazabilidad y origen único.
          </p>
          <a href="#" className="btn-1">
            Informacion
          </a>
        </div>
      </header>

      <section className="coffe">
        <img
          className="cafe-img"
          src={`${process.env.PUBLIC_URL}/images/bg2.png`}
          alt="Cafe"
        />

        <div className="cafe-content container">
          <h2>Los diferentes tipos de cafe</h2>
          <p className="txt-p">
            En el mercado, actualmente, podemos encontrar una amplia variedad de
            tipos de café (y cómo elaborarlos), dependiendo de cómo sea el molido
            de los granos o si acompañamos el tipo de café con otros elementos
            como bebidas alcohólicas, cacao o, la más común, leche.
          </p>

          <div className="cafe-grupo">
            <div className="cafe-1">
              <img
                src={`${process.env.PUBLIC_URL}/images/c1.png`}
                alt="Americano"
              />
              <h3>AMERICANO</h3>
              <p>
                El café americano es un tipo de café derivado del espresso el cual
                se caracteriza por añadir una cantidad de agua mucho mayor de lo
                habitual en este tipo de preparación, teniendo como resultado un
                producto con un sabor menos potente y algo más aguado, algo que lo
                hace menos amargo y facilita un sabor dulce. En este caso se
                realizaría primero un espresso y a este se le añadiría
                externamente agua hirviendo.
              </p>
            </div>

            <div className="cafe-1">
              <img
                src={`${process.env.PUBLIC_URL}/images/c2.png`}
                alt="Capuchino"
              />
              <h3>CAPUCHINO</h3>
              <p>
                El capuchino es otro de los cafés más habituales, siendo semejante
                al café con leche con la excepción de que en este caso solo
                encontraremos alrededor de un tercio de café, siendo el resto
                leche. Por lo general gran parte de esta es espumada, y suele
                añadírsele de forma espolvoreada algo de cacao en polvo para darle
                un sabor más dulce.
              </p>
            </div>

            <div className="cafe-1">
              <img
                src={`${process.env.PUBLIC_URL}/images/c3.png`}
                alt="Expresso"
              />
              <h3>EXPRESSO</h3>
              <p>
                Uno de los tipos de café más básicos y sencillos, únicamente
                consta de un infusión de café la cual se realiza hirviendo agua en
                contacto con el grano. Se puede preparar en pocos segundos. Se
                trata de un tipo de café corto, y su tamaño suele ser de alrededor
                de 30 cl. Es habitual el uso de café de la variante arábiga.
                Habitualmente suele tener algo de espuma por encima.
              </p>
            </div>
          </div>
          <a href="#" className="btn-1">
            Informacion
          </a>
        </div>
      </section>

      <main className="servicio">
        <div className="servicio-content container">
          <h2>Servicio de cafeteria</h2>
          <div className="servicio-grupo">
            <div className="servicio-1">
              <img
                src={`${process.env.PUBLIC_URL}/images/i1.svg`}
                alt="Servicio para llevar"
              />
              <h3>Servicio para llevar</h3>
            </div>
            <div className="servicio-1">
              <img
                src={`${process.env.PUBLIC_URL}/images/i2.svg`}
                alt="Servicio en barra"
              />
              <h3>Servicio en barra</h3>
            </div>
            <div className="servicio-1">
              <img
                src={`${process.env.PUBLIC_URL}/images/i3.svg`}
                alt="Servicio a domicilio"
              />
              <h3>Servicio a domicilio</h3>
            </div>
          </div>
          <p>
            ofrecemos para todos los gustos y para todo tipo de empresas, grandes,
            medianas y pequeñas. Además, nuestros servicios de café se adecúan a
            la perfección a cada una, desde cafeteras de café en grano,
            profesionales, table-tops, cafeteras de cápsulas… De esta forma, si lo
            que busca tu empresa es comodidad y practicidad, la opción perfecta es
            Il Cafinito. Para un café tan especial como este, hemos desarrollado
            junto a Saeco y Philips, la máquina Sarista, única en el mercado y que
            sólo se puede adquirir con Il Cafinito. La máquina Sarista de Philips
            es una revolución tecnológica, pues gracias a sus contenedores,
            podemos tener un café recién molido de las tres variedades de Il
            Cafinito: gourmet, original o descafeinado.
          </p>
          <a href="#" className="btn-1">
            Informacion
          </a>
        </div>
      </main>

      <section className="general">
        <div className="general-1">
          <h2>Molienda</h2>
          <p>
            Es importante que conozcas el tipo de molienda adecuada para tomar tu
            café. Si tenés tu propio molinillo, podemos enviarte el café en grano.
            Si no te ofrecemos molerlo por vos y enviártelo en bolsitas
            herméticamente selladas para que conserve toda su frescura. Si no
            sabés que tipo de molienda es la que más te conviene, chequeá la
            sección de "Informacion" y te ayudamos a descubrirlo.
          </p>
          <a href="#" className="btn-1">
            Informacion
          </a>
        </div>
        <div className="general-2"></div>
      </section>

      <section className="general">
        <div className="general-3"></div>

        <div className="general-1">
          <h2>Nuestro Objetivo</h2>
          <p>
            En Cafe de autor queremos que conozcas realmente lo que es tomar un
            excelente café, fresco y de origen. Para eso contamos con el apoyo de
            tostadores profesionales argentinos que aman el café tanto como
            nosotros. Todos los meses conocerás el producto de distintos
            tostadores de la región, así como su historia.
          </p>
          <a href="#" className="btn-1">
            Informacion
          </a>
        </div>
      </section>

      <section className="blog container">
        <h2>Aprende más sobre el café</h2>
        <div className="blog-content">
          <div className="blog-1">
            <img
              src={`${process.env.PUBLIC_URL}/images/blog6.jpg`}
              alt="Cafe calidad"
            />
            <h3>Café de Calidad: Consejos para Nuevos Consumidores</h3>
            <p>
              Cuando te sumerges en el vasto y aromático mundo del café, te
              enfrentas a una infinidad de opciones, si eres un nuevo consumidor,
              es importante que aprendas a identificar ciertas características que
              te ayudarán a reconocer un buen café y, por qué no, a disfrutar aún
              más de tu experiencia cafetera.
            </p>
          </div>
          <div className="blog-1">
            <img
              src={`${process.env.PUBLIC_URL}/images/blog5.jpg`}
              alt="Cafe exotico"
            />
            <h3>Cafés Exóticos: Sabores Únicos de Orígenes Pocos Conocidos</h3>
            <p>
              Aunque muchos están familiarizados con los grandes productores como
              Colombia, Etiopía o Brasil, existen otros orígenes menos conocidos
              que también ofrecen experiencias únicas para el paladar. Estos cafés
              exóticos, provenientes de regiones remotas y poco convencionales,
              desafían nuestras percepciones tradicionales del café y nos invitan
              a explorar nuevas dimensiones de sabor.
            </p>
          </div>
          <div className="blog-1">
            <img
              src={`${process.env.PUBLIC_URL}/images/blog4.jpg`}
              alt="Cafe con sal"
            />
            <h3>Café con Sal: Un Toque de Innovación en Tu Taza</h3>
            <p>
              El café con sal es una de esas tendencias que puede sorprender a más
              de uno. Si bien puede parecer inusual, esta combinación ha ganado
              popularidad mundialmente, ofreciendo una experiencia única al
              paladar que despierta curiosidad y placer en igual medida.
            </p>
          </div>
        </div>

        <a href="#" className="btn-1">
          Informacion
        </a>
      </section>

      <footer className="footer">
        <div className="footer-content container">
          <div className="link">
            <h3>NOSOTROS</h3>
            <ul>
              <li>
                <a href="#">Preguntas frecuentes</a>
              </li>
              <li>
                <a href="#">Nuestros servicios</a>
              </li>
              <li>
                <a href="#">Politica de privacidad</a>
              </li>
              <li>
                <a href="#">Boton de arrepentimiento</a>
              </li>
            </ul>
          </div>

          <form>
            <h3>CONTACTO</h3>
            <div className="input-box">
              <input type="text" required placeholder="Nombre y apellido" />
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="input-box">
              <input type="email" required placeholder="Correo electronico" />
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="input-box">
              <input type="text" required placeholder="Asunto" />
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
            <div className="input-box">
              <textarea cols="40" rows="10" placeholder="Escribe tu mensaje" />
            </div>
            <button type="submit">Enviar mensaje</button>
          </form>

          <div className="link">
            <h3>SEGUINOS</h3>
            <div className="social-link">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;