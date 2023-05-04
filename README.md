# Readme

If you want to run this locally, make sure you have docker installed and run `docker-compose up -d` in the project root.  
Thereafter, the app will be available on http://localhost:8080.

When you're done, run `docker-compose down` in the project root.

By default, the app displays the sample data below (when running with `npm run dev` for example)  
In the full docker deployment, the app lists its own source files, including this file.

### Technologies used

-   NodeJS
-   React
-   TypeScript
-   Docker
-   Vite

### Lessons learned

-   DOM-like node data-structure with parent and children
-   Recursive functions
-   Working with Vite
-   Hosting client and api server in a docker network

### The mission assigned to me

Your mission is to build a UI to visualise a file tree. It will work off an array of string paths, such as this:

```json
[
    "marvel/black_widow/bw.png",
    "marvel/drdoom/the-doctor.png",
    "fact_marvel_beats_dc.txt",
    "dc/aquaman/mmmmmomoa.png",
    "marvel/black_widow/why-the-widow-is-awesome.txt",
    "dc/aquaman/movie-review-collection.txt",
    "marvel/marvel_logo.png",
    "dc/character_list.txt"
]
```

You may visualize the data however you please, as long as the position of each file within the tree is evident. For a bare bones version it is ok to hard-code the files list.

Possible stretch tasks:

-   ability to open/close folders
-   make the UI support adding/editing/deleting files
-   toggle between different visualisations
-   unit tests (logic and/or UI components)

Bonus points for being generous with comments, as the whole point is to get a peek inside your architectural abilies!

Please provide us with both the means to try it out live (a link if a web app, or an executable if other platform), and a link to a repo with the source.
