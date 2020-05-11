// 14.A-assignment.js
//
// Virtual jukebox
//
// Based on a p5.js particle system created by Daniel Shiffman and 
// appearing in his book, "The Nature of Code"
//

// initial declaration of variables
let bg;
let songLength;
let songProgress;
let leverWidth = 15;
let leverHeight = 32;
let leverToggle = 32;
let leverHorizSpace = 7;
let leverSpaceAbove = 450;
let leverSlotSpaceAbove = 450;
let coinSize = 73;
let nickelX = 638;
let nickelY = 620;
let dimeX = 559;
let dimeY = 620;
let quarterX = 480;
let quarterY = 620;
let lever01X = 506;
let leverSlot01X = 506;
let lever01Y = leverSpaceAbove;
let lever01 = 0;
let lever02X = lever01X + leverWidth + leverHorizSpace;
let lever02Y = leverSpaceAbove;
let lever02 = 0;
let lever03X = lever02X + leverWidth + leverHorizSpace;
let lever03Y = leverSpaceAbove;
let lever03 = 0;
let lever04X = lever03X + leverWidth + leverHorizSpace;
let lever04Y = leverSpaceAbove;
let lever04 = 0;
let lever05X = lever04X + leverWidth + leverHorizSpace;
let lever05Y = leverSpaceAbove;
let lever05 = 0;
let lever06X = lever05X + leverWidth + leverHorizSpace;
let lever06Y = leverSpaceAbove;
let lever06 = 0;
let lever07X = lever06X + leverWidth + leverHorizSpace;
let lever07Y = leverSpaceAbove;
let lever07 = 0;
let lever08X = lever07X + leverWidth + leverHorizSpace;
let lever08Y = leverSpaceAbove;
let lever08 = 0;
let lever09X = lever08X + leverWidth + leverHorizSpace;
let lever09Y = leverSpaceAbove;
let lever09 = 0;
let lever10X = lever09X + leverWidth + leverHorizSpace;
let lever10Y = leverSpaceAbove;
let lever10 = 0;
let lever11X = lever10X + leverWidth + leverHorizSpace;
let lever11Y = leverSpaceAbove;
let lever11 = 0;
let lever12X = lever11X + leverWidth + leverHorizSpace;
let lever12Y = leverSpaceAbove;
let lever12 = 0;
let lever13X = lever12X + leverWidth + leverHorizSpace;
let lever13Y = leverSpaceAbove;
let lever13 = 0;
let lever14X = lever13X + leverWidth + leverHorizSpace;
let lever14Y = leverSpaceAbove;
let lever14 = 0;
let lever15X = lever14X + leverWidth + leverHorizSpace;
let lever15Y = leverSpaceAbove;
let lever15 = 0;
let lever16X = lever15X + leverWidth + leverHorizSpace;
let lever16Y = leverSpaceAbove;
let lever16 = 0;
let lever17X = lever16X + leverWidth + leverHorizSpace;
let lever17Y = leverSpaceAbove;
let lever17 = 0;
let lever18X = lever17X + leverWidth + leverHorizSpace;
let lever18Y = leverSpaceAbove;
let lever18 = 0;
let lever19X = lever18X + leverWidth + leverHorizSpace;
let lever19Y = leverSpaceAbove;
let lever19 = 0;
let lever20X = lever19X + leverWidth + leverHorizSpace;
let lever20Y = leverSpaceAbove;
let lever20 = 0;
let numCircleX = 495;
let numCircleXInc = 250;
let numCircleY = 51;
let numCircleYInc = 36;
let titleCardX = 515;
let titleCardXInc = 250;
let titleCardY = 36;
let titleCardYInc = 36;
let titleX = 615;
let titleXInc = 250;
let titleSongY = 50;
let titleSongYInc = 36;
let titleArtistY = 62;
let titleArtistYInc = 36;
let numTextX = 495;
let numTextXInc = 250;
let numTextY = 60;
let numTextYInc = 36;
let clickCount = 0;
function goldFill() {
    fill(212,175,55);
}
function maroonFill() {
//    fill(104, 26, 0);
    fill(124, 36, 15);
}
function leverFill() {
    fill(154, 46, 15);
}
function paperFill() {
    fill(255, 247, 230);
}
function blackFill() {
    fill(0);
}

let recordsLoaded = [
    {
        song: "Juke Box Saturday Night",
        artist: "Glenn Miller",
        audio: 'sounds/JukeBoxSaturdayNight.mp3',
        label: "RCA Victor"
        },

    {
        song: "Me and You",
        artist: "Duke Ellington",
        audio: 'sounds/MeAndYou.mp3',
        label: "RCA Victor"
        },

    {
        song: "It Don't Mean a Thing",
        artist: "Duke Ellington/Ivie Anderson",
        audio: 'sounds/DontMeanAThing.mp3',
        label: "RCA Victor"
        },

    {
        song: "A String of Pearls",
        artist: "Glenn Miller",
        audio: 'sounds/StringOfPearls.mp3',
        label: "RCA Victor"
        },

    {
        song: "More Than You Know",
        artist: "Count Basie",
        audio: 'sounds/MoreThanYouKnow.mp3',
        label: "Okeh"
        },

    {
        song: "Moonlight Serenade",
        artist: "Glenn Miller",
        audio: 'sounds/MoonlightSerenade.mp3',
        label: "RCA Victor"
        },

    {
        song: "Solitude",
        artist: "Duke Ellington",
        audio: 'sounds/Solitude.mp3',
        label: "RCA Victor"
        },

    {
        song: "I Have Eyes",
        artist: "Artie Shaw",
        audio: 'sounds/IHaveEyes.mp3',
        label: "RCA Victor"
        },

    {
        song: "Cotton Tail",
        artist: "Duke Ellington",
        audio: 'sounds/CottonTail.mp3',
        label: "RCA Victor"
        },

    {
        song: "Why Don't You Do Right",
        artist: "Benny Goodman/Peggy Lee",
        audio: 'sounds/DoRight.mp3',
        label: "Columbia"
        },

    {
        song: "Let's Dance",
        artist: "Benny Goodman",
        audio: 'sounds/LetsDance.mp3',
        label: "RCA Victor"
        },

    {
        song: "In The Mood",
        artist: "Glenn Miller",
        audio: 'sounds/InTheMood.mp3',
        label: "RCA Victor"
        },

    {
        song: "Brazil",
        artist: "Enrique Madriguera",
        audio: 'sounds/Brazil.mp3',
        label: "RCA Victor"
        },

    {
        song: "I Got It Bad",
        artist: "Duke Ellington",
        audio: 'sounds/IGotItBad.mp3',
        label: "RCA Victor"
        },

    {
        song: "Mood Indigo",
        artist: "Glenn Miller",
        audio: 'sounds/MoodIndigo.mp3',
        label: "RCA Victor"
        },

    {
        song: "Take the \"A\" Train",
        artist: "Duke Ellington",
        audio: 'sounds/TakeTheATrain.mp3',
        label: "RCA Victor"
        },

    {
        song: "No Name Jive",
        artist: "Glen Gray",
        audio: 'sounds/NoNameJive.mp3',
        label: "Decca"
        },

    {
        song: "Never No Lament",
        artist: "Duke Ellington",
        audio: 'sounds/NeverNoLament.mp3',
        label: "RCA Victor"
        },

    {
        song: "Sophisticated Lady",
        artist: "Duke Ellington",
        audio: 'sounds/SophisticatedLady.mp3',
        label: "Columbia"
        },

    {
        song: "Trumpet Blues",
        artist: "Harry James",
        audio: 'sounds/TrumpetBlues.mp3',
        label: "Columbia"
        }
    ]
