/* After reading async_intro.js, below is a sample exercise that we can do as a team to help 
  get everyone familiar with how you might construct an automated scenario through step definitions 
  or helper functions. */

/* SCENARIO: Select a sports category
  Assume you are already on the sports details page, which has three tabs on the top.
  The tabs are Sports Home, Sports Categories, Live Sports Events.
  You need to write a When step for navigating to the sports page and then selecting the
  Biathlon category. Complete the function below based on the prompts.  */

// In menuPage class, there is a method called navigateToPage(pageName), which would be:
await pageClass.menuPage.navigateToPage('Sports');
// We also have a method called navigateToTab
await pageClass.sportsPage.navigateToTab('Sports Categories');
// And finally, a method for selecting a specific sport. Based on the two examples above, 
// try to add it yourself!
const category = 'Biathlon'
await pageClass.sportsPage.selectCategory(category);
await answerHere(); // <-- Change the name of the method and add parameters as needed

// Now that you have the three helper methods, fill out this When step using those methods to get us
// to the biathlon category page
When('I select the {string} sports category', async() => {
  await pageClass.menuPage.navigateToPage('Sports');
  await pageClass.sportsPage.navigateToPage('Sports Categories');
  await pageClass.sportsPage.selectCategory(category);

});