import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Goals3Page } from './goals3.page';

describe('Goals3Page', () => {
  let component: Goals3Page;
  let fixture: ComponentFixture<Goals3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Goals3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Goals3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
