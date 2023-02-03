function sportPersons() {
    const prompt = require("prompt-sync")();
    let calories = prompt("Hello Judith, please input your name ");
    console.log(`Welcome judith ${calories}`);
    let firstTrainer = prompt("Would you like to jog for now?  (yes/no) ");


    
//first round
if (firstTrainer === "YES"  || firstTrainer === "yes") {
    let firstSession = parseInt(
        prompt(`${calories}, How long would you like to jog? (in minutes) `)
    );
    console.log(
        `${calories} your first session has ellapsed and you jogged for ${firstSession}minutes. you did great!!! 2kg calories lost`
    );
    //first continue
    let cont = prompt(`${calories} would you like to continue? (yes/no) `);
    if (cont === "YES" || cont === "y") {
        //second session yes
        let secondSession = parseInt(
            prompt(`${calories}, how long would you like to jog ${secondSession} minutes. you did great!!! 4kg lost`)
        );
          // second round
    let cont = prompt(` ${calories} would you like to continue? (yes/no) `);
    if (cont === "YES" || cont === "y"){
        let thirdSession = parseInt(
            prompt(`${calories} how long would you like to jog? (in minutes) `)
        );
        console.log(
            `${calories}your second session has ellapsed and you jogged for ${thirdSession}minutes. you did great!!! 2kg calories lost`
        );
        console.log(
            
        );
    }
    }
  
    
}

    
}
