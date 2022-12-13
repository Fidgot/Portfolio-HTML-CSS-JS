'use strict'

// Création des compteurs des positions des voitures + images à remplacer
// Essayer de faire une boucle for pour créer les 5*2 variables attribuer "0" à tous les compteurV 

let compteurV1=0;
let compteurRV1;
let compteurD1=0;

let compteurV2=0;
let compteurRV2;
let compteurD2=0;

let compteurV3=0;
let compteurRV3;
let compteurD3=0;

let compteurV4=0;
let compteurRV4;
let compteurD4=0;

let compteurV5=0;
let compteurRV5;
let compteurD5=0;

let startClick=document.querySelector('.start-button');
startClick.addEventListener('click',stepRace);

function stepRace(){
    compteurD1+=1;
    compteurD2+=1;
    compteurD3+=1;
    compteurD4+=1;
    compteurD5+=1;
// Voiture 1
    if (compteurV1<8){
        let roll1 = Math.floor(Math.random()*3);
        compteurRV1=compteurV1;
        if (roll1==0) {
            compteurV1+=0;
            compteurRV1=compteurV1+1;
        } else if (roll1==1) {
                compteurV1+=1;
        } else if (roll1==2) {
            if (compteurV1<7){
                compteurV1+=2;
            } else if (compteurV1==7){
                compteurV1+=1;
            }
        }
        document.querySelector('.img-l1-c'+compteurV1).src=("img/voitures/voiture-1.png");
        document.querySelector('.img-l1-c'+compteurRV1).src=("img/maps/map1/white-square.png");
        document.querySelector('.roll1').innerHTML=+roll1;
        document.querySelector('.rankingV1').innerHTML=+compteurD1;
    } else if (compteurV1==8){
    }
// Voiture 2
    if (compteurV2<8){
        let roll2 = Math.floor(Math.random()*3);
        compteurRV2=compteurV2;
        if (roll2==0) {
            compteurV2+=0;
            compteurRV2=compteurV2+1;
        } else if (roll2==1) {
                compteurV2+=1;
        } else if (roll2==2) {
            if (compteurV2<7){
                compteurV2+=2;
            } else if (compteurV2==7){
                compteurV2+=1;
            }
        }
        document.querySelector('.img-l2-c'+compteurV2).src=("img/voitures/voiture-2.png");
        document.querySelector('.img-l2-c'+compteurRV2).src=("img/maps/map1/white-square.png");
        document.querySelector('.roll2').innerHTML=+roll2;
        document.querySelector('.rankingV2').innerHTML=+compteurD2;
    } else if (compteurV2==8){
    }
// Voiture 3
    if (compteurV3<8){
        let roll3 = Math.floor(Math.random()*3);
        compteurRV3=compteurV3;
        if (roll3==0) {
            compteurV3+=0;
            compteurRV3=compteurV3+1;
        } else if (roll3==1) {
                compteurV3+=1;
        } else if (roll3==2) {
            if (compteurV3<7){
                compteurV3+=2;
            } else if (compteurV3==7){
                compteurV3+=1;
            }
        }
        document.querySelector('.img-l3-c'+compteurV3).src=("img/voitures/voiture-3.png");
        document.querySelector('.img-l3-c'+compteurRV3).src=("img/maps/map1/white-square.png");
        document.querySelector('.roll3').innerHTML=+roll3;
        document.querySelector('.rankingV3').innerHTML=+compteurD3;
    } else if (compteurV2==8){
    }
// Voiture 4
    if (compteurV4<8){
        let roll4 = Math.floor(Math.random()*3);
        compteurRV4=compteurV4;
        if (roll4==0) {
            compteurV4+=0;
            compteurRV4=compteurV4+1;
        } else if (roll4==1) {
                compteurV4+=1;
        } else if (roll4==2) {
            if (compteurV4<7){
                compteurV4+=2
            } else if (compteurV4==7){
                compteurV4+=1;
            }
        }
        document.querySelector('.img-l4-c'+compteurV4).src=("img/voitures/voiture-4.png");
        document.querySelector('.img-l4-c'+compteurRV4).src=("img/maps/map1/white-square.png");
        document.querySelector('.roll4').innerHTML=+roll4;
        document.querySelector('.rankingV4').innerHTML=+compteurD4;
    } else if (compteurV2==8){
    }
// Voiture 5
    if (compteurV5<8){
        let roll5 = Math.floor(Math.random()*3);
        compteurRV5=compteurV5;
        if (roll5==0) {
            compteurV5+=0;
            compteurRV5=compteurV5+1;
        } else if (roll5==1) {
                compteurV5+=1;
        } else if (roll5==2) {
            if (compteurV5<7){
                compteurV5+=2;
            } else if (compteurV5==7){
                compteurV5+=1;
            }
        }
        document.querySelector('.img-l5-c'+compteurV5).src=("img/voitures/voiture-5.png");
        document.querySelector('.img-l5-c'+compteurRV5).src=("img/maps/map1/white-square.png");
        document.querySelector('.roll5').innerHTML=+roll5;
        document.querySelector('.rankingV5').innerHTML=+compteurD5;
    } else if (compteurV2==8){
    }

// Historique des roll
// Classement des voitures

}

