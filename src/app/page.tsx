import Link from 'next/link'
import NoteCard from '@/components/NoteCard'
import styles from './page.module.css'
import { promises as fs } from "fs";
import path from "path";

const NOTES_PATH = path.join(process.cwd(), "src/data/note.json");

export default async function Home() {
  const notes = JSON.parse(await fs.readFile(NOTES_PATH, "utf-8"));

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>📚 我的学习笔记</h1>
        <p>这是一个简单的 Next.js 学习项目</p>
      </header>

      <main className={styles.main}>
        <div className={styles.notesGrid}>
          {notes.map((note: { id: number; title: string; content: string; date: string; tags: string[]; }) => (
            <NoteCard key={note.id} note={note} showTags={true} />
          ))}
        </div>

        <div className={styles.actions}>
          <Link href="/add-note" className={styles.addButton}>
            ➕ 添加新笔记
          </Link>
          <Link href="/about" className={styles.aboutButton}>
            ℹ️ 关于项目
          </Link>
        </div>
      </main>
    </div>
  )
}