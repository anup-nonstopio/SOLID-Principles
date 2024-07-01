interface DocumentManager {
    openDocument(): void;   
    closeDocument(): void;
    saveDocument(): void;
    scanDocument(): void;
}

class BasicEditor implements DocumentManager {
    openDocument() {
        console.log('Document opened');
    }

    closeDocument() {
        console.log('Document closed');
    }

    saveDocument() {
        console.log('Document saved');
    }

    // violates ISP
    scanDocument() {
        throw new Error('Scan not supported');
    }
}