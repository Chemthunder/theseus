class GravityEngine extends Engine {
    _applicableSprites:Sprite[];
    _gx: number;
    _gy: number;

    constructor(appliedSprites: Sprite[], gravX: number, gravY: number) {
        super(EngineType.CONSTANT);

        this._applicableSprites = appliedSprites;
        this._gx = gravX;
        this._gy = gravY;
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

    set appliedSprites(input: Sprite[]) {
        this.appliedSprites = input;
    }

    set gravX(num: number) {
        this.gravX = num;
    }

    set gravY(num: number) {
        this.gravY = num;
    }

    bootstrap() {
        let spr = this.appliedSprites;
        let gx = this.gravX;
        let gy = this.gravY;

        for (let value of spr) {
            value.ay = gy;
            value.ax = gx;

            console.log("GravityEngine registered for: " + value.toString());
        }
    }
}