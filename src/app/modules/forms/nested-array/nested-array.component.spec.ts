import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedArrayComponent } from './nested-array.component';

describe('NestedArrayComponent', () => {
  let component: NestedArrayComponent;
  let fixture: ComponentFixture<NestedArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
