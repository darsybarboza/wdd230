const baseURL = "https://darsybarboza.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;
const weekList = document.querySelector("#week");

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayLinks(data.weeks);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


// Commenting logic behind this.

//Week counter starting at -1, but really this
//counts each index in a object?
// ! No, this counts each week..
var weekCount = -1;
const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        //So every time a week is looped, add to weekCount
        weekCount++;
        //Create a new li element.
        let list = document.querySelector("li");

        //Name the li element whatever week it is
        //off of index utilizing the incremental variable.
        list.textContent = `${weeks[weekCount].week}: `;

        //Doing another incrementing variable for lists
        var listCount = -1;
        //Nested loop to go through each link in a list.
        week.links.forEach((link) => {
            // console.log(link);
            //Add to listCount
            listCount++;
            //Create a new anchor element.
            let anchor = document.createElement("a");

            //set the href attribute to the link[index#] url
            anchor.setAttribute("href", week.links[listCount].url);
            //Set the target attribute to be _blank.
            anchor.setAttribute("target", "_blank");
            //Set the cursor attribute to a pointer.
            anchor.setAttribute("cursor", "pointer");

            //Finally, set the innerText to whatever the name
            //of the title is at the specified index -> links[indexHere]
            anchor.innerText = ` | ${week.links[listCount].title}`;

            //Now, add the anchor tags to the list from
            //the original loop.
            list.appendChild(anchor);

            //And add the entire list to the weekList constant.
            //(the <li id="week"></li> tags, becomes auto-populated from js.)
            weekList.appendChild(list);
        });
    });
}


getLinks();