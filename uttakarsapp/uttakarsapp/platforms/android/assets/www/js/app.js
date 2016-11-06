// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})
.controller('starterCtrl', function ($scope) {
    $scope.listen = function () {
        window.TTS.speak({
            text: 'hello',
            locale: 'en-GB',
            rate: 0.7
        }, function () {
            alert('Success')
        }, function (reason) {
            // Handle the error case
            alert(reason + "");
        })
    };
    $scope.data = {
        speechText: ''
    };
    $scope.recognizedText = '';

    $scope.speakText = function () {
        TTS.speak({
            text: $scope.data.speechText,
            locale: 'en-GB',
            rate: 1.5
        }, function () {
            // Do Something after success
        }, function (reason) {
            // Handle the error case
        });
    };

    $scope.record = function () {
        var recognition = new SpeechRecognition();
        recognition.onresult = function (event) {
            if (event.results.length > 0) {
                $scope.recognizedText = event.results[0][0].transcript;
                $scope.$apply()
            }
        };
        recognition.start();
    };
})