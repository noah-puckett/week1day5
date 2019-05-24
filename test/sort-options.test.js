const test = QUnit.test;
QUnit.module('sort function test 1');

const cantu = {
    'age': 28,
    'eyeColor': 'blue',
    'firstName': 'Cantu',
};
const george = {
    'age': 28,
    'eyeColor': 'blue',
    'firstName': 'George',
};
const pruitt = {
    'age': 32,
    'eyeColor': 'blue',
    'firstName': 'Pruitt',
};

const contacts = [cantu, pruitt, george];

function sortList(contacts, sortOptions) {
    const property = sortOptions.property;
    const direction = sortOptions.direction; 

    return contacts.slice().sort((a, b) => {
        if(a[property] > b[property]) {
            return 1 * direction;
        }
        else if(b[property] > a[property]) {
            return -1 * direction;
        }
        return 0;
    });
}

test('sorts on name', assert => {

    const sortOptions = {
        property: 'firstName',
        direction: 1
    };

    const sorted = sortList(contacts, sortOptions);

    assert.deepEqual(sorted, [cantu, george, pruitt]);
});

test('sorts on name descending', assert => {
    const sortOptions = {
        property: 'firstName',
        direction: -1
    };

    const sorted = sortList(contacts, sortOptions);

    assert.deepEqual(sorted, [pruitt, george, cantu]);
});

test('sort does not change array', assert => {
    const sortOptions = {
        property: 'name',
        direction: -1
    };
    
    const sorted = sortList(contacts, sortOptions);

    assert.notEqual(sorted, contacts);
});