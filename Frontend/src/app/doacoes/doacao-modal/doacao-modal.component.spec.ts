import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoacaoModalComponent } from './doacao-modal.component';

describe('DoacaoModalComponent', () => {
  let component: DoacaoModalComponent;
  let fixture: ComponentFixture<DoacaoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoacaoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoacaoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
