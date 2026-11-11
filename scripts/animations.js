sourceURL = document.currentScript.dataset.sourceURL
if (!sourceURL) console.error("FUCK")

const hoveringMons=["claydol","zapdos","flygon","latios","latias","zapdos","dustox","moltres","pidgeot","ho-oh","ledian","gastly","fearow","duskull","glalie","zubat","geodude","articuno","dragonite","mew","solrock","lugia","koffing","ninjask","chimecho","shedinja","celebi","golbat","butterfree","wingull","beedrill","beautifly","gligar","beldum","haunter","magnemite","voltorb","hoppip","pidgey","venomoth","misdreavus"]

var image_sizes
fetch(sourceURL+'image_sizes.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();  
                })
                .then(data => image_sizes = data)  
                .catch(error => console.error('Failed to fetch data:', error)); 

//Function modified to fit the sprites into the gen 3 battle positions with convenient coordinates, as well as a system that checks the prite sizes to ajust scale and position
var POS = undefined
try {POS = BattleScene.prototype.pos} catch {console.error("function pos not found")}
if (POS) {
    BattleScene.prototype.pos = function (loc,obj){
        loc = {
            x: 0,
            y: 0,
            z: 0,
            scale: 1,
            opacity: 1,
            ...loc,
        };
        if (!loc.xscale && loc.xscale !== 0) loc.xscale = loc.scale;
        if (!loc.yscale && loc.yscale !== 0) loc.yscale = loc.scale;

        let left = 260; // +50 px from the original
        let top = 200;  // -45 px 

        let scale = 1.7 - 0.6 * ((loc.z) / 200);
        if (obj.gen === 5) scale = 1.7 - 0.7 * ((loc.z) / 200);
        if (obj.url ? obj.url.includes("/moves/") : false) scale = 1.7
        if (scale < 0.1) scale = 0.1;
        obj.scale = scale

        var topDispl = 30
        if ("url" in obj & obj.isFrontSprite) {
            if (obj.url.split("/sprites/")[1].slice(0,-4).replace("-shiny","") in image_sizes) topDispl = image_sizes[obj.url.split("/sprites/")[1].slice(0,-4).replace("-shiny","")].b
        }
        if (obj.gen==5){
            if (obj.url.split("/sprites/")[1].slice(0,-4).replace("-shiny","") in image_sizes){
                var spriteHeight = 96 - image_sizes[obj.url.split("/sprites/")[1].slice(0,-4).replace("-shiny","")].b - image_sizes[obj.url.split("/sprites/")[1].slice(0,-4).replace("-shiny","")].t
                if (spriteHeight > 75) {scale = 1.5 - 0.7 * ((loc.z) / 200); topDispl +=15};
            }
        }
        if (obj.gen==4 && obj.url.includes("/gen4-back/")){
            scale *=0.8
            top+=11
        }

        left += (495 - 260) * ((loc.z) / 200);
        top += (134 - 200) * ((loc.z) / 200);
        left += Math.floor(loc.x * scale);
        top -= Math.floor(loc.y * scale /* - loc.x * scale / 4 */);
        let width = Math.floor(obj.w * scale * loc.xscale);
        let height = Math.floor(obj.h * scale * loc.yscale);
        let hoffset = Math.floor((obj.h - (obj.y || 0) * 2) * scale * loc.yscale);
        left -= Math.floor(width / 2);
        top -= Math.floor(hoffset / 2);

        

        // if ("isFrontSprite" in obj) {console.log(obj) ; console.log(topDispl,scale)}
        
        top -= (topDispl - 30) * -2

        if ("url" in obj & obj.isFrontSprite) if (hoveringMons.includes(obj.url.split('/').at(-1).slice(0,-4))) {top -= 15; console.log("hovering")}
        let pos = {
            left,
            top,
            width,
            height,
            opacity: loc.opacity,
        };

        if ("isFrontSprite" in obj) pos.zIndex = obj.isFrontSprite ? 3 : 8
        if ("url" in obj) {if(obj.url.includes("play.pokemonshowdown")) pos.zIndex = loc.z==200 ? 3 : 8}
        if ("rawHTML" in obj) pos.zIndex = loc.z==200 ? 3 : 8
        if (loc.display) pos.display = loc.display;
        if (loc.rotate) pos.rotate = `${loc.rotate}deg`
        return pos;
    }
}

