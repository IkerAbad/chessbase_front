import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyindexComponent } from './myindex.component';

describe('MyindexComponent', () => {
  let component: MyindexComponent;
  let fixture: ComponentFixture<MyindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyindexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
