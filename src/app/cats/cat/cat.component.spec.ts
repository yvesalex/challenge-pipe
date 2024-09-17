import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatComponent } from './cat.component';

describe('CatComponent', () => {
  let component: CatComponent;
  let fixture: ComponentFixture<CatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
