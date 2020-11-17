import { BehaviorSubject } from 'rxjs';

const events$ = new BehaviorSubject({ open: false, home: null });

const bookingDialogService = {
  events$: events$.asObservable(),
  open: (home) => events$.next({ open: true, home }),
  close: () => events$.next({ open: false, home: null }),
}

export default bookingDialogService;
