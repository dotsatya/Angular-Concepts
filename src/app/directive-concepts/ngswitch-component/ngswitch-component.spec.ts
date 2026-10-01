import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgswitchComponent } from './ngswitch-component';

describe('NgswitchComponent', () => {
  let component: NgswitchComponent;
  let fixture: ComponentFixture<NgswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgswitchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgswitchComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
