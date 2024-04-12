import { DefaultTheme } from 'vitepress';

const sidebar: DefaultTheme.Sidebar = {
    '/frontEnd': [
        {
            text: '前端',
            items: [{ text: 'github-actions', link: '/devops/github-actions' }],
        },
        {
            text: 'devops2',
            items: [{ text: 'github自动部署到服务器', link: '/devops/github-actions' }],
        },
    ],
    '/devops': [
        {
            text: 'CI、CD',
            items: [
                { text: 'github-actions', link: '/devops/github-actions' }
            ],
        },
        {
            text: 'devops2',
            items: [{ text: 'github自动部署到服务器', link: '/devops/github-actions' }],
        },
    ],
};

export default sidebar;
