'use strict';

// Poser les variables

let compteurUser=0;
let compteurCpu=0;

let scoreUser=document.querySelector('.score1');
scoreUser.innerHTML=0;
let scoreCpu=document.querySelector('.score2');
scoreCpu.innerHTML=0;

let pierreClick=document.querySelector('.pierrep1');
let feuilleClick=document.querySelector('.feuillep1');
let ciseauxClick=document.querySelector('.ciseauxp1');

let pierreCpu=document.querySelector('.pierrep2').getAttribute('src');
let feuilleCpu=document.querySelector('.feuillep2').getAttribute('src');
let ciseauxCpu=document.querySelector('.ciseauxp2').getAttribute('src');

pierreClick.addEventListener('click',testPierre);
feuilleClick.addEventListener('click',testFeuille);
ciseauxClick.addEventListener('click',testCiseaux);

let result = document.querySelector('.p1').innerHTML

let cpu;
let cpuChoice;

// Cliquer sur pierre

function testPierre(){
    
    cpuChoice = (Math.floor(Math.random() * 3 + 1));
    switch(cpu){
        case 1:
            cpuChoice = "pierre";
        break;
    
        case 2:
            cpuChoice = "feuille";
        break;
    
        case 3:
            cpuChoice = "ciseaux";
        break;
    }

    if(cpuChoice == 1){
        document.querySelector('.pierrep1').src=("img/emoji/emoji-pierre-800.png");
        document.querySelector('.feuillep1').src=("img/emoji/emoji-feuille-800-white.png");
        document.querySelector('.ciseauxp1').src=("img/emoji/emoji-ciseaux-800-white.png");

        document.querySelector('.pierrep2').src=("img/emoji/emoji-pierre-800.png");
        document.querySelector('.feuillep2').src=("img/emoji/emoji-feuille-800-white.png");
        document.querySelector('.ciseauxp2').src=("img/emoji/emoji-ciseaux-800-white.png");
        document.querySelector('.p1').innerHTML="Égalité !";
    }
    else{

        switch(pierreClick){
            case pierreClick:
                if(cpuChoice == 2){
                    document.querySelector('.pierrep1').src=("img/emoji/emoji-pierre-800.png");
                    document.querySelector('.feuillep1').src=("img/emoji/emoji-feuille-800-white.png");
                    document.querySelector('.ciseauxp1').src=("img/emoji/emoji-ciseaux-800-white.png");

                    document.querySelector('.pierrep2').src=("img/emoji/emoji-pierre-800-white.png");
                    document.querySelector('.feuillep2').src=("img/emoji/emoji-feuille-800.png");
                    document.querySelector('.ciseauxp2').src=("img/emoji/emoji-ciseaux-800-white.png");

                    document.querySelector('.p1').innerHTML="Vous avez perdu !";
                    compteurCpu++;
                    scoreCpu.innerHTML=compteurCpu;
                }

                else{

                    document.querySelector('.pierrep1').src=("img/emoji/emoji-pierre-800.png");
                    document.querySelector('.feuillep1').src=("img/emoji/emoji-feuille-800-white.png");
                    document.querySelector('.ciseauxp1').src=("img/emoji/emoji-ciseaux-800-white.png");

                    document.querySelector('.pierrep2').src=("img/emoji/emoji-pierre-800-white.png");
                    document.querySelector('.feuillep2').src=("img/emoji/emoji-feuille-800-white.png");
                    document.querySelector('.ciseauxp2').src=("img/emoji/emoji-ciseaux-800.png");
                    document.querySelector(".p1").innerHTML="Vous avez gagné !";

                    compteurUser++;
                    scoreUser.innerHTML=compteurUser;
                }
            break;
        }
    }
}

// Cliquer sur feuille

