var sourceURL = document.currentScript.dataset.sourceURL
if (!sourceURL) console.error("FUCK")

    

var HEALTHBAR = undefined
try {HEALTHBAR = PokemonSprite.prototype.getStatbarHTML} catch {console.error("function getStatbarHTML not found")}

if (HEALTHBAR){
    PokemonSprite.prototype.getStatbarHTML = function (pokemon){
        var original = HEALTHBAR.apply(this,arguments)

        var buf = original

        // What will be returned by getStatbarHTML : 
        // <div class="statbar rstatbar leftstatbar" style="display: none">
        //     <strong>Slither Wing <small>L81</small></strong>
        //     <div class="hpbar">
        //         <div class="hptext"></div>
        //         <div class="hptextborder"></div>
        //         <div class="prevhp"><div class="hp"></div>
        //     </div>
        //     <div class="status"></div>
        // </div>

        var el = document.createElement("div")
        el.innerHTML = buf
        var bg = el.childNodes[0]
        var hpbar = el.getElementsByClassName("hpbar")[0]
        hpbar.innerHTML = ''
        var percent = document.createElement("div")
        percent.className = "hptext"
        percent.innerHTML = pokemon.hp + "%"
        var status = document.createElement("div")
        status.className = "statusbar"
        var stats = document.createElement("div")
        stats.className = "statsbar"

        if (bg.className.includes("rstatbar")){
            //your side
            bg.style.backgroundImage = `url(${sourceURL}fx/battleinfo-custom${pokemon.level==100?"-lvl100":""}.png)`
            bg.style.width = "218px"
            bg.style.height = "77px"
            bg.style.top = "167px"
            bg.style.left = "385px"

            hpbar.style.left = "104.4px"
            hpbar.style.top = "37px"
            hpbar.dataset.pixWidth = 2.2
            hpbar.dataset.maxWidth = 104.3
            hpbar.style.height = "6.4px"

            percent.style.right = "18px"

            status.style.left = "34px"
            status.style.top = "33px"

            stats.style.left = "26px"
            stats.style.bottom = "1px"
        }
        else {
            //opp's side
            bg.style.backgroundImage = `url(${sourceURL}fx/battleinfo-customopp${pokemon.level==100?"-lvl100":""}.png)`
            bg.style.width = "218px"
            bg.style.height = "77px"
            bg.style.top = "25px"
            bg.style.left = "130px"
            
            // bg.style.backgroundImage = "url("+sourceURL+"fx/battleinfo-opp.png)"
            // bg.style.width = "206px"
            // bg.style.height = "58px"
            // bg.style.top = "36px"
            // bg.style.left = "130px"

            hpbar.style.left = "91.4px"
            hpbar.style.top = "36.5px"
            hpbar.dataset.pixWidth = 2.1
            hpbar.dataset.maxWidth = 104.2
            hpbar.style.height = "6.4px"

            percent.style.right = "31px"

            status.style.left = "19px"
            status.style.top = "33px"

            stats.style.left = "9px"
            stats.style.bottom = "0px"
        }
        bg.style.backgroundSize = "contain"
        bg.style.imageRendering = "pixelated"
        bg.style.zIndex = 10
        bg.style.backgroundRepeat = "no-repeat"

        hpbar.style.background = "none"
        hpbar.style.border = "none"
        hpbar.style.position = "absolute"
        hpbar.style.imageRendering = "pixelated"
        hpbar.style.borderRadius = "0px"
        hpbar.style.backgroundRepeat = "repeat-x"
        hpbar.style.backgroundSize = "contain"
        hpbar.style.padding = "0"
        

        percent.style.position = "absolute",
        percent.style.top = "48px"

        status.style.fontSize = "9pt"
        status.style.position = "absolute"

        stats.style.fontSize = "5.8pt"
        stats.style.position = "absolute"
        
        hpbar.after(percent)
        percent.after(stats)
        percent.after(status)
        buf = el.innerHTML
        return buf
    }
}
var HEALTHBARRESET = undefined
try {HEALTHBARRESET = PokemonSprite.prototype.resetStatbar} catch {console.error("function resetStatbar not found")}
if (HEALTHBARRESET){
    PokemonSprite.prototype.resetStatbar = function(pokemon, startHidden = false){
        if (this.$statbar) {
			this.$statbar.remove();
			this.$statbar = null
		}
		this.updateStatbar(pokemon, true);
        if (!startHidden && this.$statbar) {
			this.$statbar.css({
				display: 'block',
				opacity: 1,
			});
        }
        
    }
}

