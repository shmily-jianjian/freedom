import { defineConfig } from 'vitepress'
import navConfig from "./navConfig";
import sideConfig from "./sideConfig";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    srcDir: 'src',
    outDir: '../blog',
    markdown: {
        image: {
            lazyLoading: true
        }
    },
    head: [
        ['link', { rel: 'icon', type: 'image/jpeg', href: 'http://139.199.178.253/images/logo.jpg' }],
    ],
    title: '一介俗人',
    description: 'zhaojian的博客笔记',
    // 是否使用 Git 获取每个页面的最后更新时间戳。时间戳将包含在每个页面的页面数据中
    lastUpdated: true,
    vite: {
        define: {
            'process.env': {
                name: JSON.stringify(process.env.VITE_PROJECTNAME),
                // 其他通过 CI 注入的环境变量
            },
        },
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-configpn
        logo: 'http://139.199.178.253/images/logo.jpg',
        nav: navConfig,
        sidebar: sideConfig,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],
        lastUpdated: {
            text: '最后更新时间',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        },
        search: {
            provider: 'algolia',
            options: {
                appId: '',
                apiKey: '',
                indexName: ''
            }
        }
    }
})
