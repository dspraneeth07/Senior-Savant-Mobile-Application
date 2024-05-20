# Senior-Savant-Mobile-Application (React Native)

## Introduction

Senior Savant is a mobile app tailored specifically for the elderly, focusing on improving their digital interactions and simplifying their daily routines. Our aim is to offer an intuitive platform that makes accessing essential services and information effortless for seniors, enabling them to navigate the digital landscape comfortably. Whether it's managing health-related tasks, staying in touch with family and friends, or accessing useful resources, Senior Savant is here to be the trusted companion for seniors in their digital journey.

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

## License

This project is open-source and licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software under the terms of this license. Make sure to include the original license text in your distribution, and provide proper attribution if you choose to use or modify this project.
