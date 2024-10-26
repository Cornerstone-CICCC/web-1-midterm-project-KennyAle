const icons = {
    location: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin">
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>`,
}

let portfolioData
async function fetchData() {
    const response = await fetch('portfolio.json')
    if (response.status == 404) {
        console.log("Error fetching data")
    } else {
        portfolioData = await response.json()
        heroSection()
        skillSection()
        workSection()
        expertiseSection()
        projectSection()
        certificateSection()
        educationSection()
    }
}

function heroSection() {
    const hero = document.createElement("section")
    hero.classList.add("hero", "container")
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
    portfolioData.info.socials.forEach(element => {
        let social = document.createElement("li")
        social.innerHTML = `
            <a href="${element[3]}">
            ${element[2]}
            </a>
            `
        socialsContainer.appendChild(social)
    })

    const socialsPrint = document.createElement("ul")
    socialsPrint.classList.add("socials-print")
    portfolioData.info.socials.forEach(element => {
        if (element.includes("print")) {
            let social = document.createElement("li")
            social.innerHTML = `
            <a>
            ${element[2]}${element[1]}
            </a>
            `
            socialsPrint.appendChild(social)
        }

    })

    const heroPicture = document.createElement("figure")
    heroPicture.innerHTML = `
    <img src="${portfolioData.info.picture}" alt="Prophile Picture">
    `

    article.appendChild(socialsPrint)
    article.appendChild(socialsContainer)
    hero.appendChild(article)
    hero.appendChild(heroPicture)
    document.body.appendChild(hero)
}

function expertiseSection() {
    const expertise = document.createElement("section")
    expertise.classList.add("expertise", "container")
    expertise.innerHTML = `
        <h2 class="title">Areas of Expertise</h2>
    `
    const list = document.createElement("ul")
    portfolioData.expertise.forEach(element => {
        let expertiseLi = document.createElement("li")
        expertiseLi.innerHTML = element
        list.appendChild(expertiseLi)
    })

    expertise.appendChild(list)
    document.body.appendChild(expertise)
}

function workSection() {
    const workExperience = document.createElement("section")
    workExperience.classList.add("work-experience", "container")
    workExperience.innerHTML = `
        <h2 class="title">Work Experience</h2>
    `
    portfolioData.work_experience.forEach(element => {
        let job = document.createElement("article")
        job.innerHTML = `
            <h2>${element.position}</h2>
            <h3>${element.company}</h3>
            <div>
                <h4>${element.startDate} - ${element.endDate}</h4>
                <h4>${element.location}</h4>
            </div>
        `
        let respCont = document.createElement("ul")
        element.responsibilities.forEach(resp => {
            let respItem = document.createElement("li")
            respItem.innerHTML = resp
            respCont.appendChild(respItem)
        })

        job.appendChild(respCont)
        workExperience.appendChild(job)
    })
    document.body.appendChild(workExperience)
}

function skillSection() {
    const skills = document.createElement("section")
    skills.classList.add("technologies", "container")
    skills.innerHTML = `
        <h2 class="title">Technical Skills</h2>
    `
    let skillsList = document.createElement("ul")
    portfolioData.technical_skills.forEach(skill => {
        let skillLi = document.createElement("li")
        skillLi.innerHTML = skill
        skillsList.appendChild(skillLi)
    })
    skills.appendChild(skillsList)
    document.body.appendChild(skills)
}

function certificateSection() {
    const certificate = document.createElement("section")
    certificate.classList.add("certificates", "container")
    certificate.innerHTML = `
        <h2 class="title">Courses & Certificates</h2>
    `
    let certificatesList = document.createElement("ul")
    portfolioData.certificates.forEach(certificate => {
        let certLi = document.createElement("li")
        certLi.innerHTML = `
                <p>${certificate.name}</p>
                <h4>${certificate.date}</h4>
        `
        certificatesList.appendChild(certLi)
    })

    certificate.appendChild(certificatesList)
    document.body.appendChild(certificate)
}

function projectSection() {
    const projects = document.createElement("section")
    projects.classList.add("projects", "container")
    projects.innerHTML = `
        <h2 class="title">Personal Projects</h2>
    `
    portfolioData.personal_projects.forEach(element => {
        let project = document.createElement("article")
        project.innerHTML = `
            <img src="${element.image}" alt="Prophile Picture">
            <h4>${element.name}</h4>
            <p>${element.description}</p>
        `
        let projectCont = document.createElement("ul")
        projectCont.classList.add("tags")
        element.tags.forEach(tag => {
            let projectItem = document.createElement("li")
            projectItem.innerHTML = tag
            projectCont.appendChild(projectItem)
        })

        project.appendChild(projectCont)
        projects.appendChild(project)
    })
    document.body.appendChild(projects)
}

function educationSection() {
    const education = document.createElement("section")
    education.classList.add("education", "container")
    education.innerHTML = `
        <h2 class="title">Education</h2>
    `
    let educationList = document.createElement("ul")
    portfolioData.education.forEach(school => {
        let eduLi = document.createElement("li")
        eduLi.innerHTML = `
                <h3>${school.career}</h3>
                <div>
                    <h4>${school.institution}</h4>
                    <h4>${school.duration}</h4>
                </div>
                <p>${school.details[0]}</p>
                <p>${school.details[1]}</p>
        `
        educationList.appendChild(eduLi)
    })

    education.appendChild(educationList)
    document.body.appendChild(education)
}

fetchData()



// fetch("portfolio.json")
//   .then(response => response.json())
//   .then(portfolio => {
//     portfolioData = portfolio
//     console.log(portfolio);
//   });
//   console.log(portfolioData)


