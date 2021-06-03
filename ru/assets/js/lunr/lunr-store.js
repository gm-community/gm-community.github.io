var store = [{
        "title": "NBMiner&#58; Комиссия, Системные Требования и Лимиты [2021]",
        "excerpt":"NBMiner требует Windows x64 (Windows 7, Windows 10 и т.д.) Или Linux x64 (проверено на Ubuntu LTS и стабильной версии Debian)    Для начала вы можете скачать самую последнюю версию NBMiner 2.54 отсюда:   Скачать сейчас   Скачать (зеркало)   NBMiner имеет интерфейс командной строки. Для минимальной конфигурации введите в .bat файле:   nbminer -a [алгоритм майнинга] -o [сервер пула] -u [имя пользователя или адрес кошелька]   Пример:   nbminer -a ethash -o ethproxy+tcp://asia1.ethermine.org:4444 -u 0x12343bdgf.worker   Для получения полного списка параметров конфигурации выполните:   nbminer –help   Готовые шаблоны   Ethereum (ETH)   ethermine:  nbminer -a ethash -o ethproxy+tcp://asia1.ethermine.org:4444 -u 0x12343bdgf.worker   sparkpool:  nbminer -a ethash -o ethproxy+tcp://cn.sparkpool.com:3333 -u 0x12343bdgf.worker   f2pool:  nbminer -a ethash -o ethproxy+tcp://eth.f2pool.com:8008 -u 0x12343bdgf.worker   beepool:  nbminer -a ethash -o ethproxy+tcp://eth-pool.beepool.org:9530 -u 0x12343bdgf.worker   nanopool:  nbminer -a ethash -o ethproxy+tcp://eth-asia1.nanopool.org:9999 -u 0x12343bdgf.worker   herominers:  nbminer -a ethash -o ethproxy+tcp://ethereum.herominers.com:10201 -u 0x12343bdgf.worker   nicehash:  nbminer -a ethash -o nicehash+tcp://daggerhashimoto.eu.nicehash.com:3353 -u btc_address.worker   ETH+ZIL   ezil:  nbminer -a ethash -o stratum+tcp://cn.ezil.me:5555 -u ETH_WALLET.ZIL_WALLET.WORKER --enable-dag-cache   shardpool:  nbminer -a ethash -o stratum+tcp://ch1-zil.shardpool.io:3333 -u ETH_WALLET.WORKER -p ZIL_WALLET@cn.sparkpool.com:3333 -enable-dag-cache   Grin32   goblinpool:  nbminer -a cuckatoo32 -o stratum+tcp://grin32.goblinpool.com:3344 -u username.worker:passwd   f2pool:  nbminer -a cuckatoo32 -o stratum+tcp://grin32.f2pool.com:13654 -u username.worker:passwd   herominers:  nbminer -a cuckatoo32 -o stratum+tcp://grin.herominers.com:10301 -u username.worker:passwd   nicehash:  nbminer -a cuckatoo32 -o nicehash+tcp://grincuckatoo32.hk.nicehash.com:3383 -u btc_address.worker   AE   f2pool:  nbminer -a cuckoo_ae -o stratum+tcp://ae.f2pool.com:7898 -u ak_xxxxxxx.worker:passwd   beepool:  nbminer -a cuckoo_ae -o stratum+tcp://ae-pool.beepool.org:9505 -u ak_xxxx.worker:passwd   nicehash:  nbminer -a cuckoo_ae -o nicehash+tcp://cuckoocycle.eu.nicehash.com:3376 -u btc_address.test   SERO   beepool:  nbminer -a progpow_sero -o stratum+tcp://sero-pool.beepool.org:9515 -u wallet_address.worker:pswd   f2pool:  nbminer -a progpow_sero -o stratum+tcp//sero.f2pool.com:4200 -u wallet_address.worker:pswd   RVN   beepool:  nbminer -a kawpow -o  stratum+tcp://rvn-pool.beepool.org:9531 -u wallet.worker:passwd   f2pool:  nbminer -a kawpow -o  stratum+tcp://raven.f2pool.com:3636 -u wallet.worker:passwd   minermore:  nbminer -a kawpow -o stratum+tcp://us.rvn.minermore.com:4501 -u wallet.worker:paswd   bsod:  nbminer -a kawpow -o stratum+tcp://pool.bsod.pw:2640 -u wallet.worker:passwd   woolypooly:  nbminer -a kawpow -o stratum+tcp://rvn.woolypooly.com:55555 -u wallet.worker:passwd   BEAM   sparkpool:  nbminer -a beamv3 -o stratum+ssl://beam.sparkpool.com:2222 -u wallet.worker:passwd   beepool:  nbminer -a beamv3 -o stratum+ssl://beam-pool.beepool.org:9507 -u wallet.worker:passwd   leafpool:  nbminer -a beamv3 -o stratum+ssl://beam-eu.leafpool.com:3333 -u wallet.worker:passwd   herominers:  nbminer -a beamv3 -o stratum+ssl://beam.herominers.com:10231 -u wallet.worker:passwd   nicehash:  nbminer -a beamv3 -o stratum+tcp://beamv3.eu.nicehash.com:3387 -u btc_address.worker   CONFLUX   beepool:  nbminer -a octopus -o stratum+tcp://cfx-pool.beepool.org:9555 -u wallet.worker   poolflare:  nbminer -a octopus -o stratum+tcp://cfx.ss.poolflare.com:3366 -u wallet.worker   f2pool:  nbminer -a octopus -o stratum+tcp://cfx.f2pool.com:6800 -u username.worker   woolypooly:  nbminer -a octopus -o  stratum+tcp://cfx.woolypooly.com:3094 -u wallet.worker   nicehash:  nbminer -a octopus -o stratum+tcp://octopus.eu.nicehash.com:3389 -u btc_address.worker   ERGO   herominers:  nbminer -a ergo -o stratum+tcp://ergo.herominers.com:10250 -u wallet.worker   woolypooly:  nbminer -a ergo -o stratum+tcp://erg.woolypooly.com:3100 -u wallet.worker   nanopool:  nbminer -a ergo -o stratum+tcp://ergo-eu1.nanopool.org:11111 -u wallet.worker   ","categories": ["documentation"],
        "tags": ["NBMiner"],
        "url": "https://gminer.info/documentation/setup/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "NBMiner&#58; Настройки, Команды, Параметры Командной Строки",
        "excerpt":"**    Скачать   Скачать   Параметры командной строки：   nbminer -a algo -o protocol+socket_type://pool_host:pool_port -u wallet_address.worker:passwd      -h, --help    Displays this help.   -v, --version    Displays version information.   -c, --config \\&lt;config file path&gt;    Use json format config file rather than cmd line options.   -a, --algo \\&lt;algo&gt;    Select mining algorithm   --api  \\&lt;host:port&gt;    The endpoint for serving REST API.   -o, –url &lt;url&gt;    Mining pool url.   -u, –user &lt;user&gt;    User used in Mining pool, wallet address or username.   -o1, –url1 &lt;url&gt; url for backup mining pool 1.   -u1, –user1 &lt;user&gt; username for backup mining pool 1.   -o2, –url2 &lt;url&gt; url for backup mining pool 2.   -u2, –user2 &lt;user&gt; username for backup mining pool 2.   -p,  –password &lt;password&gt;  password for mining pool   -p1,  –password1 &lt;password&gt;  password for backup mining pool1   -p2,  –password2 &lt;password&gt;  password for backup mining pool2   -di, –secondary-intensity &lt;intensity&gt;    The relative intensity when dual mining.   -do, –secondary-url &lt;url&gt;    ETH mining pool when dual mining.   -du, –secondary-user &lt;user&gt;    ETH username when dual mining.   -do1, –secondary-url1 &lt;url&gt;    Backup 1 ETH mining pool when dual mining.   -du1, –secondary-user1 &lt;user&gt;    Backup 1 ETH username when dual mining.   -do2, –secondary-url2 &lt;url&gt;    Backup 2 ETH mining pool when dual mining.   -du2, –secondary-user2 &lt;user&gt;    Backup 2 ETH username when dual mining.   -d, –devices &lt;devices&gt;    Specify GPU list to use. Format: “-d 0,1,2,3” to use first 4 GPU.   -i, –intensity &lt;intensities&gt;    Comma-separated list of intensities (1 -100).   –strict-ssl    Check validity of certificate when use SSL connection.   –proxy    Socks5 proxy used to eastablish connection with pool, E.g. 127.0.0.1:1080   –cuckoo-intensity &lt;intensity&gt;    Set intensity of cuckoo, cuckaroo, cuckatoo, [1, 12]. Smaller value means higher CPU usage to gain more hashrate. Set to 0 means autumatically adapt. Default: 0.   –cuckatoo-power-optimize    Set this option to reduce the range of power consumed by rig when minining with algo cuckatoo. This feature can reduce the chance of power supply shutdown caused by overpowered. Warning: Setting this option may cause drop on minining performance.   –temperature-limit, –tl &lt;temp-limit&gt;    Set temperature limit of GPU, if exceeds, stop GPU.   –temperature-start, –ts &lt;temp-start&gt;    Set cool-down temperature target if GPU is stopped by temperature-limit, default to &lt;temp-limit&gt; - 5.   –log    Generate log file named logs/log_&lt;timestamp&gt;.txt.   –log-file &lt;filename&gt;    Generate custom log file. Note: This option will override --log.   –no-nvml    Do not query cuda device health status.   –fidelity-timeframe &lt;timeframe&gt;    Set timeframe for the calculation of fidelity, unit in hour. Default: 24.   –long-format    Use ‘yyyy-MM-dd HH:mm:ss,zzz’ for log time format.   –verbose    Print communication data between miner and pool in log file.   –device-info    Print device cuda information.   –fee &lt;fee&gt;    Change devfee in percentage, [0-5]. Set to ‘0’ to turn off devfee with lower hashrate. Otherwise, devfee = max(set_value, def_value).   –generate-config &lt;filename&gt;    Generate a sample config json file.   –no-watchdog    Disable watchdog process.   –platform &lt;platform&gt;    Choose platform，0: NVIDIA+AMD (default), 1: NVIDIA only, 2: AMD only   –share-check &lt;value&gt;    If &lt;value&gt; minutes without share, reboot miner, set 0 to disable. Default: 30   –no-interrupt    set this option will disable miner interrupting current GPU jobs when a new job coming from pool, will cause less power supply issue, but might lead to a bit higher stale ratio and reject shares.   –enable-igpu    AMD igpu is disabled by default, set this option to enable.   –mt, –memory-tweak &lt;mode&gt;    Memory timings optimize for Nvidia GDDR5 &amp; GDDR5X gpus. range [1-6]. Higher value equals higher hashrate. Individual value can be set via comma seperated list. Power limit may need to be tuned up to get more hashrate. Higher reject share ratio can happen if mining rig hits high temperature, set lower value of -mt can reduce reject ratio. Under windows, a custom driver need to be installed when using -mt, can installed manually by option  --driver, or run nbminer.exe with admin privilege to perform auto-install. Under linux, admin priviledge is needed to run, sudo ./nbminer -mt x. OhGodAnETHlargementPill is not needed anymore if -mt is enabled when mining on 1080 &amp; 1080ti GPUs.   **–driver &lt;action&gt;    Windows only option, install / uninstall driver for memory tweak. Run with admin priviledge. install: nbminer.exe --driver install, uninstall: nbminer.exe --driver uninstall. **   API Reference   Web Monitor   Open http://api_host:port/ in your browser to use web monitor.   Request   GET http://api_host:port/api/v1/status   Response   {     \"miner\": {         \"devices\": [             {                 \"accepted_shares\": 2,                 \"accepted_shares2\": 0,                 \"core_clock\": 1620,                 \"core_utilization\": 100,                 \"fan\": 47,                 \"fidelity1\": 5.859799716605649,                 \"fidelity2\": 0,                 \"hashrate\": \"217.1 M\",                 \"hashrate2\": \"36.19 M\",                 \"hashrate2_raw\": 36190716.266428046,                 \"hashrate_raw\": 217144297.59856823,                 \"id\": 0,                 \"info\": \"GeForce RTX 2070\",                 \"mem_clock\": 6801,                 \"mem_utilization\": 86,                 \"pci_bus_id\": 1,                 \"power\": 188,                 \"rejected_shares\": 0,                 \"rejected_shares2\": 0,                 \"temperature\": 72             },             {                 \"accepted_shares\": 0,                 \"accepted_shares2\": 0,                 \"core_clock\": 1607,                 \"core_utilization\": 100,                 \"fan\": 0,                 \"fidelity1\": 0,                 \"fidelity2\": 0,                 \"hashrate\": \"168.5 M\",                 \"hashrate2\": \"42.11 M\",                 \"hashrate2_raw\": 42113955.19774488,                 \"hashrate_raw\": 168455820.79097953,                 \"id\": 1,                 \"info\": \"P102-100\",                 \"mem_clock\": 5508,                 \"mem_utilization\": 100,                 \"pci_bus_id\": 4,                 \"power\": 232,                 \"rejected_shares\": 0,                 \"rejected_shares2\": 0,                 \"temperature\": 57             }         ],         \"total_hashrate\": \"708 M\",         \"total_hashrate2\": \"164.4 M\",         \"total_hashrate2_raw\": 164395439.13815895,         \"total_hashrate_raw\": 708044466.8349969,         \"total_power_consume\": 839     },     \"reboot_times\": 0,     \"start_time\": 1586944619,     \"stratum\": {         \"accepted_shares\": 2,         \"accepted_shares2\": 0,         \"algorithm\": \"hns_ethash\",         \"difficulty\": \"8.59 G\",         \"difficulty2\": \"8.59 G\",         \"dual_mine\": true,         \"latency\": 221,         \"latency2\": 0,         \"rejected_shares\": 0,         \"rejected_shares2\": 0,         \"url\": \"handshake.hk.nicehash.com:3384\",         \"url2\": \"daggerhashimoto.hk.nicehash.com:3353\",         \"use_ssl\": false,         \"use_ssl2\": false,         \"user\": \"3QHNv52ahdCyeYTGVYDPGjRzMpkknjjfAf.test\",         \"user2\": \"3QHNv52ahdCyeYTGVYDPGjRzMpkknjjfAf.test\"     },     \"version\": \"30.0\" }  ","categories": ["documentation"],
        "tags": ["NBMiner"],
        "url": "https://gminer.info/documentation/arguments/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Запрет Рекламы Криптовалют&#58; Какие компании Запретили?",
        "excerpt":" Если по любому запросу о криптовалютах на первой странице выдачи появляется реклама биржи или обменника, желательно обходить их стороной   Google объявил об обновлении политики в отношении рекламы криптовалют.   Новые правила вступят в силу в августе, и все предыдущие сертификаты криптобирж будут аннулированы. Рекламодатели должны запросить у Google сертификацию новых криптовалютных бирж и кошельков. Эта политика будет применяться глобально ко всем клиентам, рекламирующим криптовалюты   Гугл предупреждает: Начиная с 3 августа рекламодатели, предлагающие криптовалютные биржи и кошельки, могут рекламировать эти продукты и услуги, если они сертифицированы Google отвечают следующим требованиям:   Во-первых, они должны быть зарегистрированы в Сети по борьбе с финансовыми преступлениями (FinCEN)      “как Бизнес денежных услуг, по крайней мере, в одном государстве в качестве источника перевода денег.”    Во-вторых, прямыми рекламодателями могут быть “федеральные или государственные банки.”   Все предыдущие сертификаты криптовалютных бирж и обменников будут аннулированы 3 августа 2021 года. Рекламодатели должны запросить сертификацию новых криптовалютных бирж и кошельков в Google. Форма заявки будет опубликована только 8 июля 2021 года.   Запрет определенных крипто тематик   Также Google предупреждает, что некоторые рекламные объявления теперь будут запрещены. Они включают в себя “Рекламу первичных предложений монет ICO, торговых протоколов Defi или иную рекламу продажи либо торговли криптовалютами или связанными с ними продуктами на рынке DEFI.”   Кроме того, под полный запрет попадают  “Рекламные объявления сервисов, которые агрегируют или сравнивают эмитентов криптовалют и их продуктов”. (Например coinmarketcap, coingecko, Defipuls и другие.)      “Преcейлы или публичные предложения ICO, криптовалютные кредиты и депозиты, первоначальные предложения DEX, пулы ликвидности токенов, фарминг, стейкинг, поддержка криптовалют знаменитостями, автономные кошельки, (Ledger, Trezor, Metamask), нерегулируемые Dapps, торговые сигналы, советы по инвестициям в криптовалюту, агрегаторы или партнерские сайты, содержащие соответствующий контент или отзывы брокеров”.    После ознакомления с новыми правилами Google, становится ясно, что людей загоняют в банки или на банковские биржи, которые должны зарегистрироваться в Сети по борьбе с финансовыми преступлениями (FinCEN). То есть прямо ни автономные кошельки ни DEFI, никто не запрещает. Все анонимные и независимые криптопроекты буду планомерно дискриминировать путем запрета рекламы и искусственного занижения позиций в выдаче поисковых систем.   Нет никакого сомнения, что вскоре к Google присоединятся и другие тех гиганты в лице Facebook и Twitter с аналогичными запретами.   Криптомир уже давно созрел для развития нецензурируемого интернета, WEB 3.0 и полной анонимизации криптотранзакций. Все должны понять, что криптовалюты на центральных биржах и онлайн кошельках, на самом деле принадлежат банкам и биржам и это положение противоречит самому духу белой бумаги биткоина.   Для ориентира продажных бирж и обменников с 8 августа будет достаточно посмотреть на выдачу поисковых запросов Google. Если по любому запросу о криптовалютах на первой странице выдачи Google появляется реклама биржи или обменника, желательно обходить их стороной, если вам дорога ваша приватность и сохранность ваших средств.  ","categories": ["articles"],
        "tags": [],
        "url": "https://gminer.info/ru/articles/crypto-a-06-03/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Download GMiner  2.54 - AMD GPU Miner [2021]",
        "excerpt":" Get started with GMiner  \t\t \t\t\t \t\tVersion: 2.54  \t\tFile: *gminer.exe,    \t\tSHA256: 612a490da78c2395afea9cde3592361524308fe71a6194bb1f901e212ac05b08  \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     The new GMiner stale version is ready.   You can download GMiner 2.54 from here:   Download Now   Download (mirror)   Inside the archive you will find a file README.txt with installation instructions.   Make sure to replace the pool and wallet address by what you’re using in all files.        ","categories": ["download"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/download/2.54/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },]
