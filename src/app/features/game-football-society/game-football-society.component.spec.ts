import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFootballSocietyComponent } from './game-football-society.component';

describe('GameFootballSocietyComponent', () => {
  let component: GameFootballSocietyComponent;
  let fixture: ComponentFixture<GameFootballSocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameFootballSocietyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameFootballSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
