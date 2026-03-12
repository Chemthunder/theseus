enum EngineType {
    PLATFORMER, // platformer
    TOPDOWN, // topdown game
    NONE, // none
    STATISTIC // items, etc
}

class Engine { // built to be used in APIs, "CustomEngine" etc.
    _type: EngineType;
    _func: Function;

    constructor(engineType: EngineType, func?: Function) {
        this._type = engineType;
        this._func = func;
    }

    get engineType(): EngineType {
        return this._type;
    }

    set engineType(eng: EngineType) {
        this.engineType = eng;
    }

    get func(): Function {
        return this._func;
    }

    set func(input: Function) {
        this.func = input;
    }
}



class Game {
    _eng: Engine;
    _name: string;

    constructor(engine: Engine, name: string) {
        this._eng = engine;
        this._name = name;
    }

    get engine(): Engine {
        return this._eng;
    }

    get name(): string {
        return this._name;
    }

    set engine(input: Engine) {
        this.engine = input;
    }

    set name(input:string) {
        this.name = input;
    }

    bootstrap() {
        

    }
}