//function with an added support for rotation
POST = undefined
try {POST = BattleScene.prototype.posT}catch{console.error("Function posT not found")}
if (POST){
    BattleScene.prototype.posT = function (loc, obj, transition = "", oldLoc = {}){
        css = POST.apply(this,arguments)
        if (loc.rotate) css.transform = [`${loc.rotate}deg`,css.height[1]]
        return css
    }
}

//base function with some added in arguments for more versatility
BattleScene.prototype.backgroundEffect = function(bg, duration, opacity = 1, delay = 0, transTime = 250, additionnalCSS = {}) {
    let $effect = $('<div class="background"></div>');
    $effect.css({
        background: bg,
        display: 'block',
        opacity: 0,
        ...additionnalCSS
    });
    this.$bgEffect.append($effect);
    $effect.delay(delay).animate({
        opacity,
    }, transTime).delay(duration - transTime);
    $effect.animate({
        opacity: 0,
    }, transTime);
}

//Changed to correspond to the gen 3 animations
PokemonSprite.prototype.animSummon = function(pokemon, slot, instant){
    if (!this.scene.animating) return;
    this.scene.$sprites[+this.isFrontSprite].append(this.$el);
    this.recalculatePos(slot);

    // 'z-index': (this.isFrontSprite ? 4-slot : 1+slot),
    if (instant) {
        this.$el.css('display', 'block');
        this.animReset();
        this.resetStatbar(pokemon);
        // if (pokemon.hasVolatile('substitute' as ID)) this.animSub(true);
        return;
    }
    if (this.cryurl) {
        BattleSound.playEffect(this.cryurl);
    }

    this.resetStatbar(pokemon, true);
    this.scene.updateSidebar(pokemon.side);
    this.$statbar.css({
        display: 'block',
        opacity: 0,
        left: this.$statbar[0].className.includes("rstatbar") ? "585px" : "-100px"
    })
    this.$statbar.delay(this.scene.timeOffset).animate({opacity: 1},0).animate({
        left: this.$statbar[0].className.includes("rstatbar") ? "385px" : "130px",
    },27 * frame)


    this.$el.css(this.scene.pos({
        display: 'block',
        x: this.x,
        y: this.y,
        z: this.z,
        scale: 0,
        opacity: 0,
    }, this.sp));

    var tint = Object.create(Object.getPrototypeOf(this));
    Object.assign(tint, this);
    tint.$el = $(animTint(200, this.$el,this.scene,60))

    tint.$el.css(this.scene.pos({
        display: 'block',
        x: this.x,
        y: this.y,
        z: this.z,
        scale: 0,
        opacity: 0.8,
    }, this.sp));

    if(this.z == 200) {
        this.delay(9 * frame + this.scene.timeOffset).anim({
            scale: 1,
            time: 7 *frame,
        })
        tint.delay(9 * frame + this.scene.timeOffset).anim({
            scale: 1,
            time: 7 * frame
        }).anim({
            opacity: 0,
            time: 5 * frame
        })

        this.scene.showEffect("g3_pokeball",{
            x:this.x,y:this.y,z:this.z,time: 0, scale: 2
        },{time: 9 * frame},"","",{imageRendering: "pixelated", zIndex: 8}).animate({opacity:0},0)
        this.scene.showEffect("g3_pokeballopen",{
            x:this.x,y:this.y,z:this.z,time: 9*frame, scale: 2
        },{time: 13 * frame},"","",{imageRendering: "pixelated", zIndex: 8}).animate({opacity:0},0)
        this.scene.showEffect("g3_pokeballfullopen",{
            x:this.x,y:this.y,z:this.z,time: 13*frame, scale: 2
        },{time: 17 * frame},"","",{imageRendering: "pixelated", zIndex: 8}).animate({opacity:0},0)

        this.scene.wait(35 * frame)
    }
    if(this.z == 0) {
        this.delay(15 * frame + this.scene.timeOffset).anim({ //added explicitely since .anim dosent check for it and here i need it to since 'this' changes between the last call
            scale: 1,
            time: 7 *frame,
        })
        tint.delay(15 * frame + this.scene.timeOffset).anim({
            scale: 1,
            time: 7 * frame
        }).anim({
            opacity: 0,
            time: 5 * frame
        })

        a = this.scene.showEffect("g3_pokeball",{
            x:this.x - 40,
            y:this.y + 50,
            z:this.z,
            time: 0,
        },{
            x:this.x - 25,
            y:this.y + 40,
            time: 5 * frame},"balistic","",{imageRendering: "pixelated", zIndex: 8}
        ).animate({rotate: "1260deg", ...this.scene.pos({x:this.x,y:this.y-20,z:this.z},BattleEffects.g3_pokeball)},15 * frame)   
        a.animate({opacity: 0},{delay: 20 * frame, duration: 0, fill: "forwards"})
        this.scene.wait(50 * frame)
    }

    if (pokemon.hasVolatile('substitute')) {
                this.animSub();
            }

    if (this.sp.shiny && this.scene.acceleration < 2) BattleOtherAnims.shiny.anim(this.scene, [this]);

    this.dogarsCheck(pokemon);
}
//gen3 animation
PokemonSprite.prototype.animUnsummon = function(pokemon, instant = false) {
    this.removeSub();
    if (!this.scene.animating || instant || this.skipNextAnim) {
        this.skipNextAnim = false
        this.$el.hide();
        if (this.$statbar) {
            this.$statbar.remove();
            this.$statbar = null;
        }
        return;
    }

    var tint = Object.create(Object.getPrototypeOf(this));
    Object.assign(tint, this);
    tint.$el = $(animTint(200, this.$el,this.scene,60))

    tint.$el.css(this.scene.pos({
        display: 'block',
        x: this.x,
        y: this.y,
        z: this.z,
        scale: 0,
        opacity: 0,
    }, this.sp));

    this.delay(9 * frame).anim({
        scale: 0,
        time: 7 *frame,
    })
    tint.delay(4 * frame).anim({
        opacity: 0.8,
        time: 5 * frame
    }).anim({
        scale: 0,
        time: 7 * frame
    })
    this.scene.wait(35 * frame);
    

    this.updateStatbar(pokemon, true);
    let $statbar = this.$statbar;
    if ($statbar) {
        this.$statbar = null;
        $statbar.animate({
            left: this.statbarLeft + (this.isFrontSprite ? 50 : -50),
            opacity: 0,
        }, 300 / this.scene.acceleration, () => {
            $statbar.remove();
        });
    }
}
//gen 3 animation
PokemonSprite.prototype.animFaint = function (pokemon) {
    this.removeSub();
    if (!this.scene.animating) {
        this.$el.remove();
        if (this.$statbar) {
            this.$statbar.remove();
            this.$statbar = null;
        }
        return;
    }
    this.updateStatbar(pokemon, false, true);
    this.scene.updateSidebar(pokemon.side);
    if (this.cryurl) {
        BattleSound.playEffect(this.cryurl);
    }
    this.anim({
        y: this.y - 150,
        time: 5*frame
    }, 'linear')
    this.scene.waitFor(this.$el);
    this.$el.promise().done(() => {
        this.$el.remove();
    });

    let $statbar = this.$statbar;
    if ($statbar) {
        this.$statbar = null;
        $statbar.animate({
            opacity: 0,
        }, 0, () => {
            $statbar.remove();
        });
    }
}
PokemonSprite.prototype.animDragIn = function (pokemon, slot) {
    return this.animSummon(pokemon, slot)
}
PokemonSprite.prototype.animDragOut = function (pokemon){
    return this.animUnsummon(pokemon, true);
}


