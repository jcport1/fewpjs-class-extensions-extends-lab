// Your code here



    class Polygon {

    constructor(sidesArray){

        this.sidesArray = sidesArray
        //number of sides is the length of array (how many items are in the array)
        this.count = this.sidesArray.length
    }

    //number of sides 

    get countSides(){
        return this.sidesArray.length
    }

    //sum of all sides 

    get perimeter() {

        //return the value of the reduce function 

        return this.sidesArray.reduce(function(total, element){
            return total + element
        }, 0)
    }

} 

class Triangle extends Polygon {

    get isValid() {
        if (!Array.isArray(this.sidesArray)) return;
        if (this.count !== 3) return;
        let side1 = this.sidesArray[0]
        let side2 = this.sidesArray[1]
        let side3 = this.sidesArray[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
      }

}

class Square extends Polygon {

    get isValid() {
        if (!Array.isArray(this.sidesArray)) return;
        if (this.count !== 4) return;
        let side1 = this.sidesArray[0]
        let side2 = this.sidesArray[1]
        let side3 = this.sidesArray[2]
        let side4 = this.sidesArray[3]
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))
      }

      get area() {
        if (!Array.isArray(this.sidesArray)) return;
        if (this.count !== 4) return;
        return this.sidesArray[0] * this.sidesArray[0]
      }
}

// const polygon1 = new Polygon([ 5, 5, 5 ]);
// const polygon2 = new Polygon([ 6, 4, 20 ]);


