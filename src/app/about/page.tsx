import Link from 'next/link'
import styles from './page.module.css'

export default function AboutPage() {
    const features = [
        {
            title: '📄 页面路由',
            description: '使用 Next.js 13+ 的 App Router，基于文件系统的路由'
        },
        {
            title: '🎨 组件系统',
            description: 'React 组件化开发，可复用的 UI 组件'
        },
        {
            title: '🔄 状态管理',
            description: '使用 React Hooks 进行客户端状态管理'
        },
        {
            title: '🌐 API 路由',
            description: 'Next.js API 路由，提供后端接口功能'
        },
        {
            title: '📱 响应式设计',
            description: '适配各种屏幕尺寸的响应式布局'
        },
        {
            title: '⚡ 性能优化',
            description: '静态生成、服务端渲染等性能优化技术'
        }
    ]

    const learningPoints = [
        'Next.js 文件路由系统',
        'React 组件和 Hooks',
        '客户端和服务器端渲染',
        'API 路由开发',
        'CSS Modules 样式管理',
        '表单处理和状态管理',
        '动态路由和参数传递',
        '错误处理和用户体验'
    ]

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/" className={styles.backButton}>
                    ← 返回首页
                </Link>
                <h1>关于这个项目</h1>
                <p>这是一个 Next.js 学习项目，包含了框架的核心概念</p>
            </header>

            <main className={styles.main}>
                <section className={styles.section}>
                    <h2>🎯 项目目标</h2>
                    <p>
                        这个项目旨在帮助初学者快速掌握 Next.js 的核心概念。
                        通过一个简单的学习笔记应用，你可以学习到 Next.js 的主要功能和最佳实践。
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>✨ 主要功能</h2>
                    <div className={styles.featuresGrid}>
                        {features.map((feature, index) => (
                            <div key={index} className={styles.featureCard}>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>📚 学习要点</h2>
                    <div className={styles.learningPoints}>
                        {learningPoints.map((point, index) => (
                            <div key={index} className={styles.learningPoint}>
                                <span className={styles.pointNumber}>{index + 1}</span>
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>🚀 技术栈</h2>
                    <div className={styles.techStack}>
                        <div className={styles.techItem}>
                            <strong>Next.js 14</strong> - React 全栈框架
                        </div>
                        <div className={styles.techItem}>
                            <strong>React 18</strong> - 用户界面库
                        </div>
                        <div className={styles.techItem}>
                            <strong>TypeScript</strong> - 类型安全的 JavaScript
                        </div>
                        <div className={styles.techItem}>
                            <strong>CSS Modules</strong> - 组件级样式
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
} 