PokemonSprite.prototype.updateStatbar = function(pokemon){
    if (!this.scene.animating) return;
        if (!pokemon.isActive()) {
            if (this.$statbar) this.$statbar.hide();
            return;
        }
        if (!this.$statbar) {
            this.$statbar = $(this.getStatbarHTML(pokemon));
            this.scene.$stat.append(this.$statbar);
            updatePrevhp = true;
        }
        let hpcolor;
        if (updatePrevhp || updateHp) {
            hpcolor = BattleScene.getHPColor(pokemon);
            let $hp = this.$statbar.find('.hpbar');
            let w = Math.round((pokemon.hp / pokemon.maxhp) * 48 ) * $hp[0].dataset.pixWidth
            if (pokemon.hp == pokemon.maxhp) w = $hp[0].dataset.maxWidth

            $hp[0].style.width = String(w)+"px"
            if (hpcolor === 'g') $hp[0].style.backgroundImage="url("+sourceURL+"fx/healthbar-g.png)"
            else if (hpcolor === 'y') $hp[0].style.backgroundImage="url("+sourceURL+"fx/healthbar-y.png)"
            else $hp[0].style.backgroundImage="url("+sourceURL+"fx/healthbar-r.png)"
            this.updateHPText(pokemon);
        }

        
        let status = '';
        if (pokemon.status === 'brn') {
            status += '<span class="brn">BRN</span> ';
        } else if (pokemon.status === 'psn') {
            status += '<span class="psn">PSN</span> ';
        } else if (pokemon.status === 'tox') {
            status += '<span class="psn">TOX</span> ';
        } else if (pokemon.status === 'slp') {
            status += '<span class="slp">SLP</span> ';
        } else if (pokemon.status === 'par') {
            status += '<span class="par">PAR</span> ';
        } else if (pokemon.status === 'frz') {
            status += '<span class="frz">FRZ</span> ';
        }
        let statusbar = this.$statbar.find('.statusbar');
        statusbar[0].innerHTML = status;
        status=''

        if (pokemon.terastallized) {
            status += `<img src="${Dex.resourcePrefix}sprites/types/${encodeURIComponent(pokemon.terastallized)}.png" alt="${pokemon.terastallized}" class="pixelated" /> `;
        } else if (pokemon.volatiles.typechange?.[1]) {
            const types = pokemon.volatiles.typechange[1].split('/');
            for (const type of types) {
                status += '<img src="' + Dex.resourcePrefix + 'sprites/types/' + encodeURIComponent(type) + '.png" alt="' + type + '" class="pixelated" /> ';
            }
        }
        if (pokemon.volatiles.typeadd) {
            const type = pokemon.volatiles.typeadd[1];
            status += '+<img src="' + Dex.resourcePrefix + 'sprites/types/' + type + '.png" alt="' + type + '" class="pixelated" /> ';
        }
        for (const stat in pokemon.boosts) {
            if (pokemon.boosts[stat]) {
                status += '<span class="' + pokemon.getBoostType(stat) + '">' + pokemon.getBoost(stat) + '</span> ';
            }
        }

        for (let i in pokemon.volatiles) {
            status += PokemonSprite.getEffectTag(i);
        }
        for (let i in pokemon.turnstatuses) {
            if (i === 'roost' && !pokemon.getTypeList().includes('Flying')) continue;
            status += PokemonSprite.getEffectTag(i);
        }
        for (let i in pokemon.movestatuses) {
            status += PokemonSprite.getEffectTag(i);
        }
        let statsbar = this.$statbar.find('.statsbar')
        statsbar[0].innerHTML = status;
}


let listOfBG=['bg-grass1.png']

