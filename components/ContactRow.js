import Component from './Component.js';

class ContactRow extends Component {

    render() {
        const contactRow = this.renderDOM();
        return contactRow;
    }

    renderTemplate() {
        const contact = this.props.contact;
        return /*html*/ `
            <tr>
                <td>
                ${contact.firstName}
                </td>
                <td>
                ${contact.age}
                </td>                
                <td>
                ${contact.eyeColor}
                </td>
            </tr>
        `;
    }
}
export default ContactRow;