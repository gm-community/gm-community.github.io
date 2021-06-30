var store = [{
        "title": "GMiner&#58; Command Line Arguments and Options",
        "excerpt":"**    Download   Download Now   CMD options：   --algo or shortly -a - mining algorithm (for example: ‘ethash’, ‘kawpow’, ‘cuckatoo32’, ‘beamhash’)  --list_devices - list devices available for mining  --server or shortly -s - mining pool address (for example: ‘eu.btgpool.pro’, ‘eu1.zhash.pro’)  --port or shortly -n - mining pool port (for example: ‘5057’, ‘1445’)  --user or shortly -u - mining pool login or wallet address, worker’s name can be specified with a dot (for example: ‘sRuJK1BmA758GbOn.worker’, ‘GfGLyfP9GzZbPeTzvW1KSx3HeMnrNAiGWY.rig0’)  --worker - worker name for Ethash strarum, for pools that does not supoort wallet.worker (for example: ‘rig0’)  --pass or shortly -p - worker password or default pool password, can be empty, default value is ‘x’ (for example: ‘sRuJK1Bm’)  --ssl - enable/disable secure connection with mining pool, must be supported by a pool, default value is ‘0’ (‘0’ - off or ‘1’ - on)  --ssl_verification - enable/disable certificates verification for secure connection, it may not work with pools that have expired certificate, default value is ‘0’ (‘0’ - off or ‘1’ - on)  --proto - specify stratum protocol mode, possible values: proxy and stratum, useful for Ethash mining, default value is ‘proxy’ (for example: ‘stratum’)  --dag_mode - space-separated list of Dag file modes (0 - auto, 1 - single, 2 - double), default is ‘0’ (for example: ‘2 1 0’)  --dag_limit - space-separated list of Dag file size limits in megabytes, to disable the limit use 0, default is ‘0’ (for example: ‘4096 4096 4096’)  --cache_dag - enable/disable caching of DAG file for mining Ethash + Zilliqa or Nicehash, default value is ‘1’ (‘0’ - off or ‘1’ - on)  --devices or shortly -d - space-separated list of cuda devices, can be empty, default value is all available devices (for example: ‘1 3 5’)  --kernel or shortly -k - space-separated list of kernel numbers for each device (0 - auto, 1-6 - kernel number, currently supports 6 kernels for Nvidia on Ethash/Etchash), default value is 0 (for example: ‘1 3 5’)  --mt - space-separated list of memory tweak numbers for each device (range from 0 to 6, 0 - disable tweaks), only Nvidia GPUs with GDDR5X and GDDR5 memory are supported, requires running miner with admin privileges, default value is 0 (for example: ‘1 3 5’)  --fan - space-separated list of fan speed for each device in percents (range from 0 to 100, 0 - ignore), only Windows is supported (for example: ‘60 0 90’)  --pl - space-separated list of power limits for each device in percents (range from 0 to 100 for Nvidia GPUs and -50 - 50 for AMD GPUs, 0 - ignore), only Windows is supported (for example: ‘30 0 50’)  --cclock - space-separated list of core clock offsets (for Nvidia GPUs) or absolute core clocks (for AMD GPUs) for each device in MHz (0 - ignore), only Windows is supported, requires running miner with admin privileges (for example: ‘100 0 -90’)  --mclock - space-separated list of memory clock offsets (for Nvidia GPUs) or absolute memory clocks (for AMD GPUs) for each device in MHz (0 - ignore), only Windows is supported, requires running miner with admin privileges (for example: ‘100 0 -90’)  --cvddc - space-separated list of absolute core voltages for each device in mV (0 - ignore), only Windows and AMD GPUs are supported, requires running miner with admin privileges (for example: ‘900 0 1100’)  --mvddc - space-separated list of absolute memory voltages for each device in mV (0 - ignore), only Windows and AMD GPUs are supported, requires running miner with admin privileges (for example: ‘900 0 1100’)  --logfile or shortly -l - filename to save logs on disk, can be empty, default value is ‘’ (for example: ‘/usr/user/miner.log’, ‘c:\\miner.log’)  --templimit or shortly -t - space-separated list of temperature limits, upon reaching the limit, the GPU stops mining until it cools down (for example: ‘85 80 75’)  --color or shortly -c - enable/disable color output for console, default value is ‘1’ (‘0’ - off or ‘1’ - on)  --watchdog or shortly -w - enable/disable watchdog, watchdog monitors the main mining processes and restarts the application in the event of a failure or loss of connection to the pools, default value is ‘1’ (‘0’ - off or ‘1’ - on)  --api - telemetry server port, allows you to monitor the miner status remotely, open a link in your browser http://localhost: (for example: '10050', '20030')  ```--config``` - specify configuration file  ```--pers``` - personalization string for equihash algorithm (for example: 'BgoldPoW', 'BitcoinZ', 'Safecoin')  ```--pec``` - enable/disable power efficiency calculator. Power efficiency calculator display of energy efficiency statistics of GPU, higher CPU load. Default value is '1' ('0' - off or '1' - on)  ```--electricity_cost``` - pass cost of electricity in USD per kWh, miner will report $ spent to mining  ```--intensity``` or shortly ```-i``` - space-separated list of intensities (1-100), default value is '100' (for example: '90 90 90')  ```--cache_dag``` -  enable/disable caching of DAG file for mining Ethash + Zilliqa or Nicehash, default value is '1' ('0' - off or '1' - on)  ```--share_check``` -  enable/disable share check on CPU for mining Ethash, Etchash, KAWPOW and ProgPoW, default value is '1' ('0' - off or '1' - on)  ```--nvml arg``` - enable/disable NVML (statistic library for CUDA devices), default value is '1' ('0' - off or '1' - on)  ```--cuda arg``` - enable/disable CUDA platform, default value is '1' ('0' - off or '1' - on)  ```--opencl arg``` - enable/disable OpenCL platform, default value is '1' ('0' - off or '1' - on)    Parameters dag_mode, safe_dag, dag_limit, kernel, mt, fan, pl, cclock, cvddc, mclock, mvddc, templimit, intensity can be specified with one parameter for all devices:  miner --algo ethash --server eth.2miners.com:2020 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1 --kernel 0 --templimit 80 --dag_mode 0  or for each device separately, if we have 3 devices:  miner --algo ethash --server eth.2miners.com:2020 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1 --kernel 0 1 1 --templimit 80 70 90 --dag_mode 0 1 2    Miner supports failover pools, if the main pool is not available, the miner switches to the failover pools, after the main pool is available, the miner will switch to it, example:  miner --algo ethash --server eth.2miners.com:2020 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1 --server eu1.ethermine.org:4444 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1 --server asia.sparkpool.com:3333 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1  eth.2miners.com - main pool  eu1.ethermine.org and asia.sparkpool.com - failover pools    Miner resets mt, cclock, cvddc, mclock, mvddc parameters to default values while DAG generation to avoid errors    Parameters details:   --kernel - allows you to choose one of several kernels, the fastest kernel is automatically selected by default.  Cores differ in performance and energy efficiency depending on the GPU model and overclocking parameters.  To set the kernel manually, pass the kernel index to the parameter.  Try to choose the best kernel for you manually by going through all the options    --mt - allows you to choose one of several tweaks for GPUs with GDDR5X and GDDR5 memory.   A higher value gives more performance and less stability, risk of finding invalid shares increases.   Try to check all values to determine which one suits you best.  Administrator rights required.     --safe_dag - allows you to choose a way to DAG generation.  In fast mode (value 1, auto for GTX GPUs) miner generates DAG as quickly as possible, DAG errors are possible at maximum overclocking.  In safe mode (value 2, auto for RTX GPUs) miner generates DAG with error control, useful for RTX cards at maximum overclocking.   ","categories": ["documentation"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/documentation/arguments/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "GMiner&#58; changelog",
        "excerpt":"**    Changelog   v2.54     generates valid DAG on higher OC modes   improved speed of DAG generation (up to 2x)   v2.53     fixed miner crashes on DAG changes for ETH+ZIL mining   fixed DAG caching on 6GB cards   apply lock_voltage before DAG generation (in 2.52 miner applied lock_voltage after DAG generation)   v2.52     core voltage support for Nvidia GPUs (–cvddc in %)   ability to lock voltage point (–lock_voltage), helps reduce power consumption   option to disable P2 state (–p2state 0)   fixed bug with invalid shares display in Web UI   v2.51     significant CPU usage reduction (up to 5x, fixed LA problem under HiveOS)   fixed bug with AE mining (appeared in 2.50)   fixed bug with worker name (appeared in 2.50)   v2.50     auto fan feature, now you can set target fan temperature (–tfan, –tfan_min, –tfan_max, Windows only)   reset overclocking before DAG generation (Windows only)   improved beamhash performance (~+2%)   improved cuckatoo32 performance (~+5%)   added display of GPU model in statistics table   added –worker parameter to specify worker name for ETH pools thats doesn’t support wallet.worker notation   added option to display date in log (–log_date)   added option to log stratum (–log_stratum)   display epoch and block number on new job   updated Web UI for –api   uses –proto stratum for NiceHash by default   removed algorithms: VDS, BFC   bug fixes and stability improvements  ","categories": ["documentation"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/documentation/changelog/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "GMiner Setup Guide [2021]",
        "excerpt":"You can use this list as a reference for all Launch Parameters supported by gminer.    Download   Download Now   To start Ethash, enter at the command line:  miner --algo ethash --server eth.2miners.com:2020 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1  –algo - mining algorithm, in this case ethash  –server - pool address and port, in this case the pool is eth.2miners.com, port is 2020  –user - Ethash wallet and worker name, in this case wallet is 0x5218597d48333d4a70cce91e810007b37e2937b5, worker is worker1    For Ethash and Etсhash algorithms, there are 2 options for stratum protocol (proxy and stratum), to explicitly specify the protocol use the “–proto” parameter, for example, to use Nicehash pool, enter in the command line:  miner --algo ethash --server daggerhashimoto.usa.nicehash.com:3353 --user 3LsTTSsSy17xuoShcMHuRgGBxKn1AHgeVN --proto stratum    If you have a mixed rig, you can run the miner only on CUDA devices:  miner --algo ethash --server eth.2miners.com:2020 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1 --opencl 0  or only on OpenCL devices:  miner --algo ethash --server eth.2miners.com:2020 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1 --cuda 0  or on devices of your choice, such as GPU0 GPU2 and GPU4:  miner --algo ethash --server eth.2miners.com:2020 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1 --devices 0 2 4  the list of available GPUs can be seen by calling the following command:  miner --list_devices   To set temperature limits on GPU0 GPU2 and GPU4, upon reaching which mining on this device will pause until it cools down:  miner --algo ethash --server eth.2miners.com:2020 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1 --devices 0 2 4 --templimit 80 70 65  where 80 is the temperature limit for GPU0, 70 is the temperature limit for GPU2, 65 is the temperature limit for GPU4    To save the miner’s logs to a file for later analysis:  miner --algo ethash --server eth.2miners.com:2020 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1 --logfile c: \\ log.txt  where “c:\\log.txt” is the path to the file with the miner’s logs   ","categories": ["documentation"],
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
      },]
