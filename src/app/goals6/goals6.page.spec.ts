import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Goals6Page } from './goals6.page';

describe('Goals6Page', () => {
  let component: Goals6Page;
  let fixture: ComponentFixture<Goals6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Goals6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Goals6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
