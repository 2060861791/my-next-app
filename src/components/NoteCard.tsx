import Link from 'next/link'
import styles from './NoteCard.module.css'

interface Note {
    id: number
    title: string
    content: string
    date: string
    tags?: string[]
}

interface NoteCardProps {
    note: Note
    showTags?: boolean
}

export default function NoteCard({ note, showTags = false }: NoteCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.title}>{note.title}</h3>
                <span className={styles.date}>{note.date}</span>
            </div>

            <p className={styles.content}>
                {note.content.length > 100
                    ? `${note.content.substring(0, 100)}...`
                    : note.content
                }
            </p>

            {showTags && note.tags && note.tags.length > 0 && (
                <div className={styles.tags}>
                    {note.tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            <div className={styles.actions}>
                <Link href={`/note/${note.id}`} className={styles.viewButton}>
                    查看详情
                </Link>
            </div>
        </div>
    )
} 