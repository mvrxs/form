import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  isMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.type();
    this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  type(): void {
    const words: string[] = ["¡Estamos de rebajas!", "¡Descuentos de hasta el 50%!", "¡No te lo pierdas!"];
    let i: number = 0;
    let j: number = 0;
    let currentWord: string = "";
    let isDeleting: boolean = false;

    const typeInterval = setInterval(() => {
      currentWord = words[i];
      const typewriterElement = document.getElementById("typewriter");
      if (typewriterElement) {
        if (isDeleting) {
          typewriterElement.textContent = currentWord.substring(0, j - 1);
          j--;
          if (j === 0) {
            isDeleting = false;
            i++;
            if (i === words.length) {
              i = 0;
            }
          }
        } else {
          typewriterElement.textContent = currentWord.substring(0, j + 1);
          j++;
          if (j === currentWord.length) {
            isDeleting = true;
          }
        }
      }
    }, 110);
  }
}
