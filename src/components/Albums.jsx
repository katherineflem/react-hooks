import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Albums = () => {
    //declare a new state variable that we will call albums
    const [albums, setAlbums] = useState([])
    //[] function says look for a value inside the array and if there is something there then re-render it

    const getAlbums = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/albums');
        let albums = await res.json();
        setAlbums(albums);//set albums to state of albums
    }

    useEffect(() => { getAlbums(); }, []);
    return (
        <div className="list-group">
            {albums.map(album => (

                <li key={album.id} className='list-group-item border-primary bg-light mb-2'>
                    <h4>{album.title}</h4>
                    <Link className='list-group-item btn ' to={`/${album.id}/details`}>More details</Link>
                </li>

            ))}
        </div>

    )
}
export default Albums 
