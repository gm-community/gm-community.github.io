var store = [{
        "title": "GMiner&#58; Command Line Arguments and Options",
        "excerpt":"All commands of the Gminer software.   Download   Download Now   CMD options      --help or shortly -h - display available options   –version or shortly -v` - print program version   --user_id - print user ID   --algo or shortly -a - mining algorithm (for example: ethash, kawpow, cuckatoo32, beamhash)   --list_devices - list devices available for mining   --contest_wallet - Ethash wallet, parameter is required to participate in contest   --server or shortly -s - mining pool address (for example: eu.btgpool.pro, eu1.zhash.pro)   --port or shortly -n - mining pool port (for example: 5057, 1445)   --user or shortly -u - mining pool login or wallet address, workers name can be specified with a dot (for example: sRuJK1BmA758GbOn.worker, GfGLyfP9GzZbPeTzvW1KSx3HeMnrNAiGWY.rig0)   --worker - worker name for Ethash strarum, for pools that does not supoort wallet.worker (for example: rig0)   --pass or shortly -p - worker password or default pool password, default value is x (for example: sRuJK1Bm)   --ssl - enable/disable secure connection with mining pool, must be supported by a pool, default value is 0 (0 - off or 1 - on)   --proxy - SOCKS5 proxy server address (for example: 31.7.232.178:1080)   --proto - specify stratum protocol mode, possible values: proxy and stratum, useful for Ethash mining, default value is proxy (for example: stratum)   --dag_mode - space-separated list of Dag file modes (0 - auto, 1 - single, 2 - double), default is 0 (for example: 2 1 0)   --safe_dag - space-separated list of DAG generation modes (0 - auto, 1 - fast mode, 2 - safe mode, in auto mode GTX GPUs - fast DAG and RTX GPUs - safe DAG), only Nvidia GPUs are supported, default is 0 (for example: 2 1 0)   --dag_limit - space-separated list of Dag file size limits in megabytes, to disable the limit use 0, default is 0 (for example: 4096 4096 4096)   --cache_dag -  enable/disable caching of DAG file for mining Ethash + Zilliqa or Nicehash, default value is 1 (0 - off or 1 - on)   --devices or shortly -d - space-separated list of cuda devices, default value is all available devices (for example: 1 3 5)   --kernel or shortly -k - space-separated list of kernel numbers for each device (0 - auto, 1-6 - kernel number, currently supports 6 kernels for Nvidia on Ethash/Etchash) (for example: 1 3 5)   --mt - space-separated list of memory tweak numbers for each device (range from 0 to 6, 0 - disable tweaks), only Nvidia GPUs with GDDR5X and GDDR5 memory are supported, requires running miner with admin privileges (for example: 1 3 5)   --fan - space-separated list of fan speed for each device in percents (range from 0 to 100, 0 - ignore), only Windows is supported (for example: 60 0 90)   --pl - space-separated list of power limits for each device in percents (range from 0 to 100 for Nvidia GPUs and -50 - 50 for AMD GPUs, 0 - ignore), only Windows is supported (for example: 30 0 50)   --cclock - space-separated list of core clock offsets (for Nvidia GPUs) or absolute core clocks (for AMD GPUs) for each device in MHz (0 - ignore), only Windows is supported, requires running miner with admin privileges (for example: 100 0 -90)   --mclock - space-separated list of memory clock offsets (for Nvidia GPUs) or absolute memory clocks (for AMD GPUs) for each device in MHz (0 - ignore), only Windows is supported, requires running miner with admin privileges (for example: 100 0 -90)   --cvddc - space-separated list of core voltage offsets in % (for Nvidia GPUs) or absolute core voltages (for AMD GPUs) for each device in mV (0 - ignore), only Windows is supported, requires running miner with admin privileges (for example: 900 0 1100)   --lock_voltage - space-separated list of locked voltage points for each device in mV (0 - ignore), only Windows and Nvidia GPUs are supported. Requires running miner with admin privileges (for example: 900 0 1000)   --lock_cclock - space-separated list of locked core clock point for each device in MHz (0 - ignore), only Nvidia GPUs are supported. Requires running miner with admin privileges (for example: 1200 0 1500)   --p2state - enable/disable P2 state, only Windows and Nvidia GPUs are supported. Requires running miner with admin privileges   --tfan - space-separated list of target temperatures for fan (0 - ignore), only Windows is supported (for example: 65 0 70)   --tfan_min - space-separated list of minimal fan speed (0 - ignore) for tfan option, only Windows is supported (for example: 30 0 35)   --tfan_max - space-separated list of maximal fan speed (0 - ignore) for tfan option, only Windows is supported (for example: 90 0 80)   --logfile or shortly -l - filename to save logs on disk, default value is `` (for example: /usr/user/miner.log, c:\\miner.log)   --log_date - enable/disable date in each message, default value is 0 (0 - off or 1 - on)   --log_stratum - enable/disable data of communication with the server, default value is 0 (0 - off or 1 - on)   --log_newjob - enable/disable information about new jobs, default value is 1 (0 - off or 1 - on)   --templimit or shortly -t - space-separated list of temperature limits, upon reaching the limit, the GPU stops mining until it cools down (for example: 85 80 75)   --templimit_mem or shortly -tm - space-separated list of memory temperature limits, upon reaching the limit, the GPU stops mining until it cools down (for example: 95 100 105)   --color or shortly -c - enable/disable color output for console, default value is 1 (0 - off or 1 - on)   --watchdog or shortly -w - enable/disable watchdog, watchdog monitors the main mining processes and restarts the application in the event of a failure or loss of connection to the pools, default value is 1 (0 - off or 1 - on)   --watchdog_restart_delay - miner restart delay for watchdog in seconds, default value is 10 (for example: 1)   --report_interval - statistics report interval in seconds, default value is 30 (for example: 5)   --api - telemetry server port, allows you to monitor the miner status remotely, open a link in your browser http://localhost:port (for example: 10050, 20030)   --config - specify configuration file   --pers - personalization string for equihash algorithm (for example: BgoldPoW, BitcoinZ, Safecoin)   --pec - enable/disable power efficiency calculator. Power efficiency calculator display of energy efficiency statistics of GPU, higher CPU load. Default value is 1 (0 - off or 1 - on)   --electricity_cost - pass cost of electricity in USD per kWh, miner will report $ spent to mining   --intensity or shortly -i - space-separated list of intensities (1-100), default value is 100 (for example: 90 90 90)   --share_check -  enable/disable share check on CPU for mining Ethash, Etcash, KAWPOW and ProgPoW, default value is 1 (0 - off or 1 - on)   --nvml - enable/disable NVML (statistic library for CUDA devices), default value is 1 (0 - off or 1 - on)   --cuda - enable/disable CUDA platform, default value is 1 (0 - off or 1 - on)   --opencl - enable/disable OpenCL platform, default value is 1 (0 - off or 1 - on)      Parameters dag_mode, safe_dag, dag_limit, kernel, mt, fan, pl, cclock, cvddc, mclock, lock_voltage, lock_cclock, tfan, templimit, templimit_mem, intensity can be specified with one parameter for all devices:  miner --algo ethash --server eth.2miners.com:2020 --user 0xada842613541e55e2500478892a334cde74ff653.worker1 --kernel 0 --templimit 80 --dag_mode 0   or for each device separately, if we have 3 devices:  miner --algo ethash --server eth.2miners.com:2020 --user 0xada842613541e55e2500478892a334cde74ff653.worker1 --kernel 0 1 1 --templimit 80 70 90 --dag_mode 0 1 2   Miner supports failover pools, if the main pool is not available, the miner switches to the failover pools, after the main pool is available, the miner will switch to it, example:  miner --algo ethash --server eth.2miners.com:2020 --user 0xada842613541e55e2500478892a334cde74ff653.worker1 --server eu1.ethermine.org:4444 --user 0xada842613541e55e2500478892a334cde74ff653.worker1 --server asia.sparkpool.com:3333 --user 0xada842613541e55e2500478892a334cde74ff653.worker1      eth.2miners.com - main pool   eu1.ethermine.org and asia.sparkpool.com - failover pools   Miner resets mt, cclock, cvddc, mclock parameters to default values while DAG generation to avoid errors   Parameters details      --kernel - allows you to choose one of several kernels, the fastest kernel is automatically selected by default.   Cores differ in performance and energy efficiency depending on the GPU model and overclocking parameters.   To set the kernel manually, pass the kernel index to the parameter.        Try to choose the best kernel for you manually by going through all the options       --mt - allows you to choose one of several tweaks for GPUs with GDDR5X and GDDR5 memory.   A higher value gives more performance and less stability, risk of finding invalid shares increases.   Try to check all values to determine which one suits you best.        Administrator rights required.       --safe_dag - allows you to choose a way to DAG generation.   In fast mode (value 1, auto for GTX GPUs) miner generates DAG as quickly as possible, DAG errors are possible at maximum overclocking.        In safe mode (value 2, auto for RTX GPUs) miner generates DAG with error control, useful for RTX cards at maximum overclocking.       --tfan - allows you to set a target temperature for fans.   Miner monitors temperature of GPU and actively controls the fan speed trying to hold target temperature.   --tfan_min and --tfan_max options set minimum and maximum fan speed limits.   Fast start  To start Ethash, enter at the command line:  miner --algo ethash --server eth.2miners.com:2020 --user 0xada842613541e55e2500478892a334cde74ff653.worker1      --algo - mining algorithm, in this case ethash   --server - pool address and port, in this case the pool is eth.2miners.com, port is 2020   --user - Ethash wallet and worker name, in this case wallet is 0xada842613541e55e2500478892a334cde74ff653, worker is worker1   For Ethash and Etchash algorithms, there are 2 options for stratum protocol (proxy and stratum), to explicitly specify the protocol use the --proto parameter, for example, to use Nicehash pool, enter in the command line:  miner --algo ethash --server daggerhashimoto.usa.nicehash.com:3353 --user 3LsTTSsSy17xuoShcMHuRgGBxKn1AHgeVN --proto stratum   If you have a mixed rig, you can run the miner only on CUDA devices:   miner --algo ethash --server eth.2miners.com:2020 --user 0xada842613541e55e2500478892a334cde74ff653.worker1 --opencl 0 or only on OpenCL devices: miner --algo ethash --server eth.2miners.com:2020 --user 0xada842613541e55e2500478892a334cde74ff653.worker1 --cuda 0   or on devices of your choice, such as GPU0 GPU2 and GPU4:   miner --algo ethash --server eth.2miners.com:2020 --user 0xada842613541e55e2500478892a334cde74ff653.worker1 --devices 0 2 4 the list of available GPUs can be seen by calling the following command: miner --list_devices   For Ethash and Etchash algorithms there is a possibility of manual selection of kernels:   miner --algo ethash --server eth.2miners.com:2020 --user 0xada842613541e55e2500478892a334cde74ff653.worker1 --kernel 0 2 3 --kernel 0 2 3 - kernel numbers for each device, 0 - auto kernel selection for GPU0, kernel #2 for GPU1, kernel #3 for GPU2   Also you can select one kernel for all devices:   miner --algo ethash --server eth.2miners.com:2020 --user 0xada842613541e55e2500478892a334cde74ff653.worker1 --kernel 5 --kernel 5 select kernel #5 for all devices   To set temperature limits on GPU0 GPU2 and GPU4, upon reaching which mining on this device will pause until it cools down:   miner --algo ethash --server eth.2miners.com:2020 --user 0xada842613541e55e2500478892a334cde74ff653.worker1 --devices 0 2 4 --templimit 80 70 65   where 80 is the temperature limit for GPU0, 70 is the temperature limit for GPU2, 65 is the temperature limit for GPU4   To save the miners logs to a file for later analysis:   miner --algo ethash --server eth.2miners.com:2020 --user 0xada842613541e55e2500478892a334cde74ff653.worker1 --logfile c:\\log.txt where “c:\\log.txt” is the path to the file with the miners logs  ","categories": ["documentation"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/documentation/arguments/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "GMiner&#58; changelog",
        "excerpt":"A changelog is a record of changes to a software project or other technology product.    Changelog         v2.72     fixed memory leaks on AMD GPUs   fixed compatibility with latest linux distributions   fixed crashes appeared in v2.71   v2.71     Improved LHR performance, added two modes (–lhr_mode): 0 - energy save mode, 1 - maximal performance mode (default). Miner display LHR unlock percentage in statistics table (LHR row), you can adjust it by –lhr_tune option. Now –lhr_tune meaning GPU unlock percentage, for compatibility lhr tunes below 10 mapped to new default values. If LHR auto-tune (–lhr_autotune) enabled miner tries increase LHR unlock percentage while mining.   Improved RavenCoin performance, fixed floating hashrate   Display maximum difficulty of shares for each GPU   v2.70     improved auto-tune for LHR GPUs, now miner speedup performance when GPU is steady   removed –lhr_tune1 / –lhr_tune2 parameters, use –lhr_tune to tune LHR GPUs (value range is -10 - 10, old parameters ignored for compatibility)   display current –lhr_tune value and current kernel in statistics table   v2.69     added auto-tune for LHR GPUs (enabled by default, to disable pass –lhr_autotune 0)   fixed RavenCoin support under Windows 7   increased reconnect tries on connection loss (–reconnect_count)   improved miner stability   v2.68     detect lock of LHR GPUs, automatically unlock and continue mining   display of miner restart count by watchdog   v2.54     generates valid DAG on higher OC modes   improved speed of DAG generation (up to 2x)   v2.53     fixed miner crashes on DAG changes for ETH+ZIL mining   fixed DAG caching on 6GB cards   apply lock_voltage before DAG generation (in 2.52 miner applied lock_voltage after DAG generation)   v2.52     core voltage support for Nvidia GPUs (–cvddc in %)   ability to lock voltage point (–lock_voltage), helps reduce power consumption   option to disable P2 state (–p2state 0)   fixed bug with invalid shares display in Web UI   v2.51     significant CPU usage reduction (up to 5x, fixed LA problem under HiveOS)   fixed bug with AE mining (appeared in 2.50)   fixed bug with worker name (appeared in 2.50)   v2.50     auto fan feature, now you can set target fan temperature (–tfan, –tfan_min, –tfan_max, Windows only)   reset overclocking before DAG generation (Windows only)   improved beamhash performance (~+2%)   improved cuckatoo32 performance (~+5%)   added display of GPU model in statistics table   added –worker parameter to specify worker name for ETH pools thats doesn’t support wallet.worker notation   added option to display date in log (–log_date)   added option to log stratum (–log_stratum)   display epoch and block number on new job   updated Web UI for –api   uses –proto stratum for NiceHash by default   removed algorithms: VDS, BFC   bug fixes and stability improvements  ","categories": ["documentation"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/documentation/changelog/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "GMiner Setup Guide (Ethereum, ETC and other) - [2021]",
        "excerpt":"You can use this list as a reference for all Launch Parameters supported by gminer.    Download   Download Now   How to use   To start Ethash, enter at the command line:   miner --algo ethash --server eth.2miners.com:2020 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1      --algo - mining algorithm, in this case ethash   --server - pool address and port, in this case the pool is eth.2miners.com, port is 2020   --user - Ethash wallet and worker name, in this case wallet is 0x5218597d48333d4a70cce91e810007b37e2937b5, worker is worker1   The easiest way to get a wallet is to register on a cryptocurrency exchange like Binance or Huobi.   How to set up for NiceHash   For Ethash and Etсhash algorithms, there are 2 options for stratum protocol (proxy and stratum), to explicitly specify the protocol use the “–proto” parameter, for example, to use Nicehash pool, enter in the command line:   miner --algo ethash --server daggerhashimoto.usa.nicehash.com:3353 --user 3LsTTSsSy17xuoShcMHuRgGBxKn1AHgeVN --proto stratum   Want to customize GMiner for maximum profit? Read the full guide to configuring GMiner   How to disable GPU   If you have a mixed rig, you can run the miner only on CUDA devices:   miner --algo ethash --server eth.2miners.com:2020 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1 --opencl 0   or only on OpenCL devices:   miner --algo ethash --server eth.2miners.com:2020 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1 --cuda 0   or on devices of your choice, such as GPU0 GPU2 and GPU4:  miner --algo ethash --server eth.2miners.com:2020 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1 --devices 0 2 4   the list of available GPUs can be seen by calling the following command:   miner --list_devices   Temperature limit   To set temperature limits on GPU0 GPU2 and GPU4, upon reaching which mining on this device will pause until it cools down:   miner --algo ethash --server eth.2miners.com:2020 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1 --devices 0 2 4 --templimit 80 70 65   Where 80 is the temperature limit for GPU0, 70 is the temperature limit for GPU2, 65 is the temperature limit for GPU4   Log file   To save the miner’s logs to a file for later analysis:   miner --algo ethash --server eth.2miners.com:2020 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1 --logfile c: \\ log.txt   Where c:\\log.txt is the path to the file with the miner’s logs.  ","categories": ["documentation"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/documentation/setup/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Download GMiner  2.54 - AMD GPU Miner [2021]",
        "excerpt":" Get started with GMiner  \t\t \t\t\t \t\tVersion: 2.54  \t\tFile: *gminer.exe,    \t\tSHA256: 612a490da78c2395afea9cde3592361524308fe71a6194bb1f901e212ac05b08  \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     The new GMiner stable version is ready.   You can download GMiner 2.54 from here:   Download Now   Download (mirror)   Inside the archive you will find a file README.txt with installation instructions.   Make sure to replace the pool and wallet address by what you’re using in all files.        ","categories": ["download"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/download/2.54/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Download GMiner  2.55 - AMD+NVIDIA GPU Miner [2021]",
        "excerpt":" Get started with GMiner  \t\t \t\t\t \t\tVersion: 2.55  \t\tFile: *gminer.exe,    \t\tSHA256: 936d3d5246c6b20454f1e9794e775c8805ce75bbe097509782d1c73390b1b53b  \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     The new GMiner stable version is ready.   You can download GMiner 2.55 from here:   Download Now   Download (mirror)   Inside the archive you will find a file README.txt with installation instructions.   Make sure to replace the pool and wallet address by what you’re using in all files.        Changelog      lock core clock feature for Nvidia GPUs under Windows and Linux (--lock_cclock)   resolve domain names even with broken system DNS settings   support SOCKS5 proxy (--proxy host:port)  ","categories": ["download"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/download/2.55/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Download GMiner  2.56 - AMD+NVIDIA GPU Miner [2021]",
        "excerpt":" Get started with GMiner  \t\t \t\t\t \t\tVersion: 2.56  \t\tFile: *gminer.exe,    \t\tSHA256: a243d233b1f47e8f3e356b27affccb16b0ef0fc6d84176b0493e1823782b1b93  \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     The new GMiner stable version is ready.   You can download GMiner 2.56 from here:   Download Now   Download (mirror)   Inside the archive you will find a file README.txt with installation instructions.   Make sure to replace the pool and wallet address by what you’re using in all files.        Changelog      display memory temperature for Nvidia cards under Windows (if GPU support it)   display memory temperature for AMD cards Windows and Linux (if GPU support it)   removed cuckatoo31/cuckatoo32 algorithms  ","categories": ["download"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/download/2.56/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Download GMiner  2.58 - AMD+NVIDIA GPU Miner [2021]",
        "excerpt":" Get started with GMiner  \t\t \t\t\t \t\tVersion: 2.58  \t\tFile: *gminer.exe,    \t\tSHA256: db9081eeb4a7e0808deff181cd27f8ae37cbc62af59c5781188639d2426a1e2e  \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     The new GMiner stable version is ready.   You can download GMiner 2.58 from here:   Download Now   Download (mirror)   Inside the archive you will find a file README.txt with installation instructions.   Make sure to replace the pool and wallet address by what you’re using in all files.        Changelog      added display of pool hashrate estimated by accepted shares   fixed freezing on DAG generation on AMD GPUs on some drivers   support latest AMD drivers  ","categories": ["download"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/download/2.58/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Download GMiner  2.61 - AMD+NVIDIA GPU Miner [2021]",
        "excerpt":" Get started with GMiner  \t\t \t\t\t \t\tVersion: 2.61  \t\tFile: *gminer.exe,    \t\tSHA256: 0686a91a743993c5674db7b3743304b3fb8b344bcf11f30e769328064198b460  \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     The new GMiner stable version is ready.   You can download GMiner 2.61 from here:   Download Now   Download (mirror)   Inside the archive you will find a file README.txt with installation instructions.   Make sure to replace the pool and wallet address by what you’re using in all files.        Changelog      contest, use GMiner and win ETH, read contest rules below:      you need to use gminer from version 2.61 or higher   for participation in contest, you need to run miner with --contest_wallet ETH_WALLET parameter, accordingly specifying a valid Eth wallet in the parameter (for example: --contest_wallet 0x5218597d48333d4a70cce91e810007b37e2937b5)   condition for participation in contest is use of gminer on any algorithm and with any hashrate with –contest_wallet parameter for at least 72 hours   each rig participating in contest has same weight regardless of hashrate (from laptop to rig with 20 cards)   miner notifies contest server every hour of continuous work, server remembers number of hours worked and wallet for contest specified in --contest_wallet parameter   user ID is set of hardware IDs, there is no point in running multiple copies of the miner in parallel on same rig, this does not increase chances of winning   miner running on multiple rigs, even with same Eth wallet specified in the --contest_wallet parameter, increases chances of winning in proportion to number of rigs   server stores number of hours worked, miner can be restarted without losing accumulated time   in process of working with --contest_wallet parameter, current progress in fulfilling conditions of contest is displayed under statistics table (for example, Contest: 7/72)   in order to become participant in contest and fulfill the necessary conditions, period of time equal to a week is given   at end of contest, data about users (serial number, unique identifier, Eth wallet) who have fulfilled all conditions are uploaded to numbered list and placed in public access   five winners are selected from public list of participants using online roulette in live broadcast   each of winners is sent certain amount of coins to Eth wallet specified in the --contest_wallet parameter  ","categories": ["download"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/download/2.61/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Download GMiner  2.62 - AMD+NVIDIA GPU Miner [2021]",
        "excerpt":" Get started with GMiner  \t\t \t\t\t \t\tVersion: 2.62  \t\tFile: *gminer.exe,    \t\tSHA256: 24310ecf93f47764d5df3b8373874dbf208f81ec6029ca98f3c13605f194bd11  \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     The new GMiner stable version is ready.   You can download GMiner 2.62 from here:   Download Now   Download (mirror)   Inside the archive you will find a file README.txt with installation instructions.   Make sure to replace the pool and wallet address by what you’re using in all files.        Changelog      fixed performance degradation on mining edition Nvidia GPUs when using memory tweaks (appears in 2.61, reboot required)  ","categories": ["download"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/download/2.62/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Download GMiner  2.63 - AMD+NVIDIA GPU Miner [2021]",
        "excerpt":" Get started with GMiner  \t\t \t\t\t \t\tVersion: 2.63  \t\tFile: *gminer.exe,    \t\tSHA256: 2a2ba04c74d6947e2d9a6f3d2a87850ac75007436a868c5051c0ff5fd800358d  \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     The new GMiner stable version is ready.   You can download GMiner 2.63 from here:   Download Now   Download (mirror)   Inside the archive you will find a file README.txt with installation instructions.   Make sure to replace the pool and wallet address by what you’re using in all files.        Changelog      fixed periodic miner restarts under Linux  ","categories": ["download"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/download/2.63/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Download GMiner 2.64 - AMD+NVIDIA GPU Miner [2021]",
        "excerpt":" Get started with GMiner  \t\t \t\t\t \t\tVersion: 2.64  \t\tFile: *gminer.exe,    \t\tSHA256: 0ac6babebe5c848944a2d0d6e7f30a96af1388b6ba881ee55d051d0916b90784  \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     The new GMiner 2.64 stable version is ready.   You can download GMiner 2.64 from here:   Download Now   Download (mirror)   Inside the archive you will find a file README.txt with installation instructions.   Make sure to replace the pool and wallet address by what you’re using in all files.        Changelog      performance improvements for Ethash on Nvidia GPUs(20 and 30 series) under Linux   fixed zombie mode for Ravencoin  ","categories": ["download"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/download/2.64/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Download the latest version GMiner (2.72) - AMD+NVIDIA [2021]",
        "excerpt":" Get started with GMiner  \t\t \t\t\t \t\tLatest version is 2.72 \t\tSHA256: a6a5b5091506e039002968b9f95bdf30e2fdfb03db7449612594c159063a1523 *GMiner2.72.exe \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     The new GMiner stable version is ready.   You can download GMiner 2.72 from here:   Download Now   Download (mirror)   Inside the archive you will find a file README.txt with installation instructions.   Make sure to replace the pool and wallet address by what you’re using in all files.        Requirements      CUDA compute compability 5.0+   Equihash 96,5 ~0.76GB VRAM   Equihash 144,5 ~1.76GB VRAM   Beam Hash ~3.0GB VRAM   Equihash 192,7 ~2.76GB VRAM   Equihash 210,9 ~1.01GB VRAM   CUDA 9.0+    Supported coins   \t \t\t \t\t\t# \t\t\t0 ADI \t\t \t\t \t\t\t1 \t\t\tAE Aetemity \t\t \t\t \t\t\t2 \t\t\tAION \t\t \t\t \t\t\t3 \t\t\tAKA \t\t \t\t \t\t\t4 \t\t\tANTPOOL ETH AntPool \t\t \t\t \t\t\t5 \t\t\tANTPOOL RVN AntPool \t\t \t\t \t\t\t6 \t\t\tARW \t\t \t\t \t\t\t7 \t\t\tATH \t\t \t\t \t\t\t8 \t\t\tBEAM \t\t \t\t \t\t\t9 \t\t\tBEEPOOLAE \t\t \t\t \t\t\t10 \t\t\tBEEPOOL ETC \t\t \t\t \t\t\t11 \t\t\tBEEPOOL ETH \t\t \t\t \t\t\t12 \t\t\tBEEPOOL RVN \t\t \t\t \t\t\t13 \t\t\tBINANCE ETH \t\t \t\t \t\t\t14 \t\t\tBTCZ BitcoinZ \t\t \t\t \t\t\t15 \t\t\tBTG Bitcoin Gold \t\t \t\t \t\t\t16 \t\t\tBZE BZEdge \t\t \t\t \t\t\t17 \t\t\tCLO Callisto Network \t\t \t\t \t\t\t18 \t\t\tCRAZYPOOL ETH CrazyPool \t\t \t\t \t\t\t19 \t\t\tCTXC Cortex \t\t \t\t \t\t\t20 \t\t\tDBIX \t\t \t\t \t\t\t21 \t\t\tEGEM EtherGem \t\t \t\t \t\t\t22 \t\t\tERE \t\t \t\t \t\t\t23 \t\t\tESN \t\t \t\t \t\t\t24 \t\t\tETC \t\t \t\t \t\t\t25 \t\t\tETH \t\t \t\t \t\t\t26 \t\t\tETHO Etho Protocol \t\t \t\t \t\t\t27 \t\t\tETP Metaverse ETP \t\t \t\t \t\t\t28 \t\t\tEXCC ExchangeCoin \t\t \t\t \t\t\t29 \t\t\tEXP \t\t \t\t \t\t\t30 \t\t\tEZIL ETC Ezll \t\t \t\t \t\t\t31 \t\t\tEZIL ETH Ezll \t\t \t\t \t\t\t32 \t\t\tF2POOL BEAM \t\t \t\t \t\t\t33 \t\t\tF2POOL ETC \t\t \t\t \t\t\t34 \t\t\tF2POOL ETH \t\t \t\t \t\t\t35 \t\t\tF2POOL RVN \t\t \t\t \t\t\t36 \t\t\tFLEXPOOL ETH Flexpool \t\t \t\t \t\t\t37 \t\t\tFLUX \t\t \t\t \t\t\t38 \t\t\tHIVEON ETC \t\t \t\t \t\t\t39 \t\t\tHIVEON ETH \t\t \t\t \t\t\t40 \t\t\tLTZ \t\t \t\t \t\t\t41 \t\t\tMD KAWPOW Mining Dutch \t\t \t\t \t\t\t42 \t\t\tMO Ethash \t\t \t\t \t\t\t43 \t\t\tMO AC MOAC \t\t \t\t \t\t\t44 \t\t\tMPH Etchash Mining Pool Hub \t\t \t\t \t\t\t45 \t\t\tMPH Ethash Mining Pool Hub \t\t \t\t \t\t\t46 \t\t\tMPH KAWPOW Mining Pool Hub \t\t \t\t \t\t\t47 \t\t\tMPH Zhash Mining Pool Hub \t\t \t\t \t\t\t48 \t\t\tMRR BeamHashlll Mining Rig Rentals \t\t \t\t \t\t\t49 \t\t\tMRR Equihash(125,4) Mining Rig Rentals \t\t \t\t \t\t\t50 \t\t\tMRR Equihash(150,5) Mining Rig Rentals \t\t \t\t \t\t\t51 \t\t\tMRR Equihash(192,7) Mining Rig Rentals \t\t \t\t \t\t\t52 \t\t\tMRR Equihash(210,9) Mining Rig Rentals \t\t \t\t \t\t\t53 \t\t\tMRR Etchash Mining Rig Rentals \t\t \t\t \t\t\t54 \t\t\tMRR Ethash Mining Rig Rentals \t\t \t\t \t\t\t55 \t\t\tMRR Zhash Mining Rig Rentals \t\t \t\t \t\t\t56 \t\t\tNANOPOOL ETC \t\t \t\t \t\t\t57 \t\t\tNANOPOOL ETH \t\t \t\t \t\t\t58 \t\t\tNANOPOOL RVN \t\t \t\t \t\t\t59 \t\t\tNH BeamHashlll \t\t \t\t \t\t\t60 \t\t\tNH CuckooCyde \t\t \t\t \t\t\t61 \t\t\tNH Ethash \t\t \t\t \t\t\t62 \t\t\tNH KAWPOW \t\t \t\t \t\t\t63 \t\t\tNH Zhash \t\t \t\t \t\t\t64 \t\t\tNILU \t\t \t\t \t\t\t65 \t\t\tNLP Equihash(125,4) NLPOOL \t\t \t\t \t\t\t66 \t\t\tNLP Equihash(144,5) NLPOOL \t\t \t\t \t\t\t67 \t\t\tNLP Equihash(192,7) NLPOOL \t\t \t\t \t\t\t68 \t\t\tNUKO \t\t \t\t \t\t\t69 \t\t\tPGC \t\t \t\t \t\t\t70 \t\t\tPOOLIN ETH \t\t \t\t \t\t\t71 \t\t\tPROH Equihash(144,5) Prohashing \t\t \t\t \t\t\t72 \t\t\tPROH Etchash Prohashing \t\t \t\t \t\t\t73 \t\t\tPROH Ethash Prohashing \t\t \t\t \t\t\t74 \t\t\tQKC QuarkChain \t\t \t\t \t\t\t75 \t\t\tRVN \t\t \t\t \t\t\t76 \t\t\tSPARK BEAM SparkPool \t\t \t\t \t\t\t77 \t\t\tSPARK ETH SparkPool \t\t \t\t \t\t\t78 \t\t\tSPIDER ETH Spider \t\t \t\t \t\t\t79 \t\t\tTENT TENT \t\t \t\t \t\t\t80 \t\t\tTSF Teslafunds \t\t \t\t \t\t\t81 \t\t\tUNM Etchash \t\t \t\t \t\t\t82 \t\t\tUNM Ethash \t\t \t\t \t\t\t83 \t\t\tUNM KAWPOW \t\t \t\t \t\t\t84 \t\t\tVDL \t\t \t\t \t\t\t85 \t\t\tVIABTC ETC ViaBTC \t\t \t\t \t\t\t86 \t\t\tVIABTC ETH ViaBTC \t\t \t\t \t\t\t87 \t\t\tVIABTC RVN ViaBTC \t\t \t\t \t\t\t88 \t\t\tZCH \t\t \t\t \t\t\t89 \t\t\tZCL \t\t \t\t \t\t\t90 \t\t\tZELS \t\t \t\t \t\t\t91 \t\t\tZER Zero \t\t \t\t \t\t\t92 \t\t\tZERC \t\t \t\t \t\t\t93 \t\t\tZIL Zilliqa \t\t \t\t \t\t\t94 \t\t\tZP Equihash(125,4) Zergpool \t\t \t\t \t\t\t95 \t\t\tZP Equihash(144,5) Zergpool \t\t \t\t \t\t\t96 \t\t\tZP Equihash(192,7) Zergpool \t\t \t\t \t\t\t97 \t\t\tZP Etchash Zergpool \t\t \t\t \t\t\t98 \t\t\tZP Ethash Zergpool \t\t \t\t \t\t\t99 \t\t\tZP KAWPOW Zergpool \t\t \t\t \t\t\t100 \t\t\tzpool Equihash(144,5) zpool \t\t \t\t \t\t\t101 \t\t\tzpool Equihash(192,7) zpool \t\t \t  ","categories": ["download"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/download/latest/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Download GMiner 2.66 - AMD+NVIDIA GPU Miner [2021]",
        "excerpt":" Get started with GMiner  \t\t \t\t\t \t\tVersion: 2.66  \t\tFile: *gminer.exe,    \t\tSHA256: aaeeb0a3babe898a0fbfd88f466b1e7d6072fdfbccc2b3ce3a22c223a3056ec3  \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     The new GMiner 2.66 stable version is ready.   You can download GMiner 2.66 from here:   Download Now   Download (mirror)   Inside the archive you will find a file README.txt with installation instructions.   Make sure to replace the pool and wallet address by what you’re using in all files.        Changelog      improved KAWPOW (Ravencoin) performance under Linux on Nvidia GPUs   added AMD implementation for KAWPOW (Ravencoin)   improved compatibility with Ethash pools  ","categories": ["download"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/download/2.66/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Download GMiner 2.68 - AMD+NVIDIA GPU Miner [2021]",
        "excerpt":" Get started with GMiner  \t\t \t\t\t \t\tVersion: 2.68  \t\tFile: *gminer.exe,    \t\tSHA256: 4a823a863e9f2b9b917a1278e09df41d33ac62cba3854e49562c04553e15227f  \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     The new GMiner 2.68 stable version is ready.   You can download GMiner 2.68 from here:   Download Now   Download (mirror)   Inside the archive you will find a file README.txt with installation instructions.   Make sure to replace the pool and wallet address by what you’re using in all files.        Changelog      detect lock of LHR GPUs, automatically unlock and continue mining   display of miner restart count by watchdog  ","categories": ["download"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/download/2.68/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Download GMiner 2.69 - AMD+NVIDIA GPU Miner [2021]",
        "excerpt":" Get started with GMiner  \t\t \t\t\t \t\tVersion: 2.69  \t\tFile: *gminer.exe,    \t\tSHA256: 8d9e170940840000472f0a8c572dc34c52fe58cdbe701c395058ea30942e042b  \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     The new GMiner 2.69 stable version is ready.   You can download GMiner 2.69 from here:   Download Now   Download (mirror)   Inside the archive you will find a file README.txt with installation instructions.   Make sure to replace the pool and wallet address by what you’re using in all files.        Changelog      Added auto-tune for LHR GPUs (enabled by default, to disable pass --lhr_autotune 0)   Increased reconnect tries on connection loss (--reconnect_count)   Improved miner stability  ","categories": ["download"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/download/2.69/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Download GMiner 2.70 - AMD+NVIDIA GPU Miner [2021]",
        "excerpt":" Get started with GMiner  \t\t \t\t\t \t\tVersion: 2.70  \t\tFile: *gminer.exe,    \t\tSHA256: 2a8c5a08649ff4a2f12b4c1bc4832463b8f1ec14186a6ae8186855d67f1eb02e  \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     The new GMiner 2.70 stable version is ready.   You can download GMiner 2.70 from here:   Download Now   Download (mirror)   Inside the archive you will find a file README.txt with installation instructions.   Make sure to replace the pool and wallet address by what you’re using in all files.        Changelog      improved auto-tune for LHR GPUs, now miner speedup performance when GPU is steady   removed --lhr_tune1 / --lhr_tune2 parameters, use --lhr_tune to tune LHR GPUs (value range is -10 - 10, old parameters ignored for compatibility)   display current --lhr_tune value and current kernel in statistics table  ","categories": ["download"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/download/2.70/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Download GMiner 2.71 - AMD+NVIDIA GPU Miner [2021]",
        "excerpt":" Get started with GMiner  \t\t \t\t\t \t\tVersion: 2.71  \t\tFile: *gminer.exe,    \t\tSHA256: f793ed790d20076b6b326af451357a298acc8ff7a47647b23240727345a7fa9a  \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     The new GMiner 2.71 stable version is ready.   You can download GMiner 2.71 from here:   Download Now   Download (mirror)   Inside the archive you will find a file README.txt with installation instructions.   Make sure to replace the pool and wallet address by what you’re using in all files.        Changelog      Improved LHR performance, added two modes (--lhr_mode):            0 - energy save mode,       1 - maximal performance mode (default).           Miner display LHR unlock percentage in statistics table (LHR row), you can adjust it by --lhr_tune option. Now --lhr_tune meaning GPU unlock percentage, for compatibility lhr tunes below 10 mapped to new default values. If LHR auto-tune (--lhr_autotune) enabled miner tries increase LHR unlock percentage while mining.     Improved RavenCoin performance, fixed floating hashrate   Display maximum difficulty of shares for each GPU  ","categories": ["download"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/download/2.71/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Download GMiner 2.72 - AMD+NVIDIA GPU Miner [2021]",
        "excerpt":" Get started with GMiner  \t\t \t\t\t \t\tVersion: 2.72  \t\tFile: *gminer.exe,    \t\tSHA256: a6a5b5091506e039002968b9f95bdf30e2fdfb03db7449612594c159063a1523  \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     The new GMiner 2.72 stable version is ready.   You can download GMiner 2.72 from here:   Download Now   Download (mirror)   Inside the archive you will find a file README.txt with installation instructions.   Make sure to replace the pool and wallet address by what you’re using in all files.        Changelog      fixed memory leaks on AMD GPUs;   fixed compatibility with latest linux distributions;   fixed crashes appeared in v2.71.  ","categories": ["download"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/download/2.72/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },]
