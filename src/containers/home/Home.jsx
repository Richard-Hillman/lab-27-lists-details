/* eslint-disable max-len */
import React from 'react';


export default class App extends React.Component {

      componentDidMount = async() => {
        this.fetchRickAndMorty();
      }
      
      // ===============================================================================================

      render() {
     
        return (
          <div className="articleOne">
            {/* ============================================================= */}
            <section className="Main">
         

            </section>
            {/* ================================================================ */}

            {/* Here is where I take the state of my pokemon Data and connect it to the pokemon mapper that will display all of my pokemon */}
            <div className="poker">
        
            </div>

            {/* ============================================================= */}


          </div>
        );
      }
}
