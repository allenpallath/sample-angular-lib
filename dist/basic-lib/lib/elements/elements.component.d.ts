import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ElementsComponent {
    item: any;
    formType: number | string;
    itemToDel: EventEmitter<any>;
    removeItem(item: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ElementsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ElementsComponent, "lib-elements", never, { "item": { "alias": "item"; "required": false; }; "formType": { "alias": "formType"; "required": false; }; }, { "itemToDel": "itemToDel"; }, never, never, true, never>;
}
