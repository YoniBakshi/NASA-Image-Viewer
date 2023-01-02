
# Ex-05 REST API

# Authors:
Yehonatan Bakshi , ID : 308077668 , Email : yehonatanba@edu.hac.ac.il

Hila Saadon , ID : 208405217 , Email : hilasaa@edu.hac.ac.il

README :
- In this Express project we've created a social website using NASA's media.
- Interacting with NASA's data by using REST API.
- At first, the user needs to login by enter a valid username :
  - Must contain letters and digits : a-z, A-Z, 0-9 ONLY.
  - No spaces are allowed.
  - Must be between 1-24 letters/digits.
- After login successfully, a feed page of NASA's daily picture will be loaded (default up to date) plus - it's previous 2 days.
  - Each media is styled by a card and detailed :
    - Media = Image/Video
    - Title
    - Date
    - Explanation
    - Copyrights
  - plus, each media has a "Comments" button attached which opens a Modal with the picture in a bigger view, explanation and comments.
- User can pick a date and it will be loaded on feed page by the results of NASA's data.
- By clicking on "Comments" button, a modal will be open with this specific media, title, date, explanation and comments.
- Comments :
  - Comments area is located to the right of Modal.
  - Published comments (if exists) will be shown with it's writer's username.
  - Option to submit a comment by press "Enter".
  - Comment must be between 1-128 letters.
  - Only the writer of the comment has the option to delete his comment.


Notes :
- Default feed date is up to date.
- Date input can be change by click and pick in the calendar or use keyboard.
- Using infinite scrolling, each loading is a serie of 3 more pictures.
- Read more/less button in explanations.
- display almost fully 3 pictures at a time. (pictures are in a reasonable size)