import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export declare class TestComponentComponent {
    formtype: number;
    constructor();
    onChange(): void;
    elementList: {
        name: string;
        id: number;
    }[];
    formList: {
        name: string;
        id: number;
    }[];
    drop(event: CdkDragDrop<{
        name: string;
        id: number;
    }[]>): void;
    preventDrop: (drag: any, drop: any) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TestComponentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TestComponentComponent, "lib-test-component", never, {}, {}, never, never, true, never>;
}
