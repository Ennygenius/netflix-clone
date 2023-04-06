const cardContainer = document.getElementById('card-container');


let api = 'https://api.themoviedb.org/3/movie/popular?api_key=5c921761473f9cf79d6d717bf077c399&language=en-US&page=2'

const fetchApi = async () => {
    const res = await fetch(api);
    const data  =  await res.json()
    console.log(data);

    const movies = data.slice(0,6);
    movies.map((movie) => {
        return cardContainer.insertAdjacentHTML(
            'afterbegin', `<div class="card">
            <div class="card-img">
                <img src=${movie.poater_path} alt="uilih">
            </div> <div class="card-title"><h1>${movie.title}</h1></div> `
        )
    });

}

fetchApi()