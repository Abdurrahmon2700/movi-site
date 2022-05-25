let list =  document.querySelector('.main__list')
let modal = document.querySelector('.modal')
let filmcategoryop = document.querySelector('.filmcategory')

function render ( movies ){
  list.innerHTML = ""
  for (let i of movies) {
    let newLi = document.createElement('li')
    newLi.innerHTML = `
      <li class="main__item">
        <div class="card">
          <img src=${i.youtubePoster} alt="...">
          <button class="like__move"  id= "likebtn"><i class='bx bx-heart' id="hearth"></i></button>
          <h3 class="item__title">${i.title}</h3>
            <div class"card-body">
              <i class='bx bx-star'></i>
              <span>${i.imdbRating}</span>
              <i class='bx bx-calendar'></i>
              <span>${i.year}</span>
              <i class='bx bx-alarm' ></i>
              <span>${i.runtime}</span>
              <p class = "categoria">${i.categories}</p>
              <a class = "link__youtube" href="https://www.youtube.com/watch?v=${i.youtubeId}">movie link</a>
              <button  class="bookmark" id="${i.imdbId}" data-bs-toggle="modal" data-bs-target="#ab" >${i.imdbId}</button>
            </div>
        </div>
      </li>
      `
    list.appendChild(newLi)
  }
}


render(movie)
function options (){
 let categoris =  movie.map((film)=>film.categories)
 let arr = []
 for (let c of categoris){
   arr.push(...c)
 };
 let newarr = []
 for (let nc of arr){
    if (!newarr.includes(nc)){
      newarr.push(nc)
    }
 }
 for (let o of newarr){
   let opt = document.createElement("option")
   opt.value = o
   opt.text = o
   filmcategoryop.add(opt)
 }
}
options()
let movieImg = document.querySelector('.movi__img')
let modalBody = document.querySelector('.movie__desc')
let search = document.querySelector('.site__input')
function buttons (){
  let test2 = document.querySelectorAll('.bookmark')
  for(let i=0; i< test2.length; i++){
    test2[i].addEventListener('click', (e)=>{
      let id = e.target.id
      let modalid  =  movie.filter(e => e.imdbId == id)
      modalBody.textContent = modalid[0].summary
      movieImg.src= movie[i].youtubePoster
    })
  }
}
buttons()

submit.onclick = (even)=>{
  even.preventDefault()
  if( !film__name.value || !movedata.value || !movedatasince.value ) return
  let newlist = movie.filter((film)=>
    film.title.includes(film__name.value) && film.categories.includes(filmcategory.value)  &&film.year > movedata.value && film.year < movedatasince.value

  )
  render(newlist)
  buttons()
}

search.onkeyup = (event)=>{
  event.preventDefault()
  if (event.keyCode == 13){
    carouselExampleControlsNoTouching.style = "display:none;"
    console.log(search.value);
    let main = movie.filter( ( film )=> 
      film.title.includes(search.value)
    )
    render(main)
    buttons()
    search.value = ""
  }
}

function btnclick (e){
  console.log('12');
}

// likeBtn.addEventListener = (e)=>{
// }

let likeBtn = document.querySelectorAll('.like__move')
// likeBtn[0].addEventListener("click", () => {
// console.log('ok');
// })


likeBtn.forEach((item)=> {
  item.addEventListener("click", () => {
    console.log("d");
    hearth.style = "display:none;"
  })
})

let listElement = document.getElementById('list');
let paginationNumber = document.getElementById('pagination');


let current__page = 1;
let row = 30;

function displayList (item, wrapper, rows_per_page, page) {
  wrapper.innerHTML = "";
}