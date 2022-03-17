import React from 'react'

export default function Card({ title, desc, urlToImage, url }) {
    return (
        <>
            <div className="card">
                <div className="card-img">
                    <img src={urlToImage} alt={title} />

                </div>
                <div className="card-body">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                    <a href={url}>Read More</a>
                </div>

            </div>
        </>
    )
}
