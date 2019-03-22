var Animal;
var mySprite;
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

setBackground('#000000');
Animal = createNewSprite(Animal, "orange monster", {"x":65,"y":66});
mySprite = createNewSprite(mySprite, "carrot", {"x":339,"y":334});
edgesDisplace(Animal);
edgesDisplace(mySprite);

whenKey("up", function () {
  moveInDirection(Animal, 10, "North");
});

whenKey("left", function () {
  moveInDirection(Animal, 10, "West");
});

whenKey("down", function () {
  moveInDirection(Animal, 10, "South");
});

whenKey("right", function () {
  moveInDirection(Animal, 10, "East");
});

whenTouching(function () {
  return Animal;
}, function () {
  return mySprite;
}, function () {
  setAnimation(mySprite, "watermelon");
  jumpTo(Animal, {"x":50,"y":51});
  jumpTo(mySprite, {"x":352,"y":338});
});

whenKey("d", function () {
  moveInDirection(mySprite, 30, "East");
});

whenKey("a", function () {
  moveInDirection(mySprite, 30, "West");
});

whenKey("s", function () {
  moveInDirection(mySprite, 30, "South");
});

whenKey("w", function () {
  moveInDirection(mySprite, 30, "North");
});

/*
mySprite.destroy();
*/