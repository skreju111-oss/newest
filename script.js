const cover = document.getElementById("cover"); 
const grid1 = document.getElementById("grid1"); 
const page1txt = document.getElementById("page1txt"); 
const page2 = document.getElementById("page2"); 
const page2pic = document.getElementById("page2pic"); 
const page3 = document.getElementById("page3"); 
const page3txt = document.getElementById("page3txt"); 
const page4 = document.getElementById("page4"); 
const page4pic = document.getElementById("page4pic"); 
const page5 = document.getElementById("page5");
const page5txt = document.getElementById("page5txt");
const page6 = document.getElementById("page6");
const page6txt = document.getElementById("page6txt");
const page7 = document.getElementById("page7");
const page7txt = document.getElementById("page7txt");
const page8 = document.getElementById("page8");
const page8txt = document.getElementById("page8txt");
const page9 = document.getElementById("page9");
const page9txt = document.getElementById("page9txt");
const page10 = document.getElementById("page10");
const page10txt = document.getElementById("page10txt");

const page11 = document.getElementById("page11");
const page11pic = document.getElementById("page11pic");
const page12 = document.getElementById("page12");
const page12pic = document.getElementById("page12pic");
const page13 = document.getElementById("page13");
const page13pic = document.getElementById("page13pic");
const page14 = document.getElementById("page14");
const page14pic = document.getElementById("page14pic");
const page15 = document.getElementById("page15");
const page15pic = document.getElementById("page15pic");
const page16 = document.getElementById("page16");
const page16pic = document.getElementById("page16pic");
const page17 = document.getElementById("page17");
const page17pic = document.getElementById("page17pic");
const page18 = document.getElementById("page18");
const page18pic = document.getElementById("page18pic");
const page19 = document.getElementById("page19");
const page19pic = document.getElementById("page19pic");
const page20 = document.getElementById("page20");
const page20pic = document.getElementById("page20pic");
const page21 = document.getElementById("page21");
const page21pic = document.getElementById("page21pic");
const page22 = document.getElementById("page22");
const page22pic = document.getElementById("page22pic");

// Animations & Page 24
const page23 = document.getElementById("page23");
const ani1 = document.getElementById("ani1");
const ani2 = document.getElementById("ani2");
const page24 = document.getElementById("page24");
const ani4 = document.getElementById("ani4");

// Animations & Page 25
const page25 = document.getElementById("page25");
const angy1 = document.getElementById("angy1");
const ani5 = document.getElementById("ani5");

// Animations & Page 26
const page26 = document.getElementById("page26");
const angyWalker = document.getElementById("angy-walker");
const aniSequence = document.getElementById("ani-sequence");

// Animations & Page 27
const page27 = document.getElementById("page27");
const retSlide = document.getElementById("ret-slide");
const sorry = document.getElementById("sorry");
const retAnimation = document.getElementById("ret-animation");

// Animations & Page 28
const page28 = document.getElementById("page28");
const hugend = document.getElementById("hugend");

// Last Page
const lastpage = document.getElementById("lastpage");

const grid2 = document.getElementById("grid2");
const letter1 = document.getElementById("letter1");
const leftTap = document.getElementById("leftTap");
const middleTap = document.getElementById("middleTap");
const rightTap = document.getElementById("rightTap");

let stage = 0;
let pulseTimer; 
let writeTimer; 
let picPulseTimer; 
let isWriting = false; 
let letterStep = 1; 

// --- AUDIO 1: CDK ---
const cdk1 = new Audio('assets/cdk.mp3');
const cdk2 = new Audio('assets/cdk.mp3');
let activeCdk = cdk1;
let inactiveCdk = cdk2;
let cdkCrossfadeTriggered = false;
let isCdkPlaying = false;
let cdkFadeInTimer; 

function checkCdkCrossfade(e) {
    const audio = e.target;
    if (audio.duration && audio.currentTime >= audio.duration - 1 && !cdkCrossfadeTriggered) {
        cdkCrossfadeTriggered = true;
        inactiveCdk.currentTime = 0;
        inactiveCdk.volume = 0;
        inactiveCdk.play().catch(err => console.log(err));
        
        let steps = 0;
        let fadeTimer = setInterval(() => {
            steps++;
            let progress = steps / 20; 
            if (steps >= 20) {
                clearInterval(fadeTimer);
                activeCdk.pause();
                activeCdk.volume = 0; 
                inactiveCdk.volume = 1; 
                let temp = activeCdk;
                activeCdk = inactiveCdk;
                inactiveCdk = temp;
                cdkCrossfadeTriggered = false; 
            } else {
                activeCdk.volume = 1 - progress;
                inactiveCdk.volume = progress;
            }
        }, 50); 
    }
}
cdk1.addEventListener('timeupdate', checkCdkCrossfade);
cdk2.addEventListener('timeupdate', checkCdkCrossfade);

// --- AUDIO 2: ISHAREY ---
const isharey1 = new Audio('assets/isharey.mp3');
const isharey2 = new Audio('assets/isharey.mp3');
let activeIsharey = isharey1;
let inactiveIsharey = isharey2;
let ishareyCrossfadeTriggered = false;
let isIshareyPlaying = false;
let ishareyFadeInTimer; 

