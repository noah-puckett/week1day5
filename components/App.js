import Component from './Component.js';
import Header from './Header.js';
import contacts from '../data/contact-list.js';
import ContactTable from './ContactTable.js';
import sortList from '../sortList.js';
import Sort from './Sort.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);
        
        const sort = new Sort({
            onSort: sortOptions => {
                this.state.sortOptions = sortOptions;
                const sorted = sortList(contacts, sortOptions);
                contactTable.update({ contacts: sorted });
            }
        });
        main.appendChild(sort.render());

        this.state.sortOptions = { property: 'firstName', direction: -1 };
        
        const sortedContacts = sortList(contacts, this.state.sortOptions);
        
        const contactTable = new ContactTable({ contacts: sortedContacts });

        const contactTableDOM = contactTable.render();
        main.appendChild(contactTableDOM);
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