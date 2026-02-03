import { Paper, Typography } from '@mui/material';
import React from 'react';

const FreeCases = ({ count }) => {
  return (
    <Paper
      elevation={3}
      sx={{ padding: 2 }}
      className="shadow-none border border-alto mx-auto"
    >
      <Typography variant="h6" className="text-center">
        Бесплатные наборы косметики
      </Typography>
      <p className="text-violet font-bold italic text-center">
        {count !== 0
          ? 'Вам доступна бесплатная косметика:'
          : 'Вам будут доступны бесплатные наборы косметики, если вы приобрели уже 7 наборов'}{count === 0 ? "" : count}.
      </p>
    </Paper>
  );
};

export default FreeCases;
