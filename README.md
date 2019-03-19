# Thinking in React: Harry Potter Edition

This app should be able to do the following:

* Render all character cards to the list. Each card should have a **toggle and an edit button** and the following information:
  * Student Name
  * BONUS: Student Role
  * BONUS: Student Patronus

* The toggle button should toggle between adding and removing the card from your team

* The edit button should populate an edit form inside the card

* The edit form should allow your changes to show on the page upon form submission (*your changes will not persist to the database - that's ok*)
  * HOWEVER the new info should still appear when you toggle between adding and removing the card from your team

* Create a text filter that filters students by name; this filter should apply to student inside and outside of your team

### Steps for Planning

* What is the component hierarchy?
* What data are we fetching? Which components should this data be displayed on?
* What data/components are changing due to user interaction?
  * On which component is the user interaction taking place?
  * Which component(s) are re-rendered due to this user interaction?
* Based on all of the above, where should state be placed?
