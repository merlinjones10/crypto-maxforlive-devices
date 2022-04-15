//a is the decimal point midway point (use 0.5)
// const lerp = (x, y, a) => x * (1 - a) + y * a;

//https://www.trysmudford.com/blog/linear-interpolation-functions/
function lerp(x, y, a) {
  return x * (1 - a) + y * a;
}

var interpolatedList = []

inlets = 1;
outlets = 1;

function bang() 
{
	outlet(0, interpolatedList );	
}
  
function list() {
  var arr = arrayfromargs(arguments)
  var interpDecimal = 0.5;
  var interpolated = [];
  for (var i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      interpolated.push(arr[i]);
		// adds the last element twice to make up 14 parts 
	  interpolated.push(arr[i]);
      break;
    }
    interpolated.push(arr[i], lerp(arr[i], arr[i + 1], interpDecimal));
  }
  interpolatedList = interpolated;
//  post(interpolated)
  bang();
}