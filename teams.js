// Données originales de HB Football
export const teams = [
 {name:'HB United',color:'#32a8ff',players:[
  ['Yanis Bensaid',GK,78],['Adam El Mansouri',DEF,80],['Ilyas Rahmani',DEF,76],['Nabil Kaddouri',DEF,74],['Sami Amrani',DEF,72],['Omar Belkacem',MID,81],['Rayan Haddad',MID,79],['Ismail Azzouzi',MID,77],['Anas El Fassi',ATT,83],['Youssef Karim',ATT,86],['Mehdi Saidi',ATT,80]
 ]},
 {name:'Atlas FC',color:'#ef4d55',players:[
  ['Kamal Idrissi',GK,79],['Bilal Nouri',DEF,77],['Walid Chafai',DEF,81],['Amine Tazi',DEF,75],['Hamza Rami',DEF,73],['Zakaria Fathi',MID,82],['Ayoub Mernissi',MID,78],['Soufiane Jaber',MID,80],['Hicham Arif',ATT,82],['Karim Boulahya',ATT,84],['Samir Fahmi',ATT,79]
 ]},
 {name:'Ocean FC',color:'#24b58a',players:[
  ['Nassim Kacem',GK,77],['Ibrahim Saad',DEF,76],['Moussa Tahiri',DEF,74],['Bilal Fares',DEF,78],['Sofiane Ait Ali',DEF,75],['Ayoub Lahlou',MID,80],['Rachid Ziani',MID,76],['Imad Cherkaoui',MID,82],['Noureddine Berrada',ATT,81],['Hamza Ghali',ATT,83],['Othmane Lamine',ATT,78]
 ]}
];
export const GK='GK',DEF='DEF',MID='MID',ATT='ATT';
export function rating(player){return player[2]}
