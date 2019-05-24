import Component from './Component.js';
import Header from './Header.js';
import contacts from '../data/contact-list.js';
import ContactTable from './ContactTable.js';
import Sort from './Sort.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const header = new Header();
        const headerDOM = header.render();
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        //sets props to our data
        const contactTable = new ContactTable({ contacts });
        const contactTableDOM = contactTable.render();
        main.appendChild(contactTableDOM);

        //TODO: UNCOMMENT WHEN TDD IS FINISHED
        // const sort = new Sort({
        //     onSort: sortOptions => {
        //         name:???
        //         age: ???
        //         eyeColor: ???
        //     }

        // });
        // main.appendChild(sort.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
        <div>
            <main>
            </main>
        </div>
        
        `;
    }

}
export default App;