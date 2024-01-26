import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/img.jpg'
import axios from 'axios'

const WatchLaterList = () => {

    const [lists, setLists] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(res => setLists(res.data))
            .catch(err => console.log(err))
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deletelist/' + id)
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(err => console.log(err));
    }

    const filteredLists = lists.filter((o)=>o.movietitle.toLowerCase().includes(searchTerm));

    return (
        <main className='mt-5 ms-2 me-2'>
            <div className="container-fluid">
                <div className="row">
                    <div className="search-heading text-white text-center">
                        <h4>Search for Movie</h4>
                    </div>
                    <div className="col-4 offset-4">
                        <input type="search" name="searchmovie" id="searchmovie" placeholder='Search for Movie' className="form-control" onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                </div>
                <div className="row mt-4">
                    {
                        filteredLists.length > 0 ? (
                            filteredLists.map(list => (
                                <div key={list._id} className="card ms-2 mt-2" style={{ width: "18rem" }}>
                                    <img src={img} className="mt-2 card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{list.movietitle}</h5>
                                        <p className="card-text">{list.moviedescription}</p>
                                        <span>Genre: {list.moviegenre}</span>
                                        <p>Source: {list.moviesource}</p>
                                        <Link to={list.movielink} className="btn btn-success">Watch Now</Link>
                                    </div>

                                    <div className="card-footer">
                                        <div className="action_buttons d-flex flex-column">
                                            <Link to={`/UpdateToList/${list._id}`} className='btn btn-primary'>Update</Link>
                                            <button type="button" onClick={(e) => handleDelete(list._id)} className='btn btn-danger mt-2'>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className='text-white h4 text-center'>No Movies Found</p>
                        )
                    }
                </div>
            </div>
        </main>
    )
}

export default WatchLaterList
