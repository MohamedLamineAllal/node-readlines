declare module 'n-readlines-next' {
    /**
     * Read line object construct options.
     */
    export interface ReadLinesOptions {
        /**
         * Integer number of bytes to read at once. Default: 1024
         */
        readChunk?: number,
        /**
         * String new line character, only works with one byte characters for now.
         * Default: \n which is 0x0a hex encoded.
         */
        newLineCharacter?: string,
    }

    /**
     * 
     *  
     * file - String path to the file you want to read from  | fd - File descriptor
     * options - Object
     *       readChunk - Integer number of bytes to read at once. Default: 1024
     *       newLineCharacter - String new line character, only works with one byte characters for now. Default: \n which is 0x0a hex encoded
     *
     * node-readlines can handle files without newLineCharacter after the last line
     * 
     * @export
     * @class ReadLines
     */
    export default class ReadLines {
        /**
         * file - String path to the file you want to read from  | fd - File descriptor
         * options - Object
         *       readChunk - Integer number of bytes to read at once. Default: 1024
         *       newLineCharacter - String new line character, only works with one byte characters for now. Default: \n which is 0x0a hex encoded
         * 
         * @param {(string | number)} file
         * @param {ReadLinesOptions} options
         * @memberof ReadLines
         */
        constructor(
            file: string | number,
            options?: ReadLinesOptions
        );
        /**
         * Returns buffer with the line data without the newLineCharacter or false if end of file is reached.
         *
         * @returns {(Buffer | false)}
         * @memberof ReadLines
         */
        next (): Buffer | false;
        /**
         * Resets the pointer and starts from the beginning of the file. This works only if the end is not reached.
         *
         * @memberof ReadLines
         */
        reset(): void;
        /**
         * Manually close the open file, subsequent next() calls will return false. This works only if the end is not reached.
         *
         * @memberof ReadLines
         */
        close(): void;
    }
}
