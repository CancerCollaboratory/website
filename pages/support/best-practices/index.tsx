import SupportLayout from "../../../components/supportLayout/supportLayout";
import styles from "./bestPractices.module.scss";

const BestPractices = () => (
  <div className={styles.bestPractices}>
    <h1>Best Practices</h1>
    <ul>
      <li>
        <p>Spin up a VM instance corresponding to your needs.</p>
      </li>
      <li>
        <p>Always start using virtual machine/instance by applying latest security updates</p>
      </li>
      <li>
        <p>
          When the instance is terminated or unavailable, any data stored inside it is unavailable
          or lost. Upload data that you need to be persistent to a S3 bucket, or attach a volume and
          copy it there.
        </p>
      </li>
      <li>
        <p>
          Pull data you need immediate access to into your VM’s local storage. If your workflow
          needs a large reference dataset, it might be better to store this dataset on a web or FTP
          server in Collaboratory, instead of storing it inside each instance.
        </p>
      </li>
      <li>
        <p>Execute analysis, review result, delete any unnecessary local data.</p>
      </li>
      <li>
        <p>Push results and code you wish to keep to the S3-compatible object storage.</p>
      </li>
      <li>
        <p>Terminate your VM and, subsequently, the local storage.</p>
      </li>
      <li>
        <p>
          When editing the security group associated with your virtual machines/instances, only
          allow access from trusted IP addresses.
        </p>
      </li>
      <li>
        <p>
          If you DO have to allow SSH access to your publicly accessible instances from 0.0.0.0/0
          (entire Internet), make sure that only SSH key-based authentication is allowed by editing
          SSH&apos;s config file and restarting the ssh service afterwards:
          <ul>
            <li>
              <p>PasswordAuthentication no</p>
            </li>
            <li>
              <p>ChallengeResponseAuthentication no</p>
            </li>
          </ul>
        </p>
      </li>
      <li>
        <p>Do not share SSH keys or other credentials.</p>
      </li>
      <li>
        <p>Terminate/delete unused resources (instances, volumes, snapshots).</p>
      </li>
      <li>
        <p>
          Do not snapshot instances containing credentials and then share them with other users.
        </p>
      </li>
      <li>
        <p>
          Do not copy or create large data sets on a virtual machine that you plan to snapshot
          later, because it will increase the snapshot size and take longer to start instances from
          it later, as well as taking more storage space.
        </p>
      </li>
      <li>
        <p>
          Clean up confidential data (e.g. ssh keys, any saved credentials, bash history) before
          taking a snapshot of an instance, in case you will want to share that instance with other
          users later.
        </p>
      </li>
      <li>
        <p>
          If planning to later snapshot an instance, use the SMALLEST possible flavor type that will
          allow you to install your applications because you can not start an instance of a smaller
          size than the original size used when the snapshot was taken.
        </p>
      </li>
      <li>
        <p>
          The snapshot only captures and stores the contents of the root disk (/dev/sda), so do not
          store data or install applications on attached volumes if you need them to be part of the
          snapshot.
        </p>
      </li>
      <li>
        <p>Do not use docker containers or upload Openstack images from untrusted sources.</p>
      </li>
      <li>
        <p>Do not install software from untrusted sources.</p>
      </li>
      <li>
        <p>
          Associate a floating IP only with a single instance and SSH into it before using SSH to
          connect to your other instances. In this way, you limit your security exposure.
        </p>
      </li>
      <li>
        <p>
          Make use of cloud utilities for automating provisioning steps. Cloud-init is a package
          pre-installed in most modern Linux distributions that allows (among other things)
          execution of a script upon the initial boot of the instance. More information about using
          cloud-init and useful examples are available at{" "}
          <a href="https://cloudinit.readthedocs.io/en/latest/">
            https://cloudinit.readthedocs.io/en/latest/
          </a>
        </p>
      </li>
    </ul>
  </div>
);

export default BestPractices;

BestPractices.getLayout = function getLayout(page) {
  return <SupportLayout>{page}</SupportLayout>;
};
