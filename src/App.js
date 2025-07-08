import React from "react";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { Encabezado } from "./components/ui/Encabezado";
import { LikeButton } from "./components/ui/LikeButton";
import { FormContacto } from "./components/ui/FormContacto";
import { CafeSection } from "./components/ui/CafeSection";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <header className="header" id="inicio">
        <Navbar/>
        <div className="header-content container">
      
          <Encabezado  tituloPrincipal={"Cafe de autor"}/>
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

      <CafeSection />

      <main className="servicio" id="servicio">
        <div className="servicio-content container">
          <h2>Servicio de cafeteria</h2>
          <div className="servicio-grupo">
            <div className="servicio-1">
              <img
                src={`/images/i1.svg`}
                alt="Servicio para llevar"
              />
              <h3>Servicio para llevar</h3>
            </div>
            <div className="servicio-1">
              <img
                src={`/images/i2.svg`}
                alt="Servicio en barra"
              />
              <h3>Servicio en barra</h3>
            </div>
            <div className="servicio-1">
              <img
                src={`/images/i3.svg`}
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

      <section className="general" id="producto">
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
              src={`/images/blog6.jpg`}
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
            <LikeButton />
          </div>
          <div className="blog-1">
            <img
              src={`/images/blog5.jpg`}
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
            <LikeButton />
          </div>
          <div className="blog-1">
            <img
              src={`/images/blog4.jpg`}
              alt="Cafe con sal"
            />
            <h3>Café con Sal: Un Toque de Innovación en Tu Taza</h3>
            <p>
              El café con sal es una de esas tendencias que puede sorprender a más
              de uno. Si bien puede parecer inusual, esta combinación ha ganado
              popularidad mundialmente, ofreciendo una experiencia única al
              paladar que despierta curiosidad y placer en igual medida.
            </p>
            <LikeButton />
          </div>
        </div>

        <a href="#" className="btn-1">
          Informacion
        </a>
      </section>

      <footer className="footer" id="contacto">
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

          <FormContacto />

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