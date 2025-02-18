class Angle{

    #name
    #area
    #isSquare

    constructor(name, Area, isSquare){
        this.#name = name;
        this.#area = area;
        this.isSquare = isSquare;
    };

    
        set name(newName){
            this.#name = newName;
        };

        set area(area){
            if(area > 0){
                this.#area = area;
            }else{
                throw new Error("Area should not be less than 0");
        }};
    
        set isSquare(isSquare){
            this.#isSquare = isSquare
        };
    
        get name(){
            return this.#name;
        };
    
        get area(){
            return this.#area;
        };
    
        get isSquare(){
            return this.#isSquare;
        };
    }
    
    const Formula = new Angle("Area", "isSquare", "name");
    console.log(Formula.Angle);
    
    
    module.exports = Angle;
