// let netflix = {
//   id: 1,
//   name: "The Office",
//   seriesInfo: {
//     seasons: 9,
//     seasonInfo: [
//       {
//         season: 1,
//         episodes: 6,
//         episodeInfo: [
//             {
//                 episode: 1,
//                 episodeName: "Pilot",
//             },
//             {
//                 episode: 2,
//                 episodeName: "Diversity Day"
//             }
//         ]
//       },
//       {
//           season: 2,
//           episodes: 22,
//           episodeInfo: [
//               {
//                   episode: 1,
//                   episodeName: "The Dundies"
//               }
//           ]
//       }
//     ],
//   },
// };
​
// console.log("Whole Object:", netflix);
// console.log("Just Series Info:", netflix.seriesInfo)
// console.log("Just Season Info:", netflix.seriesInfo.seasonInfo[0].episodeInfo[0]);
​
/*
CHALLENGE
************
​
    - Using dot notation, walk through the netflix object and print off episode name of season 2 episode 1.
*/
​
// console.log("Second season, episode 1", netflix.seriesInfo.seasonInfo[0].episodeInfo[1].episodeName);
​
​
// let spaceJam = {
//     toonSquad: {
//         human: "Michael Jordan",
//         rabbit1: "Bugs Bunny",
//         rabbit2: "Lola Bunny",
//         duck: "Daffy Duck",
//         tDevil: "Tasmanian Devil",
//         bird: "Tweety",
//         cat: "Slyvester",
//         pig: "Porky Pig"
//     },
//     monstars: {
//         0: "Bupkus",
//         1: "Bang",
//         2: "Nawt",
//         3: "Pound",
//         4: "Blanko"
//     },
//     nbaPlayers: {
//         "phoenix Suns": "Charles Barkley",
//         "new Jersey Nets": "Shawn Bradley",
//         newYorkKnicks: "Patrick Ewing",
//         charlotteHornets1: "Larry Johnson",
//         charlotteHornets2: "Muggsy Bogues"
//     }
// }
​
// console.log(Object.keys(spaceJam));
// console.log(Object.keys(spaceJam.monstars));
// console.log(spaceJam.nbaPlayers["new Jersey Nets"])
// console.log(Object.values(spaceJam.toonSquad));
​
​
let garden = {
    vegetable: "zucchini",
    flower: "sun flowers",
    fruit: "grape",
    water: true,
    sun: true,
    size: 10
}
​
let keys = Object.keys(garden);
console.log(keys);
console.log(typeof keys[0]);
​
let zucchini = garden["vegetable"];
console.log(zucchini);
​
let baking = {};
//bunch of code here
​
baking.zucchini = "Better make some bread!";
console.log(baking); 
​
baking["flour"] = "Batter up!";
console.log(baking);
​
console.log(baking[garden["vegetable"]]);