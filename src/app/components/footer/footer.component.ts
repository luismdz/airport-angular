import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-light text-dark d-flex align-items-center">
      <div class="container">
        <p class="font-weight-lighter m-0">
          Copyright &copy; {{ currentYear | date:'y' }} AirPort
        </p>
      </div>
    </footer>
    `,
  styles: [`
      footer {
        width: 100%;
        height: 3.5rem;
        position: absolute;
        bottom: -10;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  currentYear = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
