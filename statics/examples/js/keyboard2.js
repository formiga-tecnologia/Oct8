var Gray = new Oct8("block");

Gray.ModifyProps(document.getElementById("block"), 0, Gray.PropsElement.MoveX);
Gray.ModifyProps(document.getElementById("block"), 0, Gray.PropsElement.MoveY);
Gray.ModifyProps(document.getElementById("block"), 10, Gray.PropsElement.W);
Gray.ModifyProps(document.getElementById("block"), 10, Gray.PropsElement.H);

Gray.Mo

var X = Gray.X
var Y = Gray.Y

Gray.MoveX = 0;
Gray.MoveY = 0;

// const keys = {
//   w: {
//     pressed: false
//   },
//   a: {
//     pressed: false
//   },
//   s: {
//     pressed: false
//   },
//   d: {
//     pressed: false
//   }
// }

Gray.addEventListener('keydown', ({key})=> {
  switch (key) {
    case 'w':
      Gray.Y -=5
      //keys.w.pressed = true
      break
    case 'a':
      Gray.X -=5
      //keys.a.pressed = true
      break
    case 's':
      Gray.Y +=5
      //keys.s.pressed = true
      break
   case 'd':
    Gray.X +=5
      //keys.d.pressed = true
      break
  }
  console.log(Gray)
})

// window.addEventListener('keyup', (e)=> {
//   switch (e.key) {
//     case 'w':
//       keys.w.pressed = false
//       break
//     case 'a':
//       keys.a.pressed = false
//       break
//     case 's':
//       keys.s.pressed = false
//       break
//    case 'd':
//       keys.d.pressed = false
//       break
//   }
//   console.log(keys)
// })