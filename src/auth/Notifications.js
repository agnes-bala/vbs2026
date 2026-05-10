const safeSessionStorage = () => {
  if (typeof window !== 'undefined') return window.sessionStorage;
  return null;
};

export const AddNotification = (message, url, label, isUnRead) => {
  const storage = safeSessionStorage();
  if (!storage) return;
  const notifications = JSON.parse(storage.getItem("notifications") || "[]");
  const existingIndex = notifications.findIndex((notif) => notif.url === url);
  if (existingIndex !== -1) {
    notifications[existingIndex] = { ...notifications[existingIndex], message, isUnRead, label };
  } else {
    notifications.push({ message, url, isUnRead, label });
  }
  storage.setItem("notifications", JSON.stringify(notifications));
};

export const GetNotifications = () => {
  const storage = safeSessionStorage();
  if (!storage) return [];
  return JSON.parse(storage.getItem("notifications") || "[]");
};

export const RemoveNotification = (message) => {
  const storage = safeSessionStorage();
  if (!storage) return;
  let notifications = JSON.parse(storage.getItem("notifications") || "[]");
  notifications = notifications.filter((n) => n.message !== message);
  storage.setItem("notifications", JSON.stringify(notifications));
};

export const UpdateNotification = (message, updates) => {
  const storage = safeSessionStorage();
  if (!storage) return;
  let notifications = JSON.parse(storage.getItem("notifications") || "[]");
  notifications = notifications.map((n) =>
    n.message === message ? { ...n, ...updates } : n
  );
  storage.setItem("notifications", JSON.stringify(notifications));
};