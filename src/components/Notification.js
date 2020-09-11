import React, { useEffect, useState } from "react";
import notificationService from "../services/notificationService";
import { Snackbar } from "@material-ui/core";

export default function Notification() {

  const [notificationState, setNotificationState] = useState({});

  useEffect(() => {

    const subscription = notificationService.events$
      .subscribe(state => setNotificationState(state));

    return () => subscription.unsubscribe();

  });

  return (
    <Snackbar
      open={notificationState.open}
      onClose={notificationService.close}
      message={notificationState.message}
      autoHideDuration={3000}
    />
  );
}
