enum InfoType {
    WARN,
    DEBUG,
    ERR,
    INFO
}

class Initializer {
    _projectId: string;

    constructor(projectId: string) {
        this._projectId = projectId;
    }

    get projectId(): string {
        return this._projectId;
    }

    set projectId(str: string) {
        this.projectId = str;
    }

    log(contents: string, infoType?: InfoType) {
        if (infoType != null) {
            switch (infoType) {
                case (InfoType.WARN): {
                    console.warn("(" + this.projectId + ") " + contents);
                }
                case (InfoType.DEBUG): {
                    console.debug("(" + this.projectId + ") " + contents);
                }
                case (InfoType.ERR): {
                    console.error("(" + this.projectId + ") " + contents);
                }
                case (InfoType.INFO): {
                    console.inspect("(" + this.projectId + ") " + contents);
                }
                default: {
                    console.log("(" + this.projectId + ") " + contents);
                }
            }
        } else {
            console.log("(" + this.projectId + ") " + contents);
        }
    }

    stop(reason: string) {
        this.log("Project failed for reason: " + reason);
        control.fail("Project Failed!");
    }

    reload(reason: string) {
        this.log("Reloading project for reason: " + reason);
        game.reset();
    }
}