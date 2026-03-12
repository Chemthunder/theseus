namespace Test {    
    export let TestItem = Builders.buildItem("TestItem", useTestItem, controller.A);
    
    export function useTestItem() {

    }

    export let TestItems: Item[] = [
        TestItem
    ];

    export let Engine = new ItemEngine(TestItems);
    Engine.bootstrap();
}