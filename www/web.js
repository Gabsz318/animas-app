(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web"],{

/***/ "U6Qn":
/*!********************************************************!*\
  !*** ./node_modules/@capacitor/device/dist/esm/web.js ***!
  \********************************************************/
/*! exports provided: DeviceWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceWeb", function() { return DeviceWeb; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");

class DeviceWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    async getId() {
        return {
            uuid: this.getUid(),
        };
    }
    async getInfo() {
        if (typeof navigator === 'undefined' || !navigator.userAgent) {
            throw this.unavailable('Device API not available in this browser');
        }
        const ua = navigator.userAgent;
        const uaFields = this.parseUa(ua);
        return {
            model: uaFields.model,
            platform: 'web',
            operatingSystem: uaFields.operatingSystem,
            osVersion: uaFields.osVersion,
            manufacturer: navigator.vendor,
            isVirtual: false,
            webViewVersion: uaFields.browserVersion,
        };
    }
    async getBatteryInfo() {
        if (typeof navigator === 'undefined' || !navigator.getBattery) {
            throw this.unavailable('Device API not available in this browser');
        }
        let battery = {};
        try {
            battery = await navigator.getBattery();
        }
        catch (e) {
            // Let it fail, we don't care
        }
        return {
            batteryLevel: battery.level,
            isCharging: battery.charging,
        };
    }
    async getLanguageCode() {
        return {
            value: navigator.language,
        };
    }
    parseUa(ua) {
        const uaFields = {};
        const start = ua.indexOf('(') + 1;
        let end = ua.indexOf(') AppleWebKit');
        if (ua.indexOf(') Gecko') !== -1) {
            end = ua.indexOf(') Gecko');
        }
        const fields = ua.substring(start, end);
        if (ua.indexOf('Android') !== -1) {
            const tmpFields = fields.replace('; wv', '').split('; ').pop();
            if (tmpFields) {
                uaFields.model = tmpFields.split(' Build')[0];
            }
            uaFields.osVersion = fields.split('; ')[1];
        }
        else {
            uaFields.model = fields.split('; ')[0];
            if (typeof navigator !== 'undefined' && navigator.oscpu) {
                uaFields.osVersion = navigator.oscpu;
            }
            else {
                if (ua.indexOf('Windows') !== -1) {
                    uaFields.osVersion = fields;
                }
                else {
                    const tmpFields = fields.split('; ').pop();
                    if (tmpFields) {
                        const lastParts = tmpFields
                            .replace(' like Mac OS X', '')
                            .split(' ');
                        uaFields.osVersion = lastParts[lastParts.length - 1].replace(/_/g, '.');
                    }
                }
            }
        }
        if (/android/i.test(ua)) {
            uaFields.operatingSystem = 'android';
        }
        else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
            uaFields.operatingSystem = 'ios';
        }
        else if (/Win/.test(ua)) {
            uaFields.operatingSystem = 'windows';
        }
        else if (/Mac/i.test(ua)) {
            uaFields.operatingSystem = 'mac';
        }
        else {
            uaFields.operatingSystem = 'unknown';
        }
        // Check for browsers based on non-standard javascript apis, only not user agent
        const isFirefox = !!window.InstallTrigger;
        const isSafari = !!window.ApplePaySession;
        const isChrome = !!window.chrome;
        const isEdge = /Edg/.test(ua);
        const isFirefoxIOS = /FxiOS/.test(ua);
        const isChromeIOS = /CriOS/.test(ua);
        const isEdgeIOS = /EdgiOS/.test(ua);
        // FF and Edge User Agents both end with "/MAJOR.MINOR"
        if (isSafari ||
            (isChrome && !isEdge) ||
            isFirefoxIOS ||
            isChromeIOS ||
            isEdgeIOS) {
            // Safari version comes as     "... Version/MAJOR.MINOR ..."
            // Chrome version comes as     "... Chrome/MAJOR.MINOR ..."
            // FirefoxIOS version comes as "... FxiOS/MAJOR.MINOR ..."
            // ChromeIOS version comes as  "... CriOS/MAJOR.MINOR ..."
            let searchWord;
            if (isFirefoxIOS) {
                searchWord = 'FxiOS';
            }
            else if (isChromeIOS) {
                searchWord = 'CriOS';
            }
            else if (isEdgeIOS) {
                searchWord = 'EdgiOS';
            }
            else if (isSafari) {
                searchWord = 'Version';
            }
            else {
                searchWord = 'Chrome';
            }
            const words = ua.split(' ');
            for (const word of words) {
                if (word.includes(searchWord)) {
                    const version = word.split('/')[1];
                    uaFields.browserVersion = version;
                }
            }
        }
        else if (isFirefox || isEdge) {
            const reverseUA = ua.split('').reverse().join('');
            const reverseVersion = reverseUA.split('/')[0];
            const version = reverseVersion.split('').reverse().join('');
            uaFields.browserVersion = version;
        }
        return uaFields;
    }
    getUid() {
        if (typeof window !== 'undefined') {
            let uid = window.localStorage.getItem('_capuid');
            if (uid) {
                return uid;
            }
            uid = this.uuid4();
            window.localStorage.setItem('_capuid', uid);
            return uid;
        }
        return this.uuid4();
    }
    uuid4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "wzPO":
/*!********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/web.js ***!
  \********************************************************/
/*! exports provided: CameraWeb, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraWeb", function() { return CameraWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "dTEF");


class CameraWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    async getPhoto(options) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            if (options.webUseInput || options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Photos) {
                this.fileInputExperience(options, resolve);
            }
            else if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Prompt) {
                let actionSheet = document.querySelector('pwa-action-sheet');
                if (!actionSheet) {
                    actionSheet = document.createElement('pwa-action-sheet');
                    document.body.appendChild(actionSheet);
                }
                actionSheet.header = options.promptLabelHeader || 'Photo';
                actionSheet.cancelable = false;
                actionSheet.options = [
                    { title: options.promptLabelPhoto || 'From Photos' },
                    { title: options.promptLabelPicture || 'Take Picture' },
                ];
                actionSheet.addEventListener('onSelection', async (e) => {
                    const selection = e.detail;
                    if (selection === 0) {
                        this.fileInputExperience(options, resolve);
                    }
                    else {
                        this.cameraExperience(options, resolve, reject);
                    }
                });
            }
            else {
                this.cameraExperience(options, resolve, reject);
            }
        });
    }
    async cameraExperience(options, resolve, reject) {
        if (customElements.get('pwa-camera-modal')) {
            const cameraModal = document.createElement('pwa-camera-modal');
            document.body.appendChild(cameraModal);
            try {
                await cameraModal.componentOnReady();
                cameraModal.addEventListener('onPhoto', async (e) => {
                    const photo = e.detail;
                    if (photo === null) {
                        reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["CapacitorException"]('User cancelled photos app'));
                    }
                    else if (photo instanceof Error) {
                        reject(photo);
                    }
                    else {
                        resolve(await this._getCameraPhoto(photo, options));
                    }
                    cameraModal.dismiss();
                    document.body.removeChild(cameraModal);
                });
                cameraModal.present();
            }
            catch (e) {
                this.fileInputExperience(options, resolve);
            }
        }
        else {
            console.error(`Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements.`);
            this.fileInputExperience(options, resolve);
        }
    }
    fileInputExperience(options, resolve) {
        let input = document.querySelector('#_capacitor-camera-input');
        const cleanup = () => {
            var _a;
            (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
        };
        if (!input) {
            input = document.createElement('input');
            input.id = '_capacitor-camera-input';
            input.type = 'file';
            input.hidden = true;
            document.body.appendChild(input);
            input.addEventListener('change', (_e) => {
                const file = input.files[0];
                let format = 'jpeg';
                if (file.type === 'image/png') {
                    format = 'png';
                }
                else if (file.type === 'image/gif') {
                    format = 'gif';
                }
                if (options.resultType === 'dataUrl' ||
                    options.resultType === 'base64') {
                    const reader = new FileReader();
                    reader.addEventListener('load', () => {
                        if (options.resultType === 'dataUrl') {
                            resolve({
                                dataUrl: reader.result,
                                format,
                            });
                        }
                        else if (options.resultType === 'base64') {
                            const b64 = reader.result.split(',')[1];
                            resolve({
                                base64String: b64,
                                format,
                            });
                        }
                        cleanup();
                    });
                    reader.readAsDataURL(file);
                }
                else {
                    resolve({
                        webPath: URL.createObjectURL(file),
                        format: format,
                    });
                    cleanup();
                }
            });
        }
        input.accept = 'image/*';
        input.capture = true;
        if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Photos ||
            options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Prompt) {
            input.removeAttribute('capture');
        }
        else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"].Front) {
            input.capture = 'user';
        }
        else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"].Rear) {
            input.capture = 'environment';
        }
        input.click();
    }
    _getCameraPhoto(photo, options) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            const format = photo.type.split('/')[1];
            if (options.resultType === 'uri') {
                resolve({
                    webPath: URL.createObjectURL(photo),
                    format: format,
                });
            }
            else {
                reader.readAsDataURL(photo);
                reader.onloadend = () => {
                    const r = reader.result;
                    if (options.resultType === 'dataUrl') {
                        resolve({
                            dataUrl: r,
                            format: format,
                        });
                    }
                    else {
                        resolve({
                            base64String: r.split(',')[1],
                            format: format,
                        });
                    }
                };
                reader.onerror = e => {
                    reject(e);
                };
            }
        });
    }
    async checkPermissions() {
        if (typeof navigator === 'undefined' || !navigator.permissions) {
            throw this.unavailable('Permissions API not available in this browser');
        }
        try {
            // https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query
            // the specific permissions that are supported varies among browsers that implement the
            // permissions API, so we need a try/catch in case 'camera' is invalid
            const permission = await window.navigator.permissions.query({
                name: 'camera',
            });
            return {
                camera: permission.state,
                photos: 'granted',
            };
        }
        catch (_a) {
            throw this.unavailable('Camera permissions are not available in this browser');
        }
    }
    async requestPermissions() {
        throw this.unimplemented('Not implemented on web.');
    }
}
const Camera = new CameraWeb();

//# sourceMappingURL=web.js.map

/***/ })

}]);
//# sourceMappingURL=web.js.map