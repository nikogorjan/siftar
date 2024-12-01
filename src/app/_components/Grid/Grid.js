import React from 'react'

const Grid = () => {
    return (
        <section>
            <div className='grid-main'>
                <div className='grid-wrapper'>
                    <div className='bento-grid w-layout-grid '>
                        <div className='bento-item item1'>
                            <img alt='logo' className='bento-img' src='/Images/hisa6.webp' />

                        </div>
                        <div className='bento-item item2'>
                            <img alt='logo' className='bento-img' src='/Images/g7.webp' />

                        </div>
                        <div className='bento-item item3'>
                            <img alt='logo' className='bento-img' src='/Images/g8.webp' />

                        </div>
                        <div className='bento-item item4'>
                            <img alt='logo' className='bento-img higher' src='/Images/g9.webp' />

                        </div>
                        <div className='bento-item item5'>
                            <img alt='logo' className='bento-img' src='/Images/g10.webp' />

                        </div>
                        <div className='bento-item item6'>
                            <img alt='logo' className='bento-img' src='/Images/g11.webp' />

                        </div>

                    </div>



                    <div className='descriptions-under'>
                        <div className='desc-left'></div>
                        <div className='desc-righr'>
                            <h2 className='info-header' >Čarobni oddih v Prekmurju</h2>
                            <p className='message mtb' >
                                Sprostitev, razvajanje in užitek v naravi
                            </p>
                            <div className='stat-left' >Naša vila v srcu Moravskih Toplic, obdana z neokrnjeno naravo, nudi popolno zatočišče za sprostitev. Prostorne sobe, sodobna oprema in čudoviti razgledi omogočajo prijetno bivanje v tesnem stiku s prekmursko pokrajino.
                            </div>
                            <div className='stat-left mt' >V našem gostišču lahko uživate v izvrstnih prekmurskih specialitetah, ki združujejo tradicijo in lokalne sestavine. Okolica ponuja številne možnosti za rekreacijo in raziskovanje, od termalnih vrelcev do kolesarskih poti, ki vas bodo popeljale skozi slikovite vasi in vinograde.</div>

                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
}

export default Grid
