import Link from 'next/link'
import styles from './page.module.css'
import { promises as fs } from "fs";
import path from "path";

const NOTES_PATH = path.join(process.cwd(), "src/data/note.json");


// 生成静态参数
export async function generateStaticParams() {
    const notes: { id: number | string }[] = JSON.parse(await fs.readFile(NOTES_PATH, "utf-8"));
    return notes.map((note) => ({
        id: note.id.toString(),
    }));
}

export default async function NotePage({ params }: { params: Promise<{ id: string }> }) {
    const notes = JSON.parse(await fs.readFile(NOTES_PATH, "utf-8"));
    const { id } = await params;
    const note = notes.find((n: { id: number; }) => n.id === parseInt(id))

    if (!note) {
        return (
            <div className={styles.container}>
                <div className={styles.error}>
                    <h1>笔记未找到</h1>
                    <p>抱歉，找不到 ID 为 {(await params).id} 的笔记</p>
                    <Link href="/" className={styles.backButton}>
                        ← 返回首页
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/" className={styles.backButton}>
                    ← 返回首页
                </Link>
                <h1>{note.title}</h1>
                <div className={styles.meta}>
                    <span className={styles.date}>{note.date}</span>
                    <div className={styles.tags}>
                        {note.tags.map((tag: string, index: number) => (
                            <span key={index} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.content}>
                    <p>{note.content}</p>
                </div>
            </main>
        </div>
    )
} 