namespace Builders {

    export function buildItem(str: string, useFunction: Function, btn: controller.Button): Item {
        const builtItem = new Item(str, useFunction, btn);

        return builtItem;
    }

    
}