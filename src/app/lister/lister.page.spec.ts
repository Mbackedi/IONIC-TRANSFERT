import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerPage } from './lister.page';

describe('ListerPage', () => {
  let component: ListerPage;
  let fixture: ComponentFixture<ListerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
