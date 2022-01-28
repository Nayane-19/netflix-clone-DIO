var url = 'https://api.themoviedb.org/3/tv/airing_today?api_key=62e0421dd26fa612590aa7e68e3672cf&language=pt-BR';

fetch(url).then(response => {
    return response.json();
})
.then(data => {
    moviesLoad(data)
})


function moviesLoad(data){
    let teste = document.getElementById('teste')
    const img = "https://image.tmdb.org/t/p/w200";
    console.log(data.results.map(s => s))

    data.results.map(s => {
            let div = document.createElement('div')
            div.innerHTML = `<img src='${img}${s.poster_path}' />`
            teste.appendChild(div)
    })
}

