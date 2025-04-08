import {
    trigger,
    transition,
    style,
    query,
    animate,
  } from '@angular/animations';
  
  export const smoothFadeAnimation = trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', 
          style({ opacity: 1 })
        )
      ], { optional: true })
    ]),
    transition('* => NotFoundPage', [
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', 
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ])
  ]);