import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateToList = () => {
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

    // const updateList = async (e) => {
    //     e.preventDefault();
    //     axios.post("http://localhost:3001/AddToList", newList)
    //         .then(result => {
    //             console.log(result)
    //             navigate('/')
    //         })
    //         .catch(err => console.log(err))
    //     console.log(newList);
    // }

    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        axios.get('http://localhost:3001/getUser/' + id)
            .then(res => {
                setNewList(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const updateList = async (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/UpdateToList/" + id, newList)
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="heading text-center text-white mt-5">
                    <h2>Update Movie in your Watch Later List</h2>
                </div>
                <form onSubmit={updateList} className='col-6 offset-3 mt-3'>
                    <div>
                        <label htmlFor="movietitle" className='text-white h5'>Movie Title</label>
                        <input type="text" name="movietitle" id="movietitle" onChange={handleChange} className="form-control" placeholder='Enter the Movie Title' value={newList.movietitle} />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="moviesource" className='text-white h5'>Select Movie Source</label>
                        <select name="moviesource" className='form-control' id="moviesource" onChange={handleChange}>
                            <option value={newList.moviesource}>{newList.moviesource}</option>
                            {
                                sources.map((source, index) => (
                                    <option key={index} value={source}>{source}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="moviegenre" className='text-white h5'>Select Movie Genre</label>
                        <select name="moviegenre" className='form-control' id="moviegenre" onChange={handleChange}>
                            <option value={newList.moviegenre}>{newList.moviegenre}</option>
                            {
                                genres.map((genre, index) => (
                                    <option key={index} value={genre}>{genre}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="movielink" className='text-white h5'>Movie Link</label>
                        <input type="text" name="movielink" id="movielink" className="form-control" onChange={handleChange} placeholder='Enter the Movie Link' value={newList.movielink} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="moviedescription" className='text-white h5'>Movie Description</label>
                        <textarea name="moviedescription" id="moviedescription" cols="20" rows="5" placeholder='Brief your learnings from Movie' className='form-control' value={newList.movielink} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className='btn btn-success mt-2 col-4 offset-4'>Update to List</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateToList
