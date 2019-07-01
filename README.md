## Amanda's Tic Tac Toe Game

## Technologies

- JavaScript
- jQuery
- AJAX
- HTML5
- CSS
- Bootstrap

## Planning and Development

Before beginning any code I made wireframes for mobile and desktop and wrote user stories for the app. Then I plotted out what order I wanted to do things in and had a list of things I wanted to accomplish each day. When I started each task I tried to stay focused on completing all components of that task before moving on to something else.

I chose to start with the game logic rather than authentication so I wouldn't have to log in each time I wanted to check if my game code was working. I started by making an extremely basic board to test on first. When things weren't working how I expected them to I would console.log variables at different points in the code to see what their value was and try to work out the issue that way. I also utilized google and the documentation to work out how methods were behaving. If somethng really wasn't clicking, I took a walk!

After finishing the game logic I set up the authentication and then the game api. Two issues I ran in to here is that you are not automatically signed in after signing up and that a new game is not automatically created after signing in. These are two things I would like to fix in the future.

Throughout the process I tried to simplify code that I had been written previously. I also tried to keep my user stories in mind and make sure I was providing functionality that I planned on at the start.


## Unsolved Problems

- Formatting and styling
- You should be signed in automatically after signing up
- A new game should automatically be created when you sign in
- The app should support continuing games that were not finished

## Wireframes and User Stories

User stories:
  1. As a user, I want to be able to see whose turn it currently is displayed in the app so I don't need to keep track of it in case we put the game down and come back to it.
  2. As a user, I want to see a message displaying who has won so it doesn't need to be inferred from the final board.
  3. As a user, I want to see it indicated which marks on the board make up the winning condition once someone has won so I don't need to track them down myself.
  4. As a user, I want to see why a move was invalid so I understand why I can't make a similar move.
  5. As a user, I want to be able to start a new game at any time so that if a player needs to walk away the current game doesn't need to be played out in order to get a new one.