let playQueue = [];
let counterQueue = [];
let dime2Plays;
let quarter5Plays;

// preload
function preload() {
    regFont = loadFont('fonts/Oswald-ExtraLight.ttf');
    boldFont = loadFont('fonts/Oswald-Regular.ttf');
    xBoldFont = loadFont('fonts/Oswald-Medium.ttf');
    // load all sounds that can be played into previously declared variables
    song1 = loadSound(recordsLoaded[0].audio);
    song2 = loadSound(recordsLoaded[1].audio);
    song3 = loadSound(recordsLoaded[2].audio);
    song4 = loadSound(recordsLoaded[3].audio);
    song5 = loadSound(recordsLoaded[4].audio);
    song6 = loadSound(recordsLoaded[5].audio);
    song7 = loadSound(recordsLoaded[6].audio);
    song8 = loadSound(recordsLoaded[7].audio);
    song9 = loadSound(recordsLoaded[8].audio);
    song10 = loadSound(recordsLoaded[9].audio);
    song11 = loadSound(recordsLoaded[10].audio);
    song12 = loadSound(recordsLoaded[11].audio);
    song13 = loadSound(recordsLoaded[12].audio);
    song14 = loadSound(recordsLoaded[13].audio);
    song15 = loadSound(recordsLoaded[14].audio);
    song16 = loadSound(recordsLoaded[15].audio);
    song17 = loadSound(recordsLoaded[16].audio);
    song18 = loadSound(recordsLoaded[17].audio);
    song19 = loadSound(recordsLoaded[18].audio);
    song20 = loadSound(recordsLoaded[19].audio);
    nickelDrop = loadSound('sounds/NickelDrop.mp3');
    dimeDrop = loadSound('sounds/DimeDrop.mp3');
    quarterDrop = loadSound('sounds/QuarterDrop.mp3');
    leverThunk = loadSound('sounds/LeverThunk.mp3');
    leverThunkUp = loadSound('sounds/LeverThunkUp.mp3');
}

function setup() {
    bg = loadImage('images/JukeboxScreen1024x768v4.png');
    createCanvas(1024, 768)
    background(77, 38, 0);
    goldFill();
    rect(numCircleX - 22, numCircleY - 20, 500, 365, 10);
    for (i = 0; i < 10; i++) {
    maroonFill();
    ellipse(numCircleX, numCircleY, 30);
    paperFill();
    rect(titleCardX, titleCardY, 200, 30);
    goldFill();
    noStroke();
    textFont(boldFont);
    textAlign(CENTER);
    textSize(24);
    text((i+1), numTextX, numTextY);
    blackFill();
    textSize(14);
    text(recordsLoaded[i].song, titleX, titleSongY);
    textSize(12);
    text(recordsLoaded[i].artist, titleX, titleArtistY);
    numCircleY = numCircleY + numCircleYInc;
    titleCardY = titleCardY + titleCardYInc;
    numTextY = numTextY + numTextYInc;
    titleSongY = titleSongY + titleSongYInc;
    titleArtistY = titleArtistY + titleArtistYInc;
    };

    numCircleX = numCircleX + numCircleXInc;
    titleCardX = titleCardX + titleCardXInc;
    numTextX = numTextX + numTextXInc;
    titleX = titleX + titleXInc;
    numCircleY = numCircleY - (numCircleYInc * 10);
    titleCardY = titleCardY - (titleCardYInc * 10);
    numTextY = numTextY - (numTextYInc * 10);
    titleSongY = titleSongY - (titleSongYInc * 10);
    titleArtistY = titleArtistY - (titleArtistYInc * 10);

    for (i = 0; i < 10; i++) {
        maroonFill();
        ellipse(numCircleX, numCircleY, 30);
    paperFill();
    rect(titleCardX, titleCardY, 200, 30);
 //   fill(254, 213, 0);
    goldFill();
    noStroke;
    textFont(boldFont);
    textAlign(CENTER);
    textSize(24);
    text((i+11), numTextX, numTextY);
    blackFill();
    textSize(14);
    text(recordsLoaded[i+10].song, titleX, titleSongY);
    textSize(12);
    text(recordsLoaded[i+10].artist, titleX, titleArtistY);
    numCircleY = numCircleY + numCircleYInc;
    titleCardY = titleCardY + titleCardYInc;
    numTextY = numTextY + numTextYInc;
    titleSongY = titleSongY + titleSongYInc;
    titleArtistY = titleArtistY + titleArtistYInc;
    };
    goldFill();
    rect(numCircleX - (numCircleXInc + 22), numCircleY + 167, 245, 122, 10);
    rect(numCircleX - (numCircleXInc + 22) + 255, numCircleY + 167, 245, 122, 10);
    maroonFill();
    rect(480, 585, 73, 24, 5);
    rect(559, 585, 73, 24, 5);
    rect(638, 585, 73, 24, 5);
    rect(734, 623, 73, 24, 5);
    rect(894, 623, 73, 24, 5);
    rect(480, 620, 73, 73, 5);
    rect(559, 620, 73, 73, 5);
    rect(638, 620, 73, 73, 5);
    rect(814, 601, 73, 73, 5);
    paperFill();
    rect(819, 606, 63, 63, 5);
 //   ellipse(596, 665, 73);
 //   ellipse(675, 665, 73);
        goldFill();
    noStroke;
    strokeWeight(0);
    textFont(boldFont);
    textSize(18);
    text('5 PLAYS', 516, 604);
    text('2 PLAYS', 595, 604);
    text('1 PLAY', 674, 604);
    textSize(36);
    text('25¢', 518, 656);
    text('10¢', 597, 656);
    text('5¢', 676, 656);
    textSize(12);
    text('CLICK TO', 518, 673);
    text('CLICK TO', 597, 673);
    text('CLICK TO', 676, 673);
    text('INSERT COIN', 518, 688);
    text('INSERT COIN', 597, 688);
    text('INSERT COIN', 676, 688);
    textSize(17);
    text('SELECTION', 771, 642);
    text('PLAYING', 931, 642);

 
}

