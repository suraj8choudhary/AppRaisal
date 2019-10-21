import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Goals5Page } from './goals5.page';

describe('Goals5Page', () => {
  let component: Goals5Page;
  let fixture: ComponentFixture<Goals5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Goals5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Goals5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
