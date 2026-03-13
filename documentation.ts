// Add your code here

/**
 * Theseus blocks
 */
//% weight=10 color=#2b8051 icon="\uf1e6"
//% advanced=true
namespace theseus {
    
    /**
     * Builds a sprite and registers it under a project namespace.
     * @param project The project to register under.
     * @param img The sprite's image.
     * @param kind The SpriteKind.
     */
    //% block
    export function buildSprite(project: Initializer, img: Image, kind?: number): Sprite {
        const builtSprite = sprites.create(img, kind);
        return builtSprite;
    }

    /**
     * In the Item Engine, registers an item.
     * @param str The Item name (should be in normal spelling.)
     * @param useFunction The function the item will run upon being activated.
     * @param btn The button to activate the function above.
     */
    //% block
    export function buildItem(str: string, useFunction: Function, btn: controller.Button): Item {
        const builtItem = new Item(str, useFunction, btn);
        return builtItem;
    }

    /**
     * Registers a Theseus project. This is needed for everything Theseus can provide.
     * @param projectId The name of your project.
     */
    //% block
    export function createProject(projectId: string): Initializer {
        const initalizer = new Initializer(projectId);
        initalizer.log("Project registered successfully: " + projectId.toUpperCase(), InfoType.INFO);
        return initalizer;
    }
}