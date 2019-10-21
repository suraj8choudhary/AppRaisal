import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Goals1Page } from './goals1.page';

describe('Goals1Page', () => {
  let component: Goals1Page;
  let fixture: ComponentFixture<Goals1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Goals1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Goals1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
