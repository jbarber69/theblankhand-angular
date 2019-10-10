import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageMobComponent } from './homepage-mob.component';

describe('HomepageMobComponent', () => {
  let component: HomepageMobComponent;
  let fixture: ComponentFixture<HomepageMobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageMobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageMobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
