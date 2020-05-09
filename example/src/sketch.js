export const sketch = (p) => {
  let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;


  p.setup = function () {
    p.createCanvas(720, 400);
    p.stroke(255);

  let radius = p.min(p.width, p.height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  cx = p.width / 2;
  cy = p.height / 2;
  };


  p.draw = function () {
    p.background(230);

  // Draw the clock background
  p.noStroke();
  p.fill(244, 122, 158);
  p.ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
  p.fill(237, 34, 93);
  p.ellipse(cx, cy, clockDiameter, clockDiameter);

  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  let s = p.map(p.second(), 0, 60, 0, p.TWO_PI) - p.HALF_PI;
  let m = p.map(p.minute() + p.norm(p.second(), 0, 60), 0, 60, 0, p.TWO_PI) - p.HALF_PI;
  let h = p.map(p.hour() + p.norm(p.minute(), 0, 60), 0, 24, 0, p.TWO_PI * 2) - p.HALF_PI;

  // Draw the hands of the clock
  p.stroke(255);
  p.strokeWeight(1);
  p.line(cx, cy, cx + p.cos(s) * secondsRadius, cy + p.sin(s) * secondsRadius);
  p.strokeWeight(2);
  p.line(cx, cy, cx + p.cos(m) * minutesRadius, cy + p.sin(m) * minutesRadius);
  p.strokeWeight(4);
  p.line(cx, cy, cx + p.cos(h) * hoursRadius, cy + p.sin(h) * hoursRadius);

  // Draw the minute ticks
  p.strokeWeight(2);
  p.beginShape(p.POINTS);
  for (let a = 0; a < 360; a += 6) {
    let angle = p.radians(a);
    let x = cx + p.cos(angle) * secondsRadius;
    let y = cy + p.sin(angle) * secondsRadius;
    p.vertex(x, y);
  }
  p.endShape();
  };
};


