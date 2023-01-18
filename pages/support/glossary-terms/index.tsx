import SupportFooterNav from "../../../components/supportFooterNav/supportFooterNav";
import SupportLayout from "../../../components/supportLayout/supportLayout";
import styles from "./glossaryTerms.module.scss";

const GlossaryOfTerms = () => (
  <div className={styles.glossaryTerms}>
    <h1>Glossary of Terms</h1>

    <table>
      <tbody>
        <tr>
          <th>Term</th>
          <th>Meaning</th>
        </tr>
        <tr>
          <td>absolute limit</td>
          <td>
            &nbsp;Impassable limits for guest VMs. Settings include total RAM size, maximum number
            of vCPUs, and maximum disk size.
          </td>
        </tr>
        <tr>
          <td>access control list (ACL)</td>
          <td>
            &nbsp;A list of permissions attached to an object. An ACL specifies which users or
            system processes have access to objects. It also defines which operations can be
            performed on specified objects. Each entry in a typical ACL specifies a subject and an
            operation. For instance, the ACL entry (Alice, delete) for a file gives Alice permission
            to delete the file.
          </td>
        </tr>
        <tr>
          <td>access key</td>
          <td>&nbsp;Alternative term for an Amazon EC2 access key. See EC2 access key.</td>
        </tr>
        <tr>
          <td>Access Token</td>
          <td>An authorization mechanism created by the&nbsp;Data Portal&nbsp;to access data.</td>
        </tr>
        <tr>
          <td>address pool</td>
          <td>
            &nbsp;A group of fixed and/or floating IP addresses that are assigned to a project and
            can be used by or assigned to the VM instances in a project.
          </td>
        </tr>
        <tr>
          <td>administrator</td>
          <td>
            &nbsp;The person responsible for installing, configuring, and managing an OpenStack
            cloud.
          </td>
        </tr>
        <tr>
          <td>allocate</td>
          <td>
            &nbsp;The process of taking a floating IP address from the address pool so it can be
            associated with a fixed IP on a guest VM instance.
          </td>
        </tr>
        <tr>
          <td>API endpoint</td>
          <td>
            &nbsp;The daemon, worker, or service that a client communicates with to access an API.
            API endpoints can provide any number of services, such as authentication, sales data,
            performance meters, Compute VM commands, census data, and so on.
          </td>
        </tr>
        <tr>
          <td>API key</td>
          <td>&nbsp;Alternative term for an API token.</td>
        </tr>
        <tr>
          <td>API server</td>
          <td>&nbsp;Any node running a daemon or worker that provides an API endpoint.</td>
        </tr>
        <tr>
          <td>API token</td>
          <td>
            &nbsp;Passed to API requests and used by OpenStack to verify that the client is
            authorized to run the requested operation.
          </td>
        </tr>
        <tr>
          <td>API version</td>
          <td>
            &nbsp;In OpenStack, the API version for a project is part of the URL. For example,{" "}
            <a href="http://example.com/nova/v1/foobar">example.com/nova/v1/foobar</a>.
          </td>
        </tr>
        <tr>
          <td>Application Programming Interface (API)</td>
          <td>
            &nbsp;A collection of specifications used to access a service, application, or program.
            Includes service calls, required parameters for each call, and the expected return
            values.
          </td>
        </tr>
        <tr>
          <td>Address Resolution Protocol (ARP)</td>
          <td>
            &nbsp;The protocol by which layer-3 IP addresses are resolved into layer-2 link local
            addresses.
          </td>
        </tr>
        <tr>
          <td>arptables</td>
          <td>
            &nbsp;Tool used for maintaining Address Resolution Protocol packet filter rules in the
            Linux kernel firewall modules. Used along with iptables, ebtables, and ip6tables in
            Compute to provide firewall services for VMs.
          </td>
        </tr>
        <tr>
          <td>associate</td>
          <td>
            &nbsp;The process associating a Compute floating IP address with a fixed IP address.
          </td>
        </tr>
        <tr>
          <td>attach</td>
          <td>
            &nbsp;The process of connecting a VIF or vNIC to a L2 network in Networking. In the
            context of Compute, this process connects a storage volume to an instance.
          </td>
        </tr>
        <tr>
          <td>attachment (network)</td>
          <td>
            &nbsp;Association of an interface ID to a logical port. Plugs an interface into a port.
          </td>
        </tr>
        <tr>
          <td>authentication</td>
          <td>
            &nbsp;The process that confirms that the user, process, or client is really who they say
            they are through private key, secret token, password, fingerprint, or similar method.
          </td>
        </tr>
        <tr>
          <td>authentication token</td>
          <td>
            &nbsp;A string of text provided to the client after authentication. Must be provided by
            the user or process in subsequent requests to the API endpoint.
          </td>
        </tr>
        <tr>
          <td>authorization</td>
          <td>
            &nbsp;The act of verifying that a user, process, or client is authorized to perform an
            action.
          </td>
        </tr>
        <tr>
          <td>availability zone</td>
          <td>
            &nbsp;An Amazon EC2 concept of an isolated area that is used for fault tolerance. Do not
            confuse with an OpenStack Compute zone or cell.
          </td>
        </tr>
        <tr>
          <td>AWS CloudFormation template</td>
          <td>
            &nbsp;AWS CloudFormation allows Amazon Web Services (AWS) users to create and manage a
            collection of related resources. The Orchestration service supports a
            CloudFormation-compatible format (CFN).
          </td>
        </tr>
        <tr>
          <td>back end</td>
          <td>
            &nbsp;Interactions and processes that are obfuscated from the user, such as Compute
            volume mount, data transmission to an iSCSI target by a daemon, or Object Storage object
            integrity checks.
          </td>
        </tr>
        <tr>
          <td>back-end catalog</td>
          <td>
            &nbsp;The storage method used by the Identity service catalog service to store and
            retrieve information about API endpoints that are available to the client. Examples
            include an SQL database, LDAP database, or KVS back end.
          </td>
        </tr>
        <tr>
          <td>back-end store</td>
          <td>
            &nbsp;The persistent data store used to save and retrieve information for a service,
            such as lists of Object Storage objects, current state of guest VMs, lists of user
            names, and so on. Also, the method that the Image service uses to get and store VM
            images. Options include Object Storage, locally mounted file system, RADOS block
            devices, VMware datastore, and HTTP.
          </td>
        </tr>
        <tr>
          <td>bandwidth</td>
          <td>
            &nbsp;The amount of available data used by communication resources, such as the
            Internet. Represents the amount of data that is used to download things or the amount of
            data available to download.
          </td>
        </tr>
        <tr>
          <td>Bare Metal service (ironic)</td>
          <td>
            &nbsp;The OpenStack service that provides a service and associated libraries capable of
            managing and provisioning physical machines in a security-aware and fault-tolerant
            manner.
          </td>
        </tr>
        <tr>
          <td>base image</td>
          <td>&nbsp;An OpenStack-provided image.</td>
        </tr>
        <tr>
          <td>binary</td>
          <td>
            &nbsp;Information that consists solely of ones and zeroes, which is the language of
            computers.
          </td>
        </tr>
        <tr>
          <td>bit</td>
          <td>
            &nbsp;A bit is a single digit number that is in base of 2 (either a zero or one).
            Bandwidth usage is measured in bits per second.
          </td>
        </tr>
        <tr>
          <td>bits per second (BPS)</td>
          <td>
            &nbsp;The universal measurement of how quickly data is transferred from place to place.
          </td>
        </tr>
        <tr>
          <td>block device</td>
          <td>
            &nbsp;A device that moves data in the form of blocks. These device nodes interface the
            devices, such as hard disks, CD-ROM drives, flash drives, and other addressable regions
            of memory.
          </td>
        </tr>
        <tr>
          <td>block migration</td>
          <td>
            &nbsp;A method of VM live migration used by KVM to evacuate instances from one host to
            another with very little downtime during a user-initiated switchover. Does not require
            shared storage. Supported by Compute.
          </td>
        </tr>
        <tr>
          <td>Block Storage service (cinder)</td>
          <td>
            &nbsp;The OpenStack service that implement services and libraries to provide on-demand,
            self-service access to Block Storage resources via abstraction and automation on top of
            other block storage devices.
          </td>
        </tr>
        <tr>
          <td>Block Storage API</td>
          <td>
            &nbsp;An API on a separate endpoint for attaching, detaching, and creating block storage
            for compute VMs.
          </td>
        </tr>
        <tr>
          <td>bootable disk image</td>
          <td>&nbsp;A type of VM image that exists as a single, bootable file.</td>
        </tr>
        <tr>
          <td>Bootstrap Protocol (BOOTP)</td>
          <td>
            &nbsp;A network protocol used by a network client to obtain an IP address from a
            configuration server. Provided in Compute through the dnsmasq daemon when using either
            the FlatDHCP manager or VLAN manager network manager.
          </td>
        </tr>
        <tr>
          <td>browser</td>
          <td>
            &nbsp;Any client software that enables a computer or device to access the Internet.
          </td>
        </tr>
        <tr>
          <td>Bundle ID</td>
          <td>
            An identifier that refers to a submission bundle of related files. Typically the files
            produced by analysis workflows are packaged as a single unit. However, when a bundle is
            imported into a cloud repository each file in the bundle is given its own Object ID.
          </td>
        </tr>
        <tr>
          <td>bursting</td>
          <td>
            &nbsp;The practice of utilizing a secondary environment to elastically build instances
            on-demand when the primary environment is resource constrained.
          </td>
        </tr>
        <tr>
          <td>byte</td>
          <td>
            &nbsp;Set of bits that make up a single character; there are usually 8 bits to a byte.
          </td>
        </tr>
        <tr>
          <td>capacity cache</td>
          <td>
            &nbsp;A Compute back-end database table that contains the current workload, amount of
            free RAM, and number of VMs running on each host. Used to determine on which host a VM
            starts.
          </td>
        </tr>
        <tr>
          <td>catalog</td>
          <td>
            &nbsp;A list of API endpoints that are available to a user after authentication with the
            Identity service.
          </td>
        </tr>
        <tr>
          <td>catalog service</td>
          <td>
            &nbsp;An Identity service that lists API endpoints that are available to a user after
            authentication with the Identity service.
          </td>
        </tr>
        <tr>
          <td>ceilometer</td>
          <td>
            &nbsp;Part of the OpenStack Telemetry service; gathers and stores metrics from other
            OpenStack services.
          </td>
        </tr>
        <tr>
          <td>CentOS</td>
          <td>&nbsp;A Linux distribution that is compatible with OpenStack.</td>
        </tr>
        <tr>
          <td>Ceph</td>
          <td>
            &nbsp;Massively scalable distributed storage system that consists of an object store,
            block store, and POSIX-compatible distributed file system. Compatible with OpenStack.
          </td>
        </tr>
        <tr>
          <td>CephFS</td>
          <td>&nbsp;The POSIX-compliant file system provided by Ceph.</td>
        </tr>
        <tr>
          <td>chance scheduler</td>
          <td>
            &nbsp;A scheduling method used by Compute that randomly chooses an available host from
            the pool.
          </td>
        </tr>
        <tr>
          <td>changes since</td>
          <td>
            &nbsp;A Compute API parameter that downloads changes to the requested item since your
            last request, instead of downloading a new, fresh set of data and comparing it against
            the old data.
          </td>
        </tr>
        <tr>
          <td>cinder</td>
          <td>&nbsp;Codename for Block Storage service.</td>
        </tr>
        <tr>
          <td>CirrOS</td>
          <td>
            &nbsp;A minimal Linux distribution designed for use as a test image on clouds such as
            OpenStack.
          </td>
        </tr>
        <tr>
          <td>cloud architect</td>
          <td>&nbsp;A person who plans, designs, and oversees the creation of clouds.</td>
        </tr>
        <tr>
          <td>Cloud Auditing Data Federation (CADF)</td>
          <td>
            &nbsp;Cloud Auditing Data Federation (CADF) is a specification for audit event data.
            CADF is supported by OpenStack Identity.
          </td>
        </tr>
        <tr>
          <td>cloud computing</td>
          <td>
            &nbsp;A model that enables access to a shared pool of configurable computing resources,
            such as networks, servers, storage, applications, and services, that can be rapidly
            provisioned and released with minimal management effort or service provider interaction.
          </td>
        </tr>
        <tr>
          <td>cloud controller</td>
          <td>
            &nbsp;Collection of Compute components that represent the global state of the cloud;
            talks to services, such as Identity authentication, Object Storage, and node/storage
            workers through a queue.
          </td>
        </tr>
        <tr>
          <td>cloud controller node</td>
          <td>
            &nbsp;A node that runs network, volume, API, scheduler, and image services. Each service
            may be broken out into separate nodes for scalability or availability.
          </td>
        </tr>
        <tr>
          <td>cloud-init</td>
          <td>
            &nbsp;A package commonly installed in VM images that performs initialization of an
            instance after boot using information that it retrieves from the metadata service, such
            as the SSH public key and user data.
          </td>
        </tr>
        <tr>
          <td>cloudadmin</td>
          <td>
            &nbsp;One of the default roles in the Compute RBAC system. Grants complete system
            access.
          </td>
        </tr>
        <tr>
          <td>Common Internet File System (CIFS)</td>
          <td>
            &nbsp;A file sharing protocol. It is a public or open variation of the original Server
            Message Block (SMB) protocol developed and used by Microsoft. Like the SMB protocol,
            CIFS runs at a higher level and uses the TCP/IP protocol.
          </td>
        </tr>
        <tr>
          <td>compression</td>
          <td>
            &nbsp;Reducing the size of files by special encoding, the file can be decompressed again
            to its original content. OpenStack supports compression at the Linux file system level
            but does not support compression for things such as Object Storage objects or Image
            service VM images.
          </td>
        </tr>
        <tr>
          <td>Compute service (nova)</td>
          <td>
            &nbsp;The OpenStack core project that implements services and associated libraries to
            provide massively-scalable, on-demand, self-service access to compute resources,
            including bare metal, virtual machines, and containers.
          </td>
        </tr>
        <tr>
          <td>Compute API (Nova API)</td>
          <td>
            &nbsp;The nova-api daemon provides access to nova services. Can communicate with other
            APIs, such as the Amazon EC2 API.
          </td>
        </tr>
        <tr>
          <td>compute controller</td>
          <td>
            &nbsp;The Compute component that chooses suitable hosts on which to start VM instances.
          </td>
        </tr>
        <tr>
          <td>compute host</td>
          <td>&nbsp;Physical host dedicated to running compute nodes.</td>
        </tr>
        <tr>
          <td>Compute Instance</td>
          <td>A user virtual machine operating in a cloud environment.</td>
        </tr>
        <tr>
          <td>compute node</td>
          <td>
            &nbsp;A node that runs the nova-compute daemon that manages VM instances that provide a
            wide range of services, such as web applications and analytics.
          </td>
        </tr>
        <tr>
          <td>Compute service</td>
          <td>&nbsp;Name for the Compute component that manages VMs.</td>
        </tr>
        <tr>
          <td>compute worker</td>
          <td>
            &nbsp;The Compute component that runs on each compute node and manages the VM instance
            lifecycle, including run, reboot, terminate, attach/detach volumes, and so on. Provided
            by the nova-compute daemon.
          </td>
        </tr>
        <tr>
          <td>conductor</td>
          <td>
            &nbsp;In Compute, conductor is the process that proxies database requests from the
            compute process. Using conductor improves security because compute nodes do not need
            direct access to the database.
          </td>
        </tr>
        <tr>
          <td>console log</td>
          <td>&nbsp;Contains the output from a Linux VM console in Compute.</td>
        </tr>
        <tr>
          <td>container</td>
          <td>
            &nbsp;Organizes and stores objects in Object Storage. Similar to the concept of a Linux
            directory but cannot be nested. Alternative term for an Image service container format.
          </td>
        </tr>
        <tr>
          <td>content delivery network (CDN)</td>
          <td>
            &nbsp;A content delivery network is a specialized network that is used to distribute
            content to clients, typically located close to the client for increased performance.
          </td>
        </tr>
        <tr>
          <td>controller node</td>
          <td>&nbsp;Alternative term for a cloud controller node.</td>
        </tr>
        <tr>
          <td>core API</td>
          <td>
            &nbsp;Depending on context, the core API is either the OpenStack API or the main API of
            a specific core project, such as Compute, Networking, Image service, and so on.
          </td>
        </tr>
        <tr>
          <td>core service</td>
          <td>
            &nbsp;An official OpenStack service defined as core by DefCore Committee. Currently,
            consists of Block Storage service (cinder), Compute service (nova), Identity service
            (keystone), Image service (glance), Networking service (neutron), and Object Storage
            service (swift).
          </td>
        </tr>
        <tr>
          <td>cost</td>
          <td>
            &nbsp;Under the Compute distributed scheduler, this is calculated by looking at the
            capabilities of each host relative to the flavor of the VM instance being requested.
          </td>
        </tr>
        <tr>
          <td>credentials</td>
          <td>
            &nbsp;Data that is only known to or accessible by a user and used to verify that the
            user is who he says he is. Credentials are presented to the server during
            authentication. Examples include a password, secret key, digital certificate, and
            fingerprint.
          </td>
        </tr>
        <tr>
          <td>Cross-Origin Resource Sharing (CORS)</td>
          <td>
            &nbsp;A mechanism that allows many resources (for example, fonts, JavaScript) on a web
            page to be requested from another domain outside the domain from which the resource
            originated. In particular, JavaScript‚Äôs AJAX calls can use the XMLHttpRequest
            mechanism.
          </td>
        </tr>
        <tr>
          <td>current workload</td>
          <td>
            &nbsp;An element of the Compute capacity cache that is calculated based on the number of
            build, snapshot, migrate, and resize operations currently in progress on a given host.
          </td>
        </tr>
        <tr>
          <td>customer</td>
          <td>&nbsp;Alternative term for project.</td>
        </tr>
        <tr>
          <td>customization module</td>
          <td>
            &nbsp;A user-created Python module that is loaded by horizon to change the look and feel
            of the dashboard.
          </td>
        </tr>
        <tr>
          <td>DACO</td>
          <td>
            The Data Access Compliance Office which handles requests from researchers for access to
            controlled data from the ICGC.
          </td>
        </tr>
        <tr>
          <td>DACO Cloud Access</td>
          <td>DACO access with supplemental approved Cloud Access status.</td>
        </tr>
        <tr>
          <td>daemon</td>
          <td>
            &nbsp;A process that runs in the background and waits for requests. May or may not
            listen on a TCP or UDP port. Do not confuse with a worker.
          </td>
        </tr>
        <tr>
          <td>Dashboard (horizon)</td>
          <td>
            &nbsp;OpenStack project which provides an extensible, unified, web-based user interface
            for all OpenStack services.
          </td>
        </tr>
        <tr>
          <td>data encryption</td>
          <td>
            &nbsp;Both Image service and Compute support encrypted virtual machine (VM) images (but
            not instances). In-transit data encryption is supported in OpenStack using technologies
            such as HTTPS, SSL, TLS, and SSH. Object Storage does not support object encryption at
            the application level but may support storage that uses disk encryption.
          </td>
        </tr>
        <tr>
          <td>Database service (trove)</td>
          <td>
            &nbsp;An integrated project that provides scalable and reliable Cloud
            Database-as-a-Service functionality for both relational and non-relational database
            engines.
          </td>
        </tr>
        <tr>
          <td>Data Portal</td>
          <td>
            <a href="https://dcc.icgc.org/">
              The ICGC data portal located at&nbsp;&nbsp;&nbsp;https://dcc.icgc.org.
            </a>
          </td>
        </tr>
        <tr>
          <td>Data Processing service</td>
          <td>
            &nbsp;OpenStack project that provides a scalable data-processing stack and associated
            management interfaces. The code name for the project is sahara.
          </td>
        </tr>
        <tr>
          <td>data store</td>
          <td>&nbsp;A database engine supported by the Database service.</td>
        </tr>
        <tr>
          <td>DCC</td>
          <td>
            <a href="https://icgc.org/icgc/goals-structure-policies-guidelines/coordination">
              The ICGC Data Coordination Center (&nbsp;&nbsp;DCC) performs quality assessment,
              curation and data releases and also manages the data flow from projects and centers to
              the central ICGC database and public repositories.
            </a>
          </td>
        </tr>
        <tr>
          <td>deallocate</td>
          <td>
            &nbsp;The process of removing the association between a floating IP address and a fixed
            IP address. Once this association is removed, the floating IP returns to the address
            pool.
          </td>
        </tr>
        <tr>
          <td>Debian</td>
          <td>&nbsp;A Linux distribution that is compatible with OpenStack.</td>
        </tr>
        <tr>
          <td>deduplication</td>
          <td>
            &nbsp;The process of finding duplicate data at the disk block, file, and/or object level
            to minimize storage use‚Äîcurrently unsupported within OpenStack.
          </td>
        </tr>
        <tr>
          <td>default panel</td>
          <td>
            &nbsp;The default panel that is displayed when a user accesses the horizon dashboard.
          </td>
        </tr>
        <tr>
          <td>default project</td>
          <td>
            &nbsp;New users are assigned to this project if no project is specified when a user is
            created.
          </td>
        </tr>
        <tr>
          <td>default token</td>
          <td>
            &nbsp;An Identity service token that is not associated with a specific project and is
            exchanged for a scoped token.
          </td>
        </tr>
        <tr>
          <td>delayed delete</td>
          <td>
            &nbsp;An option within Image service so that an image is deleted after a predefined
            number of seconds instead of immediately.
          </td>
        </tr>
        <tr>
          <td>delivery mode</td>
          <td>
            &nbsp;Setting for the Compute RabbitMQ message delivery mode; can be set to either
            transient or persistent.
          </td>
        </tr>
        <tr>
          <td>denial of service (DoS)</td>
          <td>
            &nbsp;Denial of service (DoS) is a short form for denial-of-service attack. This is a
            malicious attempt to prevent legitimate users from using a service.
          </td>
        </tr>
        <tr>
          <td>deprecated auth</td>
          <td>
            &nbsp;An option within Compute that enables administrators to create and manage users
            through the nova-manage command as opposed to using the Identity service.
          </td>
        </tr>
        <tr>
          <td>designate</td>
          <td>&nbsp;Code name for the DNS service project for OpenStack.</td>
        </tr>
        <tr>
          <td>developer</td>
          <td>
            &nbsp;One of the default roles in the Compute RBAC system and the default role assigned
            to a new user.
          </td>
        </tr>
        <tr>
          <td>device ID</td>
          <td>&nbsp;Maps Object Storage partitions to physical storage devices.</td>
        </tr>
        <tr>
          <td>device weight</td>
          <td>
            &nbsp;Distributes partitions proportionately across Object Storage devices based on the
            storage capacity of each device.
          </td>
        </tr>
        <tr>
          <td>DHCP agent</td>
          <td>
            &nbsp;OpenStack Networking agent that provides DHCP services for virtual networks.
          </td>
        </tr>
        <tr>
          <td>direct consumer</td>
          <td>
            &nbsp;An element of the Compute RabbitMQ that comes to life when a RPC call is executed.
            It connects to a direct exchange through a unique exclusive queue, sends the message,
            and terminates.
          </td>
        </tr>
        <tr>
          <td>direct exchange</td>
          <td>
            &nbsp;A routing table that is created within the Compute RabbitMQ during RPC calls; one
            is created for each RPC call that is invoked.
          </td>
        </tr>
        <tr>
          <td>direct publisher</td>
          <td>&nbsp;Element of RabbitMQ that provides a response to an incoming MQ message.</td>
        </tr>
        <tr>
          <td>disassociate</td>
          <td>
            &nbsp;The process of removing the association between a floating IP address and fixed IP
            and thus returning the floating IP address to the address pool.
          </td>
        </tr>
        <tr>
          <td>Discretionary Access Control (DAC)</td>
          <td>
            &nbsp;Governs the ability of subjects to access objects, while enabling users to make
            policy decisions and assign security attributes. The traditional UNIX system of users,
            groups, and read-write-execute permissions is an example of DAC.
          </td>
        </tr>
        <tr>
          <td>disk encryption</td>
          <td>
            &nbsp;The ability to encrypt data at the file system, disk partition, or whole-disk
            level. Supported within Compute VMs.
          </td>
        </tr>
        <tr>
          <td>disk format</td>
          <td>
            &nbsp;The underlying format that a disk image for a VM is stored as within the Image
            service back-end store. For example, AMI, ISO, QCOW2, VMDK, and so on.
          </td>
        </tr>
        <tr>
          <td>dispersion</td>
          <td>
            &nbsp;In Object Storage, tools to test and ensure dispersion of objects and containers
            to ensure fault tolerance.
          </td>
        </tr>
        <tr>
          <td>distributed virtual router (DVR)</td>
          <td>
            &nbsp;Mechanism for highly available multi-host routing when using OpenStack Networking
            (neutron).
          </td>
        </tr>
        <tr>
          <td>Django</td>
          <td>&nbsp;A web framework used extensively in horizon.</td>
        </tr>
        <tr>
          <td>DNS record</td>
          <td>
            &nbsp;A record that specifies information about a particular domain and belongs to the
            domain.
          </td>
        </tr>
        <tr>
          <td>DNS service</td>
          <td>
            &nbsp;OpenStack project that provides scalable, on demand, self service access to
            authoritative DNS services, in a technology-agnostic manner. The code name for the
            project is designate.
          </td>
        </tr>
        <tr>
          <td>dnsmasq</td>
          <td>
            &nbsp;Daemon that provides DNS, DHCP, BOOTP, and TFTP services for virtual networks.
          </td>
        </tr>
        <tr>
          <td>domain</td>
          <td>
            &nbsp;An Identity API v3 entity. Represents a collection of projects, groups and users
            that defines administrative boundaries for managing OpenStack Identity entities. On the
            Internet, separates a website from other sites. Often, the domain name has two or more
            parts that are separated by dots. For example, <a href="http://yahoo.com">yahoo.com</a>,{" "}
            <a href="http://usa.gov">usa.gov</a>, <a href="http://harvard.edu">harvard.edu</a>, or{" "}
            <a href="http://mail.yahoo.com">mail.yahoo.com</a>. Also, a domain is an entity or
            container of all DNS-related information containing one or more records.
          </td>
        </tr>
        <tr>
          <td>Domain Name System (DNS)</td>
          <td>
            &nbsp;A system by which Internet domain name-to-address and address-to-name resolutions
            are determined. DNS helps navigate the Internet by translating the IP address into an
            address that is easier to remember. For example, translating 111.111.111.1 into{" "}
            <a href="http://www.yahoo.com">www.yahoo.com</a>. All domains and their components, such
            as mail servers, utilize DNS to resolve to the appropriate locations. DNS servers are
            usually set up in a master-slave relationship such that failure of the master invokes
            the slave. DNS servers might also be clustered or replicated such that changes made to
            one DNS server are automatically propagated to other active servers. In Compute, the
            support that enables associating DNS entries with floating IP addresses, nodes, or cells
            so that hostnames are consistent across reboots.
          </td>
        </tr>
        <tr>
          <td>download</td>
          <td>
            &nbsp;The transfer of data, usually in the form of files, from one computer to another.
          </td>
        </tr>
        <tr>
          <td>durable exchange</td>
          <td>
            &nbsp;The Compute RabbitMQ message exchange that remains active when the server
            restarts.
          </td>
        </tr>
        <tr>
          <td>durable queue</td>
          <td>
            &nbsp;A Compute RabbitMQ message queue that remains active when the server restarts.
          </td>
        </tr>
        <tr>
          <td>Dynamic Host Configuration Protocol (DHCP)</td>
          <td>
            &nbsp;A network protocol that configures devices that are connected to a network so that
            they can communicate on that network by using the Internet Protocol (IP). The protocol
            is implemented in a client-server model where DHCP clients request configuration data,
            such as an IP address, a default route, and one or more DNS server addresses from a DHCP
            server. A method to automatically configure networking for a host at boot time. Provided
            by both Networking and Compute.
          </td>
        </tr>
        <tr>
          <td>Dynamic HyperText Markup Language (DHTML)</td>
          <td>
            &nbsp;Pages that use HTML, JavaScript, and Cascading Style Sheets to enable users to
            interact with a web page or show simple animation.
          </td>
        </tr>
        <tr>
          <td>east-west traffic</td>
          <td>
            &nbsp;Network traffic between servers in the same cloud or data center. See also
            north-south traffic.
          </td>
        </tr>
        <tr>
          <td>EBS boot volume</td>
          <td>
            &nbsp;An Amazon EBS storage volume that contains a bootable VM image, currently
            unsupported in OpenStack.
          </td>
        </tr>
        <tr>
          <td>ebtables</td>
          <td>
            &nbsp;Filtering tool for a Linux bridging firewall, enabling filtering of network
            traffic passing through a Linux bridge. Used in Compute along with arptables, iptables,
            and ip6tables to ensure isolation of network communications.
          </td>
        </tr>
        <tr>
          <td>EC2</td>
          <td>&nbsp;The Amazon commercial compute product, similar to Compute.</td>
        </tr>
        <tr>
          <td>EC2 access key</td>
          <td>&nbsp;Used along with an EC2 secret key to access the Compute EC2 API.</td>
        </tr>
        <tr>
          <td>EC2 API</td>
          <td>&nbsp;OpenStack supports accessing the Amazon EC2 API through Compute.</td>
        </tr>
        <tr>
          <td>EC2 Compatibility API</td>
          <td>&nbsp;A Compute component that enables OpenStack to communicate with Amazon EC2.</td>
        </tr>
        <tr>
          <td>EC2 secret key</td>
          <td>
            &nbsp;Used along with an EC2 access key when communicating with the Compute EC2 API;
            used to digitally sign each request.
          </td>
        </tr>
        <tr>
          <td>Elastic Block Storage (EBS)</td>
          <td>&nbsp;The Amazon commercial block storage product.</td>
        </tr>
        <tr>
          <td>encryption</td>
          <td>
            &nbsp;OpenStack supports encryption technologies such as HTTPS, SSH, SSL, TLS, digital
            certificates, and data encryption.
          </td>
        </tr>
        <tr>
          <td>endpoint</td>
          <td>&nbsp;See API endpoint.</td>
        </tr>
        <tr>
          <td>endpoint registry</td>
          <td>&nbsp;Alternative term for an Identity service catalog.</td>
        </tr>
        <tr>
          <td>encapsulation</td>
          <td>
            &nbsp;The practice of placing one packet type within another for the purposes of
            abstracting or securing data. Examples include GRE, MPLS, or IPsec.
          </td>
        </tr>
        <tr>
          <td>endpoint template</td>
          <td>
            &nbsp;A list of URL and port number endpoints that indicate where a service, such as
            Object Storage, Compute, Identity, and so on, can be accessed.
          </td>
        </tr>
        <tr>
          <td>entity</td>
          <td>
            &nbsp;Any piece of hardware or software that wants to connect to the network services
            provided by Networking, the network connectivity service. An entity can make use of
            Networking by implementing a VIF.
          </td>
        </tr>
        <tr>
          <td>ephemeral image</td>
          <td>
            &nbsp;A VM image that does not save changes made to its volumes and reverts them to
            their original state after the instance is terminated.
          </td>
        </tr>
        <tr>
          <td>ephemeral volume</td>
          <td>
            &nbsp;Volume that does not save the changes made to it and reverts to its original state
            when the current user relinquishes control.
          </td>
        </tr>
        <tr>
          <td>ESXi</td>
          <td>&nbsp;An OpenStack-supported hypervisor.</td>
        </tr>
        <tr>
          <td>ETag</td>
          <td>&nbsp;MD5 hash of an object within Object Storage, used to ensure data integrity.</td>
        </tr>
        <tr>
          <td>euca2ools</td>
          <td>
            &nbsp;A collection of command-line tools for administering VMs; most are compatible with
            OpenStack.
          </td>
        </tr>
        <tr>
          <td>Eucalyptus Kernel Image (EKI)</td>
          <td>&nbsp;Used along with an ERI to create an EMI.</td>
        </tr>
        <tr>
          <td>Eucalyptus Machine Image (EMI)</td>
          <td>&nbsp;VM image container format supported by Image service.</td>
        </tr>
        <tr>
          <td>Eucalyptus Ramdisk Image (ERI)</td>
          <td>&nbsp;Used along with an EKI to create an EMI.</td>
        </tr>
        <tr>
          <td>evacuate</td>
          <td>
            &nbsp;The process of migrating one or all virtual machine (VM) instances from one host
            to another, compatible with both shared storage live migration and block migration.
          </td>
        </tr>
        <tr>
          <td>exchange</td>
          <td>&nbsp;Alternative term for a RabbitMQ message exchange.</td>
        </tr>
        <tr>
          <td>exchange type</td>
          <td>&nbsp;A routing algorithm in the Compute RabbitMQ.</td>
        </tr>
        <tr>
          <td>exclusive queue</td>
          <td>
            &nbsp;Connected to by a direct consumer in RabbitMQ‚ÄîCompute, the message can be
            consumed only by the current connection.
          </td>
        </tr>
        <tr>
          <td>extended attributes (xattr)</td>
          <td>
            &nbsp;File system option that enables storage of additional information beyond owner,
            group, permissions, modification time, and so on. The underlying Object Storage file
            system must support extended attributes.
          </td>
        </tr>
        <tr>
          <td>extension</td>
          <td>
            &nbsp;Alternative term for an API extension or plug-in. In the context of Identity
            service, this is a call that is specific to the implementation, such as adding support
            for OpenID.
          </td>
        </tr>
        <tr>
          <td>external network</td>
          <td>&nbsp;A network segment typically used for instance Internet access.</td>
        </tr>
        <tr>
          <td>extra specs</td>
          <td>
            &nbsp;Specifies additional requirements when Compute determines where to start a new
            instance. Examples include a minimum amount of network bandwidth or a GPU.
          </td>
        </tr>
        <tr>
          <td>fan-out exchange</td>
          <td>
            &nbsp;Within RabbitMQ and Compute, it is the messaging interface that is used by the
            scheduler service to receive capability messages from the compute, volume, and network
            nodes.
          </td>
        </tr>
        <tr>
          <td>federated identity</td>
          <td>
            &nbsp;A method to establish trusts between identity providers and the OpenStack cloud.
          </td>
        </tr>
        <tr>
          <td>Fedora</td>
          <td>&nbsp;A Linux distribution compatible with OpenStack.</td>
        </tr>
        <tr>
          <td>Fibre Channel</td>
          <td>
            &nbsp;Storage protocol similar in concept to TCP/IP; encapsulates SCSI commands and
            data.
          </td>
        </tr>
        <tr>
          <td>Fibre Channel over Ethernet (FCoE)</td>
          <td>&nbsp;The fibre channel protocol tunneled within Ethernet.</td>
        </tr>
        <tr>
          <td>fill-first scheduler</td>
          <td>
            &nbsp;The Compute scheduling method that attempts to fill a host with VMs rather than
            starting new VMs on a variety of hosts.
          </td>
        </tr>
        <tr>
          <td>filter</td>
          <td>
            &nbsp;The step in the Compute scheduling process when hosts that cannot run VMs are
            eliminated and not chosen.
          </td>
        </tr>
        <tr>
          <td>firewall</td>
          <td>
            &nbsp;Used to restrict communications between hosts and/or nodes, implemented in Compute
            using iptables, arptables, ip6tables, and ebtables.
          </td>
        </tr>
        <tr>
          <td>FireWall-as-a-Service (FWaaS)</td>
          <td>&nbsp;A Networking extension that provides perimeter firewall functionality.</td>
        </tr>
        <tr>
          <td>fixed IP address</td>
          <td>
            &nbsp;An IP address that is associated with the same instance each time that instance
            boots, is generally not accessible to end users or the public Internet, and is used for
            management of the instance.
          </td>
        </tr>
        <tr>
          <td>Flat Manager</td>
          <td>
            &nbsp;The Compute component that gives IP addresses to authorized nodes and assumes
            DHCP, DNS, and routing configuration and services are provided by something else.
          </td>
        </tr>
        <tr>
          <td>flat mode injection</td>
          <td>
            &nbsp;A Compute networking method where the OS network configuration information is
            injected into the VM image before the instance starts.
          </td>
        </tr>
        <tr>
          <td>flat network</td>
          <td>
            &nbsp;Virtual network type that uses neither VLANs nor tunnels to segregate project
            traffic. Each flat network typically requires a separate underlying physical interface
            defined by bridge mappings. However, a flat network can contain multiple subnets.
          </td>
        </tr>
        <tr>
          <td>FlatDHCP Manager</td>
          <td>
            &nbsp;The Compute component that provides dnsmasq (DHCP, DNS, BOOTP, TFTP) and radvd
            (routing) services.
          </td>
        </tr>
        <tr>
          <td>flavor</td>
          <td>&nbsp;Alternative term for a VM instance type.</td>
        </tr>
        <tr>
          <td>flavor ID</td>
          <td>&nbsp;UUID for each Compute or Image service VM flavor or instance type.</td>
        </tr>
        <tr>
          <td>floating IP address</td>
          <td>
            &nbsp;An IP address that a project can associate with a VM so that the instance has the
            same public IP address each time that it boots. You create a pool of floating IP
            addresses and assign them to instances as they are launched to maintain a consistent IP
            address for maintaining DNS assignment.
          </td>
        </tr>
        <tr>
          <td>Folsom</td>
          <td>
            &nbsp;A grouped release of projects related to OpenStack that came out in the fall of
            2012, the sixth release of OpenStack. It includes Compute (nova), Object Storage
            (swift), Identity (keystone), Networking (neutron), Image service (glance), and Volumes
            or Block Storage (cinder). Folsom is the code name for the sixth release of OpenStack.
            The design summit took place in San Francisco, California, US and Folsom is a nearby
            city.
          </td>
        </tr>
        <tr>
          <td>FormPost</td>
          <td>
            &nbsp;Object Storage middleware that uploads (posts) an image through a form on a web
            page.
          </td>
        </tr>
        <tr>
          <td>freezer</td>
          <td>
            &nbsp;OpenStack project that provides backup restore and disaster recovery as a service.
          </td>
        </tr>
        <tr>
          <td>front end</td>
          <td>
            &nbsp;The point where a user interacts with a service; can be an API endpoint, the
            horizon dashboard, or a command-line tool.
          </td>
        </tr>
        <tr>
          <td>FUSE</td>
          <td>
            <a href="https://en.wikipedia.org/wiki/Filesystem_in_Userspace">
              Filesystem in Userspace&nbsp;is an operating system mechanism for Unix-like computer
              operating systems that lets non-privileged users create their own file systems without
              editing kernel code.
            </a>
          </td>
        </tr>
        <tr>
          <td>gateway</td>
          <td>
            &nbsp;An IP address, typically assigned to a router, that passes network traffic between
            different networks.
          </td>
        </tr>
        <tr>
          <td>generic receive offload (GRO)</td>
          <td>
            &nbsp;Feature of certain network interface drivers that combines many smaller received
            packets into a large packet before delivery to the kernel IP stack.
          </td>
        </tr>
        <tr>
          <td>generic routing encapsulation (GRE)</td>
          <td>
            &nbsp;Protocol that encapsulates a wide variety of network layer protocols inside
            virtual point-to-point links.
          </td>
        </tr>
        <tr>
          <td>glance</td>
          <td>&nbsp;A core project that provides the OpenStack Image service.</td>
        </tr>
        <tr>
          <td>glance API server</td>
          <td>
            &nbsp;Processes client requests for VMs, updates Image service metadata on the registry
            server, and communicates with the store adapter to upload VM images from the back-end
            store.
          </td>
        </tr>
        <tr>
          <td>glance registry</td>
          <td>&nbsp;Alternative term for the Image service image registry.</td>
        </tr>
        <tr>
          <td>global endpoint template</td>
          <td>
            &nbsp;The Identity service endpoint template that contains services available to all
            projects.
          </td>
        </tr>
        <tr>
          <td>GlusterFS</td>
          <td>&nbsp;A file system designed to aggregate NAS hosts, compatible with OpenStack.</td>
        </tr>
        <tr>
          <td>gnocchi</td>
          <td>
            &nbsp;Part of the OpenStack Telemetry service; provides an indexer and time-series
            database.
          </td>
        </tr>
        <tr>
          <td>golden image</td>
          <td>
            &nbsp;A method of operating system installation where a finalized disk image is created
            and then used by all nodes without modification.
          </td>
        </tr>
        <tr>
          <td>Governance service</td>
          <td>
            &nbsp;OpenStack project to provide Governance-as-a-Service across any collection of
            cloud services in order to monitor, enforce, and audit policy over dynamic
            infrastructure. The code name for the project is congress.
          </td>
        </tr>
        <tr>
          <td>Graphic Interchange Format (GIF)</td>
          <td>
            &nbsp;A type of image file that is commonly used for animated images on web pages.
          </td>
        </tr>
        <tr>
          <td>Graphics Processing Unit (GPU)</td>
          <td>
            &nbsp;Choosing a host based on the existence of a GPU is currently unsupported in
            OpenStack.
          </td>
        </tr>
        <tr>
          <td>Green Threads</td>
          <td>
            &nbsp;The cooperative threading model used by Python; reduces race conditions and only
            context switches when specific library calls are made. Each OpenStack service is its own
            thread.
          </td>
        </tr>
        <tr>
          <td>Grizzly</td>
          <td>
            &nbsp;The code name for the seventh release of OpenStack. The design summit took place
            in San Diego, California, US and Grizzly is an element of the state flag of California.
          </td>
        </tr>
        <tr>
          <td>Group</td>
          <td>
            &nbsp;An Identity v3 API entity. Represents a collection of users that is owned by a
            specific domain.
          </td>
        </tr>
        <tr>
          <td>guest OS</td>
          <td>&nbsp;An operating system instance running under the control of a hypervisor.</td>
        </tr>
        <tr>
          <td>Hadoop</td>
          <td>
            &nbsp;Apache Hadoop is an open source software framework that supports data-intensive
            distributed applications.
          </td>
        </tr>
        <tr>
          <td>Hadoop Distributed File System (HDFS)</td>
          <td>
            &nbsp;A distributed, highly fault-tolerant file system designed to run on low-cost
            commodity hardware.
          </td>
        </tr>
        <tr>
          <td>handover</td>
          <td>
            &nbsp;An object state in Object Storage where a new replica of the object is
            automatically created due to a drive failure.
          </td>
        </tr>
        <tr>
          <td>hard reboot</td>
          <td>
            &nbsp;A type of reboot where a physical or virtual power button is pressed as opposed to
            a graceful, proper shutdown of the operating system.
          </td>
        </tr>
        <tr>
          <td>Havana</td>
          <td>
            &nbsp;The code name for the eighth release of OpenStack. The design summit took place in
            Portland, Oregon, US and Havana is an unincorporated community in Oregon.
          </td>
        </tr>
        <tr>
          <td>heat</td>
          <td>&nbsp;Codename for the Orchestration service.</td>
        </tr>
        <tr>
          <td>Heat Orchestration Template (HOT)</td>
          <td>&nbsp;Heat input in the format native to OpenStack.</td>
        </tr>
        <tr>
          <td>health monitor</td>
          <td>
            &nbsp;Determines whether back-end members of a VIP pool can process a request. A pool
            can have several health monitors associated with it. When a pool has several monitors
            associated with it, all monitors check each member of the pool. All monitors must
            declare a member to be healthy for it to stay active.
          </td>
        </tr>
        <tr>
          <td>high availability (HA)</td>
          <td>
            &nbsp;A high availability system design approach and associated service implementation
            ensures that a prearranged level of operational performance will be met during a
            contractual measurement period. High availability systems seek to minimize system
            downtime and data loss.
          </td>
        </tr>
        <tr>
          <td>horizon</td>
          <td>&nbsp;Codename for the Dashboard.</td>
        </tr>
        <tr>
          <td>horizon plug-in</td>
          <td>&nbsp;A plug-in for the OpenStack dashboard (horizon).</td>
        </tr>
        <tr>
          <td>host</td>
          <td>&nbsp;A physical computer, not a VM instance (node).</td>
        </tr>
        <tr>
          <td>host aggregate</td>
          <td>
            &nbsp;A method to further subdivide availability zones into hypervisor pools, a
            collection of common hosts.
          </td>
        </tr>
        <tr>
          <td>Host Bus Adapter (HBA)</td>
          <td>&nbsp;Device plugged into a PCI slot, such as a fibre channel or network card.</td>
        </tr>
        <tr>
          <td>hybrid cloud</td>
          <td>
            &nbsp;A hybrid cloud is a composition of two or more clouds (private, community or
            public) that remain distinct entities but are bound together, offering the benefits of
            multiple deployment models. Hybrid cloud can also mean the ability to connect
            colocation, managed and/or dedicated services with cloud resources.
          </td>
        </tr>
        <tr>
          <td>Hyper-V</td>
          <td>&nbsp;One of the hypervisors supported by OpenStack.</td>
        </tr>
        <tr>
          <td>hyperlink</td>
          <td>
            &nbsp;Any kind of text that contains a link to some other site, commonly found in
            documents where clicking on a word or words opens up a different website.
          </td>
        </tr>
        <tr>
          <td>Hypertext Transfer Protocol (HTTP)</td>
          <td>
            &nbsp;An application protocol for distributed, collaborative, hypermedia information
            systems. It is the foundation of data communication for the World Wide Web. Hypertext is
            structured text that uses logical links (hyperlinks) between nodes containing text. HTTP
            is the protocol to exchange or transfer hypertext.
          </td>
        </tr>
        <tr>
          <td>Hypertext Transfer Protocol Secure (HTTPS)</td>
          <td>
            &nbsp;An encrypted communications protocol for secure communication over a computer
            network, with especially wide deployment on the Internet. Technically, it is not a
            protocol in and of itself; rather, it is the result of simply layering the Hypertext
            Transfer Protocol (HTTP) on top of the TLS or SSL protocol, thus adding the security
            capabilities of TLS or SSL to standard HTTP communications. Most OpenStack API endpoints
            and many inter-component communications support HTTPS communication.
          </td>
        </tr>
        <tr>
          <td>hypervisor</td>
          <td>
            &nbsp;Software that arbitrates and controls VM access to the actual underlying hardware.
          </td>
        </tr>
        <tr>
          <td>hypervisor pool</td>
          <td>&nbsp;A collection of hypervisors grouped together through host aggregates.</td>
        </tr>
        <tr>
          <td>Icehouse</td>
          <td>
            &nbsp;The code name for the ninth release of OpenStack. The design summit took place in
            Hong Kong and Ice House is a street in that city.
          </td>
        </tr>
        <tr>
          <td>ID number</td>
          <td>
            &nbsp;Unique numeric ID associated with each user in Identity, conceptually similar to a
            Linux or LDAP UID.
          </td>
        </tr>
        <tr>
          <td>Identity API</td>
          <td>&nbsp;Alternative term for the Identity service API.</td>
        </tr>
        <tr>
          <td>Identity back end</td>
          <td>
            &nbsp;The source used by Identity service to retrieve user information; an OpenLDAP
            server, for example.
          </td>
        </tr>
        <tr>
          <td>identity provider</td>
          <td>
            &nbsp;A directory service, which allows users to login with a user name and password. It
            is a typical source of authentication tokens.
          </td>
        </tr>
        <tr>
          <td>Identity service (keystone)</td>
          <td>
            &nbsp;The project that facilitates API client authentication, service discovery,
            distributed multi-tenant authorization, and auditing. It provides a central directory of
            users mapped to the OpenStack services they can access. It also registers endpoints for
            OpenStack services and acts as a common authentication system.
          </td>
        </tr>
        <tr>
          <td>Identity service API</td>
          <td>
            &nbsp;The API used to access the OpenStack Identity service provided through keystone.
          </td>
        </tr>
        <tr>
          <td>image</td>
          <td>
            &nbsp;A collection of files for a specific operating system (OS) that you use to create
            or rebuild a server. OpenStack provides pre-built images. You can also create custom
            images, or snapshots, from servers that you have launched. Custom images can be used for
            data backups or as ‚Äúgold‚Äù images for additional servers.
          </td>
        </tr>
        <tr>
          <td>Image API</td>
          <td>&nbsp;The Image service API endpoint for management of VM images.</td>
        </tr>
        <tr>
          <td>image cache</td>
          <td>
            &nbsp;Used by Image service to obtain images on the local host rather than
            re-downloading them from the image server each time one is requested.
          </td>
        </tr>
        <tr>
          <td>image ID</td>
          <td>
            &nbsp;Combination of a URI and UUID used to access Image service VM images through the
            image API.
          </td>
        </tr>
        <tr>
          <td>image membership</td>
          <td>&nbsp;A list of projects that can access a given VM image within Image service.</td>
        </tr>
        <tr>
          <td>image owner</td>
          <td>&nbsp;The project who owns an Image service virtual machine image.</td>
        </tr>
        <tr>
          <td>image registry</td>
          <td>&nbsp;A list of VM images that are available through Image service.</td>
        </tr>
        <tr>
          <td>Image service</td>
          <td>
            &nbsp;An OpenStack core project that provides discovery, registration, and delivery
            services for disk and server images. The project name of the Image service is glance.
          </td>
        </tr>
        <tr>
          <td>Image service API</td>
          <td>&nbsp;Alternative name for the glance image API.</td>
        </tr>
        <tr>
          <td>image status</td>
          <td>
            &nbsp;The current status of a VM image in Image service, not to be confused with the
            status of a running instance.
          </td>
        </tr>
        <tr>
          <td>image store</td>
          <td>
            &nbsp;The back-end store used by Image service to store VM images, options include
            Object Storage, locally mounted file system, RADOS block devices, VMware datastore, or
            HTTP.
          </td>
        </tr>
        <tr>
          <td>image UUID</td>
          <td>&nbsp;UUID used by Image service to uniquely identify each VM image.</td>
        </tr>
        <tr>
          <td>incubated project</td>
          <td>
            &nbsp;A community project may be elevated to this status and is then promoted to a core
            project.
          </td>
        </tr>
        <tr>
          <td>Infrastructure-as-a-Service (IaaS)</td>
          <td>
            &nbsp;IaaS is a provisioning model in which an organization outsources physical
            components of a data center, such as storage, hardware, servers, and networking
            components. A service provider owns the equipment and is responsible for housing,
            operating and maintaining it. The client typically pays on a per-use basis. IaaS is a
            model for providing cloud services.
          </td>
        </tr>
        <tr>
          <td>ingress filtering</td>
          <td>&nbsp;The process of filtering incoming network traffic. Supported by Compute.</td>
        </tr>
        <tr>
          <td>INI format</td>
          <td>
            &nbsp;The OpenStack configuration files use an INI format to describe options and their
            values. It consists of sections and key value pairs.
          </td>
        </tr>
        <tr>
          <td>injection</td>
          <td>
            &nbsp;The process of putting a file into a virtual machine image before the instance is
            started.
          </td>
        </tr>
        <tr>
          <td>Input/Output Operations Per Second (IOPS)</td>
          <td>
            &nbsp;IOPS are a common performance measurement used to benchmark computer storage
            devices like hard disk drives, solid state drives, and storage area networks.
          </td>
        </tr>
        <tr>
          <td>instance</td>
          <td>
            &nbsp;A running VM, or a VM in a known state such as suspended, that can be used like a
            hardware server.
          </td>
        </tr>
        <tr>
          <td>instance ID</td>
          <td>&nbsp;Alternative term for instance UUID.</td>
        </tr>
        <tr>
          <td>instance state</td>
          <td>&nbsp;The current state of a guest VM image.</td>
        </tr>
        <tr>
          <td>instance tunnels network</td>
          <td>
            &nbsp;A network segment used for instance traffic tunnels between compute nodes and the
            network node.
          </td>
        </tr>
        <tr>
          <td>instance type</td>
          <td>
            &nbsp;Describes the parameters of the various virtual machine images that are available
            to users; includes parameters such as CPU, storage, and memory. Alternative term for
            flavor.
          </td>
        </tr>
        <tr>
          <td>instance type ID</td>
          <td>&nbsp;Alternative term for a flavor ID.</td>
        </tr>
        <tr>
          <td>instance UUID</td>
          <td>&nbsp;Unique ID assigned to each guest VM instance.</td>
        </tr>
        <tr>
          <td>Intelligent Platform Management Interface (IPMI)</td>
          <td>
            &nbsp;IPMI is a standardized computer system interface used by system administrators for
            out-of-band management of computer systems and monitoring of their operation. In
            layman‚Äôs terms, it is a way to manage a computer using a direct network connection,
            whether it is turned on or not; connecting to the hardware rather than an operating
            system or login shell.
          </td>
        </tr>
        <tr>
          <td>interface</td>
          <td>
            &nbsp;A physical or virtual device that provides connectivity to another device or
            medium.
          </td>
        </tr>
        <tr>
          <td>interface ID</td>
          <td>&nbsp;Unique ID for a Networking VIF or vNIC in the form of a UUID.</td>
        </tr>
        <tr>
          <td>Internet Control Message Protocol (ICMP)</td>
          <td>
            &nbsp;A network protocol used by network devices for control messages. For example, ping
            uses ICMP to test connectivity.
          </td>
        </tr>
        <tr>
          <td>Internet protocol (IP)</td>
          <td>
            &nbsp;Principal communications protocol in the internet protocol suite for relaying
            datagrams across network boundaries.
          </td>
        </tr>
        <tr>
          <td>Internet Service Provider (ISP)</td>
          <td>&nbsp;Any business that provides Internet access to individuals or businesses.</td>
        </tr>
        <tr>
          <td>Internet Small Computer System Interface (iSCSI)</td>
          <td>
            &nbsp;Storage protocol that encapsulates SCSI frames for transport over IP networks.
            Supported by Compute, Object Storage, and Image service.
          </td>
        </tr>
        <tr>
          <td>ironic</td>
          <td>&nbsp;Codename for the Bare Metal service.</td>
        </tr>
        <tr>
          <td>IP address</td>
          <td>
            &nbsp;Number that is unique to every computer system on the Internet. Two versions of
            the Internet Protocol (IP) are in use for addresses: IPv4 and IPv6.
          </td>
        </tr>
        <tr>
          <td>IP Address Management (IPAM)</td>
          <td>
            &nbsp;The process of automating IP address allocation, deallocation, and management.
            Currently provided by Compute, melange, and Networking.
          </td>
        </tr>
        <tr>
          <td>ip6tables</td>
          <td>
            &nbsp;Tool used to set up, maintain, and inspect the tables of IPv6 packet filter rules
            in the Linux kernel. In OpenStack Compute, ip6tables is used along with arptables,
            ebtables, and iptables to create firewalls for both nodes and VMs.
          </td>
        </tr>
        <tr>
          <td>ipset</td>
          <td>
            &nbsp;Extension to iptables that allows creation of firewall rules that match entire
            ‚Äúsets‚Äù of IP addresses simultaneously. These sets reside in indexed data structures
            to increase efficiency, particularly on systems with a large quantity of rules.
          </td>
        </tr>
        <tr>
          <td>iptables</td>
          <td>
            &nbsp;Used along with arptables and ebtables, iptables create firewalls in Compute.
            iptables are the tables provided by the Linux kernel firewall (implemented as different
            Netfilter modules) and the chains and rules it stores. Different kernel modules and
            programs are currently used for different protocols: iptables applies to IPv4, ip6tables
            to IPv6, arptables to ARP, and ebtables to Ethernet frames. Requires root privilege to
            manipulate.
          </td>
        </tr>
        <tr>
          <td>iSCSI Qualified Name (IQN)</td>
          <td>
            &nbsp;IQN is the format most commonly used for iSCSI names, which uniquely identify
            nodes in an iSCSI network. All IQNs follow the pattern iqn.yyyy-mm.domain:identifier,
            where ‚Äòyyyy-mm‚Äô is the year and month in which the domain was registered,
            ‚Äòdomain‚Äô is the reversed domain name of the issuing organization, and
            ‚Äòidentifier‚Äô is an optional string which makes each IQN under the same domain
            unique. For example, ‚Äò<a href="http://iqn.2015-10.org">iqn.2015-10.org</a>
            .openstack.408ae959bce1‚Äô.
          </td>
        </tr>
        <tr>
          <td>ISO9660</td>
          <td>&nbsp;One of the VM image disk formats supported by Image service.</td>
        </tr>
        <tr>
          <td>itsec</td>
          <td>
            &nbsp;A default role in the Compute RBAC system that can quarantine an instance in any
            project.
          </td>
        </tr>
        <tr>
          <td>Java</td>
          <td>
            &nbsp;A programming language that is used to create systems that involve more than one
            computer by way of a network.
          </td>
        </tr>
        <tr>
          <td>JavaScript</td>
          <td>&nbsp;A scripting language that is used to build web pages.</td>
        </tr>
        <tr>
          <td>JavaScript Object Notation (JSON)</td>
          <td>&nbsp;One of the supported response formats in OpenStack.</td>
        </tr>
        <tr>
          <td>Jenkins</td>
          <td>&nbsp;Tool used to run jobs automatically for OpenStack development.</td>
        </tr>
        <tr>
          <td>jumbo frame</td>
          <td>
            &nbsp;Feature in modern Ethernet networks that supports frames up to approximately 9000
            bytes.
          </td>
        </tr>
        <tr>
          <td>Juno</td>
          <td>
            &nbsp;The code name for the tenth release of OpenStack. The design summit took place in
            Atlanta, Georgia, US and Juno is an unincorporated community in Georgia.
          </td>
        </tr>
        <tr>
          <td>Kerberos</td>
          <td>
            &nbsp;A network authentication protocol which works on the basis of tickets. Kerberos
            allows nodes communication over a non-secure network, and allows nodes to prove their
            identity to one another in a secure manner.
          </td>
        </tr>
        <tr>
          <td>kernel-based VM (KVM)</td>
          <td>
            &nbsp;An OpenStack-supported hypervisor. KVM is a full virtualization solution for Linux
            on x86 hardware containing virtualization extensions (Intel VT or AMD-V), ARM, IBM
            Power, and IBM zSeries. It consists of a loadable kernel module, that provides the core
            virtualization infrastructure and a processor specific module.
          </td>
        </tr>
        <tr>
          <td>Key Manager service (barbican)</td>
          <td>
            &nbsp;The project that produces a secret storage and generation system capable of
            providing key management for services wishing to enable encryption features.
          </td>
        </tr>
        <tr>
          <td>keystone</td>
          <td>&nbsp;Codename of the Identity service.</td>
        </tr>
        <tr>
          <td>Kickstart</td>
          <td>
            &nbsp;A tool to automate system configuration and installation on Red Hat, Fedora, and
            CentOS-based Linux distributions.
          </td>
        </tr>
        <tr>
          <td>large object</td>
          <td>&nbsp;An object within Object Storage that is larger than 5 GB.</td>
        </tr>
        <tr>
          <td>Launchpad</td>
          <td>&nbsp;The collaboration site for OpenStack.</td>
        </tr>
        <tr>
          <td>Layer-2 network</td>
          <td>
            &nbsp;Term used in the OSI network architecture for the data link layer. The data link
            layer is responsible for media access control, flow control and detecting and possibly
            correcting errors that may occur in the physical layer.
          </td>
        </tr>
        <tr>
          <td>Layer-3 network</td>
          <td>
            &nbsp;Term used in the OSI network architecture for the network layer. The network layer
            is responsible for packet forwarding including routing from one node to another.
          </td>
        </tr>
        <tr>
          <td>Layer-2 (L2) agent</td>
          <td>
            &nbsp;OpenStack Networking agent that provides layer-2 connectivity for virtual
            networks.
          </td>
        </tr>
        <tr>
          <td>Layer-3 (L3) agent</td>
          <td>
            &nbsp;OpenStack Networking agent that provides layer-3 (routing) services for virtual
            networks.
          </td>
        </tr>
        <tr>
          <td>Liberty</td>
          <td>
            &nbsp;The code name for the twelfth release of OpenStack. The design summit took place
            in Vancouver, Canada and Liberty is the name of a village in the Canadian province of
            Saskatchewan.
          </td>
        </tr>
        <tr>
          <td>libvirt</td>
          <td>
            &nbsp;Virtualization API library used by OpenStack to interact with many of its
            supported hypervisors.
          </td>
        </tr>
        <tr>
          <td>Lightweight Directory Access Protocol (LDAP)</td>
          <td>
            &nbsp;An application protocol for accessing and maintaining distributed directory
            information services over an IP network.
          </td>
        </tr>
        <tr>
          <td>Linux bridge</td>
          <td>
            &nbsp;Software that enables multiple VMs to share a single physical NIC within Compute.
          </td>
        </tr>
        <tr>
          <td>Linux Bridge neutron plug-in</td>
          <td>
            &nbsp;Enables a Linux bridge to understand a Networking port, interface attachment, and
            other abstractions.
          </td>
        </tr>
        <tr>
          <td>Linux containers (LXC)</td>
          <td>&nbsp;An OpenStack-supported hypervisor.</td>
        </tr>
        <tr>
          <td>live migration</td>
          <td>
            &nbsp;The ability within Compute to move running virtual machine instances from one host
            to another with only a small service interruption during switchover.
          </td>
        </tr>
        <tr>
          <td>load balancer</td>
          <td>
            &nbsp;A load balancer is a logical device that belongs to a cloud account. It is used to
            distribute workloads between multiple back-end systems or services, based on the
            criteria defined as part of its configuration.
          </td>
        </tr>
        <tr>
          <td>load balancing</td>
          <td>
            &nbsp;The process of spreading client requests between two or more nodes to improve
            performance and availability.
          </td>
        </tr>
        <tr>
          <td>Load-Balancer-as-a-Service (LBaaS)</td>
          <td>
            &nbsp;Enables Networking to distribute incoming requests evenly between designated
            instances.
          </td>
        </tr>
        <tr>
          <td>Logical Volume Manager (LVM)</td>
          <td>
            &nbsp;Provides a method of allocating space on mass-storage devices that is more
            flexible than conventional partitioning schemes.
          </td>
        </tr>
        <tr>
          <td>magnum</td>
          <td>&nbsp;Code name for the OpenStack project that provides the Containers Service.</td>
        </tr>
        <tr>
          <td>management API</td>
          <td>&nbsp;Alternative term for an admin API.</td>
        </tr>
        <tr>
          <td>management network</td>
          <td>
            &nbsp;A network segment used for administration, not accessible to the public Internet.
          </td>
        </tr>
        <tr>
          <td>manager</td>
          <td>
            &nbsp;Logical groupings of related code, such as the Block Storage volume manager or
            network manager.
          </td>
        </tr>
        <tr>
          <td>manifest</td>
          <td>&nbsp;Used to track segments of a large object within Object Storage.</td>
        </tr>
        <tr>
          <td>manifest object</td>
          <td>
            &nbsp;A special Object Storage object that contains the manifest for a large object.
          </td>
        </tr>
        <tr>
          <td>manila</td>
          <td>
            &nbsp;OpenStack project that provides shared file systems as service to applications.
          </td>
        </tr>
        <tr>
          <td>manila-share</td>
          <td>
            &nbsp;Responsible for managing Shared File System Service devices, specifically the
            back-end devices.
          </td>
        </tr>
        <tr>
          <td>maximum transmission unit (MTU)</td>
          <td>
            &nbsp;Maximum frame or packet size for a particular network medium. Typically 1500 bytes
            for Ethernet networks.
          </td>
        </tr>
        <tr>
          <td>mechanism driver</td>
          <td>
            &nbsp;A driver for the Modular Layer 2 (ML2) neutron plug-in that provides layer-2
            connectivity for virtual instances. A single OpenStack installation can use multiple
            mechanism drivers.
          </td>
        </tr>
        <tr>
          <td>melange</td>
          <td>
            &nbsp;Project name for OpenStack Network Information Service. To be merged with
            Networking.
          </td>
        </tr>
        <tr>
          <td>membership</td>
          <td>
            &nbsp;The association between an Image service VM image and a project. Enables images to
            be shared with specified projects.
          </td>
        </tr>
        <tr>
          <td>membership list</td>
          <td>&nbsp;A list of projects that can access a given VM image within Image service.</td>
        </tr>
        <tr>
          <td>memcached</td>
          <td>
            &nbsp;A distributed memory object caching system that is used by Object Storage for
            caching.
          </td>
        </tr>
        <tr>
          <td>memory overcommit</td>
          <td>
            &nbsp;The ability to start new VM instances based on the actual memory usage of a host,
            as opposed to basing the decision on the amount of RAM each running instance thinks it
            has available. Also known as RAM overcommit.
          </td>
        </tr>
        <tr>
          <td>message broker</td>
          <td>
            &nbsp;The software package used to provide AMQP messaging capabilities within Compute.
            Default package is RabbitMQ.
          </td>
        </tr>
        <tr>
          <td>message bus</td>
          <td>
            &nbsp;The main virtual communication line used by all AMQP messages for inter-cloud
            communications within Compute.
          </td>
        </tr>
        <tr>
          <td>message queue</td>
          <td>
            &nbsp;Passes requests from clients to the appropriate workers and returns the output to
            the client after the job completes.
          </td>
        </tr>
        <tr>
          <td>Message service (zaqar)</td>
          <td>
            &nbsp;The project that provides a messaging service that affords a variety of
            distributed application patterns in an efficient, scalable and highly available manner,
            and to create and maintain associated Python libraries and documentation.
          </td>
        </tr>
        <tr>
          <td>Metadata agent</td>
          <td>&nbsp;OpenStack Networking agent that provides metadata services for instances.</td>
        </tr>
        <tr>
          <td>Meta-Data Server (MDS)</td>
          <td>&nbsp;Stores CephFS metadata.</td>
        </tr>
        <tr>
          <td>migration</td>
          <td>&nbsp;The process of moving a VM instance from one host to another.</td>
        </tr>
        <tr>
          <td>mistral</td>
          <td>&nbsp;Code name for Workflow service.</td>
        </tr>
        <tr>
          <td>Mitaka</td>
          <td>
            &nbsp;The code name for the thirteenth release of OpenStack. The design summit took
            place in Tokyo, Japan. Mitaka is a city in Tokyo.
          </td>
        </tr>
        <tr>
          <td>monasca</td>
          <td>&nbsp;Codename for OpenStack Monitoring.</td>
        </tr>
        <tr>
          <td>multi-host</td>
          <td>
            &nbsp;High-availability mode for legacy (nova) networking. Each compute node handles NAT
            and DHCP and acts as a gateway for all of the VMs on it. A networking failure on one
            compute node doesn‚Äôt affect VMs on other compute nodes.
          </td>
        </tr>
        <tr>
          <td>multinic</td>
          <td>
            &nbsp;Facility in Compute that allows each virtual machine instance to have more than
            one VIF connected to it.
          </td>
        </tr>
        <tr>
          <td>murano</td>
          <td>&nbsp;Codename for the Application Catalog service.</td>
        </tr>
        <tr>
          <td>Modular Layer 2 (ML2) neutron plug-in</td>
          <td>
            &nbsp;Can concurrently use multiple layer-2 networking technologies, such as 802.1Q and
            VXLAN, in Networking.
          </td>
        </tr>
        <tr>
          <td>Monitor (LBaaS)</td>
          <td>
            &nbsp;LBaaS feature that provides availability monitoring using the ping command, TCP,
            and HTTP/HTTPS GET.
          </td>
        </tr>
        <tr>
          <td>Monitor (Mon)</td>
          <td>
            &nbsp;A Ceph component that communicates with external clients, checks data state and
            consistency, and performs quorum functions.
          </td>
        </tr>
        <tr>
          <td>Monitoring (monasca)</td>
          <td>
            &nbsp;The OpenStack service that provides a multi-tenant, highly scalable, performant,
            fault-tolerant monitoring-as-a-service solution for metrics, complex event processing
            and logging. To build an extensible platform for advanced monitoring services that can
            be used by both operators and tenants to gain operational insight and visibility,
            ensuring availability and stability.
          </td>
        </tr>
        <tr>
          <td>multi-factor authentication</td>
          <td>
            &nbsp;Authentication method that uses two or more credentials, such as a password and a
            private key. Currently not supported in Identity.
          </td>
        </tr>
        <tr>
          <td>MultiNic</td>
          <td>
            &nbsp;Facility in Compute that enables a virtual machine instance to have more than one
            VIF connected to it.
          </td>
        </tr>
        <tr>
          <td>Nebula</td>
          <td>&nbsp;Released as open source by NASA in 2010 and is the basis for Compute.</td>
        </tr>
        <tr>
          <td>netadmin</td>
          <td>
            &nbsp;One of the default roles in the Compute RBAC system. Enables the user to allocate
            publicly accessible IP addresses to instances and change firewall rules.
          </td>
        </tr>
        <tr>
          <td>NetApp volume driver</td>
          <td>
            &nbsp;Enables Compute to communicate with NetApp storage devices through the NetApp
            OnCommand Provisioning Manager.
          </td>
        </tr>
        <tr>
          <td>network</td>
          <td>
            &nbsp;A virtual network that provides connectivity between entities. For example, a
            collection of virtual ports that share network connectivity. In Networking terminology,
            a network is always a layer-2 network.
          </td>
        </tr>
        <tr>
          <td>Network Address Translation (NAT)</td>
          <td>
            &nbsp;Process of modifying IP address information while in transit. Supported by Compute
            and Networking.
          </td>
        </tr>
        <tr>
          <td>network controller</td>
          <td>
            &nbsp;A Compute daemon that orchestrates the network configuration of nodes, including
            IP addresses, VLANs, and bridging. Also manages routing for both public and private
            networks.
          </td>
        </tr>
        <tr>
          <td>Network File System (NFS)</td>
          <td>
            &nbsp;A method for making file systems available over the network. Supported by
            OpenStack.
          </td>
        </tr>
        <tr>
          <td>network ID</td>
          <td>
            &nbsp;Unique ID assigned to each network segment within Networking. Same as network
            UUID.
          </td>
        </tr>
        <tr>
          <td>network manager</td>
          <td>
            &nbsp;The Compute component that manages various network components, such as firewall
            rules, IP address allocation, and so on.
          </td>
        </tr>
        <tr>
          <td>network namespace</td>
          <td>
            &nbsp;Linux kernel feature that provides independent virtual networking instances on a
            single host with separate routing tables and interfaces. Similar to virtual routing and
            forwarding (VRF) services on physical network equipment.
          </td>
        </tr>
        <tr>
          <td>network node</td>
          <td>&nbsp;Any compute node that runs the network worker daemon.</td>
        </tr>
        <tr>
          <td>network segment</td>
          <td>&nbsp;Represents a virtual, isolated OSI layer-2 subnet in Networking.</td>
        </tr>
        <tr>
          <td>Network Time Protocol (NTP)</td>
          <td>
            &nbsp;Method of keeping a clock for a host or node correct via communication with a
            trusted, accurate time source.
          </td>
        </tr>
        <tr>
          <td>Newton</td>
          <td>
            &nbsp;The code name for the fourteenth release of OpenStack. The design summit took
            place in Austin, Texas, US. The release is named after ‚ÄúNewton House‚Äù which is
            located at 1013 E. Ninth St., Austin, TX. which is listed on the National Register of
            Historic Places.
          </td>
        </tr>
        <tr>
          <td>network UUID</td>
          <td>&nbsp;Unique ID for a Networking network segment.</td>
        </tr>
        <tr>
          <td>network worker</td>
          <td>
            &nbsp;The nova-network worker daemon; provides services such as giving an IP address to
            a booting nova instance.
          </td>
        </tr>
        <tr>
          <td>Networking service (neutron)</td>
          <td>
            &nbsp;The OpenStack project which implements services and associated libraries to
            provide on-demand, scalable, and technology-agnostic network abstraction.
          </td>
        </tr>
        <tr>
          <td>Networking API (Neutron API)</td>
          <td>
            &nbsp;API used to access OpenStack Networking. Provides an extensible architecture to
            enable custom plug-in creation.
          </td>
        </tr>
        <tr>
          <td>neutron</td>
          <td>&nbsp;Codename for OpenStack Networking service.</td>
        </tr>
        <tr>
          <td>neutron API</td>
          <td>&nbsp;An alternative name for Networking API.</td>
        </tr>
        <tr>
          <td>neutron manager</td>
          <td>
            &nbsp;Enables Compute and Networking integration, which enables Networking to perform
            network management for guest VMs.
          </td>
        </tr>
        <tr>
          <td>neutron plug-in</td>
          <td>
            &nbsp;Interface within Networking that enables organizations to create custom plug-ins
            for advanced features, such as QoS, ACLs, or IDS.
          </td>
        </tr>
        <tr>
          <td>Nexenta volume driver</td>
          <td>&nbsp;Provides support for NexentaStor devices in Compute.</td>
        </tr>
        <tr>
          <td>Nginx</td>
          <td>
            &nbsp;An HTTP and reverse proxy server, a mail proxy server, and a generic TCP/UDP proxy
            server.
          </td>
        </tr>
        <tr>
          <td>No ACK</td>
          <td>
            &nbsp;Disables server-side message acknowledgment in the Compute RabbitMQ. Increases
            performance but decreases reliability.
          </td>
        </tr>
        <tr>
          <td>node</td>
          <td>&nbsp;A VM instance that runs on a host.</td>
        </tr>
        <tr>
          <td>non-durable exchange</td>
          <td>
            &nbsp;Message exchange that is cleared when the service restarts. Its data is not
            written to persistent storage.
          </td>
        </tr>
        <tr>
          <td>non-durable queue</td>
          <td>
            &nbsp;Message queue that is cleared when the service restarts. Its data is not written
            to persistent storage.
          </td>
        </tr>
        <tr>
          <td>non-persistent volume</td>
          <td>&nbsp;Alternative term for an ephemeral volume.</td>
        </tr>
        <tr>
          <td>north-south traffic</td>
          <td>
            &nbsp;Network traffic between a user or client (north) and a server (south), or traffic
            into the cloud (south) and out of the cloud (north). See also east-west traffic.
          </td>
        </tr>
        <tr>
          <td>nova</td>
          <td>&nbsp;Codename for OpenStack Compute service.</td>
        </tr>
        <tr>
          <td>Nova API</td>
          <td>&nbsp;Alternative term for the Compute API.</td>
        </tr>
        <tr>
          <td>nova-network</td>
          <td>
            &nbsp;A Compute component that manages IP address allocation, firewalls, and other
            network-related tasks. This is the legacy networking option and an alternative to
            Networking.
          </td>
        </tr>
        <tr>
          <td>object</td>
          <td>&nbsp;A BLOB of data held by Object Storage; can be in any format.</td>
        </tr>
        <tr>
          <td>Ocata</td>
          <td>
            &nbsp;The code name for the fifteenth release of OpenStack. The design summit will take
            place in Barcelona, Spain. Ocata is a beach north of Barcelona.
          </td>
        </tr>
        <tr>
          <td>Oldie</td>
          <td>
            &nbsp;Term for an Object Storage process that runs for a long time. Can indicate a hung
            process.
          </td>
        </tr>
        <tr>
          <td>Open Cloud Computing Interface (OCCI)</td>
          <td>
            &nbsp;A standardized interface for managing compute, data, and network resources,
            currently unsupported in OpenStack.
          </td>
        </tr>
        <tr>
          <td>Open Virtualization Format (OVF)</td>
          <td>&nbsp;Standard for packaging VM images. Supported in OpenStack.</td>
        </tr>
        <tr>
          <td>Open vSwitch</td>
          <td>
            &nbsp;Open vSwitch is a production quality, multilayer virtual switch licensed under the
            open source Apache 2.0 license. It is designed to enable massive network automation
            through programmatic extension, while still supporting standard management interfaces
            and protocols (for example NetFlow, sFlow, SPAN, RSPAN, CLI, LACP, 802.1ag).
          </td>
        </tr>
        <tr>
          <td>Open vSwitch (OVS) agent</td>
          <td>
            &nbsp;Provides an interface to the underlying Open vSwitch service for the Networking
            plug-in.
          </td>
        </tr>
        <tr>
          <td>Open vSwitch neutron plug-in</td>
          <td>&nbsp;Provides support for Open vSwitch in Networking.</td>
        </tr>
        <tr>
          <td>OpenLDAP</td>
          <td>&nbsp;An open source LDAP server. Supported by both Compute and Identity.</td>
        </tr>
        <tr>
          <td>OpenStack</td>
          <td>
            &nbsp;OpenStack is a cloud operating system that controls large pools of compute,
            storage, and networking resources throughout a data center, all managed through a
            dashboard that gives administrators control while empowering their users to provision
            resources through a web interface. OpenStack is an open source project licensed under
            the Apache License 2.0.
          </td>
        </tr>
        <tr>
          <td>OpenStack code name</td>
          <td>
            &nbsp;Each OpenStack release has a code name. Code names ascend in alphabetical order:
            Austin, Bexar, Cactus, Diablo, Essex, Folsom, Grizzly, Havana, Icehouse, Juno, Kilo,
            Liberty, Mitaka, Newton, Ocata, Pike, and Queens. Code names are cities or counties near
            where the corresponding OpenStack design summit took place. An exception, called the
            Waldon exception, is granted to elements of the state flag that sound especially cool.
            Code names are chosen by popular vote.
          </td>
        </tr>
        <tr>
          <td>openSUSE</td>
          <td>&nbsp;A Linux distribution that is compatible with OpenStack.</td>
        </tr>
        <tr>
          <td>operator</td>
          <td>
            &nbsp;The person responsible for planning and maintaining an OpenStack installation.
          </td>
        </tr>
        <tr>
          <td>optional service</td>
          <td>
            &nbsp;An official OpenStack service defined as optional by DefCore Committee. Currently,
            consists of Dashboard (horizon), Telemetry service (Telemetry), Orchestration service
            (heat), Database service (trove), Bare Metal service (ironic), and so on.
          </td>
        </tr>
        <tr>
          <td>Orchestration service (heat)</td>
          <td>
            &nbsp;The OpenStack service which orchestrates composite cloud applications using a
            declarative template format through an OpenStack-native REST API.
          </td>
        </tr>
        <tr>
          <td>orphan</td>
          <td>
            &nbsp;In the context of Object Storage, this is a process that is not terminated after
            an upgrade, restart, or reload of the service.
          </td>
        </tr>
        <tr>
          <td>Oslo</td>
          <td>
            &nbsp;OpenStack project that produces a set of Python libraries containing code shared
            by OpenStack projects.
          </td>
        </tr>
        <tr>
          <td>panko</td>
          <td>&nbsp;Part of the OpenStack Telemetry service; provides event storage.</td>
        </tr>
        <tr>
          <td>parent cell</td>
          <td>
            &nbsp;If a requested resource, such as CPU time, disk storage, or memory, is not
            available in the parent cell, the request is forwarded to associated child cells.
          </td>
        </tr>
        <tr>
          <td>partition</td>
          <td>
            &nbsp;A unit of storage within Object Storage used to store objects. It exists on top of
            devices and is replicated for fault tolerance.
          </td>
        </tr>
        <tr>
          <td>partition index</td>
          <td>&nbsp;Contains the locations of all Object Storage partitions within the ring.</td>
        </tr>
        <tr>
          <td>partition shift value</td>
          <td>&nbsp;Used by Object Storage to determine which partition data should reside on.</td>
        </tr>
        <tr>
          <td>path MTU discovery (PMTUD)</td>
          <td>
            &nbsp;Mechanism in IP networks to detect end-to-end MTU and adjust packet size
            accordingly.
          </td>
        </tr>
        <tr>
          <td>pause</td>
          <td>
            &nbsp;A VM state where no changes occur (no changes in memory, network communications
            stop, etc); the VM is frozen but not shut down.
          </td>
        </tr>
        <tr>
          <td>PCI passthrough</td>
          <td>
            &nbsp;Gives guest VMs exclusive access to a PCI device. Currently supported in OpenStack
            Havana and later releases.
          </td>
        </tr>
        <tr>
          <td>persistent message</td>
          <td>
            &nbsp;A message that is stored both in memory and on disk. The message is not lost after
            a failure or restart.
          </td>
        </tr>
        <tr>
          <td>persistent volume</td>
          <td>&nbsp;Changes to these types of disk volumes are saved.</td>
        </tr>
        <tr>
          <td>personality file</td>
          <td>
            &nbsp;A file used to customize a Compute instance. It can be used to inject SSH keys or
            a specific network configuration.
          </td>
        </tr>
        <tr>
          <td>Pike</td>
          <td>
            &nbsp;The code name for the sixteenth release of OpenStack. The design summit will take
            place in Boston, Massachusetts, US. The release is named after the Massachusetts
            Turnpike, abbreviated commonly as the Mass Pike, which is the eastermost stretch of
            Interstate 90.
          </td>
        </tr>
        <tr>
          <td>Platform-as-a-Service (PaaS)</td>
          <td>
            &nbsp;Provides to the consumer the ability to deploy applications through a programming
            language or tools supported by the cloud platform provider. An example of
            Platform-as-a-Service is an Eclipse/Java programming platform provided with no downloads
            required.
          </td>
        </tr>
        <tr>
          <td>plug-in</td>
          <td>
            &nbsp;Software component providing the actual implementation for Networking APIs, or for
            Compute APIs, depending on the context.
          </td>
        </tr>
        <tr>
          <td>policy service</td>
          <td>
            &nbsp;Component of Identity that provides a rule-management interface and a rule-based
            authorization engine.
          </td>
        </tr>
        <tr>
          <td>pool</td>
          <td>
            &nbsp;A logical set of devices, such as web servers, that you group together to receive
            and process traffic. The load balancing function chooses which member of the pool
            handles the new requests or connections received on the VIP address. Each VIP has one
            pool.
          </td>
        </tr>
        <tr>
          <td>pool member</td>
          <td>&nbsp;An application that runs on the back-end server in a load-balancing system.</td>
        </tr>
        <tr>
          <td>port</td>
          <td>
            &nbsp;A virtual network port within Networking; VIFs / vNICs are connected to a port.
          </td>
        </tr>
        <tr>
          <td>port UUID</td>
          <td>&nbsp;Unique ID for a Networking port.</td>
        </tr>
        <tr>
          <td>preseed</td>
          <td>
            &nbsp;A tool to automate system configuration and installation on Debian-based Linux
            distributions.
          </td>
        </tr>
        <tr>
          <td>private image</td>
          <td>&nbsp;An Image service VM image that is only available to specified projects.</td>
        </tr>
        <tr>
          <td>private IP address</td>
          <td>
            &nbsp;An IP address used for management and administration, not available to the public
            Internet.
          </td>
        </tr>
        <tr>
          <td>private network</td>
          <td>
            &nbsp;The Network Controller provides virtual networks to enable compute servers to
            interact with each other and with the public network. All machines must have a public
            and private network interface. A private network interface can be a flat or VLAN network
            interface. A flat network interface is controlled by the flat_interface with flat
            managers. A VLAN network interface is controlled by the vlan_interface option with VLAN
            managers.
          </td>
        </tr>
        <tr>
          <td>project</td>
          <td>
            &nbsp;Projects represent the base unit of ‚Äúownership‚Äù in OpenStack, in that all
            resources in OpenStack should be owned by a specific project. In OpenStack Identity, a
            project must be owned by a specific domain.
          </td>
        </tr>
        <tr>
          <td>project ID</td>
          <td>&nbsp;Unique ID assigned to each project by the Identity service.</td>
        </tr>
        <tr>
          <td>project VPN</td>
          <td>&nbsp;Alternative term for a cloudpipe.</td>
        </tr>
        <tr>
          <td>promiscuous mode</td>
          <td>
            &nbsp;Causes the network interface to pass all traffic it receives to the host rather
            than passing only the frames addressed to it.
          </td>
        </tr>
        <tr>
          <td>protected property</td>
          <td>
            &nbsp;Generally, extra properties on an Image service image to which only cloud
            administrators have access. Limits which user roles can perform CRUD operations on that
            property. The cloud administrator can configure any image property as protected.
          </td>
        </tr>
        <tr>
          <td>provider</td>
          <td>&nbsp;An administrator who has access to all hosts and instances.</td>
        </tr>
        <tr>
          <td>proxy node</td>
          <td>&nbsp;A node that provides the Object Storage proxy service.</td>
        </tr>
        <tr>
          <td>proxy server</td>
          <td>
            &nbsp;Users of Object Storage interact with the service through the proxy server, which
            in turn looks up the location of the requested data within the ring and returns the
            results to the user.
          </td>
        </tr>
        <tr>
          <td>public API</td>
          <td>
            &nbsp;An API endpoint used for both service-to-service communication and end-user
            interactions.
          </td>
        </tr>
        <tr>
          <td>public image</td>
          <td>&nbsp;An Image service VM image that is available to all projects.</td>
        </tr>
        <tr>
          <td>public IP address</td>
          <td>&nbsp;An IP address that is accessible to end-users.</td>
        </tr>
        <tr>
          <td>public key authentication</td>
          <td>&nbsp;Authentication method that uses keys rather than passwords.</td>
        </tr>
        <tr>
          <td>public network</td>
          <td>
            &nbsp;The Network Controller provides virtual networks to enable compute servers to
            interact with each other and with the public network. All machines must have a public
            and private network interface. The public network interface is controlled by the
            public_interface option.
          </td>
        </tr>
        <tr>
          <td>Puppet</td>
          <td>&nbsp;An operating system configuration-management tool supported by OpenStack.</td>
        </tr>
        <tr>
          <td>Python</td>
          <td>&nbsp;Programming language used extensively in OpenStack.</td>
        </tr>
        <tr>
          <td>QEMU Copy On Write 2 (QCOW2)</td>
          <td>&nbsp;One of the VM image disk formats supported by Image service.</td>
        </tr>
        <tr>
          <td>Qpid</td>
          <td>&nbsp;Message queue software supported by OpenStack; an alternative to RabbitMQ.</td>
        </tr>
        <tr>
          <td>Quality of Service (QoS)</td>
          <td>
            &nbsp;The ability to guarantee certain network or storage requirements to satisfy a
            Service Level Agreement (SLA) between an application provider and end users. Typically
            includes performance requirements like networking bandwidth, latency, jitter correction,
            and reliability as well as storage performance in Input/Output Operations Per Second
            (IOPS), throttling agreements, and performance expectations at peak load.
          </td>
        </tr>
        <tr>
          <td>quarantine</td>
          <td>
            &nbsp;If Object Storage finds objects, containers, or accounts that are corrupt, they
            are placed in this state, are not replicated, cannot be read by clients, and a correct
            copy is re-replicated.
          </td>
        </tr>
        <tr>
          <td>Queens</td>
          <td>
            &nbsp;The code name for the seventeenth release of OpenStack. The design summit will
            take place in Sydney, Australia. The release is named after the Queens Pound river in
            the South Coast region of New South Wales.
          </td>
        </tr>
        <tr>
          <td>Quick EMUlator (QEMU)</td>
          <td>
            &nbsp;QEMU is a generic and open source machine emulator and virtualizer. One of the
            hypervisors supported by OpenStack, generally used for development purposes.
          </td>
        </tr>
        <tr>
          <td>quota</td>
          <td>
            &nbsp;In Compute and Block Storage, the ability to set resource limits on a per-project
            basis.
          </td>
        </tr>
        <tr>
          <td>RabbitMQ</td>
          <td>&nbsp;The default message queue software used by OpenStack.</td>
        </tr>
        <tr>
          <td>Rackspace Cloud Files</td>
          <td>&nbsp;Released as open source by Rackspace in 2010; the basis for Object Storage.</td>
        </tr>
        <tr>
          <td>RADOS Block Device (RBD)</td>
          <td>
            &nbsp;Ceph component that enables a Linux block device to be striped over multiple
            distributed data stores.
          </td>
        </tr>
        <tr>
          <td>radvd</td>
          <td>
            &nbsp;The router advertisement daemon, used by the Compute VLAN manager and FlatDHCP
            manager to provide routing services for VM instances.
          </td>
        </tr>
        <tr>
          <td>rally</td>
          <td>&nbsp;OpenStack project that provides the Benchmark service.</td>
        </tr>
        <tr>
          <td>RAM filter</td>
          <td>&nbsp;The Compute setting that enables or disables RAM overcommitment.</td>
        </tr>
        <tr>
          <td>RAM overcommit</td>
          <td>
            &nbsp;The ability to start new VM instances based on the actual memory usage of a host,
            as opposed to basing the decision on the amount of RAM each running instance thinks it
            has available. Also known as memory overcommit.
          </td>
        </tr>
        <tr>
          <td>rate limit</td>
          <td>
            &nbsp;Configurable option within Object Storage to limit database writes on a
            per-account and/or per-container basis.
          </td>
        </tr>
        <tr>
          <td>raw</td>
          <td>
            &nbsp;One of the VM image disk formats supported by Image service; an unstructured disk
            image.
          </td>
        </tr>
        <tr>
          <td>rebalance</td>
          <td>
            &nbsp;The process of distributing Object Storage partitions across all drives in the
            ring; used during initial ring creation and after ring reconfiguration.
          </td>
        </tr>
        <tr>
          <td>reboot</td>
          <td>
            &nbsp;Either a soft or hard reboot of a server. With a soft reboot, the operating system
            is signaled to restart, which enables a graceful shutdown of all processes. A hard
            reboot is the equivalent of power cycling the server. The virtualization platform should
            ensure that the reboot action has completed successfully, even in cases in which the
            underlying domain/VM is paused or halted/stopped.
          </td>
        </tr>
        <tr>
          <td>rebuild</td>
          <td>
            &nbsp;Removes all data on the server and replaces it with the specified image. Server ID
            and IP addresses remain the same.
          </td>
        </tr>
        <tr>
          <td>Recon</td>
          <td>&nbsp;An Object Storage component that collects meters.</td>
        </tr>
        <tr>
          <td>record</td>
          <td>
            &nbsp;Belongs to a particular domain and is used to specify information about the
            domain. There are several types of DNS records. Each record type contains particular
            information used to describe the purpose of that record. Examples include mail exchange
            (MX) records, which specify the mail server for a particular domain; and name server
            (NS) records, which specify the authoritative name servers for a domain.
          </td>
        </tr>
        <tr>
          <td>record ID</td>
          <td>
            &nbsp;A number within a database that is incremented each time a change is made. Used by
            Object Storage when replicating.
          </td>
        </tr>
        <tr>
          <td>Red Hat Enterprise Linux (RHEL)</td>
          <td>&nbsp;A Linux distribution that is compatible with OpenStack.</td>
        </tr>
        <tr>
          <td>reference architecture</td>
          <td>&nbsp;A recommended architecture for an OpenStack cloud.</td>
        </tr>
        <tr>
          <td>region</td>
          <td>
            &nbsp;A discrete OpenStack environment with dedicated API endpoints that typically
            shares only the Identity (keystone) with other regions.
          </td>
        </tr>
        <tr>
          <td>registry</td>
          <td>&nbsp;Alternative term for the Image service registry.</td>
        </tr>
        <tr>
          <td>registry server</td>
          <td>&nbsp;An Image service that provides VM image metadata information to clients.</td>
        </tr>
        <tr>
          <td>Reliable, Autonomic Distributed Object Store (RADOS)</td>
          <td>
            &nbsp;A collection of components that provides object storage within Ceph. Similar to
            OpenStack Object Storage.
          </td>
        </tr>
        <tr>
          <td>Remote Procedure Call (RPC)</td>
          <td>&nbsp;The method used by the Compute RabbitMQ for intra-service communications.</td>
        </tr>
        <tr>
          <td>replica</td>
          <td>
            &nbsp;Provides data redundancy and fault tolerance by creating copies of Object Storage
            objects, accounts, and containers so that they are not lost when the underlying storage
            fails.
          </td>
        </tr>
        <tr>
          <td>replica count</td>
          <td>&nbsp;The number of replicas of the data in an Object Storage ring.</td>
        </tr>
        <tr>
          <td>replication</td>
          <td>
            &nbsp;The process of copying data to a separate physical device for fault tolerance and
            performance.
          </td>
        </tr>
        <tr>
          <td>replicator</td>
          <td>
            &nbsp;The Object Storage back-end process that creates and manages object replicas.
          </td>
        </tr>
        <tr>
          <td>request ID</td>
          <td>&nbsp;Unique ID assigned to each request sent to Compute.</td>
        </tr>
        <tr>
          <td>rescue image</td>
          <td>
            &nbsp;A special type of VM image that is booted when an instance is placed into rescue
            mode. Allows an administrator to mount the file systems for an instance to correct the
            problem.
          </td>
        </tr>
        <tr>
          <td>resize</td>
          <td>
            &nbsp;Converts an existing server to a different flavor, which scales the server up or
            down. The original server is saved to enable rollback if a problem occurs. All resizes
            must be tested and explicitly confirmed, at which time the original server is removed.
          </td>
        </tr>
        <tr>
          <td>RESTful</td>
          <td>
            &nbsp;A kind of web service API that uses REST, or Representational State Transfer. REST
            is the style of architecture for hypermedia systems that is used for the World Wide Web.
          </td>
        </tr>
        <tr>
          <td>ring</td>
          <td>
            &nbsp;An entity that maps Object Storage data to partitions. A separate ring exists for
            each service, such as account, object, and container.
          </td>
        </tr>
        <tr>
          <td>ring builder</td>
          <td>
            &nbsp;Builds and manages rings within Object Storage, assigns partitions to devices, and
            pushes the configuration to other storage nodes.
          </td>
        </tr>
        <tr>
          <td>Role Based Access Control (RBAC)</td>
          <td>
            &nbsp;Provides a predefined list of actions that the user can perform, such as start or
            stop VMs, reset passwords, and so on. Supported in both Identity and Compute and can be
            configured using the horizon dashboard.
          </td>
        </tr>
        <tr>
          <td>role</td>
          <td>
            &nbsp;A personality that a user assumes to perform a specific set of operations. A role
            includes a set of rights and privileges. A user assuming that role inherits those rights
            and privileges.
          </td>
        </tr>
        <tr>
          <td>role ID</td>
          <td>&nbsp;Alphanumeric ID assigned to each Identity service role.</td>
        </tr>
        <tr>
          <td>rootwrap</td>
          <td>
            &nbsp;A feature of Compute that allows the unprivileged ‚Äúnova‚Äù user to run a
            specified list of commands as the Linux root user.
          </td>
        </tr>
        <tr>
          <td>round-robin scheduler</td>
          <td>
            &nbsp;Type of Compute scheduler that evenly distributes instances among available hosts.
          </td>
        </tr>
        <tr>
          <td>router</td>
          <td>
            &nbsp;A physical or virtual network device that passes network traffic between different
            networks.
          </td>
        </tr>
        <tr>
          <td>routing key</td>
          <td>
            &nbsp;The Compute direct exchanges, fanout exchanges, and topic exchanges use this key
            to determine how to process a message; processing varies depending on exchange type.
          </td>
        </tr>
        <tr>
          <td>RPC driver</td>
          <td>
            &nbsp;Modular system that allows the underlying message queue software of Compute to be
            changed. For example, from RabbitMQ to ZeroMQ or Qpid.
          </td>
        </tr>
        <tr>
          <td>rsync</td>
          <td>&nbsp;Used by Object Storage to push object replicas.</td>
        </tr>
        <tr>
          <td>RXTX cap</td>
          <td>
            &nbsp;Absolute limit on the amount of network traffic a Compute VM instance can send and
            receive.
          </td>
        </tr>
        <tr>
          <td>RXTX quota</td>
          <td>
            &nbsp;Soft limit on the amount of network traffic a Compute VM instance can send and
            receive.
          </td>
        </tr>
        <tr>
          <td>sahara</td>
          <td>
            &nbsp;OpenStack project that provides a scalable data-processing stack and associated
            management interfaces.
          </td>
        </tr>
        <tr>
          <td>SAML assertion</td>
          <td>
            &nbsp;Contains information about a user as provided by the identity provider. It is an
            indication that a user has been authenticated.
          </td>
        </tr>
        <tr>
          <td>scheduler manager</td>
          <td>
            &nbsp;A Compute component that determines where VM instances should start. Uses modular
            design to support a variety of scheduler types.
          </td>
        </tr>
        <tr>
          <td>scoped token</td>
          <td>
            &nbsp;An Identity service API access token that is associated with a specific project.
          </td>
        </tr>
        <tr>
          <td>scrubber</td>
          <td>
            &nbsp;Checks for and deletes unused VMs; the component of Image service that implements
            delayed delete.
          </td>
        </tr>
        <tr>
          <td>secret key</td>
          <td>
            &nbsp;String of text known only by the user; used along with an access key to make
            requests to the Compute API.
          </td>
        </tr>
        <tr>
          <td>secure boot</td>
          <td>
            &nbsp;Process whereby the system firmware validates the authenticity of the code
            involved in the boot process.
          </td>
        </tr>
        <tr>
          <td>secure shell (SSH)</td>
          <td>
            &nbsp;Open source tool used to access remote hosts through an encrypted communications
            channel, SSH key injection is supported by Compute.
          </td>
        </tr>
        <tr>
          <td>security group</td>
          <td>
            &nbsp;A set of network traffic filtering rules that are applied to a Compute instance.
          </td>
        </tr>
        <tr>
          <td>segmented object</td>
          <td>
            &nbsp;An Object Storage large object that has been broken up into pieces. The
            re-assembled object is called a concatenated object.
          </td>
        </tr>
        <tr>
          <td>self-service</td>
          <td>
            &nbsp;For IaaS, ability for a regular (non-privileged) account to manage a virtual
            infrastructure component such as networks without involving an administrator.
          </td>
        </tr>
        <tr>
          <td>SELinux</td>
          <td>
            &nbsp;Linux kernel security module that provides the mechanism for supporting access
            control policies.
          </td>
        </tr>
        <tr>
          <td>senlin</td>
          <td>&nbsp;OpenStack project that provides a Clustering service.</td>
        </tr>
        <tr>
          <td>server</td>
          <td>
            &nbsp;Computer that provides explicit services to the client software running on that
            system, often managing a variety of computer operations. A server is a VM instance in
            the Compute system. Flavor and image are requisite elements when creating a server.
          </td>
        </tr>
        <tr>
          <td>server image</td>
          <td>&nbsp;Alternative term for a VM image.</td>
        </tr>
        <tr>
          <td>server UUID</td>
          <td>&nbsp;Unique ID assigned to each guest VM instance.</td>
        </tr>
        <tr>
          <td>service</td>
          <td>
            &nbsp;An OpenStack service, such as Compute, Object Storage, or Image service. Provides
            one or more endpoints through which users can access resources and perform operations.
          </td>
        </tr>
        <tr>
          <td>service catalog</td>
          <td>&nbsp;Alternative term for the Identity service catalog.</td>
        </tr>
        <tr>
          <td>service ID</td>
          <td>
            &nbsp;Unique ID assigned to each service that is available in the Identity service
            catalog.
          </td>
        </tr>
        <tr>
          <td>service provider</td>
          <td>
            &nbsp;A system that provides services to other system entities. In case of federated
            identity, OpenStack Identity is the service provider.
          </td>
        </tr>
        <tr>
          <td>service registration</td>
          <td>
            &nbsp;An Identity service feature that enables services, such as Compute, to
            automatically register with the catalog.
          </td>
        </tr>
        <tr>
          <td>service project</td>
          <td>&nbsp;Special project that contains all services that are listed in the catalog.</td>
        </tr>
        <tr>
          <td>service token</td>
          <td>
            &nbsp;An administrator-defined token used by Compute to communicate securely with the
            Identity service.
          </td>
        </tr>
        <tr>
          <td>session back end</td>
          <td>
            &nbsp;The method of storage used by horizon to track client sessions, such as local
            memory, cookies, a database, or memcached.
          </td>
        </tr>
        <tr>
          <td>session persistence</td>
          <td>
            &nbsp;A feature of the load-balancing service. It attempts to force subsequent
            connections to a service to be redirected to the same node as long as it is online.
          </td>
        </tr>
        <tr>
          <td>session storage</td>
          <td>
            &nbsp;A horizon component that stores and tracks client session information. Implemented
            through the Django sessions framework.
          </td>
        </tr>
        <tr>
          <td>share</td>
          <td>
            &nbsp;A remote, mountable file system in the context of the Shared File Systems. You can
            mount a share to, and access a share from, several hosts by several users at a time.
          </td>
        </tr>
        <tr>
          <td>share network</td>
          <td>
            &nbsp;An entity in the context of the Shared File Systems that encapsulates interaction
            with the Networking service. If the driver you selected runs in the mode requiring such
            kind of interaction, you need to specify the share network to create a share.
          </td>
        </tr>
        <tr>
          <td>Shared File Systems API</td>
          <td>
            &nbsp;A Shared File Systems service that provides a stable RESTful API. The service
            authenticates and routes requests throughout the Shared File Systems service. There is
            python-manilaclient to interact with the API.
          </td>
        </tr>
        <tr>
          <td>Shared File Systems service</td>
          <td>
            &nbsp;An OpenStack service that provides a set of services for management of shared file
            systems in a multi-tenant cloud environment. The service is similar to how OpenStack
            provides block-based storage management through the OpenStack Block Storage service
            project. With the Shared File Systems service, you can create a remote file system and
            mount the file system on your instances. You can also read and write data from your
            instances to and from your file system. The project name of the Shared File Systems
            service is manila.
          </td>
        </tr>
        <tr>
          <td>shared IP address</td>
          <td>
            &nbsp;An IP address that can be assigned to a VM instance within the shared IP group.
            Public IP addresses can be shared across multiple servers for use in various
            high-availability scenarios. When an IP address is shared to another server, the cloud
            network restrictions are modified to enable each server to listen to and respond on that
            IP address. You can optionally specify that the target server network configuration be
            modified. Shared IP addresses can be used with many standard heartbeat facilities, such
            as keepalive, that monitor for failure and manage IP failover.
          </td>
        </tr>
        <tr>
          <td>shared IP group</td>
          <td>
            &nbsp;A collection of servers that can share IPs with other members of the group. Any
            server in a group can share one or more public IPs with any other server in the group.
            With the exception of the first server in a shared IP group, servers must be launched
            into shared IP groups. A server may be a member of only one shared IP group.
          </td>
        </tr>
        <tr>
          <td>shared storage</td>
          <td>
            &nbsp;Block storage that is simultaneously accessible by multiple clients, for example,
            NFS.
          </td>
        </tr>
        <tr>
          <td>Sheepdog</td>
          <td>&nbsp;Distributed block storage system for QEMU, supported by OpenStack.</td>
        </tr>
        <tr>
          <td>Simple Cloud Identity Management (SCIM)</td>
          <td>
            &nbsp;Specification for managing identity in the cloud, currently unsupported by
            OpenStack.
          </td>
        </tr>
        <tr>
          <td>Single-root I/O Virtualization (SR-IOV)</td>
          <td>
            &nbsp;A specification that, when implemented by a physical PCIe device, enables it to
            appear as multiple separate PCIe devices. This enables multiple virtualized guests to
            share direct access to the physical device, offering improved performance over an
            equivalent virtual device. Currently supported in OpenStack Havana and later releases.
          </td>
        </tr>
        <tr>
          <td>Service Level Agreement (SLA)</td>
          <td>&nbsp;Contractual obligations that ensure the availability of a service.</td>
        </tr>
        <tr>
          <td>SmokeStack</td>
          <td>&nbsp;Runs automated tests against the core OpenStack API; written in Rails.</td>
        </tr>
        <tr>
          <td>snapshot</td>
          <td>
            &nbsp;A point-in-time copy of an OpenStack storage volume or image. Use storage volume
            snapshots to back up volumes. Use image snapshots to back up data, or as ‚Äúgold‚Äù
            images for additional servers.
          </td>
        </tr>
        <tr>
          <td>soft reboot</td>
          <td>
            &nbsp;A controlled reboot where a VM instance is properly restarted through operating
            system commands.
          </td>
        </tr>
        <tr>
          <td>Software Development Lifecycle Automation service</td>
          <td>
            &nbsp;OpenStack project that aims to make cloud services easier to consume and integrate
            with application development process by automating the source-to-image process, and
            simplifying app-centric deployment. The project name is solum.
          </td>
        </tr>
        <tr>
          <td>SolidFire Volume Driver</td>
          <td>&nbsp;The Block Storage driver for the SolidFire iSCSI storage appliance.</td>
        </tr>
        <tr>
          <td>solum</td>
          <td>
            &nbsp;OpenStack project that provides a Software Development Lifecycle Automation
            service.
          </td>
        </tr>
        <tr>
          <td>Simple Protocol for Independent Computing Environments (SPICE)</td>
          <td>
            &nbsp;SPICE provides remote desktop access to guest virtual machines. It is an
            alternative to VNC. SPICE is supported by OpenStack.
          </td>
        </tr>
        <tr>
          <td>spread-first scheduler</td>
          <td>
            &nbsp;The Compute VM scheduling algorithm that attempts to start a new VM on the host
            with the least amount of load.
          </td>
        </tr>
        <tr>
          <td>SQL-Alchemy</td>
          <td>&nbsp;An open source SQL toolkit for Python, used in OpenStack.</td>
        </tr>
        <tr>
          <td>SQLite</td>
          <td>
            &nbsp;A lightweight SQL database, used as the default persistent storage method in many
            OpenStack services.
          </td>
        </tr>
        <tr>
          <td>stack</td>
          <td>
            &nbsp;A set of OpenStack resources created and managed by the Orchestration service
            according to a given template (either an AWS CloudFormation template or a Heat
            Orchestration Template (HOT)).
          </td>
        </tr>
        <tr>
          <td>StackTach</td>
          <td>
            &nbsp;Community project that captures Compute AMQP communications; useful for debugging.
          </td>
        </tr>
        <tr>
          <td>static IP address</td>
          <td>&nbsp;Alternative term for a fixed IP address.</td>
        </tr>
        <tr>
          <td>StaticWeb</td>
          <td>
            &nbsp;WSGI middleware component of Object Storage that serves container data as a static
            web page.
          </td>
        </tr>
        <tr>
          <td>storage back end</td>
          <td>
            &nbsp;The method that a service uses for persistent storage, such as iSCSI, NFS, or
            local disk.
          </td>
        </tr>
        <tr>
          <td>Storage Client</td>
          <td>Sofware provided by ICGC required to download data from AWS S3.</td>
        </tr>
        <tr>
          <td>storage node</td>
          <td>
            &nbsp;An Object Storage node that provides container services, account services, and
            object services; controls the account databases, container databases, and object
            storage.
          </td>
        </tr>
        <tr>
          <td>storage manager</td>
          <td>
            &nbsp;A XenAPI component that provides a pluggable interface to support a wide variety
            of persistent storage back ends.
          </td>
        </tr>
        <tr>
          <td>storage manager back end</td>
          <td>&nbsp;A persistent storage method supported by XenAPI, such as iSCSI or NFS.</td>
        </tr>
        <tr>
          <td>storage services</td>
          <td>
            &nbsp;Collective name for the Object Storage object services, container services, and
            account services.
          </td>
        </tr>
        <tr>
          <td>strategy</td>
          <td>
            &nbsp;Specifies the authentication source used by Image service or Identity. In the
            Database service, it refers to the extensions implemented for a data store.
          </td>
        </tr>
        <tr>
          <td>subdomain</td>
          <td>
            &nbsp;A domain within a parent domain. Subdomains cannot be registered. Subdomains
            enable you to delegate domains. Subdomains can themselves have subdomains, so
            third-level, fourth-level, fifth-level, and deeper levels of nesting are possible.
          </td>
        </tr>
        <tr>
          <td>subnet</td>
          <td>&nbsp;Logical subdivision of an IP network.</td>
        </tr>
        <tr>
          <td>SUSE Linux Enterprise Server (SLES)</td>
          <td>&nbsp;A Linux distribution that is compatible with OpenStack.</td>
        </tr>
        <tr>
          <td>suspend</td>
          <td>&nbsp;Alternative term for a paused VM instance.</td>
        </tr>
        <tr>
          <td>swap</td>
          <td>
            &nbsp;Disk-based virtual memory used by operating systems to provide more memory than is
            actually available on the system.
          </td>
        </tr>
        <tr>
          <td>swauth</td>
          <td>
            &nbsp;An authentication and authorization service for Object Storage, implemented
            through WSGI middleware; uses Object Storage itself as the persistent backing store.
          </td>
        </tr>
        <tr>
          <td>swift</td>
          <td>&nbsp;An OpenStack core project that provides object storage services.</td>
        </tr>
        <tr>
          <td>swift All in One (SAIO)</td>
          <td>&nbsp;Creates a full Object Storage development environment within a single VM.</td>
        </tr>
        <tr>
          <td>swift middleware</td>
          <td>
            &nbsp;Collective term for Object Storage components that provide additional
            functionality.
          </td>
        </tr>
        <tr>
          <td>swift proxy server</td>
          <td>
            &nbsp;Acts as the gatekeeper to Object Storage and is responsible for authenticating the
            user.
          </td>
        </tr>
        <tr>
          <td>swift storage node</td>
          <td>&nbsp;A node that runs Object Storage account, container, and object services.</td>
        </tr>
        <tr>
          <td>sync point</td>
          <td>
            &nbsp;Point in time since the last container and accounts database sync among nodes
            within Object Storage.
          </td>
        </tr>
        <tr>
          <td>sysadmin</td>
          <td>
            &nbsp;One of the default roles in the Compute RBAC system. Enables a user to add other
            users to a project, interact with VM images that are associated with the project, and
            start and stop VM instances.
          </td>
        </tr>
        <tr>
          <td>system usage</td>
          <td>
            &nbsp;A Compute component that, along with the notification system, collects meters and
            usage information. This information can be used for billing.
          </td>
        </tr>
        <tr>
          <td>Telemetry service (telemetry)</td>
          <td>
            &nbsp;The OpenStack project which collects measurements of the utilization of the
            physical and virtual resources comprising deployed clouds, persists this data for
            subsequent retrieval and analysis, and triggers actions when defined criteria are met.
          </td>
        </tr>
        <tr>
          <td>TempAuth</td>
          <td>
            &nbsp;An authentication facility within Object Storage that enables Object Storage
            itself to perform authentication and authorization. Frequently used in testing and
            development.
          </td>
        </tr>
        <tr>
          <td>Tempest</td>
          <td>
            &nbsp;Automated software test suite designed to run against the trunk of the OpenStack
            core project.
          </td>
        </tr>
        <tr>
          <td>TempURL</td>
          <td>
            &nbsp;An Object Storage middleware component that enables creation of URLs for temporary
            object access.
          </td>
        </tr>
        <tr>
          <td>tenant</td>
          <td>
            &nbsp;A group of users; used to isolate access to Compute resources. An alternative term
            for a project.
          </td>
        </tr>
        <tr>
          <td>Tenant API</td>
          <td>&nbsp;An API that is accessible to projects.</td>
        </tr>
        <tr>
          <td>tenant endpoint</td>
          <td>
            &nbsp;An Identity service API endpoint that is associated with one or more projects.
          </td>
        </tr>
        <tr>
          <td>tenant ID</td>
          <td>&nbsp;An alternative term for project ID.</td>
        </tr>
        <tr>
          <td>token</td>
          <td>
            &nbsp;An alpha-numeric string of text used to access OpenStack APIs and resources.
          </td>
        </tr>
        <tr>
          <td>Token Manager</td>
          <td>Section of the portal used to manage Access Tokens.</td>
        </tr>
        <tr>
          <td>token services</td>
          <td>
            &nbsp;An Identity service component that manages and validates tokens after a user or
            project has been authenticated.
          </td>
        </tr>
        <tr>
          <td>tombstone</td>
          <td>
            &nbsp;Used to mark Object Storage objects that have been deleted; ensures that the
            object is not updated on another node after it has been deleted.
          </td>
        </tr>
        <tr>
          <td>topic publisher</td>
          <td>
            &nbsp;A process that is created when a RPC call is executed; used to push the message to
            the topic exchange.
          </td>
        </tr>
        <tr>
          <td>Torpedo</td>
          <td>&nbsp;Community project used to run automated tests against the OpenStack API.</td>
        </tr>
        <tr>
          <td>transaction ID</td>
          <td>
            &nbsp;Unique ID assigned to each Object Storage request; used for debugging and tracing.
          </td>
        </tr>
        <tr>
          <td>transient</td>
          <td>&nbsp;Alternative term for non-durable.</td>
        </tr>
        <tr>
          <td>transient exchange</td>
          <td>&nbsp;Alternative term for a non-durable exchange.</td>
        </tr>
        <tr>
          <td>transient message</td>
          <td>
            &nbsp;A message that is stored in memory and is lost after the server is restarted.
          </td>
        </tr>
        <tr>
          <td>transient queue</td>
          <td>&nbsp;Alternative term for a non-durable queue.</td>
        </tr>
        <tr>
          <td>TripleO</td>
          <td>
            &nbsp;OpenStack-on-OpenStack program. The code name for the OpenStack Deployment
            program.
          </td>
        </tr>
        <tr>
          <td>trove</td>
          <td>&nbsp;Codename for OpenStack Database service.</td>
        </tr>
        <tr>
          <td>trusted platform module (TPM)</td>
          <td>
            &nbsp;Specialized microprocessor for incorporating cryptographic keys into devices for
            authenticating and securing a hardware platform.
          </td>
        </tr>
        <tr>
          <td>Ubuntu</td>
          <td>&nbsp;A Debian-based Linux distribution.</td>
        </tr>
        <tr>
          <td>unscoped token</td>
          <td>&nbsp;Alternative term for an Identity service default token.</td>
        </tr>
        <tr>
          <td>updater</td>
          <td>
            &nbsp;Collective term for a group of Object Storage components that processes queued and
            failed updates for containers and objects.
          </td>
        </tr>
        <tr>
          <td>user</td>
          <td>
            &nbsp;In OpenStack Identity, entities represent individual API consumers and are owned
            by a specific domain. In OpenStack Compute, a user can be associated with roles,
            projects, or both.
          </td>
        </tr>
        <tr>
          <td>user data</td>
          <td>
            &nbsp;A blob of data that the user can specify when they launch an instance. The
            instance can access this data through the metadata service or config drive. Commonly
            used to pass a shell script that the instance runs on boot.
          </td>
        </tr>
        <tr>
          <td>User Mode Linux (UML)</td>
          <td>&nbsp;An OpenStack-supported hypervisor.</td>
        </tr>
        <tr>
          <td>VIF UUID</td>
          <td>&nbsp;Unique ID assigned to each Networking VIF.</td>
        </tr>
        <tr>
          <td>Virtual Central Processing Unit (vCPU)</td>
          <td>&nbsp;Subdivides physical CPUs. Instances can then use those divisions.</td>
        </tr>
        <tr>
          <td>Virtual Disk Image (VDI)</td>
          <td>&nbsp;One of the VM image disk formats supported by Image service.</td>
        </tr>
        <tr>
          <td>Virtual Extensible LAN (VXLAN)</td>
          <td>
            &nbsp;A network virtualization technology that attempts to reduce the scalability
            problems associated with large cloud computing deployments. It uses a VLAN-like
            encapsulation technique to encapsulate Ethernet frames within UDP packets.
          </td>
        </tr>
        <tr>
          <td>Virtual Hard Disk (VHD)</td>
          <td>&nbsp;One of the VM image disk formats supported by Image service.</td>
        </tr>
        <tr>
          <td>virtual IP address (VIP)</td>
          <td>
            &nbsp;An Internet Protocol (IP) address configured on the load balancer for use by
            clients connecting to a service that is load balanced. Incoming connections are
            distributed to back-end nodes based on the configuration of the load balancer.
          </td>
        </tr>
        <tr>
          <td>virtual machine (VM)</td>
          <td>
            &nbsp;An operating system instance that runs on top of a hypervisor. Multiple VMs can
            run at the same time on the same physical host.
          </td>
        </tr>
        <tr>
          <td>virtual network</td>
          <td>&nbsp;An L2 network segment within Networking.</td>
        </tr>
        <tr>
          <td>virtual networking</td>
          <td>
            &nbsp;A generic term for virtualization of network functions such as switching, routing,
            load balancing, and security using a combination of VMs and overlays on physical network
            infrastructure.
          </td>
        </tr>
        <tr>
          <td>Virtual Network Computing (VNC)</td>
          <td>
            &nbsp;Open source GUI and CLI tools used for remote console access to VMs. Supported by
            Compute.
          </td>
        </tr>
        <tr>
          <td>Virtual Network InterFace (VIF)</td>
          <td>
            &nbsp;An interface that is plugged into a port in a Networking network. Typically a
            virtual network interface belonging to a VM.
          </td>
        </tr>
        <tr>
          <td>virtual port</td>
          <td>&nbsp;Attachment point where a virtual interface connects to a virtual network.</td>
        </tr>
        <tr>
          <td>virtual private network (VPN)</td>
          <td>
            &nbsp;Provided by Compute in the form of cloudpipes, specialized instances that are used
            to create VPNs on a per-project basis.
          </td>
        </tr>
        <tr>
          <td>virtual server</td>
          <td>&nbsp;Alternative term for a VM or guest.</td>
        </tr>
        <tr>
          <td>virtual switch (vSwitch)</td>
          <td>
            &nbsp;Software that runs on a host or node and provides the features and functions of a
            hardware-based network switch.
          </td>
        </tr>
        <tr>
          <td>virtual VLAN</td>
          <td>&nbsp;Alternative term for a virtual network.</td>
        </tr>
        <tr>
          <td>VirtualBox</td>
          <td>&nbsp;An OpenStack-supported hypervisor.</td>
        </tr>
        <tr>
          <td>VLAN manager</td>
          <td>
            &nbsp;A Compute component that provides dnsmasq and radvd and sets up forwarding to and
            from cloudpipe instances.
          </td>
        </tr>
        <tr>
          <td>VLAN network</td>
          <td>
            &nbsp;The Network Controller provides virtual networks to enable compute servers to
            interact with each other and with the public network. All machines must have a public
            and private network interface. A VLAN network is a private network interface, which is
            controlled by the vlan_interface option with VLAN managers.
          </td>
        </tr>
        <tr>
          <td>VM disk (VMDK)</td>
          <td>&nbsp;One of the VM image disk formats supported by Image service.</td>
        </tr>
        <tr>
          <td>VM image</td>
          <td>&nbsp;Alternative term for an image.</td>
        </tr>
        <tr>
          <td>VM Remote Control (VMRC)</td>
          <td>
            &nbsp;Method to access VM instance consoles using a web browser. Supported by Compute.
          </td>
        </tr>
        <tr>
          <td>VMware API</td>
          <td>&nbsp;Supports interaction with VMware products in Compute.</td>
        </tr>
        <tr>
          <td>VMware NSX Neutron plug-in</td>
          <td>&nbsp;Provides support for VMware NSX in Neutron.</td>
        </tr>
        <tr>
          <td>VNC proxy</td>
          <td>
            &nbsp;A Compute component that provides users access to the consoles of their VM
            instances through VNC or VMRC.
          </td>
        </tr>
        <tr>
          <td>volume</td>
          <td>
            &nbsp;Disk-based data storage generally represented as an iSCSI target with a file
            system that supports extended attributes; can be persistent or ephemeral.
          </td>
        </tr>
        <tr>
          <td>Volume API</td>
          <td>&nbsp;Alternative name for the Block Storage API.</td>
        </tr>
        <tr>
          <td>volume controller</td>
          <td>
            &nbsp;A Block Storage component that oversees and coordinates storage volume actions.
          </td>
        </tr>
        <tr>
          <td>volume driver</td>
          <td>&nbsp;Alternative term for a volume plug-in.</td>
        </tr>
        <tr>
          <td>volume ID</td>
          <td>&nbsp;Unique ID applied to each storage volume under the Block Storage control.</td>
        </tr>
        <tr>
          <td>volume manager</td>
          <td>
            &nbsp;A Block Storage component that creates, attaches, and detaches persistent storage
            volumes.
          </td>
        </tr>
        <tr>
          <td>volume node</td>
          <td>&nbsp;A Block Storage node that runs the cinder-volume daemon.</td>
        </tr>
        <tr>
          <td>volume plug-in</td>
          <td>
            &nbsp;Provides support for new and specialized types of back-end storage for the Block
            Storage volume manager.
          </td>
        </tr>
        <tr>
          <td>volume worker</td>
          <td>
            &nbsp;A cinder component that interacts with back-end storage to manage the creation and
            deletion of volumes and the creation of compute volumes, provided by the cinder-volume
            daemon.
          </td>
        </tr>
        <tr>
          <td>vSphere</td>
          <td>&nbsp;An OpenStack-supported hypervisor.</td>
        </tr>
        <tr>
          <td>weighting</td>
          <td>
            &nbsp;A Compute process that determines the suitability of the VM instances for a job
            for a particular host. For example, not enough RAM on the host, too many CPUs on the
            host, and so on.
          </td>
        </tr>
        <tr>
          <td>weight</td>
          <td>
            &nbsp;Used by Object Storage devices to determine which storage devices are suitable for
            the job. Devices are weighted by size.
          </td>
        </tr>
        <tr>
          <td>weighted cost</td>
          <td>
            &nbsp;The sum of each cost used when deciding where to start a new VM instance in
            Compute.
          </td>
        </tr>
        <tr>
          <td>worker</td>
          <td>
            &nbsp;A daemon that listens to a queue and carries out tasks in response to messages.
            For example, the cinder-volume worker manages volume creation and deletion on storage
            arrays.
          </td>
        </tr>
        <tr>
          <td>Workflow service (mistral)</td>
          <td>
            &nbsp;The OpenStack service that provides a simple YAML-based language to write
            workflows (tasks and transition rules) and a service that allows to upload them, modify,
            run them at scale and in a highly available manner, manage and monitor workflow
            execution state and state of individual tasks.
          </td>
        </tr>
        <tr>
          <td>Xen</td>
          <td>
            &nbsp;Xen is a hypervisor using a microkernel design, providing services that allow
            multiple computer operating systems to execute on the same computer hardware
            concurrently.
          </td>
        </tr>
        <tr>
          <td>Xen API</td>
          <td>&nbsp;The Xen administrative API, which is supported by Compute.</td>
        </tr>
        <tr>
          <td>Xen Cloud Platform (XCP)</td>
          <td>&nbsp;An OpenStack-supported hypervisor.</td>
        </tr>
        <tr>
          <td>Xen Storage Manager Volume Driver</td>
          <td>
            &nbsp;A Block Storage volume plug-in that enables communication with the Xen Storage
            Manager API.
          </td>
        </tr>
        <tr>
          <td>XenServer</td>
          <td>&nbsp;An OpenStack-supported hypervisor.</td>
        </tr>
        <tr>
          <td>XFS</td>
          <td>
            &nbsp;High-performance 64-bit file system created by Silicon Graphics. Excels in
            parallel I/O operations and data consistency.
          </td>
        </tr>
        <tr>
          <td>zaqar</td>
          <td>&nbsp;Codename for the Message service.</td>
        </tr>
        <tr>
          <td>ZeroMQ</td>
          <td>
            &nbsp;Message queue software supported by OpenStack. An alternative to RabbitMQ. Also
            spelled 0MQ.
          </td>
        </tr>
        <tr>
          <td>Zuul</td>
          <td>
            &nbsp;Tool used in OpenStack development to ensure correctly ordered testing of changes
            in parallel.
          </td>
        </tr>
      </tbody>
    </table>

    <SupportFooterNav
      previous={{
        label: "PREVIOUS: BEST PRACTICES",
        link: "/support/best-practices",
      }}
      next={{
        label: "NEXT: FAQS",
        link: "/support/faqs",
      }}
    />
  </div>
);

export default GlossaryOfTerms;

GlossaryOfTerms.getLayout = function getLayout(page) {
  return <SupportLayout>{page}</SupportLayout>;
};
