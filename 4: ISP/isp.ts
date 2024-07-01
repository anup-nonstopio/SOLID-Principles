// Interface Segregation Principle

// interface DocumentManager {
//     openDocument(): void;   
//     closeDocument(): void;
//     saveDocument(): void;
//     scanDocument(): void;
// }

interface DocumentOpener {
    openDocument(): void;
}

interface DocumentCloser {
    closeDocument(): void;
}

interface DocumentSaver {
    saveDocument(): void;
}

interface DocumentScanner {
    scanDocument(): void;
}
//or segregate the common interfaces into a single interface

class BasicEditor implements DocumentOpener, DocumentCloser, DocumentSaver {
    openDocument() {
        console.log('Document opened');
    }

    closeDocument() {
        console.log('Document closed');
    }

    saveDocument() {
        console.log('Document saved');
    }
}

class AdvancedEditor implements DocumentOpener, DocumentCloser, DocumentSaver, DocumentScanner {
    openDocument() {
        console.log('Document opened');
    }

    closeDocument() {
        console.log('Document closed');
    }

    saveDocument() {
        console.log('Document saved');
    }

    scanDocument() {
        console.log('Document scanned');
    }
}