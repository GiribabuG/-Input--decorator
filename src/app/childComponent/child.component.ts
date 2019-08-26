import { Component, Input } from "@angular/core";

@Component({
    selector : 'child',
    templateUrl : './child.component.html'
})

export class ChildComponent {
   @Input() p_id;
   @Input() p_name;
   @Input() p_cost;
   
}