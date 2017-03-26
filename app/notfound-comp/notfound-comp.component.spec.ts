import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundCompComponent } from './notfound-comp.component';

describe('NotfoundCompComponent', () => {
  let component: NotfoundCompComponent;
  let fixture: ComponentFixture<NotfoundCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotfoundCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoundCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
