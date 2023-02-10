## LumiLab
**We're brighter than your average inventory system.**

<p align="center">
<img alt="Screenshot of LumiLab Homepage" width="650" src="https://user-images.githubusercontent.com/111663583/218003521-2df26205-f0c2-4a76-9a25-a3423bf1a5f1.png"></img>
</p>

**Link to project:** [LumiLab](https://lumilab.onrender.com/)

For a quick demo, use the following login information:
- Email: guest@guest.com
- Password: guest123

## An In-Progress FullStack Web App
What's a laboratory without inventory? A useless room full of expensive equipment.

I currently work as a Scientist for a Start-up that created the first all-in-one glucose monitor. It’s a unique, innovative product, but the rest of our practices hardly matched up. 

The inventory system consists of two main components:
 1. Excel sheets that made for a User Experience nightmare
 2. Human memory. The dreaded realization that “Oh, dang, I forgot to order this months ago and now we’ve got to scramble to buy more.”

I set out to solve this.

With LumiLab, staff can log in to view their Laboratory Inventory, add new stock, include important notes for specific items, and set reminders to restock.

## How It's Made:

**Tech used:**  Node.JS, Express, MongoDB, HTML, CSS, JavaScript, Tailwind

### Open Source Tailwind Components:
- [Hyper UI](https://www.hyperui.dev/)
- [Flowrift](https://flowrift.com/c/cta)
- [Tailwind Awesome](https://www.tailwindawesome.com/?price=free&type=kit) - Multiple free kits

### Illustrations:
- [Work illustrations by Storyset](https://storyset.com/work)

## Optimizations

Right now the Status for each inventory item is selected by the user and hard-coded. I am looking into ways to change the status based on an equation within the mongoose Item schema. I would want the following to be true per status type:

- **Restock** - occurs when Quantity in Stock is less than or equal to Reorder At Quantity
- **Upcoming Restock** - occurs when Quantity in stock is 5% or more above the Reorder At Quantity
- **In Stock** - occurs when Quantity in Stock is greater than 5% of Reorder At Quantity 

Validation to the Add Item form. Currently, if fields aren't filled in, the error only displays on the console and will not show for the end user. I need to implement mongoose Validation so I can populate the front-end with a conditional for errors to pop up.

## Lessons Learned:

The *beauty* of Tailwind! So many free Open Source components made it much easier to design the front-end quickly and efficiently.

The *beast* that is the bug in my code... AKA not realizing I named the form input 'username', but on the backend the User mongoose schema had 'userName'. Oh, camelCase I am sorry I forgot about you. It led to a many of keyboard smashing, user database restarting and Stack Overflow questioning.

One of the hardest parts of the development was coming up with copy to fill the page! Goodbye 'Lorem ipsum', hello OpenAI! ChatGPT makes a great marketing buddy. I also used the AI chat box to answer a few code-related questions as well. It's truly handy!

## Examples:

Take a look at some of my recent work.

| [Saving People, Hunting Things, The API Business](https://github.com/nicoledicochea/savingPeople-huntingThings-theApiBusiness) | [San Jose Solar Seekers Picture of the Day](https://github.com/nicoledicochea/nasa-picture-of-the-day) |
|--|--|
| <p align="center"><img alt="Screenshot of Saving People, Hunting Things, The API Business" width="300" src="https://user-images.githubusercontent.com/111663583/201507344-ad0ea063-1408-4794-ad52-dde4f7f3b189.gif"></img></p> |  <p align="center"><img alt="Screenshot of San Jose Solar Seekers Picture of the Day" width="300" src="https://user-images.githubusercontent.com/111663583/201509248-6e542c30-6e33-4eb1-af2c-0ad008a24e94.gif"></img></p> |
