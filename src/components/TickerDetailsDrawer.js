import { Box, Drawer, Grid, IconButton, Stack, Typography } from '@mui/material';
import { GlobeSimple, X } from 'phosphor-react';
import { useAppState } from '../overmind';
import TickerStatTag from './TickerStatTag';

const TickerDetailsDrawer = ({ open, setOpenState }) => {
    const { currentTicker: ticker } = useAppState().tickers
    const closeDrawer = () => {
        setOpenState(false)
    }
    console.log(ticker?.stats)
    return (
        <Drawer
            anchor={"right"}
            open={open}
            PaperProps={{
                sx: {
                    borderTopLeftRadius: "16px",
                    borderBottomLeftRadius: "16px",
                    maxWidth: "25vw"
                }
            }}
        >
            <Grid container alignItems={"center"} rowSpacing={1}>
                <Grid item xs={12}
                    sx={{ width: "100%", height: "6vh", backgroundColor: "#0996C7" }}
                >
                    <Stack
                        direction={"row"}
                        spacing={1}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        marginX={2}
                        sx={{ height: "100%" }}
                    >
                        <Typography variant='subtitle1' color={"white"} >Ticker Details</Typography>
                        <IconButton onClick={closeDrawer} align={"left"}>
                            <X size={20} color="white" weight="fill" />
                        </IconButton>
                    </Stack>
                </Grid>
                <Grid item container paddingX={3} rowSpacing={1}>
                    <Grid item xs={12}>
                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
                            <Typography variant="title2" >
                                {ticker?.name}
                                <Typography variant="subtitle2">
                                    {ticker?.sic_description}
                                </Typography>
                            </Typography>
                            <Typography variant={"subtitle1"}>{ticker?.ticker}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography variant="subtitle1">About</Typography>
                        <Typography variant="h6" sx={{ maxWidth: "25vw" }}>
                            {ticker?.description}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack>
                            {ticker?.address &&
                                <Typography variant={"subtitle2"}>{ticker?.address && ticker.address.city + ", " + ticker?.address.address1}</Typography>
                            }
                            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                <Typography variant={"subtitle2"}> {ticker?.phone_number && "Phone Number: " + ticker?.phone_number}</Typography>
                                {ticker?.homepage_url &&
                                    <Box>
                                        <a href={ticker?.homepage_url} target="_blank" rel="noopener noreferrer">
                                            <IconButton sx={{ backgroundColor: "#f0f0f0", borderRadius: "8px" }} >
                                                <GlobeSimple size={20} color="#0996C7" weight="regular" />
                                            </IconButton>
                                        </a>
                                    </Box>
                                }
                            </Stack>
                            {ticker?.address?.postal_code &&
                                <Typography variant={"subtitle2"}>Postal Code: {ticker.address.postal_code}</Typography>
                            }
                        </Stack>
                    </Grid>
                    {ticker?.stats &&
                        <Grid item xs={12}>
                            <Typography variant="title2">Previous Close Stats</Typography>
                            <Stack direction={"row"} alignItems={"center"} spacing={1} justifyContent={"space-evenly"} mt={2}>
                                <Stack spacing={2}>
                                    <TickerStatTag number={ticker?.stats.o} variant={"red"} text={"Open"} />
                                    <TickerStatTag number={ticker?.stats.l} variant={"green"} text={"Low"} />
                                </Stack>
                                <Stack spacing={2}>
                                    <TickerStatTag number={ticker?.stats.c} variant={"green"} text={"Close"} />
                                    <TickerStatTag number={ticker?.stats.h} variant={"red"} text={"High"} />
                                </Stack>
                                <TickerStatTag number={ticker?.stats.v} variant={"green"} text={"Volume"} />
                            </Stack>
                        </Grid>
                    }
                </Grid>
            </Grid>
        </Drawer >
    )
}

export default TickerDetailsDrawer
