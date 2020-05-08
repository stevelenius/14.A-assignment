// 14.A-assignment.js
//
// Virtual jukebox
//
// Based on a p5.js particle system created by Daniel Shiffman and 
// appearing in his book, "The Nature of Code"
//

// initial declaration of variables
let coinSize = 60;
let coinX = 700;
let coinY = 400;
let lever01X = 700;
let lever01Y = 150;
let lever01 = 0;
let lever02X = 740;
let lever02Y = 150;
let lever02 = 0;
let leverWidth = 30;
let leverHeight = 100;
let clickCount = 0;
let song01;
let song02;

// preload font
function preload() {
    myFont = loadFont('fonts/AkzidenzGrotesk-BoldCond.otf');
    // load all sounds that can be played into previously declared variables
    song01 = loadSound('sounds/ding.mp3');
    song02 = loadSound('sounds/sweep.mp3');
}

function setup() {
    createCanvas(1024, 768);
}

function draw() {

    
    // gray background
    background(192, 192, 192);
    stroke(255);
    strokeWeight(2);
    rect(lever01X, lever01Y, leverWidth, leverHeight);
    rect(lever02X, lever02Y, leverWidth, leverHeight);
    rect(coinX, coinY, coinSize, coinSize);
    // change fill to grass green
    //fill(140, 240, 0);
    // add a lawn for the some of the bubbles to fall onto
    //rect(0, 325, 720, 135);
// count how many times square is clicked and output to console log
//console.log(mouseX, ', ', mouseY);
}

