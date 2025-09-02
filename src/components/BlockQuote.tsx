type BlockQuoteProps = { text?: string };

export default function BlockQuote({ text }: BlockQuoteProps) {
    return (
        <div className="my-auto ml-2 line-clamp-2 border-l-2 border-gray-400 pl-2 text-sm italic">
            {text ?? 'No description available.'}
        </div>
    );
}
