import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lgu2goWeb';
  private _hideNavbar = null;
  public get hideNavbar(): boolean {
    return this._hideNavbar;
  }
  public set hideNavbar(value: boolean) {
    if (this._hideNavbar !== value) {
      this._hideNavbar = value;
    }
  }
}
