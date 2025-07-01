import React from "react";

export const CafeSection = () => {
  return (
    <section className="coffe">
        <img
          className="cafe-img"
          src={`/images/bg2.png`}
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
                src={`/images/c1.png`}
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
                src={`/images/c2.png`}
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
                src={`/images/c3.png`}
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
  );
};