import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddToList = () => {
    const genres = [
        "Horror", "Comedy", "Drama", "Action", "Science Fiction", "Thriller", "Documentary", "Epic", "Animation", "Fantasy", "Crime", "Alt Balaji"
    ];
    const sources = [
        "Netflix", "Amazon Prime", "Hotstar", "Zee5", "Mx Player", "Voot", "Sonyliv", "Eros Now ", "BigFlix", "Jio Tv"
    ]

    const [newList, setNewList] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewList({ ...newList, [name]: value });
    }

    const addList = async (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/AddToList", newList)
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
        console.log(newList);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="heading text-center text-white mt-5">
                    <h2>Add Movie to your Watch Later List</h2>
                </div>
                <form onSubmit={addList} className='col-6 offset-3 mt-3'>
                    <div>
                        <label htmlFor="movietitle" className='text-white h5'>Movie Title</label>
                        <input type="text" name="movietitle" id="movietitle" onChange={handleChange} className="form-control" placeholder='Enter the Movie Title' />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="moviesource" className='text-white h5'>Select Movie Source</label>
                        <select name="moviesource" className='form-control' id="moviesource" onChange={handleChange}>
                            <option value="">--Select--</option>
                            {
                                sources.map((genre, index) => (
                                    <option key={index} value={genre}>{genre}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="moviegenre" className='text-white h5'>Select Movie Genre</label>
                        <select name="moviegenre" className='form-control' id="moviegenre" onChange={handleChange}>
                            <option value="">--Select--</option>
                            {
                                genres.map((genre, index) => (
                                    <option key={index} value={genre}>{genre}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="movielink" className='text-white h5'>Movie Link</label>
                        <input type="text" name="movielink" id="movielink" className="form-control" onChange={handleChange} placeholder='Enter the Movie Link' />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="moviedescription" className='text-white h5'>Movie Description</label>
                        <textarea name="moviedescription" id="moviedescription" cols="30" rows="10" placeholder='Brief your learnings from Movie' className='form-control' onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className='btn btn-success mt-2 col-4 offset-4'>Add to List</button>
                </form>
            </div>
        </div>
    )
}

export default AddToList
