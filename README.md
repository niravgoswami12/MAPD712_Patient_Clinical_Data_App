# MAPD712_Patient_Clinical_Data_App

## Installation and usage

Be sure, you have installed all dependencies and applications to run React Native project on your computer : [Getting Started with React Native](https://facebook.github.io/react-native/docs/getting-started).

### Running the project

Clone this repository :

```
git clone https://github.com/niravgoswami12/MAPD712_Patient_Clinical_Data_App.git
cd MAPD712_Patient_Clinical_Data_App
```

Install packages :

```
npm install
```

When installation is complete, run with version of your choice :

```bash
npm run ios
# or
npm run android
```

### Troubleshoot
#### Build on IOS failed
Could you try the following commands, from your app root:

```
1. cd ios
2. rm -rf Pods Podfile.lock MAPD712_Patient_Clinical_Data_App.xcworkspace build
3. bundle install (if you haven't already run this)
4. bundle exec pod install
5. cd ..
6. npm run ios
```
The first 2 commands will clean up the dependencies for the iOS project

The second 2 will reainstall them (notice that bundle will require you to use Ruby 2.7.5, so you may have to install a ruby version manager and update Ruby... You can read more [here](https://reactnative.dev/docs/next/environment-setup#ruby))

The last two will try to build your app again.
