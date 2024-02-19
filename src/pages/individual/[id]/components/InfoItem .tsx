import React from 'react'
import { Box, Typography } from '@mui/material'

const InfoItem = ({ label, value }) => (
  <Box sx={{ display: 'flex', mb: 3 }}>
    <Typography sx={{ mr: 2, fontWeight: 'bold' }}>{label}:</Typography>
    <Typography sx={{ color: 'text.secondary' }}>{value}</Typography>
  </Box>
)

export default InfoItem
