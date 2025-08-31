const readline = require('readline-sync');

const hasTorch = true;
const hasSword = true;
const hasMap = false;

console.log("You see three paths: mountains, village, and forest.");
const choice = readline.question("Which path do you take? (mountains/village/forest) ");


if (choice === "mountains") {
  if (hasTorch && hasSword) {
    console.log("Mountains: Armed with a torch and sword, you safely navigate the mountatins and fend off wild boar.");
  } else if (hasTorch) {
    console.log("Mountains: You safely navigate the mountains but feel vulnerable without a weapon.");
  } else {
    console.log("Moutains: It's too dark to proceed. You decide to turn back and head toward the village.");
  } 
} else if (choice === "village") {
  if (hasMap && hasSword) {
    console.log("Village: Using your map and sword for protection, you find your way to the village safely");
} else if (hasMap) {
    console.log("Village: Your map helps you reach the village safely, though you feel unprotected without a weapon.");
} else if (hasSword) {
    console.log("Village: You reach the village, but the villagers are wary of your sword and keep their distance.");
} else {
    console.log("You wander around aimlessly trying to find the village but get lost without a map or weapon.");
  }
} else if (choice === "forest") {
    if (hasMap && hasSword && !hasTorch) {
     console.log("Forest: You explore the forest guided by the moonlight, protected by your sword, and find hidden treasure with your map.");
   
  } else {
        console.log("Forest: The forest is too dangerous to navigate without proper gear. You decide to turn back.");
  }
} else {
    console.log("You hesitate and don’t choose a valid path. It's too risky to continue.");
 }