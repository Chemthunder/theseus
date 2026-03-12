namespace Builders {

    export function buildItem(str: string, useFunction: Function, btn: controller.Button): Item {
        const builtItem = new Item(str, useFunction, btn);

        return builtItem;
    }

    export function createProject(projectId: string): Initializer {
        const initalizer = new Initializer(projectId);
        initalizer.log("Project registered successfully!");

        return initalizer;
    }
}