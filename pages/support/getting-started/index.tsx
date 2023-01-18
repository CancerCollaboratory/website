import SupportLayout from "../../../components/supportLayout/supportLayout";
import styles from "../../../components/supportLayout/supportLayout.module.scss";
import NavLine from "../../../components/navLine/navLine";
import SupportFooterNav from "../../../components/supportFooterNav/supportFooterNav";

const GettingStarted = () => (
  <div>
    <h1>Getting Started</h1>
    <p>
      Cancer Genome Collaboratory is built using Openstack, which is an open-source cloud solution
      with extensive documentation provided on the{" "}
      <a href="http://docs.openstack.org/user-guide/dashboard.html">official site</a>.
    </p>
    <p>
      For your convenience, we offer these short instructions that you should follow in order to
      start a new instance, while also recommending you read the official user guide to familiarize
      with more advanced functionalities.
    </p>{" "}
    <br />
    <ol>
      <li>
        <h2 className={styles.hiddenAnchor} title="Access the Console" id="access-the-console" />

        <p className="instruction">
          First please open{" "}
          <a href="https://console.cancercollaboratory.org">console.cancercollaboratory.org</a> in
          your browser and login using the credentials provided.
        </p>
        <img
          className={styles.instructionalImage}
          alt="A screenshot of Cancer Genome Collaboratory Console"
          src="/assets/support/getting-started/Getting-started-1.png"
        />
      </li>
      <li id="getting-started-2">
        <h2 className={styles.hiddenAnchor} title="Pre VM setup" id="pre-vm-setup" />

        <p className="instruction">
          Before launching a virtual machine, you have to accomplish a number of steps.
        </p>

        <ol className="alpha-instruction" type="a">
          <li>
            <p>
              Create a SSH key-pair by going to the Compute tab, Access &amp; Security, Key Pairs:
            </p>
            <img
              className={styles.instructionalImage}
              alt="A screenshot of the create a SHH key-pair window."
              src="/assets/support/getting-started/Getting-started-2a.png"
            />
          </li>
          <li>
            <p>
              Customize your security groups with rules allowing access to your instance, by going
              to the Compute tab, Access &amp; Security, Security Groups.
            </p>
            <img
              alt="A screenshot of the create security group window."
              className={styles.instructionalImage}
              src="/assets/support/getting-started/Getting-started-2b.png"
            />
            <p>
              Pick a descriptive name and group similar rules together. For example, have a group
              allowing restricted access to SSH and Mysql from your organization’s IP space, and one
              security group more open for public access to a web application. There is a limit of
              10 security groups a project can have, so it is a good idea to plan the security
              groups/rules before hand. Openstack allows security groups editing after the instance
              has started, so additional changes can be made later if the exact requirements are not
              clearly defined.
            </p>
          </li>
          <li>
            <p>
              Decide on the flavor needed when launching the instance from the Compute, Instances
              tab:
            </p>
            <img
              alt="A screenshot of the luanch instance window."
              className={styles.instructionalImage}
              src="/assets/support/getting-started/Getting-started-2c.png"
            />
          </li>
          <li>
            <p>Choose the source image to be used (Ubuntu Precise, Trusty, Centos, Debian)</p>
            <img
              alt="A screenshot of the luanch instance window with the source image selected."
              className={styles.instructionalImage}
              src="/assets/support/getting-started/Getting-started-2d.png"
            />
          </li>
          <li>
            <p>Choose the SSH and security group(s) you previously created.</p>
            <img
              alt="A screenshot of the access and security tab of the luanch instance window with the SSH and security groups selected."
              className={styles.instructionalImage}
              src="/assets/support/getting-started/Getting-started-2e.png"
            />
          </li>
          <li>
            <p>Choose the network that your instance will connect to.</p>
            <img
              alt="A screenshot of the network tab of the launch instance window."
              className={styles.instructionalImage}
              src="/assets/support/getting-started/Getting-started-2f.png"
            />
          </li>
          <li>
            <p>
              Optionally, customize your instance after it has launched using the options available
              in the Post-Creation tab.
            </p>
            <img
              alt="A screenshot of the post-creation tab of the luanch instance window."
              className={styles.instructionalImage}
              src="/assets/support/getting-started/Getting-started-2g.png"
            />
            <p>
              Finally, click the Launch button. It will take a few minutes for the instance to
              start, depending on how large the base image you chose was, and if it was already
              cached or not on the physical server where the VM will be scheduled to start.
            </p>
          </li>
        </ol>
      </li>
      <li id="getting-started-3">
        <h2
          className={styles.hiddenAnchor}
          title="Associate a floating IP"
          id="associate-floating-ip"
        />

        <p className="instruction">Associate a floating/public IP address.</p>

        <p>
          By default, the VM will receive a private IP that is only reachable from inside your
          virtual network (other VMs connected to the same network).
        </p>

        <p>
          Because public IPv4 addresses are limited and there is an inherent security risk when
          connecting to the Internet, it is recommended to associate a floating/public IP address
          only to a single VM and use that one as an access server into your cloud environment.
        </p>
        <img
          alt="A screenshot of associating a floating/public IP address."
          className={styles.instructionalImage}
          src="/assets/support/getting-started/Getting-started-3.png"
        />
      </li>
      <li id="getting-started-4">
        <h2 className={styles.hiddenAnchor} title="SSH into your instance" id="ssh-into-instance" />

        <p className="instruction">SSH into your instance.</p>

        <p>
          When you started the VM and specified the name of your key pair, its public part was
          automatically added to the default user’s “~/.ssh/authorized_keys” file, which will allow
          you SSH access into it.
        </p>

        <p>
          From your laptop, first change the permissions for the private SSH key, so your SSH client
          doesn’t complain when you will try to use the key:
        </p>

        <pre>chmod 400 path_to_private_key</pre>

        <p>Then, using the desired SSH client application, run:</p>

        <pre>ssh -i path_to_private_key ubuntu@142.1.177.X</pre>
      </li>
      <li id="getting-started-5">
        <h2 className={styles.hiddenAnchor} title="Customize your VM" id="customize-vm" />

        <p className="instruction">
          Customize your virtual machine, upgrade the package index and existing packages, and it’s
          especially important to apply all the security updates available.
        </p>
      </li>
    </ol>
    <div className={styles.instructionExample}>
      <p>
        In order to access and analyze ICGC data on the Collaboratory, please follow the{" "}
        <a href="/node/764">user guide</a> provided that has step-by-step instructions.
      </p>
    </div>
    <SupportFooterNav
      previous={{
        label: "PREVIOUS: OVERVIEW",
        link: "/support/overview",
      }}
      next={{
        label: "NEXT: USER GUIDE",
        link: "/support/user-guide",
      }}
    />
  </div>
);

export default GettingStarted;

GettingStarted.getLayout = function getLayout(page) {
  return <SupportLayout>{page}</SupportLayout>;
};
