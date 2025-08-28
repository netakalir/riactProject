type VoteBtnProps = {
    onVote: () => void
}

export default function VoteBtn({ onVote }: VoteBtnProps) {

    return (
        <div className="vote">
            <button className="voteButton" onClick={onVote}>
                Vote
            </button>
        </div>
    )
}