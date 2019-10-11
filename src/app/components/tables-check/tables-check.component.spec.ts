import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesCheckComponent } from './tables-check.component';

describe('TablesCheckComponent', () => {
  let component: TablesCheckComponent;
  let fixture: ComponentFixture<TablesCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
