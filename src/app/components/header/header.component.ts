import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('search', { static: false }) input: ElementRef = {} as ElementRef;
  @ViewChild('menu1', { static: false }) menu: ElementRef = {} as ElementRef;
  notificationsListEnabled: boolean = false;
  profileListEnabled: boolean = false;

  circleListEnabled: boolean = false;

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit(): void {
    let li = document.querySelectorAll("#menu1 ul li");
    let li2 = this.renderer.selectRootElement('#menu1 ul li',);
    console.log(li);
    console.log(li2);
  }

  onFocusIn = () => {
    console.log(this.input.nativeElement.value);
    this.renderer.addClass(this.input.nativeElement, 'icon-border-bottom-green');
    this.renderer.addClass(this.input.nativeElement, 'icon-border-bottom-white');
  }

  onFocusOut = () => {
    console.log(this.input.nativeElement.value);
    this.renderer.removeClass(this.input.nativeElement, 'icon-border-bottom-green');
    this.renderer.removeClass(this.input.nativeElement, 'icon-border-bottom-white');
  }

  toggleNotificationsList = () => {
    this.notificationsListEnabled = !this.notificationsListEnabled;
  }

  toggleProfileList = () => {
    this.profileListEnabled = !this.profileListEnabled;
  }


}
