import { Component, OnInit, input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  saxAddCircleOutline,
  saxAddOutline,
  saxCalendar1Outline,
  saxCalendarAddOutline,
  saxCalendarEditOutline,
  saxClockOutline,
  saxMenuOutline,
  saxNote1Outline,
  saxNote21Outline,
  saxNoteAddOutline,
  saxNotificationBingOutline,
  saxTimer1Outline,
  saxTimerPauseOutline,
  saxHashtagOutline,
  saxMore2Outline,
  saxMoreOutline,
  saxTaskOutline,
  saxTaskSquareOutline,
  saxTickCircleOutline,
  saxRecordCircleOutline,
} from '@ng-icons/iconsax/outline';

export type Icon =
  | 'saxTimer1Outline'
  | 'saxTimerPauseOutline'
  | 'saxClockOutline'
  | 'saxNote21Outline'
  | 'saxNote1Outline'
  | 'saxNoteAddOutline'
  | 'saxCalendar1Outline'
  | 'saxCalendarAddOutline'
  | 'saxCalendarEditOutline'
  | 'saxAddOutline'
  | 'saxAddCircleOutline'
  | 'saxMenuOutline'
  | 'saxNotificationBingOutline'
  | 'saxHashtagOutline'
  | 'saxMore2Outline'
  | 'saxMoreOutline'
  | 'saxTaskOutline'
  | 'saxTaskSquareOutline'
  | 'saxTickCircleOutline'
  | 'saxRecordCircleOutline';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  imports: [NgIconComponent],
  viewProviders: [
    provideIcons({
      saxTimer1Outline,
      saxTimerPauseOutline,
      saxClockOutline,
      saxNote21Outline,
      saxNote1Outline,
      saxNoteAddOutline,
      saxCalendar1Outline,
      saxCalendarAddOutline,
      saxCalendarEditOutline,
      saxAddOutline,
      saxAddCircleOutline,
      saxMenuOutline,
      saxNotificationBingOutline,
      saxHashtagOutline,
      saxMore2Outline,
      saxMoreOutline,
      saxTaskOutline,
      saxTaskSquareOutline,
      saxTickCircleOutline,
      saxRecordCircleOutline
    }),
  ],
  standalone: true,
})
export class IconComponent implements OnInit {

  name = input.required<Icon>();

  constructor() {}

  ngOnInit() {}
}
