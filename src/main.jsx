import * as THREE from 'three'
import { render, events, extend } from '@react-three/fiber'
import './styles.css'
import App from './App'

extend(THREE)

window.addEventListener('resize', () =>
  render(<App />, document.querySelector('canvas'), {
    events,
    linear: true,
    dpr: 2,
    camera: { fov: 25, position: [0, 0, 6] },
    // https://barradeau.com/blog/?p=621
    // This examples needs WebGL1 (?)
    gl: new THREE.WebGL1Renderer({
      canvas: document.querySelector('canvas'),
      antialias: true,
      alpha: true
    })
  })
)

window.dispatchEvent(new Event('resize'))

// import './styles.css';

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// import Layout from './example/Layout';
// import Example1 from './example/Example1';
// import Example2 from './example/Example2';
// import Example3 from './example/Example3';

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Layout />,
//         children: [
//             { path: '/', element: <Example1 /> },
//             { path: '/example2', element: <Example2 /> },
//             { path: '/example3', element: <Example3 /> },
//         ],
//     },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <RouterProvider router={router} />
//     </React.StrictMode>,
// );
