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

    constructor(items: Item[]) {
        super(EngineType.STATISTIC);

        this._items = items;
        this._isActive = false;
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

    set items(input: Item[]) {
        this.items = input;
    }

    set heldItem(input: Item) {
        this._heldItem = input;
    }

    set isActive(input: boolean) {
        this._isActive = input;
    }

    getNext(): Item {
        let array = this.items;

        if (array.length > 1) {
            let val: number = array.indexOf(this.heldItem);
            return array.get(val + 1);
        } else {
            console.log("Unable to get next value due to non-existent value.");
            control.fail("Engine failure: ");
        }

        return array.get(0);
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
                console.log("Held item set to: " + toHeldItem.name);
            } else {
                this.heldItem = this.items.get(0);
                console.log("Held item empty, defaulting to first list value.");
            }

            console.log("Finalized Item Engine.");
            this.isActive = true;
        } catch {
            console.log("Failure to load Item Engine.");
            control.fail("Failure to run game engine!");
            this.isActive = false;
        }
    }
}

