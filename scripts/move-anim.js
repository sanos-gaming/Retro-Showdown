//Here we will rewrite the code of move animations

// these two are just to prevent the bug where the background is given the wrong position by the animation 

BattleMoveAnims.earthpower= {
    anim(scene, [attacker, defender]) {
        scene.$bg.animate({
            top: 0,
            bottom: 0,
        }, 75).animate({
            top: -10,
        }, 100).animate({
            top: 0,
        }, 100).animate({
            top: -5,
        }, 100).animate({
            top: 0,
        }, 100).animate({
            top: -5,
        }, 100).animate({
            top: 0,
        }, 100).animate({
            top: -2.5,
        }, 100).animate({
            top: 0,
        }, 100).animate({
            top: -2.5,
        }, 100).animate({
            top: 0,
        }, 100);

        scene.showEffect('fireball', {
            x: defender.x + 10,
            y: defender.y - 35,
            z: defender.z,
            scale: 0,
            opacity: 0.8,
        }, {
            scale: 3,
            opacity: 0,
        }, 'linear');
        scene.showEffect('rock3', {
            x: defender.x + 10,
            y: defender.y - 35,
            z: defender.z,
            scale: 0.4,
            opacity: 0.6,
            time: 0,
        }, {
            x: defender.x + 30,
            y: defender.y + 50,
            scale: 0.5,
            opacity: 0,
            time: 300,
        }, 'linear', 'fade');
        scene.showEffect('rock3', {
            x: defender.x + 10,
            y: defender.y - 35,
            z: defender.z,
            scale: 0.4,
            opacity: 0.6,
            time: 100,
        }, {
            x: defender.x - 10,
            y: defender.y + 50,
            scale: 0.5,
            opacity: 0,
            time: 400,
        }, 'linear', 'fade');
        scene.showEffect('rock3', {
            x: defender.x + 40,
            y: defender.y - 35,
            z: defender.z,
            scale: 0.4,
            opacity: 0.6,
            time: 200,
        }, {
            x: defender.x + 35,
            y: defender.y + 50,
            scale: 0.5,
            opacity: 0,
            time: 500,
        }, 'linear', 'fade');

        scene.showEffect('fireball', {
            x: defender.x - 40,
            y: defender.y - 35,
            z: defender.z,
            scale: 0,
            opacity: 0.8,
            time: 150,
        }, {
            scale: 3,
            opacity: 0,
        }, 'linear');
        scene.showEffect('rock3', {
            x: defender.x - 40,
            y: defender.y - 35,
            z: defender.z,
            scale: 0.4,
            opacity: 0.6,
            time: 150,
        }, {
            x: defender.x - 60,
            y: defender.y + 45,
            scale: 0.5,
            opacity: 0,
            time: 450,
        }, 'linear', 'fade');
        scene.showEffect('rock3', {
            x: defender.x - 40,
            y: defender.y - 35,
            z: defender.z,
            scale: 0.4,
            opacity: 0.6,
            time: 250,
        }, {
            x: defender.x - 20,
            y: defender.y + 45,
            scale: 0.5,
            opacity: 0,
            time: 550,
        }, 'linear', 'fade');
        scene.showEffect('rock3', {
            x: defender.x - 40,
            y: defender.y - 35,
            z: defender.z,
            scale: 0.4,
            opacity: 0.6,
            time: 350,
        }, {
            x: defender.x - 35,
            y: defender.y + 45,
            scale: 0.5,
            opacity: 0,
            time: 650,
        }, 'linear', 'fade');

        scene.showEffect('fireball', {
            x: defender.x + 40,
            y: defender.y - 35,
            z: defender.z,
            scale: 0,
            opacity: 0.8,
            time: 300,
        }, {
            scale: 3,
            opacity: 0,
        }, 'linear');
        scene.showEffect('rock3', {
            x: defender.x + 40,
            y: defender.y - 35,
            z: defender.z,
            scale: 0.4,
            opacity: 0.6,
            time: 300,
        }, {
            x: defender.x + 60,
            y: defender.y + 65,
            scale: 0.5,
            opacity: 0,
            time: 600,
        }, 'linear', 'fade');
        scene.showEffect('rock3', {
            x: defender.x + 40,
            y: defender.y - 35,
            z: defender.z,
            scale: 0.4,
            opacity: 0.6,
            time: 400,
        }, {
            x: defender.x + 20,
            y: defender.y + 65,
            scale: 0.5,
            opacity: 0,
            time: 700,
        }, 'linear', 'fade');
        scene.showEffect('rock3', {
            x: defender.x + 40,
            y: defender.y - 35,
            z: defender.z,
            scale: 0.4,
            opacity: 0.6,
            time: 500,
        }, {
            x: defender.x + 30,
            y: defender.y + 65,
            scale: 0.5,
            opacity: 0,
            time: 800,
        }, 'linear', 'fade');

        defender.delay(50);
        defender.anim({
            y: defender.y - 10,
            time: 75,
        });
        defender.anim({
            y: defender.y + 10,
            time: 100,
        });
        defender.anim({
            y: defender.y - 7,
            time: 100,
        });
        defender.anim({
            y: defender.y + 7,
            time: 100,
        });
        defender.anim({
            y: defender.y - 7,
            time: 100,
        });
        defender.anim({
            y: defender.y + 7,
            time: 100,
        });
        defender.anim({
            y: defender.y - 2,
            time: 100,
        });
        defender.anim({
            y: defender.y + 2,
            time: 100,
        });
        defender.anim({
            y: defender.y,
            time: 100,
        });
    },
}

BattleMoveAnims.bulldoze = {
    anim(scene, [attacker, ...defenders]) {
        scene.$bg.delay(275);
        scene.$bg.animate({
            top: 0,
        }, 75).animate({
            top: -10,
        }, 100).animate({
            top: -0,
        }, 100).animate({
            top: -5,
        }, 100).animate({
            top: 0,
        }, 100).animate({
            top: -5,
        }, 100).animate({
            top: 0,
        }, 100).animate({
            top: -2.5,
        }, 100).animate({
            top: 0,
        }, 100).animate({
            top: -2.5,
        }, 100).animate({
            top: 0,
        }, 100);

        attacker.anim({
            y: attacker.y + 20,
            time: 175,
        }, 'swing');
        attacker.anim({
            y: attacker.y,
            time: 125,
        }, 'accel');
        attacker.anim({
            y: attacker.y - 10,
            yscale: 1,
            time: 75,
        });
        attacker.anim({
            y: attacker.y + 10,
            yscale: 0.9,
            time: 100,
        });
        attacker.anim({
            y: attacker.y - 5,
            yscale: 1,
            time: 100,
        });
        attacker.anim({
            y: attacker.y + 5,
            time: 100,
        });
        attacker.anim({
            y: attacker.y - 5,
            time: 100,
        });
        attacker.anim({
            y: attacker.y + 5,
            time: 100,
        });
        attacker.anim({
            y: attacker.y - 5,
            time: 100,
        });
        attacker.anim({
            y: attacker.y + 5,
            time: 100,
        });
        attacker.anim({
            y: attacker.y - 2,
            time: 100,
        });
        attacker.anim({
            y: attacker.y + 2,
            time: 100,
        });
        attacker.anim({
            y: attacker.y,
            time: 100,
        });

        for (const defender of defenders) {
            defender.delay(275);
            defender.anim({
                y: defender.y - 10,
                time: 75,
            });
            defender.anim({
                y: defender.y + 10,
                time: 100,
            });
            defender.anim({
                y: defender.y - 5,
                time: 100,
            });
            defender.anim({
                y: defender.y + 5,
                time: 100,
            });
            defender.anim({
                y: defender.y - 5,
                time: 100,
            });
            defender.anim({
                y: defender.y + 5,
                time: 100,
            });
            defender.anim({
                y: defender.y - 5,
                time: 100,
            });
            defender.anim({
                y: defender.y + 5,
                time: 100,
            });
            defender.anim({
                y: defender.y - 2,
                time: 100,
            });
            defender.anim({
                y: defender.y + 2,
                time: 100,
            });
            defender.anim({
                y: defender.y,
                time: 100,
            });
        }
        scene.wait(325);
    },
}

//
sourceURL = document.currentScript.dataset.sourceURL
if (!sourceURL) console.error("FUCK")

var speed = 1
var frame = 33 / speed

function setFilter(filter) {
    return function(next) {
        $(this).css("filter", filter);
        next();
    };
} //thought of by the gpt. not proud of that but that works at least

function blink(pokemon){
    BattleSound.externalSound("https://vgmtreasurechest.com/soundtracks/pokemon-sfx-gen-3-attack-moves-rse-fr-lg/ozirislf/Hit%20Normal%20Damage.mp3")
    for (var i=0;i<4;i++){
        pokemon.anim({
            opacity:0,
            time: 0
        }).delay(2 * frame)
        pokemon.anim({
            opacity:1,
            time: 0
        }).delay(2 * frame)
    }
}

function electricEffect (scene, pokemon, t0){
    scene.showEffect("g3_spark1",{
        x: pokemon.x + 5,
        y: pokemon.y + (pokemon.z == 0 ? 0 : 15) + 10,
        z: pokemon.z,
        rotate: "-30deg",
        time: t0 * frame
    },{
        time: (t0 + 2) * frame
    },"","",{imageRendering: "pixelated", zIndex: pokemon.z == 0 ? 8 : 3}).animate({opacity: 0},0)

    scene.showEffect("g3_spark2",{
        x: pokemon.x - 5,
        y: pokemon.y + (pokemon.z == 0 ? 0 : 15),
        z: pokemon.z,
        rotate: "60deg",
        time: (t0 + 1) * frame
    },{
        time: (t0 + 3) * frame
    },"","",{imageRendering: "pixelated", zIndex: pokemon.z == 0 ? 8 : 3}).animate({opacity: 0},0)

    scene.showEffect("g3_spark3",{
        x: pokemon.x + 25,
        y: pokemon.y + (pokemon.z == 0 ? 0 : 15) - 15,
        z: pokemon.z,
        rotate: "0",
        time: (t0 + 3) * frame
    },{
        time: (t0 + 5) * frame
    },"","",{imageRendering: "pixelated", zIndex: pokemon.z == 0 ? 8 : 3}).animate({opacity: 0},0)

    scene.showEffect("g3_spark1",{
        x: pokemon.x - 25,
        y: pokemon.y + (pokemon.z == 0 ? 0 : 15) + 15,
        z: pokemon.z,
        rotate: "0",
        time: (t0 + 5) * frame
    },{
        time: (t0 + 7) * frame
    },"","",{imageRendering: "pixelated", zIndex: pokemon.z == 0 ? 8 : 3}).animate({opacity: 0},0)

    scene.showEffect("g3_spark2",{
        x: pokemon.x + 30,
        y: pokemon.y + (pokemon.z == 0 ? 0 : 15) + 5,
        z: pokemon.z,
        rotate: "180deg",
        time: (t0 + 5) * frame
    },{
        time: (t0 + 7) * frame
    },"","",{imageRendering: "pixelated", zIndex: pokemon.z == 0 ? 8 : 3}).animate({opacity: 0},0)

    scene.showEffect("g3_spark2",{
        x: pokemon.x + 30,
        y: pokemon.y + (pokemon.z == 0 ? 0 : 15) + 5,
        z: pokemon.z,
        rotate: "180deg",
        time: (t0 + 7) * frame
    },{
        time: (t0 + 9) * frame
    },"","",{imageRendering: "pixelated", zIndex: pokemon.z == 0 ? 8 : 3}).animate({opacity: 0},0)

    scene.showEffect("g3_spark3",{
        x: pokemon.x - 5,
        y: pokemon.y + (pokemon.z == 0 ? 0 : 15),
        z: pokemon.z,
        rotate: "180deg",
        time: (t0 + 9) * frame
    },{
        time: (t0 + 11) * frame
    },"","",{imageRendering: "pixelated", zIndex: pokemon.z == 0 ? 8 : 3}).animate({opacity: 0},0)

    scene.showEffect("g3_spark1",{
        x: pokemon.x + 5,
        y: pokemon.y + (pokemon.z == 0 ? 0 : 15) + 10,
        z: pokemon.z,
        rotate: "0",
        time: (t0 + 11) * frame
    },{
        time: (t0 + 13) * frame
    },"","",{imageRendering: "pixelated", zIndex: pokemon.z == 0 ? 8 : 3}).animate({opacity: 0},0)

    scene.showEffect("g3_spark2",{
        x: pokemon.x - 30,
        y: pokemon.y + (pokemon.z == 0 ? 0 : 15) - 20,
        z: pokemon.z,
        rotate: "180deg",
        time: (t0 + 13) * frame
    },{
        time: (t0 + 15) * frame
    },"","",{imageRendering: "pixelated", zIndex: pokemon.z == 0 ? 8 : 3}).animate({opacity: 0},0)
}



