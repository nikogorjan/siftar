import React from 'react'
import '../../globals.css';

const Reservation = () => {
    return (
        <section className='resser'>
            <div className='vizija-main reservations'>
                <div className='vizija-wrapper'>
                    <h2 className='info-header' >Rezerviraj zdaj!</h2>
                    <p className='message mtb' >
                        Uživajte v nepozabnem oddihu
                    </p>

                    <div className='paragraphs-row'>
                        <div className='paragraphs-left'>
                            <div className='stat-left' >Naša vila in gostišče ponujata idealno kombinacijo udobja, sprostitve in naravne lepote. Sodobno opremljene sobe in apartmaji vključujejo vse, kar potrebujete za brezskrben oddih. Vsak apartma je zasnovan z mislijo na vaše udobje – prostorne sobe, udobne postelje ter čudovit razgled na prekmursko pokrajino zagotavljajo popolno sprostitev.</div>
                            <div className='stat-left mt' >Le nekaj metrov stran od naše vile se nahajajo Terme Vivat, kjer se lahko prepustite termalnim užitkom. Okolica ponuja številne možnosti za raziskovanje narave, od kolesarskih poti med vinogradi do sprehodov po mirnih prekmurskih ravnicah. Ne zamudite priložnosti za nepozaben oddih – rezervirajte zdaj in doživite čarobnost Prekmurja s posebnimi ponudbami za vse naše goste.</div>
                        </div>
                        

                    </div>

                    <div className='rezervacija-row'>
                        <div className='rezervacija-cell'>
                            <img alt='food1' className='res-img' src='/Images/hisa5.webp' />
                            <p className='za-p'>Vila Šiftar</p>
                        </div>
                        <div className='rezervacija-cell'>
                            <img alt='food1' className='res-img' src='/Images/hisa7.webp' />
                            <p className='za-p'>Gostišče Šiftar</p>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default Reservation