try {window.PS.prefs["nogif"]=true} catch {window.Storage.prefs('nogif',true)}
//just changed gen with 3 lol, ps does the rest
BattleScene.prototype.addPokemonSprite = function (pokemon) {
    const sprite = new PokemonSprite(Dex.getSpriteData(pokemon, pokemon.side.isFar, {
        gen: 3,
        mod: this.mod,
    }), {
        x: pokemon.side.x,
        y: pokemon.side.y,
        z: pokemon.side.z,
        opacity: 0,
    }, this, pokemon.side.isFar);
    if (sprite.$el) this.$sprites[+pokemon.side.isFar].append(sprite.$el);

    return sprite;
}

//gen3 animation
PokemonSprite.prototype.animSub = function(instant, noAnim) {
    if (!this.scene.animating) return;
    if (this.$sub) return;
    const subsp = Dex.getSpriteData('substitute', this.isFrontSprite, {
        gen: this.scene.gen,
        mod: this.scene.mod,
    });
    this.subsp = subsp;
    this.$sub = $('<img src="' + subsp.url + '" style="display:block;opacity:0;position:absolute"' + (subsp.pixelated ? ' class="pixelated"' : '') + ' />');
    this.scene.$spritesFront[+this.isFrontSprite].append(this.$sub);
    this.isSubActive = true;
    if (instant) {
        if (!noAnim) this.animReset();
        return;
    }
    this.$el.animate(this.scene.pos({
        x: this.x,
        y: this.y + 10,
        z: this.z,
        xscale: 0,
        yscale: 1.3
    }, this.sp), 5 * frame);
    this.$el.animate(this.scene.pos({
        x: this.behindx(200),
        y: this.y,
        z: this.z,
        xscale: 1,
        yscale: 1,
        opacity: 0
    }, this.sp), 0 * frame).delay(27 * frame);

    this.$sub.css(this.scene.pos({
        x: this.x,
        y: this.y + 500,
        z: this.z,
        opacity: 1,
    }, subsp));
    this.$sub.animate(this.scene.pos({
        x: this.x,
        y: this.y + 500,
        z: this.z,
        opacity: 1,
    }, subsp), 15 * frame);
    this.$sub.animate(this.scene.pos({
        x: this.x,
        y: this.y,
        z: this.z,
    }, subsp), 6 * frame);
    this.$sub.animate(this.scene.posT({
        x: this.x,
        y: this.y + 30,
        z: this.z,
    }, subsp, "decel"), 5 * frame);
    this.$sub.animate(this.scene.posT({
        x: this.x,
        y: this.y,
        z: this.z,
    }, subsp, "accel"), 6 * frame);
    this.scene.waitFor(this.$sub);
}
PokemonSprite.prototype.animSubFade = function(instant) {
    if (!this.$sub || !this.scene.animating) return;
    this.isSubActive = false;
    if (instant) {
        this.$sub.remove();
        this.$sub = null;
        this.animReset();
        return;
    }
    if (this.scene.timeOffset) {
        this.$el.delay(this.scene.timeOffset);
        this.$sub.delay(this.scene.timeOffset);
    }

    whiteSub = $(animTint(0,this.$sub,this.scene,0))
    whiteSub.delay(2*frame).animate({opacity: 0.5}, 2*frame)
    whiteSub.animate({opacity: 0}, 8 * frame)
    this.$sub.delay(4*frame).animate({opacity: 0}, 8 * frame);

    this.$sub = null;
    this.delay(12 * frame).anim({ time: 10 * frame });
    if (this.scene.animating) this.scene.waitFor(this.$el);
}
PokemonSprite.prototype.beforeMove = function() {
    if (!this.scene.animating) return false;
    if (!this.isSubActive) return false;
    this.isSubActive = false;
    this.anim({ time: 10 * frame });
    this.$sub.animate(this.scene.pos({
        x: this.behindx(300),
        y: this.y,
        z: this.z,
    }, this.subsp), 10 * frame);
    // for (const side of this.scene.battle.sides) {
    //     for (const active of side.active) {
    //         if (active && active.sprite !== this) {
    //             active.sprite.delay(10*frame);
    //         }
    //     }
    // }
    this.scene.wait(10 * frame);

    return true;
}
PokemonSprite.prototype.afterMove = function() {
    if (!this.scene.animating) return false;
    if (!this.$sub || this.isSubActive) return false;
    this.isSubActive = true;
    this.$sub.delay(10 * frame);
    this.$el.add(this.$sub).promise().done(() => {
        if (!this.$sub || !this.$el) return;
        this.$el.animate(this.scene.pos({
            x: this.behindx(200),
            y: this.y,
            z: this.z,
        }, this.sp), 10 * frame);
        this.anim({ time: 10 * frame });
    });
    return false;
}
//the default battle state 
PokemonSprite.prototype.animReset = function() {
    if (!this.scene.animating) return;
    if (this.$sub) {
        this.isSubActive = true;
        this.$el.stop(true, false);
        this.$sub.stop(true, false);
        this.$el.css(this.scene.pos({
            x: this.behindx(200),
            y: this.y,
            z: this.z,
            opacity: 1,
        }, this.sp));
        this.$sub.css(this.scene.pos({
            x: this.x,
            y: this.y,
            z: this.z,
        }, this.subsp));
    } else {
        this.$el.stop(true, false);
        this.$el.css(this.scene.pos({
            x: this.x,
            y: this.y,
            z: this.z,
        }, this.sp));
    }
}





