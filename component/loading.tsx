import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = () => {
  return (
   <>
        <div className='outer'>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
            <p>Now Loading...</p>
        </div>
        <style jsx>
            {`
                .outer {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    background-color: #bababa;
                    // background-color: rgba(0,0,0,1.0);
                    border-color: rgb(33, 33, 33);
                }

                span {
                    width: 300px;
                    height: 300px;
                }

                p {
                    color: #1976d2;
                }
            `}
        </style>
   </>
  )
}

export default Loading