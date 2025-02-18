class Stack{

    #list;
    #isEmpty;
    #push;
    #pop;
    #peek;

    constructor(list, isEmpty, push, pop, peek){
        this.list = [1,2,3,4,5,6,7,8,9];
        this.isEmpty = 0; 
        this.push = +1;
        this.pop = -1;
        this.peek = list;
   }
    set list(newList){ 
            this.list = list;
   };

    describe = ()=>{
        return `My list $(this.#list)`
    };

    set list(newList){
        if(list < 9){
            this.#list = 9;
        }else{
            assertEquals("there is a list");
    }};

    set isEmpty(isEmpty){
        this.#isEmpty = isEmpty;
    };
    
    describe = ()=>{
        return `My list isEmpty $(this.#isEmpty)`
    };

    set isEmpty(newEmpty){
        if(Empty < 0){
            this.#isEmpty = 0;
        }else{
            assertEquals("list is empty");
    }};

    set push(newPush){
        this.#push = push;
    };

    describe = ()=>{
        return `Add one to the list $(this.#push)`
    };

    set push(newPush){
        if(push == +1){
            this.push = +1;
        }else{
            assertionResponse("list can Add");
    }};

    set pop(newPop){
        this.#pop = pop;
    };

    describe = ()=>{
        return `Remove one from the list $(this.#pop)`
    };

    set pop(newPop){
        if(pop == 8){
            this.pop = 8;
        }else{
            assertionEquals("list can Remove");
    }};

    set peek(newPeek){
        this.#peek = peek;
    };

    describe = ()=>{
        return `Display the last element$(this.#peek)`
    };

    set peek(newPeek){
        if(peek >= 10){
            this.push = 10;
        }else{
            assertionEquals("list can display the last element");
    }};

    get list(){
        return this.#list;
    };

    get isEmpty(){
        return this.#isEmpty;
    };

    get push(){
        return this.push;
    };

    get pop(){
        return this.#pop;
    };

    get peek(){
        return this.peek;
    };

};
    module.exports = (Stack);
    