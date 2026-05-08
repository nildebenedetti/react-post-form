import { useState } from "react";


function App() {

  // variabile di stato per registrare i dati del form
  // ci inserisco un ogetto che rappresenta il form per mappare le chiavi
  const [formData, setFormData] = useState({
    author: "nome autore",
  });


  return <section className="add-post-form">
    <div className="container">
      <div className="card m-3 p-2">
        <h4 className="card-title">Aggiungi un Post</h4>
        <form className="d-flex flex-column">
          {/**
            author (string) - L’autore del post
            title (string) - Il titolo del post
            body (string) - Il testo del post
            public (boolean) - Se il post deve essere
                pubblico (true) o una bozza (false)

          n.b.: id e'rilevante per matchare la label, 
          name e'rilevante per recuperare la value
         */}
          <label htmlFor="author">Author</label>
          <input type="text" id="author" name="postAuthor" onChange="" value="">
          </input>
          <label htmlFor="title">Title </label>
          <input type="text" id="title" name="PostTitle" onChange="" value=""></input>
          <br></br>
          <label htmlFor="body">Your Post </label>
          <textarea type="textarea" id="body" rows={10} name="title" onChange="" value=""></textarea>
          <div>
            <label htmlFor="public">Publish </label>
            <input type="checkbox" name="publishState" id="public" onChange="" checked></input>
          </div>
        </form>
      </div>
    </div>
  </section>
}
export default App;
