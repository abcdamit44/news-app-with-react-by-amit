import React, { useState, useEffect } from 'react';
import Card from './Card';


export default function India() {
    const [value, setValue] = useState("");
    async function getNews() {
        let response = await fetch(`./api.json`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        })

        let data = await response.json();

        let news = data.articles.map((a, i) => {
            return (
                <>
                    <Card title={a.title} desc={a.description} key={i} urlToImage={a.urlToImage} url={a.url} />
                </>
            );
        })
        setValue(news)

    }
    useEffect(() => {
        getNews()
    }, [])

    return (
        <>
            <main>
                <h1>Business</h1>
                <div className="news-section">
                    {value}
                </div>
            </main>
        </>
    )
}
