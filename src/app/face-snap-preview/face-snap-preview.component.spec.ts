import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSnapPreviewComponent } from './face-snap-preview.component';

describe('FaceSnapPreviewComponent', () => {
  let component: FaceSnapPreviewComponent;
  let fixture: ComponentFixture<FaceSnapPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaceSnapPreviewComponent]
    });
    fixture = TestBed.createComponent(FaceSnapPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
