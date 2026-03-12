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

    constructor(items: Item[]) {
        super(EngineType.STATISTIC);

        this._items = items;
    }

    get items(): Item[] {
        return this._items;
    }

    get heldItem(): Item {
        return this.heldItem;
    }

    set items(input: Item[]) {
        this.items = input;
    }

    set heldItem(input: Item) {
        this.heldItem = input;
    }

    bootstrap(toHeldItem?: Item) {
        try {
            for (let value of this.items) {
                let btn = value.inputAccessor;
                let event = value.useFunction;
                let name = value.name;

                console.log("Registered: " + name);

                forever(function inputter() {
                    btn.onEvent(ControllerButtonEvent.Pressed, function () {
                        event();
                    });
                });
            }

            if (toHeldItem != null) {
                this.heldItem = toHeldItem;
            } else {
                this.heldItem = this.items.get(0);
            }

            console.log("Finalized Item Engine.");
        } catch {
            console.log("Failure to load Item Engine.");
            control.fail("Failure to run game engine!");
        }
    }
}