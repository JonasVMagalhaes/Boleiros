import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFootballComponent } from './game-football.component';

describe('GameFootballComponent', () => {
  let component: GameFootballComponent;
  let fixture: ComponentFixture<GameFootballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameFootballComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameFootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
