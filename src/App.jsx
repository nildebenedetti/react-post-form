import { useState } from "react";


function App() {

  // variabile di stato per registrare i dati del form
  // ci inserisco un ogetto che rappresenta il form per mappare le chiavi
  const [ formData, setFormData ] = useState({
    author: "nome autore",
  });


  return <section className="add-post-form">
    <div className="container">
      <div className="card m-3 p-2">
        <h4 className="card-title">Aggiungi un post</h4>
        <form>
          {/**
            author (string) - L’autore del post
            title (string) - Il titolo del post
            body (string) - Il testo del post
            public (boolean) - Se il post deve essere
                pubblico (true) o una bozza (false)
         */}
          <label htmlFor="author">Autore</label>
          <input type="text" id="author" name="author" onChange="" value="">
          </input>
        </form>
      </div>
    </div>
  </section>
}
export default App;
