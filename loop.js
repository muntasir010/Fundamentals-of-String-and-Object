const mobile = {
    brand: 'Google Pixel',
    price: '56000',
    color: 'Black',
    camera: '48 mp',
    battery: '6000 mp',
    isNew: true,
}

// for of : array;
// for in : object;
for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key, ':', mobile[key]);
}