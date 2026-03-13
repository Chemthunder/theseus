namespace Test {
    const TEST = theseus.createProject("TEST");

    export let TestItem = theseus.buildItem("TestItem", useTestItem, controller.A);
    export let TestItem2 = theseus.buildItem("TestItem2", useTestItemTwo, controller.A);
    export let TestItem3 = theseus.buildItem("TestItem3", useTestItemTwo, controller.A);

    export function useTestItem() {
        TEST.log("Used test item.");
    }

    export function useTestItemTwo() {
        TEST.log("Used second test item.");
    }

    export let TestItems: Item[] = [
        TestItem,
        TestItem2,
        TestItem3
    ];

    export let Engine = new ItemEngine(TestItems, TEST);
    Engine.bootstrap();
}