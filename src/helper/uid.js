const MULT = 1 * 1000 * 1000 * 1000 * 1000;

export default function uid() {
	return Math.floor(Math.random() * MULT);
}