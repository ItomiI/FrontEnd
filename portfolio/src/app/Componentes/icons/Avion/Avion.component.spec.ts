/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AvionComponent } from './Avion.component';

describe('AvionComponent', () => {
  let component: AvionComponent;
  let fixture: ComponentFixture<AvionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
