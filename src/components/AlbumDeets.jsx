import React, { useState, useEffect } from 'react'

const AlbumDeets = () => {
    const [album, setAlbum] = useState({})

    const getAlbum = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/${album.id}/details`)
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
                        <li>{album.title}</li>
                    </ul>
                </div>
            </div>
        </>
    )

}
export default AlbumDeets