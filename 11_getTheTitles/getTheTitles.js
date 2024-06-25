const getTheTitles = function(books) {
    return books.reduce((info, i) => {
        info.push(i.title);
        return info;  
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
