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

        let response = await fetch("https://api.newscatcherapi.com/v2/latest_headlines?countries=IN&lang=en&topic=politics", {
            headers: {
                'x-api-key': 'bxnwiWww3uVsmDB7MwBoTXihAohKFlo1_8I_vwzp104'
            }
        });

        let data = await response.json();
        // console.log(data)

        let news = data.articles.map((a, i) => {
            return (
                <>
                    <Card title={a.title} desc={a.excerpt} key={a.rank} urlToImage={a.media} url={a.link} />
                </>
            );
        })
        // console.log(news[0])
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
