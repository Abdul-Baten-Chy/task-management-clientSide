import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import router from './Root.jsx';
import MyContext from './Components/MyContext.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <MyContext>
    <RouterProvider router={router} />
    </MyContext>
    </QueryClientProvider>
    
    
  </React.StrictMode>,
)
