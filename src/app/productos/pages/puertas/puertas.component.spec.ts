import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PuertasComponent } from './puertas.component';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

describe('PuertasComponent', () => {
  let component: PuertasComponent;
  let fixture: ComponentFixture<PuertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
         imports: [NgbCarouselConfig],

      declarations: [ PuertasComponent ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