function checkIshareyCrossfade(e) {
    const audio = e.target;
    if (audio.duration && audio.currentTime >= audio.duration - 1 && !ishareyCrossfadeTriggered) {
        ishareyCrossfadeTriggered = true;
        inactiveIsharey.currentTime = 0;
        inactiveIsharey.volume = 0;
        inactiveIsharey.play().catch(err => console.log(err));
        
        let steps = 0;
        let fadeTimer = setInterval(() => {
            steps++;
            let progress = steps / 20; 
            if (steps >= 20) {
                clearInterval(fadeTimer);
                activeIsharey.pause();
                activeIsharey.volume = 0; 
                inactiveIsharey.volume = 1; 
                let temp = activeIsharey;
                activeIsharey = inactiveIsharey;
                inactiveIsharey = temp;
                ishareyCrossfadeTriggered = false; 
            } else {
                activeIsharey.volume = 1 - progress;
                inactiveIsharey.volume = progress;
            }
        }, 50); 
    }
}
isharey1.addEventListener('timeupdate', checkIshareyCrossfade);
isharey2.addEventListener('timeupdate', checkIshareyCrossfade);

// --- AUDIO 3: MAAFI ---
const maafi1 = new Audio('assets/ani/maafi.mp3');
const maafi2 = new Audio('assets/ani/maafi.mp3');
let activeMaafi = maafi1;
let inactiveMaafi = maafi2;
let maafiCrossfadeTriggered = false;
let isMaafiPlaying = false;
let maafiFadeInTimer;

function checkMaafiCrossfade(e) {
    const audio = e.target;
    if (audio.duration && audio.currentTime >= audio.duration - 1 && !maafiCrossfadeTriggered) {
        maafiCrossfadeTriggered = true;
        inactiveMaafi.currentTime = 0;
        inactiveMaafi.volume = 0;
        inactiveMaafi.play().catch(err => console.log(err));
        
        let steps = 0;
        let fadeTimer = setInterval(() => {
            steps++;
            let progress = steps / 20; 
            if (steps >= 20) {
                clearInterval(fadeTimer);
                activeMaafi.pause();
                activeMaafi.volume = 0; 
                inactiveMaafi.volume = 1; 
                let temp = activeMaafi;
                activeMaafi = inactiveMaafi;
                inactiveMaafi = temp;
                maafiCrossfadeTriggered = false; 
            } else {
                activeMaafi.volume = 1 - progress;
                inactiveMaafi.volume = progress;
            }
        }, 50); 
    }
}
maafi1.addEventListener('timeupdate', checkMaafiCrossfade);
maafi2.addEventListener('timeupdate', checkMaafiCrossfade);

// --- MASTER AUDIO CONTROLLER ---
function updateMusic() {
    if (stage >= 3 && stage <= 19) {
        if (isIshareyPlaying) {
            clearInterval(ishareyFadeInTimer);
            activeIsharey.pause();
            inactiveIsharey.pause();
            isIshareyPlaying = false;
            ishareyCrossfadeTriggered = false;
        }
        if (isMaafiPlaying) {
            clearInterval(maafiFadeInTimer);
            activeMaafi.pause();
            inactiveMaafi.pause();
            isMaafiPlaying = false;
            maafiCrossfadeTriggered = false;
        }
        if (!isCdkPlaying) {
            activeCdk.currentTime = 0;
            activeCdk.volume = 0; 
            activeCdk.play().catch(err => console.log("Tap needed", err));
            isCdkPlaying = true;
            clearInterval(cdkFadeInTimer);
            let steps = 0; 
            cdkFadeInTimer = setInterval(() => {
                steps++;
                let progress = steps / 100; 
                if (steps >= 100) { clearInterval(cdkFadeInTimer); activeCdk.volume = 1; } 
                else { activeCdk.volume = progress; }
            }, 50);
        }
    } 
    else if (stage >= 20 && stage <= 46) {
        if (isCdkPlaying) {
            clearInterval(cdkFadeInTimer);
            activeCdk.pause();
            inactiveCdk.pause();
            isCdkPlaying = false;
            cdkCrossfadeTriggered = false;
        }
        if (isMaafiPlaying) {
            clearInterval(maafiFadeInTimer);
            activeMaafi.pause();
            inactiveMaafi.pause();
            isMaafiPlaying = false;
            maafiCrossfadeTriggered = false;
        }
        if (!isIshareyPlaying) {
            activeIsharey.currentTime = 0;
            activeIsharey.volume = 0; 
            activeIsharey.play().catch(err => console.log("Tap needed", err));
            isIshareyPlaying = true;
            clearInterval(ishareyFadeInTimer);
            let steps = 0; 
            ishareyFadeInTimer = setInterval(() => {
                steps++;
                let progress = steps / 100; 
                if (steps >= 100) { clearInterval(ishareyFadeInTimer); activeIsharey.volume = 1; } 
                else { activeIsharey.volume = progress; }
            }, 50);
        }
    } 
    else if (stage >= 47) {
        if (isCdkPlaying) {
            clearInterval(cdkFadeInTimer);
            activeCdk.pause();
            inactiveCdk.pause();
            isCdkPlaying = false;
            cdkCrossfadeTriggered = false;
        }
        if (isIshareyPlaying) {
            clearInterval(ishareyFadeInTimer);
            activeIsharey.pause();
            inactiveIsharey.pause();
            isIshareyPlaying = false;
            ishareyCrossfadeTriggered = false;
        }
        if (!isMaafiPlaying) {
            activeMaafi.currentTime = 0;
            activeMaafi.volume = 0; 
            activeMaafi.play().catch(err => console.log("Tap needed", err));
            isMaafiPlaying = true;
            clearInterval(maafiFadeInTimer);
            let steps = 0; 
            maafiFadeInTimer = setInterval(() => {
                steps++;
                let progress = steps / 100; 
                if (steps >= 100) { clearInterval(maafiFadeInTimer); activeMaafi.volume = 1; } 
                else { activeMaafi.volume = progress; }
            }, 50);
        }
    }
    else {
        if (isCdkPlaying) { clearInterval(cdkFadeInTimer); activeCdk.pause(); inactiveCdk.pause(); isCdkPlaying = false; cdkCrossfadeTriggered = false; }
        if (isIshareyPlaying) { clearInterval(ishareyFadeInTimer); activeIsharey.pause(); inactiveIsharey.pause(); isIshareyPlaying = false; ishareyCrossfadeTriggered = false; }
        if (isMaafiPlaying) { clearInterval(maafiFadeInTimer); activeMaafi.pause(); inactiveMaafi.pause(); isMaafiPlaying = false; maafiCrossfadeTriggered = false; }
    }
}
// -------------------------------------

