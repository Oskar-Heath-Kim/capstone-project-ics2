//Constants======================================================
const defaultPlayerHitpoints = 3
//Global=========================================================

//Classes========================================================

class Hero extends sprites.ExtendableSprite {
    hitpoints: number
    constructor(image: Image, kind: number, hitpoints: number) { //#12
        super(image, kind)
        this.hitpoints = hitpoints
    }
    hit(points: number): void { //#13
        this.hitpoints -= points
        if (this.hitpoints <= 0) {
            this.destroy()
        }
    }
}

//Functions======================================================
function createPlayer(): void{
    let player = new Hero(assets.image`hero`,SpriteKind.Player,defaultPlayerHitpoints)
}
//Event-Handlers=================================================

//Main===========================================================

createPlayer()