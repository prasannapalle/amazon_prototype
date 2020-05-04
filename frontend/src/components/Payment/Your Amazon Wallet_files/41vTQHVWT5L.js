(function(){var l=PaymentsPortal2.modules.define;l("components/DefaultComponent",["component"],function(p){return p.extend({initialize:function(){window.alert("DefaultComponent initialize!")}})});l("components/UpiOtherPMListItemComponent","component continuable events/InstrumentRowSelectedEvent public-event-registry css-utils components/SimplePaymentOptionListItemComponent lang upi-redirection-util clog events/spinner-events".split(" "),function(p,g,k,n,e,c,d,m,f,t){return c.extend(g,{isUPIValidated:!1,
isUpiContinuable:!1,isUpiRegistrationSelected:!1,upiContainer:"",upiDisabledMessageContainer:"",upiValidationInputContainer:"",upiInputContainer:"",isUpiUsable:!0,instrumentId:"",instrumentType:"",isAPBSelected:!1,isUpiAPBMultiTenderEnabled:!1,selectedBankValue:"",redirectUrl:"",returnUrl:"",clientId:"",upiAPBUncheckedMessageContainer:"",upiRegistrationSubsectionInfoContainer:"",isAPBDeselectTriggered:!1,isAutomaticAPBDeselectForUpiEnabled:!1,httpMethod:"",initialize:function(a,b){this.isUpiUsable=
b.data.isUpiUsable;this.instrumentId=b.data.instrumentId;this.instrumentType=b.data.instrumentType;this.isUpiUsable&&(n.register(k),n.register("UpiRedirectionContinueEvent"));this.upiContainer=b.data.upiContainer;this.upiDisabledMessageContainer=b.data.upiDisabledMessageContainer;this.upiValidationInputContainer=b.data.upiValidationInputContainer;this.upiInputContainer=b.data.upiInputContainer;this.upiAPBUncheckedMessageContainer=b.data.upiAPBUncheckedMessageContainer;this.isAutomaticAPBDeselectForUpiEnabled=
b.data.isAutomaticAPBDeselectForUpiEnabled;this.upiRegistrationSubsectionInfoContainer=b.data.upiRegistrationSubsectionInfoContainer;this._toggleUPIInputContainer(!1);this.isUpiAPBMultiTenderEnabled=b.data.isUpiAPBMultiTenderEnabled;this._toggleUncheckAPBtoEnableUPIMessage(!1);e.showElement(this.getDOMElement(this.upiContainer))},_onInstrumentSelected:function(){this._getContainerElement().addClass("pmts-selected");this._getInstrumentSelectionInputElement().prop("checked",!0);this._toggleUPIInputContainer(!0);
this._toggleUPIAPBUncheckedMessage();this._triggerBackingInstrumentSelectedEvent()},_onInstrumentDeselected:function(){this._getContainerElement().removeClass("pmts-selected");this._toggleUPIInputContainer(!1);this._getInstrumentSelectionInputElement().prop("checked",!1)},_isInstrumentSelected:function(){return this._getContainerElement().hasClass("pmts-selected")},_getContainerElement:function(){return this.getDOMElement(this.upiContainer)},_toggleUPIValidationContainer:function(a){0<this.getDOMElement(this.upiValidationInputContainer).length&&
e.toggleElement(this.getDOMElement(this.upiValidationInputContainer),a)},_toggleUPIInputContainer:function(a){0<this.getDOMElement(this.upiInputContainer).length&&e.toggleElement(this.getDOMElement(this.upiInputContainer),a)},_toggleUncheckAPBtoEnableUPIMessage:function(a){0<this.getDOMElement(this.upiDisabledMessageContainer).length&&e.toggleElement(this.getDOMElement(this.upiDisabledMessageContainer),a)},_toggleUPIAPBUncheckedMessage:function(){this.isAutomaticAPBDeselectForUpiEnabled&&this.isAPBSelected&&
this.isUpiRegistrationSelected&&!this.isUpiContinuable?(this.isAPBDeselectTriggered=this.isUpiContinuable=!0,this._toggleUPIAPBUncheckedMessageContainer(!0),this._toggleUPIRegistrationSubsectionInfoContainer(!1)):this.isUpiRegistrationSelected&&!this.isAPBDeselectTriggered&&this._toggleUPIRegistrationSubsectionInfoContainer(this.isUpiContinuable)},_toggleUPIAPBUncheckedMessageContainer:function(a){var b=this.getDOMElement(this.upiAPBUncheckedMessageContainer);0<b.length&&e.toggleElement(b,a)},_toggleUPIRegistrationSubsectionInfoContainer:function(a){var b=
this.getDOMElement(this.upiRegistrationSubsectionInfoContainer);0<b.length&&e.toggleElement(b,a)},_triggerBackingInstrumentSelectedEvent:function(){var a=this.isUpiContinuable?[]:[this.widget.getLocalizedString(this.isUpiRegistrationSelected?"apx_upi_registration_disabled_message_apb_selected":"apx_upi_not_verified")],b=this.isUpiRegistrationSelected&&this.isUpiContinuable;this.widget.trigger("backingInstrumentSelected",{instrumentId:this._getInstrumentId(),instrumentType:this._getInstrumentType(),
errors:a,paymentMethod:this.data.paymentMethod,isUpiRedirectionRequired:b})},bindToEvents:function(){var a=this;d.bind(c.prototype.bindToEvents,this).apply();a.widget.on(k,this,function(a){a.instrumentId===this._getInstrumentId()?this._onInstrumentSelected():this._onInstrumentDeselected()});a.widget.on("apbSelectionChanged",a,function(b){void 0!==a.widget.get("apbCheckboxSelected")&&a.isUpiUsable&&(a.isAPBSelected=b.isSelected,a.isAutomaticAPBDeselectForUpiEnabled&&b.isSelected&&(this._toggleUPIAPBUncheckedMessageContainer(!1),
this.isAPBDeselectTriggered=!1),a.isUpiAPBMultiTenderEnabled||(this._isInstrumentSelected()&&b.isSelected&&(this.setContinuable(!1),a.widget.trigger("PaymentPlanSelected",{isValid:!1})),this.setDisabled(b.isSelected),this._toggleUncheckAPBtoEnableUPIMessage(b.isSelected)))});a.widget.on("ValidateUpiIdResultEvent",a,function(a){this.isUpiContinuable=this.isUPIValidated=a});a.widget.on("UpiActionChangeEvent",a,function(b){a._toggleUPIValidationContainer(b.isUpiValidationContainerSelected);a.isUpiRegistrationSelected=
!b.isUpiValidationContainerSelected;a.isUpiContinuable=b.isUpiValidationContainerSelected?a.isUPIValidated:a.getContinuable();b.isUpiValidationContainerSelected?(a._toggleUPIAPBUncheckedMessageContainer(!1),a._toggleUPIRegistrationSubsectionInfoContainer(!1),this.isAPBDeselectTriggered=!1):(a.selectedBankValue=b.selectedBank,a.redirectUrl=b.redirectUrl,a.returnUrl=b.returnUrl,a.clientId=b.clientId,a.httpMethod=b.httpMethod);a._isInstrumentSelected()&&a._triggerInstrumentRowSelectedEvent()});a.widget.on("UpiBankSelectionChangeEvent",
a,function(b){a.isUpiContinuable=!0;a.isUpiRegistrationSelected=!0;a.selectedBankValue=b.selectedBank;a.redirectUrl=b.redirectUrl;a.returnUrl=b.returnUrl;a.clientId=b.clientId;a.httpMethod=b.httpMethod;a._isInstrumentSelected()&&a._triggerInstrumentRowSelectedEvent()});a.widget.on("UpiRedirectionContinueEvent",a,function(){var b=f.getCurrentTime();a._isInstrumentSelected()&&(a.widget.trigger(t.showSpinner),f.logCounterMetric({feature:"UpiRegistrationRedirection",resource:"_Count"}),m.upiRegistration(a.selectedBankValue,
a.redirectUrl,a.returnUrl,a.clientId,a.httpMethod)?f.logCounterMetric({feature:"UpiRegistrationRedirection",resource:"_SuccessCount"}):f.logCounterMetric({feature:"UpiRegistrationRedirection",resource:"_ErrorCount"}),f.logLatencyMetric({feature:"UpiRegistrationRedirection",resource:"_Latency",startTime:b}),f.publishMetrics());return!1})},bindToElements:function(){var a=this;a.isUpiUsable&&a._getContainerElement().click(function(){a._isInstrumentSelected()||!a.isUpiUsable||a.isAPBSelected&&!a.isUpiAPBMultiTenderEnabled||
a._triggerInstrumentRowSelectedEvent()})}})});l("components/UpiRegistrationComponent",["component","css-utils","continuable","lang","public-event-registry"],function(p,g,k,n,e){return p.extend(k,{isUpiValidated:!1,isUpiRegistrationSelected:!1,upiActionDropdown:"",upiRegistrationDropdownContainer:"",upiBankSelectDropdown:"",redirectUrl:"",returnUrl:"",upiRegistrationDisabledApbMessageContainer:"",isUpiAPBMultiTenderEnabled:!1,isAPBSelected:!1,clientId:"",isApxReloadEnabled:!1,httpMethod:"",initialize:function(c,
d){e.register("UpiActionChangeEvent");e.register("UpiBankSelectionChangeEvent");e.register("UpiRedirectionRequiredEvent");this.upiBankSelectDropdown=d.data.upiBankSelectDropdown;this.upiActionDropdown=d.data.upiActionDropdown;this.upiRegistrationDropdownContainer=d.data.upiRegistrationDropdownContainer;this.redirectUrl=d.data.redirectUrl;this.returnUrl=d.data.returnUrl;this.upiRegistrationDisabledApbMessageContainer=d.data.upiRegistrationDisabledApbMessageContainer;this.isUpiAPBMultiTenderEnabled=
d.data.isUpiAPBMultiTenderEnabled;this.clientId=d.data.clientId;this.isApxReloadEnabled=d.data.isApxReloadEnabled;this.httpMethod=d.data.httpMethod},_toggleUPIRegistrationContainer:function(c){0<this.getDOMElement(this.upiRegistrationDropdownContainer).length&&g.toggleElement(this.getDOMElement(this.upiRegistrationDropdownContainer),c)},_toggleUncheckAPBtoEnableUPIMessage:function(c){var d=this.getDOMElement(this.upiRegistrationDisabledApbMessageContainer);0<d.length&&g.toggleElement(d,c)},_getUpiRegistrationSelectedBank:function(){var c=
this.getDOMElement(this.upiBankSelectDropdown);return 0<c.length?c[0].value:""},_triggerUpiRegistrationSelection:function(){if(this.isUpiRegistrationSelected){this._toggleUncheckAPBtoEnableUPIMessage(this.isAPBSelected);this._toggleUPIRegistrationContainer(!this.isAPBSelected);this.setContinuable(!this.isAPBSelected);var c;c=this.isAPBSelected?"":this._getUpiRegistrationSelectedBank();this.widget.trigger("UpiActionChangeEvent",{isUpiValidationContainerSelected:!1,selectedBank:c,redirectUrl:this.redirectUrl,
returnUrl:this.returnUrl,clientId:this.clientId,httpMethod:this.httpMethod})}},_isBankSelected:function(){return""!==this._getUpiRegistrationSelectedBank()},bindToEvents:function(){var c=this;n.bind(p.prototype.bindToEvents,this).apply();c.widget.on("ValidateUpiIdResultEvent",this,function(c){this.isUpiValidated=c});c.widget.on("componentsInitialized",c,function(){var d=c.getDOMElement(c.upiActionDropdown);0<d.length&&d.trigger("change");c.isUpiValidated=!1});if(!c.isApxReloadEnabled)c.widget.on("apbSelectionChanged",
c,function(d){void 0!==c.widget.get("apbCheckboxSelected")&&c.isUpiAPBMultiTenderEnabled&&(c.isAPBSelected=d.isSelected,c._triggerUpiRegistrationSelection())})},bindToElements:function(){var c=this;n.bind(p.prototype.bindToElements,this).apply();var d=c.getDOMElement(c.upiBankSelectDropdown);0<d.length&&d.bind("change",function(){c.isUpiRegistrationSelected=!0;c.setContinuable(!0);c.widget.trigger("UpiBankSelectionChangeEvent",{selectedBank:c._getUpiRegistrationSelectedBank(),redirectUrl:c.redirectUrl,
returnUrl:c.returnUrl,clientId:c.clientId,httpMethod:c.httpMethod})});d=c.getDOMElement(c.upiActionDropdown);0<d.length&&d.bind("change",function(){var d=this.value;"upi-registration"===d?(c.isUpiRegistrationSelected=!0,c._triggerUpiRegistrationSelection()):"upi-acceptance"===d&&(c.isUpiRegistrationSelected=!1,c.setContinuable(c.isUpiValidated),c._toggleUncheckAPBtoEnableUPIMessage(!1),c.widget.trigger("UpiActionChangeEvent",{isUpiValidationContainerSelected:!0}),c._toggleUPIRegistrationContainer(!1))})}})});
l("components/ValidateUpiComponent",["form-component","css-utils","continuable","lang"],function(p,g,k,n){var e,c,d,m,f,t,a,b,v,r,l,s,q;return p.extend(k,{initialize:function(a,b){e=b.data.JsBindingEncryptedVpaInput;c=b.data.JsBindingValidateVpaButton;d=b.data.JsBindingAlertSuccess;m=b.data.JsBindingAlertFailure;f=b.data.JsBindingSectionSuccess;t=b.data.JsBindingInputHelpTextSection;q=null},bindToElements:function(){var h=this;a=this.getDOMElement(e);b=this.getDOMElement(c);v=this.getDOMElement(d);
r=this.getDOMElement(m);l=this.getDOMElement(f);s=this.getDOMElement(t);this.watchContinuable(this,function(a){h.widget.trigger("ValidateUpiIdResultEvent",a);a&&h._displaySuccessMessage();h.widget.trigger("PaymentPlanSelected",{isValid:a})});a.live("input propertychange",function(){h._setInputHelpTextVisible(!0);h.setContinuable(q&&q===a.val())});h.setContinuable(q&&q===a.val());a.focusout(this._canonicalizeInputTextField);b.click(function(){a.focusout();var b=h.form.validateForm();if(0<b.length)h._displayFormErrorMessages(b),
h.widget.trigger("ValidateUpiIdResultEvent",!1);else{var d=a.val();h.widget.trigger("submitFormAjaxStarted");h.widget.continueRequest({"ppw-widgetState":h.getWidgetState(c),"ppw-widgetEvent":"ValidateUpiIdEvent",__sif_encryptedVPA_collect:d},{success:function(a){var b=a.additionalWidgetResponseData.additionalData.valid;a=a.additionalWidgetResponseData.additionalData.message;"true"===b?(q=d,h.setContinuable(!0),h._displaySuccessMessage(a)):"false"===b?(q=null,h.setContinuable(!1),h._displayErrorMessage(a)):
a&&(q=null,h.setContinuable(!0),h._displayErrorMessage(a))},complete:function(){h.widget.trigger("submitFormAjaxCompleted")}})}return!1})},_displayFormErrorMessages:function(a){0!==a.length&&(a=a[0],r.find(".a-alert-content").html(a.localizedMessageString),this.form.displayErrorMessage(a.field,r),g.hideElement(l),g.hideElement(s))},_displayErrorMessage:function(a){r.find(".a-alert-content").html(a);g.showElement(r);g.hideElement(l);g.hideElement(s)},_displaySuccessMessage:function(a){a&&v.find(".a-alert-content").html(a);
g.showElement(l);g.hideElement(r);g.hideElement(s)},_setInputHelpTextVisible:function(a){a?(g.showElement(s),g.hideElement(l),g.hideElement(r)):g.hideElement(s)},_canonicalizeInputTextField:function(){var b=n.trim(a.val());a.val(b)}})});l("components/SelectableUpiListComponent",["component","lang","AUI!P","jQuery","clog"],function(p,g,k,n,e){var c,d,m,f=function(a,b,d,e,f){if(!c){var g=window.cordova;if(g)c=g.require("cordova/exec");else{f(a,b,null,"cordova undefined");return}}var h=l();d.requestId=
h;c(function(c){e(a,b,h,c)},function(c){f(a,b,h,c)},m.serviceName,b,[d])},l=function(){function a(){return Math.random().toString(16).slice(-4)}return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()},a=function(a,b,c,d,e,f){var g={};if("SUCCESS"===d.status)if(e.forEach(function(a){g[a]=0}),d.hasOwnProperty("permissions")){d.permissions.forEach(function(a){"GRANTED"===a.status&&(g[a.label]=1)});for(var m in g)if(!g[m]){f.externalNeedsPermissionsHandler(a);return}f.externalHasPermissionsHandler(a)}else f.externalErrorHandler(a,
b,c,d);else f.externalErrorHandler(a,b,c,d)},b=function(a,b,c,d){m.executeUpi(a,"CHECK_PERMISSION",{permission:b},c,d)},v=function(c,d){var e=["android.permission.READ_PHONE_STATE","android.permission.SEND_SMS","android.permission.RECEIVE_SMS"];b(c,e,function(b,c,u,f){a(b,c,u,f,e,d)},d.externalErrorHandler)},r=function(a,b,c,d){m.executeUpi(a,"IS_DEVICE_FINGERPRINT_VALID",{deviceFingerPrint:b},c,d)},B=function(a,b,c,d,e,f){var g={externalMatchHandler:d,externalMismatchHandler:e,externalErrorHandler:f};
r(a,c,function(a,d,e,u){u&&"SUCCESS"===u.status?"true"===u.isValid?g.externalMatchHandler(a,b,c):g.externalMismatchHandler(a,b):g.externalErrorHandler(a,d,e,u)},g.externalErrorHandler)},s=function(a,b,c){m.executeUpi(a,"SDK_INIT",{},b,c)},q=function(a,b,c,e){var f={externalHasPermissionsHandler:b,externalNeedsPermissionsHandler:c,externalErrorHandler:e};k.when("safe-mash").execute(function(b){b&&(d||(d=window.device),m=y.getSDKHelper(d.platform),"iOS"!==d.platform&&s(a,function(a,b,c,d){"SUCCESS"===
d.status?(a.isJuspaySdkCallEligible=!0,v(a,f)):f.externalErrorHandler(a,b,c,d)},f.externalErrorHandler))})},h=function(a,b,c){for(var d in a.savedHandleIndexes)a.widget.trigger("JuspayDeviceSignatureMatchesEvent",d,c);e.logCounterMetric({feature:"SelectableUpiSdkCalls",resource:"_SuccessCount"});e.logLatencyMetric({feature:"SelectableUpiSdkCalls",resource:"_Latency",startTime:a.sdkCallStartTime});e.publishMetrics()},C=function(a,b){for(var c in a.savedHandleIndexes)a.widget.trigger("JuspayDeviceSignatureDoesNotMatchEvent",
c);e.logCounterMetric({feature:"SelectableUpiSdkCalls",resource:"_SuccessCount"});e.logLatencyMetric({feature:"SelectableUpiSdkCalls",resource:"_Latency",startTime:a.sdkCallStartTime});e.publishMetrics()},w=function(a){a.isDeviceSignatureCheckEligible=!0;a.widget.trigger("JuspayHasPermissionsEvent")},D=function(a){a.isDeviceSignatureCheckEligible=!1;a.widget.trigger("JuspayHasNoPermissionsEvent");e.logCounterMetric({feature:"SelectableUpiSdkCalls",resource:"_SuccessCount"});e.logLatencyMetric({feature:"SelectableUpiSdkCalls",
resource:"_Latency",startTime:a.sdkCallStartTime});e.publishMetrics()},x=function(a,b,c,d){a.isJuspaySdkCallEligible=!1;window.console.error("JusPay SDK failed",b,c,d);a.widget.trigger("JuspayErrorEvent");e.logCounterMetric({feature:"SelectableUpiSdkCalls",resource:"_ErrorCount"});e.logLatencyMetric({feature:"SelectableUpiSdkCalls",resource:"_Latency",startTime:a.sdkCallStartTime});e.publishMetrics()},z=function(a,b){var c=Object.create(a),d;for(d in b)b.hasOwnProperty(d)&&(c[d]=b[d]);return c};Object.create||
(Object.create=function(a){function b(){}if(1<arguments.length)throw Error("Object.create implementation only accepts the first parameter.");b.prototype=a;return new b});var A={executeUpi:function(){},serviceName:""},y={getSDKHelper:function(a){return"iOS"===a?z(A,{executeUpi:function(a,b,c,d,e){f(a,"executeSdkApi",{payload:c,command:b},d,e)},serviceName:"upiIssuanceSMASHPlugin"}):z(A,{executeUpi:function(a,b,c,d,e){f(a,b,{payload:c},d,e)},serviceName:"AipsJusPayPlugin"})}},E=function(a,b,c,d){"Enabled"===
d.Status?(a.isJuspaySdkCallEligible=!0,w(a),a.widget.trigger("UPIIssuanceSupportedEvent")):a.widget.trigger("UPIIssuanceNotSupportedEvent")},F=function(a,b,c,d){a.widget.trigger("UPIIssuanceNotSupportedEvent")};return p.extend({isDeviceSignatureCheckEligible:!1,isDeviceSignatureAlreadyChecked:!1,isJuspaySdkCallEligible:!1,isSavedHandleComponentUsable:!1,savedHandleIndexes:[],initialize:function(a,b){if(this.isSavedHandleComponentUsable=b.data.isSavedHandleComponentUsable)e.logCounterMetric({feature:"SelectableUpiSdkCalls",
resource:"_Count"}),e.publishMetrics(),this.sdkCallStartTime=e.getCurrentTime(),q(this,w,D,x)},bindToEvents:function(){var a=this;g.bind(p.prototype.bindToEvents,this).apply();a.widget.on("JuspayCheckDeviceSignatureEvent",a,function(b,c){a.savedHandleIndexes.includes(b)||a.savedHandleIndexes.push(b);a.isDeviceSignatureAlreadyChecked||(a.isDeviceSignatureAlreadyChecked=!0,a.isJuspaySdkCallEligible?a.isDeviceSignatureCheckEligible?B(a,b,c,h,C,x):a.widget.trigger("JuspayHasNoPermissionsEvent"):a.widget.trigger("JuspayErrorEvent"))});
a.widget.on("componentsInitialized",a,function(){k.when("safe-mash").execute(function(b){b&&(d||(d=window.device),m=y.getSDKHelper(d.platform),a.isSavedHandleComponentUsable&&"iOS"===d.platform&&(a.widget.trigger("UPIIssuanceNotSupportedEvent"),f(a,"isUPIIssuanceSupported",{},E,F)))})})}})});l("components/SelectableUpiListItemComponent","component continuable events/InstrumentRowSelectedEvent public-event-registry css-utils components/SimplePaymentOptionListItemComponent lang upi-redirection-util clog events/spinner-events".split(" "),
function(l,g,k,n,e,c,d,m,f,t){return c.extend(g,{selectableUpiContainer:"",upiDisabledApbMessageContainer:"",upiInfoContainer:"",isUpiUsable:!0,instrumentId:"",instrumentType:"",isAPBSelected:!1,savedHandleIndex:"0",isPinChosen:!1,deviceSignature:"",isDeviceSignatureValid:!1,isPermanentDisabled:!0,isAIPSRedirectRequired:!0,redirectUrl:"",returnUrl:"",isUpiIssuanceAPBMultiTenderEnabled:"",isUpiSavedHandleAPBMultiTenderEnabled:!1,clientId:"",isApxReloadEnabled:!1,isUpiRegistrationEnabled:!1,upiPermanentDisabledMessageContainer:"",
httpMethod:"",initialize:function(a,b){this.isUpiUsable=b.data.isUpiUsable;this.instrumentId=b.data.instrumentId;this.instrumentType=b.data.instrumentType;this.selectableUpiContainer=b.data.selectableUpiContainer;this.upiDisabledApbMessageContainer=b.data.upiDisabledApbMessageContainer;this.upiInfoContainer=b.data.upiInfoContainer;this.savedHandleIndex=b.data.savedHandleIndex;this.isPinChosen=b.data.isPinChosen;this.deviceSignature=b.data.deviceSignature;this._toggleUncheckAPBtoEnableUPIMessage(!1);
this._toggleUPIInfoContainer(!1);this.redirectUrl=b.data.redirectUrl;this.returnUrl=b.data.returnUrl;this.isUpiIssuanceAPBMultiTenderEnabled=b.data.isUpiIssuanceAPBMultiTenderEnabled;this.clientId=b.data.clientId;this.isApxReloadEnabled=b.data.isApxReloadEnabled;this.isUpiRegistrationEnabled=b.data.isUpiRegistrationEnabled;this.upiPermanentDisabledMessageContainer=b.data.upiPermanentDisabledMessageContainer;this.isPaylastEligible=b.data.isPaylastEligible;this.isAmazonApp=b.data.isAmazonApp;this.httpMethod=
b.data.httpMethod;this.ignoreClientSideDeviceSignatureCheck=b.data.ignoreClientSideDeviceSignatureCheck;this.isAmazonApp&&!this.ignoreClientSideDeviceSignatureCheck?this.setDisabled(!0):this.isAIPSRedirectRequired=this.isPermanentDisabled=!1;this.isUpiUsable&&n.register(k)},_onInstrumentSelected:function(){this._getContainerElement().addClass("pmts-selected");this._getInstrumentSelectionInputElement().prop("checked",!0);this._toggleUPIInfoContainer(!0);this._triggerBackingInstrumentSelectedEvent();
this.isPaylastEligible&&this._resetOrderTotalComputation()},_onInstrumentDeselected:function(){this._getContainerElement().removeClass("pmts-selected");this._getInstrumentSelectionInputElement().prop("checked",!1);this._toggleUPIInfoContainer(!1)},_isInstrumentSelected:function(){return this._getContainerElement().hasClass("pmts-selected")},_getContainerElement:function(){return this.getDOMElement(this.selectableUpiContainer)},_toggleUPIContainer:function(a){var b=this._getContainerElement();0<b.length&&
e.toggleElement(b,a)},_toggleUncheckAPBtoEnableUPIMessage:function(a){0<this.getDOMElement(this.upiDisabledApbMessageContainer).length&&e.toggleElement(this.getDOMElement(this.upiDisabledApbMessageContainer),a)},_toggleUPIInfoContainer:function(a){0<this.getDOMElement(this.upiInfoContainer).length&&e.toggleElement(this.getDOMElement(this.upiInfoContainer),a)},_toggleUPIPermanentDisabledMessage:function(a){var b=this.getDOMElement(this.upiPermanentDisabledMessageContainer);0<b.length&&e.toggleElement(b,
a)},_triggerBackingInstrumentSelectedEvent:function(){this.widget.trigger("backingInstrumentSelected",{instrumentId:this._getInstrumentId(),instrumentType:this._getInstrumentType(),errors:[],paymentMethod:this.data.paymentMethod,isUpiRedirectionRequired:this.isAIPSRedirectRequired})},_setAPBSelectionChanged:function(a){!this.isUpiUsable||this.isPermanentDisabled||this.isUpiSavedHandleAPBMultiTenderEnabled||(this._isInstrumentSelected()&&a&&(this.setContinuable(!1),this.widget.trigger("PaymentPlanSelected",
{isValid:!1})),this.setDisabled(a),this._toggleUncheckAPBtoEnableUPIMessage(a))},_setDisabled:function(a,b){this.isAIPSRedirectRequired=!(b&&this.isPinChosen);var c=!this.isUpiRegistrationEnabled&&this.isAIPSRedirectRequired;this.isPermanentDisabled=a||c;this.isDeviceSignatureValid=b;this.isUpiSavedHandleAPBMultiTenderEnabled=this.isUpiIssuanceAPBMultiTenderEnabled&&!this.isAIPSRedirectRequired||this.isApxReloadEnabled&&this.isAIPSRedirectRequired;this.setDisabled(this.isPermanentDisabled);this._toggleUPIPermanentDisabledMessage(c);
this._setAPBSelectionChanged(this.isAPBSelected)},_resetOrderTotalComputation:function(){this.widget.trigger("UpdateOrderTotalForIBDEvent",{ibdAmountDisplayed:0});this.widget.trigger("UpdateOrderTotalForNoCostEMIDiscount",{noCostEMIValue:0})},bindToEvents:function(){var a=this;d.bind(c.prototype.bindToEvents,this).apply();a.widget.on(k,this,function(a){a.instrumentId===this._getInstrumentId()?this._onInstrumentSelected():this._onInstrumentDeselected()});a.widget.on("apbSelectionChanged",a,function(b){void 0!==
a.widget.get("apbCheckboxSelected")&&(a.isAPBSelected=b.isSelected,a._setAPBSelectionChanged(a.isAPBSelected))});a.widget.on("JuspayDeviceSignatureMatchesEvent",a,function(b,c){a.isUpiUsable&&a.savedHandleIndex===b&&a._setDisabled(!1,a.deviceSignature===c)});a.widget.on("JuspayDeviceSignatureDoesNotMatchEvent",a,function(b){a.isUpiUsable&&a.savedHandleIndex===b&&a._setDisabled(!1,!1)});a.widget.on("JuspayHasPermissionsEvent",a,function(){a.widget.trigger("JuspayCheckDeviceSignatureEvent",this.savedHandleIndex,
this.deviceSignature)});a.widget.on("JuspayHasNoPermissionsEvent",a,function(){a.isUpiUsable&&a._setDisabled(!1,!1)});a.widget.on("JuspayErrorEvent",a,function(){a._setDisabled(!0,!1)});a.widget.on("UpiRedirectionContinueEvent",a,function(){var b=f.getCurrentTime();a._isInstrumentSelected()&&(a.widget.trigger(t.showSpinner),f.logCounterMetric({feature:"SelectableUpiAipsRedirection",resource:"_Count"}),a.isDeviceSignatureValid?a.isPinChosen||(f.logCounterMetric({feature:"SelectableUpiAipsRedirectionPinNotSet",
resource:"_Count"}),m.upiPinNotSet(a._getInstrumentId(),a.redirectUrl,a.returnUrl,a.clientId,a.httpMethod)?f.logCounterMetric({feature:"SelectableUpiAipsRedirectionPinNotSet",resource:"_SuccessCount"}):f.logCounterMetric({feature:"SelectableUpiAipsRedirectionPinNotSet",resource:"_ErrorCount"}),f.logLatencyMetric({feature:"SelectableUpiAipsRedirectionPinNotSet",resource:"_Latency",startTime:b})):(f.logCounterMetric({feature:"SelectableUpiAipsRedirectionDeviceSignatureMismatch",resource:"_Count"}),
m.upiDeviceFingerprintDoesNotMatch(a._getInstrumentId(),a.redirectUrl,a.returnUrl,a.clientId,a.httpMethod)?f.logCounterMetric({feature:"SelectableUpiAipsRedirectionDeviceSignatureMismatch",resource:"_SuccessCount"}):f.logCounterMetric({feature:"SelectableUpiAipsRedirectionDeviceSignatureMismatch",resource:"_ErrorCount"}),f.logLatencyMetric({feature:"SelectableUpiAipsRedirectionDeviceSignatureMismatch",resource:"_Latency",startTime:b})),f.publishMetrics());return!1});a.widget.on("UPIIssuanceNotSupportedEvent",
a,function(){a._toggleUPIContainer(!1)});a.widget.on("UPIIssuanceSupportedEvent",a,function(){a._toggleUPIContainer(!0)})},bindToElements:function(){var a=this;a.isUpiUsable&&a._getContainerElement().click(function(){a._isInstrumentSelected()||!a.isUpiUsable||a.isPermanentDisabled||a.isAPBSelected&&!a.isUpiSavedHandleAPBMultiTenderEnabled||a._triggerInstrumentRowSelectedEvent()})}})});l("upi-redirection-util",["mash-helper","jQuery"],function(l,g){var k=function(e){try{var c;e.bankCode&&(c={"bank-info":{"bank-code":e.bankCode}});
var d={};e.id&&(d["payment-method-id"]=e.id);c&&(d["payment-method-specific-data"]=c);var m=JSON.stringify({operation:e.operation,"payment-method-details":d,"return-location":e.returnUrl,"client-category":"PURCHASE","client-name":e.clientId}),f=window.btoa(m),k=e.redirectUrl+window.encodeURIComponent(f);if("POST"===e.httpMethod){var a=g("<form></form>").attr({method:"post",action:k});g("body").append(a);a.submit()}else l.navigateToUrl(k);return!0}catch(b){return window.ueLogError&&window.ueLogError(b,
{logLevel:"FATAL",attribution:"upi_redirect_util",message:"Got an exception while generating request body for AIPS redirection"+b.name+", message="+b.message}),n("RequestBody:Generation:Failed"),!1}},n=function(e){window.ue&&"function"===typeof window.ue.count&&window.ue.count("APX:UPI:REDIRECTION:"+e,1)};return{upiRegistration:function(e,c,d,g,f){return c&&d?k({operation:"NEW_REGISTRATION",bankCode:e,redirectUrl:c,returnUrl:d,clientId:g,httpMethod:f}):(n(g+"NEW_REGISTRATIONEmpty:Detail"),!1)},upiPinNotSet:function(e,
c,d,g,f){return c&&d?k({operation:"SET_PIN",id:e,redirectUrl:c,returnUrl:d,clientId:g,httpMethod:f}):(n(g+"SET_PINEmpty:Detail"),!1)},upiDeviceFingerprintDoesNotMatch:function(e,c,d,g,f){return c&&d?k({operation:"RE_REGISTRATION",id:e,redirectUrl:c,returnUrl:d,clientId:g,httpMethod:f}):(n(g+"RE_REGISTRATIONEmpty:Detail"),!1)}}})})();