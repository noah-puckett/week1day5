import Component from './Component.js';
import ContactRow from './ContactRow.js';

class ContactTable extends Component {

    render() {
        const dom = this.renderDOM();
        const contacts = this.props.contacts;

        contacts.forEach(contact => {
            const contactRow = new ContactRow({ contact });
            const contactRowDOM = contactRow.render();
            dom.appendChild(contactRowDOM);
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <table>
                <th>Name:</th>
                <th>Age:</th>
                <th>Eye Color:</th>
            </table>
        `;
    }
}
export default ContactTable;