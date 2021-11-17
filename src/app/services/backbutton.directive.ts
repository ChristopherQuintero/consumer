import { Directive, HostListener } from '@angular/core';
import { NavegationService } from './navegation.service';

@Directive({
  selector: '[backButton]'
})
export class BackButtonDirective {

  constructor(private navigation: NavegationService) { }

  @HostListener('click')
  onClick(): void {
    this.navigation.back();
  }

}
