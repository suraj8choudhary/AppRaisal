import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfreviewPage } from './selfreview.page';

describe('SelfreviewPage', () => {
  let component: SelfreviewPage;
  let fixture: ComponentFixture<SelfreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfreviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
