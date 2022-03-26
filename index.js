const birthday = ["Guadalupe", "Ollie", "Aki"];

function writeCards(birthday) {
  for (let i = 0; i < birthday.length; i++) {
    
    console.log(`Thank you ${birthday[i]} for the wonderful surprise gift!,`);
    
    debugger;
  }

  return birthday;
}
writeCards(birthday);

function countDown(){;

    let countDown = 1;
    while (countDown < 12) {
      debugger;
      if (countDown === 1) {
        console.log(`This loop has executed ${countDown} time.`);
      } else {
        console.log(`This loop has executed ${countDown} times.`);
      }
      countDown += 1;
      debugger;
    }};
    
    while (countDown > 0) {
      console.log(countDown--);
    }
    for (let countDown = 4; countDown > 0; countDown--) {
      console.log(countDown);
    }