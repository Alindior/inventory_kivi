import { notification } from 'antd';

notification.config({
  placement: 'bottomLeft',
  bottom: 50,
  duration: 5,
});

export default class NotificationService {
  static showNotification(message: string) {
    notification.error({
      message,
      onClick: () => notification.destroy(),
    });
  }
}