function testFeuille(){
    
    cpuChoice = (Math.floor(Math.random() * 3 + 1));
    switch(cpu){
        case 1:
            cpuChoice = "pierre";
        break;
    
        case 2:
            cpuChoice = "feuille";
        break;
    
        case 3:
            cpuChoice = "ciseaux";
        break;
    }

    if(cpuChoice == 2){
        document.querySelector('.pierrep1').src=("img/emoji/emoji-pierre-800-white.png");
        document.querySelector('.feuillep1').src=("img/emoji/emoji-feuille-800.png");
        document.querySelector('.ciseauxp1').src=("img/emoji/emoji-ciseaux-800-white.png");

        document.querySelector('.pierrep2').src=("img/emoji/emoji-pierre-800-white.png");
        document.querySelector('.feuillep2').src=("img/emoji/emoji-feuille-800.png");
        document.querySelector('.ciseauxp2').src=("img/emoji/emoji-ciseaux-800-white.png");
        document.querySelector('.p1').innerHTML="Égalité !";
    }
    else{

        switch(pierreClick){
            case pierreClick:
                if(cpuChoice == 3){
                    document.querySelector('.pierrep1').src=("img/emoji/emoji-pierre-800-white.png");
                    document.querySelector('.feuillep1').src=("img/emoji/emoji-feuille-800.png");
                    document.querySelector('.ciseauxp1').src=("img/emoji/emoji-ciseaux-800-white.png");

                    document.querySelector('.pierrep2').src=("img/emoji/emoji-pierre-800-white.png");
                    document.querySelector('.feuillep2').src=("img/emoji/emoji-feuille-800-white.png");
                    document.querySelector('.ciseauxp2').src=("img/emoji/emoji-ciseaux-800.png");
                    document.querySelector('.p1').innerHTML="Vous avez perdu !";

                    compteurCpu++;
                    scoreCpu.innerHTML=compteurCpu;
                }

                else{

                    document.querySelector('.pierrep1').src=("img/emoji/emoji-pierre-800-white.png");
                    document.querySelector('.feuillep1').src=("img/emoji/emoji-feuille-800.png");
                    document.querySelector('.ciseauxp1').src=("img/emoji/emoji-ciseaux-800-white.png");

                    document.querySelector('.pierrep2').src=("img/emoji/emoji-pierre-800.png");
                    document.querySelector('.feuillep2').src=("img/emoji/emoji-feuille-800-white.png");
                    document.querySelector('.ciseauxp2').src=("img/emoji/emoji-ciseaux-800-white.png");
                    document.querySelector(".p1").innerHTML="Vous avez gagné !";

                    compteurUser++;
                    scoreUser.innerHTML=compteurUser;
                }
            break;
        }
    }
}

// Cliquer sur ciseaux

function testCiseaux(){
    
    cpuChoice = (Math.floor(Math.random() * 3 + 1));
    switch(cpu){
        case 1:
            cpuChoice = "pierre";
        break;
    
        case 2:
            cpuChoice = "feuille";
        break;
    
        case 3:
            cpuChoice = "ciseaux";
        break;
    }

    if(cpuChoice == 3){
        document.querySelector('.pierrep1').src=("img/emoji/emoji-pierre-800-white.png");
        document.querySelector('.feuillep1').src=("img/emoji/emoji-feuille-800-white.png");
        document.querySelector('.ciseauxp1').src=("img/emoji/emoji-ciseaux-800.png");

        document.querySelector('.pierrep2').src=("img/emoji/emoji-pierre-800-white.png");
        document.querySelector('.feuillep2').src=("img/emoji/emoji-feuille-800-white.png");
        document.querySelector('.ciseauxp2').src=("img/emoji/emoji-ciseaux-800.png");
        document.querySelector('.p1').innerHTML="Égalité !";
    }
    else{

        switch(pierreClick){
            case pierreClick:
                if(cpuChoice == 1){

                    document.querySelector('.pierrep1').src=("img/emoji/emoji-pierre-800-white.png");
                    document.querySelector('.feuillep1').src=("img/emoji/emoji-feuille-800-white.png");
                    document.querySelector('.ciseauxp1').src=("img/emoji/emoji-ciseaux-800.png");

                    document.querySelector('.pierrep2').src=("img/emoji/emoji-pierre-800.png");
                    document.querySelector('.feuillep2').src=("img/emoji/emoji-feuille-800-white.png");
                    document.querySelector('.ciseauxp2').src=("img/emoji/emoji-ciseaux-800-white.png");
                    document.querySelector('.p1').innerHTML="Vous avez perdu !";

                    compteurCpu++;
                    scoreCpu.innerHTML=compteurCpu;
                }

                else{

                    document.querySelector('.pierrep1').src=("img/emoji/emoji-pierre-800-white.png");
                    document.querySelector('.feuillep1').src=("img/emoji/emoji-feuille-800-white.png");
                    document.querySelector('.ciseauxp1').src=("img/emoji/emoji-ciseaux-800.png");

                    document.querySelector('.pierrep2').src=("img/emoji/emoji-pierre-800-white.png");
                    document.querySelector('.feuillep2').src=("img/emoji/emoji-feuille-800.png");
                    document.querySelector('.ciseauxp2').src=("img/emoji/emoji-ciseaux-800-white.png");
                    document.querySelector(".p1").innerHTML="Vous avez gagné !";

                    compteurUser++;
                    scoreUser.innerHTML=compteurUser;
                }
            break;
        }
    }
}

// Code chevron personnage suivant + pseudo associé + score associé au nom

let img = document.querySelector(".img-1");
let button2 = document.querySelector(".chevronright1");
let pseudo = document.querySelector(".joueur1");
let scorep1 = document.querySelector(".scorep1");

