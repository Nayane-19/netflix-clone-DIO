var url = 'https://api.themoviedb.org/3/tv/airing_today?api_key=62e0421dd26fa612590aa7e68e3672cf&language=pt-BR';

fetch(url).then(response => {
    return response.json();
})
.then(data => {
    moviesLoad(data)
})


function moviesLoad(data){
    const img = "https://image.tmdb.org/t/p/w200";
    console.log($('#content'))

    data.results.map(s => {
            $(".box-1").append(`<img src="${img}${s.poster_path}" class="item"/>`)
    })
}


const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));

$('.menu-mobile').click(function(){
  $('.box-menu-mobile').toggleClass('show')
})