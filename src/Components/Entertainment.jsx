import React, { useState, useEffect } from 'react';
import Card from './Card';


export default function India() {
    const [value, setValue] = useState("");
    async function getNews() {

        let response = await fetch("https://api.newscatcherapi.com/v2/latest_headlines?countries=IN&lang=en&topic=entertainment", {
            headers: {
                'x-api-key': 'bxnwiWww3uVsmDB7MwBoTXihAohKFlo1_8I_vwzp104'
            }
        });

        let data = await response.json();

        let news = data.articles.map((a, i) => {
            return (
                <>
                    <Card title={a.title} desc={a.excerpt} key={i} urlToImage={a.media} url={a.link} />
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
