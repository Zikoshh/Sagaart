import './Main.css';

function Main() {
  return (
    <main className='main'>
      <div className='main__content'>
        <div className='main__promo'>
          <div className='main__demo'>
            <h1 className='main__demo-title'>Откройте ценность исскуства!</h1>
            <p className='main__demo-p'>
              Мы много лет трудились над инновационным продуктом, призванным
              перевернуть представления людей о стоимости объектов искусства.
              Технология Sagaart создана как для профессионалов, так и для
              новичков, желающих узнать стоимость любого объекта искусства. Как
              это работает? Заходи в раздел и узнавай подробности!
            </p>
          </div>
          <div className='main__demo-image'>
            <img
              className='main__demo-image'
              src='https://s3-alpha-sig.figma.com/img/19b7/2592/20b760e0cb7c0bf412dd2547e85f4793?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZOJzxYghLXiXkp6CwSPUt6FqGyVLH1UOl-Vb60vaaBV5OEoiCz6q5UNNJAJGz6MXe9W976~7tiClR49IpYvcwG0krFmEiQDCjDiZUqNBYKpPferdD31RMAyfgs4fhTcBVVjraFH5jeYznnw-ZbKmVHJgcgwwHdWur6xjtUSFwLJqxztbhjtiW9kIyeeqcalbcC0RtlWSj5mKA-sPpGoCB22pUce95pjqsXX5iHK0tnRX75TdlX5bRwyNRrb1dBC8XvM199jzeR0JEh9scs9TuMvTBM2lJF5FumNw6OAp30ILoefwg2XzLrfvzfGYHG0ZQg~IKVpAT6mfe5bJd7pagQ__'
              alt='Логотип промо'
            ></img>
          </div>
          <button className='main__demo-button'>
            Попробовать за 300 рублей
          </button>
        </div>
        <div className='main__marketplace'>
          <div className=''>
            <img
              className='main__marketplace-img'
              src='https://s3-alpha-sig.figma.com/img/f250/00f9/f377ff9103a988037e4de9d935d51876?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bKCGsBXKq7gQhUxXqzRgTzrwd3cPHE~LCiSu8IA6X3ohcBh56oVR78xQngugMy58AjjfCx6B-1mzddnXQO8hbiICEXoOimmq-nxsG9hUneZsERx9Z45Qza8kJpvYXBNv3Tx7dVHRv8p6C5PEknOdzm1urxMVmk1gm7YatND-l4dXVFoM0VirGpXBeucjK1eDPzmC7r-QfRHAdmOlbwRR0kuisnSzWnSofiStSZWyIxl1CfeGsDqvEIsKEDXMpEW048rxCPKKmQvDNJcQnH2N8j8OQfVKTgI3Qq6FLgsn7fpqOosjAhmR3-jlbhKEt2SgCEMYvvpM~IcgTdvTkmcv9g__'
              alt='Логотип маркетплейса'
            />
          </div>
          <div className='main__marketplace-info'>
            <h1 className='main__marketplace-title'>Маркетплейс</h1>
            <p className='main__marketplace-p'>
              А это наш маркеплейс, где все цены на предметы искусства
              рассчитаны с помощью нашего алгоритма. Смелее заходи и погружайся
              в мир искусства!
            </p>
            <button className='main__marketplace-button'>Купить</button>
            <button className='main__marketplace-button main__marketplace-button2 '>
              Продать
            </button>
          </div>
        </div>
        <div className='main__roll'>
          <div className='main__roll-cards'>
            <div className='main__roll-card'>
              <img
                className='main__roll-img'
                src='https://s3-alpha-sig.figma.com/img/e94c/de63/9a76d3107fc6d2bc295b8a6a806c1453?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qypgTnN12ToXjhBfzzVR9iBtEwXziupE5eJ0Lu80ccnc14qJl8VdtyRDaAKkFTF9ZHxM~PD-S8S4VnBkf6-IL3tv1oh~MGWgzSKXCF2VpP1vlPEfbj01Wp44~gqdbEkV-p~dsZeohe4wc-4UwtkTPbpEXMisNz1pJRao9AAn-Ti0fQLNmNL2U4yfT5EMc8XK~Z6B6ZkTSAH7sWTr6msK6vuxdlr1SOG4CZdL1r9ETOgFKmMyn0RrU-Xp-FdKL732saLR~Y43bYwdYJEY6dlXM-Wv0lmJZkbF-d7zEMfvl7mGmj-lkfbXiDDfMUWNmWtz9CDJkIe2jA9XXCsoXoOBiQ__'
                alt=''
              />
              <p className='main__roll-p'>Живопись</p>
            </div>
            <div className='main__roll-card'>
              <img
                className='main__roll-img'
                src='https://s3-alpha-sig.figma.com/img/e94c/de63/9a76d3107fc6d2bc295b8a6a806c1453?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qypgTnN12ToXjhBfzzVR9iBtEwXziupE5eJ0Lu80ccnc14qJl8VdtyRDaAKkFTF9ZHxM~PD-S8S4VnBkf6-IL3tv1oh~MGWgzSKXCF2VpP1vlPEfbj01Wp44~gqdbEkV-p~dsZeohe4wc-4UwtkTPbpEXMisNz1pJRao9AAn-Ti0fQLNmNL2U4yfT5EMc8XK~Z6B6ZkTSAH7sWTr6msK6vuxdlr1SOG4CZdL1r9ETOgFKmMyn0RrU-Xp-FdKL732saLR~Y43bYwdYJEY6dlXM-Wv0lmJZkbF-d7zEMfvl7mGmj-lkfbXiDDfMUWNmWtz9CDJkIe2jA9XXCsoXoOBiQ__'
                alt=''
              />
              <p className='main__roll-p'>Живопись</p>
            </div>
            <div className='main__roll-card'>
              <img
                className='main__roll-img'
                src='https://s3-alpha-sig.figma.com/img/e94c/de63/9a76d3107fc6d2bc295b8a6a806c1453?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qypgTnN12ToXjhBfzzVR9iBtEwXziupE5eJ0Lu80ccnc14qJl8VdtyRDaAKkFTF9ZHxM~PD-S8S4VnBkf6-IL3tv1oh~MGWgzSKXCF2VpP1vlPEfbj01Wp44~gqdbEkV-p~dsZeohe4wc-4UwtkTPbpEXMisNz1pJRao9AAn-Ti0fQLNmNL2U4yfT5EMc8XK~Z6B6ZkTSAH7sWTr6msK6vuxdlr1SOG4CZdL1r9ETOgFKmMyn0RrU-Xp-FdKL732saLR~Y43bYwdYJEY6dlXM-Wv0lmJZkbF-d7zEMfvl7mGmj-lkfbXiDDfMUWNmWtz9CDJkIe2jA9XXCsoXoOBiQ__'
                alt=''
              />
              <p className='main__roll-p'>Живопись</p>
            </div>
            <div className='main__roll-card'>
              <img
                className='main__roll-img'
                src='https://s3-alpha-sig.figma.com/img/e94c/de63/9a76d3107fc6d2bc295b8a6a806c1453?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qypgTnN12ToXjhBfzzVR9iBtEwXziupE5eJ0Lu80ccnc14qJl8VdtyRDaAKkFTF9ZHxM~PD-S8S4VnBkf6-IL3tv1oh~MGWgzSKXCF2VpP1vlPEfbj01Wp44~gqdbEkV-p~dsZeohe4wc-4UwtkTPbpEXMisNz1pJRao9AAn-Ti0fQLNmNL2U4yfT5EMc8XK~Z6B6ZkTSAH7sWTr6msK6vuxdlr1SOG4CZdL1r9ETOgFKmMyn0RrU-Xp-FdKL732saLR~Y43bYwdYJEY6dlXM-Wv0lmJZkbF-d7zEMfvl7mGmj-lkfbXiDDfMUWNmWtz9CDJkIe2jA9XXCsoXoOBiQ__'
                alt=''
              />
              <p className='main__roll-p'>Живопись</p>
            </div>
            <div className='main__roll-card'>
              <img
                className='main__roll-img'
                src='https://s3-alpha-sig.figma.com/img/e94c/de63/9a76d3107fc6d2bc295b8a6a806c1453?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qypgTnN12ToXjhBfzzVR9iBtEwXziupE5eJ0Lu80ccnc14qJl8VdtyRDaAKkFTF9ZHxM~PD-S8S4VnBkf6-IL3tv1oh~MGWgzSKXCF2VpP1vlPEfbj01Wp44~gqdbEkV-p~dsZeohe4wc-4UwtkTPbpEXMisNz1pJRao9AAn-Ti0fQLNmNL2U4yfT5EMc8XK~Z6B6ZkTSAH7sWTr6msK6vuxdlr1SOG4CZdL1r9ETOgFKmMyn0RrU-Xp-FdKL732saLR~Y43bYwdYJEY6dlXM-Wv0lmJZkbF-d7zEMfvl7mGmj-lkfbXiDDfMUWNmWtz9CDJkIe2jA9XXCsoXoOBiQ__'
                alt=''
              />
              <p className='main__roll-p'>Живопись</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
