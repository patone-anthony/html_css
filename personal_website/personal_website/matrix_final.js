var c = document.getElementById("matrix");
var ctx = c.getContext("2d");

c.height = window.outerHeight;
c.width = window.outerWidth;
var words = [0, 1, 0, 1, 0, 1, " ", " "];
var font_size = 14;
var columns = Math.floor(c.width / font_size); //120
var row = []; //array c.height 120x

for (var x = 0; x < columns; x++)
  row[x] = -c.height //first iteration takes place off the screen (to see change to 0)


function matrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.12)"; //opacity
  ctx.shadowBlur = 0;
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.shadowColor = '#0f0'; //neon green
  ctx.shadowBlur = 2;
  ctx.font = font_size + "px 'Source Code Pro'";

  for (var i = 0; i < row.length; i++) {
    var text = words[Math.floor(Math.random() * words.length)]; //picks character
    var x = i * font_size; //x-axis spacing
    var y = row[i] * font_size; //y-axis spacing (18943 starting)
    var random = Math.random() * 200; //px of color change on top
    if (y < random) {
      ctx.fillStyle = "#90c0a4"; //top color (light green)
    } else {
      ctx.fillStyle = "#0f0";
    }

    //will reset location to top only if criteria is met
    if (Math.random() > .982)
      row[i] = 0;

    row[i]++; //incrementing Y coordinate (next row)

    ctx.fillText(text, x, y);
  }
}


setInterval(matrix, 50);
