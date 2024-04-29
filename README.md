# OBIE TAKE-HOME FE

## GETTING STARTED

- Run `npm i` to install dependencies
- Run the command `npm run dev` to start the environment

## DEMO

https://www.loom.com/share/e5bacfa55c63473891c2ac49798953ac?sid=59f74496-b161-46a5-bde0-61221f1bac2e

## APPROACH

My goal was to create a simple, clean interface to fetch

## EXTRA CREDIT / STRETCH GOALS

Areas of focus if I had more time:

- Filtering by just the state or the insurance_type: I originally was going to make it possible to get all the insurance carriers by state or all the insurance carriers that offer a particular type of insurance, but due to the time constraint, I didn't get around to implementing that. It would be a relatively light lift to accomplish though.
- If I needed to show more types of data, I'd go back and make generic components (e.g., card, header, etc), but given the requirements, it didn't seem necessary.
- Styling/Accessibility: I tried to keep it as simple as possible, but ideally I'd go back and improve the overall aesthetics of the page and make sure everything is optimized for accessibility standards.
- State Management: Given the relatively light scope of the assignment, I chose to go ahead and fetch the data from the API and set in as state within the carriers component. If state became more complicated than handling a list of carriers, I would explore using the Context API or Redux as necessary to manage state.
- Loading/Error states: I didn't get around to building out custom loading or error components to handle those states.