function iceEffect(scene, pokemon, t0){
    scene.showEffect("g3_ice2",{scale: 0.8,
        x: pokemon.x - 5,
        y: pokemon.y + (pokemon.z == 0 ? 0 : 15) + 10,
        z: pokemon.z,
        time: (0 + t0) * frame
    },{time: (7 + t0) * frame, scale: 1},"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0},0)
    scene.showEffect("g3_ice1",{scale: 0.8,
        x: pokemon.x + 15,
        y: pokemon.y + (pokemon.z == 0 ? 0 : 15) - 25,
        z: pokemon.z,
        time: (3 + t0) * frame
    },{time: (10 + t0) * frame, scale: 1},"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0},0)
    scene.showEffect("g3_ice2",{scale: 0.8,
        x: pokemon.x,
        y: pokemon.y + (pokemon.z == 0 ? 0 : 15) - 15,
        z: pokemon.z,
        time: (5 + t0) * frame
    },{time: (12 + t0) * frame, scale: 1},"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0},0)
    scene.showEffect("g3_ice1",{scale: 0.8,
        x: pokemon.x + 10,
        y: pokemon.y + (pokemon.z == 0 ? 0 : 15) + 10,
        z: pokemon.z,
        time: (8 + t0) * frame
    },{time: (15 + t0) * frame, scale: 1},"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0},0)
    scene.showEffect("g3_ice1",{scale: 0.8,
        x: pokemon.x - 10,
        y: pokemon.y + (pokemon.z == 0 ? 0 : 15) - 20,
        z: pokemon.z,
        time: (10 + t0) * frame
    },{time: (17 + t0) * frame, scale: 1},"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0},0)
    scene.showEffect("g3_ice1",{scale: 0.8,
        x: pokemon.x,
        y: pokemon.y + (pokemon.z == 0 ? 0 : 15),
        z: pokemon.z,
        time: (13 + t0) * frame
    },{time: (20 + t0) * frame, scale: 1},"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0},0)
    scene.showEffect("g3_ice2",{scale: 0.8,
        x: pokemon.x + 25,
        y: pokemon.y + (pokemon.z == 0 ? 0 : 15),
        z: pokemon.z,
        time: (16 + t0) * frame
    },{time: (23 + t0) * frame, scale: 1},"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0},0)
}

function healPart(scene, x, y, z, t0){
    var pos = {x: x, y: y + (z==200?15:0), z: z}

    scene.showEffect("g3_heal2",{
        time: t0 * frame, ...pos
    },{time: (t0 + 1) * frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity: 0},0)
    scene.showEffect("g3_heal3",{
        time: (t0 + 1) * frame, ...pos
    },{time: (t0 + 2) * frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity: 0},0)
    scene.showEffect("g3_heal4",{
        time: (t0 + 2) * frame, ...pos
    },{time: (t0 + 3) * frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity: 0},0)
    scene.showEffect("g3_heal5",{
        time: (t0 + 3) * frame, ...pos
    },{time: (t0 + 5) * frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity: 0},0)
    scene.showEffect("g3_heal6",{
        time: (t0 + 5) * frame, ...pos
    },{time: (t0 + 7) * frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity: 0},0)
    scene.showEffect("g3_heal7",{
        time: (t0 + 7) * frame, ...pos
    },{time: (t0 + 9) * frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity: 0},0)
    scene.showEffect("g3_heal2",{
        time: (t0 + 9) * frame, ...pos
    },{time: (t0 + 10) * frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity: 0},0)
}
function healEffect(scene, pokemon, delay){
    healPart(scene,
        pokemon.x,
        pokemon.y,
        pokemon.z,
        delay)
    healPart(scene,
        pokemon.x - 15,
        pokemon.y - 15,
        pokemon.z,
        delay + 4)
    healPart(scene,
        pokemon.x - 15,
        pokemon.y + 10,
        pokemon.z,
        delay + 8)
    healPart(scene,
        pokemon.x + 10,
        pokemon.y + 5,
        pokemon.z,
        delay + 13)
}

function animTint(hue,element,scene,saturate = 1000){
    elem2 = element.clone()
    scene.$fx.append(elem2)
    elem2.css({
        opacity: 0,
        filter: hue == 0 ? 'none' : `brightness(0) invert(1) sepia(1) hue-rotate(${hue}deg) saturate(${saturate})`
    })
    return elem2
}

function addPXtocss(a){
    var b=a
    b.left += "px"
    b.top += "px"
    b.width += "px"
    b.height += "px"
    return b
}

BattleEffects.g3_pokeball ={
    url: sourceURL + "fx/pokeball.png",
    w: 12, h: 12
}
BattleEffects.g3_pokeballopen ={
    url: sourceURL + "fx/pokeball_open.png",
    w: 12, h: 13
}
BattleEffects.g3_pokeballfullopen ={
    url: sourceURL + "fx/pokeball_fullopen.png",
    w: 12, h: 16
}


BattleMoveAnims.earthquake={
    anim(scene, [attacker, ...defenders]) {
        //When looping our animations, instead of a if check we just do both shake motions every iteration and we divide the amount of loops by two  
        var bg = animTint(0,scene.$bg,scene)
        bg[0].style.opacity = 1
        var bg_x0 = +scene.$bg[0].style.left.slice(0,-2)
        var bg_y0 = +scene.$bg[0].style.top.slice(0,-2)

        pxMult = +scene.$textbox[0].style.width.slice(0,-2) / 240 //the textbox texture is 240 real pixels wide

        var displ = 13
        for (var i=0;i<50/2;i++){
            var filter1 = (i == 4 || i == 8) ? "brightness(0.1)" : ((i == 5 || i == 9) ? "brightness(0.2) invert(1)" : "none")
            var filter2 = (i == 4 || i == 8) ? "brightness(0.2) invert(1)" : ((i == 5 || i == 9) ? "brightness(0.2) invert(1)" : "none")

            bg = bg.animate({
                left: bg_x0 - displ * pxMult,
                top: bg_y0,
            },frame).queue(setFilter(filter1)).animate({
                left: bg_x0 + displ * pxMult,
                top: bg_y0,
            },frame).queue(setFilter(filter2))
        }
        var t = 0
        displ -= 1
        while (displ > 0){
            bg = bg.animate({
                left: bg_x0 - displ * pxMult,
                top: bg_y0
            },frame).animate({
                left: bg_x0 + displ * pxMult,
                top: bg_y0
            },frame)
            t += 1
            if (t == 4/2) {
                t = 0
                displ -= 1
            }
        }
        bg.animate({
            left: bg_x0,
            top: bg_y0
        },frame).delay(7*frame)

        pxMult = Math.max(...Array.from([attacker, ...defenders], (pkmn) => {return (pkmn.sp.scale**2 * pkmn.sp.w / 96)})) //the pkmn textures are all 96 px wide and are shown as scale * width, plus another times scale bc the displacement is also changed by the scale
        for (const pkm of [attacker, ...defenders]) {
            var pkmn = pkm
            var pkmn_x0 = pkmn.x
            var pkmn_y0 = pkmn.y
            
            var displ = 13

            for (var i=0;i<50/2;i++){
                pkm.anim({
                    x: pkmn_x0 - displ / 2 * pxMult,
                    time : frame
                })
                pkm.anim({
                    left: pkmn_x0 + displ / 2 * pxMult,
                    time: frame})
            }
            var t = 0
            displ -= 1
            while (displ > 0){
                pkm.anim({
                    x: pkmn_x0 - displ / 2 * pxMult,
                    time : frame
                })
                pkm.anim({
                    left: pkmn_x0 + displ / 2 * pxMult,
                    time: frame})
                t += 1
                if (t == 4/2) {
                    t = 0
                    displ -= 1
                }
            }
            pkm.anim({
                x: pkmn_x0,
                y: pkmn_y0,
                time: frame
            }).delay(7*frame)            
        }
        scene.wait(122*frame) //showeffect is the only thing that blocks the turn until its over, so we have to calc the duration of the animation in frames :D and not forget to modify it after :DDD

    }
}

BattleEffects.g3_spike={
    url: sourceURL+'fx/moves/spike.png',
    h: 13, w: 14
}

BattleMoveAnims.spikes = {
    anim(scene, [attacker, defender]){
        pxMult = +scene.$textbox[0].style.width.slice(0,-2) / 240

        scene.showEffect("g3_spike",{
            time: 1*frame,
            x: attacker.x + attacker.z==0 ? 35 : -35,
            y: attacker.y + attacker.z==0 ? 5 : 5,
            z: attacker.z,
        },
        {
            time: 15*frame,
            x: defender.x,
            y: defender.y + attacker.z==0 ? 0 : -15,
            z: defender.z,
        },"ballistic","",{imageRendering: "pixelated", zIndex: attacker.z == 0 ? 3 : 8}
        ).animate({opacity: 1}, (29-15)*frame).animate({opacity: 0}, frame).animate({opacity: 1}, frame).animate({opacity: 0}, frame).animate({opacity: 1}, frame).animate({opacity: 0}, frame).animate({opacity: 1}, frame).animate({opacity: 0}, frame) //dissapear 4 times

        scene.showEffect("g3_spike",{
            time: 7*frame,
            x: attacker.x + attacker.z==0 ? 35 : -35,
            y: attacker.y + attacker.z==0 ? 5 : 5,
            z: attacker.z,
        },
        {
            time: 22*frame,
            x: defender.x - 50,
            y: defender.y + attacker.z==0 ? 0 : -15,
            z: defender.z,
        },"ballistic","",{imageRendering: "pixelated", zIndex: attacker.z == 0 ? 3 : 8}
        ).animate({opacity: 1}, (29-22+7)*frame).animate({opacity: 0}, frame).animate({opacity: 1}, frame).animate({opacity: 0}, frame).animate({opacity: 1}, frame).animate({opacity: 0}, frame).animate({opacity: 1}, frame).animate({opacity: 0}, frame)

        scene.showEffect("g3_spike",{
            time: 13*frame,
            x: attacker.x + attacker.z==0 ? 35 : -35,
            y: attacker.y + attacker.z==0 ? 5 : 5,
            z: attacker.z,
        },
        {
            time: 28*frame,
            x: defender.x + 50,
            y: defender.y + attacker.z==0 ? 0 : -15,
            z: defender.z,
        },"ballistic","",{imageRendering: "pixelated", zIndex: attacker.z == 0 ? 3 : 8}
        ).animate({opacity: 1}, (29-29+14)*frame).animate({opacity: 0}, frame).animate({opacity: 1}, frame).animate({opacity: 0}, frame).animate({opacity: 1}, frame).animate({opacity: 0}, frame).animate({opacity: 1}, frame).animate({opacity: 0}, frame)
    }
}

BattleEffects.g3_hpball={
    url: sourceURL + "fx/moves/HP_ball.png",
    h: 13, w: 13
}

BattleMoveAnims.hiddenpower = {
    anim(scene, [attacker, defender]) {
        atckTint = animTint(-35, attacker.$el,scene)
        var attacker2 = Object.create(Object.getPrototypeOf(attacker));
        Object.assign(attacker2, attacker);
        attacker2.$el = $(atckTint)
        if (attacker.$sub) attacker2.delay(scene.timeOffset)

        attacker.anim({
            xscale: 1.4,
            yscale: 1.4,
            time: 5*frame
        }).anim({
            xscale: 1,
            yscale: 1,
            time: 6*frame
        }).delay(19 * frame)
        attacker.anim({
            xscale: 1.4,
            yscale: 1.4,
            time: 6*frame,
        }).anim({
            xscale: 1,
            yscale: 1,
            time: 6*frame
        }).delay(16 * frame)
        attacker.anim({
            xscale: 1.4,
            yscale: 1.4,
            time: 5*frame
        }).anim({
            xscale: 1,
            yscale: 1,
            time: 6*frame
        })

        attacker2.anim({
            xscale: 1.4,
            yscale: 1.4,
            time: 5*frame,
            opacity: 0
        }).anim({
            xscale: 1,
            yscale: 1,
            time: 6*frame,
            opacity: 0
        }).delay(19 * frame)
        attacker2.anim({
            xscale: 1.4,
            yscale: 1.4,
            time: 6*frame,
            opacity: 0
        }).anim({
            xscale: 1,
            yscale: 1,
            time: 6*frame,
            opacity: 0.8
        }).delay(16 * frame)
        attacker2.anim({
            xscale: 1.4,
            yscale: 1.4,
            time: 5*frame,
            opacity: 0.8
        }).anim({
            xscale: 1,
            yscale: 1,
            time: 6*frame,
            opacity: 0
        })
        
        

        pxMult = +scene.$textbox[0].style.width.slice(0,-2) / 240

        var X, Y
        var angles = [0,42,84,126,168,210]
        const viewAngle = attacker.z == 200 ? 20 : 30 //angle from wich the scene is viewed, which screws the trajectory of things going straight at increasing z
        angles.forEach(angle=>{
            var deltaX = 10 * pxMult
            var deltaY = 10 * pxMult
            var deltaAngle = 0

            var prevX = deltaX * Math.cos(((angle + deltaAngle) % 256) * Math.PI / 128)
            var prevY = deltaY * Math.sin(((angle + deltaAngle) % 256) * Math.PI / 128)
            for (var t=0;t<25;t++){
                deltaX += 4 * pxMult/2
                deltaY += 1 * pxMult/2
                deltaAngle += 9

                X = deltaX * Math.sin(((angle + deltaAngle) % 256) * Math.PI / 128)
                Y = deltaY * Math.cos(((angle + deltaAngle) % 256) * Math.PI / 128) //displacement in the imaginary plan that is normal to the pokemon, not the xyz coordinates of the ps engine


                scene.showEffect("g3_hpball",{
                    scale: 0.7,
                    x: attacker.x + prevX,
                    y: attacker.y + (attacker.z==0 ? 0 : 20) + prevY * Math.sin(viewAngle / 180 * Math.PI),
                    z: attacker.z,
                    time: (30 + t) * frame/2

                },{
                    x: attacker.x + X,
                    y: attacker.y + (attacker.z==0 ? 0 : 20) + Y * Math.sin(viewAngle / 180 * Math.PI),
                    z: attacker.z,
                    time: (31 + t) * frame/2
                },"accel","",{imageRendering: "pixelated", zIndex: ((Y > 0)? 0 : 1) + (attacker.z != 0 ? 2 : 7)}).animate({opacity:0},0)

                prevX = X
                prevY = Y
            }
            for (var t=0;t<25;t++){
                deltaX -= 4 * pxMult/2
                deltaY -= 1 * pxMult/2
                deltaAngle += 9

                X = deltaX * Math.sin(((angle + deltaAngle) % 256) * Math.PI / 128)
                Y = deltaY * Math.cos(((angle + deltaAngle) % 256) * Math.PI / 128)

                scene.showEffect("g3_hpball",{
                    scale: 0.7,
                    x: attacker.x + prevX,
                    y: attacker.y + (attacker.z==0 ? 0 : 20) + prevY * Math.sin(viewAngle / 180 * Math.PI),
                    z: attacker.z,
                    time: (25 + 30 + t) * frame/2

                },{
                    x: attacker.x + X,
                    y: attacker.y + (attacker.z==0 ? 0 : 20) + Y * Math.sin(viewAngle / 180 * Math.PI),
                    z: attacker.z,
                    time: (25 + 31 + t) * frame/2
                },"accel","",{imageRendering: "pixelated", zIndex: ((Y > 0)? 0 : 1) + (attacker.z != 0 ? 2 : 7)}).animate({opacity:0},0)
                
                prevX = X
                prevY = Y
            }

            scene.showEffect("g3_hpball",{
                    scale: 0.7,
                    x: attacker.x + prevX,
                    y: attacker.y + (attacker.z==0 ? 0 : 20) + prevY * Math.sin(viewAngle / 180 * Math.PI),
                    z: attacker.z,
                    time: (50 + 11) * frame

                },{
                    x: attacker.x + prevX*50,
                    y: attacker.y + (attacker.z==0 ? 0 : 20) + Y * Math.sin(viewAngle / 180 * Math.PI) * 50,
                    z: attacker.z,
                    time: (50 + 12 + 20) * frame
                },"accel","",{imageRendering: "pixelated", zIndex: ((Y > 0)? 0 : 1) + (attacker.z != 0 ? 2 : 7)}).animate({opacity:0},0)
        })
    }
}

BattleEffects.g3_spark1 = {
    url: sourceURL+"fx/moves/spark_1.png",
    w: 11, h: 15
}
BattleEffects.g3_spark2 = {
    url: sourceURL+"fx/moves/spark_2.png",
    w: 12, h: 14
}
BattleEffects.g3_spark3 = {
    url: sourceURL+"fx/moves/spark_3.png",
    w: 12, h: 13
}
BattleEffects.g3_thunderbolt1 = {
    url: sourceURL+"fx/moves/thunderbolt_full1.png",
    w: 6, h: 64
}
BattleEffects.g3_thunderbolt3 = {
    url: sourceURL+"fx/moves/thunderbolt_full3.png",
    w: 14, h: 70
}
BattleEffects.g3_sparkBall1 = {
    url: sourceURL+"fx/moves/thunderbolt_spark1.png",
    w: 18, h: 18
}
BattleEffects.g3_sparkBall2 = {
    url: sourceURL+"fx/moves/thunderbolt_spark2.png",
    w: 24, h: 24
}
BattleEffects.g3_sparkBall3 = {
    url: sourceURL+"fx/moves/thunderbolt_spark3.png",
    w: 30, h: 30
}

BattleMoveAnims.thunderbolt = {
    anim(scene, [attacker, defender]) {
        scene.showEffect("g3_thunderbolt1",{
            x: defender.x + 30,
            y: defender.y + (defender.z == 0 ? 60 : 80),
            z: defender.z,
            time: 5 * frame,
            yscale: 0.4,
        },{time: 6 * frame},"","",{imageRendering: "pixelated", zIndex: attacker.z == 0 ? 3 : 8, objectFit: "cover"}
        ).animate({height: "220px"},4*frame).animate({height: "0px",marginTop: "220px"},5*frame)

        scene.showEffect("g3_thunderbolt1",{
            x: defender.x - 30,
            y: defender.y + 20 + (defender.z == 0 ? 40 : 60),
            z: defender.z,
            time: 9 * frame,
            yscale: 0.4,
        },{time: 10 * frame},"","",{imageRendering: "pixelated", zIndex: attacker.z == 0 ? 3 : 8, objectFit: "cover"}
        ).animate({height: "220px"},4*frame).animate({height: "0px",marginTop: "220px"},5*frame)

        scene.showEffect("g3_thunderbolt3",{
            x: defender.x,
            y: defender.y + 20 + (defender.z == 0 ? 40 : 60),
            z: defender.z,
            time: 13 * frame,
            yscale: 0.4,
        },{time: 14 * frame},"","",{imageRendering: "pixelated", zIndex: attacker.z == 0 ? 3 : 8, objectFit: "cover"}
        ).animate({height: "220px"},4*frame).animate({height: "0px",marginTop: "220px"},5*frame)

        defender.$el[0].animate({filter: "brightness(0)"},{duration: 5 * frame, delay: 19 * frame})
        defender.$el[0].animate({filter: "brightness(1)"},{duration: 5 * frame, delay: 24 * frame})

        scene.showEffect("g3_sparkBall1",{
            x: defender.x, y: defender.y + (defender.z == 0 ? 0 : 15), z: defender.z,
            time : 31 * frame
        }, {time: 32 * frame, scale: 0.8},"","",{imageRendering: "pixelated", zIndex: attacker.z == 0 ? 3 : 8}).animate({opacity: 0},0)
        
        scene.showEffect("g3_sparkBall2",{
            x: defender.x, y: defender.y + (defender.z == 0 ? 0 : 15), z: defender.z,
            time : 35 * frame
        }, {time: 36 * frame},"","",{imageRendering: "pixelated", zIndex: attacker.z == 0 ? 3 : 8}).animate({opacity: 0},0)

        scene.showEffect("g3_sparkBall3",{
            x: defender.x, y: defender.y + (defender.z == 0 ? 0 : 15), z: defender.z,
            time : 39 * frame
        }, {time: 40 * frame},"","",{imageRendering: "pixelated", zIndex: attacker.z == 0 ? 3 : 8}).animate({opacity: 0},0)

        scene.showEffect("g3_sparkBall2",{
            x: defender.x, y: defender.y + (defender.z == 0 ? 0 : 15), z: defender.z,
            time : 43 * frame
        }, {time: 44 * frame, scale: 0.8},"","",{imageRendering: "pixelated", zIndex: attacker.z == 0 ? 3 : 8}).animate({opacity: 0},0)

        scene.showEffect("g3_sparkBall3",{
            x: defender.x, y: defender.y + (defender.z == 0 ? 0 : 15), z: defender.z,
            time : 47 * frame, scale: 0.8
        }, {time: 48 * frame, scale: 1},"","",{imageRendering: "pixelated", zIndex: attacker.z == 0 ? 3 : 8}).animate({opacity: 0},0)

        scene.showEffect("g3_sparkBall1",{
            x: defender.x, y: defender.y + (defender.z == 0 ? 0 : 15), z: defender.z,
            time : 51 * frame, scale: 0.7
        }, {time: 52 * frame, scale: 1},"","",{imageRendering: "pixelated", zIndex: attacker.z == 0 ? 3 : 8}).animate({opacity: 0},0)

        electricEffect(scene, defender, 55)

        tintedBG = animTint(0,scene.$bg,scene)[0]
        tintedBG.style.opacity = 1
        tintedBG.animate({filter: "brightness(0.5)"}, {duration: 4 * frame, fill: "forwards"})
        tintedBG.animate({filter: "brightness(1)"}, {duration: 0, delay: 33 * frame, fill: "forwards"})
        tintedBG.animate({filter: "brightness(0.5)"}, {duration: 0, delay: 37 * frame, fill: "forwards"})
        tintedBG.animate({filter: "brightness(1)"}, {duration: 0, delay: 41 * frame, fill: "forwards"})
        tintedBG.animate({filter: "brightness(0.5)"}, {duration: 0, delay: 45 * frame, fill: "forwards"})
        tintedBG.animate({filter: "brightness(1)"}, {duration: 4 * frame, delay: (55 + 15)* frame, fill: "forwards"})

    }
}


BattleEffects.g3_rock1 = {
    url: sourceURL+"fx/moves/rock_1.png",
    w: 25, h: 25
}
BattleEffects.g3_rock2 = {
    url: sourceURL+"fx/moves/rock_2.png",
    w: 22, h: 24
}
BattleEffects.g3_rock3 = {
    url: sourceURL+"fx/moves/rock_3.png",
    w: 19, h: 16
}
BattleEffects.g3_rock4 = {
    url: sourceURL+"fx/moves/rock_4.png",
    w: 14, h: 14
}
BattleEffects.g3_rock5 = {
    url: sourceURL+"fx/moves/rock_5.png",
    w: 10, h: 9
}
BattleEffects.g3_rock6 = {
    url: sourceURL+"fx/moves/rock_6.png",
    w: 8, h: 6
}
BattleMoveAnims.rockslide = {
    anim(scene, [attacker, ...defenders]) {
        var bg_x0 = +scene.$bg[0].style.top.slice(0,-2)

        scene.$bg.animate({
            top: bg_x0 + 30
        },frame).animate({
            top: bg_x0
        },frame).animate({
            top: bg_x0 + 30
        },frame).animate({
            top: bg_x0
        },frame).animate({
            top: bg_x0 + 30
        },frame).animate({
            top: bg_x0
        },frame)
        
        for (const defender of defenders){
            defender.delay(6 * frame)
            for (var i=0;i<24;i++){
                defender.anim({
                    y: defender.y - 10,
                    time: frame
                }).anim({
                    y: defender.y,
                    time: frame
                })
            } 

            temp = [-20,28,-10,10,24,-32,-20,30]
            var pos = [5,-5,19,-23, ...temp, ...temp]
            temp = [0,1,1,0,1,2,0,2]
            var rock = [1,0,1,2,...temp,...temp]

            for (var i=0; i<pos.length;i++){
                scene.showEffect("g3_rock"+String(rock[i]+4),{
                    scale: 1.4,
                    x: defender.x + pos[i],
                    y: defender.y + (defender.z == 0 ? 0 : 15) + 30,
                    z: defender.z,
                    time: (i*2 + 4) * frame
                },{
                    y: defender.y + (defender.z == 0 ? 0 : 15) - 25,
                    time: (i*2 + 4 + 7) * frame
                },"accel","",{imageRendering: "pixelated", zIndex: defender.z == 200 ? 3 : 8}).animate({opacity: 0},0)

                for (var t=0;t<16;t++){
                    scene.showEffect("g3_rock"+String(rock[i]+4),{
                        scale: 1.4,
                        x: defender.x + pos[i] - (pos[i]>0 ? 15 : -15) * Math.cos(t/16 * Math.PI) + 15,
                        y: defender.y + (defender.z == 0 ? 0 : 15) - 25 + 15 * Math.sin(t/16 * Math.PI),
                        z: defender.z,
                        time: (i*2 + 4 + 7 + t) * frame
                    },{
                        x: defender.x + pos[i] - (pos[i]>0 ? 15 : -15) * Math.cos((t+1)/16 * Math.PI) + 15,
                        y: defender.y + (defender.z == 0 ? 0 : 15) - 25 + 15 * Math.sin((t+1)/16 * Math.PI),
                        time: (i*2 + 4 + 7 + t + 1) * frame
                    },"","",{imageRendering: "pixelated", zIndex: defender.z == 200 ? 3 : 8}).animate({opacity: 0},0)
                }

                
            }
        }
        
    }
}

BattleEffects.g3_surff = {
    url: sourceURL + "fx/moves/surf_forward.png",
    w: 1184, h: 495
}
BattleEffects.g3_surfb = {
    url: sourceURL + "fx/moves/surf_backward.png",
    w: 1184, h: 495
}

BattleMoveAnims.surf = {
    anim(scene, [attacker, ...defenders]) {
        if (attacker.z == 0){
            scene.showEffect("g3_surfb",{opacity: 0.7, x: -50, y: -210, z: 0, time : 5 * frame},
                {x: 50, y: -100, z: 200, time : 55 * frame},"linear","fade",{imageRendering: "pixelated", zIndex: 9}
            )
        }
        if (attacker.z == 200){
            scene.showEffect("g3_surff",{opacity: 0.7, x: 50, y: 300, z: 200, time : 5 * frame},
                {x: -80, y: 200, z: 0, time : 55 * frame},"linear","fade",{imageRendering: "pixelated", zIndex: 9}
            )
        }
    }
}

BattleEffects.g3_ice1 = {
    url: sourceURL+"fx/moves/ice1.png",
    w: 8, h: 8 
}
BattleEffects.g3_ice2 = {
    url: sourceURL+"fx/moves/ice2.png",
    w: 8, h: 16 
}
BattleMoveAnims.icebeam = {
    anim(scene, [attacker, defender]) {


        tintedDef = animTint(-181, defender.$el,scene)[0]
        tintedDef.animate({opacity: 0.6}, {duration: 5 * frame, delay: 13 * frame, fill: "forwards"})
        tintedDef.animate({opacity: 0}, {duration: 5 * frame, delay: 45 * frame, fill: "forwards"})

        var defender2 = Object.create(Object.getPrototypeOf(defender));
        Object.assign(defender2, defender);
        defender2.$el = $(tintedDef)

        defender.delay(13 * frame)
        defender2.delay(13 * frame)
        for (var i = 0; i<12;i++){
            defender.anim({x: defender.x + 5, time: frame}).anim({x: defender.x, time: frame})
            defender2.anim({x: defender.x + 5, time: frame}).anim({x: defender.x, time: frame})
        }
        
        
        scene.$bg[0].animate({filter: "brightness(0.5)"}, {duration: 4 * frame, fill: "forwards"})
        scene.$bg[0].animate({filter: "brightness(1)"}, {duration: 4 * frame, delay: 60* frame, fill: "forwards"})

        for (var t=0; t<12;t++){
            scene.showEffect("g3_ice1",{
                x: attacker.x + (attacker.z == 0 ? 15 : -15),
                y: attacker.y + 10 + (attacker.z == 0 ? 0 : 15),
                z: attacker.z,
                time: (5 + t) * frame
            },{
                x: defender.x,
                y: defender.y + 10 + (defender.z == 0 ? 0 : 15),
                z: defender.z,
                time: (15 + t) * frame
            },"linear","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0},0)

            scene.showEffect("g3_ice1",{
                x: attacker.x + (attacker.z == 0 ? 15 : -15),
                y: attacker.y - 10 + (attacker.z == 0 ? 0 : 15),
                z: attacker.z,
                time: (5 + t) * frame
            },{
                x: defender.x,
                y: defender.y -10 + (defender.z == 0 ? 0 : 15),
                z: defender.z,
                time: (15 + t) * frame
            },"linear","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0},0)

            if (t%3 != 0){
                scene.showEffect("g3_ice2",{
                    x: attacker.x + (attacker.z == 0 ? 15 : -15),
                    y: attacker.y + (attacker.z == 0 ? 0 : 15),
                    z: attacker.z,
                    time: (5 + t) * frame
                },{
                    x: defender.x,
                    y: defender.y + (defender.z == 0 ? 0 : 15),
                    z: defender.z,
                    time: (11 + t) * frame
                },"linear","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0},0)
            }
        }
        iceEffect(scene,defender,37)
    }
}


BattleEffects.g3_protect = {
    url: sourceURL + "fx/moves/protect.gif",
    w: 64, h: 64
}
BattleMoveAnims.protect = {
    anim(scene, [attacker]) {
        scene.showEffect("g3_protect",{
            x: attacker.x + 30 + (attacker.z == 0 ? 20 : 0),
            y: attacker.y + (attacker.z == 0 ? 0 : 15),
            z: attacker.z,
            opacity: 0
        },{x: attacker.x - 10, opacity: 1, time: 40 * frame},"","",{imageRendering: "pixelated", zIndex: attacker.z == 0 ? 2 : 8}).animate({opacity: 0}, 0)
        scene.showEffect("g3_protect",{
            x: attacker.x -10,
            y: attacker.y + (attacker.z == 0 ? 0 : 15),
            z: attacker.z,
            time: 40 * frame
        },{x: attacker.x - 10, opacity: 0, time: 55 * frames},"","",{imageRendering: "pixelated", zIndex: attacker.z == 0 ? 2 : 8})

    }
}

BattleEffects.g3_circle = {
    url: sourceURL+"fx/moves/circle.png",
    w: 58, h: 58
}
BattleMoveAnims.calmmind = {
    anim(scene, [attacker]) {
        black_cover = document.createElement("div")
        Object.assign(black_cover.style, {
            position: "absolute",
            width: `${scene.$rightbar[0].getBoundingClientRect().left - scene.$leftbar[0].getBoundingClientRect().right}px`,
            left: `${scene.$leftbar[0].getBoundingClientRect().right}px`,
            height: `${scene.$textbox[0].getBoundingClientRect().top - scene.$bg[0].getBoundingClientRect().top}px`,
            backgroundColor: "black",
            opacity: 0,
            zIndex: 9
        })
        scene.$bgEffect.append(black_cover)

        const z0 = attacker.$el[0].style.zIndex
        attacker.$el[0].animate({zIndex: 9},{duration: 0, delay: 0 * frame, fill: "forwards"})

        black_cover.animate({opacity: 1},{delay: 5 * frame, duration: 10 * frame, fill: "forwards"})

        scene.showEffect("g3_circle",{
            x: attacker.x,
            y: attacker.y + (attacker.z == 0 ? 0 : 15),
            z: attacker.z,
            time: 15 * frame,
            scale: 2
        },{scale: 30 * frame, scale: 0.2},"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0}, 0)
        scene.showEffect("g3_circle",{
            x: attacker.x,
            y: attacker.y + (attacker.z == 0 ? 0 : 15),
            z: attacker.z,
            time: 22 * frame,
            scale: 2
        },{scale: 37 * frame, scale: 0.2},"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0}, 0)
        scene.showEffect("g3_circle",{
            x: attacker.x,
            y: attacker.y + (attacker.z == 0 ? 0 : 15),
            z: attacker.z,
            time: 30 * frame,
            scale: 2
        },{scale: 45 * frame, scale: 0.2},"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0}, 0)

        black_cover.animate({opacity: 0},{delay: 45 * frame, duration: 8 * frame, fill: "forwards"})
        attacker.$el[0].animate({zIndex: z0},{duration: 0, delay: 55 * frame, fill: "forwards"})

        scene.wait(70 * frame)
    }
}

BattleEffects.g3_fist = {
    url: sourceURL+"fx/moves/fist.png",
    w: 24, h: 20
}
BattleEffects.g3_impact = {
    url: sourceURL+"fx/moves/impact.png",
    w: 32, h: 32
}
BattleEffects.g3_star1 = {
    url: sourceURL+"fx/moves/star_1.png",
    w: 16, h: 14
}
BattleEffects.g3_star2 = {
    url: sourceURL+"fx/moves/star_2.png",
    w: 6, h: 6
}
BattleEffects.g3_star3 = {
    url: sourceURL+"fx/moves/star_3.png",
    w: 3, h: 3
}

BattleMoveAnims.meteormash = {
    anim(scene, [attacker, defender]) {
        scene.backgroundEffect(`url('${sourceURL}fx/move-bg-mash.png')`, (81-18) * frame, 1, 18 * frame, 0);
        black_cover = document.createElement("div")
        Object.assign(black_cover.style, {
            position: "absolute",
            width: `${scene.$rightbar[0].getBoundingClientRect().left - scene.$leftbar[0].getBoundingClientRect().right}px`,
            left: `${scene.$leftbar[0].getBoundingClientRect().right}px`,
            height: `${scene.$textbox[0].getBoundingClientRect().top - scene.$bg[0].getBoundingClientRect().top}px`,
            backgroundColor: "black",
            opacity: 0,
            zIndex: 1
        })
        scene.$bgEffect.append(black_cover)
        black_cover.animate({opacity: 1},{delay: 10 * frame, duration: 8 * frame, fill: "forwards"})
        black_cover.animate({opacity: 0},{delay: 18 * frame, duration: 8 * frame, fill: "forwards"})

        black_cover.animate({opacity: 1},{delay: 73 * frame, duration: 8 * frame, fill: "forwards"})
        black_cover.animate({opacity: 0},{delay: 81 * frame, duration: 8 * frame, fill: "forwards"})

        scene.showEffect("g3_star1",{
            x: defender.x + (defender.z == 0 ? 40 : -60),
            y: defender.y + (defender.z == 0 ? 80 : 80),
            z: defender.z,
            time: (18 + 12) * frame
        },{
            x: defender.x + (defender.z == 0 ? -60 : 90),
            y: defender.y + (defender.z == 0 ? -30 : -20),
            time: (18 + 22) * frame
        },"linear","fade",{imageRendering: "pixelated", zIndex: 8})


        scene.showEffect("g3_star1",{
            x: defender.x + (defender.z == 0 ? 140 : -160),
            y: defender.y + 80,
            z: defender.z,
            time: (18 + 17) * frame
        },{
            x: defender.x + (defender.z == 0 ? 40 : -10),
            y: defender.y + (defender.z == 0 ? -30 : -20),
            time: (18 + 27) * frame
        },"linear","fade",{imageRendering: "pixelated", zIndex: 8})


        scene.showEffect("g3_star1",{
            x: defender.x + (defender.z == 0 ? 90 : -90),
            y: defender.y + 80,
            z: defender.z,
            time: (18 + 28) * frame
        },{
            x: defender.x + (defender.z == 0 ? -10 : 20),
            y: defender.y + (defender.z == 0 ? -30 : -20),
            time: (18 + 40) * frame
        },"linear","fade",{imageRendering: "pixelated", zIndex: 8})


        scene.showEffect("g3_fist",{
            x: defender.x, z: defender.z,
            y: defender.y + (defender.z == 0 ? 0 : 15), scale: 0.8,
            time: (18 + 33)* frame
        },{time: (18 + 34)* frame}, "", "", {imageRendering: "pixelated", zIndex: 8, rotate: "-45deg"}).animate({opacity: 0}, 0)
        scene.showEffect("g3_fist",{
            x: defender.x, z: defender.z,
            y: defender.y + (defender.z == 0 ? 0 : 15), scale: 0.6,
            time: (18 + 34)* frame
        },{time: (18 + 36)* frame}, "", "", {imageRendering: "pixelated", zIndex: 8, rotate: "-135deg"}).animate({opacity: 0}, 0)
        scene.showEffect("g3_fist",{
            x: defender.x, z: defender.z,
            y: defender.y + (defender.z == 0 ? 0 : 15), scale: 0.5,
            time: (18 + 36)* frame
        },{time: (18 + 37)* frame}, "", "", {imageRendering: "pixelated", zIndex: 8, rotate: "135deg"}).animate({opacity: 0}, 0)
        scene.showEffect("g3_fist",{
            x: defender.x, z: defender.z,
            y: defender.y + (defender.z == 0 ? 0 : 15), scale: 0.4,
            time: (18 + 37)* frame
        },{time: (18 + 38)* frame}, "", "", {imageRendering: "pixelated", zIndex: 8, rotate: "45deg"}).animate({opacity: 0}, 0)
        scene.showEffect("g3_fist",{
            x: defender.x, z: defender.z,
            y: defender.y + (defender.z == 0 ? 0 : 15), scale: 0.3,
            time: (18 + 38)* frame
        },{time: (18 + 39)* frame}, "", "", {imageRendering: "pixelated", zIndex: 8, rotate: "0deg"}).animate({opacity: 0}, 0)
        scene.showEffect("g3_fist",{
            x: defender.x, z: defender.z,
            y: defender.y + (defender.z == 0 ? 0 : 15), scale: 0.2,
            time: (18 + 39)* frame
        },{time: (18 + 40)* frame}, "", "", {imageRendering: "pixelated", zIndex: 8, rotate: "-30deg"}).animate({opacity: 0}, 0)
        scene.showEffect("g3_fist",{
            x: defender.x, z: defender.z,
            y: defender.y + (defender.z == 0 ? 0 : 15), scale: 0.15,
            time: (18 + 40)* frame
        },{time: (18 + 41)* frame}, "", "", {imageRendering: "pixelated", zIndex: 8, rotate: "75deg"}).animate({opacity: 0}, 0)
        scene.showEffect("g3_fist",{
            x: defender.x, z: defender.z,
            y: defender.y + (defender.z == 0 ? 0 : 15), scale: 0.05,
            time: (18 + 41)* frame
        },{time: (18 + 42)* frame}, "", "", {imageRendering: "pixelated", zIndex: 8, rotate: "115deg"}).animate({opacity: 0}, 0)

        scene.showEffect("g3_impact",{
            x: defender.x, z: defender.z,
            y: defender.y + (defender.z == 0 ? 0 : 15),
            time: (18 + 42)* frame
        },{time: (18 + 50)* frame}, "", "", {imageRendering: "pixelated", zIndex: 8}).animate({opacity: 0}, 0)
        scene.showEffect("g3_impact",{
            x: defender.x, z: defender.z,
            y: defender.y + (defender.z == 0 ? 0 : 15),
            time: (18 + 42)* frame
        },{time: (18 + 50)* frame}, "", "", {imageRendering: "pixelated", zIndex: 8}).animate({opacity: 0}, 0)
        scene.showEffect("g3_fist",{
            x: defender.x, z: defender.z,
            y: defender.y + (defender.z == 0 ? 0 : 15),
            time: (18 + 50)* frame
        },{time: (18 + 61)* frame}, "", "", {imageRendering: "pixelated", zIndex: 8}).animate({opacity: 0}, 0)

        defender.delay((18 + 42) * frame)
        defender.anim({x: defender.x + 10, time: 2 * frame})
        defender.anim({x: defender.x - 10, time: 3 * frame})
        defender.anim({x: defender.x + 10, time: 1 * frame})
        defender.anim({x: defender.x - 10, time: 1 * frame})
        defender.anim({x: defender.x + 10, time: 1 * frame})
        defender.anim({x: defender.x - 10, time: 1 * frame})
        defender.anim({x: defender.x + 10, time: 1 * frame})
        defender.anim({x: defender.x - 10, time: 2 * frame})
        defender.anim({x: defender.x + 10, time: 2 * frame})
        defender.anim({x: defender.x - 10, time: 3 * frame})
        defender.anim({x: defender.x + 10, time: 1 * frame})
        defender.anim({x: defender.x - 10, time: 1 * frame})
        defender.anim({time: frame})

    }
}

BattleEffects.g3_boom1 = {
    url: sourceURL + "fx/moves/boom1.png",
    w: 16, h: 16
}
BattleEffects.g3_boom2 = {
    url: sourceURL + "fx/moves/boom2.png",
    w: 32, h: 30
}
BattleEffects.g3_boom3 = {
    url: sourceURL + "fx/moves/boom3.png",
    w: 32, h: 34
}
BattleEffects.g3_boom4 = {
    url: sourceURL + "fx/moves/boom4.png",
    w: 32, h: 31
}

function boomAnim (scene,x,y,z,frame,delay){
    pos = {x: x, y: y + (z==200?15:0),z: z}
    scene.showEffect("g3_boom1",{time: delay * frame, ...pos},
        {time: (delay + 2)*frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity:0},0)
    
    scene.showEffect("g3_boom2",{time: (delay + 2) * frame, ...pos},
        {time: (delay + 5)*frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity:0},0)

     scene.showEffect("g3_boom3",{time: (delay + 5) * frame, ...pos},
        {time: (delay + 7)*frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity:0},0)

     scene.showEffect("g3_boom4",{time: (delay + 7) * frame, ...pos},
        {time: (delay + 10)*frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity:0},0)
}

BattleMoveAnims.explosion = {
   anim(scene, [attacker, ...defenders]) {
        boomAnim(scene, attacker.x + 5, attacker.y + 15, attacker.z, frame, 3)
        boomAnim(scene, attacker.x + 15, attacker.y + 35, attacker.z, frame, 7)
        boomAnim(scene, attacker.x - 5, attacker.y, attacker.z, frame, 11)
        boomAnim(scene, attacker.x - 10, attacker.y + 25, attacker.z, frame, 15)
        boomAnim(scene, attacker.x + 20, attacker.y - 5, attacker.z, frame, 19)

        Array.from([attacker, ...defenders]).forEach(pkmn=>{
            var poke = pkmn.delay(3 * frame)
            for (var t=0;t<19;t++) poke = poke.anim({x: poke.x + 15, time: frame}).anim({x: poke.x - 15, time: frame})
            poke.anim({x: poke.x, time: frame})
        })

        scene.$bg[0].animate({filter: "brightness(0.5)"},{duration: 0, delay: 3*frame , fill: "forwards"})
        var tintFilter = animTint(0,scene.$bg,scene)[0]
        tintFilter.style.background = "#de7c67"
        tintFilter.animate({opacity: 0.5},{duration: 0, delay: 3*frame , fill: "forwards"})
        tintFilter.animate({opacity: 0},{duration: 0, delay: 7*frame , fill: "forwards"})
        tintFilter.animate({opacity: 0.5},{duration: 0, delay: 12*frame , fill: "forwards"})
        tintFilter.animate({opacity: 0},{duration: 0, delay: 16*frame , fill: "forwards"})
        tintFilter.animate({opacity: 0.5},{duration: 0, delay: 21*frame , fill: "forwards"})
        tintFilter.animate({opacity: 0},{duration: 0, delay: 25*frame , fill: "forwards"})
        tintFilter.animate({opacity: 0.5},{duration: 0, delay: 30*frame , fill: "forwards"})
        tintFilter.animate({opacity: 0},{duration: 0, delay: 34*frame , fill: "forwards"})
        tintFilter.animate({opacity: 0.5},{duration: 0, delay: 39*frame , fill: "forwards"})
        tintFilter.animate({opacity: 0},{duration: 0, delay: 43*frame , fill: "forwards"})
        scene.$bg[0].animate({filter: "brightness(1)"},{duration: 0, delay: 47*frame , fill: "forwards"})

        tintFilter.animate({opacity: 1, background: "white"},{duration: 0, delay: 49*frame , fill: "forwards"})
        tintFilter.animate({opacity: 0},{duration: 15 * frame, delay: 50 * frame , fill: "forwards"})

        scene.wait(70 * frame)
    }
}
BattleMoveAnims.selfdestruct = {
   anim(scene, [attacker, ...defenders]) {
        boomAnim(scene, attacker.x + 5, attacker.y + 15, attacker.z, frame, 3)
        boomAnim(scene, attacker.x + 15, attacker.y + 35, attacker.z, frame, 7)
        boomAnim(scene, attacker.x - 5, attacker.y, attacker.z, frame, 11)
        boomAnim(scene, attacker.x - 10, attacker.y + 25, attacker.z, frame, 15)
        boomAnim(scene, attacker.x + 20, attacker.y - 5, attacker.z, frame, 19)

        Array.from([attacker, ...defenders]).forEach(pkmn=>{
            var poke = pkmn.delay(3 * frame)
            for (var t=0;t<19;t++) poke = poke.anim({x: poke.x + 15, time: frame}).anim({x: poke.x - 15, time: frame})
            poke.anim({x: poke.x, time: frame})
        })
        scene.wait(45 * frame)
    }
}

BattleMoveAnims.seismictoss = {
    anim(scene, [attacker, defender]) {
        var animatedBG = document.createElement("div")
        Object.assign(animatedBG.style,{
        backgroundImage: "url("+sourceURL+"fx/move-bg-toss.png)",
        position: "absolute",
        width: `${scene.$rightbar[0].getBoundingClientRect().left - scene.$leftbar[0].getBoundingClientRect().right + 72}px`,
        left: `${scene.$leftbar[0].getBoundingClientRect().right}px`,
        height: `${scene.$textbox[0].getBoundingClientRect().top - scene.$bg[0].getBoundingClientRect().top}px`,
        imageRendering: "pixelated",
        opacity: 0,
        backgroundSize: "cover",
        }) // idk why but the ~75 rightmost pixels are cut...
        scene.$bgEffect.append(animatedBG)

        animatedBG.animate({opacity: 1},{delay: 17 * frame, duration: 0 * frame, fill: "forwards"})
        animatedBG.animate({backgroundPositionY: "-186%"},{delay: 17 * frame, duration: 30 * frame, fill: "forwards", easing: "cubic-bezier(.44,1.06,.84,.99)"})
        animatedBG.animate({backgroundPositionY: "900%"},{delay: (17 + 30) * frame, duration: 53 * frame, fill: "forwards", easing: "cubic-bezier(.16,.01,.56,-0.06)"})
        animatedBG.animate({opacity: 0},{delay: (17 + 30 + 53) * frame, duration: 0 * frame, fill: "forwards"})

        black_cover = document.createElement("div")
        Object.assign(black_cover.style, {
            position: "absolute",
            width: `${scene.$rightbar[0].getBoundingClientRect().left - scene.$leftbar[0].getBoundingClientRect().right}px`,
            left: `${scene.$leftbar[0].getBoundingClientRect().right}px`,
            height: `${scene.$textbox[0].getBoundingClientRect().top - scene.$bg[0].getBoundingClientRect().top}px`,
            backgroundColor: "black",
            opacity: 0,
            zIndex: 1
        })
        scene.$bgEffect.append(black_cover)
        black_cover.animate({opacity: 1},{delay: 10 * frame, duration: 7 * frame, fill: "forwards"})
        black_cover.animate({opacity: 0},{delay: 17 * frame, duration: 7 * frame, fill: "forwards"})

        black_cover.animate({opacity: 1},{delay: (17 + 30 + 53 - 7) * frame, duration: 7 * frame, fill: "forwards"})
        black_cover.animate({opacity: 0},{delay: (17 + 30 + 53) * frame, duration: 7 * frame, fill: "forwards"})


        defender.delay(74 * frame)
        for (var i = 0; i<3; i++){
            scene.showEffect("g3_impact",{
                x: defender.x + (i%2 == 0 ? 5 : -5),
                y: defender.y + (defender.z==200?15:0),
                z: defender.z,
                time: (74 + 7*i) * frame
            }, {time: (80 + 7*i) * frame}, "","",{imageRendering: "pixelated", zIndex: defender.z==0 ? 8:3}).animate({opacity:0},0)
            
            defender.delay(frame).anim({y: defender.y - 5, time: frame}).anim({y: defender.y, time: frame}).anim({y: defender.y - 5, time: frame}).anim({y: defender.y, time: frame}).delay(frame)

            scene.showEffect("g3_rock" + (i%2==0 ? "5" : "4"),{
                x: defender.x - 5,
                y: defender.y - 20 + (defender.z==200?15:0),
                z: defender.z, time: (74 + 7*i) * frame,
            }, {
                x: defender.x - 40,
                y: defender.y + (defender.z==200?15:0),
                time: (81 + 7*i) * frame
            }, "ballistic", "", {imageRendering: "pixelated", zIndex: defender.z==0?8:3}).animate({opacity:0},0)
            scene.showEffect("g3_rock" + (i%2==0 ? "4" : "4"),{
                x: defender.x - 2,
                y: defender.y - 20 + (defender.z==200?15:0),
                z: defender.z, time: (74 + 7*i) * frame,
            }, {
                x: defender.x - 25,
                y: defender.y + (defender.z==200?15:0) - 5,
                time: (81 + 7*i) * frame
            }, "ballistic", "", {imageRendering: "pixelated", zIndex: defender.z==0?8:3}).animate({opacity:0},0)
            scene.showEffect("g3_rock" + (i%2==0 ? "3" : "5"),{
                x: defender.x + 2,
                y: defender.y - 20 + (defender.z==200?15:0),
                z: defender.z, time: (74 + 7*i) * frame,
            }, {
                x: defender.x + 30,
                y: defender.y + (defender.z==200?15:0) - 10,
                time: (81 + 7*i) * frame
            }, "ballistic", "", {imageRendering: "pixelated", zIndex: defender.z==0?8:3}).animate({opacity:0},0)
            scene.showEffect("g3_rock" + (i%2==0 ? "4" : "5"),{
                x: defender.x + 5,
                y: defender.y - 20 + (defender.z==200?15:0),
                z: defender.z, time: (74 + 7*i) * frame,
            }, {
                x: defender.x + 45,
                y: defender.y + (defender.z==200?15:0) + 10,
                time: (81 + 7*i) * frame
            }, "ballistic", "", {imageRendering: "pixelated", zIndex: defender.z==0?8:3}).animate({opacity:0},0)
        }

        
    }
}

BattleEffects.g3_toxicpuddle1 = {
    url: sourceURL + "fx/moves/toxic_puddle1.png",
    w: 16, h: 26
}
BattleEffects.g3_toxicpuddle2 = {
    url: sourceURL + "fx/moves/toxic_puddle2.png",
    w: 16, h: 26
}
BattleEffects.g3_toxicpuddle3 = {
    url: sourceURL + "fx/moves/toxic_puddle3.png",
    w: 16, h: 26
}
BattleEffects.g3_toxicpuddle4 = {
    url: sourceURL + "fx/moves/toxic_puddle4.png",
    w: 16, h: 26
}
BattleEffects.g3_toxicbubble = {
    url: sourceURL + "fx/moves/toxic_bubble.png",
    w: 12, h: 12
}

function toxicPuddleAnim (scene,x,y,z,frame,delay){
    pos = {x: x, y: y + (z==200?15:0),z: z}
    scene.showEffect("g3_toxicpuddle1",{time: delay * frame, ...pos},
        {time: (delay + 2)*frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity:0},0)
    
    scene.showEffect("g3_toxicpuddle2",{time: (delay + 2) * frame, ...pos},
        {time: (delay + 5)*frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity:0},0)

     scene.showEffect("g3_toxicpuddle3",{time: (delay + 5) * frame, ...pos},
        {time: (delay + 7)*frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity:0},0)

     scene.showEffect("g3_toxicpuddle4",{time: (delay + 7) * frame, ...pos},
        {time: (delay + 10)*frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity:0},0)
}

function toxicBubbleAnim (scene,x,y,z,frame,delay){
    scene.showEffect("g3_toxicbubble",{time: delay * frame, x: x, y: y + (z==200?15:0),z: z, scale: 0.5},
        {time: (delay + 1)*frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity:0},0)
    
    scene.showEffect("g3_toxicbubble",{time: (delay + 1) * frame, x: x+3, y: y + (z==200?15:0),z: z, scale: 0.6},
        {time: (delay + 2)*frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity:0},0)

    scene.showEffect("g3_toxicbubble",{time: (delay + 2) * frame, x: x+5, y: y + (z==200?15:0),z: z, scale: 0.6},
        {time: (delay + 3)*frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity:0},0)

    scene.showEffect("g3_toxicbubble",{time: (delay + 3) * frame, x: x+5, y: y + (z==200?15:0) + 3,z: z, scale: 0.6},
        {time: (delay + 4)*frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity:0},0)

    scene.showEffect("g3_toxicbubble",{time: (delay + 4) * frame, x: x+2, y: y + (z==200?15:0) + 3,z: z, scale: 0.7},
        {time: (delay + 5)*frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity:0},0)
    
    scene.showEffect("g3_toxicbubble",{time: (delay + 5) * frame, x: x, y: y + (z==200?15:0) + 3,z: z, scale: 0.8},
        {time: (delay + 6)*frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity:0},0)

    scene.showEffect("g3_toxicbubble",{time: (delay + 6) * frame, x: x - 1, y: y + (z==200?15:0) + 3,z: z, scale: 0.8},
        {time: (delay + 7)*frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity:0},0)
    
    scene.showEffect("g3_toxicbubble",{time: (delay + 7) * frame, x: x - 3, y: y + (z==200?15:0) + 3,z: z, scale: 0.8},
        {time: (delay + 8)*frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity:0},0)

    scene.showEffect("g3_toxicbubble",{time: (delay + 8) * frame, x: x - 3, y: y + (z==200?15:0) + 5,z: z, scale: 0.8},
        {time: (delay + 9)*frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity:0},0)

    scene.showEffect("g3_toxicbubble",{time: (delay + 9) * frame, x: x - 3, y: y + (z==200?15:0) + 7,z: z, scale: 0.9},
        {time: (delay + 10)*frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity:0},0)

    scene.showEffect("g3_toxicbubble",{time: (delay + 10) * frame, x: x - 3, y: y + (z==200?15:0) + 9,z: z, scale: 1},
        {time: (delay + 11)*frame},"","",{imageRendering: "pixelated", zIndex: z==0?8:3}).animate({opacity:0},0)
}

BattleMoveAnims.toxic = {
    anim(scene, [attacker, defender]) {
        if (!defender.$el) return //if it misses
        var xs = [-25, 0, -10, 20, -25, 10, -10, 25]
        for (var i = 0; i<xs.length; i++) {
            toxicPuddleAnim(scene,defender.x + xs[i], defender.y - 20,defender.z,frame, 1 + 8*i)
        }

        toxicBubbleAnim(scene, defender.x + 10, defender.y - 10,defender.z,frame,80)
        toxicBubbleAnim(scene, defender.x + 20, defender.y + 25,defender.z,frame,85)
        toxicBubbleAnim(scene, defender.x - 15, defender.y - 15,defender.z,frame,90)
        toxicBubbleAnim(scene, defender.x, defender.y,defender.z,frame,95)
        toxicBubbleAnim(scene, defender.x - 10, defender.y + 15,defender.z,frame,100)
        toxicBubbleAnim(scene, defender.x + 15, defender.y + 5,defender.z,frame,105)

        return //all the rest happens with the poison tick anim which is also called upon getting the status

        tintedDef = animTint(181,defender.$el,scene)
        var defender2 = Object.create(Object.getPrototypeOf(attacker));
        Object.assign(defender2, defender);
        defender2.$el = $(tintedDef)
        
        defender.delay(110 * frame)
        defender2.delay(110 * frame)
        for (var i = 0; i<9; i++) defender.anim({x: defender.x + 5, time: frame}).anim({x: defender.x, time: frame}).delay(frame)

        defender2.anim({x: defender2.x + 5, time: frame, opacity: 0}).anim({x: defender2.x, time: frame, opacity: 0.1}).delay(frame)
        defender2.anim({x: defender2.x + 5, time: frame, opacity: 0.2}).anim({x: defender2.x, time: frame, opacity: 0.4}).delay(frame)
        defender2.anim({x: defender2.x + 5, time: frame, opacity: 0.4}).anim({x: defender2.x, time: frame, opacity: 0.6}).delay(frame)
        defender2.anim({x: defender2.x + 5, time: frame, opacity: 0.6}).anim({x: defender2.x, time: frame, opacity: 0.8}).delay(frame)
        defender2.anim({x: defender2.x + 5, time: frame, opacity: 0.8}).anim({x: defender2.x, time: frame, opacity: 0.8}).delay(frame)
        defender2.anim({x: defender2.x + 5, time: frame, opacity: 0.8}).anim({x: defender2.x, time: frame, opacity: 0.6}).delay(frame)
        defender2.anim({x: defender2.x + 5, time: frame, opacity: 0.6}).anim({x: defender2.x, time: frame, opacity: 0.4}).delay(frame)
        defender2.anim({x: defender2.x + 5, time: frame, opacity: 0.4}).anim({x: defender2.x, time: frame, opacity: 0.2}).delay(frame)
        defender2.anim({x: defender2.x + 5, time: frame, opacity: 0.2}).anim({x: defender2.x, time: frame, opacity: 0}).delay(frame)

        scene.waitFor(defender.$el)
    }
}

BattleEffects.g3_roars1 = {
    url: sourceURL + "fx/moves/roar_straight1.png",
    w: 30, h: 10
}
BattleEffects.g3_roars2 = {
    url: sourceURL + "fx/moves/roar_straight2.png",
    w: 25, h: 18
}
BattleEffects.g3_roard1 = {
    url: sourceURL + "fx/moves/roar_diag1.png",
    w: 22, h: 22
}
BattleEffects.g3_roard2 = {
    url: sourceURL + "fx/moves/roar_diag2.png",
    w: 22, h: 22
}

BattleMoveAnims.roar = {
    anim(scene,[attacker,defender]) {
        var num = ["2","1","2","2","1","2"]
        for (var t=0;t<2;t++){
        for (var i = 0; i<num.length;i++){
            scene.showEffect("g3_roars"+num[i],{
                x: attacker.behindx(-(15 + 10*i)),
                y: attacker.y + 10 + (attacker.z==0 ? 0 : 15),
                z: attacker.z,
                time: (5 + i + 13*t) * frame
            },{
                x: attacker.behindx(-(25 + 10*i)),
                time: (6 + i + 13*t) * frame
            },"","",{imageRendering: "pixelated", zIndex: attacker.z==0?8:3}).animate({opacity:0},0)

            scene.showEffect("g3_roard"+num[i],{ //top one
                x: attacker.behindx(-(15 + 10*i)),
                y: attacker.y + 20 + 10*i + (attacker.z==0 ? 0 : 15),
                z: attacker.z,
                time: (5 + i + 13*t) * frame
            },{
                x: attacker.behindx(-(25 + 10*i)),
                y: attacker.y + 20 + 10*i + (attacker.z==0 ? 0 : 15),
                time: (6 + i + 13*t) * frame
            },"","",{imageRendering: "pixelated", zIndex: attacker.z==0?8:3, transform: `scaleX(${attacker.z==0?1:-1}) scaleY(1)`}).animate({opacity:0},0)

            scene.showEffect("g3_roard"+num[i],{ //bottom one
                x: attacker.behindx(-(15 + 10*i)),
                y: attacker.y - 10*i + (attacker.z==0 ? 0 : 15),
                z: attacker.z,
                time: (5 + i + 13*t) * frame
            },{
                x: attacker.behindx(-(25 + 10*i)),
                y: attacker.y - 10*i + (attacker.z==0 ? 0 : 15),
                time: (6 + i + 13*t) * frame
            },"","",{imageRendering: "pixelated", zIndex: attacker.z==0?8:3, transform: `scaleX(${attacker.z==0?1:-1}) scaleY(-1)`}).animate({opacity:0},0)
        }}

        var attacker2 = Object.create(Object.getPrototypeOf(attacker));
        Object.assign(attacker2, attacker);
        attacker2.$el = $(animTint(0, attacker.$el,scene))
        if (attacker.$sub) attacker2.delay(scene.timeOffset)
        
        attacker2.delay(5*frame).anim({scale: 1.2,time: 5*frame, opacity: 0.5}).delay(frame).anim({scale: 1,time: 5*frame,opacity: 0.5})
        
        defender.delay(25*frame).anim({x: defender.behindx(200),time: 21 * frame})
        scene.waitFor(defender.$el)
    }
}

BattleEffects.g3_thunderwave = {
    url: sourceURL + "fx/moves/thunder_wave.png",
    w: 64, h: 10
}

BattleMoveAnims.thunderwave = {
    anim(scene, [attacker, defender]){
        scene.showEffect("g3_thunderbolt1",{
            x: defender.x,
            y: defender.y + (defender.z == 0 ? 40 : 80),
            z: defender.z,
            time: 10 * frame,
            yscale: 0.4,
        },{time: 11 * frame},"","",{imageRendering: "pixelated", zIndex: attacker.z == 0 ? 3 : 8, objectFit: "cover"}
        ).animate({height: "220px"},4*frame).animate({height: "0px",marginTop: "220px"},5*frame)

        for (var i=0;i<13;i++){
            if (i<11) scene.showEffect("g3_thunderwave",{
                x: defender.x,
                y: defender.y + (defender.z == 0 ? 0 : 15) + 15,
                z: defender.z,
                time: (20 + 3*i) * frame,
            },{time: (21 + 3*i) * frame},"","",{imageRendering: "pixelated", zIndex: defender.z==0?8:3}).animate({opacity: 0},0)

            if (0<i & i<12) scene.showEffect("g3_thunderwave",{
                x: defender.x,
                y: defender.y + (defender.z == 0 ? 0 : 15) + 0,
                z: defender.z,
                time: (20 + 3*i) * frame,
            },{time: (21 + 3*i) * frame},"","",{imageRendering: "pixelated", zIndex: defender.z==0?8:3}).animate({opacity: 0},0)

            if (1<i) scene.showEffect("g3_thunderwave",{
                x: defender.x,
                y: defender.y + (defender.z == 0 ? 0 : 15) - 15,
                z: defender.z,
                time: (20 + 3*i) * frame,
            },{time: (21 + 3*i) * frame},"","",{imageRendering: "pixelated", zIndex: defender.z==0?8:3}).animate({opacity: 0},0)

        }

        scene.$bg[0].animate({filter: "brightness(0.5)"}, {duration: 4 * frame, fill: "forwards"})
        scene.$bg[0].animate({filter: "brightness(1)"}, {duration: 4 * frame, delay: 57 * frame, fill: "forwards"})
        
        scene.waitFor(scene.$bg)
        // electricEffect(scene, defender, 62)
    }
}

BattleEffects.g3_waterorb1 = {
    url: sourceURL + "fx/moves/water_orb1.png",
    h: 16, w: 16
}
BattleEffects.g3_waterorb2 = {
    url: sourceURL + "fx/moves/water_orb2.png",
    h: 16, w: 16
}
BattleEffects.g3_waterorb3 = {
    url: sourceURL + "fx/moves/water_orb3.png",
    h: 16, w: 16
}
BattleEffects.g3_waterorb4 = {
    url: sourceURL + "fx/moves/water_orb4.png",
    h: 16, w: 16
}
BattleEffects.g3_waterimpact = {
    url: sourceURL + "fx/moves/water_impact.png",
    h: 32, w: 32
}

BattleMoveAnims.hydropump = {
    anim(scene, [attacker, defender]) {
        let $effect
        let obj = []
        let maxTime
        var ay = attacker.y + attacker.z==200?15:0
        var dy = defender.y + defender.z==200?15:0
        for (var t = 0; t<48;t++){
            var i0 = (11 - t/2) % 13 -1
            for (var i = 0;i<12;i++){
                if ((i<=t) & ((i+36)>=t)){
                    let effect = BattleEffects[`g3_waterorb${((i+t)%4)+1}`]

                    $effect = $(`<img src="${effect.url}" style="display:block;position:absolute" />`);
                    scene.$fx.append($effect);
                    $effect.css({
                        imageRendering: "pixelated", 
                        zIndex: 8,
                        ...scene.pos({
                            x: (defender.x - attacker.behindx(-20)) * i/12 + attacker.x,
                            y: (dy - ay) * i/12 + ay + 15 * Math.cos((i-i0) * Math.PI/13),
                            z: (defender.z - attacker.z) * i/12 + attacker.z,
                            opacity: 0.3 + (1-i/12) * 0.7,
                        },effect),
                        ...{display: "none"}
                    });
                    $effect = scene.$fx.children().last();
                    obj.push({$effect,time: (4 + t) * frame})

                    $effect = $(`<img src="${effect.url}" style="display:block;position:absolute" />`);
                    scene.$fx.append($effect);
                    $effect.css({
                        imageRendering: "pixelated", 
                        zIndex: 8,
                        ...scene.pos({
                            x: (defender.x - attacker.behindx(-20)) * i/12 + attacker.x,
                            y: (dy - ay) * i/12 + ay - 15 * Math.cos((i-i0) * Math.PI/13),
                            z: (defender.z - attacker.z) * i/12 + attacker.z,
                            opacity: 0.3 + (1-i/12) * 0.7
                        },effect),
                        ...{display: "none"}
                    });
                    $effect = scene.$fx.children().last();
                    obj.push({$effect,time: (4 + t) * frame})
                } 
            }
            maxTime = (t+1+4) * frame
        }
        const startTime = performance.now();

        function tick(now) {
            const elapsed = now - startTime;

            for (const el of obj) {
                if (elapsed >= el.time && elapsed <= (el.time + frame)) {
                    el.$effect[0].style.display = "block"
                }
                else{
                    el.$effect[0].style.display = "none"
                }
            }

            if (elapsed <= maxTime) {
                requestAnimationFrame(tick);
            }
        }

        requestAnimationFrame(tick);

        for (var i=0;i<9;i++) attacker.anim({y: attacker.y-10, time:frame}).anim({y: attacker.y, time:frame})
        
        defender.delay(13 * frame)
        for (var i=0;i<18;i++) defender.anim({x: defender.behindx(10), time:frame}).anim({x: defender.x, time:frame})


        scene.showEffect("g3_waterimpact",{
            x: defender.x,
            y: defender.y + 15 + (defender.z == 0?0:15),
            z: defender.z,
            time: 12 * frame,
            opacity: 0.5
        },{time: 17 * frame},"","",{imageRendering: "pixelated", zIndex: defender.z==0?8:3}).animate({opacity: 0},0)
        scene.showEffect("g3_waterimpact",{
            x: defender.x,
            y: defender.y + 15 + (defender.z == 0?0:15),
            z: defender.z,
            time: 19 * frame,
            opacity: 0.5
        },{time: 24 * frame},"","",{imageRendering: "pixelated", zIndex: defender.z==0?8:3}).animate({opacity: 0},0)
        scene.showEffect("g3_waterimpact",{
            x: defender.x,
            y: defender.y + 15 + (defender.z == 0?0:15),
            z: defender.z,
            time: 25 * frame,
            opacity: 0.5
        },{time: 30 * frame},"","",{imageRendering: "pixelated", zIndex: defender.z==0?8:3}).animate({opacity: 0},0)
        scene.showEffect("g3_waterimpact",{
            x: defender.x,
            y: defender.y + 15 + (defender.z == 0?0:15),
            z: defender.z,
            time: 31 * frame,
            opacity: 0.5
        },{time: 36 * frame},"","",{imageRendering: "pixelated", zIndex: defender.z==0?8:3}).animate({opacity: 0},0)
        scene.showEffect("g3_waterimpact",{
            x: defender.x,
            y: defender.y + 15 + (defender.z == 0?0:15),
            z: defender.z,
            time: 37 * frame,
            opacity: 0.5
        },{time: 45 * frame},"","",{imageRendering: "pixelated", zIndex: defender.z==0?8:3}).animate({opacity: 0},0)

        scene.showEffect("g3_waterimpact",{
            x: defender.x,
            y: defender.y - 15 + (defender.z == 0?0:15),
            z: defender.z,
            time: 12 * frame,
            opacity: 0.5
        },{time: 17 * frame},"","",{imageRendering: "pixelated", zIndex: defender.z==0?8:3}).animate({opacity: 0},0)
        scene.showEffect("g3_waterimpact",{
            x: defender.x,
            y: defender.y - 15 + (defender.z == 0?0:15),
            z: defender.z,
            time: 19 * frame,
            opacity: 0.5
        },{time: 24 * frame},"","",{imageRendering: "pixelated", zIndex: defender.z==0?8:3}).animate({opacity: 0},0)
        scene.showEffect("g3_waterimpact",{
            x: defender.x,
            y: defender.y - 15 + (defender.z == 0?0:15),
            z: defender.z,
            time: 25 * frame,
            opacity: 0.5
        },{time: 30 * frame},"","",{imageRendering: "pixelated", zIndex: defender.z==0?8:3}).animate({opacity: 0},0)
        scene.showEffect("g3_waterimpact",{
            x: defender.x,
            y: defender.y - 15 + (defender.z == 0?0:15),
            z: defender.z,
            time: 31 * frame,
            opacity: 0.5
        },{time: 36 * frame},"","",{imageRendering: "pixelated", zIndex: defender.z==0?8:3}).animate({opacity: 0},0)
        scene.showEffect("g3_waterimpact",{
            x: defender.x,
            y: defender.y - 15 + (defender.z == 0?0:15),
            z: defender.z,
            time: 37 * frame,
            opacity: 0.5
        },{time: 45 * frame},"","",{imageRendering: "pixelated", zIndex: defender.z==0?8:3}).animate({opacity: 0},0)
    }
}



BattleMoveAnims.psychic = {
    anim(scene,[attacker,defender]){
        scene.backgroundEffect(`url('${sourceURL}fx/move-bg-psy.gif')`, 49 * frame, 1, 9 * frame, 0, {backgroundSize: "contain", backgroundRepeat: "no-repeat", left: scene.$leftbar[0].getBoundingClientRect().right});
        black_cover = document.createElement("div")
        Object.assign(black_cover.style, {
            position: "absolute",
            width: `${scene.$rightbar[0].getBoundingClientRect().left - scene.$leftbar[0].getBoundingClientRect().right}px`,
            left: `${scene.$leftbar[0].getBoundingClientRect().right}px`,
            height: `${scene.$textbox[0].getBoundingClientRect().top - scene.$bg[0].getBoundingClientRect().top}px`,
            backgroundColor: "black",
            opacity: 0,
            zIndex: 1
        })
        scene.$bgEffect.append(black_cover)
        black_cover.animate({opacity: 1},{delay: 0 * frame, duration: 9 * frame, fill: "forwards"})
        black_cover.animate({opacity: 0},{delay: 9 * frame, duration: 9 * frame, fill: "forwards"})

        black_cover.animate({opacity: 1},{delay: 49 * frame, duration: 9 * frame, fill: "forwards"})
        black_cover.animate({opacity: 0},{delay: 58 * frame, duration: 9 * frame, fill: "forwards"})

        atckTint = animTint(-35, attacker.$el,scene)
        var attacker2 = Object.create(Object.getPrototypeOf(attacker));
        Object.assign(attacker2, attacker);
        attacker2.$el = $(atckTint)
        if (attacker.$sub) attacker2.delay(scene.timeOffset)

        attacker.delay(19 * frame)
        attacker2.delay(19 * frame)
        for (var i =0; i<6; i++) {
            attacker.anim({x: attacker.x+5,time: frame}).anim({x: attacker.x,time: frame})
            attacker2.anim({x: attacker.x+5,time: frame, opacity: 0.6 * (1-Math.abs(i-3)/3)}).anim({x: attacker.x,time: frame, opacity: 0.6 * (1-Math.abs(i-3)/3)})
        }
        attacker2.anim({opacity: 0},0)

        var defender2 = Object.create(Object.getPrototypeOf(defender));
        Object.assign(defender2, defender);
        defender2.$el = $(animTint(0, defender.$el,scene))
        var defender3 = Object.create(Object.getPrototypeOf(defender));
        Object.assign(defender3, defender);
        defender3.$el = $(animTint(0, defender.$el,scene))

        defender.delay(35 * frame)
        defender2.delay(34 * frame)
        defender3.delay(34 * frame)
        for (var i =0;i<7;i++) {
            defender.anim({x: defender.x + 10, time: frame}).anim({x: defender.x, time: frame})
            defender2.anim({x: defender.x + 10, time: frame, opacity: 0.5}).anim({x: defender.x, time: frame, opacity: 0.5})
            defender3.anim({x: defender.x - 5, time: frame, scale: 1.1, opacity: 0.3}).anim({x: defender.x + 5, time: frame, scale: 1.2, opacity: 0.3})
        }
        defender2.anim({opacity: 0, time: 0})
        defender3.anim({opacity: 0, time: 0})

        scene.wait(67 * frame)
    }
}


BattleEffects.g3_heal1 = {
    url: sourceURL + "fx/moves/heal1.png",
    w: 9, h: 11
}
BattleEffects.g3_heal2 = {
    url: sourceURL + "fx/moves/heal2.png",
    w: 14, h: 16
}
BattleEffects.g3_heal3 = {
    url: sourceURL + "fx/moves/heal3.png",
    w: 25, h: 26
}
BattleEffects.g3_heal4 = {
    url: sourceURL + "fx/moves/heal4.png",
    w: 30, h: 30
}
BattleEffects.g3_heal5 = {
    url: sourceURL + "fx/moves/heal5.png",
    w: 29, h: 24
}
BattleEffects.g3_heal6 = {
    url: sourceURL + "fx/moves/heal6.png",
    w: 30, h: 19
}
BattleEffects.g3_heal7 = {
    url: sourceURL + "fx/moves/heal7.png",
    w: 30, h: 16
}
BattleEffects.g3_healorb = {
    url: sourceURL + "fx/moves/heal_orb.png",
    w: 12, h: 12
}

BattleMoveAnims.recover = {
    anim(scene, [attacker]){
        var pos0 = {x: attacker.x, y: attacker.y +(attacker.z == 0?-10:15), z: attacker.z}

        atckTint = animTint(-35, attacker.$el,scene)
        var attacker2 = Object.create(Object.getPrototypeOf(attacker));
        Object.assign(attacker2, attacker);
        attacker2.$el = $(atckTint)
        if (attacker.$sub) attacker2.delay(scene.timeOffset)

        for (var t = 0; t<3; t++){
            scene.showEffect('g3_healorb',{
                ...pos0,
                x: pos0.x + 25,
                time: (0 + 18 * t) * frame 
            },{time: (10 + 18 * t) * frame, ...pos0},'decel','',{imageRendering: "pixelated", zIndex: attacker.z==0?8:3}).animate({opacity: 0},0)
            scene.showEffect('g3_healorb',{
                ...pos0,
                x: pos0.x - 25,
                time: (4 + 18 * t) * frame 
            },{time: (14 + 18 * t) * frame, ...pos0},'decel','',{imageRendering: "pixelated", zIndex: attacker.z==0?8:3}).animate({opacity: 0},0)
            scene.showEffect('g3_healorb',{
                ...pos0,
                x: pos0.x + 15,
                y: pos0.y + 15,
                time: (6 + 18 * t) * frame 
            },{time: (16 + 18 * t) * frame, ...pos0},'decel','',{imageRendering: "pixelated", zIndex: attacker.z==0?8:3}).animate({opacity: 0},0)
            scene.showEffect('g3_healorb',{
                ...pos0,
                x: pos0.x - 10,
                y: pos0.y + 15,
                time: (9 + 18 * t) * frame 
            },{time: (19 + 18 * t) * frame, ...pos0},'decel','',{imageRendering: "pixelated", zIndex: attacker.z==0?8:3}).animate({opacity: 0},0)
            scene.showEffect('g3_healorb',{
                ...pos0,
                x: pos0.x + 20,
                y: pos0.y + 10,
                time: (11 + 18 * t) * frame 
            },{time: (21 + 18 * t) * frame, ...pos0},'decel','',{imageRendering: "pixelated", zIndex: attacker.z==0?8:3}).animate({opacity: 0},0)
            scene.showEffect('g3_healorb',{
                ...pos0,
                x: pos0.x - 20,
                y: pos0.y + 10,
                time: (13 + 18 * t) * frame 
            },{time: (23 + 18 * t) * frame, ...pos0},'decel','',{imageRendering: "pixelated", zIndex: attacker.z==0?8:3}).animate({opacity: 0},0)
            scene.showEffect('g3_healorb',{
                ...pos0,
                y: pos0.y + 20,
                time: (16 + 18 * t) * frame 
            },{time: (26 + 18 * t) * frame, ...pos0},'decel','',{imageRendering: "pixelated", zIndex: attacker.z==0?8:3}).animate({opacity: 0},0)

            attacker2.delay(2 * frame).anim({opacity: 0.8, time: 6 * frame}).delay(2*frame).anim({opacity: 0, time: 4 * frame}).delay(4 * frame)
        }

        healEffect(scene,attacker,55)
    }

}

BattleEffects.g3_egg = {
    url: sourceURL + 'fx/moves/egg.png',
    h: 22, w: 18
}
BattleEffects.g3_eggtop = {
    url: sourceURL + 'fx/moves/egg_top.png',
    h: 22, w: 18
}
BattleEffects.g3_eggbottom = {
    url: sourceURL + 'fx/moves/egg_bottom.png',
    h: 22, w: 18
}

BattleMoveAnims.softboiled = {
    anim(scene, [attacker]){
        attacker.delay(2 * frame).anim({y: attacker.y - 5, time: frame}).delay(2 * frame).anim({y: attacker.y, time: frame})

        scene.showEffect("g3_egg",{
            x: attacker.x,
            y: attacker.y + (attacker.z == 0 ? 0 : 15) - 20,
            z: attacker.z,
            time: 0,
            rotate: 15
        },{ x: attacker.behindx(-5),
            y: attacker.y + (attacker.z == 0 ? 0 : 15) + 10,
            time: 5 * frame,
            rotate: 0},"",'',{imageRendering: "pixelated", zIndex: attacker.z==0?8:3}).animate({opacity: 0},0)
        scene.showEffect("g3_egg",{
            x: attacker.behindx(-5),
            y: attacker.y + (attacker.z == 0 ? 0 : 15) + 10,
            z: attacker.z,
            time: 5 * frame,
            rotate: 15
        },{ x: attacker.behindx(-15),
            y: attacker.y + (attacker.z == 0 ? 0 : 15) + 25,
            time: 7 * frame,
            rotate: -10},"",'',{imageRendering: "pixelated", zIndex: attacker.z==0?8:3}).animate({opacity: 0},0)
        scene.showEffect("g3_egg",{
            x: attacker.behindx(-15),
            y: attacker.y + (attacker.z == 0 ? 0 : 15) + 25,
            z: attacker.z,
            time: 7 * frame,
            rotate: 15
        },{ x: attacker.behindx(-20),
            y: attacker.y + (attacker.z == 0 ? 0 : 15) + 35,
            time: 11 * frame,
            rotate: -10},"",'',{imageRendering: "pixelated", zIndex: attacker.z==0?8:3}).animate({opacity: 0},0)
        scene.showEffect("g3_egg",{
            x: attacker.behindx(-20),
            y: attacker.y + (attacker.z == 0 ? 0 : 15) + 35,
            z: attacker.z,
            time: 11 * frame,
            rotate: 15
        },{ x: attacker.behindx(-30),
            y: attacker.y + (attacker.z == 0 ? 0 : 15) + 25,
            time: 17 * frame,
            rotate: -15},"ballistic",'',{imageRendering: "pixelated", zIndex: attacker.z==0?8:3}).animate({opacity: 0},0)
        scene.showEffect("g3_egg",{
            x: attacker.behindx(-30),
            y: attacker.y + (attacker.z == 0 ? 0 : 15) + 25,
            z: attacker.z,
            time: 17 * frame,
            rotate: -15
        },{ x: attacker.behindx(-35),
            y: attacker.y + (attacker.z == 0 ? 0 : 15) - 10,
            time: 24 * frame,
            rotate: 15},"",'',{imageRendering: "pixelated", zIndex: attacker.z==0?8:3}).animate({opacity: 0},0)
        a = scene.showEffect("g3_egg",{
            x: attacker.behindx(-35),
            y: attacker.y + (attacker.z == 0 ? 0 : 15) - 20,
            z: attacker.z,
            time: 25 * frame,
        },{time: 35 * frame},"",'',{imageRendering: "pixelated", zIndex: attacker.z==0?8:3})
        for (var t = 0; t<3; t++){
            a.animate(scene.pos({
                x: attacker.behindx(-35),
                y: attacker.y + (attacker.z == 0 ? 0 : 15) - 20,
                z: attacker.z,
                xscale: 0.8, yscale: 1.05
            },BattleEffects.g3_egg),(4-t) * frame)
            a.animate(scene.pos({
                x: attacker.behindx(-35),
                y: attacker.y + (attacker.z == 0 ? 0 : 15) - 20,
                z: attacker.z,
                xscale: t==2?1:1.2, yscale: t==2?1:0.96
            },BattleEffects.g3_egg),(5-t**2) * frame)
        }
        a.delay(8 * frame).animate({opacity: 0},0)

        scene.showEffect("g3_eggtop",{
            x: attacker.behindx(-35),
            y: attacker.y + (attacker.z == 0 ? 0 : 15) - 20 + 2,
            z: attacker.z,
            time: 62 * frame,
        },{y: attacker.y + (attacker.z == 0 ? 0 : 15) + 10, time: 70 * frame},"",'',{imageRendering: "pixelated", zIndex: attacker.z==0?8:3}).delay(2 * frame).animate({opacity: 0},20 * frame)

        scene.showEffect("g3_eggbottom",{
            x: attacker.behindx(-35),
            y: attacker.y + (attacker.z == 0 ? 0 : 15) - 20,
            z: attacker.z,
            time: 62 * frame,
        },{time: 72 * frame},"",'',{imageRendering: "pixelated", zIndex: attacker.z==0?8:3}).animate({opacity: 0},20 * frame)

        scene.showEffect("g3_circle",{
            x: attacker.behindx(-35),
            y: attacker.y + (attacker.z == 0 ? 0 : 15) - 20 + 2,
            z: attacker.z,
            time: 63 * frame,
            scale: 0.1
        },{time: 80 * frame, scale: 2},"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0}, 0)
        scene.showEffect("g3_circle",{
            x: attacker.behindx(-35),
            y: attacker.y + (attacker.z == 0 ? 0 : 15) - 20 + 2,
            z: attacker.z,
            time: 68 * frame,
            scale: 0.1
        },{time: 85 * frame, scale: 2},"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0}, 0)
        
        blue = document.createElement("div")
        Object.assign(blue.style, {
            position: "absolute",
            width: `${scene.$rightbar[0].getBoundingClientRect().left - scene.$leftbar[0].getBoundingClientRect().right}px`,
            left: `${scene.$leftbar[0].getBoundingClientRect().right}px`,
            height: `${scene.$textbox[0].getBoundingClientRect().top - scene.$bg[0].getBoundingClientRect().top}px`,
            background: "#56c7e8",
            opacity: 0,
            zIndex: 9
        })
        scene.$bgEffect.append(blue)
        blue.animate({opacity: 0.5},{delay: 63 * frame, duration: 0 * frame, fill: "forwards"})
        blue.animate({opacity: 0},{delay: 64 * frame, duration: 13 * frame, fill: "forwards"})

        healEffect(scene,attacker,100)
    }
}

BattleMoveAnims.slackoff = {
    anim(scene, [attacker]){
        attacker.delay(2 * frame).anim({yscale: 0.8, xscale: 1.1,y: attacker.y - 10, time: 8 * frame})
        for (var t=0;t<4;t++) attacker.anim({yscale: 0.8, xscale: 1.1,y: attacker.y - 10,x: attacker.x + 5,time: frame}).anim({yscale: 0.8, xscale: 1.1,y: attacker.y - 10,x: attacker.x ,time: frame})
        attacker.anim({yscale: 1, xscale: 1, time: 8 * frame})
        
        healEffect(scene,attacker,26)
    }
}


BattleEffects.g3_burn1 = {
    url: sourceURL + "fx/moves/burn1.png",
    w: 4, h: 7
}
BattleEffects.g3_burn2 = {
    url: sourceURL + "fx/moves/burn2.png",
    w: 12, h: 17
}
BattleEffects.g3_burn3 = {
    url: sourceURL + "fx/moves/burn3.png",
    w: 24, h: 22
}
BattleEffects.g3_burn4 = {
    url: sourceURL + "fx/moves/burn4.png",
    w: 21, h: 23
}
BattleEffects.g3_burn5 = {
    url: sourceURL + "fx/moves/burn5.png",
    w: 14, h: 19
}

BattleMoveAnims.fireblast = {
    anim(scene,[attacker,defender]){
        objects = []
        for (var i=0;i<5;i++){
            for (var t=0;t<3;t++){
                $effect = $(`<img src="" style="display:block;position:absolute"/>`);
                scene.$fx.append($effect);
                $effect = scene.$fx.children().last();
                objects.push({$effect, t0: 3 * t, angle0: i/5})
            }
        }

        const t0 = performance.now()
        function propByT (t) {
            if (t < 20) return 0
            if (20 < t & t < 30) return ((t - 20) * 20)/200
            return 1
        }

        function tick(now){
            const t = (now - t0)/frame

            for (const obj of objects){
                var effect = BattleEffects[`g3_burn${(Math.round(t/2))%5+1}`]
                obj.$effect[0].src = effect.url
                var a = propByT(t-obj.t0)
                obj.$effect.css({
                    zIndex: attacker.z==0? 7 : 8, //is behind the attacker if its backsprite
                    ...scene.pos({
                        x: (attacker.x * (1-a) + defender.x * a) + 35 * Math.sin((obj.angle0 + (t-obj.t0)/10/3)*2*Math.PI),
                        y: ((attacker.y + (attacker.z==0?0:15)) * (1-a) +(defender.y + (defender.z==0?0:15)) * a) + 35 * Math.cos((obj.angle0 + (t-obj.t0)/10/3)*2*Math.PI),
                        z: attacker.behind(-a*200),
                        scale: 1.2
                    },effect),
                    ...{display: (t>=obj.t0 & t<40+obj.t0)?"block":"none"},
                })
            }
            if (t<46) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        defender.delay(57*frame)
        for (var i = 0; i<5;i++){
            for (var t=0;t<10;t++){
                scene.showEffect("g3_burn3",{
                    x: defender.x + 5*Math.sin(i/5*2*Math.PI),
                    y: defender.y + (defender.z==200?15:0) + 5*Math.cos(i/5*2*Math.PI),
                    z: defender.z, scale: 1.2,
                    time: (60 + 3*t)*frame
                },{
                    x: defender.x + 15 * Math.sin(i/5*2*Math.PI),
                    y: defender.y + (defender.z==200?15:0) + 15*Math.cos(i/5*2*Math.PI),
                    time: (62 + 3*t)*frame
                },"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0}, 0)
                scene.showEffect("g3_burn4",{
                    x: defender.x + 15*Math.sin(i/5*2*Math.PI),
                    y: defender.y + (defender.z==200?15:0) + 15*Math.cos(i/5*2*Math.PI),
                    z: defender.z, scale: 1.2,
                    time: (62 + 3*t)*frame
                },{
                    x: defender.x + 35 * Math.sin(i/5*2*Math.PI),
                    y: defender.y + (defender.z==200?15:0) + 35*Math.cos(i/5*2*Math.PI),
                    time: (65 + 3*t)*frame
                },"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0}, 0)

                if(i==0) defender.anim({x: defender.x + 10, time: frame}).anim({x:defender.x, time:frame})
            }
        }
        tintedBG = animTint(0,scene.$bg,scene)[0]
        tintedBG.style.opacity = 1
        tintedBG.animate({filter: "brightness(0.5)"}, {duration: 13 * frame, delay: 50 * frame, fill: "forwards"})
        tintedBG.animate({filter: "brightness(1)"}, {duration: 10 * frame, delay: 98 * frame, fill: "forwards"})
        scene.wait(110 * frame)
    }
}

BattleMoveAnims.flamethrower = {
    anim(scene,[attacker,defender]) {
        attacker.delay(frame)
        for (var i=0;i<23;i++) attacker.anim({y: attacker.y - 5, time: frame}).anim({y: attacker.y, time: frame})
        defender.delay(18 * frame)
        for (var i=0;i<20;i++) defender.anim({x: defender.behindx(5), time: frame}).anim({x: defender.x , time: frame})
        
        objects = []
        for (var i =0; i<16;i++){
            $effect = $(`<img src="${BattleEffects["g3_burn"+(2+i%3)].url}"/>`);
            $effect.css({
                display: "none",
                imageRendering: "pixelated",
                zIndex: 8,
                position: "absolute"
            })
            scene.$fx.append($effect);
            $effect = scene.$fx.children().last();
            objects.push($effect)
        }

        const t0 = performance.now()
        function tick(now) {
            const t = (now - t0)/frame - 6
            if (t<0) {
                requestAnimationFrame(tick)
                return
            }
            
            for (var i=0;i<objects.length;i++) {
                var $effect = objects[i]
                var effect = BattleEffects["g3_burn"+(2+i%3)]
                var pos0 = {
                    x: defender.behindx(-5) * i/15 + attacker.behindx(-20) * (1-i/15),
                    y: (defender.y + defender.z==0?0:15) * i/15 + (attacker.y + (attacker.y==0?-10:15)) * (1-i/15),
                    z: defender.z * i/15 + attacker.z * (1-i/15),
                }
                $effect.css({
                    ...scene.pos({
                        x: pos0.x,
                        y: pos0.y - 20 * Math.cos((t/45 + i/15/2) * Math.PI * 2),
                        z: pos0.z,
                        scale: 1.2
                    },effect),
                    display: ((t >= i) & (t < 44 + i) & ((Math.round(t)-i)%2==0)) ? "block" : "none"
                })
            }

            if (t<65) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)

        scene.wait(70 * frame)
    }
}

BattleMoveAnims.firepunch = {
    anim(scene,[attacker,defender]) {
        objects = []
        for (var i =0; i<4;i++){
            $effect = $(`<img src=""/>`);
            $effect.css({
                display: "none",
                imageRendering: "pixelated",
                zIndex: 8,
                position: "absolute"
            })
            scene.$fx.append($effect);
            $effect = scene.$fx.children().last();
            objects.push($effect)
        }

        objects2 = []
        for (var i =0; i<7;i++){
            $effect = $(`<img src=""/>`);
            $effect.css({
                display: "none",
                imageRendering: "pixelated",
                zIndex: 8,
                position: "absolute"
            })
            scene.$fx.append($effect);
            $effect = scene.$fx.children().last();
            objects2.push($effect)
        }

        const t0 = performance.now()
        function tick(now) {
            const t = (now - t0)/frame - 6
            if (t<0) {
                requestAnimationFrame(tick)
                return
            }

            var r = 60 * (1 - t/15)
            for (var i=0;i<objects.length;i++) {
                var $effect = objects[i]
                var effect = BattleEffects["g3_burn"+(2+Math.round(t/2)%3)]
                $effect[0].src = effect.url
                $effect.css({
                    ...scene.pos({
                        x: attacker.x + r * Math.cos((t/7+i/2)*Math.PI) ,
                        y: defender.y + (defender.z==200?15:0) + r * Math.sin((t/7+i/2)*Math.PI),
                        z: defender.z,
                        scale: 1.2
                    },effect),
                    display: ((t >= 0) & (r >= 0)) ? "block" : "none"
                })
            }

            const t2 = t - 17
            var posf = [[40, 25], [30, 20], [35, -20], [40, -35], [-30, 20], [-35, 0], [-30, -45]] //relative to the defender
            if (t2<0) {
                requestAnimationFrame(tick)
                return
            }
            for (var i=0;i<objects2.length;i++) {
                var $effect = objects2[i]
                var effect = BattleEffects["g3_burn"+(2+Math.round(t2/2)%3)]
                $effect[0].src = effect.url
                $effect.css({
                    ...scene.pos({
                        x: attacker.x + posf[i][0] * t2/ 22,
                        y: defender.y + (defender.z==200?15:0) + posf[i][1] * t2/ 22,
                        z: defender.z,
                        scale: 1.2
                    },effect),
                    display: ((t2 >= 0) & (t2<22)) ? "block" : "none"
                })
            }

            if (t2<22) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)

        scene.showEffect("g3_impact",{
            x: defender.x,
            y: defender.y + (defender.z==0?0:15),
            z: defender.z,
            opacity: 0.8,
            time: 17 * frame
        }, {time: 24 * frame},"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0}, 0)
        scene.showEffect("g3_fist",{
            x: defender.x,
            y: defender.y + (defender.z==0?0:15),
            z: defender.z,
            time: 17 * frame
        }, {time: 23 * frame},"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0}, 0)

        tintedDef = animTint(300, defender.$el, scene)[0]
        tintedDef.animate({opacity: 0.6}, {duration: 13 * frame, delay: 9 * frame, fill: "forwards"})
        tintedDef.animate({opacity: 0}, {duration: 5 * frame, delay: 43 * frame, fill: "forwards"})

        var defender2 = Object.create(Object.getPrototypeOf(defender));
        Object.assign(defender2, defender);
        defender2.$el = $(tintedDef)

        defender.delay(18 * frame)
        defender2.delay(18 * frame)
        for (var i = 0; i<7;i++){
            defender.anim({y: defender.y - 5, time: frame}).anim({time: frame})
            defender2.anim({y: defender.y - 5, time: frame}).anim({time: frame})
        }
        
        scene.wait(50 * frame)
    }
}

BattleMoveAnims.icepunch = {
    anim(scene, [attacker, defender]) {
        tintedDef = animTint(-181, defender.$el,scene)[0]
        tintedDef.animate({opacity: 0.6}, {duration: 8 * frame, delay: 3 * frame, fill: "forwards"})
        tintedDef.animate({opacity: 0}, {duration: 5 * frame, delay: 50 * frame, fill: "forwards"})

        var defender2 = Object.create(Object.getPrototypeOf(defender));
        Object.assign(defender2, defender);
        defender2.$el = $(tintedDef)

        defender.delay(24 * frame).anim({y: defender.y -10, time: frame}).anim({time: frame})
        defender2.delay(24 * frame).anim({y: defender.y - 10, time: frame}).anim({time: frame})
        
        scene.$bg[0].animate({filter: "brightness(0.5)"}, {duration: 4 * frame, fill: "forwards"})
        scene.$bg[0].animate({filter: "brightness(1)"}, {duration: 4 * frame, delay: 55* frame, fill: "forwards"})

        scene.showEffect("g3_impact",{
            x: defender.x,
            y: defender.y + (defender.z==0?0:15),
            z: defender.z,
            time: 20 * frame
        }, {time: 26 * frame},"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0}, 0)
        scene.showEffect("g3_fist",{
            x: defender.x,
            y: defender.y + (defender.z==0?0:15),
            z: defender.z,
            time: 20 * frame
        }, {time: 25 * frame},"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0}, 0)

        objects = []
        for (var i =0; i<8;i++){
            $effect = $(`<img src=""/>`);
            $effect.css({
                display: "none",
                imageRendering: "pixelated",
                zIndex: 8,
                position: "absolute"
            })
            scene.$fx.append($effect);
            $effect = scene.$fx.children().last();
            objects.push($effect)
        }

        const t0 = performance.now()
        function tick(now) {
            const t = (now - t0)/frame - 8
            if (t<0) {
                requestAnimationFrame(tick)
                return
            }

            
            for (var i=0;i<objects.length;i++) {
                t2 = t - (i<4?0:3)
                
                var r = 80 * (1 - t2/15)
                var $effect = objects[i]
                var effect = BattleEffects["g3_ice"+((i>3)+1)]
                $effect[0].src = effect.url
                $effect.css({
                    ...scene.pos({
                        x: attacker.x + r * Math.cos((t/8 + i/2 + (i<4?0:1/4))*Math.PI) ,
                        y: defender.y + (defender.z==200?15:0) + r * Math.sin((t/8 + i/2 + (i<4?0:1/4))*Math.PI),
                        z: defender.z,
                        rotate: (i<4?0:t2 * 360/3)
                    },effect),
                    display: ((t2 >= 0) & (r >= 0)) ? "block" : "none"
                })
            }

            if (r>0) requestAnimationFrame(tick)
            else for (var obj of objects) obj.css({display: "none"})
        }
        requestAnimationFrame(tick)


        iceEffect(scene,defender,26)

        scene.wait(65 * frame)
    }
}


BattleEffects.g3_charge1 = {
    url: sourceURL + "fx/moves/charge1.png",
    w: 5, h: 12
}
BattleEffects.g3_charge2 = {
    url: sourceURL + "fx/moves/charge2.png",
    w: 11, h: 23
}
BattleEffects.g3_charge3 = {
    url: sourceURL + "fx/moves/charge3.png",
    w: 4, h: 23
}
BattleEffects.g3_charge4 = {
    url: sourceURL + "fx/moves/charge4.png",
    w: 3, h: 21
}

function chargeBit(scene,x,y,z,frame,t0){
    pos={x: x, y: y+(z==0?0:15), z: z}
    scene.showEffect("g3_charge1",{
        time: t0 * frame,
        ...pos
    },{...pos, time: (t0 + 2) * frame, y: pos.y + 5},"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0}, 0)
    scene.showEffect("g3_charge2",{
        time: (t0 + 2) * frame,
        ...pos,
        y: pos.y + 5
    },{...pos, time: (t0 + 8) * frame, y: pos.y + 20},"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0}, 0)
    scene.showEffect("g3_charge3",{
        time: (t0 + 8) * frame,
        ...pos,
        y: pos.y + 20
    },{...pos, time: (t0 + 10) * frame, y: pos.y + 25},"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0}, 0)
    scene.showEffect("g3_charge4",{
        time: (t0 + 10) * frame,
        ...pos,
        y: pos.y + 25
    },{...pos, time: (t0 + 12) * frame, y: pos.y + 30},"","",{imageRendering: "pixelated", zIndex: 9}).animate({opacity: 0}, 0)
}

BattleMoveAnims.focuspunchcharge = {
    anim(scene,[attacker]){
        if (attacker.isSubActive) return
        for (var t = 0;t<3;t++){
            chargeBit(scene,attacker.x - 15, attacker.y - 30, attacker.z, frame, 0 + 16 * t)
            chargeBit(scene,attacker.x + 10, attacker.y - 40, attacker.z, frame, 3 + 16 * t)
            chargeBit(scene,attacker.x - 5, attacker.y, attacker.z, frame, 6 + 16 * t)
            chargeBit(scene,attacker.x + 25, attacker.y - 30, attacker.z, frame, 9 + 16 * t)
        }

        atckTint = animTint(300, attacker.$el,scene)
        var attacker2 = Object.create(Object.getPrototypeOf(attacker));
        Object.assign(attacker2, attacker);
        attacker2.$el = $(atckTint)
        if (attacker.$sub) attacker2.delay(scene.timeOffset)
        
        attacker.delay(16 * frame)
        attacker2.delay(16 * frame)
        for (var i = 0; i<16; i++){
            attacker.anim({x: attacker.x + 5, time: frame}).anim({x: attacker.x, time: frame})
            attacker2.anim({x: attacker.x + 5, time: frame, opacity: 0.8 * (1 - Math.abs(i-8)/8)}).anim({x: attacker.x, time: frame, opacity: 0.8 * (1 - Math.abs(i-8)/8)})
        }
        attacker2.anim({opacity: 0}, 0)
    }
}

BattleMoveAnims.focuspunch = {
    anim(scene, [attacker, defender]){
        scene.backgroundEffect(`url('${sourceURL}fx/move-bg-impact${defender.z == 0 ? "you" : "opp"}.png')`, 46 * frame, 1, 9 * frame, 0, {backgroundSize: "contain", backgroundRepeat: "no-repeat", left: scene.$leftbar[0].getBoundingClientRect().right, imageRendering: "pixelated"});
        black_cover = document.createElement("div")
        Object.assign(black_cover.style, {
            position: "absolute",
            width: `${scene.$rightbar[0].getBoundingClientRect().left - scene.$leftbar[0].getBoundingClientRect().right}px`,
            left: `${scene.$leftbar[0].getBoundingClientRect().right}px`,
            height: `${scene.$textbox[0].getBoundingClientRect().top - scene.$bg[0].getBoundingClientRect().top}px`,
            backgroundColor: "black",
            opacity: 0,
            zIndex: 1
        })
        scene.$bgEffect.append(black_cover)
        black_cover.animate({opacity: 1},{delay: 0 * frame, duration: 9 * frame, fill: "forwards"})
        black_cover.animate({opacity: 0},{delay: 9 * frame, duration: 9 * frame, fill: "forwards"})

        black_cover.animate({opacity: 1},{delay: 46 * frame, duration: 9 * frame, fill: "forwards"})
        black_cover.animate({opacity: 0},{delay: 55 * frame, duration: 9 * frame, fill: "forwards"})

        fist = scene.showEffect("g3_fist",{
            x: defender.x,
            y: defender.y + (defender.z == 0 ? 0:15),
            z: defender.z,
            time: 19 * frame,
            scale: 2
        },{time: 24 * frame, scale: 1},"","",{imageRendering: "pixelated", zIndex: defender.z == 0?8:3})

        for (var i = 0; i<5;i++) {
            fist.animate(scene.pos({
                x: defender.x + 5,
                y: defender.y + (defender.z == 0 ? 0:15),
                z: defender.z},BattleEffects.g3_fist),frame)
            fist.delay(frame)
            fist.animate(scene.pos({
                x: defender.x - 10,
                y: defender.y + (defender.z == 0 ? 0:15),
                z: defender.z},BattleEffects.g3_fist),frame)
        }
        fist.animate({opacity: 0},0)

        defender.delay(26 * frame)
        for (var i = 0; i<11; i++) defender.anim({x: defender.x + 15, time: frame}).anim({x: defender.x, time: frame})

        scene.showEffect("g3_impact",{
            x: defender.x - 10,
            y: defender.y + (defender.z == 0 ? 0:15),
            z: defender.z,
            time: 25 * frame,
            opacity: 0.7
        },{time: 30 * frame},"","",{imageRendering: "pixelated", zIndex: defender.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect("g3_impact",{
            x: defender.x + 15,
            y: defender.y + (defender.z == 0 ? 0:15) - 10,
            z: defender.z,
            time: 30 * frame,
            opacity: 0.7
        },{time: 35 * frame},"","",{imageRendering: "pixelated", zIndex: defender.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect("g3_impact",{
            x: defender.x + 15,
            y: defender.y + (defender.z == 0 ? 0:15),
            z: defender.z,
            time: 35 * frame,
            opacity: 0.7
        },{time: 40 * frame},"","",{imageRendering: "pixelated", zIndex: defender.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect("g3_impact",{
            x: defender.x,
            y: defender.y + (defender.z == 0 ? 0:15) - 10,
            z: defender.z,
            time: 40 * frame,
            opacity: 0.7
        },{time: 45 * frame},"","",{imageRendering: "pixelated", zIndex: defender.z == 0?8:3}).animate({opacity: 0},0)
    }
}

BattleEffects.g3_batonpass = {
    url: sourceURL + "fx/moves/bp-pokeball.png",
    w: 16, h: 16
}
BattleMoveAnims.batonpass = {
    anim(scene, [attacker]) {
        attacker.anim({
            x: attacker.x, y: attacker.y, z: attacker.z,
            xscale: 0, yscale: 0.5,
            time: 8 * frame
        })
        attacker.skipNextAnim = true //skips the unsummon anim

        scene.showEffect("g3_batonpass",{
            x: attacker.x, y: attacker.y, z: attacker.z,
            time: 0
        },{time: 6*frame},
        "linear","",{imageRendering: "pixelated", zIndex: attacker.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect("g3_batonpass",{
            x: attacker.x, y: attacker.y, z: attacker.z,
            time: 6 * frame
        },{y: attacker.y + 400, time: 20*frame},
        "linear","",{imageRendering: "pixelated", zIndex: attacker.z == 0?8:3}).animate({opacity: 0},0)

        var tintFilter = animTint(0,scene.$bg,scene)[0]
        tintFilter.style.background = "pink"
        tintFilter.animate({opacity: 0.7},{duration: 7 * frame, delay: 4*frame , fill: "forwards"})
        tintFilter.animate({opacity: 0},{duration: 7 * frame, delay: 11*frame , fill: "forwards"})
        scene.wait(18 * frame)
    }
}

BattleEffects.g3_spin1 = {
    url: sourceURL + "fx/moves/rapidspin1.png",
    w: 32, h: 16
}
BattleEffects.g3_spin2 = {
    url: sourceURL + "fx/moves/rapidspin2.png",
    w: 32, h: 16
}
BattleEffects.g3_spin3 = {
    url: sourceURL + "fx/moves/rapidspin3.png",
    w: 32, h: 16
}

BattleMoveAnims.rapidspin = {
    anim (scene, [attacker, defender]){
        scene.showEffect('g3_spin1',{
            x: attacker.x + 15,
            y: attacker.y + (attacker.z==0?0:15) - 20,
            z: attacker.z,
            time: 0
        },{time: 1* frame},"", "",{imageRendering: "pixelated", zIndex: attacker.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect('g3_spin2',{
            x: attacker.x + 5,
            y: attacker.y + (attacker.z==0?0:15) - 15,
            z: attacker.z,
            time: 1* frame
        },{time: 2* frame},"", "",{imageRendering: "pixelated", zIndex: attacker.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect('g3_spin3',{
            x: attacker.x - 5,
            y: attacker.y + (attacker.z==0?0:15) - 5,
            z: attacker.z,
            time: 2* frame
        },{time: 3* frame},"", "",{imageRendering: "pixelated", zIndex: attacker.z == 0?8:3}).animate({opacity: 0},0)

        scene.showEffect('g3_spin1',{
            x: attacker.x + 10,
            y: attacker.y + (attacker.z==0?0:15),
            z: attacker.z,
            time: 3* frame
        },{time: 4* frame},"", "",{imageRendering: "pixelated", zIndex: attacker.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect('g3_spin2',{
            x: attacker.x + 8,
            y: attacker.y + (attacker.z==0?0:15) + 5,
            z: attacker.z,
            time: 4* frame
        },{time: 5* frame},"", "",{imageRendering: "pixelated", zIndex: attacker.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect('g3_spin3',{
            x: attacker.x - 10,
            y: attacker.y + (attacker.z==0?0:15) + 8,
            z: attacker.z,
            time: 5* frame
        },{time: 6* frame},"", "",{imageRendering: "pixelated", zIndex: attacker.z == 0?8:3}).animate({opacity: 0},0)

        scene.showEffect('g3_spin1',{
            x: attacker.x,
            y: attacker.y + (attacker.z==0?0:15) + 10,
            z: attacker.z,
            time: 6* frame
        },{time: 7* frame},"", "",{imageRendering: "pixelated", zIndex: attacker.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect('g3_spin2',{
            x: attacker.x + 10,
            y: attacker.y + (attacker.z==0?0:15) + 15,
            z: attacker.z,
            time: 7* frame
        },{time: 8* frame},"", "",{imageRendering: "pixelated", zIndex: attacker.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect('g3_spin3',{
            x: attacker.x - 10,
            y: attacker.y + (attacker.z==0?0:15) + 20,
            z: attacker.z,
            time: 8* frame
        },{time: 9* frame},"", "",{imageRendering: "pixelated", zIndex: attacker.z == 0?8:3}).animate({opacity: 0},0)

        scene.showEffect('g3_spin1',{
            x: attacker.x - 5,
            y: attacker.y + (attacker.z==0?0:15) + 20,
            z: attacker.z,
            time: 9* frame
        },{time: 10* frame},"", "",{imageRendering: "pixelated", zIndex: attacker.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect('g3_spin2',{
            x: attacker.x + 15,
            y: attacker.y + (attacker.z==0?0:15) + 25,
            z: attacker.z,
            time: 10* frame
        },{time: 11* frame},"", "",{imageRendering: "pixelated", zIndex: attacker.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect('g3_spin3',{
            x: attacker.x - 10,
            y: attacker.y + (attacker.z==0?0:15) + 30,
            z: attacker.z,
            time: 11* frame
        },{time: 12* frame},"", "",{imageRendering: "pixelated", zIndex: attacker.z == 0?8:3}).animate({opacity: 0},0)

        scene.showEffect('g3_spin1',{
            x: attacker.x - 10,
            y: attacker.y + (attacker.z==0?0:15) + 30,
            z: attacker.z,
            time: 12* frame
        },{time: 13* frame},"", "",{imageRendering: "pixelated", zIndex: attacker.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect('g3_spin2',{
            x: attacker.x + 25,
            y: attacker.y + (attacker.z==0?0:15) + 35,
            z: attacker.z,
            time: 13* frame
        },{time: 14* frame},"", "",{imageRendering: "pixelated", zIndex: attacker.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect('g3_spin3',{
            x: attacker.x - 10,
            y: attacker.y + (attacker.z==0?0:15) + 40,
            z: attacker.z,
            time: 14* frame
        },{time: 15* frame},"", "",{imageRendering: "pixelated", zIndex: attacker.z == 0?8:3}).animate({opacity: 0},0)

        scene.showEffect('g3_spin1',{
            x: attacker.x - 10,
            y: attacker.y + (attacker.z==0?0:15) + 40,
            z: attacker.z,
            time: 15* frame
        },{time: 16* frame},"", "",{imageRendering: "pixelated", zIndex: attacker.z == 0?8:3}).animate({opacity: 0},0)

        scene.showEffect('g3_impact',{
            x: defender.x,
            y: defender.y +(defender.z==200?15:0),
            z: defender.z,
            time: 17 * frame
        },{time: 22 * frame},"","",{imageRendering: "pixelated", zIndex: defender.z == 0?8:3}).animate({opacity: 0},0)
        defender.delay(18 * frame)
        for (vari=0;i<5;i++) defender.anim({x: defender.x + 5, time: 1 * frame}).anim({x: defender.x, time: 1 * frame})

        for (var i = 1; i<11; i++) {
            attacker.$el[0].animate({clipPath: `rect(0% 100% ${85-10*i}% 0%)`}, {duration: 0, delay: i * frame, fill: 'forwards'})
            attacker.$el[0].animate({clipPath: `rect(0% 100% ${105-10*i}% 0%)`}, {duration: 0, delay: (1+i)*frame, fill: 'forwards'})
        }

        for (var i = 1; i<11; i++) {
            attacker.$el[0].animate({clipPath: `rect(${85-10*i}% 100% 100% 0%)`}, {duration: 0, delay: (28+i) * frame, fill: 'forwards'})
            attacker.$el[0].animate({clipPath: `rect(${105-10*i}% 100% 100% 0%)`}, {duration: 0, delay: (29+i)*frame, fill: 'forwards'})
        }
    }
}

BattleEffects.g3_dragondanceorb = {
    url: sourceURL+"fx/moves/dragondance_orb.png",
    w: 16, h: 16
}

BattleMoveAnims.dragondance = {
    anim(scene, [attacker]) {
        const canvas = document.createElement("canvas");
        var Y = parseInt(attacker.$el[0].style.width)
        var X = parseInt(attacker.$el[0].style.height)
        canvas.width = Y
        canvas.height = X

        const ctx = canvas.getContext("2d");
        const imageData = ctx.createImageData(Y, X);

        filter = $(`<svg width="${Y}" height="${X}" hidden>
                        <filter id="filter"> 
                            <feImage href="" result="map" x="0" y="0" width="100%" height="100%"/> 
                            <feDisplacementMap in="SourceGraphic"  in2="map"  scale="15"  xChannelSelector="R"  yChannelSelector="G"/> 
                        </filter>
                    </svg>`)
        scene.$fx.append(filter)
        attacker.$el[0].style.filter = "url(#filter)"

        objects = []
        const effect = BattleEffects.g3_dragondanceorb
        for (var i = 0; i<6; i++) {
            orb = $(`<img src="${effect.url}" />`).css({display: "none"})
            scene.$fx.append(orb)
            tintOrb = animTint(180, orb, scene)
            objects.push({orb: orb, tint: tintOrb, a0: i/3*Math.PI})
        }

        const startTime = performance.now();
        const maxTime = 40
        var a = 0

        function tick(now){
            const t = (now - startTime)/frame

            for (let y = 0; y < Y; y++) {
                const r = Math.round(255 * (0.5 + 0.5 * Math.cos((t/maxTime*3 + 3*y/Y)*2*Math.PI)));

                for (let x = 0; x < X; x++) {
                    const i = (y * Y + x) * 4;

                    imageData.data[i] = r;
                    imageData.data[i + 1] = 128;
                    imageData.data[i + 2] = 128;
                    imageData.data[i + 3] = 255;
                }
            }

            ctx.putImageData(imageData, 0, 0);
            dataURL = canvas.toDataURL("image/png");
            document.querySelector("#filter feImage").setAttribute("href", dataURL)

            const torb = t-5
            r = 30 + Math.max(0, (torb-30)*20)
            a = (0.7*(torb/26)**2 + 0.3) * 2*Math.PI
            if (torb>=0) {
                for (const orb of objects) {
                    css = {
                        imageRendering: "pixelated", position: "absolute", zIndex: attacker.z==0?8:3,display: "block",
                        ... scene.pos({
                            x: attacker.x + r * Math.sin(a + orb.a0),
                            y: attacker.y + (attacker.z==200?15:0) + r * Math.cos(a + orb.a0),
                            z: attacker.z
                        }, effect)
                    }
                    orb.orb.css(css)
                    orb.tint.css({
                        ...css,
                        opacity: (0.5 - 0.5*Math.cos(torb/7*Math.PI)),
                    })
                }
            }   

            if (t <= maxTime) requestAnimationFrame(tick)
            else attacker.$el[0].style.filter = "none"
        }
        requestAnimationFrame(tick)
        scene.wait(maxTime*frame)
    }
}

BattleMoveAnims.brickbreak = {
    anim(scene,[attacker, defender]) {
        attacker.anim({x: attacker.behindx(-20),time: 2*frame}).delay(frame).anim({x: attacker.x, time: 2*frame})
        scene.showEffect("g3_impact",{
            x: defender.x - 20,
            y: defender.y +(defender.z==200?15:0) + 20,
            z: defender.z,
            time: 5 * frame
        },{time: 12 * frame},"","",{imageRendering: "pixelated", zIndex: defender.z == 0?8:3}).animate({opacity: 0},0)
        attacker.delay(7 * frame)

        attacker.anim({x: attacker.behindx(-20),time: 2*frame}).delay(frame).anim({x: attacker.x, time: 2*frame})
        scene.showEffect("g3_impact",{
            x: defender.x + 20,
            y: defender.y +(defender.z==200?15:0) - 20,
            z: defender.z,
            time: 17 * frame
        },{time: 24 * frame},"","",{imageRendering: "pixelated", zIndex: defender.z == 0?8:3}).animate({opacity: 0},0)
        attacker.delay(7 * frame)

        attacker.delay(7 * frame).anim({x: attacker.behindx(40), time: 13 * frame}).anim({x: attacker.x, time: 2 * frame})
        scene.showEffect("g3_impact",{
            x: defender.x,
            y: defender.y +(defender.z==200?15:0),
            z: defender.z,
            time: 53 * frame
        },{time: 60 * frame},"","",{imageRendering: "pixelated", zIndex: defender.z == 0?8:3}).animate({opacity: 0},0)

        tintedBG = animTint(0,scene.$bg,scene)[0]
        tintedBG.style.opacity = 1
        tintedBG.animate({filter: "brightness(0.5)"}, {duration: 5 * frame, delay: 33 * frame, fill: "forwards"})
        tintedBG.animate({filter: "brightness(1)"}, {duration: 6 * frame, delay: 62 * frame, fill: "forwards"})

    }
}

BattleEffects.g3_z = {
    url: sourceURL + "fx/moves/sleep.png",
    w: 20, h: 22
}
BattleMoveAnims.rest = {
    anim (scene,[attacker]){
        scene.showEffect("g3_z",{
                x: attacker.x,
                y: attacker.y + (attacker.z==200?15:0) + 10,
                z: attacker.z,
                time: 0,
                scale: 0,
                rotate: 10 //30
            }, {
                x: attacker.x + 10,
                y: attacker.y + (attacker.z==200?15:0) + 50,
                z: attacker.z,
                time: 29 * frame,
                scale: 1,
                rotate: 10,
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
            scene.showEffect("g3_z",{
                x: attacker.x,
                y: attacker.y + (attacker.z==200?15:0) + 10,
                z: attacker.z,
                time: 24 * frame,
                scale: 0,
                rotate: 10 //30
            }, {
                x: attacker.x + 10,
                y: attacker.y + (attacker.z==200?15:0) + 50,
                z: attacker.z,
                time: 53 * frame,
                scale: 1,
                rotate: 10,
            },"balistic","",{imageRendering: "pixelated", zIndex: attacker.z == 0?8:3}).animate({opacity: 0},0)
    }
}

BattleMoveAnims.bodyslam = {
    anim(scene, [attacker,defender]){
        attacker.anim({y: attacker.y - 15, time: 4 * frame}).anim({y: attacker.y, time: 4 * frame})
        attacker.delay(9 * frame).anim({x: attacker.behindx(-25), time: 3 * frame})

        scene.showEffect("g3_impact",{
            x: defender.x,
            y: defender.y + (defender.z==200?15:0),
            z: defender.z,
            opacity: 0.7,
            time: 21 * frame
        },{time: 25 * frame},"","",{imageRendering: "pixelated", zIndex: 8}).animate({opacity: 0},0)

        defender.delay(22 * frame).anim({x: defender.behindx(25), time: 3 * frame}).delay(3 * frame)
        for (var i =0; i<6; i++) defender.anim({x: defender.behindx(35), time: frame}).anim({x: defender.behindx(25), time: frame})
        
        attacker.delay(28 * frame).anim({x: attacker.x, time: 3 * frame})
        defender.delay(11 * frame).anim({x: defender.x, time: 3 * frame})

        scene.wait(30 * frame)
    }
}

BattleEffects.g3_seed1 = {
    url: sourceURL + "fx/moves/leech_seed1.png",
    w: 12, h: 11
}
BattleEffects.g3_seed2 = {
    url: sourceURL + "fx/moves/leech_seed2.png",
    w: 14, h: 11
}
BattleEffects.g3_seed3 = {
    url: sourceURL + "fx/moves/leech_seed3.png",
    w: 16, h: 10
}

BattleMoveAnims.leechseed = {
    anim(scene, [attacker,defender]){
        for (var i =0; i<3;i++){
            var dx = (i==0?0:15)*(i==1?1:-1)

            scene.showEffect("g3_seed1",{
                x: attacker.behindx(-5),
                y: attacker.y + (attacker.z==200?15:0),
                z: attacker.z,
                time: 6*i*frame
            },{
                x: defender.x + dx,
                y: defender.y +(defender.z==200?15:0) - 15,
                z: defender.z,
                time: (17+6*i) * frame
            }, "ballistic","",{imageRendering: "pixelated", zIndex: attacker.z == 0?7:3}).animate({opacity: 0},0)

            for (var t = 0; t<5; t++){
                scene.showEffect("g3_seed2",{
                    x: defender.x + dx,
                    y: defender.y +(defender.z==200?15:0) - 15,
                    z: defender.z,
                    time: (24+6*i+7*t) * frame
                },{time: (27+6*i+7*t) * frame}, "balistic","",{imageRendering: "pixelated", zIndex: 8}).animate({opacity: 0},0)
                scene.showEffect("g3_seed3",{
                        x: defender.x + dx,
                        y: defender.y +(defender.z==200?15:0) - 15,
                        z: defender.z,
                        time: (27+6*i+7*t) * frame
                },{time: (31+6*i+7*t) * frame}, "balistic","",{imageRendering: "pixelated", zIndex: 8}).animate({opacity: 0},0)
            }
        }
    }
}
BattleOtherAnims.leech = {
    anim(scene,[attacker,defender]){
        orbs = [
            {t0: 25, t1: 37, A: 20, theta: 270},
            {t0: 28, t1: 41, A: 30, theta: 130},
            {t0: 31, t1: 47, A: 90, theta: 230},
            {t0: 34, t1: 52, A: 60, theta: 90},
            {t0: 37, t1: 50, A: 20, theta: 230},
            {t0: 40, t1: 53, A: 90, theta: 120},
            {t0: 40, t1: 53, A: 20, theta: 230},
            {t0: 40, t1: 57, A: 50, theta: 270},
            {t0: 43, t1: 65, A: 50, theta: 150},
            {t0: 46, t1: 54, A: 50, theta: 270},
            {t0: 49, t1: 66, A: 80, theta: 90},
        ]
        animDrainOrbs({
            x: defender.x, 
            y: defender.y + (defender.z==0?0:15),
            z: defender.z
        },{
            x: attacker.x, 
            y: attacker.y + (attacker.z==0?0:15),
            z: attacker.z
        },orbs,scene)

        scene.backgroundEffect("#78f75e", 100 * frame, 0.3, 0, 10 * frame)
        scene.showEffect("g3_impact",{x: defender.x, y: defender.y + (defender.z==200?15:0), z: defender.z,
            time: 15 * frame,
        }, {time: 20 * frame},"linear","",{imageRendering: "pixelated", zIndex: 8}).animate({opacity: 0},0)
        defender.delay(18 * frame)
        for (var i =0;i<3;i++) defender.anim({y: defender.y-5,time: frame}).anim({y: defender.y,time: frame})

        healEffect(scene,attacker,70)
        scene.wait(120 * frame)
    }
}


BattleEffects.drainOrb = {
    url: sourceURL + "fx/moves/drainOrb.png",
    w: 12, h: 12
}

function animDrainOrbs (pos0,pos1,orbs,scene) {
    var maxTime = 0
    for (var orb of orbs){
        $effect = $(`<img src="${sourceURL}fx/moves/drainOrb.png"/>`);
        scene.$fx.append($effect);
        $effect = scene.$fx.children().last();
        orb.$effect = $effect
        if (orb.t1>maxTime) maxTime = orb.t1 
    }

    const t0 = performance.now()
    function tick(now) {
        const t = (now - t0)/frame

        for (const orb of orbs) {
            var r = orb.A * (t + orb.A/25 - orb.t0)*(orb.t1 - t)/(orb.t1 - orb.t0 + orb.A/25)**2*2 
            //distance from the straigth path, quadratic in t

            var alpha = (t - orb.t0)/(orb.t1-orb.t0)
            var pos_straight = {
                x: pos1.x * alpha + pos0.x * (1-alpha),
                y: pos1.y * alpha + pos0.y * (1-alpha),
                z: pos1.z * alpha + pos0.z * (1-alpha),
            }

            if ((t - orb.t0)*(orb.t1 - t)<0) orb.$effect.css({display:"none"})
            else {
                effect = BattleEffects.drainOrb
                orb.$effect.css({
                    display:"block", position: "absolute", zIndex: 8, imageRendering: "pixelated",
                    ...scene.pos({
                        scale: (1-alpha) + 0.2, //not actually sure that the sprite of the balls doesnt change but this works fine
                        x: pos_straight.x + r * Math.cos(orb.theta*Math.PI/180),
                        y: pos_straight.x + r * Math.sin(orb.theta*Math.PI/180),
                        z: pos_straight.z
                    },effect)
                })
            }
        }
        if (t<maxTime+1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
}

BattleMoveAnims.gigadrain = {
    anim(scene,[attacker,defender]) {
        orbs = [
            {t0: 25, t1: 45, A: 150, theta: 70},
            {t0: 25, t1: 37, A: 20, theta: 270},
            {t0: 25, t1: 47, A: 70, theta: 300},
            {t0: 28, t1: 41, A: 30, theta: 130},
            {t0: 28, t1: 41, A: 70, theta: 300},
            {t0: 28, t1: 47, A: 130, theta: 270},
            {t0: 31, t1: 44, A: 80, theta: 90},
            {t0: 31, t1: 44, A: 50, theta: 90},
            {t0: 31, t1: 47, A: 90, theta: 230},
            {t0: 34, t1: 52, A: 60, theta: 90},
            {t0: 34, t1: 47, A: 20, theta: 90},
            {t0: 34, t1: 47, A: 80, theta: 210},
            {t0: 37, t1: 55, A: 70, theta: 90},
            {t0: 37, t1: 50, A: 20, theta: 230},
            {t0: 37, t1: 54, A: 50, theta: 270},
            {t0: 40, t1: 53, A: 90, theta: 120},
            {t0: 40, t1: 53, A: 20, theta: 230},
            {t0: 40, t1: 57, A: 50, theta: 270},
            {t0: 43, t1: 56, A: 20, theta: 120},
            {t0: 43, t1: 65, A: 50, theta: 270},
            {t0: 43, t1: 63, A: 100, theta: 270},
            {t0: 46, t1: 66, A: 80, theta: 90},
            {t0: 46, t1: 61, A: 60, theta: 230},
        ]//spent WAYY too long doing this frame by frame oml im a dumbass
        animDrainOrbs({
            x: defender.x, 
            y: defender.y + (defender.z==0?0:15),
            z: defender.z
        },{
            x: attacker.x, 
            y: attacker.y + (attacker.z==0?0:15),
            z: attacker.z
        },orbs,scene)

        scene.backgroundEffect("#78f75e", 100 * frame, 0.7, 0, 10 * frame)
        scene.showEffect("g3_impact",{x: defender.x, y: defender.y + (defender.z==200?15:0), z: defender.z,
            time: 15 * frame,
        }, {time: 20 * frame},"linear","",{imageRendering: "pixelated", zIndex: 8}).animate({opacity: 0},0)
        defender.delay(18 * frame).anim({y: defender.y-5,time: frame}).anim({y: defender.y,time: frame}).anim({y: defender.y-5,time: frame}).anim({y: defender.y,time: frame})

        healEffect(scene,attacker,70)
        scene.wait(120 * frame)
    }
}

BattleEffects.g3_shadowball = {
    url: sourceURL + "fx/moves/shadow_ball.png",
    w: 32, h: 32
}

BattleMoveAnims.shadowball = {
    anim(scene,[attacker,defender]){
        scene.backgroundEffect(`url('${sourceURL}fx/move-bg-ghost.png')`, 53 * frame, 1, 8 * frame, 0);
        black_cover = document.createElement("div")
        Object.assign(black_cover.style, {
            position: "absolute",
            width: `${scene.$rightbar[0].getBoundingClientRect().left - scene.$leftbar[0].getBoundingClientRect().right}px`,
            left: `${scene.$leftbar[0].getBoundingClientRect().right}px`,
            height: `${scene.$textbox[0].getBoundingClientRect().top - scene.$bg[0].getBoundingClientRect().top}px`,
            backgroundColor: "black",
            opacity: 0,
            zIndex: 1
        })
        scene.$bgEffect.append(black_cover)
        black_cover.animate({opacity: 1},{delay: 0 * frame, duration: 8 * frame, fill: "forwards"})
        black_cover.animate({opacity: 0},{delay: 8 * frame, duration: 8 * frame, fill: "forwards"})

        black_cover.animate({opacity: 1},{delay: 53 * frame, duration: 8 * frame, fill: "forwards"})
        black_cover.animate({opacity: 0},{delay: 61 * frame, duration: 8 * frame, fill: "forwards"})

        scene.showEffect("g3_shadowball",{
            x: attacker.x,
            y: attacker.y + (attacker.z==0?0:15),
            z: attacker.z,
            time: 27 * frame
        },{
            x: (attacker.x + defender.x)/2,
            y: (attacker.y + (attacker.z==0?0:15) + defender.y + (defender.z==0?0:15))/2,
            z: (attacker.z + defender.z)/2,
            time: 33 * frame
        },"decel","",{imageRendering: "pixelated", zIndex: attacker.z == 0?7:3}).animate({opacity: 0},0)
        scene.showEffect("g3_shadowball",{
            x: (attacker.x + defender.x)/2,
            y: (attacker.y + (attacker.z==0?0:15) + defender.y + (defender.z==0?0:15))/2,
            z: (attacker.z + defender.z)/2,
            time: 33 * frame
        },{
            x: (attacker.x + defender.x)/2,
            y: (attacker.y + (attacker.z==0?0:15) + defender.y + (defender.z==0?0:15))/2,
            z: (attacker.z + defender.z)/2,
            time: 40 * frame
        },"decel","",{imageRendering: "pixelated", zIndex: attacker.z == 0?7:3}).animate({opacity: 0},0)
        scene.showEffect("g3_shadowball",{
            x: (attacker.x + defender.x)/2,
            y: (attacker.y + (attacker.z==0?0:15) + defender.y + (defender.z==0?0:15))/2,
            z: (attacker.z + defender.z)/2,
            time: 40 * frame
        },{
            x: defender.x,
            y: defender.y + (defender.z==0?0:15),
            z: defender.z,
            time: 45 * frame
        },"decel","",{imageRendering: "pixelated", zIndex: attacker.z == 0?7:3}).animate({opacity: 0},0)

        defender.delay(45 * frame)
        for (var i=0;i<4;i++) defender.anim({x: defender.x-10,time: frame}).anim({x: defender.x,time: frame})
        
        scene.wait(69 * frame)
    }
}

BattleEffects.g3_crunch = {
    url: sourceURL + "fx/moves/crunch.png",
    w: 62, h: 16
}

BattleMoveAnims.crunch = {
    anim(scene,[attacker,defender]){
        scene.backgroundEffect(`url('${sourceURL}fx/move-bg-dark.png')`, 52 * frame, 1, 8 * frame, 0, {imageRendering: "pixelated", backgroundSize: "cover"});
        black_cover = document.createElement("div")
        Object.assign(black_cover.style, {
            position: "absolute",
            width: `${scene.$rightbar[0].getBoundingClientRect().left - scene.$leftbar[0].getBoundingClientRect().right}px`,
            left: `${scene.$leftbar[0].getBoundingClientRect().right}px`,
            height: `${scene.$textbox[0].getBoundingClientRect().top - scene.$bg[0].getBoundingClientRect().top}px`,
            backgroundColor: "black",
            opacity: 0,
            zIndex: 1
        })
        scene.$bgEffect.append(black_cover)
        black_cover.animate({opacity: 1},{delay: 0 * frame, duration: 8 * frame, fill: "forwards"})
        black_cover.animate({opacity: 0},{delay: 8 * frame, duration: 8 * frame, fill: "forwards"})

        black_cover.animate({opacity: 1},{delay: 52 * frame, duration: 8 * frame, fill: "forwards"})
        black_cover.animate({opacity: 0},{delay: 60 * frame, duration: 8 * frame, fill: "forwards"})

        scene.showEffect('g3_crunch',{
            x: defender.x - 25,
            y: defender.y + (defender.z==0?0:15) + 25,
            z: defender.z,
            time: 20 * frame,
            rotate: -45, opacity: 0.6
        },{
            x: defender.x - 5,
            y: defender.y + (defender.z==0?0:15) + 5,
            time: 25 * frame,
        },"linear","",{imageRendering: "pixelated", zIndex: defender.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect('g3_crunch',{
            x: defender.x - 5,
            y: defender.y + (defender.z==0?0:15) + 5,
            z: defender.z,
            time: 25 * frame,
            rotate: -45, opacity: 0.6
        },{
            x: defender.x - 25,
            y: defender.y + (defender.z==0?0:15) + 25,
            time: 30 * frame,
        },"linear","",{imageRendering: "pixelated", zIndex: defender.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect('g3_crunch',{
            x: defender.x + 25,
            y: defender.y + (defender.z==0?0:15) - 25,
            z: defender.z,
            time: 20 * frame,
            rotate: 135, opacity: 0.6
        },{
            x: defender.x + 5,
            y: defender.y + (defender.z==0?0:15) - 5,
            time: 25 * frame,
        },"linear","",{imageRendering: "pixelated", zIndex: defender.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect('g3_crunch',{
            x: defender.x + 5,
            y: defender.y + (defender.z==0?0:15) - 5,
            z: defender.z,
            time: 25 * frame,
            rotate: 135, opacity: 0.6
        },{
            x: defender.x + 25,
            y: defender.y + (defender.z==0?0:15) - 25,
            time: 30 * frame,
        },"linear","",{imageRendering: "pixelated", zIndex: defender.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect("g3_impact",{
            x: defender.x - 5,
            y: defender.y + (defender.z==0?0:15),
            z: defender.z,
            time: 27 * frame
        },{time: 32 * frame},"","",{imageRendering: "pixelated", zIndex: defender.z == 0?8:3}).animate({opacity: 0},0)

        defender.delay(29 * frame).anim({y: defender.y-15,time: 2 * frame}).anim({y: defender.y,time: 1 * frame}).anim({y: defender.y-15,time: 1 * frame}).anim({y: defender.y,time: 1 * frame})

        scene.showEffect('g3_crunch',{
            x: defender.x + 25,
            y: defender.y + (defender.z==0?0:15) + 25,
            z: defender.z,
            time: 35 * frame,
            rotate: 45, opacity: 0.6
        },{
            x: defender.x + 5,
            y: defender.y + (defender.z==0?0:15) + 5,
            time: 40 * frame,
        },"linear","",{imageRendering: "pixelated", zIndex: defender.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect('g3_crunch',{
            x: defender.x + 5,
            y: defender.y + (defender.z==0?0:15) + 5,
            z: defender.z,
            time: 40 * frame,
            rotate: 45, opacity: 0.6
        },{
            x: defender.x + 25,
            y: defender.y + (defender.z==0?0:15) + 25,
            time: 45 * frame,
        },"linear","",{imageRendering: "pixelated", zIndex: defender.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect('g3_crunch',{
            x: defender.x - 25,
            y: defender.y + (defender.z==0?0:15) - 25,
            z: defender.z,
            time: 35 * frame,
            rotate: -135, opacity: 0.6
        },{
            x: defender.x - 5,
            y: defender.y + (defender.z==0?0:15) - 5,
            time: 40 * frame,
        },"linear","",{imageRendering: "pixelated", zIndex: defender.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect('g3_crunch',{
            x: defender.x - 5,
            y: defender.y + (defender.z==0?0:15) - 5,
            z: defender.z,
            time: 40 * frame,
            rotate: -135, opacity: 0.6
        },{
            x: defender.x - 25,
            y: defender.y + (defender.z==0?0:15) - 25,
            time: 45 * frame,
        },"linear","",{imageRendering: "pixelated", zIndex: defender.z == 0?8:3}).animate({opacity: 0},0)
        scene.showEffect("g3_impact",{
            x: defender.x + 5,
            y: defender.y + (defender.z==0?0:15),
            z: defender.z,
            time: 42 * frame
        },{time: 47 * frame},"","",{imageRendering: "pixelated", zIndex: defender.z == 0?8:3}).animate({opacity: 0},0)
        defender.delay(6 * frame).anim({y: defender.y-15,time: 2 * frame}).anim({y: defender.y,time: 1 * frame}).anim({y: defender.y-15,time: 1 * frame}).anim({y: defender.y,time: 1 * frame})

        scene.wait(68 * frame)
    }
}

BattleMoveAnims.pursuit = {
    anim(scene,[attacker,defender]){
        scene.backgroundEffect(`url('${sourceURL}fx/move-bg-dark.png')`, 28 * frame, 1, 8 * frame, 0, {imageRendering: "pixelated", backgroundSize: "cover"});
        black_cover = document.createElement("div")
        Object.assign(black_cover.style, {
            position: "absolute",
            width: `${scene.$rightbar[0].getBoundingClientRect().left - scene.$leftbar[0].getBoundingClientRect().right}px`,
            left: `${scene.$leftbar[0].getBoundingClientRect().right}px`,
            height: `${scene.$textbox[0].getBoundingClientRect().top - scene.$bg[0].getBoundingClientRect().top}px`,
            backgroundColor: "black",
            opacity: 0,
            zIndex: 1
        })
        scene.$bgEffect.append(black_cover)
        black_cover.animate({opacity: 1},{delay: 0 * frame, duration: 8 * frame, fill: "forwards"})
        black_cover.animate({opacity: 0},{delay: 8 * frame, duration: 8 * frame, fill: "forwards"})

        black_cover.animate({opacity: 1},{delay: 28 * frame, duration: 8 * frame, fill: "forwards"})
        black_cover.animate({opacity: 0},{delay: 36 * frame, duration: 8 * frame, fill: "forwards"})

        scene.showEffect('g3_impact',{
            x: defender.x,
            y: defender.y + (defender.z==0?0:15),
            z: defender.z,
            time: 18 * frame,
        },{time: 24 * frame},"linear","",{imageRendering: "pixelated", zIndex: defender.z == 0?8:3}).animate({opacity: 0},0)

        defender.delay(19 * frame)
        for (var i = 0; i<3;i++) defender.anim({x: defender.behindx(5),time: frame}).anim({x: defender.x,time: frame})
        scene.wait(42 * frame)
    }
}

BattleEffects.g3_sparkle1 = {
    url: sourceURL + "fx/moves/sparkle1.png",
    w: 32, h: 31
}
BattleEffects.g3_sparkle2 = {
    url: sourceURL + "fx/moves/sparkle2.png",
    w: 32, h: 31
}
BattleEffects.g3_sparkle3 = {
    url: sourceURL + "fx/moves/sparkle3.png",
    w: 32, h: 31
}
BattleEffects.g3_sparkle4 = {
    url: sourceURL + "fx/moves/sparkle4.png",
    w: 32, h: 31
}
BattleEffects.g3_sparkle5 = {
    url: sourceURL + "fx/moves/sparkle5.png",
    w: 32, h: 31
}
BattleEffects.g3_sparkle6 = {
    url: sourceURL + "fx/moves/sparkle6.png",
    w: 32, h: 31
}
BattleEffects.g3_sparkle7 = {
    url: sourceURL + "fx/moves/sparkle7.png",
    w: 32, h: 31
}
BattleEffects.g3_sparkle8 = {
    url: sourceURL + "fx/moves/sparkle8.png",
    w: 32, h: 31
}

function sparkle(scene,x,y,z,t0){
    for (var i=1;i<9;i++){
        scene.showEffect("g3_sparkle"+i,{
            x: x,
            y: y - 5*i,
            z: z,
            time: (t0 - 3 + 3*i) * frame
        },{
            y: y - 5 - 5*i,
            time: (t0 + 3*i) * frame
        },"linear","",{imageRendering: "pixelated", zIndex: z == 0?8:3}).animate({opacity: 0},0)
    }
}

BattleMoveAnims.wish = {
    anim(scene, [attacker]){
        scene.backgroundEffect('black',108 * frame, 0.6, 10 * frame)

        scene.showEffect("g3_star1",{
            x: 250,
            y: 130,
            z: 0,
            time: 11 * frame
        },{
            x: - 100,
            y: 20,
            time: 39 * frame
        },"linear","",{imageRendering: "pixelated", zIndex: 8}).animate({opacity: 0},0)

        sparkle(scene, attacker.x - 15, attacker.y + (attacker.z==200?15:0) + 10, attacker.z, 70)
        sparkle(scene, attacker.x + 15, attacker.y + (attacker.z==200?15:0) + 10, attacker.z, 75)
        scene.wait(120 * frame)
    },

    residualAnim(scene, [attacker]) {
        console.log(attacker)
        scene.backgroundEffect('black',70 * frame, 0.6, 10 * frame)
        sparkle(scene, attacker.x - 15, attacker.y + (attacker.z==200?15:0) + 10, attacker.z, 10)
        sparkle(scene, attacker.x + 15, attacker.y + (attacker.z==200?15:0) + 10, attacker.z, 15)
        healEffect(scene,attacker, 45)
        scene.wait(80 * frame)
    }
}

BattleMoveAnims.beatup = {
    anim(scene, [attacker,defender]){
        defender.delay(frame)
        for (var i=0;i<5;i++) defender.anim({x: defender.behindx(5),time: frame}).anim({x: defender.x,time: frame})
        
        scene.showEffect("g3_impact",{
            x: defender.x - 15,
            y: defender.y + (defender.z==200?15:0) + 15,
            z: defender.z,
            time: 0, opacity: 0.8
        }, {time: 4 * frame}, "","",{imageRendering: "pixelated", zIndex: defender.z==0 ? 8:3}).animate({opacity:0},0)
        scene.showEffect("g3_fist",{
            x: defender.x - 15,
            y: defender.y + (defender.z==200?15:0) + 10,
            z: defender.z,
            time: 0
        }, {time: 4 * frame}, "","",{imageRendering: "pixelated", zIndex: defender.z==0 ? 8:3}).animate({opacity:0},0)
        scene.showEffect("g3_impact",{
            x: defender.x + 5,
            y: defender.y + (defender.z==200?15:0) - 5,
            z: defender.z,
            time: 5 * frame, opacity: 0.8
        }, {time: 9 * frame}, "","",{imageRendering: "pixelated", zIndex: defender.z==0 ? 8:3}).animate({opacity:0},0)
        scene.showEffect("g3_fist",{
            x: defender.x - 15,
            y: defender.y + (defender.z==200?15:0) - 10,
            z: defender.z,
            time: 5 * frame
        }, {time: 9 * frame}, "","",{imageRendering: "pixelated", zIndex: defender.z==0 ? 8:3}).animate({opacity:0},0)
    }
}

BattleMoveAnims.drillpeck = {
    anim(scene, [attacker, defender]) {
        attacker.delay(2 * frame).anim({x: attacker.behindx(20), time: 4 * frame})
        attacker.$el[0].animate(addPXtocss(scene.pos({y: attacker.y - 20, x: attacker.behindx(20), z: attacker.z ,rotate:attacker.z==0?30:-30},attacker.sp)), {duration: 2 * frame, delay: 6 * frame, fill: "forwards"})
        attacker.$el[0].animate(addPXtocss(scene.pos({y: attacker.y - 20, x: attacker.x, z: attacker.z ,rotate:attacker.z==0?30:-30},attacker.sp)), {duration: 2 * frame, delay: 8 * frame, fill: "forwards"})

        defender.delay(10 * frame).anim({x:defender.behindx(10), time: frame}).delay(frame)
        for (var i = 0; i<7;i++) defender.anim({x:defender.behindx(-10), time: frame}).anim({x:defender.behindx(10), time: frame})
        defender.anim({time: frame})

        for (var t=0;t<9; t++) { //customised the animation here (added a last hit to complete the circle)
            scene.showEffect("g3_impact",{
                x: defender.x - 20 * Math.sin(t/8 * 2 * Math.PI),
                y: defender.y + (defender.z==200?15:0) + 20 * Math.cos(t/8 * 2 * Math.PI),
                z: defender.z,
                scale: 0.8,
                time: (11 + 2 * t) * frame
            }, {time: (17 + 2 * t) * frame},"","",{imageRendering: "pixelated", zIndex: defender.z==0 ? 8:3}).animate({opacity:0},0)
        }

        attacker.$el[0].animate({...addPXtocss(scene.pos({y: attacker.y, x: attacker.x, z: attacker.z},attacker.sp)),rotate: "0deg"}, {duration: 2 * frame, delay: 29 * frame, fill: "forwards"})
        scene.wait(35 * frame)
    }
}

BattleMoveAnims.doubleedge = {
    anim (scene, [attacker, defender]) {
        animTint(1,attacker.$el,scene,0).delay(5 * frame).animate({opacity: 0.5}, frame).animate({opacity: 0}, frame).delay(3 * frame).animate({opacity: 0.5}, frame).animate({opacity: 0}, frame)
        animTint(1,scene.$bg,scene,0).delay(36 * frame).animate({opacity: 1}, 0).delay(6 * frame).animate({opacity: 0}, 12 * frame)

        attacker.delay(20 * frame)
        for (var i=0;i<2;i++) attacker.anim({x: attacker.behindx(-20), y: attacker.y - 10, time: 2 * frame}).anim({y: attacker.y - 20, time: 2 * frame}).anim({x: attacker.behindx(20), y: attacker.y - 10, time: 2 * frame}).anim({time: 2 * frame})
        attacker.anim({x: attacker.behindx(-40), y: attacker.y - (attacker.z==0?5:0), time: 2 * frame})

        defender.delay(40 * frame).anim({x: defender.behindx(40), time: 2 * frame})

        scene.showEffect("g3_impact",{
            x: defender.x,
            y: defender.y + (defender.z==200?15:0),
            z: defender.z,
            time: 40 * frame
        }, {time: 44 * frame},"","",{imageRendering: "pixelated", zIndex: defender.z==0 ? 8:3}).animate({opacity:0},0)

        attacker.$el[0].animate({rotate: "-10deg"}, {delay: 45 * frame, duration: 4 * frame, fill: 'forwards'})
        defender.$el[0].animate({rotate: "10deg"}, {delay: 45 * frame, duration: 4 * frame, fill: 'forwards'})
        attacker.delay(6*frame)
        defender.delay(2*frame)
        for (var t=0; t<5; t++){
            attacker.anim({x: attacker.behindx(-35), y: attacker.y - (attacker.z==0?5:0), time: frame}).anim({x: attacker.behindx(-45), y: attacker.y - (attacker.z==0?5:0), time: frame})
            defender.anim({x: defender.behindx(35), y: defender.y - (defender.z==0?5:0), time: frame}).anim({x: defender.behindx(45), y: defender.y - (defender.z==0?5:0), time: frame})
        }
        attacker.anim({x: attacker.behindx(-40), y: attacker.y - (attacker.z==0?10:0), time: frame})
        defender.anim({x: defender.behindx(40), y: defender.y - (defender.z==0?5:0), time: frame})

        attacker.$el[0].animate({rotate: "-20deg"}, {delay: 55 * frame, duration: 4 * frame})
        attacker.$el[0].animate({rotate: "0deg"}, {delay: 59 * frame, duration: 0, fill: "forwards"})
        attacker.delay(4 * frame).anim({time: 2 * frame})

        defender.$el[0].animate({rotate: "20deg"}, {delay: 55 * frame, duration: 4 * frame})
        defender.$el[0].animate({rotate: "0deg"}, {delay: 59 * frame, duration: 0, fill: "forwards"})
        defender.delay(6 * frame).anim({time: 6 * frame})
        
        scene.wait(75 * frame)
    }
}

BattleMoveAnims.curse = {
    anim(scene,[attacker]){
        attacker.delay(5 * frame).anim({x: attacker.behindx(-20), time: 5 * frame}, "").delay(3 * frame).anim({x: attacker.behindx(15), time: 8 * frame}, "").delay(3 * frame).anim({x: attacker.behindx(-20), time: 8 * frame}, "").delay(3 * frame).anim({time: 5 * frame}, "")
        scene.wait(40 * frame)
    }
}

BattleEffects.g3_woworb1 = {
    url: sourceURL + "fx/moves/wow-orb1.png",
    w: 16, h: 16
}
BattleEffects.g3_woworb2 = {
    url: sourceURL + "fx/moves/wow-orb2.png",
    w: 16, h: 16
}
BattleEffects.g3_woworb3 = {
    url: sourceURL + "fx/moves/wow-orb3.png",
    w: 16, h: 16
}
BattleEffects.g3_woworb4 = {
    url: sourceURL + "fx/moves/wow-orb4.png",
    w: 16, h: 16
}
BattleEffects.g3_woworb5 = {
    url: sourceURL + "fx/moves/wow-orb5.png",
    w: 16, h: 16
}
BattleEffects.g3_woworb6 = {
    url: sourceURL + "fx/moves/wow-orb6.png",
    w: 16, h: 16
}
BattleEffects.g3_woworb7 = {
    url: sourceURL + "fx/moves/wow-orb7.png",
    w: 16, h: 16
}
BattleEffects.g3_wowfire1 = {
    url: sourceURL + "fx/moves/wow-fire1.png",
    w: 32, h: 32
}
BattleEffects.g3_wowfire2 = {
    url: sourceURL + "fx/moves/wow-fire2.png",
    w: 32, h: 32
}
BattleEffects.g3_wowfire3 = {
    url: sourceURL + "fx/moves/wow-fire3.png",
    w: 32, h: 32
}
BattleEffects.g3_wowfire4 = {
    url: sourceURL + "fx/moves/wow-fire4.png",
    w: 32, h: 32
}
BattleMoveAnims.willowisp = {
    anim(scene, [attacker, defender]) {
        objects = []
        for (var i=0;i<4;i++){
            $effect = $(`<img src=""/>`);
            $effect.css({
                display: "none",
                imageRendering: "pixelated",
                zIndex: 8,
                position: "absolute"
            })
            scene.$fx.append($effect);
            $effect = scene.$fx.children().last();
            objects.push($effect)
        }

        function f(x) {
            if (x<0.1) return x/4
            return (x-0.1)*9.75/9 + 0.025
        }
        console.log(scene)

        const t0 = performance.now()
        function tick(now) {
            
            const t = (now - t0)/frame - 10
            if (t<0) {
                requestAnimationFrame(tick)
                return
            }
            
            for (var i=0;i<objects.length;i++) {
                var ti = t - [0,3,5,8][i]
                var $effect = objects[i]
                var effect = BattleEffects["g3_woworb"+(i==0?(Math.round(t/2)%4)+1:Math.min((i+4),6))] //the 1st orb cycles, the last 2 are the same and the n°7 is unused??
                $effect[0].src = effect.url
                var T = f(ti/75)
                var pos0 = {
                    x: defender.x * T + attacker.x * (1-T),
                    y: (defender.y + defender.z==0?0:15) * T + (attacker.y + (attacker.y==0?-10:15) + 10) * (1-T),
                    z: defender.z * T + attacker.z * (1-T),
                }
                $effect.css({
                    ...scene.pos({
                        x: pos0.x + 10 * Math.sin(T*3 * 2 * Math.PI),
                        y: pos0.y,
                        z: pos0.z
                    },effect),
                    display: ((ti >= 0) & (ti < 68)) ? "block" : "none"
                })
            }

            if (t<80) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)

        defender.delay(87 * frame)
        for (var i=0;i<6;i++) defender.anim({x: defender.behindx(-5), time: frame}).anim({x: defender.behindx(10), time: frame})
        defender.anim({time: frame})

        y0 = defender.y + (defender.z==200?10:-10)
        for (var i = 0; i<6;i++){
            scene.showEffect("g3_wowfire1",{
                x: defender.behindx(4 * Math.cos((i/6) *2*Math.PI)) ,
                y: y0 - 4 * Math.sin((i/6) *2*Math.PI)/10,
                z: defender.z,
                scale: 1.4,
                time: 87 * frame
            }, {
                x: defender.behindx(8 * Math.cos((i/6) *2*Math.PI)) ,
                y: y0 - 8 * Math.sin((i/6) *2*Math.PI)/10,
                time: 89 * frame
            },"","",{imageRendering: "pixelated", zIndex: (defender.z==0 ? 5:0)+(Math.cos((i/6) *2*Math.PI)<0?3:2)}).animate({opacity:0},0)

            scene.showEffect("g3_wowfire2",{
                x: defender.behindx(12 * Math.cos((i/6) *2*Math.PI)) ,
                y: y0 - 12 * Math.sin((i/6) *2*Math.PI)/10,
                z: defender.z,
                scale: 1.4,
                time: 89 * frame
            }, {
                x: defender.behindx(16 * Math.cos((i/6+1/12) *2*Math.PI)) ,
                y: y0 + 16 * Math.sin((i/6+1/12) *2*Math.PI)/10,
                time: 91 * frame
            },"","",{imageRendering: "pixelated", zIndex: (defender.z==0 ? 5:0)+(Math.cos((i/6 +1/12) *2*Math.PI)<0?3:2)}).animate({opacity:0},0)

            scene.showEffect("g3_wowfire3",{
                x: defender.behindx(16 * Math.cos((i/6 + 1/12) *2*Math.PI)) ,
                y: y0 - 16 * Math.sin((i/6 + 1/12) *2*Math.PI)/10,
                z: defender.z,
                scale: 1.4,
                time: 91 * frame
            }, {
                x: defender.behindx(26 * Math.cos((i/6+5/12) *2*Math.PI)) ,
                y: y0 - 26 * Math.sin((i/6+5/12) *2*Math.PI)/10,
                time: 94 * frame
            },"","",{imageRendering: "pixelated", zIndex: (defender.z==0 ? 5:0)+(Math.cos((i/6+5/12) *2*Math.PI)<0?3:2)}).animate({opacity:0},0)

            scene.showEffect("g3_wowfire4",{
                x: defender.behindx(26 * Math.cos((i/6 + 5/12) *2*Math.PI)) ,
                y: y0 - 26 * Math.sin((i/6 + 5/12) *2*Math.PI)/10,
                z: defender.z,
                scale: 1.4,
                time: 94 * frame
            }, {
                x: defender.behindx(30 * Math.cos((i/6+6/12) *2*Math.PI)) ,
                y: y0 - 30 * Math.sin((i/6+6/12) *2*Math.PI)/10,
                time: 96 * frame
            },"","",{imageRendering: "pixelated", zIndex: (defender.z==0 ? 5:0)+(Math.cos((i/6+6/12) *2*Math.PI)<0?3:2)}).animate({opacity:0},0)
        }
        

        scene.wait(100 * frame)
    }
}

// BattleMoveAnims.knockoff 
// BattleOtherAnims.itemoff
