'use strict';

{
  let result;

  document.getElementById('btn').addEventListener('click',() => {
    let num = Math.floor(Math.random() * 3);
    console.log(num);

    // if(num === 0){
    //   result = "大吉";
    // }else if(num === 1){
    //   result = "中吉";
    // }else{
    //   result = "凶";
    // }

    switch (num) {
      case 0:
        result = "大吉"
        break;
      case 1:
        result = "中吉"
        break;
      case 2:
        result = "凶"
        break;
    
      default:
        result = "wrong"
        break;
    }



    document.getElementById('btn').textContent = result;
  });

}
