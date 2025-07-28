'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from './page.module.css'

export default function AddNotePage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        tags: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // 调用 API 创建笔记
            const response = await fetch('/api/notes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
                }),
            })

            if (response.ok) {
                // 提交成功后跳转到首页
                router.push('/')
                router.refresh() // 刷新页面数据
            } else {
                const errorData = await response.json()
                alert(`添加笔记失败：${errorData.message}`)
            }
        } catch (error) {
            console.error('Error:', error)
            alert('添加笔记失败，请检查网络连接')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e.target);
        
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/" className={styles.backButton}>
                    ← 返回首页
                </Link>
                <h1>添加新笔记</h1>
                <p>记录你的学习心得和重要知识点</p>
            </header>

            <main className={styles.main}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="title">标题 *</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            placeholder="输入笔记标题"
                            className={styles.input}
                            maxLength={100}
                        />
                        <span className={styles.charCount}>{formData.title.length}/100</span>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="content">内容 *</label>
                        <textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            required
                            placeholder="详细记录你的学习内容..."
                            rows={10}
                            className={styles.textarea}
                            maxLength={2000}
                        />
                        <span className={styles.charCount}>{formData.content.length}/2000</span>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="tags">标签</label>
                        <input
                            type="text"
                            id="tags"
                            name="tags"
                            value={formData.tags}
                            onChange={handleChange}
                            placeholder="用逗号分隔多个标签，如：Next.js, React, 前端"
                            className={styles.input}
                        />
                        <small className={styles.helpText}>标签可以帮助你更好地分类和组织笔记</small>
                    </div>

                    <div className={styles.formActions}>
                        <button
                            type="submit"
                            disabled={isSubmitting || !formData.title.trim() || !formData.content.trim()}
                            className={styles.submitButton}
                        >
                            {isSubmitting ? '添加中...' : '添加笔记'}
                        </button>
                        <Link href="/" className={styles.cancelButton}>
                            取消
                        </Link>
                    </div>
                </form>
            </main>
        </div>
    )
}
