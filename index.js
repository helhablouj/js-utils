
function getProperty(obj, pathToProp, defaultValue = undefined , resValidation = res => true) {
    const paramsAreValid = typeof obj === "object" && obj !== null 
                            && typeof pathToProp === 'string' && pathToProp !== null 
                            && typeof resValidation === 'function' ;
    if(!paramsAreValid){
        // console.log('Invalid parameters or wrong path');
        return defaultValue;
    }

    const newPath = pathToProp.substring(pathToProp.indexOf('.') + 1, pathToProp.length);

    if(newPath.indexOf('.') === -1){
        return (resValidation(obj[newPath]) && obj[newPath] !== undefined) ? obj[newPath] : defaultValue;
    }
    else {
        const propName = newPath.substring(0, newPath.indexOf('.'));
        return getProperty(obj[propName], newPath, defaultValue, resValidation);
    }
}

module.exports = getProperty;
