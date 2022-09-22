/* We use async/wait for our automation. Async are essentially promises wrapped in a pretty
  package, and in combination with await, they work very well for our automation scripts.
  Let's get started with how this all works.

  Before you continue, you may want to read some of the documentation linked in async_resources.txt
*/

// 1 - BASIC ASYNC FUNCTIONS 
// Async functions can be straightforward, like this:
Then('I verify content for kids user', async () => {
  await pageClass.homePage.verifyKidsContentPopulated();
});
/* The function above uses await to wait for the verifyKidsContentPopulated promise to be complete 
  so it can retrieve its fulfillment value.
  In other words: "The await expression causes async function execution to pause until a promise 
  is settled" (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) */


// 2 - PASSING A VALUE INTO ASYNC FUNCTIONS
// In example 1, we had an async function with no parameter passed.
myBasicAsyncMethod = async() => {
  // A thing happens here, no parameter is passed
}
// But, we will often have to pass a value into our async function. Here's an example in our repo:
When('I navigate to {string} genre tab', async (genreName) => {
  await pageClass.homePage.selectGenreTab(genreName);
});
/* As you can see, we are passing the genreName value into the function. Setting up a function like
  this will give us more flexibility when we need to find a specific row name, show title,
  or any value that might vary depending on what we are testing */

  
/* 3 - USING MULTIPLE AWAIT CLAUSES IN ONE ASYNC FUNCTION
  This is where we begin to see why we prefer async/await instead of a classic promise format.
  One of the things that makes async/await very cool and easy to read is that you can nest multiple
  awaits inside of one async function, instead of having a bunch of .then() clauses linked to each other.
  For example...
*/
When('I go to {string} rail on home', async (railName) => {
  await pageClass.menuPage.navigateToPage('Home');
  await pageClass.homePage.scrollToRail(railName);
});
/* In the example above, it first concludes the promise of menuPage.navigateToPage(), since we have to
  be on the Home page before we can scroll to the correct rail, which is part of the homePage.scrollToRail()
  function. 
  
  We can also get more complex with it. For example, below is a function that validates that a video
  plays correctly and then the show details page updates correctly after exiting the player: 
  */
  verifyVideoPlayed = async () => {
    /* Show Rail playback validation */
    await this.selectShow('FirstTileOnFeaturedRail');
    await showDetailsPage.selectAndPlayVideo(1);
    await videoPlayerPage.isVideoPlaying();
    await videoPlayerPage.closeShowPlayer();
    await commons.clickBack();
    /* Video Rail playback validation */
    await this.scrollToRail('FakingIt');
    await this.selectShow('FirstTileOnFakingItRail');
    await videoPlayerPage.isVideoPlaying();
  };

  /* Here is another example, where the method is for the login flow */
  loginToApplication = async (userType) => {
    await preLaunchPage.handlePopUps();
    await preLaunchPage.goToOnboardingScreen();
    if (!userType.includes('anonymous')) {
      await this.#accessSignInScreen();
      await this.enterCredentials(userType);
      await menuPage.navigateToPage('Home');
    }
  };
/* As you can see, it handles the debug screen in preLaunchPage, and then depending on the user type
  that we pass it, it will enter the credentials, and then take us to the home page. And each await
  will wait for the previous one to complete before it begins.

  These examples above are just a snapshot of how we can use async/await to have clean code and call
  multiple methods in a particular order as blocking calls. Since some have asked why we want this over
  a normal promise. Please see why_async.js for more information. */