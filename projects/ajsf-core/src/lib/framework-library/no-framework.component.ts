import { Component, Input } from '@angular/core';

@Component({
  selector: 'no-framework',
  templateUrl: './no-framework.component.html',
})
export class NoFrameworkComponent {
  @Input() layoutNode: any;
  @Input() layoutIndex: number[];
  @Input() dataIndex: number[];
}
