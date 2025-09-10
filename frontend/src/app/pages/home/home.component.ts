import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  roles: string[] = [
    'Database Administrator',
    'Database Developer',
    'Full-Stack Developer'
  ];
  currentRole = '';
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private intervalId: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.startTyping();
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startTyping(): void {
    const type = () => {
      const role = this.roles[this.roleIndex];

      if (this.isDeleting) {
        // backspacing
        this.currentRole = role.substring(0, this.charIndex - 1);
        this.charIndex--;
      } else {
        // typing forward
        this.currentRole = role.substring(0, this.charIndex + 1);
        this.charIndex++;
      }

      // update UI
      this.ngZone.run(() => {
        this.currentRole = this.currentRole;
      });

      // switching between typing and deleting
      if (!this.isDeleting && this.charIndex === role.length) {
        this.isDeleting = true;
        setTimeout(type, 1000); // pause at full word
        return;
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }

      const speed = this.isDeleting ? 100 : 150;
      setTimeout(type, speed);
    };

    type();
  }
}