function mouseClicked() {
    if ((mouseX >= coinX && mouseX <= coinX + coinSize) && 
        (mouseY >= coinY && mouseY <= coinY + coinSize) &&
        lever01 ===1) {
		clickCount++;
        console.log('clickCount is', clickCount);
        song01.play();
	} else if ((mouseX >= lever01X && mouseX <= lever01X + leverWidth) && 
    (mouseY >= lever01Y && mouseY <= lever01Y + leverHeight) && lever01 === 0) {
    lever01Y = lever01Y + 100;
    lever01 = 1;
    } else if ((mouseX >= lever01X && mouseX <= lever01X + leverWidth) && 
    (mouseY >= lever01Y && mouseY <= lever01Y + leverHeight) && lever01 === 1) {
    lever01Y = lever01Y - 100;
    lever01 = 0;
    } else if ((mouseX >= coinX && mouseX <= coinX + coinSize) && 
    (mouseY >= coinY && mouseY <= coinY + coinSize) &&
    lever02 ===1) {
    clickCount++;
    console.log('clickCount is', clickCount);
    song02.play();
} else if ((mouseX >= lever02X && mouseX <= lever02X + leverWidth) && 
(mouseY >= lever02Y && mouseY <= lever02Y + leverHeight) && lever02 === 0) {
lever02Y = lever02Y + 100;
lever02 = 1;
} else if ((mouseX >= lever02X && mouseX <= lever02X + leverWidth) && 
(mouseY >= lever02Y && mouseY <= lever02Y + leverHeight) && lever02 === 1) {
lever02Y = lever02Y - 100;
lever02 = 0;
} 

/*    if (mouseIsPressed) {
        fill(255);
        circle(mouseX, mouseY, 80);
    } else {
        fill(127);
      square(mouseX, mouseY, 80);
  }
*/

    // these two lines make the particle magic happen
//    system.addParticle();
//    system.run();

    // now we draw the bubble machine box so the bubbles happen
    // behind it

    // change fill to yellow and draw bubble machine box
/*    fill(255, 255, 0);
    rect(50, 175, 60, 60);
    // change stroke color to dark gray and thicken stroke for legs
    stroke(96)
    strokeWeight(4);
    // draw bubble maker legs and crossbrace
    line(55, 235, 55, 350);
    line(105, 235, 105, 350);
    line(55, 310, 105, 310);
    // turn off stroke and add lettering to bubble maker box
    noStroke();
    fill(255, 0, 0);
    textFont(myFont);
    textAlign(CENTER);
    textSize(17);
    text("ACME", 80, 195);
    text("BUBBLE", 80, 210);
    text("MACHINE", 80, 225);
}

// coding below from Daniel Shiffman with many value adjustments;
// originally particles bubbled up slightly at the top of the canvas
// and then fell, but I changed them to go left to right and float; 
// originally particles faded away, but I changed them to burst, i.e.
// disappear in an instant

// A simple Particle class
let Particle = function(position) {
// controls trajectory of bubbles: some up, but more down
    this.acceleration = createVector(0.001, 0.003);
// controls speed and spread of bubble cloud
    this.velocity = createVector(random(2, 3), random(-1, .3));
    this.position = position.copy();
// controls approximately when bubbles burst; adjusted so that 
// some bubbles will burst before leaving the screen while others 
// will leave the screen before bursting 
    this.lifespan = 425;
};

Particle.prototype.run = function() {
    this.update();
    this.display();
};

// Method to update position
Particle.prototype.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
    // thin white stroke around bubble
    stroke(255);
    strokeWeight(1);
    // white fill, mostly but not completely transparent
    fill(255, 255, 255, 35);
    // third ellipse value is size of circle
    ellipse(this.position.x, this.position.y, 15);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
    return this.lifespan < 0;
};

let ParticleSystem = function(position) {
    this.origin = position.copy();
    this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
    this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
    for (let i = this.particles.length-1; i >= 0; i--) {
        let p = this.particles[i];
        p.run();
        if (p.isDead()) {
            this.particles.splice(i, 1);
        }
    }
};

// code from 12.a-assignment

// 12.A-assignment.js
//
// Musical Depreciation:
// The Spike Jones-O-Phone!
// Inspired by the music(?) of the legendary Spike Jones
//
// All sound samples from various Spike Jones recordings
// in the programmer's collection; samples extracted and
// tuned by the programmer

// initial declaration of variables;
// declare variable for starting size of popping colored circles
var size = 300;

// declare variables for all sounds that can be played;
// variable names are names of keys on keyboard
let kz;
let kx;
let kc;
let kv;
let kb;
let kn;
let km;
let kComma;
let kPeriod;
let kSlash;
let ka;
let ks;
let kd;
let kf;
let kg;
let kh;
let kj;
let kk;
let kl;
let kSemi;
let kApos;
let kq;
let kw;
let ke;
let kr;
let kt;
let ky;
let ku;
let ki;
let ko;
let kp;
let kLBrack;
let kRBrack;
let kBkSlash;
let kTilda;
let k1;
let k2;
let k3;
let k4;
let k5;
let k6;
let k7;
let k8;
let k9;
let k0;
let kDash;
let kEquals;
let kEscape;
// Can't use Tab key (conflicts with browser functioning)
// let kTab;
// Can't use CapsLock key (works unreliably)
// let kCapsLock;
let kShift;
let kControl;
let kAlt;
let kMeta;
let kSpace;
let kEnter;
let kBackspace;
let kDelete;
let kHome;
let kEnd;
let kPageUp;
let kPageDown;
let kArrowUp;
let kArrowDown;
let kArrowLeft;
let kArrowRight;
let kClear;
let kF5;
let kF6;
let kF13;
let kF14;
let kF15;
let kF16;
let kF17;
let kF18;
let kF19;
// Cannot use F1 through F4, F7 through F12, the Eject key, and the fn key
// for the Spike Jones-O-Phone. They do not generate keycodes in p5.js 
// because the Mac OS uses them for system functions. 

// preload fonts
function preload() {
    myFontBirch = loadFont('fonts/BirchStd.otf');
    myFontMesquite = loadFont('fonts/MesquiteStd.otf');
    myFontPoplar = loadFont('fonts/PoplarStd.otf');
    myFontRosewoodFill = loadFont('fonts/RosewoodStd-Fill.otf');
    myFontRosewood = loadFont('fonts/RosewoodStd-Regular.otf');
    myFontNueva = loadFont('fonts/NuevaStd-Regular.otf');
    myFontNuevaBold = loadFont('fonts/NuevaStd-Bold.otf');
}

function setup() {
    createCanvas(800, 600);
    // load image of Spike
    spike = loadImage('images/spike-jones-instruments.jpg');
    // set up amplitude for popping circles
    amplitude = new p5.Amplitude();
    // load all sounds that can be played into previously declared variables
    kz = loadSound('sounds/bang24C.mp3');
    kx = loadSound('sounds/bang24D.mp3');
    kc = loadSound('sounds/bang24E.mp3');
    kv = loadSound('sounds/bang24F.mp3');
    kb = loadSound('sounds/bang24G.mp3');
    kn = loadSound('sounds/bang25A.mp3');
    km = loadSound('sounds/bang25B.mp3');
    kComma = loadSound('sounds/bang25C.mp3');
    kPeriod = loadSound('sounds/bang25D.mp3');
    kSlash = loadSound('sounds/bang25E.mp3');
    ka = loadSound('sounds/carhorn4C.mp3');
    ks = loadSound('sounds/carhorn4D.mp3');
    kd = loadSound('sounds/carhorn4E.mp3');
    kf = loadSound('sounds/carhorn4F.mp3');
    kg = loadSound('sounds/carhorn4G.mp3');
    kh = loadSound('sounds/carhorn5A.mp3');
    kj = loadSound('sounds/carhorn5B.mp3');
    kk = loadSound('sounds/carhorn5C.mp3');
    kl = loadSound('sounds/carhorn5D.mp3');
    kSemi = loadSound('sounds/carhorn5E.mp3');
    kApos = loadSound('sounds/carhorn5F.mp3');
    kq = loadSound('sounds/gulp4C.mp3');
    kw = loadSound('sounds/gulp4D.mp3');
    ke = loadSound('sounds/gulp4E.mp3');
    kr = loadSound('sounds/gulp4F.mp3');
    kt = loadSound('sounds/gulp4G.mp3');
    ky = loadSound('sounds/gulp5A.mp3');
    ku = loadSound('sounds/gulp5B.mp3');
    ki = loadSound('sounds/gulp5C.mp3');
    ko = loadSound('sounds/gulp5D.mp3');
    kp = loadSound('sounds/gulp5E.mp3');
    kLBrack = loadSound('sounds/gulp5F.mp3');
    kRBrack = loadSound('sounds/gulp5G.mp3');
    kBkSlash = loadSound('sounds/gulp6A.mp3');
    kTilda = loadSound('sounds/squeal5C.mp3');
    k1 = loadSound('sounds/squeal5D.mp3');
    k2 = loadSound('sounds/squeal5E.mp3');
    k3 = loadSound('sounds/squeal5F.mp3');
    k4 = loadSound('sounds/squeal5G.mp3');
    k5 = loadSound('sounds/squeal6A.mp3');
    k6 = loadSound('sounds/squeal6B.mp3');
    k7 = loadSound('sounds/squeal6C.mp3');
    k8 = loadSound('sounds/squeal6D.mp3');
    k9 = loadSound('sounds/squeal6E.mp3');
    k0 = loadSound('sounds/squeal6F.mp3');
    kDash = loadSound('sounds/squeal6G.mp3');
    kEquals = loadSound('sounds/squeal7A.mp3');
    kEscape = loadSound('sounds/whistle.mp3');
// Can't use Tab or CapsLock key as explained above
//    kTab = loadSound('sounds/horn2.mp3');
//    kCapsLock = loadSound('sounds/beep7.mp3');
    kShift = loadSound('sounds/spring1.mp3');
    kControl = loadSound('sounds/slide2.mp3');
    kAlt = loadSound('sounds/slide.mp3');
    kMeta = loadSound('sounds/scream.mp3');
    kSpace = loadSound('sounds/spring2.mp3');
    kEnter = loadSound('sounds/pop.mp3');
    kBackspace = loadSound('sounds/pedal3.mp3');
    kDelete = loadSound('sounds/pedal2.mp3');
    kHome = loadSound('sounds/sweep.mp3');
    kEnd = loadSound('sounds/quack.mp3');
    kPageUp = loadSound('sounds/howl.mp3');
    kPageDown = loadSound('sounds/pedal1.mp3');
    kArrowUp = loadSound('sounds/gunfire2.mp3');
    kArrowDown = loadSound('sounds/gunfire.mp3');
    kArrowLeft = loadSound('sounds/ding.mp3');
    kArrowRight = loadSound('sounds/crunch.mp3');
    kClear = loadSound('sounds/collapse.mp3');
    kF5 = loadSound('sounds/boom1.mp3');
    kF6 = loadSound('sounds/clink1.mp3');
    kF13 = loadSound('sounds/beep1.mp3');
    kF14 = loadSound('sounds/beep2.mp3');
    kF15 = loadSound('sounds/beep3.mp3');
    kF16 = loadSound('sounds/beep4.mp3');
    kF17 = loadSound('sounds/beep5.mp3');
    kF18 = loadSound('sounds/beep6.mp3');
    kF19 = loadSound('sounds/klaxon.mp3');
}
 
function draw() {
    // black background, no stroke
    background(0);
    noStroke();
    // put text on screen
    fill(color(220, 180, 60));
    textFont(myFontPoplar);
    textSize(36);
    text('MUSICAL DEPRECIATION:', 20, 50);
    fill(color(220, 120, 10));
    textFont(myFontRosewood);
    textSize(60);
    text('THE SPIKE JONES-O-PHONE!', 20, 100);
    fill(color(220, 180, 60));
    textFont(myFontBirch);
    textSize(36);
    text('INSPIRED BY THE MUSIC(?) OF THE LEGENDARY SPIKE JONES', 20, 145);
    // background rectangle for instructions
    rect(20, 170, 250, 210);
    // instructions
    textFont(myFontNuevaBold);
    textSize(16);
    fill(color(0));
    text('INSTRUCTIONS:', 30, 195)
    textFont(myFontNueva);
    text('• All input from keyboard', 30, 215)
    text('• Letter/number/character keys', 30, 235)
    text('  play notes on C major scale', 30, 255)
    text('• Each of four main keyboard rows', 30, 275)
    text('  plays a different instrument', 30, 295)
    text('• Most non-character keys play', 30, 315)
    text('  non-scale accent sounds', 30, 335)
    textFont(myFontNuevaBold);
    textSize(24);
    text('HAVE FUN!', 30, 365);
    // create five colored circles that pop out from behind Spike
    // when sound is played and whose size varies by amplitude
    let level = amplitude.getLevel();
    // map sound level to a much larger value for circle size
    let size = map(level, 0, 1, 0, 1000);
    // set fill color and position for circles
    fill(color(120, 220, 120));
    ellipse(540, 180, size, size);
    fill(color(255, 255, 60));
    ellipse(325, 225, size, size);
    fill(color(220, 120, 120));
    ellipse(320, 520, size, size);
    fill(color(220, 120, 255));
    ellipse(715, 350, size, size);
    fill(color(128, 220, 255));
    ellipse(699, 550, size, size);
    // have image of Spike placed last so colored circles pop out from underneath his picture
    image(spike, 300 , 170);
}

// tuned keys:
// when key is pressed, key triggers its audio clip to play;
// shifted and unshifted characters on same key play same clip;
// numeric keypad plays characters associated with character on key
function keyPressed() {
    if (key === "z") {
      kz.play();
    } else if (key === "Z") {
        kz.play();
    } else if (key === "x") {
        kx.play();
    } else if (key === "X") {
        kx.play();
    } else if (key === "c") {
        kc.play();
    } else if (key === "C") {
        kc.play();
    } else if (key === "v") {
        kv.play();
    } else if (key === "V") {
        kv.play();
    } else if (key === "b") {
        kb.play();
    } else if (key === "B") {
        kb.play();
    } else if (key === "n") {
        kn.play();
    } else if (key === "N") {
        kn.play();
    } else if (key === "m") {
        km.play();
    } else if (key === "M") {
        km.play();
    } else if (key === ",") {
        kComma.play();
    } else if (key === "<") {
        kComma.play();
    } else if (key === ".") {
        kPeriod.play();
    } else if (key === ">") {
        kPeriod.play();
    } else if (key === "/") {
        kSlash.play();
    } else if (key === "?") {
        kSlash.play();
    } else if (key === "a") {
        ka.play();
    } else if (key === "A") {
        ka.play();
    } else if (key === "s") {
        ks.play();
    } else if (key === "S") {
        ks.play();
    } else if (key === "d") {
        kd.play();
    } else if (key === "D") {
        kd.play();
    } else if (key === "f") {
        kf.play();
    } else if (key === "F") {
        kf.play();
    } else if (key === "g") {
        kg.play();
    } else if (key === "G") {
        kg.play();
    } else if (key === "h") {
        kh.play();
    } else if (key === "H") {
        kh.play();
    } else if (key === "j") {
        kj.play();
    } else if (key === "J") {
        kj.play();
    } else if (key === "k") {
        kk.play();
    } else if (key === "K") {
        kk.play();
    } else if (key === "l") {
        kl.play();
    } else if (key === "L") {
        kl.play();
    } else if (key === ";") {
        kSemi.play();
    } else if (key === ":") {
        kSemi.play();
    } else if (key === "'") {
        kApos.play();
    } else if (key === '"') {
        kApos.play();
    } else if (key === "q") {
        kq.play();
    } else if (key === "Q") {
        kq.play();
    } else if (key === "w") {
        kw.play();
    } else if (key === "W") {
        kw.play();
    } else if (key === "e") {
        ke.play();
    } else if (key === "E") {
        ke.play();
    } else if (key === "r") {
        kr.play();
    } else if (key === "R") {
        kr.play();
    } else if (key === "t") {
        kt.play();
    } else if (key === "T") {
        kt.play();
    } else if (key === "y") {
        ky.play();
    } else if (key === "Y") {
        ky.play();
    } else if (key === "u") {
        ku.play();
    } else if (key === "U") {
        ku.play();
    } else if (key === "i") {
        ki.play();
    } else if (key === "I") {
        ki.play();
    } else if (key === "o") {
        ko.play();
    } else if (key === "O") {
        ko.play();
    } else if (key === "p") {
        kp.play();
    } else if (key === "P") {
        kp.play();
    } else if (key === "[") {
        kLBrack.play();
    } else if (key === "{") {
        kLBrack.play();
    } else if (key === "]") {
        kRBrack.play();
    } else if (key === "}") {
        kRBrack.play();
    } else if (key === "\\") {
        kBkSlash.play();
    } else if (key === "|") {
        kBkSlash.play();
    } else if (key === "`") {
        kTilda.play();
    } else if (key === "~") {
        kTilda.play();
    } else if (key === "1") {
        k1.play();
    } else if (key === "!") {
        k1.play();
    } else if (key === "2") {
        k2.play();
    } else if (key === "@") {
        k2.play();
    } else if (key === "3") {
        k3.play();
    } else if (key === "#") {
        k3.play();
    } else if (key === "4") {
        k4.play();
    } else if (key === "$") {
        k4.play();
    } else if (key === "5") {
        k5.play();
    } else if (key === "%") {
        k5.play();
    } else if (key === "6") {
        k6.play();
    } else if (key === "^") {
        k6.play();
    } else if (key === "7") {
        k7.play();
    } else if (key === "&") {
        k7.play();
    } else if (key === "8") {
        k8.play();
    } else if (key === "*") {
        k8.play();
    } else if (key === "9") {
        k9.play();
    } else if (key === "(") {
        k9.play();
    } else if (key === "0") {
        k0.play();
    } else if (key === ")") {
        k0.play();
    } else if (key === "-") {
        kDash.play();
    } else if (key === "_") {
        kDash.play();
    } else if (key === "=") {
        kEquals.play();
    } else if (key === "+") {
        kEquals.play();
    } else if (key === "+") {
        kEquals.play();
    // non-character keys play non-tuned accent sounds (a.k.a. the percussion section)
    } else if (key === "Escape") {
        kEscape.play();
    } else if (key === "Tab") {
        kTab.play();
    } else if (key === "CapsLock") {
        kCapsLock.play();
    } else if (key === "Shift") {
        kShift.play();
    } else if (key === "Control") {
        kControl.play();
    } else if (key === "Alt") {
        kAlt.play();
    } else if (key === "Meta") {
        kMeta.play();
    } else if (key === " ") {
        kSpace.play();
    } else if (key === "Enter") {
        kEnter.play();
    } else if (key === "Backspace") {
        kBackspace.play();
    } else if (key === "Delete") {
        kDelete.play();
    } else if (key === "Home") {
        kHome.play();
    } else if (key === "End") {
        kEnd.play();
    } else if (key === "PageUp") {
        kPageUp.play();
    } else if (key === "PageDown") {
        kPageDown.play();
    } else if (key === "ArrowUp") {
        kArrowUp.play();
    } else if (key === "ArrowDown") {
        kArrowDown.play();
    } else if (key === "ArrowLeft") {
        kArrowLeft.play();
    } else if (key === "ArrowRight") {
        kArrowRight.play();
    } else if (key === "Clear") {
        kClear.play();
    } else if (key === "F5") {
        kF5.play();
    } else if (key === "F6") {
        kF6.play();
    } else if (key === "F13") {
        kF13.play();
    } else if (key === "F14") {
        kF14.play();
    } else if (key === "F15") {
        kF15.play();
    } else if (key === "F16") {
        kF16.play();
    } else if (key === "F17") {
        kF17.play();
    } else if (key === "F18") {
        kF18.play();
    } else if (key === "F19") {
        kF19.play();
    } 
  }*/
}