//functions from battle-animations.ts -BattleScene : teampreview, pseudoWeatherLeft, sideConditionLeft, weatherLeft, upkeepWeather, updateWeather, incrementTurn, addSideCondition, (damageAnim, healAnim,...), setBGM
// -PokemonSprite : removeTransform, animTransform, pokeEffect, addEffect 








//added a check to play animations alongside some indicators such as damage, heal, etc
RESULTANIM = undefined
try{RESULTANIM = BattleScene.prototype.resultAnim}catch{console.error('Function resultAnim not found')}
if (RESULTANIM){
    BattleScene.prototype.resultAnim = function (pokemon, result, type) {  //This shows the pop up when something happens (damage, heal, boost, ...)
        console.log("result: ", result, type)

        var directAttackMessages = Array.from(["used <strong>", `${pokemon.name} lost ${result.slice("&minus;")} of its health!`, "It's not very effective...", "A critical hit!", "It's super effective!"]) //all the chat messages that can happen before a damage by an attack
        console.log(Boolean(result.includes('&times;&nbsp;') & type!='neutral'),(result.includes('&times;&nbsp;') & type!='neutral'))

        //This is an attemt at making subs blink on hit
        // var subHitMessages = Array.from(["Damage", "Super-effective", "Faded", "Resisted"])
        // if (subHitMessages.includes(result) & pokemon.sprite.$sub) console.log(pokemon); blink(pokemon.sprite.$sub); 
        
        switch (true){
            case result=='Focusing':
                this.runMoveAnim('focuspunchcharge',[pokemon])
                return;
            case Boolean(/&minus;[0-9]*%/.test(result) & directAttackMessages.some(test => this.log.innerElem.lastChild.innerHTML.includes(test))):
                blink(pokemon.sprite);
                break
            case Boolean(result.includes('&times;&nbsp;') & type!='neutral'):
                this.runStatusAnim("statChange", [pokemon, {sprite: type=="good"? 1 : -1}])
                break
        }
        RESULTANIM.apply(this,arguments)
    }
}

