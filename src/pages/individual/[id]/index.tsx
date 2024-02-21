import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button, Card, CardHeader, CircularProgress, Grid, Tab, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import LoginIcon from '@mui/icons-material/Login'
import PersonIcon from '@mui/icons-material/PersonAddAlt'
import { Suspense, lazy } from 'react'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'

const LazyInfoIndividu = lazy(() => import('./Tabs/InfoIndividu'))
const LazyAutreInfo = lazy(() => import('./Tabs/AutreInfo'))
const LazyAutreContact = lazy(() => import('./Tables/TableContact'))
const LazyLoginWeb = lazy(() => import('./Tables/TableLogin'))
const LazyListeRib = lazy(() => import('./Tables/TableRib'))

const Index = () => {
  const router = useRouter()

  return router.query.id
}

export default ConsulationIndividual
