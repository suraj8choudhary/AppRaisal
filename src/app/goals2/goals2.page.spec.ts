import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Goals2Page } from './goals2.page';

describe('Goals2Page', () => {
  let component: Goals2Page;
  let fixture: ComponentFixture<Goals2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Goals2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Goals2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