//status effect gen 3 animations
BattleStatusAnims.brn = {
    anim(scene,[attacker]){
        for (var t=0;t<3;t++){
            scene.showEffect("g3_burn1",{
                x: attacker.x - 40,
                y: attacker.y - 15 + (attacker.z==0?0:15),
                z: attacker.z,
                time: (0 + 6 * t) * frame
            },{x: attacker.x - 30, time: (2 + 6 * t) * frame},"","",{imageRendering: "pixelated", zIndex: attacker.z==0?8:3}).animate({opacity: 0}, 0)
            scene.showEffect("g3_burn2",{
                x: attacker.x - 30,
                y: attacker.y - 15 + (attacker.z==0?0:15),
                z: attacker.z,
                time: (2 + 6 * t) * frame
            },{x: attacker.x - 10, time: (6 + 6 * t) * frame},"","",{imageRendering: "pixelated", zIndex: attacker.z==0?8:3}).animate({opacity: 0}, 0)
            scene.showEffect("g3_burn3",{
                x: attacker.x - 10,
                y: attacker.y - 15 + (attacker.z==0?0:15),
                z: attacker.z,
                time: (6 + 6 * t) * frame
            },{x: attacker.x - 0, time: (8 + 6 * t) * frame},"","",{imageRendering: "pixelated", zIndex: attacker.z==0?8:3}).animate({opacity: 0}, 0)
            scene.showEffect("g3_burn4",{
                x: attacker.x - 0,
                y: attacker.y - 15 + (attacker.z==0?0:15),
                z: attacker.z,
                time: (8 + 6 * t) * frame
            },{x: attacker.x + 10, time: (10 + 6 * t) * frame},"","",{imageRendering: "pixelated", zIndex: attacker.z==0?8:3}).animate({opacity: 0}, 0)
            scene.showEffect("g3_burn5",{
                x: attacker.x + 10,
                y: attacker.y - 15 + (attacker.z==0?0:15),
                z: attacker.z,
                time: (10 + 6 * t) * frame
            },{x: attacker.x + 20, time: (12 + 6 * t) * frame},"","",{imageRendering: "pixelated", zIndex: attacker.z==0?8:3}).animate({opacity: 0}, 0)
            scene.showEffect("g3_burn1",{
                x: attacker.x + 20,
                y: attacker.y - 15 + (attacker.z==0?0:15),
                z: attacker.z,
                time: (12 + 6 * t) * frame
            },{x: attacker.x + 30, time: (14 + 6 * t) * frame},"","",{imageRendering: "pixelated", zIndex: attacker.z==0?8:3}).animate({opacity: 0}, 0)
        }
    }
}
BattleStatusAnims.par = {
    anim(scene, [attacker]){
        electricEffect(scene,attacker,0)
        for (var i = 0; i<5; i++) attacker.anim({x: attacker.x + 5, time: frame}).anim({x: attacker.x, time: frame})
    }
}
BattleStatusAnims.psn = {
    anim(scene,[attacker]){
        tintedDef = animTint(181,attacker.$el,scene)
        var attacker2 = Object.create(Object.getPrototypeOf(attacker));
        Object.assign(attacker2, attacker);
        attacker2.$el = $(tintedDef)
        
        for (var i = 0; i<9; i++) attacker.anim({x: attacker.x + 5, time: frame}).anim({x: attacker.x, time: frame}).delay(frame)

        attacker2.anim({x: attacker2.x + 5, time: frame, opacity: 0}).anim({x: attacker2.x, time: frame, opacity: 0.1}).delay(frame)
        attacker2.anim({x: attacker2.x + 5, time: frame, opacity: 0.2}).anim({x: attacker2.x, time: frame, opacity: 0.4}).delay(frame)
        attacker2.anim({x: attacker2.x + 5, time: frame, opacity: 0.4}).anim({x: attacker2.x, time: frame, opacity: 0.6}).delay(frame)
        attacker2.anim({x: attacker2.x + 5, time: frame, opacity: 0.6}).anim({x: attacker2.x, time: frame, opacity: 0.8}).delay(frame)
        attacker2.anim({x: attacker2.x + 5, time: frame, opacity: 0.8}).anim({x: attacker2.x, time: frame, opacity: 0.8}).delay(frame)
        attacker2.anim({x: attacker2.x + 5, time: frame, opacity: 0.8}).anim({x: attacker2.x, time: frame, opacity: 0.6}).delay(frame)
        attacker2.anim({x: attacker2.x + 5, time: frame, opacity: 0.6}).anim({x: attacker2.x, time: frame, opacity: 0.4}).delay(frame)
        attacker2.anim({x: attacker2.x + 5, time: frame, opacity: 0.4}).anim({x: attacker2.x, time: frame, opacity: 0.2}).delay(frame)
        attacker2.anim({x: attacker2.x + 5, time: frame, opacity: 0.2}).anim({x: attacker2.x, time: frame, opacity: 0}).delay(frame)
    }
}
BattleStatusAnims.slp = {
    anim(scene, [attacker]){
        scene.showEffect("g3_z",{
            x: attacker.x,
            y: attacker.y + (attacker.z==200?15:0) + 10,
            z: attacker.z,
            time: 0,
            scale: 0,
            rotate: 10
        }, {
            x: attacker.x + 10,
            y: attacker.y + (attacker.z==200?15:0) + 50,
            z: attacker.z,
            time: 29 * frame,
            scale: 1,
        },"balistic","",{imageRendering: "pixelated", zIndex: attacker.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect("g3_z",{
                x: attacker.x,
                y: attacker.y + (attacker.z==200?15:0) + 10,
                z: attacker.z,
                time: 12 * frame,
                scale: 0,
                rotate: 10 //30
            }, {
                x: attacker.x + 10,
                y: attacker.y + (attacker.z==200?15:0) + 50,
                z: attacker.z,
                time: 41 * frame,
                scale: 1,
                rotate: 10,
            },"balistic","",{imageRendering: "pixelated", zIndex: attacker.z == 0?8:3}).animate({opacity: 0},0)
    }
}

//canvas stuff writen by chat gpt bc wtf is a canvas
BattleStatusAnims.statChange = {
    anim(scene, [attacker, direction, type = "Mix"]){ //direction is 1 if good and -1 if bad; type is what stat was changed
        attacker.$statEffectCanv = $(`<canvas class="statEffect"></canvas>`)
        scene.$fx.append(attacker.$statEffectCanv)
        scene.$fx.append(attacker.$statEffect)
        console.log(scene, attacker)

        const canvas = attacker.$statEffectCanv[0]
        const ctx = canvas.getContext("2d")

        const w = parseInt(attacker.$el[0].style.width);
        const h = parseInt(attacker.$el[0].style.height);

        canvas.width = w;
        canvas.height = h;
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        canvas.style.zIndex = attacker.$el[0].style.zIndex

        const startTime = performance.now();
        const maxTime = 30 * frame

        function tick(now) {
            const elapsed = now - startTime;

            canvas.style.top = attacker.$el[0].style.top
            canvas.style.left = attacker.$el[0].style.left
            canvas.style.opacity = 0.7 * (1- Math.abs(elapsed - maxTime/2)/maxTime*2)

            ctx.clearRect(0, 0, w, h);

            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(scene.$battle[0].getElementsByClassName("statChange"+type)[0], 0, (direction==1 ? h/3 : 0) + (-direction*elapsed/frame * 30) % h/3, w, h);

            ctx.globalCompositeOperation = "destination-in";
            ctx.drawImage(attacker.$el[0], 0, 0, w, h);

            ctx.globalCompositeOperation = "source-over";

            if (elapsed <= maxTime) {
                requestAnimationFrame(tick);
            }
            else{
                ctx.clearRect(0, 0, w, h);
            }
        }

        requestAnimationFrame(tick);
        scene.wait(maxTime)
    }
}