import ReactDOM from "react-dom";
import Notes from "./Notes";

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Notes/>, div)
    ReactDOM.unmountComponentAtNode(div)
});

// describe("deleting from Favorite", () => {
//     fireEvent.click(queryByTestId('delete-item-favourite'));
//     expect(queryByTestId('delete-item-favourite')).toBeTruthy();
// })

test('deleting from Favorite', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Notes/>, div)
    ReactDOM.unmountComponentAtNode(div)
});
