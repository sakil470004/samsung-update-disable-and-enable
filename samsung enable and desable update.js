//// command for desable 

//show or permisstion devices
adb devices
//enter the adb shell
adb shell
//check the file has on shell
pm list packages | grep ‘keyword’ (check video for demo)
//stop the updated file
pm uninstall --user 0 'com.wssyncmldm'
pm uninstall --user 0 'com.sec.android.soagent'

////Commands to Re-install / Restore
 adb shell cmd package install-existing 'com.wssyncmldm'
 adb shell cmd package install-existing 'com.sec.android.soagent'
