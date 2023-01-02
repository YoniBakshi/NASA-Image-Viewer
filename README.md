[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=9537662&assignment_repo_type=AssignmentRepo)

# Ex05 REST API

# Authors:
Yehonatan Bakshi , ID : 308077668 , Email : yehonatanba@edu.hac.ac.il

Hila Saadon , ID : 208405217 , Email : hilasaa@edu.hac.ac.il

README :
- In this Express project we've created a social website of NASA's media.
- Interacting with NASA's data by using GET and POST.
- At first, the user needs to login by enter a valid username - contains letters a-z, A-Z, 0-9 ONLY.
  - No spaces are allowed.
  - Can contain up to 24 letters/digits. 
- After login successfully, a feed page of NASA's daily picture will be loaded (default up to date) plus - previous 2 days
  - Each picture is styled by a card and detailed : 
    - Title
    - Date
    - Explanation
    - Copyrights
  - plus, each has a "Comments" button attached which opens a Modal with the picture in a bigger view, explanation and comments.
- User can pick a date and feed will be shown loaded by the results of NASA's data 


- Comments : 
  - Username of the writer is attached.
  - Submit comment by press "Enter".
  - Comment must be between 1-128 letters.
  - Only the writer of the comment has the option to delete his comment.
  - 


Notes :
- Default feed date is up to date.
- Using infinite scrolling, loading a serie of 3 more pictures.
- Read more/less button in explanations.
- display almost fully 3 pictures at a time. (pictures are in a reasonable size)