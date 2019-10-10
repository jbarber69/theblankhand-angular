import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageDeskComponent } from './homepage-desk.component';

describe('HomepageDeskComponent', () => {
  let component: HomepageDeskComponent;
  let fixture: ComponentFixture<HomepageDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
