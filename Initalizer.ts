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
                    console.warn("(" + this.projectId + ") " + contents + " [WARN]");
                    break;
                }
                case (InfoType.DEBUG): {
                    console.debug("(" + this.projectId + ") " + contents + " [DEBUG]");
                    break;
                }
                case (InfoType.ERR): {
                    console.error("(" + this.projectId + ") " + contents + " [ERROR]");
                    break;
                }
                case (InfoType.INFO): {
                    console.log("(" + this.projectId + ") " + contents);
                    break;
                }
                default: {
                    console.log("(" + this.projectId + ") " + contents);
                    break;
                }
            }
        } else {
            console.log("(" + this.projectId + ") " + contents);
        }
    }

    stop(reason: string) {
        this.log("Project failed for reason: " + reason, InfoType.ERR);
        control.fail("Project Failed!");
    }

    reload(reason: string) {
        this.log("Reloading project for reason: " + reason, InfoType.ERR);
        game.reset();
    }
}