import { Notification } from "@application/entities/notification";

export class NotificationViewModel {
  static toHTTP(notificatin: Notification) {
    return {
      id: notificatin.id,
      content: notificatin.content,
      category: notificatin.category,
      recipientId: notificatin.recipientId
    }
  }
}