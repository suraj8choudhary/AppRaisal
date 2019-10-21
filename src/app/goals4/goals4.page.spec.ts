import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Goals4Page } from './goals4.page';

describe('Goals4Page', () => {
  let component: Goals4Page;
  let fixture: ComponentFixture<Goals4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Goals4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Goals4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
