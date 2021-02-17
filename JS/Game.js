class Game{
    constructor(){


    }
    getState(){
var gamestateref=database.ref('gameState').on("value",function(data){
gameState=data.val();

})

    }
    update(state){
database.ref('/').update({
    gameState:state
})






    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form()
            form.display();
          }
        
    }
    play(){
        form.hide();
        text("Game Start",200,70);
        Player.getinfo();    //allplayers=[player1,player2,player3,player4]   player1=>name     p1name:distance
        if(allPlayers!==undefined){     
            var yp=100;
            for(var plr in allPlayers){
                yp+=30
            text(allPlayers[plr].name+":"+allPlayers[plr].distance,150,yp);

            }
        }
if(keyIsDown(UP_ARROW)&& player.index!==null){

player.distance+=50
player.update();
    
}

    }
}


