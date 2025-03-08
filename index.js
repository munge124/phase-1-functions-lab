// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); // Returns the number of blocks from 42nd Street
  }
  
  function distanceFromHqInFeet(someValue) {
    let blocks = distanceFromHqInBlocks(someValue); // Calculate blocks
    return blocks * 264; // Convert blocks to feet
  }
  
  function distanceTravelledInFeet(start, destination) {
    let blocks = Math.abs(start - destination); // Calculate the difference in blocks
    return blocks * 264; // Convert blocks to feet
  }
  
  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination); // Calculate total distance in feet
    
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate for distances between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // If the distance exceeds 2500 feet
    }
  }
  
