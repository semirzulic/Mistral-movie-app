import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsDetailsComponent } from './tv-shows-details.component';

describe('TvShowsDetailsComponent', () => {
  let component: TvShowsDetailsComponent;
  let fixture: ComponentFixture<TvShowsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
