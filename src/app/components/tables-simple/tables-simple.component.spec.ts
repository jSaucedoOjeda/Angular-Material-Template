import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesSimpleComponent } from './tables-simple.component';

describe('TablesSimpleComponent', () => {
  let component: TablesSimpleComponent;
  let fixture: ComponentFixture<TablesSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
