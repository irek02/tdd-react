import { BehaviorSubject } from 'rxjs'

const state$ = new BehaviorSubject({ open: false, message: null });

const snackBarStateService = {
  open: (message) => state$.next({ open: true, message }),
  close: () => state$.next({ open: false, message: null }),
  state$: state$.asObservable(),
};

export default snackBarStateService;
