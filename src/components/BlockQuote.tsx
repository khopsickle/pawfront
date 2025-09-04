type BlockQuoteProps = { text?: string };

/**
 * BlockQuote Component
 *
 * - displays provided text
 * - defaults to "No description available."
 * - truncates description to 2 lines
 *
 * @param {string} text - display text
 * @returns {JSX.Element}
 */
export default function BlockQuote({ text }: BlockQuoteProps) {
    return (
        <div className="my-auto ml-2 line-clamp-2 border-l-2 border-gray-400 pl-2 text-sm italic">
            {text ?? 'No description available.'}
        </div>
    );
}
