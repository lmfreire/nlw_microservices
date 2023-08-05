import { Content } from "@application/entities/content";
import { Notification, NotificationProps } from "@application/entities/notification";

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'Social',
    content: new Content('Nova solicitacao'),
    recipientId: 'recipient-2',
    ...override 
  });
}