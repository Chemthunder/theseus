namespace Builders {
    export function buildItem(str: string, useFunction: Function, btn: controller.Button): Item {
        const builtItem = new Item(str, useFunction, btn);
        return builtItem;
    }

    export function createProject(projectId: string): Initializer {
        const initalizer = new Initializer(projectId);
        initalizer.log("Project registered successfully: " + projectId.toUpperCase(), InfoType.INFO);
        return initalizer;
    }
}

namespace SpriteBuilders {
    export function buildSprite(project: Initializer, img: Image, kind?: number): Sprite {
        const builtSprite = sprites.create(img, kind);

        return builtSprite;
    }
}