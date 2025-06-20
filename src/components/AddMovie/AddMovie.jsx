import React,{useState} from 'react'
import styles from './AddMovie.module.css'
import { nanoid } from 'nanoid';

const AddMovie = (props) => {
  const { movies, setMovies } = props;

  const [formData, setFormData] = useState({
    title:"",
    date:"",
    image:"",
    genre:""
  });

  const [formError, setFormError] = useState({
    titleError:false,
    dateError:false,
    imageError:false,
    genreError:false
  });

  const {title,date, image, genre}=formData;
  const {titleError,dateError, imageError, genreError}=formError;

  function handleChange(e){
    const {name,value}=e.target;

    setFormData({
     ...formData,
     [name]:value
    });
  }

 
  function validate() {
    const errors = {
      titleError: title.trim() === "",
      dateError: date.trim() === "",
      imageError: image.trim() === "",
      genreError: genre.trim() === "",
    };
  
    setFormError(errors);
  
    return !Object.values(errors).some(Boolean);
  }

  function addMovie(){
    const movie={
      id:nanoid(),
      title,
      genre,
      date,
      image:image,
    }

    setMovies([...movies, movie]);
  }
  

  function handleSubmit(e) { 
    e.preventDefault();

    validate() && addMovie();
  }

  const genres = [
    { id: 1, name: "Action" },
    { id: 2, name: "Drama" },
    { id: 3, name: "Horror" },
    { id: 4, name: "Comedy" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.col__image}>
        {image && <img src={image} alt="movie image" />}
      </div>
      <div className={styles.col__form}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.form__title}>Add Movie</h2>
          <input
            type="text"
            className={styles.form__input}
            placeholder="Movie Title"
            onChange={handleChange}
            value={title}
            name="title"
          />
          {titleError ? <small className={styles.form__error}>Title Wajib Diisi.</small>  : ""}

          <input
            type="date"
            className={styles.form__input}
            placeholder="Movie Date"
            onChange={handleChange}
            value={date}
            name="date"
          />
          {dateError ? <small className={styles.form__error}>Date Wajib Diisi.</small>  : ""}

           <input
            type="text"
            className={styles.form__input}
            placeholder="Movie Image"
            onChange={handleChange}
            value={image}
            name="image"
          />
          {imageError ? <small className={styles.form__error}>Gambar Wajib Diisi.</small>  : ""}
      
         <select
            id="genre"
            className={styles.form__select}
            onChange={handleChange}
            value={genre}
            name="genre"
          >
            <option value="">-- Pilih Genre --</option> 
            
            {genres.map((obj) => (
              <option key={obj.id} value={obj.name}>
                {obj.name}
              </option>
            ))}
          </select>

          {genreError ? <small className={styles.form__error}>Genre Wajib Diisi.</small>  : ""}


          <button type="submit" className={styles.form__button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddMovie