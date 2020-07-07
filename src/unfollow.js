let delayInSecondsUnFollow = 120;
let startingFrom = 600;
let unfollowlimit = 200;
let unfollowStop = startingFrom+unfollowlimit;
let scrollIndex = 0;
let index = startingFrom;
let scroll = 0 ;
let unFollowedList = [];
let user = '';
let whiteList = [];

console.clear();


let firstScrollingProcess = setInterval(firstScroll, (1000));

function firstScroll() {
    if(startingFrom>scrollIndex){
        scrollIndex = document.getElementsByClassName("sqdOP  L3NKy    _8A5w5    ").length;
        scroll = document.getElementsByClassName("isgrP")[0];
        scroll.scrollTop = scroll.scrollHeight;
        console.clear();
        console.log(`1° Proceso: Localizando usuario numero ${startingFrom}. ${(scrollIndex/startingFrom*100).toFixed(0)}% completado`);
        console.log(`Abriendo ${scrollIndex} usuarios de ${startingFrom} antes de comenzar siguiente proceso`);
        
    }
    else{
        console.clear();
        clearInterval(firstScrollingProcess);
        console.log(`Finalizada la localizacion del primer usuario a unfollowear, comienza proceso`);
        let unFollowProcess = setInterval(unfollowea, (delayInSecondsUnFollow * 1000));
        let scrollingProcess = setInterval(scrollea, (delayInSecondsUnFollow * 5 * 1000));  
    }
}



function unfollowea() {
    if (index < unfollowStop) {
        document.getElementsByClassName("sqdOP  L3NKy    _8A5w5    ")[startingFrom].click();
        document.getElementsByClassName("aOOlW -Cab_   ")[0].click();
        user = document.getElementsByClassName("FPmhX notranslate  _0imsa ")[index-1].title;
        console.clear();
        console.log(`2° Proceso: Unfolloweando ${index-startingFrom+1} usuarios. ${((index-startingFrom)/unfollowlimit*100).toFixed(0)}% completado`);
        console.log(`Unfolloweando usuario ${user}`);
        unFollowedList.push(user);
        
        index++;
    } else {
        clearInterval(unFollowProcess);
        clearInterval(scrollingProcess);
        console.log(`Proceso terminado. Se han unfolloweado ${index-startingFrom} usuarios`);
        console.log(unFollowedList);
    }
}

function scrollea() {
    var scroll = document.getElementsByClassName("isgrP")[0];
    scroll.scrollTop = scroll.scrollHeight;

}

