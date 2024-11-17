import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the navbar', () => {
    expect(component).toBeTruthy();
  });

  it("should have a title", () => {
    let compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector(".navbar-brand")?.textContent).toContain("The Garbage Game")
  });
});