// Bouton Refresh - Reset sans Reload

let refreshClick=document.querySelector('.refresh-button');
refreshClick.addEventListener('click',refresh);
function refresh(){

// Reset les compteurs

compteurV1=0;
compteurRV1;
compteurD1=0;

compteurV2=0;
compteurRV2;
compteurD2=0;

compteurV3=0;
compteurRV3;
compteurD3=0;

compteurV4=0;
compteurRV4;
compteurD4=0;

compteurV5=0;
compteurRV5;
compteurD5=0;

// Reset les classements

document.querySelector('.rankingV1').innerHTML="0";
document.querySelector('.rankingV2').innerHTML="0";
document.querySelector('.rankingV3').innerHTML="0";
document.querySelector('.rankingV4').innerHTML="0";
document.querySelector('.rankingV5').innerHTML="0";

// Reset les dés

    document.querySelector('.roll1').innerHTML="na";
    document.querySelector('.roll2').innerHTML="na";
    document.querySelector('.roll3').innerHTML="na";
    document.querySelector('.roll4').innerHTML="na";
    document.querySelector('.roll5').innerHTML="na";

// Reset le résultat
//     document.querySelector('.result').innerHTML="Résultat :";

// Reset le tableau
    // for (let n=1; n<=5; n++){
    //     document.querySelector('.ligne'+n+'_colonne2').innerHTML="";

    // }
//     document.querySelector('.ligne1_colonne2').src=("");
//     document.querySelector('.ligne2_colonne2').src=("");
//     document.querySelector('.ligne3_colonne2').src=("");
//     document.querySelector('.ligne4_colonne2').src=("");
//     document.querySelector('.ligne5_colonne2').src=("");

// Remettre les voitures dans leur écurie respective + Reset la map en carrés blancs (fonctionnera avec les vraies map grâce aux indices k et m)
    for (let k=1;k<=5;k++){
        for (let m=1;m<=8;m++){
            document.querySelector('.img-l'+k+'-c0').src=("img/voitures/voiture-"+k+".png");
            document.querySelector('.img-l'+k+'-c'+m).src=("img/maps/map1/white-square.png");
        }
    }
}

// Version bouclée non finie
// Problème avec les compteurs qui se stackent de voiture en voiture
// Faudrait qu'il analyse où est la voiture-i et place le compteurV à cet indice d'image

// function stepRace(){
//     for (let i=1; i<=5; i++){
//         if (compteurV<8){
//             let roll = Math.floor(Math.random()*3);
//             compteurRV=compteurV;
//             if (roll==0) {
//                 compteurV+=0;
//                 compteurRV=compteurV+1;
//             } else if (roll==1) {
//                 compteurV+=1;
//             } else if (roll==2) {
//                 if (compteurV<7){
//                     compteurV+=2;
//                 } else if (compteurV==7){
//                     compteurV+=1;
//                 }
//             }
//         document.querySelector('.img-l'+i+'-c'+compteurV).src=("img/voitures/voiture-"+i+".png");
//         document.querySelector('.img-l'+i+'-c'+compteurRV).src=("img/maps/map1/white-square.png");
//         document.querySelector('.dice-roll').innerHTML=+roll;
//         } else if (compteurV==8){
//         }
//     }
// }