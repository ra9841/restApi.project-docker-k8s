import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShwComponent } from './edit-shw.component';

describe('EditShwComponent', () => {
  let component: EditShwComponent;
  let fixture: ComponentFixture<EditShwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditShwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditShwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
