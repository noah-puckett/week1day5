const test = QUnit.test;
QUnit.module('sort function test 1');

function sort(todoData, sortOptions) {
    if(sortOptions.property === 'name')
    const property = 'name''
    return todoData.slice().sort((a, b))
    if(a.name > b.name) {
        return 1;
    }
}

test('sorts on name', function(assert) {

    const sortOptions = {
        text: 'test name',
    };

    const result = sort(todoData, sortOptions);

    assert.deepEqual(result, sortOptions);
});



---SORT.JS
import Component from './Component.js';

class Sort extends Component {

    render() {
        const dom = this.renderDOM();
        form.addeventlistener(submitm event > preventdefault)

        form.addeventlistener(input) {
            const formData = new FormData(form)
            const sort options = {
                property:formData.get(property)
                direction: parseInt(formData.get(direction))
            }
            this.props.onsort(sortoptions)
        } return form

}

renderTemplate() {
    return /*html*/`
        <section clas =sort></section> hello sort
        <label>
        sort on:
            <select>
                <option value="name">
                name
                </option>

        </label>
        <label>
            <option>
            type
            </option>  
        </label>
            </select>
`;

}
};
export default sort;



---APP.JS
//IMPORT SORT.JS
   //const sort = new Sort({
        //    onSort: sortOptions => {
        //
        //   }
        // });
        // main.appendChild(sort.render())