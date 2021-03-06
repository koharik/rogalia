/* global game */

"use strict";
function exitStage(message) {
    message = message || T("Refresh page...");
    game.ctx.fillStyle = "#fff";
    game.forceDrawStrokedText(
        T(message),
        CELL_SIZE,
        CELL_SIZE
    );

    game.network.disconnect();

    var buttons = [
        dom.button(T("Reset settings"), "", game.controller.reset),
    ];
    if (game.args["steam"]) {
        buttons.push(
            dom.button(T("Reload"), "", () => game.logout()),
            dom.button(T("Quit"), "", () => game.quit())
        );
    } else {
        buttons.push(
            game.button.logout(),
            dom.button(T("Reload"), "", game.reload)
        );
    }
    new Panel("exit", "", buttons)
        .hideTitle()
        .hideCloseButton()
        .show();
};
Stage.add(exitStage);