const handleForwardTap = () => {
    if (stage === 63) return;

    if (stage === 3 && isWriting) {
        clearTimeout(writeTimer);
        page1txt.classList.remove("writing");
        page1txt.classList.add("written"); 
        isWriting = false;
        stage = 4; 
    } 
    else if (stage === 4) {
        page2.classList.add("show-page2"); 
        stage = 5; 
    }
    else if (stage === 5) {
        page2pic.style.transform = "translateX(0)"; 
        stage = 6;
        picPulseTimer = setTimeout(() => {
            if (stage === 6) { 
                page2pic.classList.add("pulse-1s");
                setTimeout(() => page2pic.classList.remove("pulse-1s"), 1000);
            }
        }, 1500);
    }
    else if (stage === 6) {
        page3.classList.add("show-page3");
        stage = 7;
        writeTimer = setTimeout(() => {
            if (stage === 7) {
                page3txt.classList.add("writing");
                isWriting = true;
                writeTimer = setTimeout(() => {
                    if (isWriting) {
                        page3txt.classList.remove("writing");
                        page3txt.classList.add("written");
                        isWriting = false;
                        stage = 8;
                    }
                }, 2000);
            }
        }, 1500);
    }
    else if (stage === 7 && isWriting) {
        clearTimeout(writeTimer);
        page3txt.classList.remove("writing");
        page3txt.classList.add("written");
        isWriting = false;
        stage = 8;
    }
    else if (stage === 8) {
        page4.classList.add("show-page4");
        stage = 9;
    }
    else if (stage === 9) {
        page4pic.style.transform = "translateX(0)"; 
        stage = 10;
        picPulseTimer = setTimeout(() => {
            if (stage === 10) {
                page4pic.classList.add("pulse-1s");
                setTimeout(() => page4pic.classList.remove("pulse-1s"), 1000);
            }
        }, 1500);
    }
    else if (stage === 10) {
        page5.classList.add("show-page5");
        stage = 11;
        writeTimer = setTimeout(() => {
            if (stage === 11) {
                page5txt.classList.add("writing");
                isWriting = true;
                writeTimer = setTimeout(() => {
                    if (isWriting) {
                        page5txt.classList.remove("writing");
                        page5txt.classList.add("written");
                        isWriting = false;
                        stage = 12;
                    }
                }, 2000);
            }
        }, 1500);
    }
    else if (stage === 11 && isWriting) {
        clearTimeout(writeTimer);
        page5txt.classList.remove("writing");
        page5txt.classList.add("written");
        isWriting = false;
        stage = 12;
    }
    else if (stage === 12) {
        page6.classList.add("show-page6");
        stage = 13;
        writeTimer = setTimeout(() => {
            if (stage === 13) {
                page6txt.classList.add("writing");
                isWriting = true;
                writeTimer = setTimeout(() => {
                    if (isWriting) {
                        page6txt.classList.remove("writing");
                        page6txt.classList.add("written");
                        isWriting = false;
                        stage = 14;
                    }
                }, 2000);
            }
        }, 1500);
    }
    else if (stage === 13 && isWriting) {
        clearTimeout(writeTimer);
        page6txt.classList.remove("writing");
        page6txt.classList.add("written");
        isWriting = false;
        stage = 14;
    }
    else if (stage === 14) {
        page7.classList.add("show-page7");
        stage = 15;
        writeTimer = setTimeout(() => {
            if (stage === 15) {
                page7txt.classList.add("writing");
                isWriting = true;
                writeTimer = setTimeout(() => {
                    if (isWriting) {
                        page7txt.classList.remove("writing");
                        page7txt.classList.add("written");
                        isWriting = false;
                        stage = 16;
                    }
                }, 2000);
            }
        }, 1500);
    }
    else if (stage === 15 && isWriting) {
        clearTimeout(writeTimer);
        page7txt.classList.remove("writing");
        page7txt.classList.add("written");
        isWriting = false;
        stage = 16;
    }
    else if (stage === 16) {
        page8.classList.add("show-page8");
        stage = 17;
        writeTimer = setTimeout(() => {
            if (stage === 17) {
                page8txt.classList.add("writing");
                isWriting = true;
                writeTimer = setTimeout(() => {
                    if (isWriting) {
                        page8txt.classList.remove("writing");
                        page8txt.classList.add("written");
                        isWriting = false;
                        stage = 18;
                    }
                }, 2000);
            }
        }, 1500);
    }
    else if (stage === 17 && isWriting) {
        clearTimeout(writeTimer);
        page8txt.classList.remove("writing");
        page8txt.classList.add("written");
        isWriting = false;
        stage = 18;
    }
    else if (stage === 18) {
        page9.classList.add("show-page9");
        stage = 19;
        writeTimer = setTimeout(() => {
            if (stage === 19) {
                page9txt.classList.add("writing");
                isWriting = true;
                writeTimer = setTimeout(() => {
                    if (isWriting) {
                        page9txt.classList.remove("writing");
                        page9txt.classList.add("written");
                        isWriting = false;
                        stage = 20;
                    }
                }, 2000);
            }
        }, 1500);
    }
    else if (stage === 19 && isWriting) {
        clearTimeout(writeTimer);
        page9txt.classList.remove("writing");
        page9txt.classList.add("written");
        isWriting = false;
        stage = 20;
    }
    else if (stage === 20) {
        page10.classList.add("show-page10");
        stage = 21;
        writeTimer = setTimeout(() => {
            if (stage === 21) {
                page10txt.classList.add("writing");
                isWriting = true;
                writeTimer = setTimeout(() => {
                    if (isWriting) {
                        page10txt.classList.remove("writing");
                        page10txt.classList.add("written");
                        isWriting = false;
                        stage = 22;
                    }
                }, 2000);
            }
        }, 1500);
    }
    else if (stage === 21 && isWriting) {
        clearTimeout(writeTimer);
        page10txt.classList.remove("writing");
        page10txt.classList.add("written");
        isWriting = false;
        stage = 22;
    }
    else if (stage === 22) {
        page11.classList.add("show-page11");
        stage = 23;
    }
    else if (stage === 23) {
        page11pic.style.transform = "translateX(0)";
        stage = 24;
        picPulseTimer = setTimeout(() => {
            if (stage === 24) {
                page11pic.classList.add("pulse-1s");
                setTimeout(() => page11pic.classList.remove("pulse-1s"), 1000);
            }
        }, 1500);
    }
    else if (stage === 24) {
        page12.classList.add("show-page12");
        stage = 25;
    }
    else if (stage === 25) {
        page12pic.style.transform = "translateX(0)";
        stage = 26;
        picPulseTimer = setTimeout(() => {
            if (stage === 26) {
                page12pic.classList.add("pulse-1s");
                setTimeout(() => page12pic.classList.remove("pulse-1s"), 1000);
            }
        }, 1500);
    }
    else if (stage === 26) {
        page13.classList.add("show-page13");
        stage = 27;
    }
    else if (stage === 27) {
        page13pic.style.transform = "translateX(0)";
        stage = 28;
        picPulseTimer = setTimeout(() => {
            if (stage === 28) {
                page13pic.classList.add("pulse-1s");
                setTimeout(() => page13pic.classList.remove("pulse-1s"), 1000);
            }
        }, 1500);
    }
    else if (stage === 28) {
        page14.classList.add("show-page14");
        stage = 29;
    }
    else if (stage === 29) {
        page14pic.style.transform = "translateX(0)";
        stage = 30;
        picPulseTimer = setTimeout(() => {
            if (stage === 30) {
                page14pic.classList.add("pulse-1s");
                setTimeout(() => page14pic.classList.remove("pulse-1s"), 1000);
            }
        }, 1500);
    }
    else if (stage === 30) {
        page15.classList.add("show-page15");
        stage = 31;
    }
    else if (stage === 31) {
        page15pic.style.transform = "translateX(0)";
        stage = 32;
        picPulseTimer = setTimeout(() => {
            if (stage === 32) {
                page15pic.classList.add("pulse-1s");
                setTimeout(() => page15pic.classList.remove("pulse-1s"), 1000);
            }
        }, 1500);
    }
    else if (stage === 32) {
        page16.classList.add("show-page16");
        stage = 33;
    }
    else if (stage === 33) {
        page16pic.style.transform = "translateX(0)";
        stage = 34;
        picPulseTimer = setTimeout(() => {
            if (stage === 34) {
                page16pic.classList.add("pulse-1s");
                setTimeout(() => page16pic.classList.remove("pulse-1s"), 1000);
            }
        }, 1500);
    }
    else if (stage === 34) {
        page17.classList.add("show-page17");
        stage = 35;
    }
    else if (stage === 35) {
        page17pic.style.transform = "translateX(0)";
        stage = 36;
        picPulseTimer = setTimeout(() => {
            if (stage === 36) {
                page17pic.classList.add("pulse-1s");
                setTimeout(() => page17pic.classList.remove("pulse-1s"), 1000);
            }
        }, 1500);
    }
    else if (stage === 36) {
        page18.classList.add("show-page18");
        stage = 37;
    }
    else if (stage === 37) {
        page18pic.style.transform = "translateX(0)";
        stage = 38;
        picPulseTimer = setTimeout(() => {
            if (stage === 38) {
                page18pic.classList.add("pulse-1s");
                setTimeout(() => page18pic.classList.remove("pulse-1s"), 1000);
            }
        }, 1500);
    }
    else if (stage === 38) {
        page19.classList.add("show-page19");
        stage = 39;
    }
    else if (stage === 39) {
        page19pic.style.transform = "translateX(0)";
        stage = 40;
        picPulseTimer = setTimeout(() => {
            if (stage === 40) {
                page19pic.classList.add("pulse-1s");
                setTimeout(() => page19pic.classList.remove("pulse-1s"), 1000);
            }
        }, 1500);
    }
    else if (stage === 40) {
        page20.classList.add("show-page20");
        stage = 41;
    }
    else if (stage === 41) {
        page20pic.style.transform = "translateX(0)";
        stage = 42;
        picPulseTimer = setTimeout(() => {
            if (stage === 42) {
                page20pic.classList.add("pulse-1s");
                setTimeout(() => page20pic.classList.remove("pulse-1s"), 1000);
            }
        }, 1500);
    }
    else if (stage === 42) {
        page21.classList.add("show-page21");
        stage = 43;
    }
    else if (stage === 43) {
        page21pic.style.transform = "translateX(0)";
        stage = 44;
        picPulseTimer = setTimeout(() => {
            if (stage === 44) {
                page21pic.classList.add("pulse-1s");
                setTimeout(() => page21pic.classList.remove("pulse-1s"), 1000);
            }
        }, 1500);
    }
    else if (stage === 44) {
        page22.classList.add("show-page22");
        stage = 45;
    }
    else if (stage === 45) {
        page22pic.style.transform = "translateX(0)";
        stage = 46;
        picPulseTimer = setTimeout(() => {
            if (stage === 46) {
                page22pic.classList.add("pulse-1s");
                setTimeout(() => page22pic.classList.remove("pulse-1s"), 1000);
            }
        }, 1500);
    }
    else if (stage === 46) {
        page23.classList.add("show-page23");
        stage = 47;
    }
    else if (stage === 47) {
        ani1.style.transform = "translateX(0)";
        stage = 48;
    }
    else if (stage === 48) {
        ani2.style.transform = "translateX(0)";
        stage = 49;
    }
    else if (stage === 49) {
        page23.style.transition = "transform 1.5s cubic-bezier(.22, 1, .36, 1)";
        page23.style.transform = "translateX(-100%)"; 
        ani2.style.transform = "translateX(-100%)";   
        page24.style.transform = "translateX(0)";     
        stage = 50;                  
    }
    else if (stage === 50) {
        ani4.style.transform = "translateX(0)";
        stage = 51;
    }
    else if (stage === 51) {
        page24.style.transition = "transform 1.5s cubic-bezier(.22, 1, .36, 1)";
        page24.style.transform = "translateX(-100%)";
        ani1.style.transform = "translateX(-100%)";
        ani4.style.transform = "translateX(-100%)";
        page25.style.transform = "translateX(0)";
        stage = 52;
    }
    else if (stage === 52) {
        angy1.style.transform = "translateX(0)";
        stage = 53;
    }
    else if (stage === 53) {
        ani5.style.transform = "translateX(0)";
        stage = 54;
    }
    else if (stage === 54) {
        page25.style.transition = "transform 1.5s cubic-bezier(.22, 1, .36, 1)";
        page25.style.transform = "translateX(-100%)";
        angy1.style.transform = "translateX(-100%)";
        ani5.style.transform = "translateX(-100%)";
        page26.style.transform = "translateX(0)";
        stage = 55;
    }
    else if (stage === 55) {
        angyWalker.style.transform = "translateX(0)";
        stage = 56;
    }
    else if (stage === 56) {
        aniSequence.style.transform = "translateX(0)";
        stage = 57;
    }
    else if (stage === 57) {
        page26.style.transition = "transform 1.5s cubic-bezier(.22, 1, .36, 1)";
        page26.style.transform = "translateX(-100%)";
        angyWalker.style.transform = "translateX(-100%)";
        aniSequence.style.transform = "translateX(-100%)";
        page27.style.transform = "translateX(0)";
        stage = 58;
    }
    else if (stage === 58) {
        retSlide.style.transform = "translateX(0)";
        stage = 59;
    }
    else if (stage === 59) {
        sorry.style.transform = "translateX(0)";
        stage = 60;
    }
    else if (stage === 60) {
        retSlide.style.opacity = "0";
        retAnimation.classList.remove("active");
        void retAnimation.offsetWidth; 
        retAnimation.classList.add("active");
        stage = 61;
    }
    else if (stage === 61) {
        page28.classList.add("show-page28");
        hugend.classList.add("show-hugend");
        stage = 62;
    }
    else if (stage === 62) {
        lastpage.classList.add("show-lastpage");
        stage = 63;
    }
};

