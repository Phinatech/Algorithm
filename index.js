// function number(x) {
//     for (let i = 0; i <=12; i++) {
//         console.log(x*12);
//     }
// }
// number(5)


class person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
}

let humans = new person("judith",12)
let human = new person("jessicas",12)

console.log(humans, human);

//for multiplying an number
class substract{
    constructor(x,y){
        this.x = x;
        this.y = y
    }
    sum(){
        return this.x * this.y
    }

    }

    let first = new substract(4,5)
    console.log(first.sum());

    //having  new point
    class point{
        constructor(x,y){
            this.x = x;
            this.y = y;
        }

        static findpoint(a,b){
            let dx = ax -bx;
            let dy = ay -by;
        }
    }

    // let point1 = new point (22,7);
    // let point2 = new point (8,1);

    // console.log(point1,point2);


// creating another class inside another class
    class newpoint{
        constructor(x){
            this.x = x
        }

        getData(){
            return `ohhhhh you just picked ${this.y};`
        }
    }

    class onpointer extends newpoint {
        constructor(x,y){
            super(x);
            this.y = y;
        }
    }

    let choice = new onpointer("peter","paul");
    console.log(choice.getData());

   