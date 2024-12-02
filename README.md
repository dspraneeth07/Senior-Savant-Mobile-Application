# Senior-Savant-Mobile-Application (React Native)

## Introduction

Senior Savant is a mobile app tailored specifically for the elderly, focusing on improving their digital interactions and simplifying their daily routines. Our aim is to offer an intuitive platform that makes accessing essential services and information effortless for seniors, enabling them to navigate the digital landscape comfortably. Whether it's managing health-related tasks, staying in touch with family and friends, or accessing useful resources, Senior Savant is here to be the trusted companion for seniors in their digital journey.

## Features

The Senior Savant Mobile Application includes the following features to ensure a seamless and supportive experience for elderly users:

1. **Essential Services Access**: Easy access to national schemes and services like EPFO, Jeevan Pramaan, PMVVY, and more, presented in a clean, user-friendly card layout.
   
2. **Rasa Chatbot Integration**: A conversational chatbot powered by Rasa to guide users on how to navigate the app and provide quick answers to common questions. It ensures accessibility and clarity for elderly users.

3. **Voice-to-Text Converter**: Enables users to convert speech into text effortlessly, reducing the need for manual typing and enhancing usability for users with limited typing skills.

4. **Reminder System**: A customizable reminder feature to help users keep track of important tasks like medication schedules, appointments, or bill payments.

5. **Intuitive UI/UX**: A user interface designed with accessibility and simplicity in mind, including large buttons, readable fonts, and vibrant colors for better visibility.

6. **Mobile-Friendly Accessibility**: Optimized for both Android and iOS using React Native and Expo for seamless performance on all devices.

---

## Running React Native using Expo

To run the Senior Savant Mobile Application using Expo, follow these steps:

1. Install Expo globally on your system if you haven't already:

   ```
   npm install -g expo-cli
   ```

2. Clone the repository to your local machine:

   ```
   git clone https://github.com/CameronBlack19/Senior-Savant-Mobile-Application.git
   ```

3. Navigate to the project directory:

   ```
   cd senior-savant
   ```

4. Install the project dependencies:

   ```
   npm install
   ```

5. Start the development server:

   ```
   expo start
   ```

6. Use the Expo client app on your iOS or Android device to scan the QR code displayed in the terminal or on the web page that opens. This will allow you to view and test the application on your device.

If there is a situation where you get a message like "Project is incompatible with the version of Expo Go", then try to upgrade expo dependencies. It is mainly because this project uses SDK 50.

(I) Upgrade the Expo SDK:
```
# Install latest
npm install expo@latest

# To install a specific SDK version
npm install expo@51
```

(II) Upgrade dependencies:
```
npx expo install --fix
```

## Contribution

Contributions to this project are highly appreciated. If you have ideas, bug reports, or improvements, please open an issue or submit a pull request on the GitHub repository. Let's work together to make this app even better!

### Recent Contributions
The following features have been implemented during the latest development phase:
- **Rasa Chatbot Integration**: Added a conversational chatbot to assist users.
- **Voice-to-Text Converter**: Enhanced user input capabilities through voice recognition.
- **Reminder System**: Integrated a personalized reminder feature.

These updates were contributed by [dspraneeth07](https://github.com/dspraneeth07).

Let's work together to make this app even better!

---

## License

This project is open-source and licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software under the terms of this license. Make sure to include the original license text in your distribution, and provide proper attribution if you choose to use or modify this project.
