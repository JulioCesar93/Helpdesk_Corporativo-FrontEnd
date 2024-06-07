import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroROComponent } from './ocorrencia.component';

describe('RegistroROComponent', () => {
  let component: RegistroROComponent;
  let fixture: ComponentFixture<RegistroROComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroROComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroROComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
