import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgforComponent } from './ngfor-component';

describe('NgforComponent', () => {
  let component: NgforComponent;
  let fixture: ComponentFixture<NgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgforComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgforComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
