import {
  OnInit,
  Input,
  Output,
  Component,
  ElementRef,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() disabled: boolean;
  @Input() height = 35;

  public type = 'button';

  public isPrimary = false;
  public isSecondary = false;
  public isSuccess = false;
  public isDanger = false;
  public isDark = false;
  public isDim = false;
  public isLight = false;
  public isClear = false;
  public isFadedDark = false;

  public isRounded = false;
  public isOutline = false;

  constructor(
      private elementRef: ElementRef
  ) { }

  ngOnInit() {
      this.checkBtnStyle();
  }

  checkBtnStyle() {
      if (this.elementRef.nativeElement.hasAttribute('submit')) {
          this.type = 'submit';
      }

      this.isRounded
          = this.elementRef.nativeElement.hasAttribute('rounded');

      this.isOutline
          = this.elementRef.nativeElement.hasAttribute('outline');

      this.isPrimary
          = this.elementRef.nativeElement.hasAttribute('primary');
      if (this.isPrimary) { return; }

      this.isSecondary
          = this.elementRef.nativeElement.hasAttribute('secondary');
      if (this.isSecondary) { return; }

      this.isSuccess
          = this.elementRef.nativeElement.hasAttribute('success');
      if (this.isSuccess) { return; }

      this.isDanger
          = this.elementRef.nativeElement.hasAttribute('danger');
      if (this.isDanger) { return; }

      this.isDark
          = this.elementRef.nativeElement.hasAttribute('dark');
      if (this.isDark) { return; }

      this.isDim
          = this.elementRef.nativeElement.hasAttribute('dim');
      if (this.isDim) { return; }

      this.isLight
          = this.elementRef.nativeElement.hasAttribute('light');
      if (this.isLight) { return; }

      this.isClear
          = this.elementRef.nativeElement.hasAttribute('clear');
      if (this.isClear) { return; }

      this.isFadedDark
          = this.elementRef.nativeElement.hasAttribute('fadedDark');
      if (this.isFadedDark) { return; }

      this.isOutline
          = this.elementRef.nativeElement.hasAttribute('outline');

      this.isPrimary = true;
  }
}
