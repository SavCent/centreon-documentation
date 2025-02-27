---
id: applications-awa-jmx
title: AWA (Automic Workload Automation) JMX
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Monitoring Connector Awa JMX brings 1 host template:
* App-Awa-JMX-custom

It brings the following Service Templates:

| Service Alias | Service Template   | Default |
|:--------------|:-------------------|:--------|
| Awa-Agent     | App-Awa-Agent-JMX  | X       |
| Awa-Queue     | App-Awa-Queue-JMX  | X       |
| Awa-Server    | App-Awa-Server-JMX | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Awa-Agent" label="Awa-Agent">

| Metric Name | Unit   |
|:------------|:-------|
| status      | string |

</TabItem>
<TabItem value="Awa-Queue" label="Awa-Queue">

| Metric Name | Unit   |
|:------------|:-------|
| status      | string |

</TabItem>
<TabItem value="Awa-Server" label="Awa-Server">

| Metric Name | Unit   |
|:------------|:-------|
| status      | string |

</TabItem>
</Tabs>

## Prerequisites

Please deploy the Jolokia agent on your AWA Server ([Jolokia download page](https://jolokia.org/download.html)). 
Ask your admin to deploy it and give you the URL.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon package on every Centreon poller expected to monitor **AWA JMX** resources:

```bash
yum install centreon-plugin-Applications-Awa-Jmx
```

2. On the Centreon Web interface, install the **Awa JMX** Centreon Monitoring Connector on the **Configuration > Monitoring Connectors Manager** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon poller expected to monitor **AWA JMX** resources:

```bash
yum install centreon-plugin-Applications-Awa-Jmx
```

2. Install the **Awa JMX** Centreon Monitoring Connector RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-awa-jmx
```

3. On the Centreon Web interface, install the **Awa JMX** Centreon Monitoring Connector on the **Configuration > Monitoring Connectors Manager** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **AWA JMX** server settings
* Select the **applications-awa-jmx-custom** template to apply to the Host
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name         | Description                                                                        |
|:----------|:-------------|:-----------------------------------------------------------------------------------|
|           | EXTRAOPTIONS | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Poller CLI using the 
**centreon-engine** user account and test the Plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins//centreon_awa_jmx.pl \
    --plugin=apps::java::awa::jmx::plugin \
    --mode=queue \
    --custommode=jolokia \
    --url='' \
    --username='' \
    --password='' \
    --filter-name='' \
    --warning-status='' \
    --critical-status='%{status} !~ /GREEN/i' \
    --use-new-perfdata 
```

The expected command output is shown below:

```bash
OK:  All queues are ok 
```

This command would trigger a CRITICAL alarm if the queue status isn't equal to 'GREEN'
(`--critical-status='%{status} !~ /GREEN/i'`).

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_awa_jmx.pl \
    --plugin=apps::java::awa::jmx::plugin \
    --mode=queue \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_awa_jmx.pl \
    --plugin=apps::java::awa::jmx::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../getting-started/how-to-guides/troubleshooting-plugins.md)