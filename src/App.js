import { Component } from "react";
import { MainLayout } from "./layout/MainLayout";


function App() {
  return (
    <>
      <MainLayout>
        <Component />
      </MainLayout>
    </>
    // <div className="wrapper">
    //   <aside>
        
    //   </aside>
    //   <main>
    //     <h2 className="main__title">Todos los Productos</h2>
    //     <div className="main__container">
    //       <div className="main__container__list">
    //         <img
    //           className="main__container__list--image"
    //           src="./img/abrigos/01.jpg"
    //           alt="Abrigo"
    //         />
    //         <div className="main__container__list--details">
    //           <h3 className="main__container__list--title">Abrigo 01</h3>
    //           <p className="main__container__list--price">$1000</p>
    //           <button className="main__container__list--add" type="button">
    //             Agregar
    //           </button>
    //         </div>
    //       </div>
    //       <div className="main__container__list">
    //         <img
    //           className="main__container__list--image"
    //           src="./img/abrigos/02.jpg"
    //           alt="Abrigo"
    //         />
    //         <div className="main__container__list--details">
    //           <h3 className="main__container__list--title">Abrigo 02</h3>
    //           <p className="main__container__list--price">$1000</p>
    //           <button className="main__container__list--add" type="button">
    //             Agregar
    //           </button>
    //         </div>
    //       </div>
    //       <div className="main__container__list">
    //         <img
    //           className="main__container__list--image"
    //           src="./img/abrigos/03.jpg"
    //           alt="Abrigo"
    //         />
    //         <div className="main__container__list--details">
    //           <h3 className="main__container__list--title">Abrigo 03</h3>
    //           <p className="main__container__list--price">$1000</p>
    //           <button className="main__container__list--add" type="button">
    //             Agregar
    //           </button>
    //         </div>
    //       </div>
    //       <div className="main__container__list">
    //         <img
    //           className="main__container__list--image"
    //           src="./img/abrigos/04.jpg"
    //           alt="Abrigo"
    //         />
    //         <div className="main__container__list--details">
    //           <h3 className="main__container__list--title">Abrigo 04</h3>
    //           <p className="main__container__list--price">$1000</p>
    //           <button className="main__container__list--add" type="button">
    //             Agregar
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </main>
    // </div>
  );
}

export default App;
