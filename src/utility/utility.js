import sortObjectList from 'sort-object-list';
import moment  from 'moment';

export let sortArrayByRelevancy = (array, isDecreasing) => {
    let tmpArray = [];
    Object.keys(array).forEach(function(key, index) {
        tmpArray.push(array[key]);
    }, this);
    return sortObjectList( tmpArray, { sortBy: 'relevancy', isDecreasing: isDecreasing } );
};

export let sortArrayByTime = (array, isDecreasing) => {
    let tmpArray = [];
    Object.keys(array).forEach(function(key, index) {
        tmpArray.push(array[key]);
    }, this);
    return sortObjectList( tmpArray, { sortBy: 'timestamp', isDecreasing: isDecreasing } );
};

export let createObjectFromArray = (array) => {
    let tmpObject = {};
    array.forEach((item, index) => {
        tmpObject[index] = item;
    }, this);
    return tmpObject;
};

export let formatDate = ( timestamp ) => {
    return moment(timestamp).format("MMM Do YY");  
};