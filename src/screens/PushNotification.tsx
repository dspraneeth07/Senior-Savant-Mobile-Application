import PushNotification from 'react-native-push-notification';

export const configurePushNotifications = () => {
  PushNotification.configure({
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);
      notification.finish(PushNotification.FetchResult.NoData);
    },
    popInitialNotification: true,
    requestPermissions: true,
  });

  // Create a channel (required for Android)
  PushNotification.createChannel(
    {
      channelId: 'default-channel-id', // (required)
      channelName: 'Default channel', // (required)
    },
    (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
  );
};