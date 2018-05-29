// import { HungryBear } from './../src/hungrybear.js';
import { tamagotchi } from './../src/tamagotchi.js';

describe('Tamagotchi', function() {
  // let fuzzy;
  let bob = tamagotchi;

  beforeEach(function() {
    // fuzzy = new HungryBear("Fuzzy");
    jasmine.clock().install();
    bob.foodLevel = 10;
    bob.sleepLevel = 10;
    bob.playLevel = 10;
    bob.name = "Bob";
    bob.setNeeds();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(bob.name).toEqual("Bob");
    expect(bob.foodLevel).toEqual(10);
    expect(bob.sleepLevel).toEqual(10);
    expect(bob.playLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(bob.foodLevel).toEqual(7);
    expect(bob.playLevel).toEqual(4);
    expect(bob.sleepLevel).toEqual(1);
  });

  it('should be dead if the food level drops below zero', function() {
    bob.foodLevel = 0;
    expect(bob.tamagotchiDead()).toEqual(true);
  });
  it('should be dead if the play level drops below zero', function() {
    bob.playLevel = 0;
    expect(bob.tamagotchiDead()).toEqual(true);
  });
  it('should be dead if the sleep level drops below zero', function() {
    bob.sleepLevel = 0;
    expect(bob.tamagotchiDead()).toEqual(true);
  });
  it('should get very dead if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(bob.tamagotchiDead()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(3001);
    bob.eatSmall("eatTest");
    bob.playSmall("playTest");
    bob.sleepSmall("sleepTest");
    expect(bob.foodLevel).toEqual(12);
    expect(bob.playLevel).toEqual(9);
    expect(bob.sleepLevel).toEqual(6);

  });
  // it('should return that tamagotchi ate blueberries and the food level should go up 5', function() {
  //   expect(fuzzy.eatSmall("blueberries")).toEqual("The bear ate the blueberries! Food level goes up 5!");
  //   expect(fuzzy.foodLevel).toEqual(15);
  // });
});
