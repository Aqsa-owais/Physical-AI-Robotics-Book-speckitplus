import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/giaic-hackathon-speckit-plus/__docusaurus/debug',
    component: ComponentCreator('/giaic-hackathon-speckit-plus/__docusaurus/debug', '163'),
    exact: true
  },
  {
    path: '/giaic-hackathon-speckit-plus/__docusaurus/debug/config',
    component: ComponentCreator('/giaic-hackathon-speckit-plus/__docusaurus/debug/config', 'c9c'),
    exact: true
  },
  {
    path: '/giaic-hackathon-speckit-plus/__docusaurus/debug/content',
    component: ComponentCreator('/giaic-hackathon-speckit-plus/__docusaurus/debug/content', 'add'),
    exact: true
  },
  {
    path: '/giaic-hackathon-speckit-plus/__docusaurus/debug/globalData',
    component: ComponentCreator('/giaic-hackathon-speckit-plus/__docusaurus/debug/globalData', 'b90'),
    exact: true
  },
  {
    path: '/giaic-hackathon-speckit-plus/__docusaurus/debug/metadata',
    component: ComponentCreator('/giaic-hackathon-speckit-plus/__docusaurus/debug/metadata', '651'),
    exact: true
  },
  {
    path: '/giaic-hackathon-speckit-plus/__docusaurus/debug/registry',
    component: ComponentCreator('/giaic-hackathon-speckit-plus/__docusaurus/debug/registry', 'c01'),
    exact: true
  },
  {
    path: '/giaic-hackathon-speckit-plus/__docusaurus/debug/routes',
    component: ComponentCreator('/giaic-hackathon-speckit-plus/__docusaurus/debug/routes', '04b'),
    exact: true
  },
  {
    path: '/giaic-hackathon-speckit-plus/docs',
    component: ComponentCreator('/giaic-hackathon-speckit-plus/docs', 'a58'),
    routes: [
      {
        path: '/giaic-hackathon-speckit-plus/docs',
        component: ComponentCreator('/giaic-hackathon-speckit-plus/docs', '980'),
        routes: [
          {
            path: '/giaic-hackathon-speckit-plus/docs',
            component: ComponentCreator('/giaic-hackathon-speckit-plus/docs', '7c5'),
            routes: [
              {
                path: '/giaic-hackathon-speckit-plus/docs/conclusion/',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/conclusion/', 'e82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/giaic-hackathon-speckit-plus/docs/infrastructure/',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/infrastructure/', '436'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/giaic-hackathon-speckit-plus/docs/infrastructure/setup',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/infrastructure/setup', '014'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/giaic-hackathon-speckit-plus/docs/intro/',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/intro/', '421'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/giaic-hackathon-speckit-plus/docs/module-1-ros/',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/module-1-ros/', '2e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/giaic-hackathon-speckit-plus/docs/module-1-ros/communication',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/module-1-ros/communication', 'cda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/giaic-hackathon-speckit-plus/docs/module-1-ros/concepts',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/module-1-ros/concepts', 'efa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/giaic-hackathon-speckit-plus/docs/module-1-ros/python-ros',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/module-1-ros/python-ros', '167'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/giaic-hackathon-speckit-plus/docs/module-1-ros/urdf',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/module-1-ros/urdf', '2bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/giaic-hackathon-speckit-plus/docs/module-2-digital-twin/',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/module-2-digital-twin/', '921'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/giaic-hackathon-speckit-plus/docs/module-2-digital-twin/environments',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/module-2-digital-twin/environments', '3f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/giaic-hackathon-speckit-plus/docs/module-2-digital-twin/human-robot-interaction',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/module-2-digital-twin/human-robot-interaction', '13a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/giaic-hackathon-speckit-plus/docs/module-2-digital-twin/physics-simulation',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/module-2-digital-twin/physics-simulation', 'a74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/giaic-hackathon-speckit-plus/docs/module-2-digital-twin/sensor-simulation',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/module-2-digital-twin/sensor-simulation', '0ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/giaic-hackathon-speckit-plus/docs/module-3-ai-brain/',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/module-3-ai-brain/', '119'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/giaic-hackathon-speckit-plus/docs/module-3-ai-brain/navigation',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/module-3-ai-brain/navigation', '884'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/giaic-hackathon-speckit-plus/docs/module-3-ai-brain/nvidia-isaac',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/module-3-ai-brain/nvidia-isaac', '528'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/giaic-hackathon-speckit-plus/docs/module-3-ai-brain/perception-pipelines',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/module-3-ai-brain/perception-pipelines', 'e2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/giaic-hackathon-speckit-plus/docs/module-3-ai-brain/sim-to-real',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/module-3-ai-brain/sim-to-real', '13b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/giaic-hackathon-speckit-plus/docs/module-3-ai-brain/slam-localization',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/module-3-ai-brain/slam-localization', '154'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/giaic-hackathon-speckit-plus/docs/module-3-ai-brain/synthetic-data',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/module-3-ai-brain/synthetic-data', 'a05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/giaic-hackathon-speckit-plus/docs/module-3-ai-brain/validation-checklist',
                component: ComponentCreator('/giaic-hackathon-speckit-plus/docs/module-3-ai-brain/validation-checklist', '7d1'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
