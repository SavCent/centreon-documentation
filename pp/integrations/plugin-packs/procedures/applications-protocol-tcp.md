---
id: applications-protocol-tcp
title: TCP Protocol
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Monitoring Connector **Protocol TCP** brings 2 host templates:

* App-Protocol-Tcp
* App-Protocol-Tcp-Only

The connector brings the following service templates (sorted by host template):

<Tabs groupId="sync">
<TabItem value="App-Protocol-Tcp" label="App-Protocol-Tcp">

| Service Alias | Service Template  | Service Description |
|:--------------|:------------------|:--------------------|
| N/A           | N/A               | N/A                 |

</TabItem>
<TabItem value="App-Protocol-Tcp-Only" label="App-Protocol-Tcp-Only">

| Service Alias | Service Template  | Service Description |
|:--------------|:------------------|:--------------------|
| N/A           | N/A               | N/A                 |

</TabItem>
<TabItem value="No host template" label="No host template">

| Service Alias     | Service Template                   | Service Description          |
|:------------------|:-----------------------------------|:-----------------------------|
| Connection-Status | App-Protocol-Tcp-Connection-Status | Check TCP connection status  |
| Response-Time     | App-Protocol-Tcp-Response-Time     | Check TCP port response time |

> These services are not automatically created when the host template is applied.

</TabItem>
</Tabs>



### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Connection-Status" label="Connection-Status">

| Metric name               | Unit  |
|:--------------------------|:------|
| status                    | N/A   |
| tcp.response.time.seconds | s     |

</TabItem>
<TabItem value="Response-Time" label="Response-Time">

| Metric name                             | Unit  |
|:----------------------------------------|:------|
| tcp.roundtrip.time.average.milliseconds | ms    |
| tcp.roundtrip.time.maximum.milliseconds | ms    |
| tcp.roundtrip.time.minimum.milliseconds | ms    |
| tcp.packets.loss.percentage             | %     |

</TabItem>
</Tabs>

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-protocol-tcp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-protocol-tcp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-protocol-tcp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-protocol-tcp
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Protocol TCP** Pack through
the **Configuration > Monitoring Connectors Manager** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/docs/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Protocol-Tcp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-Protocol-Tcp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Protocol-Tcp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-protocol-tcp
```

</TabItem>
</Tabs>

## Configuration

### Host

<Tabs groupId="sync">
<TabItem value="App-Protocol-Tcp" label="App-Protocol-Tcp">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Protocol-Tcp-custom** template to the host.

| Mandatory   | Macro                | Description | Default |
|:------------|:---------------------|:------------|:--------|
|             | TCPPACKETLOSSPERCENT |             | 50      |
|             | TCPPACKETS           |             | 1       |
|             | TCPPORT              |             | 80      |
|             | TCPTIMEOUT           |             | 3       |

</TabItem>
<TabItem value="App-Protocol-Tcp-Only" label="App-Protocol-Tcp-Only">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Protocol-Tcp-Only-custom** template to the host.
4. Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro                | Description | Default |
|:------------|:---------------------|:------------|:--------|
|             | TCPPACKETLOSSPERCENT |             | 50      |
|             | TCPPACKETS           |             | 1       |
|             | TCPPORT              |             | 80      |
|             | TCPTIMEOUT           |             | 3       |

</TabItem>
</Tabs>


### Service 

Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

<Tabs groupId="sync">
<TabItem value="Connection-Status" label="Connection-Status">

| Mandatory   | Macro        | Description                                                                     | Default |
|:------------|:-------------|:--------------------------------------------------------------------------------|:--------|
|             | TIMEOUT      | Connection timeout in seconds (Default: 3)                                      | 5       |
|             | PORT         | Port used                                                                       |         |
|             | WARNING      |                                                                                 |         |
|             | CRITICAL     |                                                                                 |         |
|             | EXTRAOPTIONS | Any extra option you may want to add to the command line (eg. a --verbose flag) |         |

</TabItem>
<TabItem value="Response-Time" label="Response-Time">

| Mandatory   | Macro         | Description                                                                     | Default |
|:------------|:--------------|:--------------------------------------------------------------------------------|:--------|
|             | PACKETS       | Number of packets to send (Default: 5)                                          | 5       |
|             | TIMEOUT       | Set timeout in seconds (Default: 5)                                             | 5       |
|             | PORT          | Port used                                                                       |         |
|             | WARNINGPL     | Packets lost threshold warning in %                                             |         |
|             | CRITICALPL    | Packets lost threshold critical in %                                            |         |
|             | WARNINGRTA    | Response time threshold warning in milliseconds                                 |         |
|             | CRITICALRTA   | Response time threshold critical in milliseconds                                |         |
|             | WARNINGRTMAX  |                                                                                 |         |
|             | CRITICALRTMAX |                                                                                 |         |
|             | WARNINGRTMIN  |                                                                                 |         |
|             | CRITICALRTMIN |                                                                                 |         |
|             | EXTRAOPTIONS  | Any extra option you may want to add to the command line (eg. a --verbose flag) |         |

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_protocol_tcp.pl \
	--plugin=apps::protocols::tcp::plugin \
	--mode=response-time  \
	--hostname='10.0.0.1' \
	--port='80' \
	--timeout='' \
	--warning-rta='' \
	--critical-rta='' \
	--warning-rtmax='' \
	--critical-rtmax='' \
	--warning-rtmin='' \
	--critical-rtmin='' \
	--warning-pl='' \
	--critical-pl='' \
	
```

