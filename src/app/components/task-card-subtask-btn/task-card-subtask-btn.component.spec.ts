import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskCardSubtaskBtnComponent } from './task-card-subtask-btn.component';

describe('TaskCardSubtaskBtnComponent', () => {
  let component: TaskCardSubtaskBtnComponent;
  let fixture: ComponentFixture<TaskCardSubtaskBtnComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCardSubtaskBtnComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskCardSubtaskBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
