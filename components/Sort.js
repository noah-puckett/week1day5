import Component from './Component.js';

class Sort extends Component {
    
    render() {
        const form = this.renderDOM();

        form.addEventListener('submit', () => {
            event.preventDefault();
        });

        form.addEventListener('input', () => {
            const formData = new FormData(form);
            const sortOptions = {
                property: formData.get('property'),
                direction: parseInt(formData.get('direction'))
            };

            this.props.onSort(sortOptions);
        });
        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form class="sort">
                <label>
                    Sort By:
                    <select name="property">
                        <option value="name">Name</option>
                        <option value="eye-color">Eye Color</option>
                    </select>               
                </label>
                <label>
                    Direction:
                    <select name="direction">
                        <option value="1">Ascending</option>
                        <option value="-1">Descending</option>
                    </select>
                </label>
            </form>
        `;
    }
}
export default Sort;