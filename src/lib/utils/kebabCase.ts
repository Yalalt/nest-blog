/**
 * Converts a string to kebab case using the github-slugger package.
 * kebab-case camel-Kebab-Case PascalCase 
 * @param str - The string to convert to kebab case.
 * @returns The kebab case version of the input string.
 */
import { slug } from 'github-slugger';

const kebabCase = (str: string) => slug(str);

export default kebabCase;