function draw() {
 //   background(bg);
 
    // gray background
    goldFill();
    stroke(0);
    strokeWeight(.5)
    rect(numCircleX - (numCircleXInc + 22), numCircleY, 500, 150, 10);
    maroonFill();
    rect(504, 415, 438, 24, 5);
    goldFill();
    noStroke;
    strokeWeight(0);
    textFont(xBoldFont);
    textSize(16);
    text('CLICK TO SELECT • MAKE ALL SELECTIONS BEFORE INSERTING COINS', 722, 433);
    textSize(18);
    let leverSlot01X = 504;
    for (i = 0; i < 20; i++) {
        blackFill();
    rect((leverSlot01X), (leverSlotSpaceAbove - 6), (leverWidth + 4), ((leverHeight * 2) + 12));
    leverSlot01X = leverSlot01X + leverWidth + leverHorizSpace;
    maroonFill();
    stroke(0);
    strokeWeight(1);
    ellipse(leverSlot01X - 13, 540, leverWidth + 4);
    goldFill();
    strokeWeight(0);
    textSize(14);
    text(i + 1, leverSlot01X - 13, 545);
    };
   // rect(500, 500, (leverWidth + 4), ((leverHeight * 2) + 4));
    noStroke();
    leverFill();
    rect(lever01X, lever01Y, leverWidth, leverHeight);
    rect(lever02X, lever02Y, leverWidth, leverHeight);
    rect(lever03X, lever03Y, leverWidth, leverHeight);
    rect(lever04X, lever04Y, leverWidth, leverHeight);
    rect(lever05X, lever05Y, leverWidth, leverHeight);
    rect(lever06X, lever06Y, leverWidth, leverHeight);
    rect(lever07X, lever07Y, leverWidth, leverHeight);
    rect(lever08X, lever08Y, leverWidth, leverHeight);
    rect(lever09X, lever09Y, leverWidth, leverHeight);
    rect(lever10X, lever10Y, leverWidth, leverHeight);
    rect(lever11X, lever11Y, leverWidth, leverHeight);
    rect(lever12X, lever12Y, leverWidth, leverHeight);
    rect(lever13X, lever13Y, leverWidth, leverHeight);
    rect(lever14X, lever14Y, leverWidth, leverHeight);
    rect(lever15X, lever15Y, leverWidth, leverHeight);
    rect(lever16X, lever16Y, leverWidth, leverHeight);
    rect(lever17X, lever17Y, leverWidth, leverHeight);
    rect(lever18X, lever18Y, leverWidth, leverHeight);
    rect(lever19X, lever19Y, leverWidth, leverHeight);
    rect(lever20X, lever20Y, leverWidth, leverHeight);
//    rect(nickelX, nickelY, coinSize, coinSize);
//    rect(dimeX, dimeY, coinSize, coinSize);
//    rect(quarterX, quarterY, coinSize, coinSize);
}

