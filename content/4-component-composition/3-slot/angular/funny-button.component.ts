import { Component, NgModule } from "@angular/core";

@Component({
  selector: "app-funny-button",
  styles: [
    `
      button {
        background: rgba(0, 0, 0, 0.4);
        color: #fff;
        padding: 10px 20px;
        font-size: 30px;
        border: 2px solid #fff;
        margin: 8px;
        transform: scale(0.9);
        box-shadow: 4px 4px rgba(0, 0, 0, 0.4);
        transition: transform 0.2s cubic-bezier(0.34, 1.65, 0.88, 0.925) 0s;
        outline: 0;
      }
    `,
  ],
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
})
export class FunnyButtonComponent {}

@NgModule({
  declarations: [FunnyButtonComponent],
  exports: [FunnyButtonComponent],
})
export class FunnyButtonModule {}
