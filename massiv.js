let list =  document.querySelector('.main__list')
let modal = document.querySelector('.modal')
// let testab = document.querySelector('.testab')

for (let i = 0; i <= 31; i++) {

  let newLi = document.createElement('li')
  newLi.innerHTML = `
    <li class="main__item">
      <div class="card">
        <img src=${movies[i].youtubePoster} alt="...">
        <h3 class="item__title">${movies[i].title}</h3>
          <div class"card-body">
            <i class='bx bx-star'></i>
            <span>${movies[i].imdbRating}</span>
            <i class='bx bx-calendar'></i>
            <span>${movies[i].year}</span>
            <i class='bx bx-alarm' ></i>
            <span>${movies[i].runtime}</span>
            <p class = "categoria">${movies[i].categories}</p>
            <a class = "link__youtube" href="https://www.youtube.com/watch?v=${movies[i].youtubeId}">movie link</a>
            <button class="bookmark" id="${movies[i].imdbId}" data-bs-toggle="modal" data-bs-target="#ab" >${movies[i].imdbId}</button>
          </div>
      </div>
    </li>
  `
  list.appendChild(newLi)
}

let test2 = document.querySelectorAll('.bookmark')

let modalBody = document.querySelector('.movie__desc')
for(let i=0; i<= test2.length; i++){
  test2[i].addEventListener('click', (e)=>{
    let id = e.target.id
   let modalid  =  movies.filter(e => e.imdbId == id)
   modalBody.textContent = modalid[0].summary
  })
}



