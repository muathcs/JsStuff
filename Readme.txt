Console or Graphical Mode
=========================

You are in console mode by default.

To run in graphical mode you need to execute:
sudo /etc/init.d/gdm start

To stop graphical mode you need to execute:
sudo /etc/init.d/gdm stop

Mounting ITS N drive
====================

ITNG (thanks to Anthony Worral) has suggested to execute:
mount_sshfs 
to mount your N drive (mount_ndrive was given some problems)

and to umount the N drive execute:
umount_sshfs

The old scripts (mount_ndrive and umount_ndrive) are being kept there for 
reference purposes.

Oswaldo