The expected command output is shown below:

```bash
OK: TCP '10.0.0.1' port 80 rta 0.633ms, lost 0% | 'tcp.roundtrip.time.average.milliseconds'=0.633ms;;;0; 'tcp.roundtrip.time.maximum.milliseconds'=2.145ms;;;0; 'tcp.roundtrip.time.minimum.milliseconds'=0.193ms;;;0; 'tcp.packets.loss.percentage'=0%;;;0;100
```

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_protocol_tcp.pl \
	--plugin=apps::protocols::tcp::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode              | Linked service template            |
|:------------------|:-----------------------------------|
| connection-status | App-Protocol-Tcp-Connection-Status |
| response-time     | App-Protocol-Tcp-Response-Time     |



### Available options

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Type   |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|
| --mode                                     | Choose a mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global |
| --dyn-mode                                 | Specify a mode with the path (separated by '::').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global |
| --list-mode                                | List available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global |
| --version                                  | Display plugin version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --pass-manager                             | Use a password manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --verbose                                  | Display long output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --debug                                    | Display also debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --filter-perfdata                          | Filter perfdata that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --filter-perfdata-adv                      | Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --explode-perfdata-max                     | Put max perfdata (if it exist) in a specific perfdata (without values: same with '\_max' suffix) (Multiple options)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output |
| --extend-perfdata-group                    | Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output |
| --change-short-output --change-long-output | Change short/long output display: --change-short-output=pattern~replace~modifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --change-exit                              | Change exit code: --change-exit=unknown=critical                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output |
| --filter-uom                               | Filter UOM that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --opt-exit                                 | Optional exit code for an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc) (Default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --output-ignore-perfdata                   | Remove perfdata from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --output-ignore-label                      | Remove label status from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --output-xml                               | Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output |
| --output-json                              | Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --output-openmetrics                       | Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --output-file                              | Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --disco-format                             | Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output |
| --disco-show                               | Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --float-precision                          | Set the float precision for thresholds (Default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --source-encoding                          | Set encoding of monitoring sources (In some case. Default: 'UTF-8').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |



#### Modes options

All  modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Connection-Status" label="Connection-Status">

| Option            | Description                                                                                                                                    | Type |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --hostname        | IP Addr/FQDN of the host                                                                                                                       | Mode |
| --port            | Port used                                                                                                                                      | Mode |
| --ssl             | Use SSL connection. (no attempt is made to check the certificatevalidity by default).                                                          | Mode |
| --timeout         | Connection timeout in seconds (Default: 3)                                                                                                     | Mode |
| --unknown-status  | Set unknown threshold for status. Can used special variables like: %{status}, %{port}, %{error\_message}                                       | Mode |
| --warning-status  | Set warning threshold for status. Can used special variables like: %{status}, %{port}, %{error\_message}                                       | Mode |
| --critical-status | Set critical threshold for status (Default: '%{status} eq "failed"'). Can used special variables like: %{status}, %{port}, %{error\_message}   | Mode |
| --warning-time    | Threshold warning in seconds                                                                                                                   | Mode |
| --critical-time   | Threshold critical in seconds                                                                                                                  | Mode |

</TabItem>
<TabItem value="Response-Time" label="Response-Time">

| Option            | Description                                                                          | Type |
|:------------------|:-------------------------------------------------------------------------------------|:-----|
| --filter-counters | Only display some counters (regexp can be used). Example : --filter-counters='rta'   | Mode |
| --hostname        | IP Addr/FQDN of the host                                                             | Mode |
| --port            | Port used                                                                            | Mode |
| --timeout         | Set timeout in seconds (Default: 5).                                                 | Mode |
| --packets         | Number of packets to send (Default: 5).                                              | Mode |
| --warning-rta     | Response time threshold warning in milliseconds                                      | Mode |
| --critical-rta    | Response time threshold critical in milliseconds                                     | Mode |
| --warning-pl      | Packets lost threshold warning in %                                                  | Mode |
| --critical-pl     | Packets lost threshold critical in %                                                 | Mode |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_protocol_tcp.pl \
	--plugin=apps::protocols::tcp::plugin \
	--mode=connection-status  \
    --help
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.