export const interaction1 = (p) => {

  // for red, green, and blue color values
  let r, g, b;

  p.setup =() => {
    p.createCanvas(720, 400);
    // Pick colors randomly
    r = p.random(255);
    g = p.random(255);
    b = p.random(255);
  }

  p.draw = () => {
    p.background(127);
    // Draw a circle
    p.strokeWeight(2);
    p.stroke(r, g, b);
    p.fill(r, g, b, 127);
    p.ellipse(360, 200, 200, 200);
  }

  // When the user clicks the mouse
  p.mousePressed = () => {
    // Check if mouse is inside the circle
    const d = p.dist(p.mouseX, p.mouseY, 360, 200);
    if (d < 100) {
      // Pick new random color values
      r = p.random(255);
      g = p.random(255);
      b = p.random(255);
    }
}

}

