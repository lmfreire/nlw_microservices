import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CancelNotification } from "./cancel-notification";
import { NotificationNotFound } from "./errors/notification-not-found";
import { makeNotification } from "@test/factories/notification-factory";


describe('Cancel Notification', () => {
  it('should be able to Cancel a notification', async () => {

    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = makeNotification({recipientId: 'Exemple-recipient-id'});

    await notificationsRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id
    })

    
    expect(notificationsRepository.notifications[0].canceledAt).toEqual(expect.any(Date))
  })

  it('should not be able to create a notification when it does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'Fake notification id'
      });
    }).rejects.toThrow(NotificationNotFound)

  })
})