import { Plugin } from "@super-doc/api";

export default class MoveUpTool extends Plugin.ToolLayoutBase {
  type = "MoveUp";
  text = "上移";
  icon = null;

  blockData = {
    type: this.type,
    data: {},
    class: this.type,
  };

  constructor(options) {
    super(options);
    this.getIcon();
  }

  getIcon() {
    const div = document.createElement("div");
    div.textContent = "H";
    return div;
  }

  action({ Editor }) {
    this.Editor = Editor;
    const { BlockManager } = this.Editor;
    const { currentHoverBlockId } = BlockManager;
    BlockManager.moveUp(currentHoverBlockId);
  }
}
