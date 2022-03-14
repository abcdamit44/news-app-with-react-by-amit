import React, { useState, useEffect } from 'react';
import Card from './Card';


export default function India() {
    const [value, setValue] = useState("");
    async function getNews() {

        let response = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=5102124e3da246c9a8d06bd7ffffeb54");

        // let response = await fetch(`./api.json`, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }

        // })

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
                <h1>Entertainment</h1>
                <div className="news-section">
                    {value}
                </div>
            </main>
        </>
    )
}
