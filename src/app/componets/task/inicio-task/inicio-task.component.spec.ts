import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioTaskComponent } from './inicio-task.component';

describe('InicioTaskComponent', () => {
  let component: InicioTaskComponent;
  let fixture: ComponentFixture<InicioTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
