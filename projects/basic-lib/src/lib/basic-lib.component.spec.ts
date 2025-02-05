import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLibComponent } from './basic-lib.component';

describe('BasicLibComponent', () => {
  let component: BasicLibComponent;
  let fixture: ComponentFixture<BasicLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
