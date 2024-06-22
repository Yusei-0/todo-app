import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskCardSubtaskListItemComponent } from './task-card-subtask-list-item.component';

describe('TaskCardSubtaskListItemComponent', () => {
  let component: TaskCardSubtaskListItemComponent;
  let fixture: ComponentFixture<TaskCardSubtaskListItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCardSubtaskListItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskCardSubtaskListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
