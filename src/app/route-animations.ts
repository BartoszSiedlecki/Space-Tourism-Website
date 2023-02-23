import{
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
    state,
}from '@angular/animations'

export const fader =
    trigger('routeAnimations', [
        transition('* <=> *',[
            query(':enter, :leave',[
                style({
                    position: "absolute",
                    left: 0,
                    width: "100%",
                    opacity: 0,
                })
            ]),
            query(':enter',[
                animate("600ms ease",
                    style({ opacity: 1 })
                ),
            ])
        ])
    ])

export const fadeTransition =
    trigger('fadeAnimation', [
        state('fadeOn', style({
            opacity: 0
        })),
        state('fadeOff', style({ opacity: 1 })),
        transition('fadeOff <=> fadeOn', [
        animate(200)
        ])
    ])