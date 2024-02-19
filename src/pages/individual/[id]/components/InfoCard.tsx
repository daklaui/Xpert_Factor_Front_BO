import { Box, Card, CardContent, Divider, Typography } from '@mui/material'

const cardStyle = {
  marginBottom: '20px',
  backgroundColor: '#f8f8f8'
}
const InfoCard = ({ title, children }) => (
  <Card sx={cardStyle}>
    <CardContent>
      <Typography variant='h5' component='div' sx={{ mb: 2 }}>
        <strong>{title}</strong>
      </Typography>
      <Divider />
      <Box sx={{ pt: 2 }}>{children}</Box>
    </CardContent>
  </Card>
)
export default InfoCard
