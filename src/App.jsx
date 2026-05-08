import { useState } from "react";


function App() {

  // variabile di stato per registrare i dati del form
  // ci inserisco un ogetto che rappresenta il form per mappare le chiavi
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: true
  });

  // agggiungo la funzione per gestire onChange - mi metto in ascolto alla UI
  const changeHandler = (event) => {
    // devo identificare chi ha scatenato il cambiamento
    const target = event.target;
    //controllo se e'di tipo check e in caso se e' settato
    const checked = target.checked;
    // NOME mi serve per cercare nell'obj form data la chiave
    // VALORE/ checked mi serve per sovrascrivere il valore vecchio
    const { name, value, type } = target;
    const keyToUpdate = name
    const valueToUpdate = (type === 'checkbox' ? checked : value)
    // inserisco il value to update di modo da smistare campi checkbox e campi name
    // ottenuti nome e valore, creo COPIA
    // di formData con spreadOperator
    // e sostituisco quello che devo cambiare
    const newFormData = {
      ...formData,
      [keyToUpdate]: valueToUpdate
    };
    // POI setto il nuovo valore
    setFormData(newFormData);
    // RISULTATO: ogni volta che cambio una virgola nel form, lo rifletto su UI
  };

  const formSubmitHandler = (event) => {
      event.preventDefault(); // no refresh pagina
      console.log(formData)
      // inviare post alle API
      fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', {
            headers: {
                'Content-Type': 'application/json'  
            },
            method: 'POST',
            body: JSON.stringify(formData)
        }).then(response => {
            return response.json();
        }).then(json => {
            console.log(json);
        });
  };

  return <section className="add-post-form">
    <div className="container">
      <div className="card m-3 p-2">
        <h4 className="card-title">Aggiungi un Post</h4>
        <form onSubmit={formSubmitHandler} className="d-flex flex-column">
          {/**
            author (string) - L’autore del post
            title (string) - Il titolo del post
            body (string) - Il testo del post
            public (boolean) - Se il post deve essere
                pubblico (true) o una bozza (false)
          n.b.: id e'rilevante per matchare la label, 
          name e'rilevante per recuperare la value
          la value, recupera a sua volta i dati dal form
         */}
          <div>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" name="author" onChange={changeHandler} value={formData.author}>
            </input>
            <label htmlFor="title">Title </label>
            <input type="text" id="title" name="title" onChange={changeHandler} value={formData.title}></input>
            <br></br>
          </div>
          <label htmlFor="body">Your Post </label>
          <textarea type="textarea" id="body" rows={10} name="body" onChange={changeHandler} value={formData.body}></textarea>
          <div>
            <label htmlFor="public">Public Post </label>
            <input type="checkbox" name="public" id="public" onChange={changeHandler} checked={formData.public.checked}></input>
          </div>
          <div>
            <button className="btn btn-primary">Inquina il mondo con i tuoi pensieri</button>
          </div>
        </form>
      </div>
    </div>
  </section>
}
export default App;
