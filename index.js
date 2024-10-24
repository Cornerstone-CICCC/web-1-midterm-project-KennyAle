const icons = {
    location: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin">
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>`
}

let exercise = document.getElementById("exercise")

let portfolioData
async function fetchData() {
    const response = await fetch('portfolio.json')
    if (response.status == 404) {
        console.log("Error fetching data")
    } else {
        portfolioData = await response.json()
        console.log(portfolioData.info.name)
        exercise.classList.add("hero")
        exercise.classList.add("container")
        const article = document.createElement("article")
        article.innerHTML = `
        <h1>${portfolioData.info.name}</h1>
        <h2>${portfolioData.info.title}</h2>
        <p>${portfolioData.info.description}</p>
        <span>
            ${icons.location}
            <p>${portfolioData.info.location}</p>
        </span>
        `
        const socialsContainer = document.createElement("ul")
        socialsContainer.classList.add("socials")
        console.log(portfolioData.info.socials)
        portfolioData.info.socials.forEach(element => {
            let social = document.createElement("li")
            social.innerHTML = `
            <a>
            ${element[2]}
            </a>
            `
            socialsContainer.appendChild(social)
        });
        article.appendChild(socialsContainer)
        exercise.appendChild(article)
    }
}

fetchData()



// fetch("portfolio.json")
//   .then(response => response.json())
//   .then(portfolio => {
//     portfolioData = portfolio
//     console.log(portfolio);
//   });
//   console.log(portfolioData)


