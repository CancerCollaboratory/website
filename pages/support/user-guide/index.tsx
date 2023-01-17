import Link from "next/link";
import SupportLayout from "../../../components/supportLayout/supportLayout";
import styles from "../../../components/supportLayout/supportLayout.module.scss";

const UserGuide = () => (
  <div>
    <h1 id="user-guide">
      <a href="#user-guide">User Guide</a>
    </h1>

    <h2 id="introduction-to-the-collaboratory">
      <a
        title="Click on this header and copy URL to link to this section."
        href="#introduction-to-the-collaboratory"
      ></a>
      Introduction to the Collaboratory
    </h2>

    <h3 id="overview">
      <a title="Click on this header and copy URL to link to this section." href="#overview">
        Overview
      </a>
    </h3>
    <p>
      The Cancer Genome Collaboratory (Collaboratory) is an academic compute cloud resource that
      allows researchers to run complex analysis operations across large ICGC cancer genome data
      sets.
    </p>

    <h3 id="collaboratory-resource allocations">
      <a
        title="Click on this header and copy URL to link to this section."
        href="#collaboratory-resource allocations"
      ></a>
      Collaboratory Resource Allocations
    </h3>
    <p>
      A new project account creation on the Collaboratory can be requested through the{" "}
      <a
        title="Click on this header and copy URL to link to this section."
        href="../services-request-account"
        className="ext"
      >
        application process
      </a>
      . Upon submitting the signed application form(s), we will send you an email with further
      instructions.{" "}
    </p>
    <p>Collaboratory users are expected to:</p>
    <ul>
      <li>
        <p>Make appropriate use of Collaboratory resources and use good social behavior.</p>
      </li>
      <li>
        <p>
          Do not share private ssh keys or login information - one user per resource allocation.
        </p>
      </li>
      <li>
        <p>Cite the Collaboratory in any papers describing research.</p>
      </li>
      <li>
        <p>Regularly respond to quarterly Collaboratory allocation surveys.</p>
      </li>
      <li>
        <p>
          Submit tickets to the Collaboratory support ticketing system when encountering technical
          issues not covered by the Collaboratory support documentation.
        </p>
      </li>
    </ul>

    <h3 id="protected-data-resources">
      <a
        title="Click on this header and copy URL to link to this section."
        href="#protected-data-resources"
      >
        Protected Data Resources
      </a>
    </h3>
    <p>
      The Collaboratory currently contains a growing repository of ICGC alignment and variant data
      sourced from the ICGG PanCancer Analysis of Whole Genomes project (PCAWG). The content is
      maintained in collaboration with the ICGC Data Coordination Center (DCC). It is the
      responsibility of the users to protect sensitive data they receive access to.
    </p>

    <h3 id="how-can-i-use-an-openstack-cloud">
      <a
        title="Click on this header and copy URL to link to this section."
        href="#how-can-i-use-an-openstack-cloud"
      >
        How can I use an OpenStack cloud?
      </a>
    </h3>
    <p>
      As an OpenStack cloud end user, you can provision your own resources within the limits set by
      cloud administrators.
    </p>
    <p>The examples in this guide show you how to perform tasks by using the following methods:</p>
    <ul>
      <li>
        <p>
          OpenStack dashboard: Use this web-based graphical interface, code named{" "}
          <a
            title="Click on this header and copy URL to link to this section."
            href="https://git.openstack.org/cgit/openstack/horizon"
            target="_blank"
            rel="noreferrer"
          >
            horizon
          </a>
          , to view, create, and manage resources.
        </p>
      </li>
      <li>
        <p>
          OpenStack command-line clients: Each core OpenStack project has a command-line client that
          you can use to run simple commands to view, create, and manage resources in a cloud and
          automate tasks by using scripts.
        </p>
      </li>
    </ul>
    <p>You can modify these examples for your specific use cases.</p>
    <p>
      In addition to these ways of interacting with a cloud, you can access the OpenStack APIs
      directly or indirectly through{" "}
      <a
        title="Click on this header and copy URL to link to this section."
        href="http://curl.haxx.se"
        rel="noreferrer"
        target="_blank"
      >
        cURL
      </a>{" "}
      commands or open SDKs. You can automate access or build tools to manage resources and services
      by using the native OpenStack APIs or the EC2 compatibility API.
    </p>
    <p>
      To use the OpenStack APIs, it helps to be familiar with HTTP/1.1, RESTful web services, the
      OpenStack services, and JSON or XML data serialization formats.
    </p>

    <h3 id="openstack-dashboard">
      <a
        title="Click on this header and copy URL to link to this section."
        href="#openstack-dashboard"
      >
        OpenStack dashboard
      </a>
    </h3>
    <p>
      As a cloud end user, you can use the OpenStack dashboard to provision your own resources
      within the limits set by administrators. You can modify the examples provided in this section
      to create other types and sizes of server instances.
    </p>
    <p>Log in to the dashboard</p>
    <ul>
      <li>
        <p>
          <a title="Click on this header and copy URL to link to this section." href="#project-tab">
            Project tab
          </a>
        </p>
      </li>
      <li>
        <p>
          <a title="Click on this header and copy URL to link to this section." href="#compute-tab">
            Compute tab
          </a>
        </p>
      </li>
      <li>
        <p>
          <a title="Click on this header and copy URL to link to this section." href="#network-tab">
            Network tab
          </a>
        </p>
      </li>
      <li>
        <p>
          <a
            title="Click on this header and copy URL to link to this section."
            href="#object-store-tab"
          >
            Object Store tab
          </a>
        </p>
      </li>
      <li>
        <p>Identity tab</p>
      </li>
    </ul>

    <h3 id="openstack-dashboard-project-tab">
      <a title="Click on this header and copy URL to link to this section." href="#project-tab">
        OpenStack dashboard — Project tab
      </a>
    </h3>
    <p>
      Projects are organizational units in the cloud and are also known as tenants or accounts. Each
      user is a member of one or more projects. Within a project, a user creates and manages
      instances.
    </p>
    <p>
      From the Project tab, you can view and manage the resources in a selected project, including
      instances and images. You can select the project from the drop-down menu at the top left. If
      the cloud supports multi-domain model, you can also select the domain from this menu.
    </p>
    <p>
      <a
        title="Click on this header and copy URL to link to this section."
        href="/assets/support/user-guide/user-guide-1.png"
      >
        <img
          className={styles.instructionalImage}
          src="/assets/support/user-guide/user-guide-1.png"
          alt="OpenStack dashboard project tab"
        />
      </a>
    </p>
    <p>From the Project tab, you can access the following categories:</p>

    <h4 id="compute-tab">Compute tab</h4>
    <ul>
      <li>
        <p>Overview: View reports for the project.</p>
      </li>
      <li>
        <p>
          Instances: View, launch, create a snapshot from, stop, pause, or reboot instances, or
          connect to them through VNC.
        </p>
        <img
          className={styles.instructionalImage}
          src="/assets/support/user-guide/user-guide-2.png"
          alt="OpenStack dashboard compute tab instances window"
        />
      </li>
      <li>
        <p>Volumes: Use the following tabs to complete these tasks:</p>
        <ul>
          <li>
            <p>Volumes: View, create, edit, and delete volumes.</p>
          </li>
          <li>
            <p>Volume Snapshots: View, create, edit, and delete volume snapshots.</p>
          </li>
        </ul>
        <img
          className={styles.instructionalImage}
          src="/assets/support/user-guide/user-guide-3.png"
          alt="OpenStack dashboard compute tab volumes window"
        />
      </li>
      <li>
        <p>
          Images: View images and instance snapshots created by project users, plus any images that
          are publicly available. Create, edit, and delete images, and launch instances from images
          and snapshots.
        </p>
        <img
          className={styles.instructionalImage}
          src="/assets/support/user-guide/user-guide-4.png"
          alt="OpenStack dashboard compute tab images window"
        />
      </li>
      <li>
        <p>Access &amp; Security: Use the following tabs to complete these tasks:</p>
        <ul>
          <li>
            <p>
              Security Groups: View, create, edit, and delete security groups and security group
              rules.
            </p>
          </li>
          <li>
            <p>Key Pairs: View, create, edit, import, and delete key pairs.</p>
          </li>
          <li>
            <p>Floating IPs: Allocate an IP address to or release it from a project.</p>
          </li>
          <li>
            <p>API Access: View API endpoints.</p>
          </li>
        </ul>
        <img
          className={styles.instructionalImage}
          src="/assets/support/user-guide/user-guide-5.png"
          alt="OpenStack dashboard compute tab accessibility and security window"
        />
      </li>
    </ul>

    <h4 id="network-tab">Network tab</h4>
    <ul>
      <li>
        <p>Network Topology: View the network topology.</p>
      </li>
      <li>
        <p>Networks: Create and manage public and private networks.</p>
        <img
          className={styles.instructionalImage}
          src="/assets/support/user-guide/user-guide-6.png"
          alt="OpenStack dashboard network tab networks window"
        />
      </li>
      <li>
        <p>Routers: Create and manage routers.</p>
      </li>
    </ul>

    <h4 id="object-store-tab">Object Store tab</h4>
    <ul>
      <li>
        <p>Containers: Create and manage containers and objects.</p>
        <img
          className={styles.instructionalImage}
          src="/assets/support/user-guide/user-guide-7.png"
          alt="OpenStack dashboard object store tab containers window"
        />
      </li>
    </ul>

    <h3 id="upload-and-manageimages">
      <a
        title="Click on this header and copy URL to link to this section."
        href="#upload-and-manageimages"
      >
        Upload and manage images
      </a>
    </h3>
    <p>
      A virtual machine image, referred to in this document simply as an image, is a single file
      that contains a virtual disk that has a bootable operating system installed on it. Images are
      used to create virtual machine instances within the cloud. For information about creating
      image files, see the{" "}
      <a
        title="Click on this header and copy URL to link to this section."
        href="http://docs.openstack.org/image-guide/"
        rel="noreferrer"
        target="_blank"
      >
        OpenStack Virtual Machine Image Guide
      </a>
      .
    </p>
    <p>
      Depending on your role, you may have permission to upload and manage virtual machine images.
      Operators might restrict the upload and management of images to cloud administrators or
      operators only. If you have the appropriate privileges, you can use the dashboard to upload
      and manage images in the admin project.
    </p>
    <p className="note-title">Note</p>
    <div className={styles.instructionExample}>
      <p>
        <em>
          You can also use the openstack, glance and nova command-line clients or the Image service
          and Compute APIs to manage images. For more information see{" "}
          <a
            title="Click on this header and copy URL to link to this section."
            href="http://docs.openstack.org/user-guide/common/cli-manage-images.html"
            rel="noreferrer"
            target="_blank"
          >
            Manage images
          </a>
          .
        </em>
      </p>
    </div>

    <h4 id="upload-an-image">Upload an image</h4>
    <p>Follow this procedure to upload an image to a project:</p>
    <ol>
      <li>
        <p>Log in to the dashboard.</p>
      </li>
      <li>
        <p>Select the appropriate project from the drop down menu at the top left.</p>
      </li>
      <li>
        <p>On the Project tab, open the Compute tab and click Images category.</p>
      </li>
      <li>
        <p>Click Create Image.</p>
      </li>
      <li>
        <p>The Create An Image dialog box appears.</p>
        <img
          className={styles.instructionalImage}
          src="/assets/support/user-guide/user-guide-8.png"
          alt="A screenshot of the create an image dialog box"
        />
      </li>
      <li>
        <p>Dashboard — Create Image</p>
      </li>
      <li>
        <p>Enter the following values:</p>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <p>Name</p>
              </td>
              <td>
                <p>Enter a name for the image.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Description</p>
              </td>
              <td>
                <p>Enter a brief description of the image.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Image Source</p>
              </td>
              <td>
                <p>
                  Choose the image source from the dropdown list. Your choices are Image Location
                  and Image File.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Image File or Image Location</p>
              </td>
              <td>
                <p>
                  Based on your selection for Image Source, you either enter the location URL of the
                  image in the Image Location field, or browse for the image file on your file
                  system and add it.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Format</p>
              </td>
              <td>
                <p>Select the image format (for example, QCOW2) for the image.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Architecture</p>
              </td>
              <td>
                <p>
                  Specify the architecture. For example, i386 for a 32-bit architecture or x86_64
                  for a 64-bit architecture.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Minimum Disk (GB)</p>
              </td>
              <td>
                <p>Leave this field empty.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Minimum RAM (MB)</p>
              </td>
              <td>
                <p>Leave this field empty.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Copy Data</p>
              </td>
              <td>
                <p>Specify this option to copy image data to the Image service.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Public</p>
              </td>
              <td>
                <p>
                  Select this check box to make the image public to all users with access to the
                  current project.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Protected</p>
              </td>
              <td>
                <p>
                  Select this check box to ensure that only users with permissions can delete the
                  image.
                </p>
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </li>
      <li>
        <p>Click Create Image.</p>
      </li>
      <li>
        <p>
          The image is queued to be uploaded. It might take some time before the status changes from
          Queued to Active.
        </p>
      </li>
    </ol>

    <h4 id="update-an-image">Update an image</h4>
    <p>Follow this procedure to update an existing image.</p>
    <ol>
      <li>
        <p>Log in to the dashboard.</p>
      </li>
      <li>
        <p>Select the appropriate project from the drop down menu at the top left.</p>
      </li>
      <li>
        <p>Select the image that you want to edit.</p>
      </li>
      <li>
        <p>
          In the Actions column, click the menu button and then select Edit Image from the list.
        </p>
      </li>
      <li>
        <p>In the Edit Image dialog box, you can perform various actions. For example:</p>
        <ul>
          <li>
            <p>Change the name of the image.</p>
          </li>
          <li>
            <p>Select the Public check box to make the image public.</p>
          </li>
          <li>
            <p>Clear the Public check box to make the image private.</p>
          </li>
        </ul>
      </li>
      <li>
        <p>Click Edit Image.</p>
      </li>
    </ol>

    <h4 id="delete-an-image">Delete an image</h4>
    <p>
      Deletion of images is permanent and cannot be reversed. Only users with the appropriate
      permissions can delete images.
    </p>
    <ol>
      <li>
        <p>Log in to the dashboard.</p>
      </li>
      <li>
        <p>Select the appropriate project from the drop down menu at the top left.</p>
      </li>
      <li>
        <p>On the Project tab, open the Compute tab and click Images category.</p>
      </li>
      <li>
        <p>Select the images that you want to delete.</p>
      </li>
      <li>
        <p>Click Delete Images.</p>
      </li>
      <li>
        <p>In the Confirm Delete Images dialog box, click Delete Images to confirm the deletion.</p>
      </li>
    </ol>

    <h3 id="configure-access-and-security-for-instances">
      <a
        title="Click on this header and copy URL to link to this section."
        href="#configure-access-and-security-for-instances"
      >
        Configure access and security for instances
      </a>
    </h3>
    <ul>
      <li>
        <p>
          <a
            title="Click on this header and copy URL to link to this section."
            href="#add-a-rule-to-the-default-security-group"
          >
            Add a rule to the default security group
          </a>
        </p>
      </li>
      <li>
        <p>
          <a
            title="Click on this header and copy URL to link to this section."
            href="#add-a-key-pair"
          >
            Add a key pair
          </a>
        </p>
      </li>
      <li>
        <p>
          <a
            title="Click on this header and copy URL to link to this section."
            href="#import-a-key-pair"
          >
            Import a key pair
          </a>
        </p>
      </li>
      <li>
        <p>
          <a
            title="Click on this header and copy URL to link to this section."
            href="#allocate-a-floating-ip-address-to-an-instance"
          >
            Allocate a floating IP address to an instance
          </a>
        </p>
      </li>
    </ul>
    <p>
      Before you launch an instance, you should add security group rules to enable users to ping and
      use SSH to connect to the instance. Security groups are sets of IP filter rules that define
      networking access and are applied to all instances within a project. To do so, you either add
      rules to the default security group or add a new security group with rules.
    </p>
    <p>
      Key pairs are SSH credentials that are injected into an instance when it is launched. To use
      key pair injection, the image that the instance is based on must contain the cloud-init
      package. Each project should have at least one key pair. For more information, see the section
      “Add a key pair”.
    </p>
    <p>
      If you have generated a key pair with an external tool, you can import it into OpenStack. The
      key pair can be used for multiple instances that belong to a project. For more information,
      see the section “Import a key pair”.
    </p>
    <p className="note-title">Note</p>
    <div className={styles.instructionExample}>
      <p>
        <em>
          A key pair belongs to an individual user, not to a project. To share a key pair across
          multiple users, each user needs to import that key pair.
        </em>
      </p>
    </div>
    <p>
      When an instance is created in OpenStack, it is automatically assigned a fixed IP address in
      the network to which the instance is assigned. This IP address is permanently associated with
      the instance until the instance is terminated. However, in addition to the fixed IP address, a
      floating IP address can also be attached to an instance. Unlike fixed IP addresses, floating
      IP addresses are able to have their associations modified at any time, regardless of the state
      of the instances involved.
    </p>

    <h4 id="add-a-rule-to-the-default-security-group">Add a rule to the default security group</h4>
    <p>
      This procedure enables SSH and ICMP (ping) access to instances. The rules apply to all
      instances within a given project, and should be set for every project unless there is a reason
      to prohibit SSH or ICMP access to the instances.
    </p>
    <p>
      This procedure can be adjusted as necessary to add additional security group rules to a
      project, if your cloud requires them.
    </p>
    <p className="note-title">Note</p>
    <div className={styles.instructionExample}>
      <p>
        <em>
          When adding a rule, you must specify the protocol used with the destination port or source
          port.
        </em>
      </p>
    </div>
    <ol>
      <li>
        <p>Log in to the dashboard.</p>
      </li>
      <li>
        <p>Select the appropriate project from the drop down menu at the top left.</p>
      </li>
      <li>
        <p>
          On the Project tab, open the Compute tab and click Access &amp; Security category. The
          Security Groups tab shows the security groups that are available for this project.
        </p>
      </li>
      <li>
        <p>Select the default security group and click Manage Rules.</p>
      </li>
      <li>
        <p>To allow SSH access, click Add Rule.</p>
      </li>
      <li>
        <p>In the Add Rule dialog box, enter the following values:</p>
        <ul>
          <li>
            <p>Rule: SSH</p>
          </li>
          <li>
            <p>Remote: CIDR</p>
          </li>
          <li>
            <p>CIDR: 0.0.0.0/0 </p>
          </li>
        </ul>
        <p className="note-title">Note</p>
        <div className={styles.instructionBox}>
          <p>
            <em>
              0.0.0.0/0 represents the entire Internet anf it is not recommended to allow such a
              wide access. To accept requests from a particular range of IP addresses, specify the
              IP address block in the CIDR box.
            </em>
          </p>
        </div>
      </li>
      <li>
        <p>Click Add.</p>
      </li>
      <li>
        <p>Instances will now have SSH port 22 open for requests from any IP address.</p>
        <img
          className={styles.instructionalImage}
          src="/assets/support/user-guide/user-guide-9.png"
          alt="A screenshot of the Add Rule dialog box"
        />
      </li>
      <li>
        <p>To add an ICMP rule, click Add Rule.</p>
      </li>
      <li>
        <p>In the Add Rule dialog box, enter the following values:</p>
        <ul>
          <li>
            <p>Rule: All ICMP</p>
          </li>
          <li>
            <p>Direction: Ingress</p>
          </li>
          <li>
            <p>Remote: CIDR</p>
          </li>
          <li>
            <p>CIDR: 0.0.0.0/0</p>
          </li>
        </ul>
      </li>
      <li>
        <p>Click Add.</p>
      </li>
      <li>
        <p>Instances will now accept all incoming ICMP packets.</p>
      </li>
    </ol>

    <h4 id="add-a-key-pair">Add a key pair</h4>
    <p>Create at least one key pair for each project.</p>
    <ol>
      <li>
        <p>Log in to the dashboard.</p>
      </li>
      <li>
        <p>Select the appropriate project from the drop down menu at the top left.</p>
      </li>
      <li>
        <p>On the Project tab, open the Compute tab and click Access &amp; Security category.</p>
      </li>
      <li>
        <p>
          Click the Key Pairs tab, which shows the key pairs that are available for this project.
        </p>
      </li>
      <li>
        <p>Click Create Key Pair.</p>
      </li>
      <li>
        <p>
          In the Create Key Pair dialog box, enter a name for your key pair, and click Create Key
          Pair.
        </p>
      </li>
      <li>
        <p>Respond to the prompt to download the key pair.</p>
      </li>
    </ol>

    <h4 id="import-a-key-pair">Import a key pair</h4>
    <ol>
      <li>
        <p>Log in to the dashboard.</p>
      </li>
      <li>
        <p>Select the appropriate project from the drop down menu at the top left.</p>
      </li>
      <li>
        <p>On the Project tab, open the Compute tab and click Access &amp; Security category.</p>
      </li>
      <li>
        <p>
          Click the Key Pairs tab, which shows the key pairs that are available for this project.
        </p>
      </li>
      <li>
        <p>Click Import Key Pair.</p>
      </li>
      <li>
        <p>
          In the Import Key Pair dialog box, enter the name of your key pair, copy the public key
          into the Public Key box, and then click Import Key Pair.
        </p>
      </li>
      <li>
        <p>Save the *.pem file locally.</p>
      </li>
      <li>
        <p>
          To change its permissions so that only you can read and write to the file, run the
          following command:
        </p>
        <pre>$ chmod 0600 yourPrivateKey.pem</pre>
        <p className="note-title">Note</p>
        <div className={styles.instructionBox}>
          <p>
            <em>
              If you are using the Dashboard from a Windows computer, use PuTTYgen to load the *.pem
              file and convert and save it as *.ppk. For more information see the{" "}
              <a
                title="Click on this header and copy URL to link to this section."
                href="http://winscp.net/eng/docs/ui_puttygen"
                rel="noreferrer"
                className="ext"
              >
                WinSCP web page for PuTTYgen
              </a>
              .
            </em>
          </p>
        </div>
      </li>
      <li>
        <p>To make the key pair known to SSH, run the ssh-add command.</p>
        <pre>$ ssh-add yourPrivateKey.pem</pre>
      </li>
    </ol>
    <p>
      The Compute database registers the public key of the key pair. The Dashboard lists the key
      pair on the Access &amp; Security tab.
    </p>

    <h4 id="allocating-a-floating-ip-address-to-an-instance">
      Allocate a floating IP address to an instance
    </h4>
    <p>
      When an instance is created in OpenStack, it is automatically assigned a fixed IP address in
      the network to which the instance is assigned. This IP address is permanently associated with
      the instance until the instance is terminated.
    </p>
    <p>
      However, in addition to the fixed IP address, a floating IP address can also be attached to an
      instance. Unlike fixed IP addresses, floating IP addresses can have their associations
      modified at any time, regardless of the state of the instances involved. This procedure
      details the reservation of a floating IP address from an existing pool of addresses and the
      association of that address with a specific instance.
    </p>
    <ol>
      <li>
        <p>Log in to the dashboard.</p>
      </li>
      <li>
        <p>Select the appropriate project from the drop down menu at the top left.</p>
      </li>
      <li>
        <p>On the Project tab, open the Compute tab and click Access &amp; Security category.</p>
      </li>
      <li>
        <p>
          Click the Floating IPs tab, which shows the floating IP addresses allocated to instances.
        </p>
      </li>
      <li>
        <p>Click Allocate IP To Project.</p>
      </li>
      <li>
        <p>Choose the pool from which to pick the IP address.</p>
      </li>
      <li>
        <p>Click Allocate IP.</p>
      </li>
      <li>
        <p>In the Floating IPs list, click Associate.</p>
      </li>
      <li>
        <p>In the Manage Floating IP Associations dialog box, choose the following options:</p>
        <ul>
          <li>
            <p>
              The IP Address field is filled automatically, but you can add a new IP address by
              clicking the + button.
            </p>
          </li>
          <li>
            <p>In the Port to be associated field, select a port from the list.</p>
          </li>
          <li>
            <p>The list shows all the instances with their fixed IP addresses.</p>
          </li>
        </ul>
      </li>
      <li>
        <p>Click Associate.</p>
      </li>
    </ol>

    <h3 id="launch-and-manage-instance">
      <a
        title="Click on this header and copy URL to link to this section."
        href="#launch-and-manage-instance"
      >
        Launch and manage instances
      </a>
    </h3>
    <ul>
      <li>
        <p>
          <a
            title="Click on this header and copy URL to link to this section."
            href="#launch-an-instance"
          >
            Launch an instance
          </a>
        </p>
      </li>
      <li>
        <p>
          <a
            title="Click on this header and copy URL to link to this section."
            href="#connect-to-your-instance-by-using-ssh"
          >
            Connect to your instance by using SSH
          </a>
        </p>
      </li>
      <li>
        <p>
          <a
            title="Click on this header and copy URL to link to this section."
            href="#track-usage-for-instances"
          >
            Track usage for instances
          </a>
        </p>
      </li>
      <li>
        <p>
          <a
            title="Click on this header and copy URL to link to this section."
            href="#create-an-instance-snapshot"
          >
            Create an instance snapshot
          </a>
        </p>
      </li>
      <li>
        <p>
          <a
            title="Click on this header and copy URL to link to this section."
            href="#manage-an-instance"
          >
            Manage an instance
          </a>
        </p>
      </li>
    </ul>
    <p>
      Instances are virtual machines that run inside the cloud. You can launch an instance from the
      following sources:
    </p>
    <ul>
      <li>
        <p>Images uploaded to the Image service.</p>
      </li>
      <li>
        <p>
          Image that you have copied to a persistent volume. The instance launches from the volume,
          which is provided by the cinder-volume API.
        </p>
      </li>
      <li>
        <p>Instance snapshot that you took.</p>
      </li>
    </ul>

    <h4 id="launch-an-instance">Launch an instance</h4>
    <ol>
      <li>
        <p>Log in to the dashboard.</p>
      </li>
      <li>
        <p>Select the appropriate project from the drop down menu at the top left.</p>
      </li>
      <li>
        <p>On the Project tab, open the Compute tab and click Instances category.</p>
        <p>
          The dashboard shows the instances with its name, its private and floating IP addresses,
          size, status, task, power state, and so on.
        </p>
      </li>
      <li>
        <p>Click Launch Instance.</p>
      </li>

      <li>
        <p>In the Launch Instance dialog box, specify the following values:</p>
        <table>
          <caption>
            <p>Details tab</p>
          </caption>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <p>Instance Name</p>
              </td>
              <td>
                <p>Assign a name to the virtual machine.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Availability Zone</p>
              </td>
              <td>
                <p>By default, this value is set to nova.</p>
                <p className="note-title">Note</p>
                <div className={styles.instructionExample}>
                  <p>
                    <em>
                      The name you assign here becomes the initial host name of the server. If the
                      name is longer than 63 characters, the Compute service truncates it
                      automatically to ensure dnsmasq works correctly.
                    </em>
                  </p>
                  <p>
                    <em>
                      After the server is built, if you change the server name in the API or change
                      the host name directly, the names are not updated in the dashboard.
                    </em>
                  </p>
                  <p>
                    <em>
                      Server names are not guaranteed to be unique when created so you could have
                      two instances with the same host name.
                    </em>
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <p>Flavor</p>
              </td>
              <td>
                <p>Specify the size of the instance to launch.</p>
                <p className="note-title">Note</p>
                <div className={styles.instructionExample}>
                  <p>
                    <em>
                      The flavor is selected based on the size of the image selected for launching
                      an instance. For example, while creating an image, if you have entered the
                      value in the Minimum RAM (MB) field as 2048, then on selecting the image, the
                      default flavor is m1.small.
                    </em>
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <p>Count</p>
              </td>
              <td>
                <p>To launch multiple instances, enter a value greater than 1. The default is 1.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Instance Boot Source</p>
              </td>
              <td>
                <p>Your options are:</p>
                <dl>
                  <dt>Boot from image</dt>
                  <dd>
                    If you choose this option, a new field for Image Name displays. You can select
                    the image from the list.
                  </dd>
                  <dt>Boot from snapshot</dt>
                  <dd>
                    If you choose this option, a new field for Instance Snapshot displays. You can
                    select the snapshot from the list.
                  </dd>
                  <dt>Boot from volume</dt>
                  <dd>
                    If you choose this option, a new field for Volume displays. You can select the
                    volume from the list.
                  </dd>
                  <dt>Boot from image (creates a new volume)</dt>
                  <dd>
                    With this option, you can boot from an image and create a volume by entering the
                    Device Size and Device Name for your volume. Click the Delete Volume on Instance
                    Delete option to delete the volume on deleting the instance.
                  </dd>
                  <dt>Boot from volume snapshot (creates a new volume)</dt>
                  <dd>
                    Using this option, you can boot from a volume snapshot and create a new volume
                    by choosing Volume Snapshot from a list and adding a Device Name for your
                    volume. Click the Delete Volume on Instance Delete option to delete the volume
                    on deleting the instance.
                  </dd>
                </dl>
              </td>
            </tr>
            <tr>
              <td>
                <p>Image Name</p>
              </td>
              <td>
                <p>
                  This field changes based on your previous selection. If you have chosen to launch
                  an instance using an image, the Image Name field displays. Select the image name
                  from the dropdown list.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Instance Snapshot</p>
              </td>
              <td>
                <p>
                  This field changes based on your previous selection. If you have chosen to launch
                  an instance using a snapshot, the Instance Snapshot field displays. Select the
                  snapshot name from the dropdown list.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Volume</p>
              </td>
              <td>
                <p>
                  This field changes based on your previous selection. If you have chosen to launch
                  an instance using a volume, the Volume field displays. Select the volume name from
                  the dropdown list. If you want to delete the volume on instance delete, check the
                  Delete Volume on Instance Delete option.
                </p>
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
        <img
          className={styles.instructionalImage}
          src="/assets/support/user-guide/user-guide-10.png"
          alt="A screenshot of the luanch instance disalogue's details tab"
        />
        <table>
          <caption>
            <p>Access &amp; Security tab</p>
          </caption>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <p>Key Pair</p>
              </td>
              <td>
                <p>
                  Specify a key pair. If the image uses a static root password or a static key set
                  (neither is recommended), you do not need to provide a key pair to launch the
                  instance.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Security Groups</p>
              </td>
              <td>
                <p>
                  Activate the security groups that you want to assign to the instance that define
                  which incoming network traffic is forwarded to instances. If you have not created
                  any security groups, you can assign only the default security group to the
                  instance.
                </p>
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
        <img
          className={styles.instructionalImage}
          src="/assets/support/user-guide/user-guide-11.png"
          alt="A screenshot of the luanch instance disalogue's access and security tab"
        />
        <table>
          <caption>
            <p>Networking tab</p>
          </caption>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <p>Selected Networks</p>
              </td>
              <td>To add a network to the instance, click the + in the Available field.</td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
        <img
          className={styles.instructionalImage}
          src="/assets/support/user-guide/user-guide-12.png"
          alt="A screenshot of the luanch instance disalogue's networking tab"
        />
        <table>
          <caption>
            <p>Post-creation tab</p>
          </caption>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <p>Customization Script Source</p>
              </td>
              <td>
                <p>
                  Specify a customization script that runs after your instance launches. Examples of
                  customization scripts are available at{" "}
                  <a
                    title="Click on this header and copy URL to link to this section."
                    href="http://cloudinit.readthedocs.io/en/latest/topics/examples.html"
                    rel="noreferrer"
                    target="_blank"
                  >
                    here
                  </a>
                  .
                </p>
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </li>
      <li>
        <p>Click Launch Instance.</p>
      </li>
    </ol>
    <p>The instance starts on a compute node in the cloud.</p>
    <p className="note-title">Note</p>
    <div className={styles.instructionExample}>
      <p>
        <em>
          If you did not provide a key pair, security groups, or rules, users can access the
          instance only from inside the cloud through VNC. Even pinging the instance is not possible
          without an ICMP rule configured.
        </em>
      </p>
    </div>
    <p>
      When you launch an instance from an image, OpenStack creates a local copy of the image on the
      compute node where the instance starts.
    </p>

    <h4 id="connect-to-your-instance-by-using-ssh">Connect to your instance by using SSH</h4>
    <p>To use SSH to connect to your instance, use the downloaded keypair file.</p>
    <p className="note-title">Note</p>
    <div className={styles.instructionExample}>
      <p>
        <em>
          The user name is ubuntu for the Ubuntu cloud images. For all other images, the user can be
          found by clicking on the image name in the Images tab, and consulting the description
          attached to the image.
        </em>
      </p>
    </div>
    <img
      className={styles.instructionalImage}
      src="/assets/support/user-guide/user-guide-13.png"
      alt="A screenshot of an example showing the description attached to an image."
    />
    <p>Copy the IP address for your instance.</p>
    <ol>
      <li>
        <p>Use the ssh command to make a secure connection to the instance. For example:</p>
        <pre>$ ssh -i MyKey.pem ubuntu@142.1.177.X</pre>
      </li>
      <li>
        <p>At the prompt, type yes.</p>
      </li>
    </ol>

    <h4 id="create-an-instance-sanpshot">Create an instance snapshot</h4>
    <ol>
      <li>
        <p>Log in to the dashboard.</p>
      </li>
      <li>
        <p>Select the appropriate project from the drop down menu at the top left.</p>
      </li>
      <li>
        <p>On the Project tab, open the Compute tab and click the Instances category.</p>
      </li>
      <li>
        <p>Select the instance from which to create a snapshot.</p>
      </li>
      <li>
        <p>In the actions column, click Create Snapshot.</p>
      </li>
      <li>
        <p>
          In the Create Snapshot dialog box, enter a name for the snapshot, and click Create
          Snapshot.
        </p>
      </li>
      <li>
        <p>The Images category shows the instance snapshot.</p>
      </li>
    </ol>
    <img
      className={styles.instructionalImage}
      src="/assets/support/user-guide/user-guide-14.png"
      alt="A screenshot of the create snapshot dialog box"
    />
    <p>
      To launch an instance from the snapshot, select the snapshot and click Launch. Proceed with
      launching an instance.
    </p>

    <h4 id="manage-an-instance">Manage an instance</h4>
    <ol>
      <li>
        <p>Log in to the dashboard.</p>
      </li>
      <li>
        <p>Select the appropriate project from the drop down menu at the top left.</p>
      </li>
      <li>
        <p>On the Project tab, open the Compute tab and click Instances category.</p>
      </li>
      <li>
        <p>Select an instance.</p>
      </li>
      <li>
        <p>In the menu list in the actions column, select the state.</p>
      </li>
      <li>
        <p>
          You can rebuild an instance. You can also choose to view the instance console log, edit
          instance or the security groups. Depending on the current state of the instance, you can
          pause, resume, suspend, soft or hard reboot, or terminate it.
        </p>
      </li>
    </ol>
    <img
      className={styles.instructionalImage}
      src="/assets/support/user-guide/user-guide-15.png"
      alt="A screenshot of the instances category's actions column."
    />

    <h2 id="volumes">
      <a title="Click on this header and copy URL to link to this section." href="#volumes"></a>
      Volumes
    </h2>

    <h3 id="scope">
      <a title="Click on this header and copy URL to link to this section." href="#scope">
        Scope
      </a>
    </h3>
    <p>In this section you will learn how to:</p>
    <ul>
      <li>
        <p>
          <a
            title="Click on this header and copy URL to link to this section."
            href="#create-a-volume"
          >
            Create a volume
          </a>
        </p>
      </li>
      <li>
        <p>
          <a
            title="Click on this header and copy URL to link to this section."
            href="#attach-a-volume-to-an-instance"
          >
            Attach it to your instance
          </a>
        </p>
      </li>
      <li>
        <p>
          <a
            title="Click on this header and copy URL to link to this section."
            href="#identifying-volume-within-your-instance"
          >
            Identify, format and mount the volume
          </a>
        </p>
      </li>
      <li>
        <p>
          <a
            title="Click on this header and copy URL to link to this section."
            href="#re-attaching-the-volume-to-a-different-instance"
          >
            Re-attach it to a different instance
          </a>
        </p>
      </li>
    </ul>

    <h3 id="introduction">
      <a title="Click on this header and copy URL to link to this section." href="#introduction">
        Introduction
      </a>
    </h3>
    <p>
      Openstack volumes are logical block devices that can be attached to a single instance to
      provide a persistent location for data storage. Unlike a virtual machine&apos;s local disk
      which is destroyed along with the VM, volumes are decoupled from instances so that they may be
      attached and reattached to different instances. This allows you to create &amp; destroy
      instances as you see fit while maintaining a persistent store for data.
    </p>

    <h3 id="create-a-volume">
      <a title="Click on this header and copy URL to link to this section." href="#create-a-volume">
        Create a volume
      </a>
    </h3>
    <p>
      From the Openstack dashboard, click Compute &gt; Volumes &gt; Create Volume, fill out the form
      by providing a meaningful name, description and size. Once this is done, click ‘Create
      Volume’. Your volume will be created and you can move on to the next step, ‘Attach a volume to
      an instance’.
    </p>
    <img
      className={styles.instructionalImage}
      src="/assets/support/user-guide/user-guide-16.png"
      alt="A screenshot of the Create Volume dialog box"
    />

    <h3 id="attach-a-voume-to-an-instance">
      <a
        title="Click on this header and copy URL to link to this section."
        href="#attach-a-voume-to-an-instance"
      >
        Attach a volume to an Instance
      </a>
    </h3>
    <p>
      From the Openstack dashboard, click Compute &gt; Volumes and then on the Actions drop down for
      the volume you want to attach to an Instance, click ‘Manage Attachments’.
    </p>
    <img
      className={styles.instructionalImage}
      src="/assets/support/user-guide/user-guide-17.png"
      alt="A screenshot of the Actions drop down for the volumes."
    />
    <p>
      From the Manage Volume Attachments form, select the Instance you wish to attach to and click
      ‘Attach Volume’. This will dynamically attach the volume as a new logical block device to your
      instance. Move on to the next section of identifying the block device from within your
      Instance.
    </p>
    <img
      className={styles.instructionalImage}
      src="/assets/support/user-guide/user-guide-18.png"
      alt="A screenshot of the Manage Volume Attachments form."
    />

    <h3 id="identifying-volume-within-your-instance">
      <a
        title="Click on this header and copy URL to link to this section."
        href="#identifying-volume-within-your-instance"
      >
        Identifying volume within your Instance
      </a>
    </h3>
    <p>SSH into your instance, su to root and run ‘lsblk’</p>
    <img
      className={styles.instructionalImage}
      src="/assets/support/user-guide/user-guide-19.png"
      alt="A screenshot of result of running lsblk."
    />
    <p>
      ‘vda’ is the first disk of your Instance and contains one partition ‘vda1’ which contains the
      operating system. Any volumes attached to your Instance will be named ‘vdb, vdc, vdd’ &amp;
      etc. Identify the new disk by checking the size and comparing that to the size you created in
      the Openstack dashboard. Now that you have identified the logical block device from within the
      Instance you can move on to Formatting.
    </p>

    <h3 id="formatting-the-volume">
      <a
        title="Click on this header and copy URL to link to this section."
        href="#formatting-the-volume"
      >
        Formatting the Volume
      </a>
    </h3>

    <h4 id="prerequisite-install-xfsprogs">Prerequisite: Install xfsprogs</h4>
    <p>As root:</p>
    <pre>apt-get install xfsprogs -y</pre>

    <h4 id="format-using-xfs">Format using xfs</h4>
    <p>
      We are using xfs in this example because it is widely supported and supports extremely large
      volume sizes (9 exabytes)
    </p>
    <p>As root:</p>
    <pre>mkfs.xfs -f /dev/vdb</pre>
    <img
      className={styles.instructionalImage}
      src="/assets/support/user-guide/user-guide-20.png"
      alt="A screenshot of result of running the above code."
    />

    <h3 id="mounting-the-volume">
      <a
        title="Click on this header and copy URL to link to this section."
        href="#mounting-the-volume"
      >
        Mounting the Volume
      </a>
    </h3>
    <p>
      Create a directory to mount the volume (example ‘db1’), mount the volume and then verify the
      mount.
    </p>
    <p>As root:</p>
    <pre>&quot;mkdir db1 mount -t xfs /dev/vdb /db1 df -hT /db1&quot;</pre>
    <img
      className={styles.instructionalImage}
      src="/assets/support/user-guide/user-guide-21.png"
      alt="A screenshot of result of running the above code."
    />
    <p>To make the mount persist on reboots, add the following to /etc/fstab</p>
    <pre>/dev/vdb /db1 xfs defaults 0 0</pre>
    <p>At this point the volume is ready to read &amp; write data.</p>

    <h3 id="re-attaching-the-volume-to-a-different-instance">
      <a
        title="Click on this header and copy URL to link to this section."
        href="#re-attaching-the-volume-to-a-different-instance"
      >
        Re-attaching the volume to a different Instance
      </a>
    </h3>

    <h4 id="unmount-the-volume">Unmount the Volume</h4>
    <p>As root:</p>
    <pre>umount /db1</pre>
    <p>Remove or comment out the line added in /etc/fstab if applicable.</p>

    <h4 id="detach-volume">Detach Volume</h4>
    <p>
      From the Openstack dashboard, click Compute &gt; Volumes and then on the Actions drop down for
      the volume you want to attach to an Instance, click ‘Manage Attachments’.
    </p>
    <p>
      From the Manage Volume Attachments form, Click ‘Detach Volume’ for the instance you wish to
      detach the volume from.
    </p>
    <img
      className={styles.instructionalImage}
      src="/assets/support/user-guide/user-guide-22.png"
      alt="A screenshot of the Manage Volume Attachments form."
    />
    <p>Verify the device is no longer seen by the Instance by looking at the output of ‘lsblk’.</p>

    <h3 id="re-attach-volume">
      <a
        title="Click on this header and copy URL to link to this section."
        href="#re-attach-volume"
      >
        Re-attach Volume
      </a>
    </h3>
    <p>
      Follow the steps at the beginning of this guide to attach the volume to a desired instance.{" "}
      <mark>DO NOT Format the volume from the new instance</mark>. Skip that step and go directly to
      mounting. The volume is now mounted on a different Instance and the data is preserved.
    </p>

    <h3 id="extend-volume-grow">
      <a
        title="Click on this header and copy URL to link to this section."
        href="#extend-volume-grow"
      >
        Extend Volume (Grow)
      </a>
    </h3>
    <p>
      Volumes can also be extended in size. In order to Extend the volume it must be unmounted and
      detached from an Instance.
    </p>
    <p className="note-title">Note</p>
    <div className={styles.instructionExample}>
      <p>
        <em>Volumes cannot have their size reduced.</em>
      </p>
    </div>
    <p></p>
    <p>
      From the Openstack dashboard, click Compute &gt; Volumes and then on the Actions drop down
      select ‘Extend Volume’.
    </p>
    <img
      className={styles.instructionalImage}
      src="/assets/support/user-guide/user-guide-23.png"
      alt="A screenshot of the Extended Volume dialog box."
    />
    <p>Enter the new size of the volume and click Extend Volume.</p>
    <p>
      Re-attach the volume to your Instance, and remount the volume from within the instance. You
      will need to grow the xfs filesystem before it will make the new space available.
    </p>
    <p>As root:</p>
    <pre>xfs_growfs /dev/vdb -d</pre>

    <h3 id="create-and-manage-object-containers">
      <a
        title="Click on this header and copy URL to link to this section."
        href="#create-and-manage-object-containers"
      >
        Create and manage object containers
      </a>
    </h3>
    <ul>
      <li>
        <p>
          <a
            title="Click on this header and copy URL to link to this section."
            href="#create-a-container"
          >
            Create a container
          </a>
        </p>
      </li>
      <li>
        <p>
          <a
            title="Click on this header and copy URL to link to this section."
            href="#upload-an-object"
          >
            Upload an object
          </a>
        </p>
      </li>
      <li>
        <p>
          <a
            title="Click on this header and copy URL to link to this section."
            href="#manage-an-object"
          >
            Manage an object
          </a>
        </p>
      </li>
    </ul>
    <p>
      OpenStack Object Storage (swift) is used for redundant, scalable data storage using clusters
      of standardized servers to store petabytes of accessible data. It is a long-term storage
      system for large amounts of static data which can be retrieved and updated.
    </p>
    <p>
      OpenStack Object Storage provides a distributed, API-accessible storage platform that can be
      integrated directly into an application or used to store any type of file, including VM
      images, backups, archives, or media files. In the OpenStack dashboard, you can only manage
      containers and objects.
    </p>
    <p>
      In OpenStack Object Storage, containers provide storage for objects in a manner similar to a
      Windows folder or Linux file directory, though they cannot be nested. An object in OpenStack
      consists of the file to be stored in the container and any accompanying metadata.
    </p>

    <h4 id="create-a-container">Create a container</h4>
    <ol>
      <li>
        <p>Log in to the dashboard.</p>
      </li>
      <li>
        <p>Select the appropriate project from the drop down menu at the top left.</p>
      </li>
      <li>
        <p>On the Project tab, open the Object Store tab and click Containers category.</p>
      </li>
      <li>
        <p>Click Create Container.</p>
      </li>
      <li>
        <p>
          In the Create Container dialog box, enter a name for the container, and then click Create.
        </p>
      </li>
    </ol>
    <p>You have successfully created a container.</p>
    <p className="note-title">Note</p>
    <div className={styles.instructionExample}>
      <p>
        <em>To delete a container, click the More button and select Delete Container.</em>
      </p>
    </div>

    <h4 id="upload-an-object">Upload an object</h4>
    <ol>
      <li>
        <p>Log in to the dashboard.</p>
      </li>
      <li>
        <p>Select the appropriate project from the drop down menu at the top left.</p>
      </li>
      <li>
        <p>On the Project tab, open the Object Store tab and click Containers category.</p>
      </li>
      <li>
        <p>Select the container in which you want to store your object.</p>
      </li>
      <li>
        <p>Click the Upload Object icon.</p>
        <img
          className={styles.instructionalImage}
          src="/assets/support/user-guide/user-guide-24.png"
          alt="A screenshot of the Project tab showing where the Upload Object icon is at the right upper corner."
        />
      </li>
      <li>
        <p>
          The Upload File To Container: &lt;name&gt; dialog box appears. &lt;name&gt; is the name of
          the container to which you are uploading the object.
        </p>
      </li>
      <li>
        <p>Enter a name for the object.</p>
      </li>
      <li>
        <p>Browse to and select the file that you want to upload.</p>
      </li>
      <li>
        <p>Click Upload File.</p>
      </li>
    </ol>
    <img
      className={styles.instructionalImage}
      src="/assets/support/user-guide/user-guide-25.png"
      alt="A screenshot of the Upload Object to container dialog box."
    />
    <p>You have successfully uploaded an object to the container.</p>
    <p className="note-title">Note</p>
    <div className={styles.instructionExample}>
      <p>
        <em>To delete an object, click the More button and select Delete Object.</em>
      </p>
    </div>

    <h4 id="manage-an-object">Manage an object</h4>

    <h5 id="to-edit-an-object">To edit an object</h5>
    <ol>
      <li>
        <p>Log in to the dashboard.</p>
      </li>
      <li>
        <p>Select the appropriate project from the drop down menu at the top left.</p>
      </li>
      <li>
        <p>On the Project tab, open the Object Store tab and click Containers category.</p>
      </li>
      <li>
        <p>Select the container in which you want to store your object.</p>
      </li>
      <li>
        <p>Click the menu button and choose Edit from the dropdown list.</p>
      </li>
      <li>
        <p>The Edit Object dialog box is displayed.</p>
      </li>
      <li>
        <p>Browse to and select the file that you want to upload.</p>
      </li>
      <li>
        <p>Click Update Object</p>
      </li>
    </ol>
    <p className="note-title">Note</p>
    <div className={styles.instructionExample}>
      <p>
        <em>To delete an object, click the menu button and select Delete Object.</em>
      </p>
    </div>

    <h5 id="to-create-a-metadata-only-object-without-a-file">
      To create a metadata-only object without a file
    </h5>
    <p>
      You can create a new object in container without a file available and can upload the file
      later when it is ready. This temporary object acts a place-holder for a new object, and
      enables the user to share object metadata and URL info in advance.
    </p>
    <ol>
      <li>
        <p>Log in to the dashboard.</p>
      </li>
      <li>
        <p>Select the appropriate project from the drop down menu at the top left.</p>
      </li>
      <li>
        <p>On the Project tab, open the Object Store tab and click Containers category.</p>
      </li>
      <li>
        <p>Select the container in which you want to store your object.</p>
      </li>
      <li>
        <p>Click Upload Object.</p>
      </li>
      <li>
        <p>The Upload Object To Container: &lt;name&gt; dialog box is displayed.</p>
      </li>
      <li>
        <p>&lt;name&gt; is the name of the container to which you are uploading the object.</p>
      </li>
      <li>
        <p>Enter a name for the object.</p>
      </li>
      <li>
        <p>Click Update Object.</p>
      </li>
    </ol>

    <h5 id="to-create-a-pseudo-folder">To create a pseudo-folder</h5>
    <p>
      Pseudo-folders are similar to folders in your desktop operating system. They are virtual
      collections defined by a common prefix on the object’s name.
    </p>
    <ol>
      <li>
        <p>Log in to the dashboard.</p>
      </li>
      <li>
        <p>Select the appropriate project from the drop down menu at the top left.</p>
      </li>
      <li>
        <p>On the Project tab, open the Object Store tab and click Containers category.</p>
      </li>
      <li>
        <p>Select the container in which you want to store your object.</p>
      </li>
      <li>
        <p>Click Create Pseudo-folder.</p>
        <img
          className={styles.instructionalImage}
          src="/assets/support/user-guide/user-guide-26.png"
          alt="A screenshot of the Containers category showing where the create pseudo-folder button is located."
        />
      </li>
      <li>
        <p>
          The Create Pseudo-Folder in Container &lt;name&gt; dialog box is displayed. &lt;name&gt;
          is the name of the container to which you are uploading the object.
        </p>
      </li>
      <li>
        <p>Enter a name for the pseudo-folder.</p>
      </li>
      <li>
        <p>A slash (/) character is used as the delimiter for pseudo-folders in Object Storage.</p>
      </li>
      <li>
        <p>Click Create.</p>
        <img
          className={styles.instructionalImage}
          src="/assets/support/user-guide/user-guide-27.png"
          alt="A screenshot of the Containers category after creating a pseudo-folder."
        />
      </li>
    </ol>

    <div>
      <div>
        <Link href="/support/getting-started" className="page-previous" title="Go to previous page">
          Getting Started
        </Link>
        <a href="/support" className="page-up" title="Go to parent page">
          up
        </a>
        <Link href="/support/best-practices" className="page-next" title="Go to next page">
          Best Practices
        </Link>
      </div>
    </div>
  </div>
);

export default UserGuide;

UserGuide.getLayout = function getLayout(page) {
  return <SupportLayout>{page}</SupportLayout>;
};
