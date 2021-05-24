import { f7, Actions } from "framework7-vue";
import { renderLoading as showLoading, hideLoading } from "./loading";

const toast = (text = "") => {
  return f7.toast
    .create({
      text,
      closeTimeout: 2000,
      position: "center",
      destroyOnClose: true,
    })
    .open();
};

const dialogModal = ({
  title = "提示",
  content = "",
  buttons = [
    {
      text: "取消",
    },
    {
      text: "确定",
    },
  ],
}) => {
  return new Promise((resolve) => {
    f7.dialog
      .create({
        title,
        content,
        buttons,
        destroyOnClose: true,
        closeByBackdropClick: true,
        onClick(instance, index) {
          resolve(index);
        },
      })
      .open();
  });
};

export interface ActionsParam {
  buttons: Actions.Button[];
  clearButton?: boolean;
}
const actionCreate = ({ buttons = [], clearButton = true }: ActionsParam) => {
  return new Promise((resolve) => {
    let buttonsGroup = [...buttons];
    if (clearButton) {
      buttonsGroup = [
        [...buttons],
        [
          {
            text: "取消",
            color: "red",
          },
        ],
      ];
    }
    f7.actions
      .create({
        buttons: buttonsGroup,
        onClick(actions, e) {
          resolve({ e, actions });
        },
      })
      .open();
  });
};

export { toast, showLoading, hideLoading, dialogModal, actionCreate };
