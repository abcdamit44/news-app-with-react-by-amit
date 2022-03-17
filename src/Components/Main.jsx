import React, { useState, useEffect } from 'react';
import Card from './Card';


export default function Main() {
    const [value, setValue] = useState("");
    async function getNews() {
        // let response = await fetch(`./api.json`, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }

        // })

        // let response = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=5102124e3da246c9a8d06bd7ffffeb54");

        let response = await fetch("https://newsdata.io/api/1/news?apikey=pub_55409789662be32e466dfe650398e6105270&country=in&language=en&category=politics");

        let data = await response.json();
        // console.log(data.results)

        let news = data.results.map((a, i) => {
            return (
                <>
                    <Card title={a.title} desc={a.description} key={i} urlToImage={a.image_url} url={a.link} />
                </>
            );
        })
        console.log(news[0])
        setValue(news)

    }
    useEffect(() => {
        getNews()
    }, [])

    return (
        <>
            <main>
                <h1>Top Headlines</h1>
                <div className="news-section">
                    {value}
                </div>
            </main>
        </>
    )
}
