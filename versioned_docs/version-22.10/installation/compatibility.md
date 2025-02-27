---
id: compatibility
title: Compatibility
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Centreon web interface

The Centreon web interface is compatible with the following web browsers:

* Google Chrome (latest version at the time of Centreon software release and above).  Please visit the [Google Chrome FAQ](https://support.google.com/chrome/a/answer/188447?hl=en) for a description of the Chrome support policy. 
* Mozilla Firefox (latest version at the time of Centreon software release and above).  Please visit the [Mozilla FAQ](https://www.mozilla.org/en-US/firefox/organizations/faq/) for a description of the Firefox support policy.
* Apple Safari (latest version at the time of Centreon software release and above)
* Microsoft Edge Chromium (latest version at the time of Centreon software release and above)

If an update to those supported browsers was to cause an incompatibility, Centreon would work on a fix in the shortest possible time (for supported Centreon versions). Though other browsers may work, Centreon will not attempt to resolve problems with browsers other than those listed above.

Your screen resolution must be at least 1280 x 768.

## Software

### Operating Systems

Centreon supports the following operating systems: CentOS 7, AlmaLinux 8, RedHat/OracleLinux 7 or 8, Debian 11.

| Version                  | Installation mode                                      |
|--------------------------|--------------------------------------------------------|
| RHEL/Oracle Linux 8      | RPM packages, sources                                  |
| Alma Linux 8             | RPM packages, virtual machine, sources                 |
| Debian 11                | DEB packages                                           |
| CentOS 7                 | RPM packages, virtual machine, sources                 |
| RHEL/Oracle Linux 7      | RPM packages, sources                                  |

> We do not recommend installing Centreon on CentOS 7 or RHEL/Oracle Linux 7. Indeed, as of Centreon 23.04, only EL 8/9 and Debian 11 will be supported.

Open Source users, without a support contract, can use another GNU/Linux operating system.
This will require installing the platform from source files and therefore be more complex.
Bear in mind that IT Edition and Business Edition modules do not work yet on unsupported distributions.

> Only 64-bit operating systems (x86_64) are supported.

### DBMS

> Centreon supports MariaDB. You can use another DBMS based on MySQL, but it will only be supported by the community.

| Software | Version |
|----------|---------|
| MariaDB  | 10.5.x  |
