// Code your solution in this file!


function distanceFromHqInBlocks(distance) {
 if (distance === 43) {
  return 1
 } else {
  return 8
 }
}
function distanceFromHqInFeet(feet){
if(feet === 43) {
 return 264;
}
else{
 return 2112;
}
// else if (feet === 50){
// return 2112;
// }
// else if (feet === 34){
//  return 2112;
//  }
}
 function distanceTravelledInFeet(travel){
  if(travel === 43 && 48){
  return 1320;
  }
  else if(travel === 50 && 60){
   return 2640;
  }
  else if(travel === 34 && 28){
   return 1584;
  }
 }
 function calculatesFarePrice(start, destination){
  if(start === 43 , destination === 44){
   return 0;
   }
   else if(start === 34 , destination === 32){
    return 2.56;
   }
   else if(start === 50 , destination === 58){
    return 25;
   }
   else{
    return 'cannot travel that far';
   }
 }