function mouseClicked() {
// start with nickel clicked, lever 1 set
    if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
        (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
        lever01 === 1) {
        clickCount++;
        nickelDrop.play();
        console.log('clickCount is', clickCount);
        lever01Y = lever01Y - leverToggle;
        lever01 = 0;
        playQueue.push(song01);
        counterQueue.push('01');
        console.log(playQueue);
        startPlay();

// else nickel clicked, lever 2 set
} else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
    (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
    lever02 ===1) {
    clickCount++;
    nickelDrop.play();
    console.log('clickCount is', clickCount);
    lever02Y = lever02Y - leverToggle;
    lever02 = 0;
    playQueue.push(song02);
    console.log(playQueue);
    startPlay();
    // else nickel clicked, lever 3 set
} else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
    (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
    lever03 ===1) {
    clickCount++;
    nickelDrop.play();
    console.log('clickCount is', clickCount);
    lever03Y = lever03Y - leverToggle;
    lever03 = 0;
    playQueue.push(song03);
    console.log(playQueue);
    startPlay();
    // else nickel clicked, lever 4 set
} else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
(mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
lever04 ===1) {
clickCount++;
nickelDrop.play();
console.log('clickCount is', clickCount);
lever04Y = lever04Y - leverToggle;
lever04 = 0;
playQueue.push(song04);
console.log(playQueue);
startPlay();
    // else nickel clicked, lever 5 set
} else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
(mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
lever05 ===1) {
clickCount++;
nickelDrop.play();
console.log('clickCount is', clickCount);
lever05Y = lever05Y - leverToggle;
lever05 = 0;
playQueue.push(song05);
console.log(playQueue);
startPlay();
    // else nickel clicked, lever 6 set
} else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
(mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
lever06 ===1) {
clickCount++;
nickelDrop.play();
console.log('clickCount is', clickCount);
lever06Y = lever06Y - leverToggle;
lever06 = 0;
playQueue.push(song06);
console.log(playQueue);
startPlay();
    // else nickel clicked, lever 7 set
} else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
(mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
lever07 ===1) {
clickCount++;
nickelDrop.play();
console.log('clickCount is', clickCount);
lever07Y = lever07Y - leverToggle;
lever07 = 0;
playQueue.push(song07);
console.log(playQueue);
startPlay();
    // else nickel clicked, lever 8 set
} else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
(mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
lever08 ===1) {
clickCount++;
nickelDrop.play();
console.log('clickCount is', clickCount);
lever08Y = lever08Y - leverToggle;
lever08 = 0;
playQueue.push(song08);
console.log(playQueue);
startPlay();
    // else nickel clicked, lever 9 set
} else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
(mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
lever09 ===1) {
clickCount++;
nickelDrop.play();
console.log('clickCount is', clickCount);
lever09Y = lever09Y - leverToggle;
lever09 = 0;
playQueue.push(song09);
console.log(playQueue);
startPlay();
    // else nickel clicked, lever 10 set
} else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
(mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
lever10 ===1) {
clickCount++;
nickelDrop.play();
console.log('clickCount is', clickCount);
lever10Y = lever10Y - leverToggle;
lever10 = 0;
playQueue.push(song10);
console.log(playQueue);
startPlay();
    // else nickel clicked, lever 11 set
} else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
(mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
lever11 ===1) {
clickCount++;
nickelDrop.play();
console.log('clickCount is', clickCount);
lever11Y = lever11Y - leverToggle;
lever11 = 0;
playQueue.push(song11);
console.log(playQueue);
startPlay();
    // else nickel clicked, lever 12 set
} else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
(mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
lever12 ===1) {
clickCount++;
nickelDrop.play();
console.log('clickCount is', clickCount);
lever12Y = lever12Y - leverToggle;
lever12 = 0;
playQueue.push(song12);
console.log(playQueue);
startPlay();
    // else nickel clicked, lever 13 set
} else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
(mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
lever13 ===1) {
clickCount++;
nickelDrop.play();
console.log('clickCount is', clickCount);
lever13Y = lever13Y - leverToggle;
lever13 = 0;
playQueue.push(song13);
console.log(playQueue);
startPlay();
    // else nickel clicked, lever 14 set
} else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
(mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
lever14 ===1) {
clickCount++;
nickelDrop.play();
console.log('clickCount is', clickCount);
lever14Y = lever14Y - leverToggle;
lever14 = 0;
playQueue.push(song14);
console.log(playQueue);
startPlay();
    // else nickel clicked, lever 15 set
} else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
(mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
lever15 ===1) {
clickCount++;
nickelDrop.play();
console.log('clickCount is', clickCount);
lever15Y = lever15Y - leverToggle;
lever15 = 0;
playQueue.push(song15);
console.log(playQueue);
startPlay();
    // else nickel clicked, lever 16 set
} else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
(mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
lever16 ===1) {
clickCount++;
nickelDrop.play();
console.log('clickCount is', clickCount);
lever16Y = lever16Y - leverToggle;
lever16 = 0;
playQueue.push(song16);
console.log(playQueue);
startPlay();
    // else nickel clicked, lever 17 set
} else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
(mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
lever17 ===1) {
clickCount++;
nickelDrop.play();
console.log('clickCount is', clickCount);
lever17Y = lever17Y - leverToggle;
lever17 = 0;
playQueue.push(song17);
console.log(playQueue);
startPlay();
    // else nickel clicked, lever 18 set
} else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
(mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
lever18 ===1) {
clickCount++;
nickelDrop.play();
console.log('clickCount is', clickCount);
lever18Y = lever18Y - leverToggle;
lever18 = 0;
playQueue.push(song18);
console.log(playQueue);
startPlay();
    // else nickel clicked, lever 19 set
} else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
(mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
lever19 ===1) {
clickCount++;
nickelDrop.play();
console.log('clickCount is', clickCount);
lever19Y = lever19Y - leverToggle;
lever19 = 0;
playQueue.push(song19);
console.log(playQueue);
startPlay();
    // else nickel clicked, lever 20 set
} else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
(mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
lever20 ===1) {
clickCount++;
nickelDrop.play();
console.log('clickCount is', clickCount);
lever20Y = lever20Y - leverToggle;
lever20 = 0;
playQueue.push(song20);
console.log(playQueue);
startPlay();
// else dime clicked
} else if ((mouseX >= dimeX && mouseX <= dimeX + coinSize) && 
    (mouseY >= dimeY && mouseY <= dimeY + coinSize)) {
        dime2Plays = 2;
        console.log('plays left: ', dime2Plays);
        // lever 1 set
        console.log('lever 1 is ', lever01);
        console.log('lever 2 is ', lever02);
        console.log('lever 3 is ', lever03);
        if ((lever01 === 1) && (dime2Plays > 0)) {
            lever01Y = lever01Y - leverToggle;
            lever01 = 0;
            console.log('lever 1 is ', lever01);
            playQueue.push(song01);
            console.log(playQueue);
            dime2Plays = dime2Plays - 1;
            console.log('plays left: ', dime2Plays);
        }
        // lever 2 set
        console.log('plays left: ', dime2Plays);

        if ((lever02 === 1) && (dime2Plays > 0)) {
            lever02Y = lever02Y - leverToggle;
                lever02 = 0;
                console.log('lever 2 is ', lever02);
                playQueue.push(song02);
                console.log(playQueue);
                dime2Plays = dime2Plays - 1;
                console.log('plays left: ', dime2Plays);
            }
        // lever 3 set
        console.log('plays left: ', dime2Plays);
        if ((lever03=== 1) && (dime2Plays > 0)) {
            lever03Y = lever03Y - leverToggle;
                lever03 = 0;
                console.log('lever 3 is ', lever03);
                playQueue.push(song03);
                console.log(playQueue);
                dime2Plays = dime2Plays - 1;
                console.log('plays left: ', dime2Plays);
            }
                    // lever 4 set
        console.log('plays left: ', dime2Plays);
        if ((lever04=== 1) && (dime2Plays > 0)) {
            lever04Y = lever04Y - leverToggle;
                lever04 = 0;
                console.log('lever 3 is ', lever04);
                playQueue.push(song04);
                console.log(playQueue);
                dime2Plays = dime2Plays - 1;
                console.log('plays left: ', dime2Plays);
//                if (dime2Plays = 0) {
//                    startPlay;
//                }
            }
                    // lever 5 set
        console.log('plays left: ', dime2Plays);
        if ((lever05=== 1) && (dime2Plays > 0)) {
            lever05Y = lever05Y - leverToggle;
                lever05 = 0;
                console.log('lever 3 is ', lever05);
                playQueue.push(song05);
                console.log(playQueue);
                dime2Plays = dime2Plays - 1;
                console.log('plays left: ', dime2Plays);
            }
                    // lever 6 set
        console.log('plays left: ', dime2Plays);
        if ((lever06=== 1) && (dime2Plays > 0)) {
            lever06Y = lever06Y - leverToggle;
                lever06 = 0;
                console.log('lever 3 is ', lever06);
                playQueue.push(song06);
                console.log(playQueue);
                dime2Plays = dime2Plays - 1;
                console.log('plays left: ', dime2Plays);
            }
                    // lever 7 set
        console.log('plays left: ', dime2Plays);
        if ((lever07=== 1) && (dime2Plays > 0)) {
            lever07Y = lever07Y - leverToggle;
                lever07 = 0;
                console.log('lever 3 is ', lever07);
                playQueue.push(song07);
                console.log(playQueue);
                dime2Plays = dime2Plays - 1;
                console.log('plays left: ', dime2Plays);
            }
                    // lever 8 set
        console.log('plays left: ', dime2Plays);
        if ((lever08=== 1) && (dime2Plays > 0)) {
            lever08Y = lever08Y - leverToggle;
                lever08 = 0;
                console.log('lever 3 is ', lever08);
                playQueue.push(song08);
                console.log(playQueue);
                dime2Plays = dime2Plays - 1;
                console.log('plays left: ', dime2Plays);
            }
                    // lever 9 set
        console.log('plays left: ', dime2Plays);
        if ((lever09=== 1) && (dime2Plays > 0)) {
            lever09Y = lever09Y - leverToggle;
                lever09 = 0;
                console.log('lever 3 is ', lever09);
                playQueue.push(song09);
                console.log(playQueue);
                dime2Plays = dime2Plays - 1;
                console.log('plays left: ', dime2Plays);
            }
                    // lever 10 set
        console.log('plays left: ', dime2Plays);
        if ((lever10=== 1) && (dime2Plays > 0)) {
            lever10Y = lever10Y - leverToggle;
                lever10 = 0;
                console.log('lever 3 is ', lever10);
                playQueue.push(song10);
                console.log(playQueue);
                dime2Plays = dime2Plays - 1;
                console.log('plays left: ', dime2Plays);
            }
                    // lever 11 set
        console.log('plays left: ', dime2Plays);
        if ((lever11=== 1) && (dime2Plays > 0)) {
            lever11Y = lever11Y - leverToggle;
                lever11 = 0;
                console.log('lever 3 is ', lever11);
                playQueue.push(song11);
                console.log(playQueue);
                dime2Plays = dime2Plays - 1;
                console.log('plays left: ', dime2Plays);
            }
                    // lever 12 set
        console.log('plays left: ', dime2Plays);
        if ((lever12=== 1) && (dime2Plays > 0)) {
            lever12Y = lever12Y - leverToggle;
                lever12 = 0;
                console.log('lever 12 is ', lever12);
                playQueue.push(song12);
                console.log(playQueue);
                dime2Plays = dime2Plays - 1;
                console.log('plays left: ', dime2Plays);
            }
                    // lever 13 set
        console.log('plays left: ', dime2Plays);
        if ((lever13=== 1) && (dime2Plays > 0)) {
            lever13Y = lever13Y - leverToggle;
                lever13 = 0;
                console.log('lever 13 is ', lever13);
                playQueue.push(song13);
                console.log(playQueue);
                dime2Plays = dime2Plays - 1;
                console.log('plays left: ', dime2Plays);
            }
                    // lever 14 set
        console.log('plays left: ', dime2Plays);
        if ((lever14=== 1) && (dime2Plays > 0)) {
            lever14Y = lever14Y - leverToggle;
                lever14 = 0;
                console.log('lever 14 is ', lever14);
                playQueue.push(song14);
                console.log(playQueue);
                dime2Plays = dime2Plays - 1;
                console.log('plays left: ', dime2Plays);
            }
                    // lever 15 set
        console.log('plays left: ', dime2Plays);
        if ((lever15=== 1) && (dime2Plays > 0)) {
            lever15Y = lever15Y - leverToggle;
                lever15 = 0;
                console.log('lever 15 is ', lever15);
                playQueue.push(song15);
                console.log(playQueue);
                dime2Plays = dime2Plays - 1;
                console.log('plays left: ', dime2Plays);
            }
                    // lever 16 set
        console.log('plays left: ', dime2Plays);
        if ((lever16=== 1) && (dime2Plays > 0)) {
            lever16Y = lever16Y - leverToggle;
                lever16 = 0;
                console.log('lever 16 is ', lever16);
                playQueue.push(song16);
                console.log(playQueue);
                dime2Plays = dime2Plays - 1;
                console.log('plays left: ', dime2Plays);
            }
                    // lever 17 set
        console.log('plays left: ', dime2Plays);
        if ((lever17=== 1) && (dime2Plays > 0)) {
            lever17Y = lever17Y - leverToggle;
                lever17 = 0;
                console.log('lever 17 is ', lever17);
                playQueue.push(song17);
                console.log(playQueue);
                dime2Plays = dime2Plays - 1;
                console.log('plays left: ', dime2Plays);
            }
                    // lever 18 set
        console.log('plays left: ', dime2Plays);
        if ((lever18=== 1) && (dime2Plays > 0)) {
            lever18Y = lever18Y - leverToggle;
                lever18 = 0;
                console.log('lever 18 is ', lever18);
                playQueue.push(song18);
                console.log(playQueue);
                dime2Plays = dime2Plays - 1;
                console.log('plays left: ', dime2Plays);
            }
                    // lever 19 set
        console.log('plays left: ', dime2Plays);
        if ((lever19=== 1) && (dime2Plays > 0)) {
            lever19Y = lever19Y - leverToggle;
                lever19 = 0;
                console.log('lever 19 is ', lever19);
                playQueue.push(song19);
                console.log(playQueue);
                dime2Plays = dime2Plays - 1;
                console.log('plays left: ', dime2Plays);
            }
                    // lever 20 set
        console.log('plays left: ', dime2Plays);
        if ((lever20=== 1) && (dime2Plays > 0)) {
            lever20Y = lever20Y - leverToggle;
                lever20 = 0;
                console.log('lever 20 is ', lever20);
                playQueue.push(song20);
                console.log(playQueue);
                dime2Plays = dime2Plays - 1;
                console.log('plays left: ', dime2Plays);
            }
        dimeDrop.play();
          startPlay();
// else quarter clicked
} else if ((mouseX >= quarterX && mouseX <= quarterX + coinSize) && 
    (mouseY >= quarterY && mouseY <= quarterY + coinSize)) {
        quarter5Plays = 5;
        console.log('plays left: ', quarter5Plays);
        // lever 1 set
        console.log('lever 1 is ', lever01);
        console.log('lever 2 is ', lever02);
        console.log('lever 3 is ', lever03);
        if ((lever01 === 1) && (quarter5Plays > 0)) {
            lever01Y = lever01Y - leverToggle;
            lever01 = 0;
            console.log('lever 1 is ', lever01);
            playQueue.push(song01);
            console.log(playQueue);
            quarter5Plays = quarter5Plays - 1;
            console.log('plays left: ', quarter5Plays);
        }
        // lever 2 set
        console.log('plays left: ', quarter5Plays);

        if ((lever02 === 1) && (quarter5Plays > 0)) {
            lever02Y = lever02Y - leverToggle;
                lever02 = 0;
                console.log('lever 2 is ', lever02);
                playQueue.push(song02);
                console.log(playQueue);
                quarter5Plays = quarter5Plays - 1;
                console.log('plays left: ', quarter5Plays);
            }
        // lever 3 set
        console.log('plays left: ', quarter5Plays);
        if ((lever03=== 1) && (quarter5Plays > 0)) {
            lever03Y = lever03Y - leverToggle;
                lever03 = 0;
                console.log('lever 3 is ', lever03);
                playQueue.push(song03);
                console.log(playQueue);
                quarter5Plays = quarter5Plays - 1;
                console.log('plays left: ', quarter5Plays);
            }
                    // lever 4 set
        console.log('plays left: ', quarter5Plays);
        if ((lever04=== 1) && (quarter5Plays > 0)) {
            lever04Y = lever04Y - leverToggle;
                lever04 = 0;
                console.log('lever 3 is ', lever04);
                playQueue.push(song04);
                console.log(playQueue);
                quarter5Plays = quarter5Plays - 1;
                console.log('plays left: ', quarter5Plays);
            }
                    // lever 5 set
        console.log('plays left: ', quarter5Plays);
        if ((lever05=== 1) && (quarter5Plays > 0)) {
            lever05Y = lever05Y - leverToggle;
                lever05 = 0;
                console.log('lever 3 is ', lever05);
                playQueue.push(song05);
                console.log(playQueue);
                quarter5Plays = quarter5Plays - 1;
                console.log('plays left: ', quarter5Plays);
        }
                    // lever 6 set
        console.log('plays left: ', quarter5Plays);
        if ((lever06=== 1) && (quarter5Plays > 0)) {
            lever06Y = lever06Y - leverToggle;
                lever06 = 0;
                console.log('lever 3 is ', lever06);
                playQueue.push(song06);
                console.log(playQueue);
                quarter5Plays = quarter5Plays - 1;
                console.log('plays left: ', quarter5Plays);
            }
                    // lever 7 set
        console.log('plays left: ', quarter5Plays);
        if ((lever07=== 1) && (quarter5Plays > 0)) {
            lever07Y = lever07Y - leverToggle;
                lever07 = 0;
                console.log('lever 3 is ', lever07);
                playQueue.push(song07);
                console.log(playQueue);
                quarter5Plays = quarter5Plays - 1;
                console.log('plays left: ', quarter5Plays);
            }
                    // lever 8 set
        console.log('plays left: ', quarter5Plays);
        if ((lever08=== 1) && (quarter5Plays > 0)) {
            lever08Y = lever08Y - leverToggle;
                lever08 = 0;
                console.log('lever 3 is ', lever08);
                playQueue.push(song08);
                console.log(playQueue);
                quarter5Plays = quarter5Plays - 1;
                console.log('plays left: ', quarter5Plays);
            }
                    // lever 9 set
        console.log('plays left: ', quarter5Plays);
        if ((lever09=== 1) && (quarter5Plays > 0)) {
            lever09Y = lever09Y - leverToggle;
                lever09 = 0;
                console.log('lever 3 is ', lever09);
                playQueue.push(song09);
                console.log(playQueue);
                quarter5Plays = quarter5Plays - 1;
                console.log('plays left: ', quarter5Plays);
            }
                    // lever 10 set
        console.log('plays left: ', quarter5Plays);
        if ((lever10=== 1) && (quarter5Plays > 0)) {
            lever10Y = lever10Y - leverToggle;
                lever10 = 0;
                console.log('lever 3 is ', lever10);
                playQueue.push(song10);
                console.log(playQueue);
                quarter5Plays = quarter5Plays - 1;
                console.log('plays left: ', quarter5Plays);
            }
                    // lever 11 set
        console.log('plays left: ', quarter5Plays);
        if ((lever11=== 1) && (quarter5Plays > 0)) {
            lever11Y = lever11Y - leverToggle;
                lever11 = 0;
                console.log('lever 3 is ', lever11);
                playQueue.push(song11);
                console.log(playQueue);
                quarter5Plays = quarter5Plays - 1;
                console.log('plays left: ', quarter5Plays);
            }
                    // lever 12 set
        console.log('plays left: ', quarter5Plays);
        if ((lever12=== 1) && (quarter5Plays > 0)) {
            lever12Y = lever12Y - leverToggle;
                lever12 = 0;
                console.log('lever 12 is ', lever12);
                playQueue.push(song12);
                console.log(playQueue);
                quarter5Plays = quarter5Plays - 1;
                console.log('plays left: ', quarter5Plays);
            }
                    // lever 13 set
        console.log('plays left: ', quarter5Plays);
        if ((lever13=== 1) && (quarter5Plays > 0)) {
            lever13Y = lever13Y - leverToggle;
                lever13 = 0;
                console.log('lever 13 is ', lever13);
                playQueue.push(song13);
                console.log(playQueue);
                quarter5Plays = quarter5Plays - 1;
                console.log('plays left: ', quarter5Plays);
            }
                    // lever 14 set
        console.log('plays left: ', quarter5Plays);
        if ((lever14=== 1) && (quarter5Plays > 0)) {
            lever14Y = lever14Y - leverToggle;
                lever14 = 0;
                console.log('lever 14 is ', lever14);
                playQueue.push(song14);
                console.log(playQueue);
                quarter5Plays = quarter5Plays - 1;
                console.log('plays left: ', quarter5Plays);
            }
                    // lever 15 set
        console.log('plays left: ', quarter5Plays);
        if ((lever15=== 1) && (quarter5Plays > 0)) {
            lever15Y = lever15Y - leverToggle;
                lever15 = 0;
                console.log('lever 15 is ', lever15);
                playQueue.push(song15);
                console.log(playQueue);
                quarter5Plays = quarter5Plays - 1;
                console.log('plays left: ', quarter5Plays);
            }
                    // lever 16 set
        console.log('plays left: ', quarter5Plays);
        if ((lever16=== 1) && (quarter5Plays > 0)) {
            lever16Y = lever16Y - leverToggle;
                lever16 = 0;
                console.log('lever 16 is ', lever16);
                playQueue.push(song16);
                console.log(playQueue);
                quarter5Plays = quarter5Plays - 1;
                console.log('plays left: ', quarter5Plays);
            }
                    // lever 17 set
        console.log('plays left: ', quarter5Plays);
        if ((lever17=== 1) && (quarter5Plays > 0)) {
            lever17Y = lever17Y - leverToggle;
                lever17 = 0;
                console.log('lever 17 is ', lever17);
                playQueue.push(song17);
                console.log(playQueue);
                quarter5Plays = quarter5Plays - 1;
                console.log('plays left: ', quarter5Plays);
            }
                    // lever 18 set
        console.log('plays left: ', quarter5Plays);
        if ((lever18=== 1) && (quarter5Plays > 0)) {
            lever18Y = lever18Y - leverToggle;
                lever18 = 0;
                console.log('lever 18 is ', lever18);
                playQueue.push(song18);
                console.log(playQueue);
                quarter5Plays = quarter5Plays - 1;
                console.log('plays left: ', quarter5Plays);
            }
                    // lever 19 set
        console.log('plays left: ', quarter5Plays);
        if ((lever19=== 1) && (quarter5Plays > 0)) {
            lever19Y = lever19Y - leverToggle;
                lever19 = 0;
                console.log('lever 19 is ', lever19);
                playQueue.push(song19);
                console.log(playQueue);
                quarter5Plays = quarter5Plays - 1;
                console.log('plays left: ', quarter5Plays);

            }
                    // lever 20 set
        console.log('plays left: ', quarter5Plays);
        if ((lever20=== 1) && (quarter5Plays > 0)) {
            lever20Y = lever20Y - leverToggle;
                lever20 = 0;
                console.log('lever 20 is ', lever20);
                playQueue.push(song20);
                console.log(playQueue);
                quarter5Plays = quarter5Plays - 1;
                console.log('plays left: ', quarter5Plays);

            }
            quarterDrop.play();
          startPlay();
// else lever 1 clicked when not set
} else if ((mouseX >= lever01X && mouseX <= lever01X + leverWidth) && 
    (mouseY >= lever01Y && mouseY <= lever01Y + leverHeight) && lever01 === 0) {
        lever01Y = lever01Y + leverToggle;
        lever01 = 1;
        leverThunk.play();
// else lever 1 clicked when set
} else if ((mouseX >= lever01X && mouseX <= lever01X + leverWidth) && 
    (mouseY >= lever01Y && mouseY <= lever01Y + leverHeight) && lever01 === 1) {
    lever01Y = lever01Y - leverToggle;
    lever01 = 0;
    leverThunkUp.play();
// else lever 2 clicked when not set
} else if ((mouseX >= lever02X && mouseX <= lever02X + leverWidth) && 
    (mouseY >= lever02Y && mouseY <= lever02Y + leverHeight) && lever02 === 0) {
    lever02Y = lever02Y + leverToggle;
    lever02 = 1;
    leverThunk.play();
// else lever 2 clicked when set
} else if ((mouseX >= lever02X && mouseX <= lever02X + leverWidth) && 
    (mouseY >= lever02Y && mouseY <= lever02Y + leverHeight) && lever02 === 1) {
    lever02Y = lever02Y - leverToggle;
    lever02 = 0;
    leverThunkUp.play();
// else lever 3 clicked when not set
} else if ((mouseX >= lever03X && mouseX <= lever03X + leverWidth) && 
    (mouseY >= lever03Y && mouseY <= lever03Y + leverHeight) && lever03 === 0) {
    lever03Y = lever03Y + leverToggle;
    lever03 = 1;
    leverThunk.play();
// else lever 3 clicked when set
} else if ((mouseX >= lever03X && mouseX <= lever03X + leverWidth) && 
    (mouseY >= lever03Y && mouseY <= lever03Y + leverHeight) && lever03 === 1) {
    lever03Y = lever03Y - leverToggle;
    lever03 = 0;
    leverThunkUp.play();
// else lever 4 clicked when not set
} else if ((mouseX >= lever04X && mouseX <= lever04X + leverWidth) && 
    (mouseY >= lever04Y && mouseY <= lever04Y + leverHeight) && lever04 === 0) {
    lever04Y = lever04Y + leverToggle;
    lever04 = 1;
    leverThunk.play();
// else lever 4 clicked when set
} else if ((mouseX >= lever04X && mouseX <= lever04X + leverWidth) && 
    (mouseY >= lever04Y && mouseY <= lever04Y + leverHeight) && lever04 === 1) {
    lever04Y = lever04Y - leverToggle;
    lever04 = 0;
    leverThunkUp.play();
// else lever 5 clicked when not set
} else if ((mouseX >= lever05X && mouseX <= lever05X + leverWidth) && 
    (mouseY >= lever05Y && mouseY <= lever05Y + leverHeight) && lever05 === 0) {
    lever05Y = lever05Y + leverToggle;
    lever05 = 1;
    leverThunk.play();
    // else lever 5 clicked when set
} else if ((mouseX >= lever05X && mouseX <= lever05X + leverWidth) && 
    (mouseY >= lever05Y && mouseY <= lever05Y + leverHeight) && lever05 === 1) {
    lever05Y = lever05Y - leverToggle;
    lever05 = 0;
    leverThunkUp.play();
// else lever 6 clicked when not set
} else if ((mouseX >= lever06X && mouseX <= lever06X + leverWidth) && 
(mouseY >= lever06Y && mouseY <= lever06Y + leverHeight) && lever06 === 0) {
lever06Y = lever06Y + leverToggle;
lever06 = 1;
leverThunk.play();
// else lever 6 clicked when set
} else if ((mouseX >= lever06X && mouseX <= lever06X + leverWidth) && 
(mouseY >= lever06Y && mouseY <= lever06Y + leverHeight) && lever06 === 1) {
lever06Y = lever06Y - leverToggle;
lever06 = 0;
leverThunkUp.play();
// else lever 7 clicked when not set
} else if ((mouseX >= lever07X && mouseX <= lever07X + leverWidth) && 
(mouseY >= lever07Y && mouseY <= lever07Y + leverHeight) && lever07 === 0) {
lever07Y = lever07Y + leverToggle;
lever07 = 1;
leverThunk.play();
// else lever 7 clicked when set
} else if ((mouseX >= lever07X && mouseX <= lever07X + leverWidth) && 
(mouseY >= lever07Y && mouseY <= lever07Y + leverHeight) && lever07 === 1) {
lever07Y = lever07Y - leverToggle;
lever07 = 0;
leverThunkUp.play();
// else lever 8 clicked when not set
} else if ((mouseX >= lever08X && mouseX <= lever08X + leverWidth) && 
(mouseY >= lever08Y && mouseY <= lever08Y + leverHeight) && lever08 === 0) {
lever08Y = lever08Y + leverToggle;
lever08 = 1;
leverThunk.play();
// else lever 8 clicked when set
} else if ((mouseX >= lever08X && mouseX <= lever08X + leverWidth) && 
(mouseY >= lever08Y && mouseY <= lever08Y + leverHeight) && lever08 === 1) {
lever08Y = lever08Y - leverToggle;
lever08 = 0;
leverThunkUp.play();
// else lever 9 clicked when not set
} else if ((mouseX >= lever09X && mouseX <= lever09X + leverWidth) && 
(mouseY >= lever09Y && mouseY <= lever09Y + leverHeight) && lever09 === 0) {
lever09Y = lever09Y + leverToggle;
lever09 = 1;
leverThunk.play();
// else lever 9 clicked when set
} else if ((mouseX >= lever09X && mouseX <= lever09X + leverWidth) && 
(mouseY >= lever09Y && mouseY <= lever09Y + leverHeight) && lever09 === 1) {
lever09Y = lever09Y - leverToggle;
lever09 = 0;
leverThunkUp.play();
// else lever 10 clicked when not set
} else if ((mouseX >= lever10X && mouseX <= lever10X + leverWidth) && 
(mouseY >= lever10Y && mouseY <= lever10Y + leverHeight) && lever10 === 0) {
lever10Y = lever10Y + leverToggle;
lever10 = 1;
leverThunk.play();
// else lever 10 clicked when set
} else if ((mouseX >= lever10X && mouseX <= lever10X + leverWidth) && 
(mouseY >= lever10Y && mouseY <= lever10Y + leverHeight) && lever10 === 1) {
lever10Y = lever10Y - leverToggle;
lever10 = 0;
leverThunkUp.play();
// else lever 11 clicked when not set
} else if ((mouseX >= lever11X && mouseX <= lever11X + leverWidth) && 
(mouseY >= lever11Y && mouseY <= lever11Y + leverHeight) && lever11 === 0) {
lever11Y = lever11Y + leverToggle;
lever11 = 1;
leverThunk.play();
// else lever 11 clicked when set
} else if ((mouseX >= lever11X && mouseX <= lever11X + leverWidth) && 
(mouseY >= lever11Y && mouseY <= lever11Y + leverHeight) && lever11 === 1) {
lever11Y = lever11Y - leverToggle;
lever11 = 0;
leverThunkUp.play();
// else lever 12 clicked when not set
} else if ((mouseX >= lever12X && mouseX <= lever12X + leverWidth) && 
(mouseY >= lever12Y && mouseY <= lever12Y + leverHeight) && lever12 === 0) {
lever12Y = lever12Y + leverToggle;
lever12 = 1;
leverThunk.play();
// else lever 12 clicked when set
} else if ((mouseX >= lever12X && mouseX <= lever12X + leverWidth) && 
(mouseY >= lever12Y && mouseY <= lever12Y + leverHeight) && lever12 === 1) {
lever12Y = lever12Y - leverToggle;
lever12 = 0;
leverThunkUp.play();
// else lever 13 clicked when not set
} else if ((mouseX >= lever13X && mouseX <= lever13X + leverWidth) && 
(mouseY >= lever13Y && mouseY <= lever13Y + leverHeight) && lever13 === 0) {
lever13Y = lever13Y + leverToggle;
lever13 = 1;
leverThunk.play();
// else lever 13 clicked when set
} else if ((mouseX >= lever13X && mouseX <= lever13X + leverWidth) && 
(mouseY >= lever13Y && mouseY <= lever13Y + leverHeight) && lever13 === 1) {
lever13Y = lever13Y - leverToggle;
lever13 = 0;
leverThunkUp.play();
// else lever 14 clicked when not set
} else if ((mouseX >= lever14X && mouseX <= lever14X + leverWidth) && 
(mouseY >= lever14Y && mouseY <= lever14Y + leverHeight) && lever14 === 0) {
lever14Y = lever14Y + leverToggle;
lever14 = 1;
leverThunk.play();
// else lever 14 clicked when set
} else if ((mouseX >= lever14X && mouseX <= lever14X + leverWidth) && 
(mouseY >= lever14Y && mouseY <= lever14Y + leverHeight) && lever14 === 1) {
lever14Y = lever14Y - leverToggle;
lever14 = 0;
leverThunkUp.play();
// else lever 15 clicked when not set
} else if ((mouseX >= lever15X && mouseX <= lever15X + leverWidth) && 
(mouseY >= lever15Y && mouseY <= lever15Y + leverHeight) && lever15 === 0) {
lever15Y = lever15Y + leverToggle;
lever15 = 1;
leverThunk.play();
// else lever 15 clicked when set
} else if ((mouseX >= lever15X && mouseX <= lever15X + leverWidth) && 
(mouseY >= lever15Y && mouseY <= lever15Y + leverHeight) && lever15 === 1) {
lever15Y = lever15Y - leverToggle;
lever15 = 0;
leverThunkUp.play();
// else lever 16 clicked when not set
} else if ((mouseX >= lever16X && mouseX <= lever16X + leverWidth) && 
(mouseY >= lever16Y && mouseY <= lever16Y + leverHeight) && lever16 === 0) {
lever16Y = lever16Y + leverToggle;
lever16 = 1;
leverThunk.play();
// else lever 16 clicked when set
} else if ((mouseX >= lever16X && mouseX <= lever16X + leverWidth) && 
(mouseY >= lever16Y && mouseY <= lever16Y + leverHeight) && lever16 === 1) {
lever16Y = lever16Y - leverToggle;
lever16 = 0;
leverThunkUp.play();
// else lever 17 clicked when not set
} else if ((mouseX >= lever17X && mouseX <= lever17X + leverWidth) && 
(mouseY >= lever17Y && mouseY <= lever17Y + leverHeight) && lever17 === 0) {
lever17Y = lever17Y + leverToggle;
lever17 = 1;
leverThunk.play();
// else lever 17 clicked when set
} else if ((mouseX >= lever17X && mouseX <= lever17X + leverWidth) && 
(mouseY >= lever17Y && mouseY <= lever17Y + leverHeight) && lever17 === 1) {
lever17Y = lever17Y - leverToggle;
lever17 = 0;
leverThunkUp.play();
// else lever 18 clicked when not set
} else if ((mouseX >= lever18X && mouseX <= lever18X + leverWidth) && 
(mouseY >= lever18Y && mouseY <= lever18Y + leverHeight) && lever18 === 0) {
lever18Y = lever18Y + leverToggle;
lever18 = 1;
leverThunk.play();
// else lever 18 clicked when set
} else if ((mouseX >= lever18X && mouseX <= lever18X + leverWidth) && 
(mouseY >= lever18Y && mouseY <= lever18Y + leverHeight) && lever18 === 1) {
lever18Y = lever18Y - leverToggle;
lever18 = 0;
leverThunkUp.play();
// else lever 19 clicked when not set
} else if ((mouseX >= lever19X && mouseX <= lever19X + leverWidth) && 
(mouseY >= lever19Y && mouseY <= lever19Y + leverHeight) && lever19 === 0) {
lever19Y = lever19Y + leverToggle;
lever19 = 1;
leverThunk.play();
// else lever 19 clicked when set
} else if ((mouseX >= lever19X && mouseX <= lever19X + leverWidth) && 
(mouseY >= lever19Y && mouseY <= lever19Y + leverHeight) && lever19 === 1) {
lever19Y = lever19Y - leverToggle;
lever19 = 0;
leverThunkUp.play();
// else lever 20 clicked when not set
} else if ((mouseX >= lever20X && mouseX <= lever20X + leverWidth) && 
(mouseY >= lever20Y && mouseY <= lever20Y + leverHeight) && lever20 === 0) {
lever20Y = lever20Y + leverToggle;
lever20 = 1;
leverThunk.play();
// else lever 20 clicked when set
} else if ((mouseX >= lever20X && mouseX <= lever20X + leverWidth) && 
(mouseY >= lever20Y && mouseY <= lever20Y + leverHeight) && lever20 === 1) {
lever20Y = lever20Y - leverToggle;
lever20 = 0;
leverThunkUp.play();
} 
    }



function startPlay() {
    console.log('playQueue is ', playQueue.length)
    console.log('Song playing is ', counterQueue[0]);
    if /*(playQueue.length < 2) && */(!playQueue[0].isPlaying()) {
        text(counterQueue[0], 851, 642);
        playQueue[0].play();
        playQueue[0].onended(continuePlay);
    }
}

function continuePlay() {
    console.log('done playing');
    playQueue.shift();
    console.log('playQueue is ', playQueue.length)
    if (playQueue.length > 0) {
        playQueue[0].play();
        playQueue[0].onended(continuePlay);

    }
  }
