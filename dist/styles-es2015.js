(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/styles.less":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/less-loader/dist/cjs.js??ref--16-3!./src/styles.less ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "body.dialog-open {\n  overflow: hidden;\n}\nngx-smart-modal.wrong .nsm-content {\n  background-color: darkred;\n}\nngx-smart-modal.correct .nsm-content {\n  background-color: darkgreen;\n}\n.nsm-dialog-btn-close {\n  border: 0;\n  background: none;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  font-size: 1.2em;\n  cursor: pointer;\n}\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  transition: background-color 500ms;\n  background-color: transparent;\n  z-index: 999;\n}\n.overlay.nsm-overlay-open {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.overlay.transparent {\n  background-color: transparent;\n}\n.nsm-dialog {\n  position: relative;\n  opacity: 1;\n  visibility: visible;\n  min-height: 200px;\n  width: 100%;\n  max-width: 520px;\n  margin: 0 auto;\n  pointer-events: none;\n  outline: none;\n}\n.nsm-dialog.nsm-dialog-close {\n  opacity: 0;\n}\n.nsm-dialog.nsm-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - (1.75rem * 2));\n}\n.nsm-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  pointer-events: auto;\n  background-clip: padding-box;\n  color: white;\n  text-align: center;\n  border-radius: 10px;\n  padding: 1rem;\n  margin: 3rem;\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\n  outline: 0;\n  transform: translate3d(0, 0, 0);\n}\n.nsm-body {\n  position: relative;\n  flex: 1 1 auto;\n}\n.nsm-body h1 {\n  margin: 10px;\n}\n/* *************************Animations*************************/\n.nsm-dialog[class*=nsm-dialog-animation-] {\n  transition: transform 500ms ease-in-out, opacity 500ms;\n}\n.nsm-dialog-animation-ltr {\n  transform: translate3d(-50%, 0, 0);\n}\n.nsm-dialog-animation-ltr.nsm-dialog-open {\n  transform: translate3d(0, 0, 0);\n}\n.nsm-dialog-animation-ltr.nsm-dialog-close {\n  transform: translate3d(-50%, 0, 0);\n}\n.nsm-dialog-animation-rtl {\n  transform: translate3d(50%, 0, 0);\n}\n.nsm-dialog-animation-rtl.nsm-dialog-open {\n  transform: translate3d(0, 0, 0);\n}\n.nsm-dialog-animation-rtl.nsm-dialog-close {\n  transform: translate3d(50%, 0, 0);\n}\n.nsm-dialog-animation-ttb {\n  transform: translate3d(0, -50%, 0);\n}\n.nsm-dialog-animation-ttb.nsm-dialog-open {\n  transform: translate3d(0, 0, 0);\n}\n.nsm-dialog-animation-ttb.nsm-dialog-close {\n  transform: translate3d(0, -50%, 0);\n}\n.nsm-dialog-animation-btt {\n  transform: translate3d(0, 50%, 0);\n}\n.nsm-dialog-animation-btt.nsm-dialog-open {\n  transform: translate3d(0, 0, 0);\n}\n.nsm-dialog-animation-btt.nsm-dialog-close {\n  transform: translate3d(0, 50%, 0);\n}\nbody {\n  font-family: Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  box-sizing: border-box;\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOi9Vc2Vycy9TaWRvci9jb2RlL3N2b3lhLWlncmEvR1VJL3NyYy9hc3NldHMvbmd4LXNtYXJ0LW1vZGFsLmxlc3MiLCJzcmMvc3R5bGVzLmxlc3MiLCJzcmMvQzovVXNlcnMvU2lkb3IvY29kZS9zdm95YS1pZ3JhL0dVSS9zcmMvc3R5bGVzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGO0FERUE7RUFFSSx5QkFBQTtBQ0RKO0FES0E7RUFFSSwyQkFBQTtBQ0pKO0FEUUE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDTkY7QURTQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FDUEY7QURRRTtFQUNFLG9DQUFBO0FDTko7QURRRTtFQUNFLDZCQUFBO0FDTko7QURVQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FDUkY7QURTRTtFQUNFLFVBQUE7QUNQSjtBRFNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7QUNQSjtBRFdBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNIQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0FDVEY7QURZQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ1ZGO0FEUUE7RUFJSSxZQUFBO0FDVEo7QUFDQSwrREFBK0Q7QURhL0Q7RUFDRSxzREFBQTtBQ1hGO0FEY0E7RUFDRSxrQ0FBQTtBQ1pGO0FEYUU7RUFDRSwrQkFBQTtBQ1hKO0FEYUU7RUFDRSxrQ0FBQTtBQ1hKO0FEZUE7RUFDRSxpQ0FBQTtBQ2JGO0FEY0U7RUFDRSwrQkFBQTtBQ1pKO0FEY0U7RUFDRSxpQ0FBQTtBQ1pKO0FEZ0JBO0VBQ0Usa0NBQUE7QUNkRjtBRGVFO0VBQ0UsK0JBQUE7QUNiSjtBRGVFO0VBQ0Usa0NBQUE7QUNiSjtBRGlCQTtFQUNFLGlDQUFBO0FDZkY7QURnQkU7RUFDRSwrQkFBQTtBQ2RKO0FEZ0JFO0VBQ0UsaUNBQUE7QUNkSjtBQ2xIQTtFQUNFLDJHQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FEb0hGIiwiZmlsZSI6InNyYy9zdHlsZXMubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkuZGlhbG9nLW9wZW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5uZ3gtc21hcnQtbW9kYWwud3Jvbmcge1xuICAubnNtLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XG4gIH1cbn1cblxubmd4LXNtYXJ0LW1vZGFsLmNvcnJlY3Qge1xuICAubnNtLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcbiAgfVxufVxuXG4ubnNtLWRpYWxvZy1idG4tY2xvc2Uge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgei1pbmRleDogOTk5O1xuICAmLm5zbS1vdmVybGF5LW9wZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgfVxuICAmLnRyYW5zcGFyZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG4ubnNtLWRpYWxvZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gICYubnNtLWRpYWxvZy1jbG9zZSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAmLm5zbS1jZW50ZXJlZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtICgxLjc1cmVtICogMikpO1xuICB9XG59XG5cbi5uc20tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW46IDNyZW07XG4gIGJveC1zaGFkb3c6IDAgN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxM3B4IDE5cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNXB4IDI0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIG91dGxpbmU6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbi5uc20tYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMSAxIGF1dG87XG4gIGgxIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbn1cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKkFuaW1hdGlvbnMqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLm5zbS1kaWFsb2dbY2xhc3MqPW5zbS1kaWFsb2ctYW5pbWF0aW9uLV0ge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZS1pbi1vdXQsIG9wYWNpdHkgNTAwbXM7XG59XG5cbi5uc20tZGlhbG9nLWFuaW1hdGlvbi1sdHIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDAsIDApO1xuICAmLm5zbS1kaWFsb2ctb3BlbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuICAmLm5zbS1kaWFsb2ctY2xvc2Uge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCwgMCk7XG4gIH1cbn1cblxuLm5zbS1kaWFsb2ctYW5pbWF0aW9uLXJ0bCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNTAlLCAwLCAwKTtcbiAgJi5uc20tZGlhbG9nLW9wZW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbiAgJi5uc20tZGlhbG9nLWNsb3NlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDUwJSwgMCwgMCk7XG4gIH1cbn1cblxuLm5zbS1kaWFsb2ctYW5pbWF0aW9uLXR0YiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTUwJSwgMCk7XG4gICYubnNtLWRpYWxvZy1vcGVuIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gICYubnNtLWRpYWxvZy1jbG9zZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKTtcbiAgfVxufVxuXG4ubnNtLWRpYWxvZy1hbmltYXRpb24tYnR0IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1MCUsIDApO1xuICAmLm5zbS1kaWFsb2ctb3BlbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuICAmLm5zbS1kaWFsb2ctY2xvc2Uge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNTAlLCAwKTtcbiAgfVxufVxuIiwiYm9keS5kaWFsb2ctb3BlbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5uZ3gtc21hcnQtbW9kYWwud3JvbmcgLm5zbS1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcbn1cbm5neC1zbWFydC1tb2RhbC5jb3JyZWN0IC5uc20tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcbn1cbi5uc20tZGlhbG9nLWJ0bi1jbG9zZSB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgcmlnaHQ6IDhweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgei1pbmRleDogOTk5O1xufVxuLm92ZXJsYXkubnNtLW92ZXJsYXktb3BlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5vdmVybGF5LnRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubnNtLWRpYWxvZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubnNtLWRpYWxvZy5uc20tZGlhbG9nLWNsb3NlIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5uc20tZGlhbG9nLm5zbS1jZW50ZXJlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtICgxLjc1cmVtICogMikpO1xufVxuLm5zbS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbjogM3JlbTtcbiAgYm94LXNoYWRvdzogMCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDEzcHggMTlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA1cHggMjRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgb3V0bGluZTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cbi5uc20tYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMSAxIGF1dG87XG59XG4ubnNtLWJvZHkgaDEge1xuICBtYXJnaW46IDEwcHg7XG59XG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqQW5pbWF0aW9ucyoqKioqKioqKioqKioqKioqKioqKioqKiovXG4ubnNtLWRpYWxvZ1tjbGFzcyo9bnNtLWRpYWxvZy1hbmltYXRpb24tXSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlLWluLW91dCwgb3BhY2l0eSA1MDBtcztcbn1cbi5uc20tZGlhbG9nLWFuaW1hdGlvbi1sdHIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDAsIDApO1xufVxuLm5zbS1kaWFsb2ctYW5pbWF0aW9uLWx0ci5uc20tZGlhbG9nLW9wZW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuLm5zbS1kaWFsb2ctYW5pbWF0aW9uLWx0ci5uc20tZGlhbG9nLWNsb3NlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcbn1cbi5uc20tZGlhbG9nLWFuaW1hdGlvbi1ydGwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDUwJSwgMCwgMCk7XG59XG4ubnNtLWRpYWxvZy1hbmltYXRpb24tcnRsLm5zbS1kaWFsb2ctb3BlbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG4ubnNtLWRpYWxvZy1hbmltYXRpb24tcnRsLm5zbS1kaWFsb2ctY2xvc2Uge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDUwJSwgMCwgMCk7XG59XG4ubnNtLWRpYWxvZy1hbmltYXRpb24tdHRiIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKTtcbn1cbi5uc20tZGlhbG9nLWFuaW1hdGlvbi10dGIubnNtLWRpYWxvZy1vcGVuIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cbi5uc20tZGlhbG9nLWFuaW1hdGlvbi10dGIubnNtLWRpYWxvZy1jbG9zZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTUwJSwgMCk7XG59XG4ubnNtLWRpYWxvZy1hbmltYXRpb24tYnR0IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1MCUsIDApO1xufVxuLm5zbS1kaWFsb2ctYW5pbWF0aW9uLWJ0dC5uc20tZGlhbG9nLW9wZW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuLm5zbS1kaWFsb2ctYW5pbWF0aW9uLWJ0dC5uc20tZGlhbG9nLWNsb3NlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1MCUsIDApO1xufVxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG59XG4iLCJAaW1wb3J0IFwiYXNzZXRzL25neC1zbWFydC1tb2RhbFwiO1xuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.less":
/*!*************************!*\
  !*** ./src/styles.less ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/less-loader/dist/cjs.js??ref--16-3!./styles.less */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/styles.less");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sidor\code\svoya-igra\GUI\src\styles.less */"./src/styles.less");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map