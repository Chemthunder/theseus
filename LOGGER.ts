class Logger {
    _namespace: string;

    constructor(str: string) {
        this._namespace = str;
    }

    get nmespce(): string {
        return this._namespace;
    }

    set nmespce(str: string) {
        this.nmespce = str;
    }

    log(contents: string) {
        console.log("(" + this.nmespce + ")" + "" + contents);
    }
}

let log = new Logger("Theseus");
log.log("test!");