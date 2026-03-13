class Item {
    _name: string;
    _useFunction: Function;
    _inputAccessor: controller.Button;

    constructor(name: string, useFunction: Function, inputAccessor: controller.Button) {
        this._name = name;
        this._useFunction = useFunction;
        this._inputAccessor = inputAccessor;
    }

    get inputAccessor(): controller.Button {
        return this._inputAccessor;
    }

    get name(): string {
        return this._name;
    }

    get useFunction(): Function {
        return this._useFunction;
    }
}

class ItemEngine extends Engine {
    _items: Item[];
    _heldItem: Item;
    _isActive: boolean;
    _init: Initializer;

    constructor(items: Item[], init: Initializer) {
        super(EngineType.STATISTIC);

        this._items = items;
        this._isActive = false;
        this._init = init;
    }

    get items(): Item[] {
        return this._items;
    }

    get heldItem(): Item {
        return this._heldItem;
    }

    get isActive(): boolean {
        return this._isActive;
    }

    get init(): Initializer {
        return this._init;
    }

    set items(input: Item[]) {
        this.items = input;
    }

    set heldItem(input: Item) {
        this._heldItem = input;
    }

    set isActive(input: boolean) {
        this._isActive = input;
    }

    set init(init: Initializer) {
        this.init = init;
    }

    bootstrap(toHeldItem?: Item) {
        let proj = this.init;
        let held = this.heldItem;
        let items = this.items;
        let activity = this.isActive;

        try {
            if (toHeldItem != null) {
                held = toHeldItem;
                proj.log("Held item set to: " + toHeldItem.name, InfoType.INFO);
            } else {
                held = items.get(0);
                proj.log("Held item empty, defaulting to first list value.", InfoType.WARN);
            }

            for (let value of items) {
                let btn = value.inputAccessor;
                let event = value.useFunction;
                let name = value.name;

                proj.log("Registered: " + name, InfoType.INFO);

                forever(function inputter() {
                    if (held == value) {
                        btn.onEvent(ControllerButtonEvent.Pressed, function () {
                            event();
                        });
                    }
                });
            }

            proj.log("Finalized Item Engine.", InfoType.INFO);
            activity = true;
        } catch {
            proj.log("Failure to load Item Engine.", InfoType.ERR);
            proj.stop("Item Engine failure")
            activity = false;
        }
    }
}