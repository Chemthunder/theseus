enum EngineType {
    STATISTIC,
    CONSTANT,
    NONE
}

class Engine { // built to be used in APIs, "CustomEngine" etc.
    _type: EngineType;

    constructor(engineType: EngineType) {
        this._type = engineType;
    }

    get engineType(): EngineType {
        return this._type;
    }

    set engineType(eng: EngineType) {
        this.engineType = eng;
    }
}