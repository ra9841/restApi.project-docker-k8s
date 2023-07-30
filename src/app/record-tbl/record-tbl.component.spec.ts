import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordTblComponent } from './record-tbl.component';

describe('RecordTblComponent', () => {
  let component: RecordTblComponent;
  let fixture: ComponentFixture<RecordTblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordTblComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
