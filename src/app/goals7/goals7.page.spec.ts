import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Goals7Page } from './goals7.page';

describe('Goals7Page', () => {
  let component: Goals7Page;
  let fixture: ComponentFixture<Goals7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Goals7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Goals7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
