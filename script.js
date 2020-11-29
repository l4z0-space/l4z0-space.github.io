// Uses a quotes API and option to go to the next quote
var quotes = []

fetch('https://type.fit/api/quotes')
    .then(response =>{
        return response.json()
    })
    .then(data => {
        quotes = data
        const max = quotes.length
        const randomIndex = Math.floor(Math.random() * (max + 1)) ;
        const quote = data[randomIndex].text
        const author = data[randomIndex].author
        const quoteDiv = document.getElementById('quote')
        var quoteText = document.createTextNode(`" ${quote} " \n - ${author}`)
        quoteDiv.appendChild(quoteText);
    })
    
window.onload = () => {
    // Go to the next quote
    document.getElementById('next')
        .addEventListener('click', () => {
            randomIndex = Math.floor(Math.random() * (quotes.length + 1)) ;
            const quote = quotes[randomIndex].text
            const author = quotes[randomIndex].author
            const quoteDiv = document.getElementById('quote')
            quoteDiv.innerHTML = ''
            var quoteText = document.createTextNode(`" ${quote} " \n - ${author}`)
            quoteDiv.appendChild(quoteText);
        })
}