// NEXT (Right Tap)
rightTap.addEventListener("click", () => {
    if (stage === 0) {
        grid2.style.left = "0"; 
        stage = 1;
    } 
    else if (stage === 1) {
        letter1.style.left = "0"; 
        stage = 2;
        pulseTimer = setTimeout(() => {
            if (stage === 2) { 
                letter1.classList.add("pulsing");
            }
        }, 1500); 
    }
    else if (stage >= 3) {
        handleForwardTap();
    }
    updateMusic();
});

// BACK / REWIND (Left Tap)
leftTap.addEventListener("click", () => {
    if (stage === 63) {
        lastpage.classList.remove("show-lastpage");
        stage = 62;
    }
    else if (stage === 62) {
        page28.classList.remove("show-page28");
        hugend.classList.remove("show-hugend");
        stage = 61;
    }
    else if (stage === 61) {
        retAnimation.classList.remove("active");
        retSlide.style.opacity = "1"; 
        stage = 60;
    }
    else if (stage === 60) {
        sorry.style.transform = "translateX(-100%)";
        stage = 59;
    }
    else if (stage === 59) {
        retSlide.style.transform = "translateX(-100%)";
        stage = 58;
    }
    else if (stage === 58) {
        page27.style.transform = "translateX(100%)";
        page26.style.transform = "translateX(0)";
        angyWalker.style.transform = "translateX(0)";
        aniSequence.style.transform = "translateX(0)";
        stage = 57;
    }
    else if (stage === 57) {
        aniSequence.style.transform = "translateX(-100%)";
        stage = 56;
    }
    else if (stage === 56) {
        angyWalker.style.transform = "translateX(-100%)";
        stage = 55;
    }
    else if (stage === 55) {
        page26.style.transform = "translateX(100%)";
        page25.style.transform = "translateX(0)";
        angy1.style.transform = "translateX(0)";
        ani5.style.transform = "translateX(0)";
        stage = 54;
    }
    else if (stage === 54) {
        ani5.style.transform = "translateX(-100%)";
        stage = 53;
    }
    else if (stage === 53) {
        angy1.style.transform = "translateX(-100%)";
        stage = 52;
    }
    else if (stage === 52) {
        page25.style.transform = "translateX(100%)"; 
        page24.style.transform = "translateX(0)";    
        ani1.style.transform = "translateX(0)";      
        ani4.style.transform = "translateX(0)";      
        stage = 51;
    }
    else if (stage === 51) {
        ani4.style.transform = "translateX(-100%)";
        stage = 50;
    }
    else if (stage === 50) {
        page24.style.transform = "translateX(100%)"; 
        page23.style.transform = "translateX(0)";    
        ani2.style.transform = "translateX(0)";      
        stage = 49;
    }
    else if (stage === 49) {
        ani2.style.transform = "translateX(-100%)";
        stage = 48;
    }
    else if (stage === 48) {
        ani1.style.transform = "translateX(-100%)";
        stage = 47;
    }
    else if (stage === 47) {
        page23.classList.remove("show-page23");
        stage = 46;
    }
    else if (stage === 46) {
        clearTimeout(picPulseTimer);
        page22pic.classList.remove("pulse-1s");
        page22pic.style.transform = "translateX(-100%)";
        stage = 45;
    }
    else if (stage === 45) {
        page22.classList.remove("show-page22");
        stage = 44;
    }
    else if (stage === 44) {
        clearTimeout(picPulseTimer);
        page21pic.classList.remove("pulse-1s");
        page21pic.style.transform = "translateX(-100%)";
        stage = 43;
    }
    else if (stage === 43) {
        page21.classList.remove("show-page21");
        stage = 42;
    }
    else if (stage === 42) {
        clearTimeout(picPulseTimer);
        page20pic.classList.remove("pulse-1s");
        page20pic.style.transform = "translateX(-100%)";
        stage = 41;
    }
    else if (stage === 41) {
        page20.classList.remove("show-page20");
        stage = 40;
    }
    else if (stage === 40) {
        clearTimeout(picPulseTimer);
        page19pic.classList.remove("pulse-1s");
        page19pic.style.transform = "translateX(-100%)";
        stage = 39;
    }
    else if (stage === 39) {
        page19.classList.remove("show-page19");
        stage = 38;
    }
    else if (stage === 38) {
        clearTimeout(picPulseTimer);
        page18pic.classList.remove("pulse-1s");
        page18pic.style.transform = "translateX(-100%)";
        stage = 37;
    }
    else if (stage === 37) {
        page18.classList.remove("show-page18");
        stage = 36;
    }
    else if (stage === 36) {
        clearTimeout(picPulseTimer);
        page17pic.classList.remove("pulse-1s");
        page17pic.style.transform = "translateX(-100%)";
        stage = 35;
    }
    else if (stage === 35) {
        page17.classList.remove("show-page17");
        stage = 34;
    }
    else if (stage === 34) {
        clearTimeout(picPulseTimer);
        page16pic.classList.remove("pulse-1s");
        page16pic.style.transform = "translateX(-100%)";
        stage = 33;
    }
    else if (stage === 33) {
        page16.classList.remove("show-page16");
        stage = 32;
    }
    else if (stage === 32) {
        clearTimeout(picPulseTimer);
        page15pic.classList.remove("pulse-1s");
        page15pic.style.transform = "translateX(-100%)";
        stage = 31;
    }
    else if (stage === 31) {
        page15.classList.remove("show-page15");
        stage = 30;
    }
    else if (stage === 30) {
        clearTimeout(picPulseTimer);
        page14pic.classList.remove("pulse-1s");
        page14pic.style.transform = "translateX(-100%)";
        stage = 29;
    }
    else if (stage === 29) {
        page14.classList.remove("show-page14");
        stage = 28;
    }
    else if (stage === 28) {
        clearTimeout(picPulseTimer);
        page13pic.classList.remove("pulse-1s");
        page13pic.style.transform = "translateX(-100%)";
        stage = 27;
    }
    else if (stage === 27) {
        page13.classList.remove("show-page13");
        stage = 26;
    }
    else if (stage === 26) {
        clearTimeout(picPulseTimer);
        page12pic.classList.remove("pulse-1s");
        page12pic.style.transform = "translateX(-100%)";
        stage = 25;
    }
    else if (stage === 25) {
        page12.classList.remove("show-page12");
        stage = 24;
    }
    else if (stage === 24) {
        clearTimeout(picPulseTimer);
        page11pic.classList.remove("pulse-1s");
        page11pic.style.transform = "translateX(-100%)";
        stage = 23;
    }
    else if (stage === 23) {
        page11.classList.remove("show-page11");
        stage = 22;
    }
    else if (stage === 22 || stage === 21) {
        clearTimeout(writeTimer);
        isWriting = false;
        page10txt.classList.remove("writing", "written");
        page10.classList.remove("show-page10");
        stage = 20;
    }
    else if (stage === 20 || stage === 19) {
        clearTimeout(writeTimer);
        isWriting = false;
        page9txt.classList.remove("writing", "written");
        page9.classList.remove("show-page9");
        stage = 18;
    }
    else if (stage === 18 || stage === 17) {
        clearTimeout(writeTimer);
        isWriting = false;
        page8txt.classList.remove("writing", "written");
        page8.classList.remove("show-page8");
        stage = 16;
    }
    else if (stage === 16 || stage === 15) {
        clearTimeout(writeTimer);
        isWriting = false;
        page7txt.classList.remove("writing", "written");
        page7.classList.remove("show-page7");
        stage = 14;
    }
    else if (stage === 14 || stage === 13) {
        clearTimeout(writeTimer);
        isWriting = false;
        page6txt.classList.remove("writing", "written");
        page6.classList.remove("show-page6");
        stage = 12;
    }
    else if (stage === 12 || stage === 11) {
        clearTimeout(writeTimer);
        isWriting = false;
        page5txt.classList.remove("writing", "written");
        page5.classList.remove("show-page5");
        stage = 10;
    }
    else if (stage === 10) {
        clearTimeout(picPulseTimer);
        page4pic.classList.remove("pulse-1s");
        page4pic.style.transform = "translateX(-100%)";
        stage = 9;
    }
    else if (stage === 9) {
        page4.classList.remove("show-page4");
        stage = 8;
    }
    else if (stage === 8 || stage === 7) {
        clearTimeout(writeTimer);
        isWriting = false;
        page3txt.classList.remove("writing", "written");
        page3.classList.remove("show-page3");
        stage = 6;
    }
    else if (stage === 6) {
        clearTimeout(picPulseTimer);
        page2pic.classList.remove("pulse-1s");
        page2pic.style.transform = "translateX(-100%)";
        stage = 5;
    }
    else if (stage === 5) {
        page2.classList.remove("show-page2"); 
        stage = 4;
    }
    // REWIND FIX: INSTANT SNAP BACK TO STAGE 2
    else if (stage === 3 || stage === 4) {
        clearTimeout(writeTimer);
        clearTimeout(picPulseTimer);
        isWriting = false;
        
        page1txt.classList.remove("writing", "written"); 
        page2.classList.remove("show-page2");
        page2pic.style.transform = "translateX(-100%)";
        page2pic.classList.remove("pulse-1s");
        page3.classList.remove("show-page3");
        page3txt.classList.remove("writing", "written");
        page4.classList.remove("show-page4");
        page4pic.style.transform = "translateX(-100%)"; 
        page4pic.classList.remove("pulse-1s");
        
        page5.classList.remove("show-page5");
        page5txt.classList.remove("writing", "written");
        page6.classList.remove("show-page6");
        page6txt.classList.remove("writing", "written");
        page7.classList.remove("show-page7");
        page7txt.classList.remove("writing", "written");
        page8.classList.remove("show-page8");
        page8txt.classList.remove("writing", "written");
        page9.classList.remove("show-page9");
        page9txt.classList.remove("writing", "written");
        page10.classList.remove("show-page10");
        page10txt.classList.remove("writing", "written");

        page11.classList.remove("show-page11");
        page11pic.classList.remove("pulse-1s");
        page11pic.style.transform = "translateX(-100%)";
        
        page12.classList.remove("show-page12");
        page12pic.classList.remove("pulse-1s");
        page12pic.style.transform = "translateX(-100%)";
        
        page13.classList.remove("show-page13");
        page13pic.classList.remove("pulse-1s");
        page13pic.style.transform = "translateX(-100%)";
        
        page14.classList.remove("show-page14");
        page14pic.classList.remove("pulse-1s");
        page14pic.style.transform = "translateX(-100%)";
        
        page15.classList.remove("show-page15");
        page15pic.classList.remove("pulse-1s");
        page15pic.style.transform = "translateX(-100%)";
        
        page16.classList.remove("show-page16");
        page16pic.classList.remove("pulse-1s");
        page16pic.style.transform = "translateX(-100%)";
        
        page17.classList.remove("show-page17");
        page17pic.classList.remove("pulse-1s");
        page17pic.style.transform = "translateX(-100%)";
        
        page18.classList.remove("show-page18");
        page18pic.classList.remove("pulse-1s");
        page18pic.style.transform = "translateX(-100%)";
        
        page19.classList.remove("show-page19");
        page19pic.classList.remove("pulse-1s");
        page19pic.style.transform = "translateX(-100%)";
        
        page20.classList.remove("show-page20");
        page20pic.classList.remove("pulse-1s");
        page20pic.style.transform = "translateX(-100%)";

        page21.classList.remove("show-page21");
        page21pic.classList.remove("pulse-1s");
        page21pic.style.transform = "translateX(-100%)";

        page22.classList.remove("show-page22");
        page22pic.classList.remove("pulse-1s");
        page22pic.style.transform = "translateX(-100%)";
        
        page23.classList.remove("show-page23");
        page23.style.transform = "translateX(0)"; 
        ani1.style.transform = "translateX(-100%)";
        ani2.style.transform = "translateX(-100%)";
        page24.style.transform = "translateX(100%)"; 
        ani4.style.transform = "translateX(-100%)";
        
        page25.style.transform = "translateX(100%)"; 
        angy1.style.transform = "translateX(-100%)";
        ani5.style.transform = "translateX(-100%)";

        page26.style.transform = "translateX(100%)"; 
        angyWalker.style.transform = "translateX(-100%)"; 
        aniSequence.style.transform = "translateX(-100%)";

        page27.style.transform = "translateX(100%)"; 
        retSlide.style.transform = "translateX(-100%)";
        retSlide.style.opacity = "1"; 
        sorry.style.transform = "translateX(-100%)";
        retAnimation.classList.remove("active");

        page28.classList.remove("show-page28");
        hugend.classList.remove("show-hugend");
        
        lastpage.classList.remove("show-lastpage");

        // INSTANT REWIND: Make cover instantly opaque, remove transition briefly
        cover.style.transition = "none"; 
        cover.style.opacity = "1"; 
        
        // Hide grid1 so it doesn't bleed through
        grid1.style.transition = "none";
        grid1.style.opacity = "0";

        letter1.src = "assets/letter4.png"; 
        letterStep = 4;
        letter1.classList.add("pulsing"); 
        
        stage = 2; 
    }
    else if (stage === 2) {
        if (letterStep === 4) {
            letter1.src = "assets/letter3.png";
            letterStep = 3;
        }
        else if (letterStep === 3) {
            letter1.src = "assets/letter2.png";
            letterStep = 2;
        } 
        else if (letterStep === 2) {
            letter1.src = "assets/letter1.png";
            letterStep = 1;
        } 
        else if (letterStep === 1) {
            letter1.style.left = "-100%"; 
            stage = 1; 
            clearTimeout(pulseTimer);
            letter1.classList.remove("pulsing");
        }
    } 
    else if (stage === 1) {
        grid2.style.left = "-75%"; 
        stage = 0;
    }
    
    updateMusic();
});

