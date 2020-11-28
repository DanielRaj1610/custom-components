import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VAdvExpansionComponent } from './v-adv-expansion.component';

describe('VAdvExpansionComponent', () => {
  let component: VAdvExpansionComponent;
  let fixture: ComponentFixture<VAdvExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VAdvExpansionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VAdvExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
