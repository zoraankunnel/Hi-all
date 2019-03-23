var Animal;
var mySprite;
var mySprite1;
var mySprite2;
var mySprite3;
var growing;
var jittering;
var moving_east;
var moving_north;
var moving_south;
var moving_west;
var spinning_right;
var wandering;
var swimming_left_and_right;
var patrolling;
var shrinking;
var spinning_left;

function do_something() {
}

function When_Animal_Touches_mysprtie_For_The_Second_Time_Remove_mysprite() {
}

function growing2(this_sprite) {
  changePropBy(this_sprite, "scale", 1);
}

function math_random_int(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}

function jittering2(this_sprite) {
  changePropBy(this_sprite, "scale", math_random_int(-1, 1));
}

function moving_east2(this_sprite) {
  moveInDirection(this_sprite, 5, "East");
}

function moving_north2(this_sprite) {
  moveInDirection(this_sprite, 5, "North");
}

function moving_south2(this_sprite) {
  moveInDirection(this_sprite, 5, "South");
}

function moving_west2(this_sprite) {
  moveInDirection(this_sprite, 5, "West");
}

function spinning_right2(this_sprite) {
  turn(this_sprite, 6, "right");
}

function wandering2(this_sprite) {
  if (math_random_int(0, 5) == 0) {
    changePropBy(this_sprite, "direction", math_random_int(-25, 25));
  }
  moveForward(this_sprite, 1);
  if (isTouchingEdges(this_sprite)) {
    edgesDisplace(this_sprite);
    changePropBy(this_sprite, "direction", math_random_int(135, 225));
  }
}

function swimming_left_and_right2(this_sprite) {
  if (getProp(this_sprite, "direction") == 0) {
    mirrorSprite(this_sprite, "right");
  } else if (getProp(this_sprite, "direction") == 180) {
    mirrorSprite(this_sprite, "left");
  }
  moveForward(this_sprite, 5);
  if (isTouchingEdges(this_sprite)) {
    edgesDisplace(this_sprite);
    changePropBy(this_sprite, "direction", 180);
  }
}

function patrolling2(this_sprite) {
  moveForward(this_sprite, 5);
  if (isTouchingEdges(this_sprite)) {
    edgesDisplace(this_sprite);
    changePropBy(this_sprite, "direction", 180);
  }
}

function shrinking2(this_sprite) {
  changePropBy(this_sprite, "scale", -1);
}

function spinning_left2(this_sprite) {
  turn(this_sprite, 6, "left");
}

showTitleScreen('Catch the Food', 'Press "Space" to start');

whenKey("space", function () {
  hideTitleScreen();
  setBackground('#66ffff');
  Animal = createNewSprite(Animal, "orange monster", {"x":65,"y":66});
  mySprite = createNewSprite(mySprite, "carrot", {"x":339,"y":334});
});

clickedOn(function () {
  return mySprite;
}, function () {
  jumpTo(mySprite, {"x":202,"y":199});
  removeAllBehaviors(mySprite);
});

clickedOn(function () {
  return mySprite1;
}, function () {
  jumpTo(mySprite1, {"x":208,"y":197});
  removeAllBehaviors(mySprite1);
});

clickedOn(function () {
  return mySprite2;
}, function () {
  jumpTo(mySprite2, {"x":201,"y":207});
  removeAllBehaviors(mySprite2);
});

clickedOn(function () {
  return mySprite3;
}, function () {
  jumpTo(mySprite3, {"x":200,"y":193});
  removeAllBehaviors(mySprite3);
});

clickedOn(function () {
  return Animal;
}, function () {
  jumpTo(Animal, {"x":213,"y":203});
  removeAllBehaviors(Animal);
});

whileKey("up", function () {
  moveInDirection(Animal, 10, "North");
});

whileKey("left", function () {
  moveInDirection(Animal, 10, "West");
});

whileKey("down", function () {
  moveInDirection(Animal, 10, "South");
});

whileKey("right", function () {
  moveInDirection(Animal, 10, "East");
});

whenTouching(function () {
  return Animal;
}, function () {
  return mySprite;
}, function () {
  mySprite.destroy();
  mySprite1 = createNewSprite(mySprite1, "apple", {"x":358,"y":342});
  setProp(mySprite, "scale", 75);
  jumpTo(Animal, {"x":64,"y":61});
  jumpTo(mySprite1, {"x":358,"y":344});
  setBackground('#ffff33');
});

whileKey("a", function () {
  moveInDirection(mySprite, 10, "West");
});

whileKey("d", function () {
  moveInDirection(mySprite, 10, "East");
});

whileKey("s", function () {
  moveInDirection(mySprite, 10, "South");
});

whileKey("w", function () {
  moveInDirection(mySprite1, 10, "North");
});

whileKey("d", function () {
  moveInDirection(mySprite1, 10, "East");
});

whileKey("a", function () {
  moveInDirection(mySprite1, 10, "West");
});

whileKey("s", function () {
  moveInDirection(mySprite1, 10, "South");
});

whileKey("w", function () {
  moveInDirection(mySprite, 10, "North");
});

whenTouching(function () {
  return Animal;
}, function () {
  return mySprite1;
}, function () {
  mySprite1.destroy();
  mySprite3 = createNewSprite(mySprite3, "mushroom", {"x":355,"y":345});
  setProp(mySprite, "scale", 50);
  jumpTo(mySprite3, {"x":66,"y":63});
  jumpTo(Animal, {"x":64,"y":61});
  setBackground('#33ff33');
});

whileKey("s", function () {
  moveInDirection(mySprite2, 10, "South");
});

whileKey("d", function () {
  moveInDirection(mySprite2, 10, "East");
});

whileKey("a", function () {
  moveInDirection(mySprite2, 10, "West");
});

whileKey("w", function () {
  moveInDirection(mySprite2, 10, "North");
});

whenTouching(function () {
  return Animal;
}, function () {
  return mySprite3;
}, function () {
  mySprite3.destroy();
  mySprite2 = createNewSprite(mySprite2, "cupcake", {"x":365,"y":360});
  setProp(mySprite2, "scale", 25);
  jumpTo(mySprite2, {"x":357,"y":346});
  jumpTo(Animal, {"x":66,"y":63});
  setBackground('#ff0000');
  showTitleScreen('BEAST MODE', 'BOSS LEVEL');
});

whenTouching(function () {
  return mySprite2;
}, function () {
  return Animal;
}, function () {
  Animal.destroy();
  showTitleScreen('Game Over', 'Better Luck nextime');
});