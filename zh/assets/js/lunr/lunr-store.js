var store = [{
        "title": "GMiner 安装指南 [2022]",
        "excerpt":"您可以将此列表用作 GMiner 支持的所有启动参数的参考。          您可以从这里下载 GMiner 2.95：   Download Now   Download (mirror)   Linux:  Under Linux you need to replace GMiner.exe with ./GMiner in the command-line examples below.   如何使用   要启动 Ethash，请在命令行输入：   miner --algo ethash --server eth.2miners.com:2020 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1      --algo - mining algorithm, in this case ethash   --server - pool address and port, in this case the pool is eth.2miners.com, port is 2020   --user - Ethash wallet and worker name, in this case wallet is 0x5218597d48333d4a70cce91e810007b37e2937b5, worker is worker1          少被抽水1次 用原版挖礦軟體教程 开机自动挖 gminer nbminer 多机管理 向日葵  矿工增加了对相对于竞争对手具有高性能的Ethash、ProgPoW和KAWPOW算法的支持。        &nbsp;   矿工选项   --help 或很快 -h - 显示可用选项   --version 或很快 -v - 打印程序版本   --user_id - 打印用户 ID   --algo 或很快-a- 挖矿算法（例如： ethash、kawpow、cuckatoo32、beamhash）   --list_devices - 列出可用于挖矿的设备   --contest_wallet - Ethash 钱包, 参数需要参加比赛   --server 或-ssmart-矿池地址（例如：eu.btgpool.pro, eu1.zhash.pro）   --port 或simply --n 矿池端口（例如：5057, 1445） ‘)   --user 或很快 -u - 矿池登录或钱包地址，工人的名字可以用点指定（例如：’sRuJK1BmA758GbOn.worker’、GfGLyfP9GzZbPeTzvW1KSx3HeMnrNAiGWY.rig0）   --worker - Ethash strarum 的工人名称，对于不支持 wallet.worker 的矿池（例如：’rig0’） --pass 或不久 -p - 工人密码或默认矿池密码，默认值为 ‘x’（例如：’sRuJK1Bm’）   --ssl - 启用/禁用与矿池的安全连接（’0’ - 关闭或’1’ - 打开），必须由矿池支持，默认值为’0’   --dev_fee_ssl - 仅启用/禁用 SSL 连接到挖矿 DevFee（’0’ - 关闭or ‘1’ - on)，默认值为’0’   --proxy - SOCKS5代理服务器地址（例如：31.7.232.178:1080）   --proto - 指定层协议模式，可能的值：proxy和stratum，对Ethash挖矿有用，默认值是“代理”（例如：“层”)   --dag_mode - 以空格分隔的 Dag 文件模式列表（0 - 自动，1 - 单，2 - 双），默认为 ‘0’（例如：’2 1 0’）   --safe_dag - 空格分隔的 DAG 生成模式列表（0 - 自动，1 - 快速模式，2 - 安全模式，在自动模式下 GTX GPU - 快速 DAG 和 RTX GPU - 安全 DAG），仅支持 Nvidia GPU，默认为 ‘0 ‘（例如：’2 1 0’）   --dag_limit - 空格分隔的 Dag 文件大小限制列表（以兆字节为单位），禁用限制使用 0，默认为 ‘0’（例如：’4096 4096 4096’）   --cache_dag - 启用/禁用缓存 DAG 文件用于挖掘 Ethash + Zilliqa 或 Nicehash(‘0’ - off or ‘1’ - on)，默认值为 ‘1’   --dag_gen_limit - 最大并行 DAG 代数，0 - 禁用限制，默认值为 ‘0’ （例如：’3’）   --devices 或简称 -d - 以空格分隔的 cuda 设备列表，默认值为所有可用设备（例如：’1 3 5’)   --kernel 或不久-k- 每个设备的以空格分隔的内核编号列表（0 - 自动，1-6 - 内核编号，目前在 Ethash/Etchash 上支持 Nvidia 的 6 个内核）（例如：’1 3 5’）   --mt - 以空格分隔的列表每个设备的内存调整数（范围从 0 到 6，0 - 禁用调整），仅支持具有 GDDR5X 和 GDDR5 内存的 Nvidia GPU，需要以管理员权限运行矿工（例如：’1 3 5’）   --fan - 空格分隔以百分比为单位的每个设备的风扇速度列表（范围从 0 到 100，0 - 忽略），仅支持 Windows（例如：’60 0 90’）   --pl - 以空格分隔的每个设备的功率限制列表，以百分比为单位（范围从 0 到 100 用于 Nvidia GPU，-50 - 50 用于 AMD GPU，0 - 忽略），仅支持 Windows（例如：’30 0 50’）   --cclock - 每个设备的核心时钟偏移（对于 Nvidia GPU）或绝对核心时钟（对于 AMD GPU）的空格分隔列表，以 MHz 为单位（0 - 忽略），仅支持 Windows，需要以管理员权限运行矿工（例如：’ 100 0 -90’)   --mclock - 以 MHz 为单位的每个设备的内存时钟偏移量（对于 Nvidia GPU）或绝对内存时钟（对于 AMD GPU）的空格分隔列表（0 - 忽略），仅支持 Windows，需要使用管理员运行 miner特权（例如：’100 0 -90’）   --cvddc - 以 %（对于 Nvidia GPU）或绝对核心电压（对于 AMD GPU）为单位的每个设备的以 mV 为单位的核心电压偏移的空格分隔列表（0 - 忽略），仅限 Windows支持，需要以管理员权限运行矿工（例如：’900 0 1100’）   --lock_voltage - 以 mV 为单位的每个设备的以空格分隔的锁定电压点列表（0 - 忽略），仅支持 Windows 和 Nvidia GPU。需要以管理员权限运行矿工（例如：’900 0 1000’）   --lock_cclock - 以 MHz 为单位的每个设备的锁定核心时钟点的空格分隔列表（0 - 忽略），仅支持 Nvidia GPU。需要以管理员权限运行矿工（例如：’1200 0 1500’）   --p2state - 启用/禁用 P2 状态，仅支持 Windows 和 Nvidia GPU。需要以管理员权限运行矿工   --tfan - 以空格分隔的风扇目标温度列表（0 - 忽略），仅支持 Windows（例如：’65 0 70’）   --tfan_min - 以空格分隔的最小风扇速度列表（0 - 忽略）对于 tfan 选项，仅支持 Windows（例如：’30 0 35’）   --tfan_max - tfan 选项的最大风扇速度（0 - 忽略）的空格分隔列表，仅支持 Windows（例如：’90 0 80’）   --logfile 或不久 -l - 将日志保存在磁盘上的文件名，默认值为 ‘‘（例如: ‘/usr/user/miner.log’, ‘c:\\miner.log’)   --log_date - 在每条消息中启用/禁用日期，默认值为’0’（’0’ - 关闭或’1’ - 打开）   --log_stratum -启用/禁用与服务器通信的数据，默认值为’0’（’0’ - 关闭或’1’ - 打开）   --log_newjob - 启用/禁用有关新作业的信息，默认值为’1’（’0’ - 关闭）或 ‘1’ - on)   --templimit 或短时间 -t - 以空格分隔的温度限制列表，达到限制后，GPU 停止挖掘直到冷却（例如：’85 80 75’)   --templimit_mem 或不久 -tm - 以空格分隔的内存温度限制列表，达到限制后，GPU 停止挖掘直到冷却（例如：’95 100 105’）   --color 或很快 -c - 启用/禁用控制台的颜色输出，默认值为“1” （’0’ - 关闭或 ‘1’ - 打开）   --watchdog 或短时间 -w - 启用/禁用看门狗，看门狗监控主要挖矿进程并在发生故障或与矿池失去连接时重新启动应用程序，默认值为 ‘1 ‘ (‘0’ - off or ‘1’ - on)   --watchdog_restart_delay - 看门狗的矿工重启延迟，以秒为单位，默认值为’10’（例如：’1’）   --watchdog_mode - 矿工退出时的看门狗动作（0 - 重启矿工，1 - 重新启动系统），默认值为’0’（例如：’1’）   --min_rig_speed - 最小钻机速度，如果平均速度低于指定值，矿工退出   --report_interval - 以秒为单位的统计报告间隔，默认值为’30’（例如：’5’）   --api - 遥测服务器端口，允许您远程监控矿机状态，在浏览器中打开一个链接http://localhost:port（对于例如：’10050’, ‘20030’)   --config - 指定配置文件   --pers - equihash 算法的个性化字符串（例如：’BgoldPoW’, ‘BitcoinZ’, ‘Safecoin’）   --pec - 启用/禁用电源效率计算器。电源效率计算器显示 GPU 的能效统计数据，更高的 CPU 负载。默认值为“1”（“0”-关闭或“1”-打开）   --electricity_cost- 以美元/千瓦时为单位的电力成本，矿工将报告用于采矿   --intensity 或不久的美元 -i - 以空格分隔的强度列表（1-100），默认值为’100’（例如：’90 90 90’）   --share_check - 启用/禁用CPU上的共享检查以挖掘Ethash（’0’ - 关闭或’1’ - on), Etcash, KAWPOW 和 ProgPoW, 默认值为 ‘1’   --nvml - 启用/禁用 NVML（CUDA 设备的统计库）（’0’ - 关闭或 ‘1’ - 打开），默认值为 ‘1’   --cuda - 启用/disable CUDA platform (‘0’ - off or ‘1’ - on), 默认值为 ‘1’   --opencl - 启用/禁用 OpenCL 平台 (‘0’ - off or ‘1’ - on), 默认值为 ‘1’   --lhr - 空格分隔的 LHR 模式列表（0 - 自动，1 - 打开，2 - 关闭），仅支持 Nvidia GPU   --lhr_tune - LHR 调整值的空格分隔列表，意味着 GPU 解锁百分比（0 - 自动），仅支持 Nvidia GPU，默认值为“0”（例如：“72 71 73”）   --lhr_autotune - LHR 自动调整的空格分隔列表，0 - 关闭，1 - 打开，仅支持 Nvidia GPU（例如：’1 0 1’）   --lhr_autotune_step - LHR 自动调整步长，仅支持 Nvidia GPU，默认值是’0.5’（例如：’0.2’）   --lhr_mode - LHR模式的空格分隔列表（0 - 省电模式，1 - 最大性能模式），仅支持Nvidia GPU，默认值为’1’（例如： ‘1 0 1’)   参数   dag_mode、safe_dag、dag_limit、kernel、mt、fan、pl、cclock、cvddc、mclock、lock_voltage、lock_cclock、tfan、templimit、templimit_mem、intensity、lhr、lhr_tune、lhr_autotune、lhr_mode 可以为所有设备指定一个参数：   miner --algo ethash --server eth.2miners.com:2020 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1 --kernel 0 --templimit 80 --dag_mode 0   或者分别为每个设备，如果我们有 3 个设备：   miner --algo ethash --server eth.2miners.com:2020 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1 --kernel 0 1 1 --templimit 80 70 90 --dag_mode 0 1 2   矿机支持故障转移池，如果主池不可用，矿工切换到故障转移池，主池可用后，矿工将切换到它，例如：   miner --algo ethash --server eth.2miners.com:2020 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1 --server eu1.ethermine.org:4444 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1 --server asia.sparkpool.com:3333 --user 0x5218597d48333d4a70cce91e810007b37e2937b5.worker1   eth.2miners.com - 主池 eu1.ethermine.org和 asia.sparkpool.com - 故障转移池   `矿工在生成 DAG 时将 mt、cclock、cvddc、mclock 参数重置为默认值以避免错误 作者：清清子衿   ","categories": ["documentation"],
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
      },{
        "title": "Gminer最新版 [2022]",
        "excerpt":" Get started with GMiner  \t\t \t\t\t \t\tLatest version is 2.95 \t\tSHA256: c48891d07fbfa579eb7cd12cf9d0f3eda73ac50c00739ab4c4f50e3352b0946f *GMiner2.95.exe \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t           The new GMiner stable version is ready.   You can download GMiner 2.95 from here:   Download Now   Download (mirror)   Inside the archive you will find a file README.txt with installation instructions.   Make sure to replace the pool and wallet address by what you’re using in all files.        Requirements      CUDA compute compability 5.0+   Equihash 96,5 ~0.76GB VRAM   Equihash 144,5 ~1.76GB VRAM   Beam Hash ~3.0GB VRAM   Equihash 192,7 ~2.92GB VRAM   Equihash 210,9 ~1.01GB VRAM   CUDA 9.0+    Supported coins   \t \t\t \t\t\t# \t\t\t0 ADI \t\t \t\t \t\t\t1 \t\t\tAE Aetemity \t\t \t\t \t\t\t2 \t\t\tAION \t\t \t\t \t\t\t3 \t\t\tAKA \t\t \t\t \t\t\t4 \t\t\tANTPOOL ETH AntPool \t\t \t\t \t\t\t5 \t\t\tANTPOOL RVN AntPool \t\t \t\t \t\t\t6 \t\t\tARW \t\t \t\t \t\t\t7 \t\t\tATH \t\t \t\t \t\t\t8 \t\t\tBEAM \t\t \t\t \t\t\t9 \t\t\tBEEPOOLAE \t\t \t\t \t\t\t10 \t\t\tBEEPOOL ETC \t\t \t\t \t\t\t11 \t\t\tBEEPOOL ETH \t\t \t\t \t\t\t12 \t\t\tBEEPOOL RVN \t\t \t\t \t\t\t13 \t\t\tBINANCE ETH \t\t \t\t \t\t\t14 \t\t\tBTCZ BitcoinZ \t\t \t\t \t\t\t15 \t\t\tBTG Bitcoin Gold \t\t \t\t \t\t\t16 \t\t\tBZE BZEdge \t\t \t\t \t\t\t17 \t\t\tCLO Callisto Network \t\t \t\t \t\t\t18 \t\t\tCRAZYPOOL ETH CrazyPool \t\t \t\t \t\t\t19 \t\t\tCTXC Cortex \t\t \t\t \t\t\t20 \t\t\tDBIX \t\t \t\t \t\t\t21 \t\t\tEGEM EtherGem \t\t \t\t \t\t\t22 \t\t\tERE \t\t \t\t \t\t\t23 \t\t\tESN \t\t \t\t \t\t\t24 \t\t\tETC \t\t \t\t \t\t\t25 \t\t\tETH \t\t \t\t \t\t\t26 \t\t\tETHO Etho Protocol \t\t \t\t \t\t\t27 \t\t\tETP Metaverse ETP \t\t \t\t \t\t\t28 \t\t\tEXCC ExchangeCoin \t\t \t\t \t\t\t29 \t\t\tEXP \t\t \t\t \t\t\t30 \t\t\tEZIL ETC Ezll \t\t \t\t \t\t\t31 \t\t\tEZIL ETH Ezll \t\t \t\t \t\t\t32 \t\t\tF2POOL BEAM \t\t \t\t \t\t\t33 \t\t\tF2POOL ETC \t\t \t\t \t\t\t34 \t\t\tF2POOL ETH \t\t \t\t \t\t\t35 \t\t\tF2POOL RVN \t\t \t\t \t\t\t36 \t\t\tFLEXPOOL ETH Flexpool \t\t \t\t \t\t\t37 \t\t\tFLUX \t\t \t\t \t\t\t38 \t\t\tHIVEON ETC \t\t \t\t \t\t\t39 \t\t\tHIVEON ETH \t\t \t\t \t\t\t40 \t\t\tLTZ \t\t \t\t \t\t\t41 \t\t\tMD KAWPOW Mining Dutch \t\t \t\t \t\t\t42 \t\t\tMO Ethash \t\t \t\t \t\t\t43 \t\t\tMO AC MOAC \t\t \t\t \t\t\t44 \t\t\tMPH Etchash Mining Pool Hub \t\t \t\t \t\t\t45 \t\t\tMPH Ethash Mining Pool Hub \t\t \t\t \t\t\t46 \t\t\tMPH KAWPOW Mining Pool Hub \t\t \t\t \t\t\t47 \t\t\tMPH Zhash Mining Pool Hub \t\t \t\t \t\t\t48 \t\t\tMRR BeamHashlll Mining Rig Rentals \t\t \t\t \t\t\t49 \t\t\tMRR Equihash(125,4) Mining Rig Rentals \t\t \t\t \t\t\t50 \t\t\tMRR Equihash(150,5) Mining Rig Rentals \t\t \t\t \t\t\t51 \t\t\tMRR Equihash(192,7) Mining Rig Rentals \t\t \t\t \t\t\t52 \t\t\tMRR Equihash(210,9) Mining Rig Rentals \t\t \t\t \t\t\t53 \t\t\tMRR Etchash Mining Rig Rentals \t\t \t\t \t\t\t54 \t\t\tMRR Ethash Mining Rig Rentals \t\t \t\t \t\t\t55 \t\t\tMRR Zhash Mining Rig Rentals \t\t \t\t \t\t\t56 \t\t\tNANOPOOL ETC \t\t \t\t \t\t\t57 \t\t\tNANOPOOL ETH \t\t \t\t \t\t\t58 \t\t\tNANOPOOL RVN \t\t \t\t \t\t\t59 \t\t\tNH BeamHashlll \t\t \t\t \t\t\t60 \t\t\tNH CuckooCyde \t\t \t\t \t\t\t61 \t\t\tNH Ethash \t\t \t\t \t\t\t62 \t\t\tNH KAWPOW \t\t \t\t \t\t\t63 \t\t\tNH Zhash \t\t \t\t \t\t\t64 \t\t\tNILU \t\t \t\t \t\t\t65 \t\t\tNLP Equihash(125,4) NLPOOL \t\t \t\t \t\t\t66 \t\t\tNLP Equihash(144,5) NLPOOL \t\t \t\t \t\t\t67 \t\t\tNLP Equihash(192,7) NLPOOL \t\t \t\t \t\t\t68 \t\t\tNUKO \t\t \t\t \t\t\t69 \t\t\tPGC \t\t \t\t \t\t\t70 \t\t\tPOOLIN ETH \t\t \t\t \t\t\t71 \t\t\tPROH Equihash(144,5) Prohashing \t\t \t\t \t\t\t72 \t\t\tPROH Etchash Prohashing \t\t \t\t \t\t\t73 \t\t\tPROH Ethash Prohashing \t\t \t\t \t\t\t74 \t\t\tQKC QuarkChain \t\t \t\t \t\t\t75 \t\t\tRVN \t\t \t\t \t\t\t76 \t\t\tSPARK BEAM SparkPool \t\t \t\t \t\t\t77 \t\t\tSPARK ETH SparkPool \t\t \t\t \t\t\t78 \t\t\tSPIDER ETH Spider \t\t \t\t \t\t\t79 \t\t\tTENT TENT \t\t \t\t \t\t\t80 \t\t\tTSF Teslafunds \t\t \t\t \t\t\t81 \t\t\tUNM Etchash \t\t \t\t \t\t\t82 \t\t\tUNM Ethash \t\t \t\t \t\t\t83 \t\t\tUNM KAWPOW \t\t \t\t \t\t\t84 \t\t\tVDL \t\t \t\t \t\t\t85 \t\t\tVIABTC ETC ViaBTC \t\t \t\t \t\t\t86 \t\t\tVIABTC ETH ViaBTC \t\t \t\t \t\t\t87 \t\t\tVIABTC RVN ViaBTC \t\t \t\t \t\t\t88 \t\t\tZCH \t\t \t\t \t\t\t89 \t\t\tZCL \t\t \t\t \t\t\t90 \t\t\tZELS \t\t \t\t \t\t\t91 \t\t\tZER Zero \t\t \t\t \t\t\t92 \t\t\tZERC \t\t \t\t \t\t\t93 \t\t\tZIL Zilliqa \t\t \t\t \t\t\t94 \t\t\tZP Equihash(125,4) Zergpool \t\t \t\t \t\t\t95 \t\t\tZP Equihash(144,5) Zergpool \t\t \t\t \t\t\t96 \t\t\tZP Equihash(192,7) Zergpool \t\t \t\t \t\t\t97 \t\t\tZP Etchash Zergpool \t\t \t\t \t\t\t98 \t\t\tZP Ethash Zergpool \t\t \t\t \t\t\t99 \t\t\tZP KAWPOW Zergpool \t\t \t\t \t\t\t100 \t\t\tzpool Equihash(144,5) zpool \t\t \t\t \t\t\t101 \t\t\tzpool Equihash(192,7) zpool \t\t \t  ","categories": ["download"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/download/latest/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Gminer 2.92软件已发布 [2022]",
        "excerpt":" Get started with GMiner  \t\t \t\t\t \t\tVersion: 2.92  \t\tFile: *gminer.exe,    \t\tSHA256: ca4869b1a101a598194fab415224d3479844bb93b7ff65fd41011292c9a909f2  \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     该矿机专注于 NVIDIA 和 AMD 平台，支持最流行的算法，例如：Ethash、ProgPoW、KAWPOW、Equihash、CuckooCycle。         You can download GMiner 2.92 from here:   现在下载   现在下载   在存档中，您将找到包含安装说明的文件 README.txt。   确保将矿池和钱包地址替换为您在所有文件中使用的地址。        &nbsp;          Gminer 2.92 - 解锁100%,支持双挖, 省电,稳定, 核心频率仅1000 - 下期lolminer 1.50 百分百 更精彩  所有功能都是不用收费的，让用户可以享受挖矿带来的乐趣。        &nbsp;   ","categories": ["download"],
        "tags": ["GMiner"],
        "url": "https://gminer.info/download/2.92/",
        "teaser": "https://gminer.info/assets/images/thumbs/500x300.png"
      },]
