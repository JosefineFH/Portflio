// function start() {
//     // loadData();
//     // topSalesGamesData();
//     // newGames()
// }
// window.onload = start;

function loadData() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'assets/data/games.json', true);

    xhr.onload = function () {
        if (this.status == 200) {
            let gamesData = JSON.parse(this.responseText)
            let output = '';
            let outputTopGames = '';
            let outputNewGames = '';


            for (i in gamesData) {

                let gameImg = gamesData[i].image;
                let gamePrice = gamesData[i].price;
                let gameId = gamesData[i].id;
                let gamefeatured = gamesData[i].featured;
                let topGames = gamesData[i].topGames;
                let newGames = gamesData[i].newGame;
                let gameTitle = gamesData[i].title;

                if(gamefeatured === 1){
                    output += ' <article class="game">' + 
                    ' <img src="' + gameImg + '" alt="" class="game__img"></img>' +
                    ' <span class="game__price">' + gamePrice + '</span>' + 
                    '<button class="button-light games__button" onclick="shoppingCart( ' + gameId + ')"">Add to Cart</button>' + '<button class="button-light games__button" onclick="readMore( ' + gameId + ')"">Red More</button>' + '</article>'
                }

                if(topGames === 1){
                    outputTopGames += ' <article class="game">' + 
                ' <img src="' + gameImg + '" alt="" class="game__img"></img>' +
                ' <span class="game__price">' + gamePrice + '</span>' + 
                '<button class="button-light games__button" onclick="shoppingCart( ' + gameId + ')"">Add to Cart</button>' + '<button class="button-light games__button" onclick="readMore( ' + gameId + ')"">Red More</button>' + '</article>'
                }
                
                if(newGames === 1) {
                    console.log(gameTitle)
                    outputNewGames += ' <article class="game">' + 
                    ' <img src="' + gameImg + '" alt="" class="game__img"></img>' +
                    ' <span class="game__price">' + gamePrice + '</span>' + 
                    '<button class="button-light games__button" onclick="readMore( ' + gameId + ')"">Red More</button>' + '</article>'
                }



            }
            document.getElementById('game').innerHTML = output;
            document.getElementById('topGames').innerHTML = outputTopGames;
            document.getElementById('newGames').innerHTML = outputNewGames;



            
        }
    }
    xhr.send();

    var existingInLocalStorage = localStorage.getItem('gamesIdsArray');
    var localStorageCount = Array.from(existingInLocalStorage.split(","))

    document.getElementById('cart-count').innerHTML = localStorageCount.length;

    /* ---------------------------------- news ---------------------------------- */

}