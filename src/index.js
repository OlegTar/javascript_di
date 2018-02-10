const ioc = {
};

export function inject(...interfaceNames) {
    interfaceNames.forEach(_ => {
        if (!ioc.hasOwnProperty(interfaceNames)) {
            throw `interface ${interfaceName} is not registered`;
        }
    });

    return (classFunction) => {
        return function(...args) {
            const injectedArgs = interfaceNames.map(interfaceName => ioc[interfaceNames]);
            args = [...injectedArgs, ...args];
            return new classFunction(...args);
        }
    }
}

export function implement(name) {
    return {
        as: (obj) => {
            ioc[name] = obj;            
        }
    }
}