BattleScene.prototype.reset = function(){
    this.updateGen();
    
    // Log frame
    /////////////

    if (this.$options) {
        this.log.reset();
    } else {
        this.$options = $('<div class="battle-options"></div>');
        $(this.log.elem).prepend(this.$options);
    }

    // Battle frame
    ///////////////

    this.$frame.empty();
    this.$battle=$('<div class="innerbattle"></div>')
    this.$frame.append(this.$battle);

    this.$bg = $('<div class="backdrop" style="background:url('+sourceURL+'fx/'+this.backdropImage+') no-repeat;display:block; top: 0px; left: -127px; width: 994px; background-size: contain; image-rendering: pixelated; opacity: 1;"></div>');
    this.$textbox=$('<div class="pixelated" style="display:block;opacity:1;position:absolute;background-image:url('+sourceURL+'fx/battle-text-box.png); left:100px; top:254px; width:540px; background-repeat:no-repeat;height:107px;background-size:contain; image-rendering:pixelated;z-index:10"></div>')
    this.$terrain = $('<div class="weather"></div>');
    this.$weather = $('<div class="weather"></div>');
    this.$bgEffect = $('<div></div>');
    this.$sprite = $('<div></div>');

    this.$sprites = [$('<div></div>'), $('<div></div>')];
    this.$spritesFront = [$('<div></div>'), $('<div></div>')];
    this.sideConditions = [{}, {}];

    this.$sprite.append(this.$sprites[1]);
    this.$sprite.append(this.$spritesFront[1]);
    this.$sprite.append(this.$spritesFront[0]);
    this.$sprite.append(this.$sprites[0]);

    this.$stat = $(eHTML`<div role="complementary" aria-label="${TL`Active Pokémon`}"></div>`);
    this.$fx = $('<div class="fx"></div>');
    this.$leftbar = $(eHTML`<div class="leftbar" role="complementary" aria-label="${TL`Your team`}"></div>`);
    this.$rightbar = $(eHTML`<div class="rightbar" role="complementary" aria-label="${TL`Opponent's team`}"></div>`);
    this.$turn = $('<div></div>');
    this.$messagebar = $('<div class="messagebar message" style="z-index:1"></div>');
    this.$delay = $('<div></div>');
    this.$hiddenMessage = $('<div class="message" style="position:absolute;display:block;visibility:hidden"></div>');
    this.$tooltips = $('<div class="tooltips"></div>');

    this.$battle.append(this.$bg);
    this.$battle.append(this.$textbox)
    this.$battle.append(this.$terrain);
    this.$battle.append(this.$weather);
    this.$battle.append(this.$bgEffect);
    this.$battle.append(this.$sprite);
    this.$battle.append(this.$stat);
    this.$battle.append(this.$fx);
    this.$battle.append(this.$leftbar);
    this.$battle.append(this.$rightbar);
    this.$battle.append(this.$turn);
    this.$battle.append(this.$messagebar);
    this.$battle.append(this.$delay);
    this.$battle.append(this.$hiddenMessage);
    this.$battle.append(this.$tooltips);
    this.$battle.append($(`<img class = "statChangeMix" src = "${sourceURL}fx/stat_mix.png" style = "image-rendering: pixelated" hidden>`))
    
    // this.$battle[0].parentElement.parentElement.parentElement.style.width = "740px"
    // this.$battle[0].parentElement.style.width = "740px"
    // var battle = this.$battle[0].parentElement.parentElement.parentElement.parentElement
    // battle.getElementsByClassName("battle-log hasuserlist")[0].style.left="740px"
    // battle.getElementsByClassName("chat-log-add")[0].style.left="740px"
    // battle.getElementsByClassName("userlist userlist-hidden")[0].style.left="740px"


    if (!this.animating) {
        this.$battle.append('<div class="seeking"><strong>seeking...</strong></div>');
    }

    this.messagebarOpen = false;
    this.timeOffset = 0;
    this.pokemonTimeOffset = 0;
    this.curTerrain = '';
    this.curWeather = '';

    this.log.battleParser.perspective = this.battle.mySide.sideid;

    this.resetSides(true);

}
CHOOSEBATTLELAYOUT = undefined
try {CHOOSEBATTLELAYOUT = PS.chooseBattleLayout} catch {console.error("Function chooseBattleLayout not found!")}
if (CHOOSEBATTLELAYOUT){
    PS.chooseBattleLayout = function(width, height, preference) {
        let scale = Math.min(1, width / 740, height / 360);
        const uncappedBattleHeight = Math.round(360 * scale);
        let layout = width > 780 ? 'side-by-side' :
            height < uncappedBattleHeight + 150 ? 'scrolling' : 'top-and-bottom';

        const preferredLayout = preference?.replace(/-overlay$/, '');
        if (preferredLayout) {
            layout = preferredLayout;
        }
        if (layout === 'side-by-side' && width >= 500) {
            scale = Math.min(scale, Math.max(0, width - 180) / 740);
        } else if (layout === 'top-and-bottom') {
            scale = Math.min(scale, Math.max(0, height - 180) / 360);
        }

        const battleHeight = Math.round(360 * scale);
        const battleWidth = Math.round(740 * scale);
        let overlayControls = height < battleHeight + 180;
        if (preferredLayout) {
            overlayControls = !!preference?.endsWith('-overlay');
        }
        return { layout, battleHeight, battleWidth, overlayControls };
    }
}

BattleScene.prototype.rebuildTooltips = function() {
    let tooltipBuf = '';
    const tooltips = this.battle.gameType === 'freeforall' ? {
        // FFA battles are visually rendered as triple battle with the center slots empty
        // so we swap the 2nd and 3rd tooltips on each side
        p2b: { top: 70, left: 250, width: 80, height: 100, tooltip: 'activepokemon|1|1' },
        p2a: { top: 90, left: 390, width: 100, height: 100, tooltip: 'activepokemon|1|0' },
        p1a: { top: 200, left: 130, width: 120, height: 160, tooltip: 'activepokemon|0|0' },
        p1b: { top: 200, left: 350, width: 150, height: 160, tooltip: 'activepokemon|0|1' },
    } : {
        p2c: { top: 70, left: 250, width: 80, height: 100, tooltip: 'activepokemon|1|2' },
        p2b: { top: 85, left: 320, width: 90, height: 100, tooltip: 'activepokemon|1|1' },
        p2a: { top: 40, left: 430, width: 140, height: 140, tooltip: 'activepokemon|1|0' },
        p1a: { top: 132, left: 195, width: 120, height: 160, tooltip: 'activepokemon|0|0' },
        p1b: { top: 132, left: 300, width: 150, height: 160, tooltip: 'activepokemon|0|1' },
        p1c: { top: 132, left: 400, width: 150, height: 160, tooltip: 'activepokemon|0|2' },
    };
    for (const id in tooltips) {
        let layout = tooltips[id];
        tooltipBuf += `<div class="has-tooltip" style="position:absolute;`;
        tooltipBuf += `top:${layout.top}px;left:${layout.left}px;width:${layout.width}px;height:${layout.height}px;z-index:10`;
        tooltipBuf += `" data-id="${id}" data-tooltip="${layout.tooltip}" data-ownheight="1"></div>`;
    }
    this.$tooltips.html(tooltipBuf);
}


BattleScene.prototype.updateGen = function (){
    let gen = this.battle.gen;
    if (Dex.prefs('nopastgens')) gen = 6;
    if (Dex.prefs('bwgfx') && gen > 5) gen = 5;
    this.gen = gen;
    this.activeCount = this.battle.nearSide?.active.length || 1;

    const rated = this.battle.rated;
    let bg
    if (typeof rated === 'string' && rated.startsWith("Smogon Premier League")) {
        if (gen <= 1) bg = 'fx/bg-gen1-spl.png';
        else if (gen <= 2) bg = 'fx/bg-gen2-spl.png';
        else if (gen <= 3) bg = 'fx/bg-gen3-spl.png';
        else if (gen <= 4) bg = 'fx/bg-gen4-spl.png';
        else bg = 'fx/bg-spl.png';
        this.setBgm(-101);
    } else if (typeof rated === 'string' && rated.startsWith('National Pokemon Association')) {
        bg = 'fx/bg-npa.png';
        this.setBgm(-101);
    } else if (typeof rated === 'string' && rated.startsWith('World Cup of Pokemon')) {
        bg = 'fx/bg-wcop.png';
        this.setBgm(-101);
    } else if (typeof rated === 'string' && rated.startsWith('Smogon Champions League')) {
        bg = 'fx/bg-scl.png';
        this.setBgm(-101);
    } else {
        if (gen <= 1) bg = 'fx/bg-gen1.png?';
        else if (gen <= 2) bg = 'fx/bg-gen2.png?';
        else if (gen <= 3) bg = `fx/${BattleBackdropsThree[this.numericId % BattleBackdropsThree.length]}?`;
        else if (gen <= 4) bg = `fx/${BattleBackdropsFour[this.numericId % BattleBackdropsFour.length]}`;
        else if (gen <= 5) bg = `fx/${BattleBackdropsFive[this.numericId % BattleBackdropsFive.length]}`;
        else bg = `sprites/gen6bgs/${BattleBackdrops[this.numericId % BattleBackdrops.length]}`;
    }
    
    this.backdropImage = listOfBG[this.numericId % listOfBG.length];
    if (this.$bg) {
        this.$bg.css('background-image', `url(${sourceURL}fx/${this.backdropImage})`);
    }
}

SEEKTURN = undefined
try {SEEKTURN = Battle.prototype.seekTurn} catch {"Function seekturn not found"}
if (SEEKTURN){
    Battle.prototype.seekTurn = function (turn){
        console.log(this.scene.$fx)
        this.scene.$bg[0].style.filter = "none"

        SEEKTURN.apply(this, arguments)
    }
}
BattleScene.prototype.startAnimations = function() {
    this.$fx.empty();
    this.$bgEffect.empty();
    this.activeAnimations = $();
    this.timeOffset = 0;
    this.minDelay = 0;
}


BattleScene.prototype.message = function (message) {
    if (!this.messagebarOpen) {
        this.log.addSpacer();
    }
    if (this.animating) {
        this.$messagebar.empty();
        this.$messagebar.css({
            display: 'block',
            opacity: 1,
            height: 'auto',
            zIndex: 11,
            background: "none",
            color: "black",
            left: "120px"
        });
    }
    if (message.startsWith('<small>(')) {
        message = '';
    }
    if (message && this.animating) {
        this.$hiddenMessage.append('<p></p>');
        let $message = this.$hiddenMessage.children().last();
        $message.html(message);
        $message.css({
            display: 'block',
            opacity: 0,
        });
        $message.animate({
            height: 'hide',
        }, 1, () => {
            $message.appendTo(this.$messagebar);
            $message.animate({
                height: 'show',
                'padding-bottom': 4,
                opacity: 1,
            }, this.battle.messageFadeTime / this.acceleration);
        });
        this.waitFor($message);
    }
    this.messagebarOpen = true;
}

BattleSound.externalSound = function (url){
    return
    console.log(this)
    if (!this.effectVolume || this.muted) return;
    if (!window.HTMLAudioElement) return;
    if (this.soundCache[url]) {this.soundCache[url].play();return}
    try {
        const sound = document.createElement('audio');
        sound.src = url;
        sound.volume = this.effectVolume / 100;
        this.soundCache[url] = sound;
        sound.play()
    } catch {console.log("NO SOUND")}
}

Battle.prototype.onResize = () => {
    const width = $(window).width();
    if (width < 950 || this.hardcoreMode) {
        this.messageShownTime = 500;
    } else {
        this.messageShownTime = 1;
    }
    if (width && width < 740) {
        const scale = (width / 740);
        this.scene.$frame?.css('transform', `scale(${scale})`);
        this.scene.$frame?.css('transform-origin', 'top left');
        this.scene.$frame?.css('margin-bottom', `${360 * scale - 360}px`);
        // this.$foeHint.css('transform', 'scale(' + scale + ')');
    } else {
        this.scene.$frame?.css('transform', 'none');
        // this.$foeHint.css('transform', 'none');
        this.scene.$frame?.css('margin-bottom', '0');
    }
};