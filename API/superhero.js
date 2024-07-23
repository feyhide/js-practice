const base = 'https://superheroapi.com/api.php/1841499576307726'
const img = document.getElementById("img")
const att = document.getElementById("attributes")
const getSuperhero = (id) => {
    let name = document.getElementById("superheroname");
    fetch(`${base}/search/${name.value}`)
    .then(response => response.json())
    .then(data => {
        const hero = data.results[0]
        img.innerHTML = `<img src="${hero.image.url}" height=400>`
        att.innerHTML = `<h1>${hero.name}</h1>${getattributeHTML(hero)}`
    })
}
const statstoEmoji = {
    intelligence: '🧠',
    strength: '💪🏼',
    speed: '🚴‍♂️',
    durability: '⚡️',
    power: '🔥',
    combat: '🦍',
}
const getattributeHTML = (hero) => {
    const each = Object.keys(hero.powerstats).map(stat => {
        return `<p>${statstoEmoji[stat]} ${stat.toUpperCase()}: ${hero.powerstats[stat]}</p>`
    })
    return each.join('')
}
