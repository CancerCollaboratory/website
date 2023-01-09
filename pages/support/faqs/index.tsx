import Image from "next/image";
import SupportLayout from "../../../components/supportLayout/supportLayout";
import styles from "../styles.module.scss";
import imageSSH from "";
import imageProtectVM from "";

const FrequentlyAskedQuestions = () => (
  <div className={styles.supportPage}>
    <div className={styles.content}>
      <h1>Frequently Asked Questions</h1>

      <h3>Q: Do you monitor my VM's activity?</h3>

      <p>
        A: We do not monitor user VM activity, but we used in the past a free open-source monitoring
        tool called Sensu to monitor our own VMs, and we have an Ansible playbook that you could use
        to deploy the sensu clients and server:{" "}
        <a href="https://github.com/ICGC-TCGA-PanCancer/monitoring-bag">
          https://github.com/ICGC-TCGA-PanCancer/monitoring-bag
        </a>
      </p>

      <p>
        Sensu can be extended and you can send some of its metrics (cpu, memory, disk, network) to a
        Graphite server. There are are many other open-source monitoring solutions (Nagios, Cacti,
        Zabbix, etc) that can be used.
      </p>

      <h3>
        Q: I cannot SSH into my VM which was working fine yesterday, do you know what happened?
      </h3>

      <p>
        A: Please provide us more details about your VM in order to investigate. In the meantime,
        please click on the Instance name in the Compute -&gt; Instances tab, and then click on the
        Console tab to see if there is any error output sent to the console.
      </p>

      <p>
        If you see messages like below it means that the kernel has hung and you will have to hard
        reboot the VM using the Actions drop-down menu.
      </p>

      <p>&nbsp;</p>

      <pre>
        {`
      [ 1920.399095] Not tainted 3.13.0-79-generic #123-Ubuntu
      [ 1920.399559] "echo 0 &gt;/proc/sys/kernel/hung_task_timeout_secs" disables this message. 
      [ 1920.400763] INFO: taskapt-check:1286 blocked for more than 120 seconds. 
      [ 1920.401360] Not tainted 3.13.0-79-generic#123-Ubuntu 
      [ 1920.401820] "echo 0 &gt; /proc/sys/kernel/hung_task_timeout_secs" disables this message. 
      [ 2040.400079] INFO: task rs:main Q:Reg:1061 blocked for more than 120 seconds. 
      [ 2040.400697] Not tainted 3.13.0-79-generic #123-Ubuntu 
      [ 2040.401132] "echo 0 &gt;/proc/sys/kernel/hung_task_timeout_secs" disables this message. 
      [ 2040.401883] INFO: taskapt-check:1286 blocked for more than 120 seconds.
      `}
      </pre>

      <Image
        src="/assets/support/faq/SSH-into-VM-FAQ.png"
        alt="SSH into VM instructions"
        width="570"
        height="245"
      />

      <p>&nbsp;</p>

      <p>
        A possible way to avoid this issue in the future is described in this blog:{" "}
        <a href="https://www.blackmoreops.com/2014/09/22/linux-kernel-panic-issue-fix-hung_task_timeout_secs-blocked-120-seconds-problem/">
          https://www.blackmoreops.com/2014/09/22/linux-kernel-panic-issue-fix-hung_task_timeout_secs-blocked-120-seconds-problem/
        </a>
      </p>

      <p>&nbsp;</p>

      <p>
        Basically, add these lines to "/etc/sysctl.conf":
        <pre>vm.dirty_background_ratio = 5 vm.dirty_ratio = 10</pre>
      </p>

      <p>
        And then apply them: <pre>sysctl -p </pre>
      </p>

      <p>
        A good reading describing these parameters can also be found here:{" "}
        <a href="https://lonesysadmin.net/2013/12/22/better-linux-disk-caching-performance-vm-dirty_ratio/">
          https://lonesysadmin.net/2013/12/22/better-linux-disk-caching-performance-vm-dirty_ratio/
        </a>
      </p>

      <h3>Q: How can I save the changes I made to my VM, so I can use it later?</h3>

      <p>
        A: You can snapshot your instance which saves its state into a new base image that you can
        use later. The snapshot causes the instance to be paused temporarily and it's preferable to
        not have disk activity while doing this, and the snapshot might even fail if the instance
        has (or had) a lot of data written to it since it was started. Please see the User Guide
        section for more info on how to take a snapshot.
      </p>

      <h3>
        Q: What can I do to protect my VM by accidentally being terminated by other colleagues
        sharing the resources available to our project?
      </h3>

      <p>
        A: You can “lock” the instance which will cause it to not accept any state changes, until it
        is “unlocked”. The operation is available in the “Actions” drop-down of each instance.
      </p>

      <Image
        src="/assets/support/faq/Protect-VM-FAQ.png"
        alt="Protect VM from deletion"
        width="200"
        height="200"
      />
      <h3>
        Q: I attached a large volume to my instance (10 TB), but when I try to format it takes a
        very long time. What can I do to make this step faster?
      </h3>

      <p>
        A: We recommend you format it as XFS and use the "-K" option:{" "}
        <pre>mkfs.xfs -K /dev/vdb </pre>
      </p>

      <p>In our tests, it took around 3 min to format a 10 TB attached volume.</p>

      <h3>
        Q: How do I give access to another user to my instance, without giving him access to my SSH
        private key?
      </h3>

      <p>
        A: You should never give another user access to your credentials or private key. Please run
        the following commands inside your instance in order to create a new user and allow him SSH
        key-based access to your instance. Replace "username" with your colleague's name.
      </p>

      <ol>
        <li>
          <code>sudo adduser username</code>
        </li>
        <li>
          <code>sudo usermod -a -G users username</code>
        </li>
        <li>
          <code>mkdir /home/username/.ssh/</code>
        </li>
        <li>
          <code>chmod 700 /home/username/.ssh/</code>
        </li>
        <li>
          <code>chown username:username /home/username/.ssh/</code>
        </li>
        <li>
          Obtain the user’s SSH public key and add it to his home directory:{" "}
          <code>/home/username/.ssh/authorized_keys</code>
        </li>
        <li>
          <code>chown username:username /home/username/.ssh/authorized_keys</code>
        </li>
      </ol>
    </div>
  </div>
);

export default FrequentlyAskedQuestions;

FrequentlyAskedQuestions.getLayout = function getLayout(page) {
  return <SupportLayout>{page}</SupportLayout>;
};