// MIDDLE TAP
middleTap.addEventListener("click", () => {
    if (stage === 2) {
        if (letterStep === 1) {
            letter1.src = "assets/letter2.png"; 
            letterStep = 2;
        } 
        else if (letterStep === 2) {
            letter1.src = "assets/letter3.png"; 
            letterStep = 3;
        }
        else if (letterStep === 3) {
            letter1.src = "assets/letter4.png";
            letterStep = 4;
        }
        else if (letterStep === 4) {
            
            // THE PERFECT CROSSFADE:
            // 1. Swap grid1 to page1.png and set opacity to 0 instantly so it's ready.
            grid1.style.transition = "none";
            grid1.style.opacity = "0"; 
            grid1.src = "assets/page1.png"; 
            
            // Allow 50ms for the browser to load the image src, then trigger the double-fade
            setTimeout(() => {
                // grid1 fades IN
                grid1.style.transition = "opacity 1.5s ease";
                grid1.style.opacity = "1"; 
                
                // Cover (grid2 + letter4) fades OUT exactly simultaneously
                cover.style.transition = "opacity 1.5s ease";
                cover.style.opacity = "0"; 
            }, 50);
            
            clearTimeout(pulseTimer);
            letter1.classList.remove("pulsing");
            
            stage = 3; 
            updateMusic();
            
            setTimeout(() => {
                if (stage === 3) { 
                    page1txt.classList.add("writing"); 
                    isWriting = true;
                    
                    writeTimer = setTimeout(() => {
                        if (isWriting) {
                            page1txt.classList.remove("writing");
                            page1txt.classList.add("written");
                            isWriting = false;
                            stage = 4;
                        }
                    }, 2000);
                }
            }, 1500);
        }
    }
    else if (stage >= 3) {
        handleForwardTap();
        updateMusic();
    }
});