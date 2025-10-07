let lunches = [];

function addLunchToEnd(lunches, lunchItem) {
  lunches.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return lunches;
}

function addLunchToStart(lunches, lunchItem) {
  lunches.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return lunches;
}

function removeLastLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
    return lunches;
  }
  const removedItem = lunches.pop();
  console.log(`${removedItem} removed from the end of the lunch menu.`);
  return lunches;
}

function removeFirstLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
    return lunches;
  }
  const removedItem = lunches.shift();
  console.log(`${removedItem} removed from the start of the lunch menu.`);
  return lunches;
}

function getRandomLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches available.");
    return lunches;
  }
  const random = Math.floor(Math.random() * lunches.length);
  const randomLunch = lunches[random];
  console.log(`Randomly selected lunch: ${randomLunch}`);
  return randomLunch;
}

function showLunchMenu(lunches) {
  if (lunches.length === 0) {
    console.log("The menu is empty.");
    return lunches;
  }
  console.log(`Menu items: ${lunches.join(", ")}`);
  return lunches;
}

addLunchToEnd(lunches, "Tacos");
addLunchToStart(lunches, "Sushi");
addLunchToStart(["Burger", "Sushi"], "Pizza");
removeFirstLunch(["Salad", "Eggs", "Cheese"]);
showLunchMenu(["Greens", "Corns", "Beans"]);
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);
getRandomLunch(lunches);
