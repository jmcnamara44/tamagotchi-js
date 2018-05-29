export let tamagotchi = {
  foodLevel: 10,
  playLevel: 10,
  sleepLevel: 10,


  setNeeds: function() {
    const needsInterval = setInterval(() => {
      this.foodLevel-= 1;
      this.playLevel-= 2;
      this.sleepLevel -= 3;
      if (this.tamagotchiDead() == true) {
        clearInterval(needsInterval);
        return "Tamagotchi is dead!";
      }
    }, 1000);
  },
  tamagotchiDead: function() {
    if (this.foodLevel <= 0 || this.playLevel <= 0 || this.sleepLevel <= 0) {
      return true;
    } else {
      return false;
    }
  },
  feed: function(amount) {
    return (food) => {
      this.foodLevel += amount;
      return `The bear ate the ${food}! Food level goes up ${amount}!`;
    }
  },
  play: function(amount){
    return(activity) =>{
      this.playLevel += amount;
      return `Tamagotchi did the ${activity}! Play level goes up ${amount}!`;
    }
  },
  sleep: function(amount) {
    return(rest) =>{
      this.sleepLevel += amount;
      return `Tamagotchi rested ${rest}! Sleep level goes up${amount}!`;
    }
  }
};
tamagotchi.eatSmall = tamagotchi.feed(5);
tamagotchi.sleepSmall = tamagotchi.sleep(5);
tamagotchi.playSmall = tamagotchi.play(5);
// tamagotchi.eatLarge = tamagotchi.feed(15);
// tamagotchi.eatYuck = tamagotchi.feed(-10);
// tamagotchi.eatPowerUp = tamagotchi.feed(50);
// tamagotchi.eatSpecialBonus = tamagotchi.feed(100);
// tamagotchi.eatWeirdThing = tamagotchi.feed(Math.floor((Math.random() * 20) + 1));
