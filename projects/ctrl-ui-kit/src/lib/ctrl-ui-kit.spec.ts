import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtrlUiKit } from './ctrl-ui-kit';

describe('CtrlUiKit', () => {
  let component: CtrlUiKit;
  let fixture: ComponentFixture<CtrlUiKit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtrlUiKit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtrlUiKit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
