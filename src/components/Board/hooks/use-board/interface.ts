export interface UseBoardResults {
    board: string[][],
    finished: boolean,
    markTile: (x: number, y: number) => void,
    resetBoard: () => void,
}