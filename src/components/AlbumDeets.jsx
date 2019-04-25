import React, { useState, useEffect } from 'react'

const AlbumDeets = (props) => {
    const [album, setAlbum] = useState({})

    const getAlbum = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/albums/${props.match.params.id}`)
        let album = await res.json();
        setAlbum(album);
    }
    useEffect(() => { getAlbum() }, [])
    return (
        <>
            <h1>Details</h1>
            <div className="card">
                <div className="card-body">
                    <ul>
                        <li>Title: {album.title}</li>
                        <li>User ID: {album.userId}</li>
                        <li>Album ID: {album.id}</li>
                    </ul>
                    <button
                onClick = {()=> {props.history.goBack()}}
                 className='btn btn-primary w-25 '>Go Back</button>
                </div>
            </div>
        </>
    )

}
export default AlbumDeets