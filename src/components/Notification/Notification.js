import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { requestForToken, onMessageListener } from "../../api/firebase";

const Notification = () => {
  const [notification, setNotification] = useState({ title: "", body: "" });

  const notify = () => toast(<ToastDisplay />);

  const ToastDisplay = () => {
    return (
      <div>
        <p>
          <b>{notification?.title}</b>
        </p>
        <p>{notification?.body}</p>
      </div>
    );
  };

  useEffect(() => {
    if (notification?.title) {
      notify();
    }
  }, [notification]);

  requestForToken();
  onMessageListener()
    .then((payload) => {
      setNotification({
        title: payload?.notification?.title,
        body: payload?.notification?.body,
      });
    })
    .catch((err) => console.log("onMessageListener -Notification", err));

  return <Toaster />;
};

export default Notification;
