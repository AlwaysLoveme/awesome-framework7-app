// handler Native App width capacitor
import { App } from "@capacitor/app";
import Framework7 from "framework7/types";
import { f7 as F7 } from "framework7-vue";
import { SplashScreen } from "@capacitor/splash-screen";
import { StatusBar, StatusBarStyle } from "@capacitor/status-bar";
import { Keyboard, KeyboardResize } from "@capacitor/keyboard";

const capacitorApp = {
  f7: F7,
  /*
  This method hides splashscreen after 2 seconds
  */
  handleSplashscreen() {
    if (!window.Capacitor.isNative) return;
    setTimeout(() => {
      SplashScreen.hide().then();
    }, 2000);
  },
  /*
  This method prevents back button tap to exit from app on android.
  In case there is an opened modal it will close that modal instead.
  In case there is a current view with navigation history, it will go back instead.
  */
  handleAndroidBackButton() {
    if (!window.Capacitor.isNative) return;
    let lasClickTime = new Date().valueOf();
    const f7 = capacitorApp.f7;
    const $ = f7.$;

    App.addListener("backButton", function () {
      if ($(".actions-modal.modal-in").length) {
        f7.actions.close(".actions-modal.modal-in");
        return;
      }
      if ($(".dialog.modal-in").length) {
        f7.dialog.close(".dialog.modal-in");
        return;
      }
      if ($(".sheet-modal.modal-in").length) {
        f7.sheet.close(".sheet-modal.modal-in");
        return;
      }
      if ($(".popover.modal-in").length) {
        f7.popover.close(".popover.modal-in");
        return;
      }
      if ($(".popup.modal-in").length) {
        if ($(".popup.modal-in>.view").length) {
          const currentView = f7.views.get(".popup.modal-in>.view");
          if (
            currentView &&
            currentView.router &&
            currentView.router.history.length > 1
          ) {
            currentView.router.back();
            return;
          }
        }
        f7.popup.close(".popup.modal-in");
        return;
      }
      if ($(".login-screen.modal-in").length) {
        f7.loginScreen.close(".login-screen.modal-in");
        return;
      }

      if ($(".page-current .searchbar-enabled").length) {
        f7.searchbar.disable(".page-current .searchbar-enabled");
        return;
      }

      if ($(".page-current .card-expandable.card-opened").length) {
        f7.card.close(".page-current .card-expandable.card-opened");
        return;
      }
      if ($(".panel.panel-in").length) {
        f7.panel.close(".panel.panel-in");
      }

      const currentView = f7.views.current;
      if (
        currentView &&
        currentView.router &&
        currentView.router.history.length > 1
      ) {
        currentView.router.back();
        return;
      } else {
        if (new Date().valueOf() - lasClickTime < 2000) {
          App.removeAllListeners();
          App.exitApp();
        } else {
          f7.toast
            .create({
              text: "再按一次退出应用",
              position: "center",
              closeTimeout: 1500,
            })
            .open();
          lasClickTime = new Date().valueOf();
        }
      }
    }).then();
  },
  /*
  This method does the following:
    - provides cross-platform view "shrinking" on keyboard open/close
    - hides keyboard accessory bar for all inputs except where it required
  */
  handleKeyboard() {
    if (!window.Capacitor.isNative) return;
    if (!Keyboard) return;

    const f7 = capacitorApp.f7;
    const $ = f7.$;
    Keyboard.setResizeMode({ mode: KeyboardResize.Native });
    Keyboard.setScroll({ isDisabled: true });
    Keyboard.setAccessoryBarVisible({ isVisible: false });
    window.addEventListener("keyboardWillShow", () => {
      f7.input.scrollIntoView(
        document.activeElement as HTMLElement,
        0,
        true,
        true
      );
    });
    window.addEventListener("keyboardDidShow", () => {
      f7.input.scrollIntoView(
        document.activeElement as HTMLElement,
        0,
        true,
        true
      );
    });
    window.addEventListener("keyboardDidHide", () => {
      if (
        document.activeElement &&
        $(document.activeElement).parents(".messagebar").length
      ) {
        return;
      }
      Keyboard.setAccessoryBarVisible({ isVisible: true });
    });

    $(document).on(
      "touchstart",
      "input, textarea, select",
      function (e: Event | any) {
        const nodeName = e?.target?.nodeName.toLowerCase();
        const type = e.target?.type;
        const showForTypes = ["datetime-local", "time", "date", "datetime"];
        if (nodeName === "select" || showForTypes.indexOf(type) >= 0) {
          Keyboard.setAccessoryBarVisible({ isVisible: true });
        } else {
          Keyboard.setAccessoryBarVisible({ isVisible: false });
        }
      },
      true
    );
  },
  handlerStatusbar() {
    if (!window.Capacitor.isNative) return;
    StatusBar.setStyle({ style: StatusBarStyle.Dark });
    StatusBar.setBackgroundColor({ color: "#FFFFFF" });
    StatusBar.setOverlaysWebView({ overlay: true });
  },
  init(f7: Framework7) {
    // Save f7 instance
    capacitorApp.f7 = f7;

    // Handle Android back button
    capacitorApp.handleAndroidBackButton();

    // Handle Splash Screen
    capacitorApp.handleSplashscreen();

    // Handle Keyboard
    capacitorApp.handleKeyboard();

    capacitorApp.handlerStatusbar();
  },
};

export default capacitorApp;
