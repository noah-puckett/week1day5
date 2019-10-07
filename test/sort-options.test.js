import sortList from '../sortList.js';

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