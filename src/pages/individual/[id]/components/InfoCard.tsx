import { Box, Card, CardContent, Divider, Typography } from '@mui/material'
import { useTheme } from '@mui/material';




const InfoCard = ({ title, children }) => {

  const theme = useTheme();

const cardStyle = {
  marginBottom: '20px',
  backgroundColor: '#f8f8f8',
  padding: '1%',
  margin: '2%',
  border: `2px solid ${theme.palette.primary.main}`
};

  return(
   <Card style={cardStyle}>
    <CardContent>
      <Typography variant='h5' component='div' sx={{ mb: 2 }}>
        <strong>{title}</strong>
      </Typography>
      <Divider />
      <Box sx={{ pt: 2 }}>{children}</Box>
    </CardContent>
   </Card>
  )

}



export default InfoCard
