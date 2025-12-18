// App.jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import PhoneVerifyScreen from './src/screens/Auth/PhoneVerifyScreen'; 
import EnterPhoneScreen from './src/screens/Auth/EnterPhoneScreen';
import OnboardingScreen from './src/screens/Onboarding/OnboardingScreen';
import BookFlightScreen from './src/screens/Onboarding/BookFlightScreen';
import EnjoyTripScreen from './src/screens/Onboarding/EnjoyTripScreen';
import LoginScreen from './src/screens/Auth/LoginScreen';
import WelcomeScreen from './src/screens/Auth/WelcomeScreen';
import ForgotPasswordScreen from './src/screens/Auth/ForgotPasswordScreen';
import SignupScreen from './src/screens/Auth/SignupScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import ExperienceDetailScreen from './src/screens/Home/ExperienceDetailScreen.jsx';
import TourTicketSection from './src/screens/Home/TourTicketSection';
import ReviewsScreen from './src/screens/Tours/ReviewsScreen';
import WriteReviewScreen from './src/screens/Tours/WriteReviewScreen';
import SearchScreen from './src/screens/Search/SearchScreen';
import DealsScreen from './src/screens/Deals/DealsScreen';
import ToursScreen from './src/screens/Tours/ToursScreen';
import TourDetailScreen from './src/screens/Tours/TourDetailScreen';
import MyTrips from './src/screens/Trips/MyTripsScreen.js';
import Favorite from './src/screens/Favorite/FavoriteScreen.js';
import Profile from './src/screens/Profile/ProfileScreen.jsx';
import EditProfileScreen from './src/screens/Profile/EditProfileScreen.js';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>

    

  // <NavigationContainer>
  //     <WelcomeScreen />
  //   </NavigationContainer>




    // <NavigationContainer>
    //   <EnterPhoneScreen />
    // </NavigationContainer>


    // <NavigationContainer>
    //   <PhoneVerifyScreen />
    // </NavigationContainer>

    //     <NavigationContainer>
    //   <OnboardingScreen />
    // </NavigationContainer>



    //    <NavigationContainer>
    //   <BookFlightScreen />
    // </NavigationContainer>  
    


    // <NavigationContainer>
    //   <EnjoyTripScreen />
    // </NavigationContainer>



    // <NavigationContainer>
    //   <LoginScreen />
    // </NavigationContainer>

    //   <NavigationContainer>
    //   <ForgotPasswordScreen />
    // </NavigationContainer>

  //  <NavigationContainer>
  //     <SignupScreen />
  //   </NavigationContainer> 

    // <NavigationContainer>
    //   <HomeScreen/>
    // </NavigationContainer>
    
    
    //    <NavigationContainer>
    //   <ExperienceDetailScreen/>
    // </NavigationContainer> 


    
    //    <NavigationContainer>
    //   <TourTicketSection/>
    // </NavigationContainer> 

    //    <NavigationContainer>
    //   <ReviewsScreen/>
    // </NavigationContainer> 

    //     <NavigationContainer>
    //   <WriteReviewScreen/>
    // </NavigationContainer> 

    
    //     <NavigationContainer>
    //   <SearchScreen/>
    // </NavigationContainer> 

    //     <NavigationContainer>
    //   <DealsScreen/>
    // </NavigationContainer> 

    //   <NavigationContainer>
    //   <ToursScreen/>
    // </NavigationContainer> 


    //       <NavigationContainer>
    //   <TourDetailScreen/>
    // </NavigationContainer> 
  
    // <NavigationContainer>
    //   <MyTripsScreen/>
    // </NavigationContainer>
        
        
    //     <NavigationContainer>
    //   <FavoriteScreen/>
    // </NavigationContainer>

    //    <NavigationContainer>
    //   <ProfileScreen/>
    // </NavigationContainer>

    //    <NavigationContainer>
    //   <EditProfileScreen/>
    // </NavigationContainer>
  );
}

