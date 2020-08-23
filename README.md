
# Secret Travel Spots

## Description
App to explore local travel spots.
<br>

## User stories
- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **home** - As a user I want to be able to access the homepage so that I can login or signup.
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account.
- **signup** - As a user I want to sign up on the webpage so that I can explore the app.
- **explore** - As a user I want to be able to see spots added by the community.
- **search-results** - As a user I want to be able to filter the results.
- **single-spot** - As a user I want to be able to see the details of the selected spot.
- **about** - As a user I want to know what the app is about and how to use it.
- **user-profile** As a user I want to check/edit my profile information, add/edit new spots in my collection and edit my favourites library.
- **add-spot** As a user I want to be able to add new spots to my collections.
- **edit-spot** - As a user I want to be able to edit the info for each spot I previously added.
- **my-spots** - As a user I want to be able to see all the spots I created.
- **my-favourites** - As a user I want to be able to see all the spots I added in my favourites.
- **edit-profile** - As a user I want to be able to edit my profile.
- **delete-profile** - As a user I want to be able to receive a confirmation once my profile has been deleted.
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account.


<br>

## API routes (back-end)

- GET / 
  - renders home.hbs
- GET /auth/signup
  - redirects to / if user logged in
  - renders signup.hbs

- POST /auth/signup
  - redirects explore.hbs
  - body:
    - username
    - email
    - password
   
- GET Login /auth/login
  - renders login.hbs

 - POST /auth/login
  - redirects to explore.hbs
  - body:
    - email
    - password

- POST /auth/logout
  - redirects to explore.hbs
  - body: (empty)

- GET /explore
  - renders explore.hbs
  - redirects to search-results.hbs
   (search action)
  - body: 
		- id
		- name
		- description
		- location
		- category

- GET /explore/:id
	- renders single-spot.hbs
	  - (populates with comments)
	  - body: 
		- id
		- name
		- description
		- location
		- category
		- comments

- POST /explore/:id/comments
  - renders single-spot.hbs

- GET /search-results
	  - renders search-results.hbs
	  - includes the list of spots (partial)
	  (search action)
	  - body: 
			- id
			- name
			- description
			- location
			- category

- GET /search-results/:id
  - renders single-spot.hbs
  - (populates with comments)
  	  - body: 
		- id
		- name
		- description
		- location
		- category
		- comments

- POST /search-results/:id/comments
  - renders single-spot.hbs

- GET /about
	- renders about.hbs

  
- GET /profile
  	- renders user-profile.hbs

- GET /add-spot
  	- renders add-spot.hbs

- POST /add-spot
	- redirect to my-spot.hbs
	- body: 
		- id
		- name
		- description
		- location (API mapbox)
		- category

- GET /edit-spot
  	- renders edit-spot.hbs

- POST /edit-spot
	- redirect to my-spot.hbs
	- body: 
		- id
		- name
		- description
		- location (API mapbox)
		- category

- POST /delete-spot
	- redirect to my-spot.hbs
	- body: 
		- id
		- name
		- description
		- location (API mapbox)
		- category		

- GET /my-spots
  	- renders my-spots.hbs

- GET /my-spots/:id
  - renders single-spot.hbs
  - (populates with comments)
  	  - body: 
		- id
		- name
		- description
		- location (API mapbox)
		- category
		- comments

- GET /my-favourites
  	- renders my-favourites.hbs

- GET /my-favourites/:id
  - renders single-spot.hbs
  - (populates with comments)
  	  - body: 
		- id
		- name
		- description
		- location
		- category
		- comments

- GET /edit-profile
  - renders edit-profile.hbs

- POST /edit-profile (to edit profile)
  - redirects to profile.hbs
  - body:
    - email
    - username
    - password

- POST /delete-profile
  - redirects to confirmation-delete.hbs
 

<br>

## Models
 
 - User 
 ```
    	new Schema ({
     		_id: ,
     		email: String, required: true,
     		username: String, required: true,
      		password: String, minlength: 6, maxlength: 12,
      		spots: [{ type: Schema.Types.ObjectId, ref: 'Spot' }]
      		}
	})
  ```       
  - Spot 
  ```
 	new Schema ({
		_id: ,
      		author: { type: Schema.Types.ObjectId, ref: 'User' },
     		name: String, required: true,
      		description: String, required: true,
      		location: String, required: true, ????????
      		category: String, required: true,
      		comments: { type: Schema.Types.ObjectId, ref: 'Comment' },
    	})
   ```
  - Comments
  ```
	new Schema ({
		_id: ,
		author: { type: Schema.Types.ObjectId, ref: 'User' },
		content: String, required: true,
   	})
 ```
    <br>
    
## Backlog

 - Single-spot.hbs
    - Image
    - Rating (+ searchable)
    
 - Explore
    - snapshot of map from API
    - pins for locations
    
 - single-spot.hbs
    - Add a memory (private)

 - memories.hbs
    - Display all the memories (filters)
    
 - Possibility to slide insted of having list in explore.hbs, Search-results.hbs, my-spots.hbs, my-favourites.hbs
    
<br>

## Links
[Trello Link]()
[Figma Link] Wireframes: (https://www.figma.com/file/o77Fmbc7Pk64Jr3KbCUOS8/Project2%2FTheGoodStuff?node-id=10%3A2)


### Git
[Repository Link](https://github.com/valmgisbert/blockbuster-remix/)

[Deploy Link](https://blockbuster-remix.herokuapp.com/login)

<br>

### Slides
[Google Slides Link]()