var store = [{
        "title": "GMiner 安装指南 [2021]",
        "excerpt":"您可以将此列表用作 GMiner 支持的所有启动参数的参考。          您可以从这里下载 GMiner 2.79：   Download Now   Download (mirror)   Linux:  Under Linux you need to replace GMiner.exe with ./GMiner in the command-line examples below.   如何使用   要启动 Ethash，请在命令行输入：   miner --algo ethash --server eth.2miners.com:2020 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1      --algo - mining algorithm, in this case ethash   --server - pool address and port, in this case the pool is eth.2miners.com, port is 2020   --user - Ethash wallet and worker name, in this case wallet is 0x5218597d48333d4a70cce91e810007b37e2937b5, worker is worker1  ","categories": ["documentation"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/documentation/setup/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Gminer&#58; 命令行参数",
        "excerpt":"Gminer 软件的所有命令。          下载地址   从这里下载   命令行参数   Allowed options: -h [ --help ]                      display this message -v [ --version ]                   print program version --list_devices                     display available GPUs --user_id                          display user ID -a [ --algo ] arg                  mining algorithm -s [ --server ] arg                stratum server address -n [ --port ] arg                  stratum server port -u [ --user ] arg                  stratum server username -p [ --pass ] arg                  stratum server password --ssl arg                          enable/disable ssl for stratum connection --proto arg                        stratum protocol: proxy or stratum --proxy arg                        SOCKS5 proxy server host:port --worker arg                       worker name for Ethash strarum, for pools \t\t\t\t\t\t that does not supoort wallet.worker -d [ --devices ] arg               space-separated list of devices -i [ --intensity ] arg             space-separated list of intensities [1 - \t\t\t\t\t\t 100] -l [ --logfile ] arg               log filename --log_date arg (=0)                enable/disable date in each message --log_stratum arg (=0)             enable/disable data of communication with \t\t\t\t\t\t the server --log_newjob arg (=1)              enable/disable information about new jobs -t [ --templimit ] arg             space-separated list of temperature limits -tm [ --templimit_mem ] arg        space-separated list of memory temperature \t\t\t\t\t\t limits --dag_mode arg                     space-separated list of DAG buffer modes, 0 \t\t\t\t\t\t - auto, 1 - single buffer, 2 - dual buffer --safe_dag arg                     space-separated list of DAG generation \t\t\t\t\t\t modes, 0 - auto, 1 - fast mode, 2 - safe \t\t\t\t\t\t mode, only Nvidia GPUs are supported --dag_limit arg                    space-separated list of DAG limits in MB --lhr arg                          space-separated list of LHR modes, 0 - \t\t\t\t\t\t auto, 1 - on, 2 - off, only Nvidia GPUs are \t\t\t\t\t\t supported --lhr_tune arg                     space-separated list of LHR tune values [60 \t\t\t\t\t\t - 90], 0 - default, only Nvidia GPUs are \t\t\t\t\t\t supported --lhr_autotune arg                 space-separated list of LHR auto-tune, 0 - \t\t\t\t\t\t off, 1 - on, only Nvidia GPUs are supported --lhr_mode arg                     LHR mode, 0 - power save mode, 1 - maximal \t\t\t\t\t\t performance mode --cache_dag arg (=1)               enable/disable caching of DAG file --share_check arg (=1)             enable/disable share check on CPU -c [ --color ] arg (=1)            enable/disable color output --report_interval arg (=30)        statistics report interval in seconds -w [ --watchdog ] arg (=1)         enable/disable watchdog --watchdog_restart_delay arg (=10) miner restart delay for watchdog in seconds --reconnect_count arg (=60)        number of connect tries on connection loss --api arg                          specify API ip:port or port to enable API --config arg                       specify configure file --pers arg                         personalization string for equihash \t\t\t\t\t\t algorithm --pec arg (=1)                     enable/disable power efficiency calculator --nvml arg (=1)                    enable/disable NVML --cuda arg (=1)                    enable/disable CUDA platform --opencl arg (=0)                  enable/disable OpenCL platform --electricity_cost arg (=0)        specify electricity cost in $ -k [ --kernel ] arg                space-separated list of kernel indices for \t\t\t\t\t\t each device --mt arg                           space-separated memory tweaks for each \t\t\t\t\t\t device 1-6. Only Nvidia GPUs with GDDR5X \t\t\t\t\t\t and GDDR5 memory are supported. Requires \t\t\t\t\t\t running miner with admin privileges --lock_cclock arg                  space-separated list of locked core clock \t\t\t\t\t\t point for each device in MHz (0 - ignore), \t\t\t\t\t\t only Nvidia GPUs are supported. Requires \t\t\t\t\t\t running miner with admin privileges --contest_wallet arg               contest ETH wallet --fan arg                          space-separated list of fan speed for each \t\t\t\t\t\t device in percents (range from 0 to 100, 0 \t\t\t\t\t\t - ignore), only Windows is supported --tfan arg                         space-separated list of target temperatures \t\t\t\t\t\t for fan, only Windows is supported --tfan_min arg                     space-separated list of minimal fan speed \t\t\t\t\t\t for tfan option, only Windows is supported --tfan_max arg                     space-separated list of maximal fan speed \t\t\t\t\t\t for tfan option, only Windows is supported --pl arg                           space-separated list of power limits for \t\t\t\t\t\t each device in percents (range from 0 to \t\t\t\t\t\t 100 for Nvidia GPUs and -50 - 50 for AMD \t\t\t\t\t\t GPUs, 0 - ignore), only Windows is \t\t\t\t\t\t supported --cclock arg                       space-separated list of core clock offsets \t\t\t\t\t\t (for Nvidia GPUs) or absolute core clocks \t\t\t\t\t\t (for AMD GPUs) for each device in MHz (0 - \t\t\t\t\t\t ignore), only Windows is supported. \t\t\t\t\t\t Requires running miner with admin \t\t\t\t\t\t privileges --lock_voltage arg                 space-separated list of locked voltage \t\t\t\t\t\t points for each device in mV (0 - ignore), \t\t\t\t\t\t only Windows and Nvidia GPUs are supported. \t\t\t\t\t\t Requires running miner with admin \t\t\t\t\t\t privileges --cvddc arg                        space-separated list of absolute core \t\t\t\t\t\t voltages for each device in mV for AMD and \t\t\t\t\t\t % for Nvidia (0 - ignore), only Windows and \t\t\t\t\t\t AMD GPUs are supported. Requires running \t\t\t\t\t\t miner with admin privileges --mclock arg                       space-separated list of memory clock \t\t\t\t\t\t offsets (for Nvidia GPUs) or absolute \t\t\t\t\t\t memory clocks (for AMD GPUs) for each \t\t\t\t\t\t device in MHz (0 - ignore), only Windows is \t\t\t\t\t\t supported. Requires running miner with \t\t\t\t\t\t admin privileges --p2state arg (=1)                 enable/disable P2 state, only Windows and \t\t\t\t\t\t Nvidia GPUs are supported. Requires running \t\t\t\t\t\t miner with admin privileges Supported algorithms: equihash144_5, 144_5      Equihash 144,5 equihash125_4, 125_4      Equihash 125,4 beamhash                  BeamHash equihash192_7, 192_7      Equihash 192,7 equihash210_9, 210_9      Equihash 210,9 cuckoo29, aeternity       Cuckoo29 eth, ethash               Ethash etc, etchash              Etchash cortex                    Cortex kawpow, rvn, ravencoin    KAWPOW   ","categories": ["documentation"],
        "tags": ["Gminer"],
        "url": "https://gminer.info/documentation/arguments/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Gminer&#58; 修改记录",
        "excerpt":"修改记录    修改记录   v2.72      修复了 AMD GPU 上的内存泄漏   与最新的 linux 发行版的固定兼容性   修复了 v2.71 中出现的崩溃   v2.71      改进了 LHR 性能，添加了两种模式（-lhr_mode）：0 - 节能模式，1 - 最大性能模式（默认）。矿工在统计表（LHR行）中显示LHR解锁百分比，您可以通过-lhr_tune选项进行调整。现在 –lhr_tune 表示 GPU 解锁百分比，为了兼容性，lhr 调整低于 10 映射到新的默认值。如果 LHR 自动调整 (–lhr_autotune) 启用矿工尝试在挖掘时增加 LHR 解锁百分比。   改进 RavenCoin 性能，固定浮动哈希率   显示每个 GPU 的最大共享难度   v2.70     改进了 LHR GPU 的自动调整，现在当 GPU 稳定时矿工加速性能   删除了 –lhr_tune1 / –lhr_tune2 参数，使用 –lhr_tune 调整 LHR GPU（值范围是 -10 - 10，为了兼容性忽略旧参数）   在统计表中显示当前的 –lhr_tune 值和当前内核   v2.69     添加了 LHR GPU 的自动调整（默认启用，以禁用传递 –lhr_autotune 0）   修复了 Windows 7 下的 RavenCoin 支持   增加重新连接尝试连接丢失（–reconnect_count）   提高矿工稳定性   v2.68     检测LHR GPU锁定，自动解锁并继续挖矿   看门狗显示矿机重启次数   v2.54     在更高的 OC 模式下生成有效的 DAG   提高 DAG 生成速度（高达 2 倍）   v2.53     修复了针对 ETH+ZIL 挖矿的 DAG 更改导致矿机崩溃的问题   修复了 6GB 卡上的 DAG 缓存   在 DAG 生成之前应用锁定电压（在 2.52 矿工在 DAG 生成之后应用锁定电压）   v2.52     Nvidia GPU 的核心电压支持（–cvddc 以 % 为单位）   能够锁定电压点 (–lock_voltage)，有助于降低功耗   禁用 P2 状态的选项 (–p2state 0)   修复了在 Web UI 中显示无效共享的错误   v2.51     CPU 使用率显着降低（最多 5 倍，修复了 HiveOS 下的 LA 问题）   修复了 AE 挖掘的错误（出现在 2.50 中）   修复了工人名称的错误（出现在 2.50 中）   v2.50     自动风扇功能，现在您可以设置目标风扇温度（–tfan、–tfan_min、–tfan_max，仅限 Windows）   在 DAG 生成之前重置超频（仅限 Windows）   改进的 Beamhash 性能 (~+2%)   改进 cuckatoo32 性能 (~+5%)   在统计表中添加了 GPU 模型的显示   添加了 –worker 参数以指定不支持 wallet.worker 符号的 ETH 池的工人名称   添加了在日志中显示日期的选项 (–log_date)   添加日志层选项（–log_stratum）   在新作业上显示纪元和块号   更新了 –api 的 Web UI   默认情况下为 NiceHash 使用 –proto 层   删除的算法：VDS、BFC   错误修复和稳定性改进   ","categories": ["documentation"],
        "tags": ["Gminer"],
        "url": "https://gminer.info/documentation/changelog/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Download GMiner  2.54 - AMD GPU Miner [2021]",
        "excerpt":" Get started with GMiner  \t\t \t\t\t \t\tVersion: 2.54  \t\tFile: *gminer.exe,    \t\tSHA256: 612a490da78c2395afea9cde3592361524308fe71a6194bb1f901e212ac05b08  \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     The new GMiner stale version is ready.         You can download GMiner 2.54 from here:   Download Now   Download (mirror)   Inside the archive you will find a file README.txt with installation instructions.   Make sure to replace the pool and wallet address by what you’re using in all files.        ","categories": ["download"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/download/2.54/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },]
