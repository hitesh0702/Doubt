class Form{
    constructor(){
this.input=createInput("Name")
this.button=createButton('Submit')
this.greeting=createElement('h3')
    }



display(){
    var title=createElement('h2')
    title.html("Enter Your Name ")
    title.position(69,100);
    this.input.position(90,250)
    this.button.position(90,340)

    
    this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
    player.name=this.input.value()
    playerCount+=1;
    player.index=playerCount
    player.update()
        player.updateCount(playerCount);

        this.greeting.html("Hello " + player.name )
       this.greeting.position(130, 160)

    })






    }

    hide(){
this.greeting.hide()
    this.input.hide()
this.button.hide;

    }
}