button2.onclick = function click(){
// https://hunterxhunter.fandom.com/fr/wiki/Liste_des_personnages_d%27Hunter_x_Hunter
        let imgSrc = img.getAttribute('src');
        compteurUser=0;
        compteurCpu=0;
        scoreCpu.innerHTML=compteurCpu;
        scoreUser.innerHTML=compteurUser;
        document.querySelector(".p1").innerHTML="Résultat :";

        document.querySelector('.pierrep1').src=("img/emoji/emoji-pierre-800-white.png");
        document.querySelector('.feuillep1').src=("img/emoji/emoji-feuille-800-white.png");
        document.querySelector('.ciseauxp1').src=("img/emoji/emoji-ciseaux-800-white.png");

        document.querySelector('.pierrep2').src=("img/emoji/emoji-pierre-800-white.png");
        document.querySelector('.feuillep2').src=("img/emoji/emoji-feuille-800-white.png");
        document.querySelector('.ciseauxp2').src=("img/emoji/emoji-ciseaux-800-white.png");

        if (imgSrc=="img/personnages/kirua_zoldik.jpg"){   
            img.src="img/personnages/gon_freecss.jpg";
            pseudo.innerHTML="Gon Freecss";
            scorep1.innerHTML="Score Gon Freecss";

        } else if (imgSrc=="img/personnages/gon_freecss.jpg"){ 
            img.src="img/personnages/gon_freecss_adult.jpg";
            pseudo.innerHTML="GON FREECSS";
            scorep1.innerHTML="Score Gon Freecss";

        } else if (imgSrc=="img/personnages/gon_freecss_adult.jpg"){
            img.src="img/personnages/kurapika.jpeg";
            pseudo.innerHTML="Kurapika";
            scorep1.innerHTML="Score Kurapika";

        } else if (imgSrc=="img/personnages/kurapika.jpeg"){
            img.src="img/personnages/hisoka.jpg";
            pseudo.innerHTML="Hisoka";
            scorep1.innerHTML="Score Hisoka";

        } else if (imgSrc=="img/personnages/hisoka.jpg"){
            img.src="img/personnages/kirua_zoldik.jpg";
            pseudo.innerHTML="Kirua Zoldik";
            scorep1.innerHTML="Score Kirua Zoldik";
        }
}

// Code button personnage précédent + pseudo associé + Score associé au nom

let button1 = document.querySelector(".chevronleft1");
button1.onclick = function click(){
// https://hunterxhunter.fandom.com/fr/wiki/Liste_des_personnages_d%27Hunter_x_Hunter
        let imgSrc = img.getAttribute('src');
        compteurUser=0;
        compteurCpu=0;
        scoreCpu.innerHTML=compteurCpu;
        scoreUser.innerHTML=compteurUser;
        document.querySelector(".p1").innerHTML="Résultat :";

        document.querySelector('.pierrep1').src=("img/emoji/emoji-pierre-800-white.png");
        document.querySelector('.feuillep1').src=("img/emoji/emoji-feuille-800-white.png");
        document.querySelector('.ciseauxp1').src=("img/emoji/emoji-ciseaux-800-white.png");

        document.querySelector('.pierrep2').src=("img/emoji/emoji-pierre-800-white.png");
        document.querySelector('.feuillep2').src=("img/emoji/emoji-feuille-800-white.png");
        document.querySelector('.ciseauxp2').src=("img/emoji/emoji-ciseaux-800-white.png");

        if(imgSrc=="img/personnages/kirua_zoldik.jpg"){   
            img.src="img/personnages/hisoka.jpg";
            pseudo.innerHTML="Hisoka";
            scorep1.innerHTML="Score Hisoka";

        } else if (imgSrc=="img/personnages/hisoka.jpg"){
            img.src="img/personnages/kurapika.jpeg";
            pseudo.innerHTML="Kurapika";
            scorep1.innerHTML="Score Kurapika";

        } else if (imgSrc=="img/personnages/kurapika.jpeg"){
            img.src="img/personnages/gon_freecss_adult.jpg";
            pseudo.innerHTML="Gon Freecss";
            scorep1.innerHTML="Score Gon Freecss";

        } else if (imgSrc=="img/personnages/gon_freecss_adult.jpg"){
            img.src="img/personnages/gon_freecss.jpg";
            pseudo.innerHTML="Gon Freecss";
            scorep1.innerHTML="Score Gon Freecss";

        } else if (imgSrc=="img/personnages/gon_freecss.jpg"){
            img.src="img/personnages/kirua_zoldik.jpg";
            pseudo.innerHTML="Kirua Zoldik";
            scorep1.innerHTML="Score Kirua Zoldik";
        }
}

let reset = document.querySelector(".refresh");
reset.onclick = function click(){
    compteurUser=0;
    compteurCpu=0;
    scoreCpu.innerHTML=compteurCpu;
    scoreUser.innerHTML=compteurUser;
    document.querySelector(".p1").innerHTML="Résultat :";
    document.querySelector('.pierrep1').src=("img/emoji/emoji-pierre-800-white.png");
    document.querySelector('.feuillep1').src=("img/emoji/emoji-feuille-800-white.png");
    document.querySelector('.ciseauxp1').src=("img/emoji/emoji-ciseaux-800-white.png");
    document.querySelector('.pierrep2').src=("img/emoji/emoji-pierre-800-white.png");
    document.querySelector('.feuillep2').src=("img/emoji/emoji-feuille-800-white.png");
    document.querySelector('.ciseauxp2').src=("img/emoji/emoji-ciseaux-800-white.png");
}