# CRUD Explained
CRUD
* Create
* Read 
* Update
* Delete

# HTTP Methods
HTTP
* POST
    * Create resource/data
* GET
    * Read/fetch data from server
* PUT
    * Update resource/data
    *  where the client sends data that updates the entire resource
* PATCH
    * method of modifying resources where the client sends partial data that is to be updated without modifying the entire data.
* DELETE
    * Delete resource

<br/><br/>

Safe Method
* Won't affect or change data on server
* GET


Unsafe Method
* Affects server or database
* DELETE
* POST
* PUT


Idempotent
* Even if you use it 10 times, it won't affect the server
    * E.g., DELETE/PUT same item 10 times, fine since item is gone
    * POST can add duplicate objects
        § Is why you use POST and PUT in proper place
* PUT
* POST