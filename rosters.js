// Effectifs originaux pour les 12 nouvelles équipes de HB Football.
// 11 joueurs sont générés pour chaque équipe : 1 GK, 4 DEF, 3 MID, 3 ATT.
import { GK, DEF, MID, ATT } from './teams.js';
import { moreTeams } from './more-teams.js';

const firstNames=['Amine','Yassine','Hamza','Omar','Rayan','Ilyas','Nabil','Sami','Anas','Mehdi','Ayoub','Ismail','Bilal','Adam','Zakaria','Youssef','Khalid','Nassim','Imad','Soufiane'];
const lastNames=['Bennani','Tazi','Rahmani','Alaoui','Fassi','Nouri','Amrani','Kaddouri','Haddad','Mansouri','Saidi','Berrada','Chafai','Idrissi','Karim','Lahlou','Ziani','Fahmi','Rami','Kacem'];
const roles=[GK,DEF,DEF,DEF,DEF,MID,MID,MID,ATT,ATT,ATT];

export const rosters=moreTeams.map((team,ti)=>({
  ...team,
  players:roles.map((role,i)=>({
    name:`${firstNames[(ti*3+i)%firstNames.length]} ${lastNames[(ti*7+i*2)%lastNames.length]}`,
    number:i+1, position:role,
    overall:72+((ti*5+i*3)%15),
    speed:70+((ti+i*4)%25), shooting:68+((ti*2+i*5)%28), passing:70+((ti*3+i*2)%26), dribbling:69+((ti*4+i*3)%27), defending:68+((ti*5+i)%29)
  }))
}));

export const allTeams=[...rosters];
