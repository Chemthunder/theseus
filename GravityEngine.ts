class GravityEngine extends Engine {
    _applicableSprites:Sprite[];
    _gx: number;
    _gy: number;

    _init: Initializer;

    constructor(appliedSprites: Sprite[], gravX: number, gravY: number, init: Initializer) {
        super(EngineType.CONSTANT);

        this._applicableSprites = appliedSprites;
        this._gx = gravX;
        this._gy = gravY;
        this._init = init;
    }

    get appliedSprites(): Sprite[] {
        return this._applicableSprites;
    }

    get gravX(): number {
        return this._gx;
    }

    get gravY(): number {
        return this._gy;
    }

    get init(): Initializer {
        return this._init;
    }

    set appliedSprites(input: Sprite[]) {
        this.appliedSprites = input;
    }

    set gravX(num: number) {
        this.gravX = num;
    }

    set gravY(num: number) {
        this.gravY = num;
    }

    set init(init: Initializer) {
        this.init = init;
    }

    bootstrap() {
        let spr = this.appliedSprites;
        let gx = this.gravX;
        let gy = this.gravY;

        for (let value of spr) {
            value.ay = gy;
            value.ax = gx;

            this.init.log("GravityEngine registered for: " + value.toString());
        }
    }
}