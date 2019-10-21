import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Goals8Page } from './goals8.page';

describe('Goals8Page', () => {
  let component: Goals8Page;
  let fixture: ComponentFixture<Goals8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Goals8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Goals8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
