import { BehaviorSubject } from 'rxjs';

const events$ = new BehaviorSubject({ open: false, home: null });

const bookingDialogService = {

  open: (home) => events$.next({ open: true, home }),
  close: () => events$.next({ open: false, home: null }),
  events$: events$.asObservable(),

};

export default bookingDialogService;
