
async function getQuote() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '44a9a13249mshb498fefcaa79ee5p1f63b0jsn4f26513311f7',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };

    let response = await fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)

    if (response.status === 200) {
        console.log("fetch successful")

        let res = await response.json()

        console.log("adding fact")

        let main = document.querySelector("main")
        let quote = document.createElement("p")
        let author = document.createElement("p")
        quote.innerHTML = res.content
        author.innerHTML = '~' + res.originator.name
        main.appendChild(quote)
        main.appendChild(author)
    }
    else {
        console.log(response.error)
        return null
    }
}

getQuote()