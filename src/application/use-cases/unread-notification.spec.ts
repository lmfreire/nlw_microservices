import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { NotificationNotFound } from "./errors/notification-not-found";
import { makeNotification } from "@test/factories/notification-factory";
import { UnreadNotification } from "./unread-notification";


describe('Unread Notification', () => {
  it('should be able to unread a notification', async () => {

    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification({
      readAt: new Date()
    });

    await notificationsRepository.create(notification);

    await readNotification.execute({
      notificationId: notification.id
    })
    
    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  })

  it('should not be able to unread a notification when it does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new UnreadNotification(notificationsRepository);

    expect(() => {
      return readNotification.execute({
        notificationId: 'Fake notification id'
      });
    }).rejects.toThrow(NotificationNotFound)

  })
})